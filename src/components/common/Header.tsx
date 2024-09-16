import Image from "next/image";
import Link from "next/link";
import Bug from "/src/assets/Bug.svg";
import { Aldrich } from "next/font/google";

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
});
export default function Header() {
  return (
    <header
      className="w-full 
        top-[269px] 
        left-[139px] 
        p-[48px_80px] 
        flex 
        items-center 
        justify-between
      "
    >
      <nav className="flex items-center">
        <Link href="/home" className="flex items-center">
          <Image
            src={Bug}
            alt="FLAWDETECTOR 로고"
            width={34}
            height={35}
            className=""
          />
          <p
            className={`${aldrich.className} flex text-[40px] font-normal leading-[39px] tracking-[-0.01em] pl-3`}
          >
            FLAWDETECTOR
          </p>
        </Link>
        <Link
          href="/취약점DB"
          className="flex flex-col ml-[100px] text-[18px] font-medium leading-[22px] text-left"
        >
          취약점 DB
        </Link>
      </nav>
      <nav>
        <Link
          href="/MY저장소"
          className="pr-20 text-[18px] font-medium leading-[22px] text-left"
        >
          MY 저장소
        </Link>
      </nav>
    </header>
  );
}
