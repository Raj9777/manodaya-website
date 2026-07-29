// MANODAYA Firebase Configuration
// =====================================================================
// IMPORTANT: Replace the values below with your actual Firebase config.
// Steps to get your config:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (e.g., "manodaya-crm")
// 3. Click the </> (Web) icon to add a Web App
// 4. Copy the firebaseConfig object and paste the values below
// 5. In the Firebase console, go to Firestore Database → Create Database
//    (Start in "test mode" for now, you can secure it later)
// =====================================================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
