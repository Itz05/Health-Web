import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchDocumentById = async (collection, id) => {
  const ref = doc(db, collection, id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? snapshot.data() : null;
};
