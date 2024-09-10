"use client";

import { OctokitResponse } from "@octokit/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import dirimg from "/src/assets/filelist/dir.svg";
import fileimg from "/src/assets/filelist/file.svg";
import titleimg from "/src/assets/filelist/title.svg";
import { useParams, useRouter } from "next/navigation";
import useAnalysisStore from "@/app/store/analysisStore";

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
// const FileList: React.FC<FileListProps>
const ContentsFileList: React.FC<FileListProps> = ({ files, username }) => {
  const route = useRouter();

  const reponame = useParams()?.reponame.toString();
  const [path, setPath] = useState("");
  const [selectedFile, setSelectedFile] = useState<number | null>(null);
  const setState = useAnalysisStore((state) => state.setFileInfo);

  const handleFileClick = (file: FileObject) => {
    if (reponame) setState(username, reponame, path, file.name);
    route.push(
      `http://localhost:3000/ui_analyze/${reponame}?path=${path}&download_url=${file.download_url}`
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

    // 상태 업데이트
    setPath(newPath);

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
      {path && (
        <>
          <div
            className="flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer bg-[#f2ebff]hover:bg-[#faf8ff]"
            onClick={handleGoBackClick}
          >
            <Image src={dirimg} alt="dirimg"></Image>
            ...
          </div>
        </>
      )}
      {files.map((file: FileObject, index: number) => (
        <div
          key={index}
          className={`flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer ${
            selectedFile === index ? "bg-[#f2ebff]" : "hover:bg-[#faf8ff]"
          }`}
          onClick={() => {
            setSelectedFile(index);
            if (file.type === "file") {
              if (file.download_url) handleFileClick(file);
            }
          }}
          onDoubleClick={() => {
            if (file.type === "dir") {
              handleDoubleClick(file.path);
              setPath(file.path);
            }
          }}
        >
          <Image
            src={file.type === "dir" ? dirimg : fileimg}
            alt="filetype"
          ></Image>
          {file.name}
        </div>
      ))}
    </div>
  );
};

export default ContentsFileList;
