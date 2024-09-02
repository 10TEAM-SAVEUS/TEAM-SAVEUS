import DetectedTitle from "@/components/common/DetectedTitle";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import Choice from "@/assets/Choice.svg";
import Folder from "@/assets/Folder.svg";
import TopfileList from "@/assets/TopfileList.svg";
import FileList from "@/components/list/FileList";
import { cookies } from "next/headers";
import { Octokit } from "octokit";

async function getFileList(reponame: string, path: string | undefined) {
  const cookiestore = cookies();
  const token = cookiestore.get("user_token");

  const octokit = new Octokit({
    auth: token?.value,
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  const username = login;
  const newPath = path ? path : "";
  const repoContents = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: username,
      repo: reponame,
      path: newPath,
    }
  );
  return repoContents.data;
}

async function getFile(download_url?: string) {
  if (download_url) {
    try {
      const fileCodes = await fetch(download_url);

      return await fileCodes.text();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  return null;
}

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { path?: string; download_url?: string };
  params: { reponame: string };
}) {
  // const cookiestore = cookies();
  // const token = cookiestore.get("user_token");

  // const octokit = new Octokit({
  //   auth: token?.value,
  // });

  // const {
  //   data: { login },
  // } = await octokit.rest.users.getAuthenticated();
  // const username = login;
  // const repoContents = await octokit.request(
  //   "GET /repos/{owner}/{repo}/contents/{path}",
  //   {
  //     owner: username,
  //     repo: "Seoul-Budongsan",
  //     path: "/src",
  //   }
  // );

  // console.log(repoContents);
  const fileCodes = await getFile(searchParams.download_url);
  console.log(searchParams.path);
  console.log(fileCodes);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="ml-[70px] w-[1760px] h-[1439px] top-[148px] left-[80px] gap-[45px]">
          <DetectedTitle widthClass="w-[1740px]" text="sfacweb - 1 " />

          <div className="w-[1740px] h-[107px] flex items-center gap-[28px]">
            <div className="mt-[100px] ml-3 w-[247px] h-[107px] rounded-lg p-4 bg-[#6100FF] flex justify-center items-center">
              <span className="w-[170px] h-[29px] font-inter font-semibold text-[24px] text-white">
                폴더 전체 검사
              </span>
            </div>

            <div className="mt-[193px] ml-[10px] w-[1540px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700 relative">
              <Image
                src={TopfileList}
                alt="상단파일리스트"
                width={968}
                height={35}
                className="absolute top-[-65px]"
              />
              <div
                className="bg-[#00C308] h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>

          <div className="flex ml-[13px] mt-[133px] gap-[32px]">
            {/* <Image
                src={FileList}
                alt="파일리스트"
                width={247}
                height={994}
                className=""
              /> */}

            <FileList
              files={await getFileList(params.reponame, searchParams.path)}
            />

            <div className="w-[728px] h-[973px] border-[1px] rounded-lg p-[40px] gap-[32px] border-[#C3C3C3] flex flex-col justify-center items-center">
              {fileCodes ? (
                <pre className="w-full h-full overflow-auto whitespace-pre-wrap text-left">
                  {fileCodes}
                </pre>
              ) : (
                <>
                  <Image
                    src={Choice}
                    alt="파일선택"
                    width={48}
                    height={48}
                    className="mb-[5px]"
                  />
                  <span className="text-[#6100FF] font-inter text-[32px] font-medium leading-[38.73px] tracking-[-0.01em] text-center">
                    파일을 선택하세요
                  </span>
                </>
              )}
            </div>

            <div className="w-[728px] h-[973px] border-[1px] rounded-lg p-[40px] gap-[32px] border-[#C3C3C3] flex flex-col justify-center items-center">
              <Image
                src={Folder}
                alt="폴더"
                width={48}
                height={48}
                className="mb-[5px]"
              />
              <span className="font-inter text-[32px] font-medium leading-[38.73px] tracking-[-0.01em] text-center">
                분석할 파일이 없어요!
              </span>
            </div>
          </div>

          <button className="flex justify-center items-center ml-[10px] mt-[20px] w-[246px] h-[56px] rounded-lg p-4 py-5 gap-[10px] bg-[#6100FF]">
            <span className="w-[100px] h-[30px] font-inter font-semibold text-[24px] tracking-[-0.01em] text-[white]">
              검사하기
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
