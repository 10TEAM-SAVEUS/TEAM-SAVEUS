import { doc, getDoc } from "firebase/firestore";
import { db } from "./setting";

export const getData = async () => {
  const docRef = doc(db, "foopky", "repos", "vocalist", "info");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
