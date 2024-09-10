// components/CodeAnalyzer.tsx
"use client"; // 이 라인을 추가
import React, { useState } from "react";
import useAnalysisStore from "@/app/store/analysisStore";

interface CodeAnalyzerProps {
  code: string;
  className?: string;
}
const CodeAnalyzer: React.FC<CodeAnalyzerProps> = ({ code }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setAnalysisResult = useAnalysisStore(
    (state) => state.setAnalysisResult
  );
  const setPostResult = useAnalysisStore((state) => state.postResultFile);
  const analyzeCode = async () => {
    setIsLoading(true);
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
        disabled={isLoading}
      >
        {isLoading ? "검사 중..." : "검사하기"}
      </button>
    </div>
  );
};

export default CodeAnalyzer;
