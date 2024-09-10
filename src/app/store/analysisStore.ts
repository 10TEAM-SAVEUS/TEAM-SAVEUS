// store/analysisStore.ts
import { postAnalizedFile } from "@/firebase/data_adding";
import create from "zustand";

interface AnalysisState {
  username: string;
  reponame: string;
  path: string;
  filename: string;
  analysisResult: string;
  setAnalysisResult: (result: string) => void;
  setFileInfo: (
    username: string,
    reponame: string,
    path: string,
    filename: string
  ) => void;
  postResultFile: () => void;
}

const useAnalysisStore = create<AnalysisState>((set, get) => ({
  analysisResult: "",
  username: "",
  reponame: "",
  path: "",
  filename: "",
  setAnalysisResult: (result: string) => set({ analysisResult: result }),
  setFileInfo: (
    username: string,
    reponame: string,
    path: string,
    filename: string
  ) =>
    set({
      username: username,
      reponame: reponame,
      path: path,
      filename: filename,
    }),
  postResultFile: async () => {
    const { username, reponame, path, filename, analysisResult } = get(); // 현재 상태를 가져옴
    console.log(username, reponame, path, filename, analysisResult);
    await postAnalizedFile(username, reponame, path, filename, analysisResult); // 상태 값을 활용하여 로직 실행
  },
}));

export default useAnalysisStore;
