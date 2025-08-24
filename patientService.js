// src/services/patientService.js
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/Config";

export const getPatientById = async (Id) => {
  const q = query(collection(db, "patients"), where("dni", "==", dni));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

// ➕ Agregar nuevo paciente
export const addPatient = async (data) => {
  try {
    await addDoc(collection(db, "patients"), {
      ...data,
      lastUpdate: new Date(),
    });
  } catch (error) {
    console.error("Error al agregar paciente:", error);
    throw error;
  }
};

// 🔎 Obtener paciente por ID
export const getAllPatients = async () => {
  try {
    const ref = doc(db, "patients", id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error("Error al obtener paciente:", error);
    throw error;
  }
};

// ✏️ Actualizar paciente existente con validación
export const updatePatient = async (id, data) => {
  try {
    const ref = doc(db, "patients", id);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) throw new Error("Paciente no encontrado");

    await updateDoc(ref, {
      ...data,
      lastUpdate: new Date(),
    });
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    throw error;
  }
};

// ❌ Eliminar paciente
export const deletePatient = async (id) => {
  try {
    const ref = doc(db, "patients", id);
    await deleteDoc(ref);
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};
