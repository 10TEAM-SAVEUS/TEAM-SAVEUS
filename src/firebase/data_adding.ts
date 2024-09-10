import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./setting";
import { TRepoList } from "@/type/type";

export async function postRepoList(username: string, repolist: TRepoList) {
  try {
    repolist.map(async (repo) => {
      const docRef = doc(
        collection(db, "users", username, "repos", repo.name, "info"),
        "new"
      );
      await setDoc(docRef, {
        created_at: repo.created_at,
      });
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function postAnalizedFile(
  username: string,
  reponame: string,
  path: string,
  filename: string,
  result: string
) {
  try {
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
    await setDoc(docRef, {
      result: result,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
