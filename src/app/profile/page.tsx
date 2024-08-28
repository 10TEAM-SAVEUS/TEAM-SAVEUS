import Header from "@/components/common/Header";
import Image from "next/image";
import CattleLeft from "@/assets/CattleLeft.svg";
import DummyProfile from "@/assets/DummyProfile.png";
import Footer from "@/components/common/Footer";
import { cookies } from "next/headers";
import { Octokit } from "octokit";
export default async function Page() {
  const cookiestore = cookies();
  const token = cookiestore.get("user_token");
  const octokit = new Octokit({
    auth: token?.value,
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen mb-[200px]">
        <div className="flex-grow flex flex-col items-center justify-center gap-[6vh] mb-[80px]">
          <button className="p-2 pr-4 h-[56px] rounded-full border-[4px] border-[#6100FF] cursor-pointer flex items-center">
            <span className="font-inter text-[24px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between gap-[12px]">
              <Image src={CattleLeft} alt="CattleLeft" height={27} /> Profile
              Information
            </span>
          </button>
          <section className="w-[70vw] h-[50vh] flex flex-col items-start justify-between">
            <section className="w-full flex items-start justify-between">
              <section className="flex justify-between items-center gap-3">
                <Image
                  src={DummyProfile}
                  alt="ProfileImage"
                  height={80}
                ></Image>
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
            <hr className="w-full h-[1px] min-h-[1px] bg-[#bababa] border-0 mt-[80px]" />
            <section className="w-full flex items-start justify-between">
              <div className="text-[32px] tracking-[-0.01em] font-semibold text-[#3f3f3f] whitespace-nowrap mt-[83px]">
                내 정보
              </div>
            </section>

            <section className="w-full flex flex-col items-start justify-between">
              <div className="text-[24px] font-medium text-[#3f3f3f] whitespace-nowrap">
                계정
              </div>
              <div className="w-[866px] flex flex-row items-start justify-start p-[12px] bg-[#f1f1f1] border-[1px] border-solid border-[#e6e6e6] rounded-[8px]">
                <div className="text-[18px] leading-[150%] tracking-[-0.01em] font-medium text-[#d6d6d6] whitespace-nowrap">
                  Marry@gmail.com
                </div>
              </div>
            </section>
            <hr className="w-full h-[1px] min-h-[1px] bg-[#bababa] border-0 mt-[83px]" />
            <section className="w-full flex flex-col items-start justify-between">
              <div className="text-[32px] tracking-[-0.01em] font-semibold text-[#3f3f3f] whitespace-nowrap mt-[83px]">
                라이브러리
              </div>
              <section className="flex flex-col items-start justify-between">
                <div className="w-[1314px] flex flex-row items-center justify-start">
                  <div className="text-[24px] font-medium text-[#3f3f3f] whitespace-nowrap">
                    검출된 파일
                  </div>
                </div>
                <div className="w-[1314px] flex flex-row items-center justify-start">
                  <div className="text-[24px] font-medium text-[#3f3f3f] whitespace-nowrap">
                    스크랩
                  </div>
                </div>
              </section>
            </section>
            <hr className="w-full h-[1px] min-h-[1px] bg-[#bababa] border-0 mt-[80px]" />
            <section className="w-full flex flex-col items-start justify-between">
              <div className="text-[24px] font-medium text-[#3f3f3f] whitespace-nowrap mt-[83px]">
                설정
              </div>
              <div className="text-[24px] font-medium text-[#3f3f3f] whitespace-nowrap">
                고객센터
              </div>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
