// C:\HYUNWOO\next\saveus\TEAM-SAVEUS\src\components\storage\FolderCardPaginationClient.tsx
"use client"; // 클라이언트 컴포넌트로 설정
import { FC, useState } from "react";
import FolderCardClient from "@/components/storage/FolderCardClient"; // 기존 FolderCardClient를 가져오기
import LibraryList from "@/components/storage/StorageLibrarylist"; // LibraryList 컴포넌트 임포트

interface FolderCardPaginationClientProps {
  repos: { name: string; created_at: string; status: string }[]; // 상태 필드 추가
  username: string; // GitHub 사용자 이름
  itemsPerPage: number; // 페이지당 표시할 항목 수
}

const FolderCardPaginationClient: FC<FolderCardPaginationClientProps> = ({
  repos,
  username,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("모든상태"); // 필터 상태 관리
  const [repoStatus, setRepoStatus] = useState<{ [name: string]: string }>({}); // 레포지토리 상태 관리

  const updateStatus = (name: string, status: string) => {
    setRepoStatus((prevStatus) => ({
      ...prevStatus,
      [name]: status,
    }));
  };

  // 필터링된 레포지토리 목록 계산
  const filteredRepos = repos.filter((repo) => {
    const status = repoStatus[repo.name] || repo.status;
    if (filterType === "모든상태") return true;
    return status === filterType; // 상태가 filterType과 일치하는 경우만 포함
  });

  // 현재 페이지에 해당하는 항목을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지네이션 버튼 생성
  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-[1314px] flex flex-col items-center justify-center gap-[48px]">
        <LibraryList setFilterType={setFilterType} /> {/* 필터 타입 설정 */}
        <div className="flex flex-wrap items-center justify-center gap-[24px]">
          {currentRepos.map((repo, index) => (
            <FolderCardClient // 클라이언트 컴포넌트로 데이터 전달
              key={index}
              name={repo.name}
              subtitle={repo.created_at.slice(0, 10)}
              username={username} // username 추가
              updateStatus={updateStatus} // 상태 업데이트 함수 전달
            />
          ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <div className="flex items-center justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#f0f0f0] text-[#000000]"
                  : "bg-[#ffffff] text-[#000000]"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FolderCardPaginationClient;
