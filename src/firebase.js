import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlaNU0ATonYL3wKZXx2Z0bJkmH9sT6A1U",
  authDomain: "react-notes-78c35.firebaseapp.com",
  projectId: "react-notes-78c35",
  storageBucket: "react-notes-78c35.appspot.com",
  messagingSenderId: "1049334128174",
  appId: "1:1049334128174:web:853d250f4dc14344ee89bf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");