// ============================================================
// SHARED GAME LOGIC - FULLY FIXED
// ============================================================

let db = null;
let firebaseInitPromise = null;

async function initFirebase() {
  if (firebaseInitPromise) return firebaseInitPromise;
  
  firebaseInitPromise = new Promise(async (resolve, reject) => {
    try {
      let attempts = 0;
      while (!window.firebaseModules && attempts < 50) {
        await new Promise(r => setTimeout(r, 100));
        attempts++;
      }
      if (!window.firebaseModules) throw new Error("Firebase modules not loaded");
      
      const { initializeApp } = window.firebaseModules;
      const { getDatabase, ref, set, get, update, onValue, push, remove, serverTimestamp } = window.firebaseModules;
      
      const app = initializeApp(FIREBASE_CONFIG);
      db = getDatabase(app);
      
      window.db = db;
      window.firebaseRef = ref;
      window.firebaseSet = set;
      window.firebaseGet = get;
      window.firebaseUpdate = update;
      window.firebaseOnValue = onValue;
      window.firebasePush = push;
      window.firebaseRemove = remove;
      window.firebaseServerTimestamp = serverTimestamp;
      
      console.log("Firebase ready");
      resolve(true);
    } catch (err) {
      console.error("Firebase init failed:", err);
      reject(err);
    }
  });
  return firebaseInitPromise;
}

async function ensureFirebase() {
  if (db) return;
  await initFirebase();
}

function generateRoomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function createRoom(roomCode, judgeName) {
  await ensureFirebase();
  const { ref, set } = window.firebaseModules;
  
  const letters = {};
  const ARABIC_LETTERS = ['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','هـ','و','ي'];
  ARABIC_LETTERS.forEach(letter => {
    letters[encodeLetterKey(letter)] = { letter, owner: null };
  });

  const initialState = {
    roomCode,
    status: 'waiting',
    judge: { name: judgeName, online: true },
    teams: {
      red: { score: 0, players: {} },
      blue: { score: 0, players: {} }
    },
    letters,
    currentQuestion: null,
    currentRound: {
      activeTeam: null,
      timerEnd: null,
      timerActive: false,
      buzzedPlayer: null,
      buzzedTeam: null,
      playerAnswer: null,
      phase: 'idle'
    },
    createdAt: Date.now()
  };

  await set(ref(db, `rooms/${roomCode}`), initialState);
  return initialState;
}

async function joinRoom(roomCode) {
  await ensureFirebase();
  const { ref, get } = window.firebaseModules;
  const snapshot = await get(ref(db, `rooms/${roomCode}`));
  return snapshot.exists() ? snapshot.val() : null;
}

async function addPlayerToRoom(roomCode, team, playerName, playerId) {
  await ensureFirebase();
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `rooms/${roomCode}/teams/${team}/players/${playerId}`), {
    name: playerName,
    online: true,
    joinedAt: Date.now()
  });
}

function subscribeToRoom(roomCode, callback) {
  if (!db) return () => {};
  const { ref, onValue } = window.firebaseModules;
  const roomRef = ref(db, `rooms/${roomCode}`);
  return onValue(roomRef, (snapshot) => {
    if (snapshot.exists()) callback(snapshot.val());
  });
}

async function setCurrentQuestion(roomCode, question) {
  await ensureFirebase();
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `rooms/${roomCode}/currentQuestion`), question);
  await set(ref(db, `rooms/${roomCode}/currentRound`), {
    activeTeam: null, timerEnd: null, timerActive: false,
    buzzedPlayer: null, buzzedTeam: null, playerAnswer: null, phase: 'idle'
  });
}

async function startTimer(roomCode, team, durationSeconds = 10) {
  await ensureFirebase();
  const { ref, set } = window.firebaseModules;
  const timerEnd = Date.now() + durationSeconds * 1000;
  await set(ref(db, `rooms/${roomCode}/currentRound`), {
    activeTeam: team,  // null means both teams can buzz
    timerEnd,
    timerActive: true,
    buzzedPlayer: null,
    buzzedTeam: null,
    playerAnswer: null,
    phase: 'active'
  });
}

async function buzzIn(roomCode, playerName, team) {
  await ensureFirebase();
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `rooms/${roomCode}/currentRound`), {
    buzzedPlayer: playerName,   // make sure this is a string
    buzzedTeam: team,
    timerActive: false,
    phase: 'buzzed'
  });
}

