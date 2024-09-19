import Image from "next/image";
import FileImg from "/src/assets/FileImg.svg";
import { useState } from "react";
import { useModalState } from "@/app/store/analysisStore";
export default function FileListModal({
  filelist,
}: {
  filelist: { path: string; name: string; download_url: string }[];
}) {
  // const [onDisplay, setOnDisplay] = useState<boolean>(true);
  const setModal = useModalState((state) => state.setOnModal);
  // const getModal = useModalState((state) => state.getOnModal());
  const setInspection = useModalState((state) => state.setOnInspection);
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-[100vw] z-10 bg-black bg-opacity-60">
        <section className="flex flex-col justify-between items-center p-12 z-50 w-[546px] h-auto bg-white gap-10 rounded-[20px]">
          <p className="font-semibold text-[24px] tracking-tighter">
            선택된 파일을 검사하시겠습니까?
          </p>

          <div
            className={`w-[450px] h-auto  grid grid-cols-3 grid-rows-${(Math.floor(
              filelist.length / 3
            ) +
              (filelist.length % 3) >
            0
              ? 1
              : 0
            ).toString()} gap-[6px]`}
          >
            {filelist.map((file, index) => (
              <div
                key={index}
                className="w-[142px] h-[68px] flex justify-center items-center rounded-[10px] border-[1px] border-[#e6e6e6] gap-1"
              >
                <Image className="mr-3" src={FileImg} alt="FileImg"></Image>

                <div className="flex flex-col justify-center items-center text-base">
                  <p className="text-slate-500 text-xs">
                    {file.path} {" >"}
                  </p>
                  {file.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between h-[58px] w-[233px] gap-3 items-cente text-[24px] text-[#6100ff] font-medium">
            <button
              className="flex w-[90px] h-[58px] border-[1px] border-[#6100ff] rounded-xl justify-center items-center"
              onClick={() => setModal(false)}
            >
              취소
            </button>
            <button
              className="flex w-[131px] h-[58px] bg-[#6100ff] border-[1px] border-[#6100ff] rounded-xl justify-center items-center text-white"
              onClick={() => {
                setModal(false);
                setInspection(true);
              }}
            >
              검사하기
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
