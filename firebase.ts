import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7c9YpcdPvzoQRJuc2S8EIn9_ii3baXlQ",
    authDomain: "notion-clone-86720.firebaseapp.com",
    projectId: "notion-clone-86720",
    storageBucket: "notion-clone-86720.firebasestorage.app",
    messagingSenderId: "845845161043",
    appId: "1:845845161043:web:92b83c319ffae21e8592a6"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);

  export {db};