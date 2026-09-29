import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Replace with your actual Firebase config object
// You can get this from the Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "sportiq-945e8.firebaseapp.com",
  projectId: "sportiq-945e8",
  storageBucket: "sportiq-945e8.firebasestorage.app",
  messagingSenderId: "237905191043",
  appId: "1:237905191043:web:7483f30dde1fb5ffcb3bb6",
  measurementId: "G-F6FM7VHQZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, db, auth };
