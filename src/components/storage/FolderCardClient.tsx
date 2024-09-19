// C:\HYUNWOO\next\saveus\TEAM-SAVEUS\src\components\storage\FolderCardClient.tsx
"use client"; // 클라이언트 컴포넌트로 설정
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import RepoInspect from "@/components/inspection/RepoInspect"; // 검사하기 버튼
import RepoInResult from "@/components/inspection/RepoInResult"; // 결과보기 버튼
import { checkIfRepoHasFiles } from "@/firebase/data_fetching"; // Firestore에서 파일 존재 여부 확인 함수
import Image from "next/image";
import Label from "@/assets/Inspection.svg"; // Label SVG import

interface FolderCardProps {
  name: string;
  subtitle: string;
  username: string; // username도 추가
  updateStatus: (name: string, status: string) => void; // 상태 업데이트 함수
}

const FolderCardClient: FC<FolderCardProps> = ({
  name,
  subtitle,
  username,
  updateStatus, // 상태 업데이트 함수 추가
}) => {
  const [fileExists, setFileExists] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 실행될 파일 존재 여부 확인 로직
    const checkFileStatus = async () => {
      const exists = await checkIfRepoHasFiles(username, name); // Firestore에서 파일 존재 여부 확인
      setFileExists(exists);
      updateStatus(name, exists ? "검사완료" : "검사중"); // 상태 업데이트
    };

    checkFileStatus();
  }, [name, username, updateStatus]);

  // name(reponame)이 20자 이상이면 ...으로 표시
  const truncatedName = name.length > 20 ? `${name.slice(0, 20)}...` : name;

  return (
    <div className="w-[310px] h-[200px] shrink-0 flex flex-col items-start justify-between p-[20px] bg-[#fff] border-[1px] border-solid border-[#e0ceff] rounded-[12px]">
      <div className="w-[270px] flex flex-col items-start justify-start">
        {fileExists ? (
          // Label이 상단, truncatedName이 아래쪽에 표시
          <>
            <Image
              src={Label}
              alt="Label"
              width={79}
              height={38}
              className="shrink-0"
            />
            <div className="text-[28px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap mt-[8px]">
              {truncatedName}
            </div>
          </>
        ) : (
          // fileExists가 false인 경우 truncatedName만 표시
          <div className="text-[28px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
            {truncatedName}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-end gap-[10px]">
        <div className="flex flex-row items-end gap-[46px]">
          <Link href={`http://localhost:3000/ui_analyze/${name}`}>
            {fileExists ? <RepoInResult /> : <RepoInspect />}
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
