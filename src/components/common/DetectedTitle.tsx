import Image from "next/image";
import Vector from "/src/assets/vector.svg";

export default function DetectedTitle({ widthClass = "w-[368px]", text = "Detected Files" }) {
  return (
    <div className="w-full h-[79px] flex items-center justify-center relative mt-[40px]">
      <div
        className={`${widthClass} flex items-center h-[79px] rounded-full p-5 border-4 border-solid border-[#6100FF] text-center`}
      >
        <div className="flex-shrink-0 mr-4 ml-[20px]">
          <Image
            src={Vector}
            alt="Vector"
            width={24} // 이미지 너비
            height={28} // 이미지 높이
            className="rounded-full"
          />
        </div>
        <span className="font-inter text-[40px] font-normal leading-[48.41px] text-[#6100FF] tracking-[-0.01em]">
          {text}
        </span>
      </div>
    </div>
  );
}
