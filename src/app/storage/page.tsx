import Image from "next/image";
import LibraryList from "@/components/common/LibraryList";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { cookies } from "next/headers";
import { Octokit } from "octokit";
import { postRepoList } from "@/firebase/data_adding";
import dynamic from "next/dynamic"; // 동적 import 사용
import Bg from "@/assets/group.svg";

// FolderCardPaginationClient를 동적으로 import되도록 함
const FolderCardPaginationClient = dynamic(
  () => import("@/components/storage/FolderCardPaginationClient"),
  {
    ssr: false, // 서버사이드 렌더링 비활성화 (클라이언트에서만 렌더링)
  }
);

const Storage = async () => {
  const cookiestore = cookies();
  const token = cookiestore.get("user_token");

  const octokit = new Octokit({
    auth: token?.value,
  });

  const {
    data: { login, avatar_url },
  } = await octokit.rest.users.getAuthenticated();
  const username = login; // 'username' 값을 가져옴

  const response = await octokit.request("/user/repos");
  const data: [{ name: string; created_at: string }] = response.data;
  const repolist = data.map(({ name, created_at }) => ({
    name,
    created_at,
  }));

  await postRepoList(username, repolist);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff]">
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[60px] tracking-[-0.01em] font-['Inter'] font-light text-[#6100ff] text-center whitespace-nowrap">
              containing code files
            </div>
            <div className="h-[110px] shrink-0 flex flex-row items-center justify-center py-0 px-[40px] bg-[#fff] border-[4px] border-solid border-[#6100ff] rounded-[999px] mt-[20px]">
              <div className="text-[60px] tracking-[-0.01em] font-['Inter'] text-[#6100ff] text-center whitespace-nowrap">
                MY Library
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1314px] flex flex-col items-center justify-center gap-[80px]">
            <section className="w-full flex items-center justify-between p-8 bg-[#f2f2f2] rounded-[42px]">
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
              <button className="px-2 py-1 mt-2 rounded-lg border-[2px] border-[#6100FF] cursor-pointer flex items-center">
                <span className="font-inter text-[16px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between">
                  프로필 정보
                </span>
              </button>
            </section>

            <LibraryList />
            {/* 클라이언트 컴포넌트로 데이터 전달 */}
            <FolderCardPaginationClient
              repos={repolist} // 서버에서 받은 저장소 목록
              username={username} // GitHub 사용자 이름
              itemsPerPage={12} // 페이지당 12개의 항목
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Storage;
