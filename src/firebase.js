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
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBMbD4hMY1yquqP0vgIHbZnm4i5D-6ms1w",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "manodaya.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "manodaya",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "manodaya.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "402526689305",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:402526689305:web:89c5e574be203d29057288",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-19PBX68460"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

