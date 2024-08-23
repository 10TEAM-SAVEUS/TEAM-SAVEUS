import Header from "@/components/common/Header";
import MainBg from "@/components/common/MainBg";
export default function page() {
  return (
    <>
      <Header />
      <article className="absolute top-0 flex flex-col h-[100vh] w-full items-center justify-center z-[-1] gap-16">
        <MainBg />
        <div className="flex flex-col items-center gap-[20px] text-[#6100ff] mt-[20vh]">
          <h1 className="text-5xl text-normal text-center leading-[72px]">
            Contaning Code Files
          </h1>
          <h1 className="inline-block border-[4px] border-[#6100ff] px-8 pt-[12px] pb-[18px] rounded-[999px] text-5xl text-center">
            MY Library
          </h1>
          <p className="leading-[24px]">
            깃허브와 연동하여 내 코드 파일을 불러오세요.
          </p>
        </div>
        <div className="relative">
          <button className=" h-[56px] top-5 left-[57px] p-4 rounded-full bg-[#6100FF] cursor-pointer flex items-center justify-center gap-2.5">
            <span className=" h-[29px] font-inter text-[24px] font-light leading-[29px] tracking-[-0.01em] text-white">
              Login
            </span>
          </button>
        </div>
      </article>
    </>
  );
}
