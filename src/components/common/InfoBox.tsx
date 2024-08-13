export default function InfoBox(props: { code: string; description: string }) {
  return (
    <>
      <div className="grid w-full p-[20px] rounded-xl gap-[10px] bg-[#faf8ff]">
        <div className="h-[34px]">
          <h1 className="h-[34px] text-[#6100ff] font-semibold text-[24px]">
            {props.code}
          </h1>
        </div>
        <p className="text-[#3f3f3f] text-[18px] leading-[21.78px]">
          {props.description}
        </p>
      </div>
    </>
  );
}
