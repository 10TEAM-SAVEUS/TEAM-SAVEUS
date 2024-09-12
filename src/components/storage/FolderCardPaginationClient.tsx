"use client"; // 클라이언트 컴포넌트로 설정
import { FC, useState } from "react";
import FolderCardClient from "@/components/storage/FolderCardClient"; // 기존 FolderCardClient를 가져오기

interface FolderCardPaginationClientProps {
  repos: { name: string; created_at: string }[]; // 저장소 목록
  username: string; // GitHub 사용자 이름
  itemsPerPage: number; // 페이지당 표시할 항목 수
}

const FolderCardPaginationClient: FC<FolderCardPaginationClientProps> = ({
  repos,
  username,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 해당하는 항목을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = repos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지네이션 버튼 생성
  const totalPages = Math.ceil(repos.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-[1314px] flex flex-col items-center justify-center gap-[48px]">
        <div className="flex flex-wrap items-center justify-center gap-[24px]">
          {currentRepos.map((repo, index) => (
            <FolderCardClient // 클라이언트 컴포넌트로 데이터 전달
              key={index}
              name={repo.name}
              subtitle={repo.created_at.slice(0, 10)}
              username={username} // username 추가
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
