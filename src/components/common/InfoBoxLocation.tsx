export default function InfoBoxLocation(props: {
  code: string;
  description: string;
}) {
  return (
    <>
      <div className="grid w-full p-[20px] rounded-xl gap-[10px] bg-[#faf8ff]">
        <div className="flex items-center h-[34px]">
          <h1 className="min-w-fit h-[34px] text-[#6100ff] font-semibold text-[24px]">
            {props.code}
          </h1>
          <button className="h-[29px] ml-[8px] border-[2px] px-[4px] py-[1px] border-[#6100ff] rounded-2xl text-[14px] text-[#6100ff] leading-[19.36px] font-semibold tracking-[-0.1em]">
            위치보기
          </button>
        </div>
        <p className="text-[#3f3f3f] text-[18px] leading-[21.78px]">
          {props.description}
        </p>
      </div>
    </>
  );
}
