// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM4on_17-Belmvp3cdnQa8KgFC9Z7ILKw",
  authDomain: "health-app-3a5f7.firebaseapp.com",
  projectId: "health-app-3a5f7",
  storageBucket: "health-app-3a5f7.firebasestorage.appspot.com", // ← corregido: .app → .appspot.com
  messagingSenderId: "890848783337",
  appId: "1:890848783337:web:c2e874ce74322020997978",
  measurementId: "G-C129Y23Y7N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
