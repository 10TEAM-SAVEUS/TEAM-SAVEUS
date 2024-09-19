"use client";

import { useState } from "react";

export default function LibraryList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
    if (isOpen2) setIsOpen2(false); // 다른 버튼이 열려 있으면 닫기
  };

  const toggleList2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen) setIsOpen(false); // 다른 버튼이 열려 있으면 닫기
  };

  return (
    <div className="w-full flex justify-center mt-20 mb-[30px]">
      <div className="w-[1300px] h-[44px] grid grid-cols-3 items-center">
        <span className="font-inter font-medium text-[32px] leading-[38.73px] tracking-[-0.01em]">
          Library
        </span>
        <div className="flex justify-center"></div>
        {/* 버튼 컨테이너 */}
        <div className="flex justify-end space-x-3">
          {/* 첫 번째 버튼 */}
          <div className="relative">
            <button
              onClick={toggleList}
              className="w-[89px] h-[44px] text-gray-700 rounded-lg border-2 border-gray-400"
            >
              {isOpen ? "Type ▼" : "Type ▼"}
            </button>
            {isOpen && (
              <ul className="list-disc pl-5 space-y-2 mt-2 absolute right-0 top-full bg-white border border-gray-400">
                <li className="text-lg">폴더순</li>
                <li className="text-lg">파일순</li>
              </ul>
            )}
          </div>
          {/* 두 번째 버튼 */}
          <div className="relative">
            <button
              onClick={toggleList2}
              className="w-[89px] h-[44px] text-gray-700 rounded-lg border-2 border-gray-400"
            >
              {isOpen2 ? "Sort ▼" : "Sort ▼"}
            </button>
            {isOpen2 && (
              <ul className="list-disc pl-5 space-y-2 mt-2 absolute right-0 top-full bg-white border border-gray-400">
                <li className="text-lg">최신순</li>
                <li className="text-lg">오래된순</li>
                <li className="text-lg">이름순</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
