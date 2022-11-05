import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdPkmcbkO7frK-VtJtq6g4pDa8SKYQdaM",
  authDomain: "music-764a6.firebaseapp.com",
  projectId: "music-764a6",
  storageBucket: "music-764a6.appspot.com",
  messagingSenderId: "756209128234",
  appId: "1:756209128234:web:956a5c58e5b329a6cc4453",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
