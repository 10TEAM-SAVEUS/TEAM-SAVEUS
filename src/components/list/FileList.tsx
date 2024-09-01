"use client";

import Image from "next/image";
import React, { useState } from "react";

import dirimg from "/src/assets/filelist/dir.svg";
import fileimg from "/src/assets/filelist/file.svg";
import titleimg from "/src/assets/filelist/title.svg";
interface FileListProps {
  files: { name: string; type: string }[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  const handleFileClick = (index: number) => {
    setSelectedFile(index === selectedFile ? null : index);
  };

  return (
    <div className="box-border flex flex-col items-end w-[247px] h-full p-0 border border-gray-300 rounded-lg overflow-auto">
      <div className="flex flex-row justify-between text-[20px] font-normal text-[#3f3f3f] bg-[#faf8ff] w-full p-4 border-x-gray-300 border-transparent cursor-pointer">
        {"Files"}
        <Image src={titleimg} alt="titleimg" />
      </div>
      {files.map((file, index) => (
        <div
          key={index}
          className={`flex flex-row gap-2 text-[16px] text-[#3f3f3f] w-full p-2 border-x-gray-300 border-transparent cursor-pointer ${
            selectedFile === index ? "bg-[#f2ebff]" : "hover:bg-[#faf8ff]"
          }`}
          onClick={() => handleFileClick(index)}
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
