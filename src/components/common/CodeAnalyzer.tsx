"use client"; // 이 라인을 추가
import React, { useState } from "react";
import useAnalysisStore from "@/app/store/analysisStore";
import AlertUILoding from "./AlertUILoding";
import ResultUI from "./ResultUI";
interface CodeAnalyzerProps {
  code: string;
  className?: string;
}
const CodeAnalyzer: React.FC<CodeAnalyzerProps> = ({ code }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setAnalysisResult = useAnalysisStore(
    (state) => state.setAnalysisResult
  );
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const setPostResult = useAnalysisStore((state) => state.postResultFile);
  const analyzeCode = async () => {
    setIsLoading(true);
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
      setPostResult();
    } catch (error) {
      console.error("Failed to analyze code:", error);
      setAnalysisResult("Failed to analyze the code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ml-[10px] mt-[20px] w-[246px] h-[56px] rounded-lg p-4 py-5 gap-[10px] bg-[#6100FF]">
      <button
        className="w-[100px] h-[30px] font-inter font-semibold text-[24px] tracking-[-0.01em] text-[white]"
        onClick={analyzeCode}
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
  );
};

export default CodeAnalyzer;