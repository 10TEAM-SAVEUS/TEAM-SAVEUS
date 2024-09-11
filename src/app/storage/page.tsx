//C:\HYUNWOO\next\saveus\TEAM-SAVEUS\src\app\storage.tsx
import Image from "next/image";
import LibraryList from "@/components/LibraryList";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { cookies } from "next/headers";
import { Octokit } from "octokit";
import { postRepoList } from "@/firebase/data_adding";
import { TRepoList } from "@/type/type";
import FolderCardClient from "@/components/FolderCardClient"; // 클라이언트 컴포넌트 가져오기

const MyFirst = async () => {
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
  const repolist: TRepoList = data.map(({ name, created_at }) => ({
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
            <section className="w-full flex items-center justify-between">
              <section className="flex justify-between items-center gap-3">
                <Image
                  src={avatar_url}
                  alt="ProfileImage"
                  height={80}
                  width={80}
                />
                <section className="font-medium text-[28px] tracking-tight text-center">
                  <h1>Hello,</h1>
                  <h1>{username}</h1> {/* username 출력 */}
                </section>
              </section>
              <button className="px-2 py-1 mt-2 rounded-lg border-[2px] border-[#6100FF] cursor-pointer flex items-center">
                <span className="font-inter text-[16px] text-[#6100ff] leading-[29px] tracking-[-0.01em] flex items-center justify-between">
                  프로필 정보
                </span>
              </button>
            </section>
            <hr className="w-full h-[1px] bg-[#bababa] border-0" />
            <LibraryList />
            <div className="w-[1314px] flex flex-col items-center justify-center gap-[48px]">
              <div className="flex flex-wrap items-center justify-center gap-[24px]">
                {repolist.map((repo, index) => (
                  <FolderCardClient // 클라이언트 컴포넌트로 데이터 전달
                    key={index}
                    name={repo.name}
                    subtitle={repo.created_at.slice(0, 10)}
                    username={username} // username 추가
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyFirst;
