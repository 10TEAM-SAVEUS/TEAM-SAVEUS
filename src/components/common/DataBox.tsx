"use client";

import React, { useState } from "react";

function DataBox({ label, number, description }: { label: string; number: string; description: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = () => {
    alert("삭제가 선택되었습니다.");
  };

  const handleShare = () => {
    alert("공유가 선택되었습니다.");
  };

  return (
    <div className="w-[310px] h-[200px] pt-[20px] border-[1px] rounded-[12px] border-[#E0CEFF] flex justify-center items-center relative">
      <a className="absolute top-0 left-0 mt-2 ml-2 flex items-center justify-center leading-[16px] tracking-[-0.01em] text-left text-[16px] w-[60px] h-[30px] rounded-full bg-[#FAF8FF] font-normal font-inter border-[1px] border-solid border-[#A66FFF] text-[#6100FF]">
        {label}
      </a>

      {/* 세로 줄임표 */}
      <div className="absolute top-2 right-2">
        <button onClick={toggleMenu} className="text-[#3f3f3f] text-[20px]">
          &#8942;
        </button>
        {/* 메뉴 */}
        {isMenuOpen && (
          <div className="absolute top-6 right-0 w-[100px] bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleDelete}>
                삭제
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleShare}>
                공유
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-[122px] h-[71px] font-inter font-medium leading-[39px] mb-[-45px] text-left">
        <span className="text-[32px] leading-none ml-[-80px] block">{number}</span>
        <span className="ml-[-80px] text-[16px] font-normal font-inter text-[#969696] block mt-1">{description}</span>
      </div>
    </div>
  );
}

export default function GridContainer() {
  const dummyData = [
    { label: "A", number: "01.23.45", description: "소속 파일 1" },
    { label: "B", number: "67.89.10", description: "소속 파일 2" },
    { label: "C", number: "11.22.33", description: "소속 파일 3" },
    { label: "D", number: "44.55.66", description: "소속 파일 4" },
    { label: "E", number: "77.88.99", description: "소속 파일 5" },
    { label: "F", number: "00.11.22", description: "소속 파일 6" },
    { label: "G", number: "33.44.55", description: "소속 파일 7" },
    { label: "H", number: "66.77.88", description: "소속 파일 8" },
    { label: "I", number: "99.00.11", description: "소속 파일 9" },
    { label: "J", number: "99.00.11", description: "소속 파일 9" },
    { label: "K", number: "99.00.11", description: "소속 파일 9" },
    { label: "L", number: "99.00.11", description: "소속 파일 9" },
  ];

  return (
    <div className="w-full max-w-[1300px] h-[648px] p-4 mx-auto grid grid-cols-4 gap-4 justify-items-center items-center">
      {dummyData.map((data, index) => (
        <DataBox key={index} label={data.label} number={data.number} description={data.description} />
      ))}
    </div>
  );
}
