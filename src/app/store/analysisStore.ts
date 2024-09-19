// store/analysisStore.ts
import { postAnalizedFile } from "@/firebase/data_adding";
import create from "zustand";

interface AnalysisState {
  username: string;
  reponame: string;
  filelist: { path: string; name: string; download_url: string }[];
  analysisResult: string[];
  setAnalysisResult: (result: string) => void;
  setFileInfo: (
    username: string,
    reponame: string,
    filelist: { path: string; name: string; download_url: string }[]
  ) => void;
  postResultFile: () => void;
}

const useAnalysisStore = create<AnalysisState>((set, get) => ({
  analysisResult: [],
  username: "",
  reponame: "",
  filelist: [],
  setAnalysisResult: (result: string) => {
    const results = get().analysisResult;
    set({ analysisResult: [...results, result] });
  },
  setFileInfo: (
    username: string,
    reponame: string,
    filelist: { path: string; name: string; download_url: string }[]
  ) =>
    set({
      username: username,
      reponame: reponame,
      filelist: filelist,
    }),
  postResultFile: async () => {
    const { username, reponame, filelist, analysisResult } = get(); // 현재 상태를 가져옴
    // console.log(username, reponame, filelist, analysisResult);
    // 분석된 파일들 파이어스토어에 일괄저장
    await Promise.all(
      filelist.map(
        async (file, index) =>
          await postAnalizedFile(
            username,
            reponame,
            file.path,
            file.name,
            analysisResult[index]
          )
      )
    );
    // 상태 값을 활용하여 로직 실행
    set({ analysisResult: [] });
  },
}));

export default useAnalysisStore;

interface ModalState {
  onModal: boolean;
  onInspection: boolean;
  setOnModal: (changeState: boolean) => void;
  getOnModal: () => boolean;
  setOnInspection: (changeState: boolean) => void;
  getOnInspection: () => boolean;
}

export const useModalState = create<ModalState>((set, get) => ({
  onModal: false,
  onInspection: false,
  setOnModal: (changeState: boolean) => {
    set({ onModal: changeState });
  },
  getOnModal: () => get().onModal,
  setOnInspection: (changeState: boolean) => {
    set({ onInspection: changeState });
  },
  getOnInspection: () => get().onInspection,
}));
