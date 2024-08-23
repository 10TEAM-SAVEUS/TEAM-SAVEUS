"use client";
import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";
import Image from "next/image";
import Locker from "/src/assets/landing/swiper/Locker.png";
import Gear from "/src/assets/landing/swiper/Gear.png";
import Locker2 from "/src/assets/landing/swiper/Locker2.png";
import Hand from "/src/assets/landing/swiper/Hand.png";
import Circular from "/src/assets/landing/swiper/Circular.png";
import Check from "/src/assets/landing/swiper/Check.png";

export default function Swiping() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Autoplay, FreeMode],
      slidesPerView: 5,
      loop: true,
      loopAdditionalSlides: 0,
      spaceBetween: 30,
      autoplay: {
        delay: 0,
      },
      freeMode: {
        enabled: true,
        momentumBounce: false,
      },
      speed: 3000,
    });
  }, []);
  return (
    <>
      <article className="flex flex-col pt-[10vh] absolute top-[300vh] bg-[#6100ff] w-full h-[100vh] justify-between items-center overflow-visible">
        <section className="flex flex-col text-[50px] text-[#ffffff] align-middle items-center font-bold tracking-tighter">
          <h1>안전과 보호를 우선으로 하는</h1>
          <h1>프로세스를 제공합니다.</h1>
        </section>
        <section className="swiper w-full h-[60vh] mt-[10vh]">
          <section className="swiper-wrapper">
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center  border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#ff81a7] rounded-[999px] bg-[#fff2f7] px-2 py-1 font-medium text-[#ff81a7] tracking-tighter">
                  보안 강화
                </h1>
                <Image src={Locker} alt="Locker" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>보안 취약점 사전 식별 후 해결</p>
                  <p>소프트웨어 보안성 강화</p>
                </section>
              </section>
            </figure>
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center  border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#00987c] rounded-[999px] bg-[#ddfff3] px-2 py-1 font-medium text-[#00987c] tracking-tighter">
                  미션 크리티컬한 개발에 적합
                </h1>
                <Image src={Gear} alt="Gear" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>미션 크리티컬한 개발 특별 제작</p>
                  <p>안전한 솔루션 제공</p>
                </section>
              </section>
            </figure>
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#a54cff] rounded-[999px] bg-[#f5e4ff] px-2 py-1 font-medium text-[#a54cff] tracking-tighter">
                  실시간 보안 업데이트
                </h1>
                <Image src={Locker2} alt="Locker2" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>최신 보안 동향 및 취약점 정보 실시간 제공</p>
                  <p>개발자 보안 강화를 도움</p>
                </section>
              </section>
            </figure>
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center  border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#4c93ff] rounded-[999px] bg-[#e4f2ff] px-2 py-1 font-medium text-[#4c93ff] tracking-tighter">
                  사용자 데이터 보호
                </h1>
                <Image src={Hand} alt="Hand" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>데이터 무단 엑세스 및 정보 유출 방지</p>
                  <p>개인 정보 안전하게 보호</p>
                </section>
              </section>
            </figure>
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center  border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#ff8a00] rounded-[999px] bg-[#fffbe4] px-2 py-1 font-medium text-[#ff8a00] tracking-tighter">
                  효율적인 개발
                </h1>
                <Image src={Circular} alt="Circular" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>보안 취약점 자동 분석 후 수정</p>
                  <p>개발 집중 및 생산성 향상</p>
                </section>
              </section>
            </figure>
            <figure className="swiper-slide">
              <section className="relative z-[10] h-[45vh] shadow-[0_80px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col justify-evenly items-center  border rounded-[40px] bg-white">
                <h1 className="inline-block border-[1px] border-[#ff3d00] rounded-[999px] bg-[#ffeae4] px-2 py-1 font-medium text-[#ff3d00] tracking-tighter">
                  신속한 대응과 수정
                </h1>
                <Image src={Check} alt="Check" height={120}></Image>
                <section className="flex flex-col justify-center items-center text-[12px] text-[#606060] text-opacity-80">
                  <p>발견된 취약점 대응 및 수정</p>
                  <p>안전한 소프트웨어 개발 가능</p>
                </section>
              </section>
            </figure>
          </section>
        </section>
      </article>
    </>
  );
}
