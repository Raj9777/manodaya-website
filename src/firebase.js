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
  apiKey: "AIzaSyBMbD4hMY1yquqP0vgIHbZnm4i5D-6ms1w",
  authDomain: "manodaya.firebaseapp.com",
  projectId: "manodaya",
  storageBucket: "manodaya.firebasestorage.app",
  messagingSenderId: "402526689305",
  appId: "1:402526689305:web:89c5e574be203d29057288",
  measurementId: "G-19PBX68460"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
