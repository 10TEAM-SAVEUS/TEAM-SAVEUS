"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import RepoInspect from "@/components/inspection/RepoInspect";
import RepoInResult from "@/components/inspection/RepoInResult";
import { checkIfRepoHasFiles } from "@/firebase/data_fetching";
import Image from "next/image";
import Label from "@/assets/Inspection.svg";

interface FolderCardProps {
  name: string;
  subtitle: string;
  username: string;
  updateStatus: (name: string, status: string) => void; // 상태 업데이트 함수
}

const FolderCardClient: FC<FolderCardProps> = ({
  name,
  subtitle,
  username,
  updateStatus,
}) => {
  const [fileExists, setFileExists] = useState(false);

  useEffect(() => {
    const checkFileStatus = async () => {
      const exists = await checkIfRepoHasFiles(username, name);
      setFileExists(exists);
      updateStatus(name, exists ? "검사완료" : "검사중"); // 상태 업데이트
    };
    checkFileStatus();
  }, [name, username, updateStatus]);

  const truncatedName = name.length > 20 ? `${name.slice(0, 20)}...` : name;

  return (
    <div className="w-[310px] h-[200px] shrink-0 flex flex-col items-start justify-between p-[20px] bg-[#fff] border-[1px] border-solid border-[#e0ceff] rounded-[12px]">
      <div className="w-[270px] flex flex-col items-start justify-start">
        {fileExists ? (
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
          <div className="text-[28px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
            {truncatedName}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-end gap-[10px]">
        <div className="flex flex-row items-end gap-[46px]">
          <Link href={`/ui_analyze/${name}`}>
            {fileExists ? <RepoInResult /> : <RepoInspect />}
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
