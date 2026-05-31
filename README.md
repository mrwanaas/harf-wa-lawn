# حرف ولون - Letter and Color Game

A real-time multiplayer Arabic letter game for teams, built with pure HTML/CSS/JS and Firebase Realtime Database.

---

## 🎮 Game Overview

Two teams (Red and Blue) compete to color 28 Arabic letters. A judge asks questions in Arabic, and the first letter of the correct answer is the target letter. Teams buzz in to answer, and correct answers color the letter in their team's color. The team that colors the most letters wins!

---

## 🚀 Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click **"Add project"** and follow the setup wizard
3. Give your project a name (e.g., `harf-wa-lawn`)
4. Disable Google Analytics if you don't need it
5. Click **"Create project"**

### Step 2: Enable Realtime Database

1. In your Firebase project, click **"Build"** → **"Realtime Database"** in the left sidebar
2. Click **"Create Database"**
3. Choose your region (closest to your players)
4. Select **"Start in test mode"** (allows read/write for 30 days, good for testing)
5. Click **"Enable"**

### Step 3: Get Your Firebase Config

1. Go to **Project Settings** (gear icon ⚙️ in the top left)
2. Scroll down to **"Your apps"**
3. If no app exists, click the **Web icon (`</>`)**
4. Register your app with a nickname
5. Copy the `firebaseConfig` object

### Step 4: Update `firebase-config.js`

Open `firebase-config.js` and replace the placeholder values:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### Step 5: Set Database Rules

1. In Firebase Console → **Realtime Database** → **Rules** tab
2. Replace the rules with:

```json
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
```

3. Click **"Publish"**

---

## 🌐 Deploy to GitHub Pages

### Option A: Deploy from Root

1. Create a new GitHub repository
2. Upload all files to the root of the `main` branch
3. Go to **Settings** → **Pages**
4. Set Source to `main` branch, `/ (root)` folder
5. Click **Save**
6. Your game will be available at `https://yourusername.github.io/repository-name/`

### Option B: Deploy from /docs folder

1. Create a `/docs` folder and put all files there
2. Also add an empty `.nojekyll` file in the `/docs` folder
3. In GitHub Pages settings, set source to `main` branch, `/docs` folder

---

## 🎯 How to Play

### Starting a Game

1. **Judge** opens `index.html` and creates a room → gets a 6-digit room code
2. **Players** join via link, QR code, or room code
3. Players choose **Red Team** or **Blue Team**
4. Judge opens `judge.html?room=XXXXXX` to access the control panel

### During the Game

1. Judge clicks **"Generate Question"** (توليد سؤال)
2. Judge sees the question and correct answer (hidden from players)
3. Judge selects which team answers first
4. Judge clicks **"Start Timer"** → 10-second countdown begins for all players
5. First player to press the buzz button on their team gets to answer
6. Player types their answer and submits
7. Judge sees the answer and clicks **Correct** ✅ or **Wrong** ❌
8. If correct → that letter is colored in the team's color
9. If wrong → option to pass to the other team for another 10 seconds
10. If neither team answers → skip to a new question

### Winning

- Game ends when all 28 letters are colored, or the judge manually ends it
- Team with the most letters wins!

---

## 📁 File Structure

```
harf-wa-lawn/
├── index.html          # Home page - room creation and joining
├── player.html         # Player game view
├── judge.html          # Judge control dashboard
├── style.css           # Shared stylesheet (RTL, dark theme)
├── firebase-config.js  # Firebase configuration (update this!)
├── questions.js        # Arabic question bank (200+ questions)
├── app.js              # Shared game logic and Firebase helpers
└── README.md           # This file
```

---

## 🔧 Customization

### Adding More Questions

Edit `questions.js` and add objects to the `QUESTION_BANK` array:

```javascript
{
  question: "سؤالك بالعربية؟",
  answer: "الإجابة",
  firstLetter: "أ",  // First Arabic letter of the answer
  category: "الفئة",
  alternateAnswers: ["إجابة بديلة"] // Optional
}
```

**Important:** Make sure `firstLetter` matches the normalized first letter of the answer. Alef variants (أ، إ، آ، ا) are all treated as "أ", and هـ/ه/ة are treated as "هـ".

### Changing Timer Duration

In `app.js`, find the `startTimer` function call and change `10` to your desired seconds.

### Changing Team Colors

In `style.css`, modify the CSS variables:

```css
--red: #e74c3c;
--blue: #3498db;
```

---

## 🔒 Security Notes

- The Firebase config in `firebase-config.js` is **not secret** — it's safe to expose in client-side code
- The database rules set to "test mode" allow all reads/writes — for production, add proper authentication
- Room codes are 6-digit numbers — short-lived games don't need stricter access control

---

## 📱 Mobile Support

The game is fully responsive and works on:
- iPhone Safari
- Android Chrome
- Desktop browsers (Chrome, Firefox, Edge, Safari)

---

## الإعداد بالعربي

### خطوات الإعداد:

١. إنشاء مشروع Firebase على [console.firebase.google.com](https://console.firebase.google.com/)
٢. تفعيل Realtime Database في وضع الاختبار
٣. نسخ إعدادات Firebase وتحديث ملف `firebase-config.js`
٤. رفع الملفات على GitHub Pages
٥. مشاركة رابط الموقع مع الأصدقاء!

### طريقة اللعب:

- **الحكم** يولّد سؤالاً ويختار الفريق المجيب
- **اللاعبون** يضغطون زر الإجابة أسرع ما يمكن
- من يضغط أولاً يكتب الإجابة
- الإجابة الصحيحة = الحرف يتلوّن بلون الفريق
- الفريق الذي يلوّن أكثر الحروف يفوز! 🏆
