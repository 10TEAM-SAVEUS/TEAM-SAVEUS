"use client"; // 이 라인을 추가
import React, { useState } from "react";
import useAnalysisStore, { useModalState } from "@/app/store/analysisStore";
import AlertUILoding from "./AlertUILoding";
import ResultUI from "./ResultUI";
import { getFile } from "@/fileDownload";
import { useRouter } from "next/navigation";
import FileListModal from "../modal/FileListModal";
// interface CodeAnalyzerProps {
//   code: string;
//   className?: string;
// }
const CodeAnalyzer: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setAnalysisResult = useAnalysisStore(
    (state) => state.setAnalysisResult
  );
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const setPostResult = useAnalysisStore((state) => state.postResultFile);

  const fileList = useAnalysisStore((state) => state.filelist);

  const router = useRouter();

  // 모달 상태관리
  const setModal = useModalState((state) => state.setOnModal);
  const getModal = useModalState((state) => state.getOnModal());
  // 검사 명령 상태관리
  const setInspection = useModalState((state) => state.setOnInspection);
  const getInspection = useModalState((state) => state.getOnInspection());

  const analyzefileList = async (
    fileList: {
      path: string;
      name: string;
      download_url: string;
    }[]
  ) => {
    // console.log(fileList);
    setIsLoading(true);
    await Promise.all(
      fileList.map(async (file) => {
        const code = await getFile(file.download_url);
        if (code) await analyzeCode(code);
        else {
          console.error("코드를 다운로드 받는 중 누락이 되었습니다!!");
          throw new Error("코드를 다운로드 받는 중 누락이 되었습니다!!");
        }
      })
    );
    setPostResult();
    setIsLoading(false);
    setIsComplete(true);
    router.refresh();
  };

  const analyzeCode = async (code: string) => {
    setIsComplete(false);
    try {
      const response = await fetch("/api/analyzeCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnalysisResult(data.result || "No vulnerabilities found.");
    } catch (error) {
      console.error("Failed to analyze code:", error);
      setAnalysisResult("Failed to analyze the code. Please try again.");
    } finally {
    }
  };

  if (getInspection) {
    setInspection(false);
    analyzefileList(fileList);
  }
  return (
    <>
      {getModal && (
        <div className="absolute top-0 left-0">
          <FileListModal filelist={fileList} />
        </div>
      )}
      <div className="flex justify-center items-center ml-[10px] mt-[20px] w-[246px] h-[56px] rounded-lg p-4 py-5 gap-[10px] bg-[#6100FF]">
        <button
          className="w-[100px] h-[30px] font-inter font-semibold text-[24px] tracking-[-0.01em] text-[white]"
          onClick={() => {
            setModal(true);
          }}
        >
          검사하기
        </button>

        {isLoading && (
          <div className=" absolute top-[495px] right-[55px]">
            <AlertUILoding />
          </div>
        )}
        {!isLoading && isComplete && (
          <div className="absolute top-[495px] right-[55px]">
            <ResultUI />
          </div>
        )}
      </div>
    </>
  );
};

export default CodeAnalyzer;