async function submitAnswer(roomCode, answer) {
  await ensureFirebase();
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `rooms/${roomCode}/currentRound`), {
    playerAnswer: answer,
    phase: 'answered'
  });
}

async function markLetterWon(roomCode, letter, team) {
  await ensureFirebase();
  const { ref, set, update, get } = window.firebaseModules;
  const key = encodeLetterKey(letter);
  await set(ref(db, `rooms/${roomCode}/letters/${key}`), { letter, owner: team });
  const snapshot = await get(ref(db, `rooms/${roomCode}`));
  if (snapshot.exists()) {
    const state = snapshot.val();
    const score = Object.values(state.letters || {}).filter(l => l && l.owner === team).length;
    await update(ref(db, `rooms/${roomCode}/teams/${team}`), { score });
  }
}

async function getGameState(roomCode) {
  await ensureFirebase();
  const { ref, get } = window.firebaseModules;
  const snapshot = await get(ref(db, `rooms/${roomCode}`));
  return snapshot.exists() ? snapshot.val() : null;
}

async function resetRound(roomCode) {
  await ensureFirebase();
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `rooms/${roomCode}/currentRound`), {
    activeTeam: null, timerEnd: null, timerActive: false,
    buzzedPlayer: null, buzzedTeam: null, playerAnswer: null, phase: 'idle'
  });
  await set(ref(db, `rooms/${roomCode}/currentQuestion`), null);
}

async function updateGameState(roomCode, updates) {
  await ensureFirebase();
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `rooms/${roomCode}`), updates);
}

async function endGame(roomCode) {
  await ensureFirebase();
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `rooms/${roomCode}`), { status: 'ended' });
}

function encodeLetterKey(letter) {
  const map = { 'أ':'alef','ب':'ba','ت':'ta','ث':'tha','ج':'jeem','ح':'ha','خ':'kha','د':'dal','ذ':'dhal','ر':'ra','ز':'zay','س':'seen','ش':'sheen','ص':'sad','ض':'dad','ط':'taa','ظ':'dha','ع':'ayn','غ':'ghayn','ف':'fa','ق':'qaf','ك':'kaf','ل':'lam','م':'meem','ن':'noon','هـ':'haa','و':'waw','ي':'ya' };
  return map[letter] || letter;
}

function getTimeRemaining(timerEnd) {
  if (!timerEnd) return 0;
  return Math.max(0, Math.ceil((timerEnd - Date.now()) / 1000));
}

function showToast(message, type = 'info', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('visible'), 10);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function saveToStorage(key, value) {
  try { localStorage.setItem(`harf-lawn-${key}`, JSON.stringify(value)); } catch(e) {}
}
function loadFromStorage(key) {
  try { return JSON.parse(localStorage.getItem(`harf-lawn-${key}`)); } catch(e) { return null; }
}
function getOrCreatePlayerId() {
  let pid = loadFromStorage('playerId');
  if (!pid) {
    pid = 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    saveToStorage('playerId', pid);
  }
  return pid;
}

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
function buildUrl(page, params = {}) {
  const url = new URL(page, window.location.href);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}

function renderLetterGrid(containerId, letters, highlightLetter = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const ARABIC_LETTERS = ['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','هـ','و','ي'];
  container.innerHTML = '';
  ARABIC_LETTERS.forEach(letter => {
    const key = encodeLetterKey(letter);
    const letterData = letters ? letters[key] : null;
    const owner = letterData ? letterData.owner : null;
    const cell = document.createElement('div');
    cell.className = 'letter-cell';
    if (owner === 'red') cell.classList.add('owned-red');
    else if (owner === 'blue') cell.classList.add('owned-blue');
    if (highlightLetter === letter) cell.classList.add('highlighted');
    cell.textContent = letter;
    container.appendChild(cell);
  });
}

function hideReconnecting() {
  const el = document.getElementById('reconnect-overlay');
  if (el) el.style.display = 'none';
}
function isValidRoomCode(code) {
  return /^\d{6}$/.test(code);
}

// Audio
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}
function playBeep(freq = 440, duration = 0.15, type = 'sine') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = type;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}
function playBuzz() { playBeep(200,0.2,'sawtooth'); setTimeout(()=>playBeep(150,0.3,'sawtooth'),100); }
function playTick() { playBeep(880,0.05,'square'); }
function playCelebration() { const notes=[523,659,784,1047]; notes.forEach((f,i)=>setTimeout(()=>playBeep(f,0.15),i*120)); }
function playWrong() { playBeep(200,0.4,'sawtooth'); }

// Initialize
initFirebase().catch(console.error);
