// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGbnpwfZCni3tlM5RfJJ1FfU4NL24-zAY",
  authDomain: "app-med-3212a.firebaseapp.com",
  projectId: "app-med-3212a",
  storageBucket: "app-med-3212a.appspot.com", // ← corregido: .app → .appspot.com
  messagingSenderId: "592495798272",
  appId: "1:592495798272:web:55741d336dce1f238650e5",
  measurementId: "G-GJ8D85ELK6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
