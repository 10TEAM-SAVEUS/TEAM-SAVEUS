"use client"; // 클라이언트 컴포넌트로 설정
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import RepoInspect from "@/components/inspection/RepoInspect"; // 검사하기 버튼
import RepoInResult from "@/components/inspection/RepoInResult"; // 결과보기 버튼
import { checkIfRepoHasFiles } from "@/firebase/data_fetching"; // Firestore에서 파일 존재 여부 확인 함수

interface FolderCardProps {
  name: string;
  subtitle: string;
  username: string; // username도 추가
}

const FolderCardClient: FC<FolderCardProps> = ({
  name,
  subtitle,
  username,
}) => {
  const [fileExists, setFileExists] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 실행될 파일 존재 여부 확인 로직
    const checkFileStatus = async () => {
      const exists = await checkIfRepoHasFiles(username, name); // Firestore에서 파일 존재 여부 확인
      setFileExists(exists);
    };

    checkFileStatus();
  }, [name, username]);

  return (
    <div className="w-[310px] h-[200px] shrink-0 flex flex-col items-start justify-between p-[20px] bg-[#fff] border-[1px] border-solid border-[#e0ceff] rounded-[12px]">
      <div className="w-[270px] flex flex-row items-center justify-between">
        <div className="w-[60px] h-[30px] shrink-0 flex flex-row items-center justify-center bg-[#fff] border-[1px] border-solid border-[#3f3f3f] rounded-[999px] overflow-hidden">
          <div className="text-[16px] leading-[16px] tracking-[-0.01em] font-['Inter'] text-[#000] whitespace-nowrap">
            label
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
          <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
          <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end gap-[10px]">
        <div className="text-[28px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
          {name}
        </div>
        <div className="flex flex-row items-end gap-[46px]">
          <Link href={`http://localhost:3000/ui_analyze/${name}`}>
            {fileExists ? <RepoInResult /> : <RepoInspect />}{" "}
            {/* 파일이 있으면 결과보기, 없으면 검사하기 버튼 */}
          </Link>
          <div className="text-[16px] leading-[16px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderCardClient;
