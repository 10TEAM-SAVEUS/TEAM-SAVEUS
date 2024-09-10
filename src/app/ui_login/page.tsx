import Header from "@/components/common/Header";
import MainBg from "@/components/common/MainBg";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Header />
      <article className="absolute top-0 h-[100vh] z-[-10] w-full flex  items-center justify-evenly">
        <MainBg />
        <div className="flex flex-col items-center gap-[20px] text-[#6100ff] ">
          <h1 className="text-5xl text-normal text-center leading-[72px]">
            Find your Flaw,
          </h1>
          <h1 className="inline-block border-[4px] border-[#6100ff] px-8 pt-[12px] pb-[18px] rounded-[999px] text-5xl text-center">
            Login
          </h1>
        </div>
        <div className="relative">
          <button className=" h-[56px] top-5 left-[57px] p-4 rounded-full bg-[#6100FF] cursor-pointer flex items-center justify-center gap-2.5">
            <span className=" h-[29px] font-inter text-[24px] font-light leading-[29px] tracking-[-0.01em] text-white">
              <Link href="https://github.com/login/oauth/authorize?client_id=Ov23liuvo3Bv9YQQXe1m">
                Github로 연동 로그인하기
              </Link>
            </span>
          </button>
        </div>
        <div className="relative">
          <button className=" h-[56px] top-5 left-[57px] p-4 rounded-full bg-[#6100FF] cursor-pointer flex items-center justify-center gap-2.5">
            <span className=" h-[29px] font-inter text-[24px] font-light leading-[29px] tracking-[-0.01em] text-white">
              <Link href="https://github.com">Github</Link>
            </span>
          </button>
        </div>
      </article>
    </>
  );
}
