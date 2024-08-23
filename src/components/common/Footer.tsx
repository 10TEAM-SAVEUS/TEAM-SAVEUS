import React from "react";
import Logo from "@/assets/footerlogo.svg";
import Image from "next/image";
import Footerbg from "@/assets/footerbg.svg";

function Footer() {
  return (
    <div className="w-full px-10 h-[324px] bg-[#faf8ff]  ">
      <div
        className="w-full h-[324px]"
        style={{
          backgroundImage: `url(${Footerbg.src})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex w-full items-end relative justify-between top-[60px]">
          <div className="inline-flex flex-col items-start gap-[38px] relative flex-[0_0_auto]">
            <Image src={Logo} alt="Logo" width={120} height={55} />
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-semibold text-variable-collection-text-gray-dark text-xl text-center tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                CONTACT
              </div>
              <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-start gap-[26px] relative flex-[0_0_auto]">
                    <div className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                      (주)스팩스페이스
                    </div>
                    <div className="inline-flex items-start gap-[11px] relative flex-[0_0_auto]">
                      <div className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                        대표자
                      </div>
                      <p className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                        <span className="text-[#3f3f3f] tracking-[-0.03px]">염민호</span>
                        <span className="text-[#969696] tracking-[-0.03px]">&nbsp;</span>
                      </p>
                    </div>
                  </div>
                  <p className="relative w-fit [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                    서울 강서구 마곡중앙2로 11, 3층 303호
                  </p>
                  <div className="inline-flex items-start gap-[23px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-variable-collection-text-gray-defalt text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                      Email
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                      admin@sfacspace.com
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-start gap-[7px] relative flex-[0_0_auto]">
                    <div className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                      사업자등록번호
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                      450-87-01864
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-[13px] relative flex-[0_0_auto]">
                    <div className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                      대표전화
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                      02-6217-1119
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                    <div className="text-variable-collection-text-gray-defalt relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                      팩스
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
                      02-6217-1115
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-end gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-8 relative flex-[0_0_auto] ">
              <div className="text-variable-collection-text-gray-defalt underline relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696] ">
                회사소개
              </div>
              <div className="text-variable-collection-text-gray-defalt underline relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                서비스이용약관
              </div>
              <div className="text-variable-collection-text-gray-defalt underline relative w-fit mt-[-1.00px] [font-family:'Inter'] font-medium text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap text-[#969696]">
                개인정보처리방침
              </div>
            </div>
            <p className="relative w-fit [font-family:'Inter'] font-medium text-variable-collection-text-gray-dark text-xs text-center tracking-[-0.13px] leading-[18px]">
              <span className="tracking-[-0.02px]">Ⓒ</span>
              <span className="text-xl tracking-[-0.04px] leading-[30px]">&nbsp;</span>
              <span className="text-base tracking-[-0.03px] leading-6 mr-[80px]">Spacspace.All right reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
