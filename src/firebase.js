import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkHtZAwqPcnUrGUX_rYvgyUdbmFrBDPGA",
    authDomain: "clone-35a0a.firebaseapp.com",
    projectId: "clone-35a0a",
    storageBucket: "clone-35a0a.firebasestorage.app",
    messagingSenderId: "902525967612",
    appId: "1:902525967612:web:1b78cc3c03f260da548b79",
    measurementId: "G-Y06W8Z07SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();