import { FC } from "react";
import DummyProfile from "@/assets/DummyProfile.png";
import Image from "next/image";
import LibraryList from "@/components/LibraryList";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { cookies } from "next/headers";

import { Octokit, App } from "octokit";
import { postRepoList } from "@/firebase/data_adding";
import { TRepoList } from "@/type/type";
import Link from "next/link";
interface Folder {
  name: string;
  subtitle: string;
}

const folders: Folder[] = [
  { name: "Foder name", subtitle: "sub title" },
  { name: "sfacweb - 2", subtitle: "sfacweb - 2" },
  { name: "sfacweb - 3", subtitle: "sfacweb - 3" },
  { name: "sfacweb - 4", subtitle: "sfacweb - 4" },
  { name: "sfacweb - 5", subtitle: "sfacweb - 5" },
  { name: "sfacweb - 6", subtitle: "sfacweb - 6" },
  { name: "sfacweb - 7", subtitle: "sfacweb - 7" },
  { name: "sfacweb - 8", subtitle: "sfacweb - 8" },
  { name: "sfacweb - 9", subtitle: "sfacweb - 8" },
  { name: "sfacweb - 10", subtitle: "sfacweb - 9" },
  { name: "sfacweb - 11", subtitle: "sfacweb - 10" },
  { name: "sfacweb - 12", subtitle: "sfacweb - 11" },
];

interface FolderCardProps {
  name: string;
  subtitle: string;
}

const FolderCard: FC<FolderCardProps> = ({ name, subtitle }) => (
  <div className="w-[310px] h-[200px] shrink-0 flex flex-col items-start justify-between p-[20px] bg-[#fff] border-[1px] border-solid border-[#e0ceff] rounded-[12px]">
    <div className="w-[270px] flex flex-row items-center justify-between">
      <div className="w-[60px] h-[30px] shrink-0 flex flex-row items-center justify-center bg-[#fff] border-[1px] border-solid border-[#3f3f3f] rounded-[999px] overflow-hidden">
        <div className="w-[60px] h-[30px] shrink-0 flex flex-row items-center justify-center">
          <div className="text-[16px] leading-[16px] tracking-[-0.01em] font-['Inter'] text-[#000] whitespace-nowrap">
            label
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[4px]">
        <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
        <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
        <div className="w-[3px] h-[3px] shrink-0 bg-[#3f3f3f] rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-end gap-[10px]">
      <div className="text-[28px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
        {name}
      </div>
      <div className="text-[16px] leading-[16px] tracking-[-0.01em] font-['Inter'] text-[#3f3f3f] whitespace-nowrap">
        {subtitle}
      </div>
    </div>
  </div>
);

const MyFirst: FC = async () => {
  const cookiestore = cookies();
  const token = cookiestore.get("user_token");

  const octokit = new Octokit({
    auth: token?.value,
  });

  const {
    data: { login, avatar_url, id },
  } = await octokit.rest.users.getAuthenticated();
  const username = login;
  console.log(username, avatar_url);

  const response = await octokit.request("/user/repos");
  const data: [{ name: string; created_at: string }] = response.data;
  const repolist: TRepoList = data.map(({ name, created_at }) => ({
    name,
    created_at,
  }));

  postRepoList(username, repolist);

  // const repoContents = await octokit.request(
  //   "GET /repos/{owner}/{repo}/contents/{path}",
  //   {
  //     owner: "foopky",
  //     repo: "Seoul-Budongsan",
  //     path: "",
  //   }
  // );
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff]">
        {" "}
        <div className="flex flex-col items-center justify-center gap-[50px]">
          {" "}
          <div className="flex flex-col items-center justify-center">
            {" "}
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
            {" "}
            <section className="w-full flex items-center justify-between">
              {" "}
              <section className="flex justify-between items-center gap-3">
                <Image
                  src={avatar_url}
                  alt="ProfileImage"
                  height={80}
                  width={80}
                />
                <section className="font-medium text-[28px] tracking-tight text-center">
                  {" "}
                  <h1>Hello,</h1>
                  <h1>{username}</h1>
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
              {" "}
              <div className="flex flex-wrap items-center justify-center gap-[24px]">
                {repolist.map((repo, index) => (
                  <Link
                    href={`http://localhost:3000/ui_analyze/${repo.name}`}
                    key={index}
                  >
                    <FolderCard name={repo.name} subtitle={repo.created_at} />
                  </Link>
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
