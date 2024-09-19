// C:\HYUNWOO\next\saveus\TEAM-SAVEUS\src\app\storage\page.tsx
import LibraryList from "@/components/common/LibraryList";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { cookies } from "next/headers";
import { Octokit } from "octokit";
import { postRepoList } from "@/firebase/data_adding";
import dynamic from "next/dynamic"; // 동적 import 사용
import ProfileLinkSection from "@/components/storage/ProfileLinkSection"; // 클라이언트 컴포넌트

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
  const username = login;

  const response = await octokit.request("/user/repos");
  const data: [{ name: string; created_at: string; status: string }] =
    response.data; // status 필드 추가
  const repolist = data.map(({ name, created_at, status }) => ({
    name,
    created_at,
    status, // 상태 필드 추가
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
            <ProfileLinkSection avatar_url={avatar_url} username={username} />
            <FolderCardPaginationClient
              repos={repolist} // 필터링된 저장소 목록 전달
              username={username}
              itemsPerPage={12}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Storage;
