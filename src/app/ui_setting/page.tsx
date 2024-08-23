import Header from "@/components/common/Header";
import Image from "next/image";
import CattleLeft from "../../assets/landing/CattleLeft.svg";
import DummyProfile from "../../assets/landing/DummyProfile.png";
export default function page() {
  return (
    <>
      <Header />
      <article className="fixed top-0 flex flex-col h-[100vh] w-full items-center justify-center gap-[6vh] z-[-1]">
        <button className="p-2 pr-4 h-[56px] rounded-full border-[4px] border-[#6100FF] cursor-pointer flex items-center">
          <span className="font-inter text-[24px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between gap-[12px]">
            <Image src={CattleLeft} alt="CattleLeft" height={27} /> Setting
          </span>
        </button>
        <section className="w-[70vw] h-[50vh] flex flex-col items-start justify-between">
          <section className="w-full flex items-start justify-between">
            <section className="flex jusitfy-between items-center gap-3">
              <Image src={DummyProfile} alt="ProfileImage" height={80}></Image>
              <section className="font-medium text-[28px] tracking-tight">
                <h1>Hello,</h1>
                <h1>marry@gmail.com</h1>
              </section>
            </section>
            <button className="px-2 py-1 mt-2 rounded-lg border-[2px] border-[#6100FF] cursor-pointer flex items-center">
              <span className="font-inter text-[16px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between">
                로그아웃
              </span>
            </button>
          </section>
          <hr className="w-full h-[1px] bg-[#bababa] border-0" />
          <section className="w-full flex items-start justify-start gap-[4vw] text-[16px] tracking-[-0.01em]">
            <h1 className="font-semibold">계정 유형</h1>
            <h1 className="">깃허브 연동</h1>
          </section>
          <hr className="w-full h-[1px] bg-[#bababa] border-0" />
          <section className="w-full text-[16px] tracking-[-0.01em]">
            <h1 className="font-semibold">계정 유형</h1>
            <section className="mt-[3vh] flex justify-between items-center">
              <h1 className="inline-block">이메일로 알림 받기</h1>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#c2c2c2] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6100ff]"></div>
              </label>
            </section>
          </section>
        </section>
      </article>
    </>
  );
}
