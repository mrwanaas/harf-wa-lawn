// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (e.g., "harf-wa-lawn")
// 3. Enable Realtime Database (choose "Start in test mode" for development)
// 4. Go to Project Settings > General > Your apps > Web app
// 5. Register your app and copy the firebaseConfig object below
// 6. Replace ALL the placeholder values below with your actual Firebase config
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCmkl22l6sOW0kULXMrVGJJUKavZmCik44",
  authDomain: "game-87f69.firebaseapp.com",
  databaseURL: "https://game-87f69-default-rtdb.firebaseio.com",
  projectId: "game-87f69",
  storageBucket: "game-87f69.firebasestorage.app",
  messagingSenderId: "358037442791",
  appId: "1:358037442791:web:48af67281445f5482f1242"
};

// ============================================================
// FIREBASE REALTIME DATABASE RULES
// Copy these rules into: Firebase Console > Realtime Database > Rules
// ============================================================
/*
{
  "rules": {
    "rooms": {
      "$roomCode": {
        ".read": true,
        ".write": true
      }
    }
  }
}
*/
