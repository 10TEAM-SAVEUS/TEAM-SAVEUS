// C:\HYUNWOO\next\saveus\TEAM-SAVEUS\src\components\storage\ProfileLinkSection.tsx
"use client"; // 클라이언트 전용 컴포넌트

import { useRouter } from "next/navigation";
import Image from "next/image";
import Arrow from "@/assets/Arrow.svg"; // Arrow.svg 파일을 정적으로 import (이미지처럼 사용)

const ProfileLinkSection = ({
  avatar_url,
  username,
}: {
  avatar_url: string;
  username: string;
}) => {
  const router = useRouter(); // 라우터 훅 사용

  return (
    <section
      className="w-full flex items-center justify-between p-8 bg-[#f2f2f2] rounded-[42px] cursor-pointer"
      onClick={() => router.push("/profile")} // 클릭 이벤트를 클라이언트 컴포넌트에서 처리
    >
      <section className="flex items-center gap-11">
        <Image
          src={avatar_url}
          alt="ProfileImage"
          height={107}
          width={107}
          className="object-cover rounded-full"
        />
        <section className="font-['Inter'] font-medium text-[40px] tracking-tight text-[#343330]">
          <h1 className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-variable-collection-text-gray-dark text-[40px] tracking-[-0.40px] leading-[normal]">
            Hello,
            <br />
            {username}
          </h1>
        </section>
      </section>
      <button>
        {/* next/image로 SVG 파일을 최적화된 이미지로 렌더링 */}
        <Image src={Arrow} alt="Arrow Icon" height={50} width={50} />
      </button>
    </section>
  );
};

export default ProfileLinkSection;
