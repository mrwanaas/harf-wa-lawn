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
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
