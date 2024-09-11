import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/setting";

export async function checkIfRepoHasFiles(username: string, reponame: string) {
  const collectionRef = collection(
    db,
    "users",
    username,
    "repos",
    reponame,
    "_"
  );

  const querySnapshot = await getDocs(collectionRef);

  // 경로에 문서가 하나라도 존재하면 true 반환
  return !querySnapshot.empty;
}
