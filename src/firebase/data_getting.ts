import { doc, getDoc } from "firebase/firestore";
import { db } from "./setting";

export const getData = async () => {
  const docRef = doc(db, "foopky", "repos", "vocalist", "info");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const existAnalyzedCode = async (
  username: string,
  reponame: string,
  path: string,
  filename: string
) => {
  const encodedPath = path !== "" ? path.replace(/\//g, "_") : "_"; // Firestore 경로를 안전하게 사용하기 위해 /를 _로 대체
  const docRef = doc(
    db,
    "users",
    username,
    "repos",
    reponame,
    encodedPath,
    filename
  );
  // console.log("users", username, "repos", reponame, encodedPath, filename);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

export const getAnalyzedCode = async (
  username: string,
  reponame: string,
  path: string,
  filename: string
) => {
  const encodedPath = path !== "" ? path.replace(/\//g, "_") : "_"; // Firestore 경로를 안전하게 사용하기 위해 /를 _로 대체
  const docRef = doc(
    db,
    "users",
    username,
    "repos",
    reponame,
    encodedPath,
    filename
  );
  console.log(
    "getAnalizedCode:",
    "users",
    username,
    "repos",
    reponame,
    encodedPath,
    filename
  );
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
