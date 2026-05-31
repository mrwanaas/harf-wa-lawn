// ============================================================
// SHARED GAME LOGIC AND FIREBASE HELPERS
// ============================================================

// Initialize Firebase
let db;
let currentRoom = null;
let currentRole = null; // 'red', 'blue', 'judge'
let currentPlayerName = null;
let gameStateListener = null;
let timerInterval = null;
let timerEndTime = null;

// Firebase database paths
const ROOMS_PATH = 'rooms';

function getRoomPath(roomCode) {
  return `${ROOMS_PATH}/${roomCode}`;
}

// ============================================================
// FIREBASE INITIALIZATION
// ============================================================
function initFirebase() {
  try {
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
    return true;
  } catch (e) {
    console.error('Firebase init error:', e);
    return false;
  }
}

// ============================================================
// ROOM MANAGEMENT
// ============================================================
function generateRoomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function createRoom(roomCode, judgeName) {
  const initialState = {
    roomCode,
    status: 'waiting', // waiting, playing, ended
    judge: { name: judgeName, online: true },
    teams: {
      red: { score: 0, players: {} },
      blue: { score: 0, players: {} }
    },
    letters: {},
    currentQuestion: null,
    currentRound: {
      activeTeam: null,
      timerEnd: null,
      timerActive: false,
      buzzedPlayer: null,
      buzzedTeam: null,
      playerAnswer: null,
      phase: 'idle' // idle, active, buzzed, passed, ended
    },
    createdAt: Date.now()
  };

  // Initialize all 28 letters
  const letters = ['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','هـ','و','ي'];
  letters.forEach(letter => {
    initialState.letters[encodeLetterKey(letter)] = { letter, owner: null };
  });

  const { ref, set } = window.firebaseModules;
  await set(ref(db, getRoomPath(roomCode)), initialState);
  return initialState;
}

async function joinRoom(roomCode) {
  const { ref, get } = window.firebaseModules;
  const snapshot = await get(ref(db, getRoomPath(roomCode)));
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return null;
}

async function addPlayerToRoom(roomCode, team, playerName, playerId) {
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `${getRoomPath(roomCode)}/teams/${team}/players/${playerId}`), {
    name: playerName,
    online: true,
    joinedAt: Date.now()
  });
}

function subscribeToRoom(roomCode, callback) {
  const { ref, onValue } = window.firebaseModules;
  const roomRef = ref(db, getRoomPath(roomCode));
  const unsubscribe = onValue(roomRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });
  return unsubscribe;
}

// ============================================================
// GAME STATE UPDATES
// ============================================================
async function updateGameState(roomCode, updates) {
  const { ref, update } = window.firebaseModules;
  await update(ref(db, getRoomPath(roomCode)), updates);
}

async function setCurrentQuestion(roomCode, question) {
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `${getRoomPath(roomCode)}/currentQuestion`), question);
  await set(ref(db, `${getRoomPath(roomCode)}/currentRound`), {
    activeTeam: null,
    timerEnd: null,
    timerActive: false,
    buzzedPlayer: null,
    buzzedTeam: null,
    playerAnswer: null,
    phase: 'idle'
  });
}

async function startTimer(roomCode, team, durationSeconds = 10) {
  const { ref, set } = window.firebaseModules;
  const timerEnd = Date.now() + (durationSeconds * 1000);
  await set(ref(db, `${getRoomPath(roomCode)}/currentRound`), {
    activeTeam: team,
    timerEnd,
    timerActive: true,
    buzzedPlayer: null,
    buzzedTeam: null,
    playerAnswer: null,
    phase: 'active'
  });
}

async function buzzIn(roomCode, playerName, team) {
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `${getRoomPath(roomCode)}/currentRound`), {
    buzzedPlayer: playerName,
    buzzedTeam: team,
    timerActive: false,
    phase: 'buzzed'
  });
}

async function submitAnswer(roomCode, answer) {
  const { ref, update } = window.firebaseModules;
  await update(ref(db, `${getRoomPath(roomCode)}/currentRound`), {
    playerAnswer: answer,
    phase: 'answered'
  });
}

async function markLetterWon(roomCode, letter, team) {
  const { ref, set, update } = window.firebaseModules;
  const key = encodeLetterKey(letter);
  await set(ref(db, `${getRoomPath(roomCode)}/letters/${key}`), {
    letter,
    owner: team
  });
  // Update score
  const state = await getGameState(roomCode);
  if (state) {
    const score = Object.values(state.letters || {}).filter(l => l.owner === team).length;
    await update(ref(db, `${getRoomPath(roomCode)}/teams/${team}`), { score });
  }
}

async function getGameState(roomCode) {
  const { ref, get } = window.firebaseModules;
  const snapshot = await get(ref(db, getRoomPath(roomCode)));
  return snapshot.exists() ? snapshot.val() : null;
}

