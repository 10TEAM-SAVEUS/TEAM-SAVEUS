import Image from "next/image";

import Direction from "/src/assets/landing/Direction.svg";
import floating_top from "/src/assets/landing/floating_top.svg";
import Bug from "/src/assets/Bug.svg";
import Square from "/src/assets/landing/Square.svg";
import Rhombus from "/src/assets/landing/Rhombus.svg";
import Inspection_example from "/src/assets/landing/Inspection_example.svg";

import Swiping from "@/components/landing/Swiping";
import Footer from "@/components/common/Footer";
import MainBg from "@/components/common/MainBg";
import Header from "@/components/common/Header";

export default function page() {
  return (
    <>
      <button className="fixed bottom-10 right-10 z-[10] bg-white rounded-full opacity-80">
        <Image src={floating_top} alt="floating_top" />
      </button>
      {/* Header */}
      <Header />
      {/* 로그인 페이지 */}
      <article className="absolute top-0 flex flex-col h-[100vh] w-full items-center justify-center z-[-1] gap-16">
        <MainBg />
        <div className="flex flex-col items-center gap-[20px] text-[#6100ff] mt-[20vh]">
          <h1 className="text-5xl text-normal text-center leading-[72px]">
            Find your Flaw,
          </h1>
          <h1 className="inline-block border-[4px] border-[#6100ff] px-8 pt-[12px] pb-[18px] rounded-[999px] text-5xl text-center">
            FlawDetector
          </h1>
          <p className="leading-[24px]">
            인공지능의 뛰어난 분석 능력을 활용하여 코드의 보안 취약성을 신속하게
            해결하세요.
          </p>
        </div>
        <div className="relative">
          <button className=" h-[56px] top-5 left-[57px] p-4 rounded-full bg-[#6100FF] cursor-pointer flex items-center justify-center gap-2.5">
            <span className=" h-[29px] font-inter text-[24px] font-light leading-[29px] tracking-[-0.01em] text-white">
              Login
            </span>
          </button>
        </div>
        <Image src={Direction} alt="Direction" />
      </article>
      {/* Landing 1 */}
      <article className="flex absolute top-[100vh] bg-[#f2ebff] w-full h-[100vh] justify-between items-center">
        <section className="w-fit  ml-[10vw]">
          <section className="text-[#6100ff] text-[50px] font-bold tracking-tighter">
            <h1 className="">쉽고 편하게</h1>
            <h1 className="">취약점을 발견하다.</h1>
          </section>
          <section className="mt-10 text-2xl font-bold leading-9 tracking-tighter]">
            <p className="">코드 보안</p>
            <p>어떻게 관리하시나요?</p>
          </section>
          <section className="mt-5 text-[16px] text-[#969696] leading-6 tracking-tighter">
            <p className="">
              플로디텍터는 안전한 소프트웨어 개발을 위한 필수 도구로,
            </p>
            <p className="">코드의 보안 취약점을 사전에 수정함으로써</p>
            <p className="">
              개발자들에게 편의와 안전한 개발 환경을 제공합니다.
            </p>
          </section>
        </section>
        <section className="mr-[15vw]">
          <figure className="absolute top-0 right-0">
            <Image src={Square} alt="Square" height={90} width={90}></Image>
          </figure>
          <figure className="relative top-[30px] left-[170px]">
            <Image src={Rhombus} alt="Rhombus" height={200} width={200}></Image>
          </figure>
          <figure className="relative bg-white flex p-16 justify-center items-center z-[10] shadow-[0_60px_60px_-24px_rgba(97,0,255,0.25)]">
            <Image src={Bug} alt="Bug" height={150} width={150}></Image>
          </figure>
          <figure className="relative bottom-[30px] left-[170px]">
            <Image src={Rhombus} alt="Rhombus" height={200} width={200}></Image>
          </figure>
          <figure className="absolute bottom-0 right-0">
            <Image src={Square} alt="Square" height={90} width={90}></Image>
          </figure>
        </section>
      </article>
      {/* Landing 2 */}
      <article className="flex absolute top-[200vh]  w-full h-[100vh] justify-between items-center">
        <section className=" mt-[15vh]">
          <Image
            className="h-[100vh] ml-[2vw]"
            src={Inspection_example}
            alt="Inspection_example"
            height={1000}
            width={800}
          />
        </section>
        <section className="flex flex-col mr-[7vw]">
          <section className="flex flex-col items-end text-[#6100ff] text-[44px] font-bold tracking-tighter">
            <p>최신 보안 동향을</p>
            <p>실시간으로 확인하세요.</p>
          </section>
          <section className="flex flex-col items-end mt-5 text-[16px] text-[#969696] leading-6 tracking-tighter">
            <p>실시간으로 최신 보안 동향을 제공하여</p>
            <p>개발자들이 보안 취약점에 대한 최신 정보를 받을 수 있어</p>
            <p>보안 강화를 지속적으로 개선할 수 있습니다.</p>
          </section>
        </section>
      </article>
      {/* Landing 3 (Swiper) */}
      <Swiping />
      {/* Contact */}
      <article className="flex absolute top-[400vh] w-full h-[100vh] justify-between items-center px-[6vw] py-[10vh]">
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
        <form className="flex flex-col justify-between h-full w-[55vw] border-[1px] border-[#6100ff] rounded-[40px] p-[4vw]">
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
      {/* Footer */}
      <div className="absolute top-[500vh] w-full">
        <Footer />
      </div>
    </>
  );
}
