import Image from "next/image";
import CattleLeft from "../../assets/landing/CattleLeft.svg";
import Header from "@/components/common/Header";

export default function page() {
  return (
    <>
      <Header />
      <article className="flex flex-col absolute top-0 z-[-1] w-full h-[100vh] justify-center gap-[4vh] items-center px-[6vw]  pb-[5vh]">
        <button className="mt-[15vh] p-2 pr-4 h-[56px] rounded-full border-[4px] border-[#6100FF] cursor-pointer flex items-center">
          <span className="font-inter text-[24px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between gap-[12px]">
            <Image src={CattleLeft} alt="CattleLeft" height={27} /> Customer
            Service Center
          </span>
        </button>
        <article className="w-full h-full flex justify-between items-center">
          <section className="flex flex-col h-full justify-between">
            <section className="flex flex-col text-[#6100ff] text-[40px] font-bold tracking-tighter">
              <h1>서비스 이용에</h1>
              <h1>문제가 생겼나요?</h1>
              <section className="text-[#969696] text-[16px] font-medium mt-[2vh]">
                <p>이용하면서 문제가 생겼다면 언제든지 문의주세요.</p>
                <p>서비스 개발과 성장에 큰 도움이 됩니다.</p>
              </section>
            </section>
            <section className="flex flex-col gap-[5vh] justify-between">
              <section className="tracking-tighter">
                <h1 className="text-[16px] font-semibold">Email</h1>
                <p className="mt-[0.8vh] text-[12px] text-[#969696] tracking-normal">
                  justin@floatfactory.kr
                </p>
              </section>
              <section className="tracking-tighter">
                <h1 className="text-[16px] font-semibold">Adress</h1>
                <p className="mt-[0.8vh] text-[12px] text-[#969696] tracking-tight">
                  서울 강서구 마곡중앙2로 11 305호
                </p>
              </section>
            </section>
          </section>
          <form className="flex flex-col justify-between h-full w-[55vw] border-[1px] border-[#6100ff] rounded-[40px] p-[3vw]">
            <section className="flex flex-col gap-[2vh] tracking-tighter">
              <h1 className="text-[20px] font-bold">문의하기</h1>
              <p className="text-[16px] text-[#8f8f8f] ">
                문의하고 싶은 내용을 구체적으로 작성해주셔야 피드백이 정상적으로
                반영됩니다.
              </p>
            </section>
            <section>
              <h1 className="text-[16px] font-semibold mb-1">Name</h1>
              <input
                className=" gap-2.5 w-full h-[6vh] top-5 left-5 p-[12px] rounded-[8px] border-[1px] border-[#E6E6E6] 
              placeholder:text-[16px] placeholder:font-medium placeholder:leading-[27px] placeholder:tracking-[-0.011em] placeholder:text-left placeholder:font-inter placeholder:text-[#D6D6D6]"
                placeholder="이름을 적어주세요."
              />
            </section>
            <section>
              <h1 className="text-[16px] font-semibold mb-1">Email</h1>
              <input
                className=" gap-2.5 w-full h-[6vh] top-5 left-5 p-[12px] rounded-[8px] border-[1px] border-[#E6E6E6] 
              placeholder:text-[16px] placeholder:font-medium placeholder:leading-[27px] placeholder:tracking-[-0.011em] placeholder:text-left placeholder:font-inter placeholder:text-[#D6D6D6]"
                placeholder="justin@floatfactory.kr"
              />
            </section>
            <section>
              <h1 className="text-[16px] font-semibold mb-1">Message</h1>
              <input
                className="gap-2.5 w-full h-[18vh] top-5 left-5 p-[12px] rounded-[8px] border-[1px] border-[#E6E6E6] 
              placeholder:text-[16px] placeholder:font-medium placeholder:leading-[27px] placeholder:tracking-[-0.011em] 
              placeholder:text-left placeholder:font-inter placeholder:text-[#D6D6D6] placeholder:transform placeholder:translate-y-[-200%]"
                placeholder="내용을 적어주세요."
              />
            </section>
            <button className="flex w-full h-[6vh] rounded-lg bg-[#6100FF] cursor-pointer items-center justify-center">
              <span className=" w-full font-inter text-base font-semibold leading-none tracking-tight text-white">
                문의 보내기
              </span>
            </button>
          </form>
        </article>
      </article>
    </>
  );
}