async function resetRound(roomCode) {
  const { ref, set } = window.firebaseModules;
  await set(ref(db, `${getRoomPath(roomCode)}/currentRound`), {
    activeTeam: null,
    timerEnd: null,
    timerActive: false,
    buzzedPlayer: null,
    buzzedTeam: null,
    playerAnswer: null,
    phase: 'idle'
  });
  await set(ref(db, `${getRoomPath(roomCode)}/currentQuestion`), null);
}

async function endGame(roomCode) {
  const { ref, update } = window.firebaseModules;
  await update(ref(db, getRoomPath(roomCode)), { status: 'ended' });
}

// ============================================================
// LETTER KEY ENCODING (Firebase doesn't allow some chars in keys)
// ============================================================
function encodeLetterKey(letter) {
  const map = {
    'أ': 'alef', 'ب': 'ba', 'ت': 'ta', 'ث': 'tha', 'ج': 'jeem',
    'ح': 'ha', 'خ': 'kha', 'د': 'dal', 'ذ': 'dhal', 'ر': 'ra',
    'ز': 'zay', 'س': 'seen', 'ش': 'sheen', 'ص': 'sad', 'ض': 'dad',
    'ط': 'taa', 'ظ': 'dha', 'ع': 'ayn', 'غ': 'ghayn', 'ف': 'fa',
    'ق': 'qaf', 'ك': 'kaf', 'ل': 'lam', 'م': 'meem', 'ن': 'noon',
    'هـ': 'haa', 'و': 'waw', 'ي': 'ya'
  };
  return map[letter] || letter;
}

function decodeLetterKey(key) {
  const map = {
    'alef': 'أ', 'ba': 'ب', 'ta': 'ت', 'tha': 'ث', 'jeem': 'ج',
    'ha': 'ح', 'kha': 'خ', 'dal': 'د', 'dhal': 'ذ', 'ra': 'ر',
    'zay': 'ز', 'seen': 'س', 'sheen': 'ش', 'sad': 'ص', 'dad': 'ض',
    'taa': 'ط', 'dha': 'ظ', 'ayn': 'ع', 'ghayn': 'غ', 'fa': 'ف',
    'qaf': 'ق', 'kaf': 'ك', 'lam': 'ل', 'meem': 'م', 'noon': 'ن',
    'haa': 'هـ', 'waw': 'و', 'ya': 'ي'
  };
  return map[key] || key;
}

// ============================================================
// TIMER UTILITIES
// ============================================================
function getTimeRemaining(timerEnd) {
  if (!timerEnd) return 0;
  const remaining = Math.ceil((timerEnd - Date.now()) / 1000);
  return Math.max(0, remaining);
}

// ============================================================
// SOUND EFFECTS (Web Audio API)
// ============================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {}
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
  } catch (e) {}
}

function playBuzz() {
  playBeep(200, 0.2, 'sawtooth');
  setTimeout(() => playBeep(150, 0.3, 'sawtooth'), 100);
}

function playTick() {
  playBeep(880, 0.05, 'square');
}

function playCelebration() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    setTimeout(() => playBeep(freq, 0.15), i * 120);
  });
}

function playWrong() {
  playBeep(200, 0.4, 'sawtooth');
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container') || createToastContainer();
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

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ============================================================
// LOCAL STORAGE HELPERS
// ============================================================
function saveToStorage(key, value) {
  try { localStorage.setItem(`harf-lawn-${key}`, JSON.stringify(value)); } catch(e) {}
}

function loadFromStorage(key) {
  try {
    const val = localStorage.getItem(`harf-lawn-${key}`);
    return val ? JSON.parse(val) : null;
  } catch(e) { return null; }
}

// ============================================================
// PLAYER ID GENERATOR
// ============================================================
function getOrCreatePlayerId() {
  let pid = loadFromStorage('playerId');
  if (!pid) {
    pid = 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    saveToStorage('playerId', pid);
  }
  return pid;
}

// ============================================================
// URL PARAMETER HELPERS
// ============================================================
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function buildUrl(page, params = {}) {
  const url = new URL(page, window.location.href);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}

// ============================================================
// LETTER GRID RENDERER
// ============================================================
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
    cell.dataset.letter = letter;
    container.appendChild(cell);
  });
}

// ============================================================
// DISCONNECTION OVERLAY
// ============================================================
function showReconnecting() {
  let overlay = document.getElementById('reconnect-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'reconnect-overlay';
    overlay.innerHTML = '<div class="reconnect-box"><div class="spinner"></div><p>جاري إعادة الاتصال...</p></div>';
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'flex';
}

function hideReconnecting() {
  const overlay = document.getElementById('reconnect-overlay');
  if (overlay) overlay.style.display = 'none';
}

// ============================================================
// VALIDATE ROOM CODE
// ============================================================
function isValidRoomCode(code) {
  return /^\d{6}$/.test(code);
}
