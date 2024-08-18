import DetectedTitle from "@/components/common/DetectedTitle";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import FileList from "@/assets/FileList.svg";
import Image from "next/image";
import Choice from "@/assets/Choice.svg";
import Folder from "@/assets/Folder.svg";
import TopfileList from "@/assets/TopfileList.svg";

export default function Page() {
  return (
    <>
      <Header />
      <div className="ml-[70px] w-[1760px] h-[1439px] top-[148px] left-[80px] gap-[45px]">
        <DetectedTitle widthClass="w-[1740px]" text="sfacweb - 1 " />

        <div className="w-[1740px] h-[107px] flex items-center gap-[28px]">
          <div className="mt-[100px] ml-3 w-[247px] h-[107px] rounded-lg p-4 bg-[#6100FF] flex justify-center items-center">
            <span className="w-[170px] h-[29px] font-inter font-semibold text-[24px] text-white">폴더 전체 검사</span>
          </div>

          <div className="mt-[193px] ml-[10px] w-[1540px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700 relative">
            <Image src={TopfileList} alt="상단파일리스트" width={968} height={35} className="absolute top-[-65px]" />
            <div className="bg-[#00C308] h-2.5 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className="flex ml-[13px] mt-[133px] gap-[32px]">
          <div className="w-[247px] h-[970px] rounded-xl border-[1px] border-[#C3C3C3]">
            <Image src={FileList} alt="파일리스트" width={247} height={994} className="" />
          </div>

          <div className="w-[728px] h-[973px] border-[1px] rounded-lg p-[40px] gap-[32px] border-[#C3C3C3] flex flex-col justify-center items-center">
            <Image src={Choice} alt="파일선택" width={48} height={48} className="mb-[5px]" />
            <span className="text-[#6100FF] font-inter text-[32px] font-medium leading-[38.73px] tracking-[-0.01em] text-center">
              파일을 선택하세요
            </span>
          </div>

          <div className="w-[728px] h-[973px] border-[1px] rounded-lg p-[40px] gap-[32px] border-[#C3C3C3] flex flex-col justify-center items-center">
            <Image src={Folder} alt="폴더" width={48} height={48} className="mb-[5px]" />
            <span className="font-inter text-[32px] font-medium leading-[38.73px] tracking-[-0.01em] text-center">
              분석할 파일이 없어요!
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center ml-[10px] mt-[20px] w-[246px] h-[56px] rounded-lg p-4 py-5 gap-[10px] bg-[#6100FF]">
          <span className="w-[100px] h-[30px] font-inter font-semibold text-[24px] tracking-[-0.01em] text-[white]">
            검사하기
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
