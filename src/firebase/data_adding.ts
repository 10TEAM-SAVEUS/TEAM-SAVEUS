import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./setting";
import { TRepoList } from "@/type/type";
export default async function postTest() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// 하위 컬렉션 추가하기
// const docRef = doc(collection(db, [컬렉션명], [도큐멘트명], [하위 컬렉션명]));
// await setDoc(docRef, [저장할 데이터]);
export async function postRepoList(username: string, repolist: TRepoList) {
  try {
    repolist.map(async (repo) => {
      const docRef = doc(collection(db, username, "repos", repo.name), "info");
      await setDoc(docRef, {
        created_at: repo.created_at,
      });
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// DB 구조
// username/repos/reponame(collection)
// username/scrap/vulDB,repos
