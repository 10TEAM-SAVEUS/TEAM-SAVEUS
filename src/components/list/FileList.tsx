"use client";

import { OctokitResponse } from "@octokit/types";
import Image from "next/image";
import React, { useState } from "react";

import dirimg from "/src/assets/filelist/dir.svg";
import fileimg from "/src/assets/filelist/file.svg";
import titleimg from "/src/assets/filelist/title.svg";
import { useParams, useRouter } from "next/navigation";

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
}
// const FileList: React.FC<FileListProps>
const FileList: React.FC<FileListProps> = ({ files }) => {
  const route = useRouter();
  // console.log(files);
  const reponame = useParams().reponame;
  console.log(reponame);
  const [path, setPath] = useState("");
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  const handleFileClick = (download_url?: string) => {
    route.push(
      `http://localhost:3000/ui_analyze/${reponame}?path=${path}&download_url=${download_url}`
    );
  };
  const handleDoubleClick = (path: string) => {
    route.push(`http://localhost:3000/ui_analyze/${reponame}?path=${path}`);
  };
  return (
    <div className="box-border flex flex-col items-end w-[247px] h-full p-0 border border-gray-300 rounded-lg overflow-auto">
      <div className="flex flex-row justify-between text-[20px] font-normal text-[#3f3f3f] bg-[#faf8ff] w-full p-4 border-x-gray-300 border-transparent cursor-pointer">
        {"Files"}
        <Image src={titleimg} alt="titleimg" />
      </div>
      {files.map((file: FileObject, index: number) => (
        <div
          key={index}
          className={`flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer ${
            selectedFile === index ? "bg-[#f2ebff]" : "hover:bg-[#faf8ff]"
          }`}
          onClick={() => {
            setSelectedFile(index);
            if (file.type === "file") {
              if (file.download_url) handleFileClick(file.download_url);
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

export default FileList;
