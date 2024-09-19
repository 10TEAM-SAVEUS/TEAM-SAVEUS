"use client";

import { useState } from "react";

interface LibraryListProps {
  setFilterType: (filterType: string) => void;
}

export default function LibraryList({ setFilterType }: LibraryListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Type");

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType("Type");
    setFilterType(type);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center mt-20 mb-[30px]">
      <div className="w-[1300px] h-[44px] grid grid-cols-3 items-center">
        <span className="font-inter font-medium text-[32px] leading-[38.73px] tracking-[-0.01em]">
          Library
        </span>
        <div className="flex justify-center"></div>
        <div className="flex justify-end space-x-3">
          <div className="relative">
            <button
              onClick={toggleList}
              className="w-[120px] h-[44px] text-gray-700 rounded-lg border-2 border-gray-400 text-xl"
            >
              {selectedType} ▼
            </button>
            {isOpen && (
              <ul className="list-disc pl-5 space-y-2 mt-2 absolute right-0 top-full bg-white border border-gray-400">
                <li
                  className="text-lg cursor-pointer hover:bg-gray-200"
                  onClick={() => handleTypeSelect("모든상태")}
                >
                  모든상태
                </li>
                <li
                  className="text-lg cursor-pointer hover:bg-gray-200"
                  onClick={() => handleTypeSelect("검사완료")}
                >
                  검사완료
                </li>
                <li
                  className="text-lg cursor-pointer hover:bg-gray-200"
                  onClick={() => handleTypeSelect("검사중")}
                >
                  검사중
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
