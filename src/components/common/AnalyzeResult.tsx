"use client";
import React from "react";
import useAnalysisStore from "@/app/store/analysisStore";

const AnalysisResults: React.FC = () => {
  const analysisResult = useAnalysisStore((state) => state.analysisResult);

  // 결과를 나누는 함수
  const parseResult = (result: string) => {
    if (!result) return { vulnerabilities: "", fixes: "", exampleCode: "" };

    // 결과를 줄 단위로 나누고, 앞뒤 공백 제거
    const lines = result
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // 각 항목 추출
    const vulnerabilities =
      lines.find((line) => line.startsWith("1. "))?.replace(/^1\. /, "") || "취약점 정보가 없습니다.";
    const fixes = lines.find((line) => line.startsWith("2. "))?.replace(/^2\. /, "") || "수정 방안 정보가 없습니다.";
    const exampleCode =
      lines.slice(lines.findIndex((line) => line.startsWith("3. ")) + 1).join("\n") || "수정된 코드 정보가 없습니다.";

    return { vulnerabilities, fixes, exampleCode };
  };

  // 분석 결과가 있을 때만 파싱 및 렌더링
  const { vulnerabilities, fixes, exampleCode } = parseResult(analysisResult);

  // analysisResult가 있을 때만 div를 렌더링
  if (!analysisResult) return null;

  return (
    <div className="analysis-results  bg-[#FFF3F3] p-4 rounded-lg overflow-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#FF6D6D]">1. 주요 취약점</h2>
        <p className="text-base whitespace-pre-wrap">{vulnerabilities}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">2. 수정 제안</h2>
        <p className="text-base whitespace-pre-wrap">{fixes}</p>
      </div>
      <div className="mb-4 bg-[#444444] rounded-lg">
        <h2 className=" text-white font-semibold text-[24px]">3. 수정된 코드 예시</h2>
        <pre className="text-white p-2 rounded-md whitespace-pre-wrap">{exampleCode}</pre>
      </div>
    </div>
  );
};

export default AnalysisResults;
