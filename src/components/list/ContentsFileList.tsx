"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import dirimg from "/src/assets/filelist/dir.svg";
import fileimg from "/src/assets/filelist/file.svg";
import titleimg from "/src/assets/filelist/title.svg";
import Checker from "/src/assets/filelist/Checker.svg";
import CheckedCircle from "/src/assets/filelist/CheckedCircle.svg";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import useAnalysisStore from "@/app/store/analysisStore";
import { existAnalyzedCode } from "@/firebase/data_getting";
interface FileObject {
  type: "dir" | "file" | "submodule" | "symlink";
  size: number;
  name: string;
  path: string;
  content?: string;
  sha: string;
  url: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
  _links: {
    self: string | null;
    git: string | null;
    html: string | null;
  };
}

interface FileListProps {
  files: FileObject[];
  username: string;
}

const ContentsFileList: React.FC<FileListProps> = ({ files, username }) => {
  const route = useRouter();
  const reponame = useParams()?.reponame.toString();
  const temppath = useSearchParams()?.get("path");
  const path = temppath ? temppath : "";

  const setState = useAnalysisStore((state) => state.setFileInfo);

  const [isAnalyzed, setIsAnalyzed] = useState<boolean[]>([]);

  const [selectedFile, setSelectedFile] = useState<
    { path: string; name: string }[]
  >([]);

  // 이미 분석한 코드인지 확인
  useEffect(() => {
    const fetchAnalyzedStatus = async () => {
      // 비동기 작업 수행
      const results = await Promise.all(
        files.map(async (file) => {
          if (reponame) {
            const isAnalyzed = await existAnalyzedCode(
              username,
              reponame,
              path,
              file.name
            );
            return isAnalyzed;
          }
          return false;
        })
      );
      setIsAnalyzed(results); // 상태 업데이트
    };

    fetchAnalyzedStatus(); // useEffect 내에서 비동기 함수 호출
  }, [files, path]); // 종속성 배열: 파일 목록이나 repo 관련 정보가 변경되면 다시 실행

  const handleFileClick = (file: FileObject, existFile: boolean) => {
    if (reponame) setState(username, reponame, path, file.name);
    if (existFile) {
      setSelectedFile(
        selectedFile.filter(
          ({ path, name }) => path !== file.path && name !== file.name
        )
      );
    } else {
      setSelectedFile([...selectedFile, { path: file.path, name: file.name }]);
    }
    route.push(
      `http://localhost:3000/ui_analyze/${reponame}?path=${path}&filename=${file.name}&download_url=${file.download_url}`
    );
  };

  const handleDoubleClick = (path: string) => {
    route.push(`http://localhost:3000/ui_analyze/${reponame}?path=${path}`);
  };

  const handleGoBackClick = async () => {
    let isSliced = false;
    let newPath = path;

    // 경로를 슬라이싱하는 로직
    for (let i = newPath.length - 1; i > -1; i--) {
      if (newPath[i] === "/") {
        newPath = newPath.slice(0, i); // newPath 값을 직접 슬라이싱
        isSliced = true;
        break;
      }
    }

    if (!isSliced) {
      newPath = ""; // newPath를 빈 문자열로 설정
    }

    // 경로 변경 후 route.push 비동기 실행
    await route.push(
      `http://localhost:3000/ui_analyze/${reponame}?path=${newPath}`
    );
  };

  return (
    <div className="box-border flex flex-col items-end w-[247px] h-full p-0 border border-gray-300 rounded-lg overflow-auto">
      <div className="flex flex-row justify-between text-[20px] font-normal text-[#3f3f3f] bg-[#faf8ff] w-full p-4 border-x-gray-300 border-transparent cursor-pointer">
        {"Files"}
        <Image src={titleimg} alt="titleimg" />
      </div>
      {/* 상위 폴더 이동 */}
      {path && (
        <>
          <div
            className="flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer bg-white hover:bg-[#faf8ff]"
            onClick={handleGoBackClick}
          >
            <Image src={dirimg} alt="dirimg"></Image>
            ...
          </div>
        </>
      )}
      {/* 파일리스트 */}
      {files.map((file: FileObject, index: number) => {
        const existFile: boolean = selectedFile.find(
          ({ path, name }) => path === file.path && name === file.name
        )
          ? true
          : false;
        return (
          <div
            key={index}
            className={`flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer hover:bg-[#faf8ff] 
            ${existFile ? "bg-[#f2ebff]" : ""}`}
            onClick={() => {
              if (file.type === "file" && file.download_url) {
                handleFileClick(file, existFile);
              }
            }}
            onDoubleClick={() => {
              if (file.type === "dir") {
                handleDoubleClick(file.path);
              }
            }}
          >
            {existFile && <Image src={Checker} alt="Checker" />}
            <Image
              src={file.type === "dir" ? dirimg : fileimg}
              alt="filetype"
            ></Image>
            {file.name}
            {isAnalyzed[index] && (
              <Image src={CheckedCircle} alt="Already Analyzed" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContentsFileList;
