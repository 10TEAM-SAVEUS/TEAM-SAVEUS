import Image from "next/image";
import Vector from "/src/assets/vector.svg";

export default function ClippingTitle() {
  return (
    <div className="w-full h-[79px] flex items-center justify-center relative mt-[40px]">
      <div className="flex items-center w-[368px] h-[79px] rounded-full p-5 border-4 border-solid border-[#6100FF] text-center">
        {/* 이미지와 텍스트를 나란히 배치 */}
        <button className="flex-shrink-0 mr-4 ml-[2px]">
          <Image
            src={Vector}
            alt="Vector"
            width={24} // 이미지 너비
            height={28} // 이미지 높이
            className="rounded-full"
          />
        </button>
        <span className="flex-grow font-inter text-[40px] font-normal leading-[48.41px] text-[#6100FF] tracking-[-0.01em] text-center ">
          Clipping Article
        </span>
      </div>
    </div>
  );
}
