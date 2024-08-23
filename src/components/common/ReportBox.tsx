"use client";

import React from "react";

type LabelType = "취약성 보고서" | "취약성 경고" | "취약성 알림";

export function ReportBox({ label, title, description }: { label: LabelType; title: string; description: string }) {
  const labelClasses: { [key in LabelType]: { background: string; textColor: string } } = {
    "취약성 보고서": {
      background: "bg-[#F1F1F1]",
      textColor: "text-gray-500",
    },
    "취약성 경고": {
      background: "bg-[#FFEFEF]",
      textColor: "text-[#FF6D6D]",
    },
    "취약성 알림": {
      background: "bg-[#FAF8FF]",
      textColor: "text-[#6100FF]",
    },
  };

  const { background, textColor } = labelClasses[label] || {
    background: "bg-[#FAF8FF]",
    textColor: "text-[#6100FF]",
  };

  return (
    <div className="w-[422px] h-[217px] pt-[20px] border-[1px] rounded-[12px] border-[#E0CEFF] flex justify-center items-center relative">
      <a
        className={`absolute top-0 left-0 mt-2 ml-2 flex items-center justify-center leading-[16px] tracking-[-0.01em] text-left text-[16px] w-[116px] h-[35px] rounded-full font-semibold border-white font-inter border-[1px]   ${background} ${textColor}`}
      >
        {label}
      </a>

      <div className="w-[355px] h-[71px] font-inter font-medium leading-[39px] mb-[3px] text-left">
        <span className="text-[24px] leading-none block">{title}</span>
        <span className="text-[16px] font-normal font-inter text-[#969696] block mt-4">{description}</span>
      </div>
    </div>
  );
}

export default function GridContainer() {
  const dummyData = [
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 경고" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 알림" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 경고" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 알림" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 알림" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 경고" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
    {
      label: "취약성 보고서" as LabelType,
      title: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
      description: "2024.03.08 13:30:24",
    },
  ];

  return (
    <div className="w-full max-w-[1300px] p-4 mx-auto grid grid-cols-3 gap-4 justify-items-center items-center">
      {dummyData.map((data, index) => (
        <ReportBox key={index} label={data.label} title={data.title} description={data.description} />
      ))}
    </div>
  );
}
