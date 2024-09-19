"use client";
import React from "react";
import useAnalysisStore from "@/app/store/analysisStore";

const AnalysisResults: React.FC = () => {
  const analysisResult = useAnalysisStore((state) => state.analysisResult);

  const parseResult = (result: string) => {
    if (!result) return { vulnerabilities: "", fixes: "", exampleCode: "" };

    const lines = result
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const vulnerabilities =
      lines.find((line) => line.startsWith("1. "))?.replace(/^1\. /, "") || "취약점 정보가 없습니다.";
    const fixes = lines.find((line) => line.startsWith("2. "))?.replace(/^2\. /, "") || "수정 방안 정보가 없습니다.";
    const exampleCode =
      lines.slice(lines.findIndex((line) => line.startsWith("3. ")) + 1).join("\n") || "수정된 코드 정보가 없습니다.";

    return { vulnerabilities, fixes, exampleCode };
  };

  const { vulnerabilities, fixes, exampleCode } = parseResult(analysisResult);
  if (!analysisResult) return null;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(exampleCode);
      alert("코드가 클립보드에 복사되었습니다.");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="analysis-results bg-[#FFF3F3] p-4 rounded-lg  overflow-auto">
      <div className="mb-4">
        <h2 className="text-[24px] font-semibold text-[#FF6D6D]">1. 주요 취약점</h2>
        <p className="text-base text-[#3f3f3f] font-medium whitespace-pre-wrap">{vulnerabilities}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg text-[#3f3f3f] font-semibold">2. 수정 제안</h2>
        <p className="text-base font-semibold text-[#3f3f3f] whitespace-pre-wrap">{fixes}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-[#3f3f3f] font-semibold text-[24px]">3. 수정된 코드</h2>
        <div className="bg-[#444444] rounded-lg relative">
          <pre className="text-white text-[18px] font-medium p-2 rounded-md whitespace-pre-wrap">{exampleCode}</pre>
          <button
            onClick={copyToClipboard}
            style={{ position: "absolute", right: "10px", top: "10px" }}
            className="bg-[#444444] p-1 rounded-md text-white font-medium text-sm flex items-center"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "8px" }}
            >
              <path
                d="M20.71 3.5H8.70996C8.51105 3.5 8.32028 3.57902 8.17963 3.71967C8.03898 3.86032 7.95996 4.05109 7.95996 4.25V8H4.20996C4.01105 8 3.82028 8.07902 3.67963 8.21967C3.53898 8.36032 3.45996 8.55109 3.45996 8.75V20.75C3.45996 20.9489 3.53898 21.1397 3.67963 21.2803C3.82028 21.421 4.01105 21.5 4.20996 21.5H16.21C16.4089 21.5 16.5996 21.421 16.7403 21.2803C16.8809 21.1397 16.96 20.9489 16.96 20.75V17H20.71C20.9089 17 21.0996 16.921 21.2403 16.7803C21.3809 16.6397 21.46 16.4489 21.46 16.25V4.25C21.46 4.05109 21.3809 3.86032 21.2403 3.71967C21.0996 3.57902 20.9089 3.5 20.71 3.5ZM15.46 20H4.95996V9.5H15.46V20ZM19.96 15.5H16.96V8.75C16.96 8.55109 16.8809 8.36032 16.7403 8.21967C16.5996 8.07902 16.4089 8 16.21 8H9.45996V5H19.96V15.5Z"
                fill="#D6D6D6"
              />
            </svg>
            <div className="text-[18px] font-medium leading-6 text-[#d6d6d6]">코드복사</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
