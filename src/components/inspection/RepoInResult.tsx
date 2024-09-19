import logo from "/src/assets/logo.svg";
import right from "/src/assets/Right.svg";
import Image from "next/image";

export default function RepoInResult() {
  return (
    <section className="flex flex-row justify-between items-center bg-[#000000] h-[48px] w-[146px] border rounded-[14px] p-[10px] gap-[2px]">
      <Image src={logo} alt="logo" />
      <p className="text-white text-lg font-medium">결과보기</p>
      <Image src={right} alt="right" />
    </section>
  );
}
