"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
import ChatBot from "./ChatBot";

const ChatBotContainer = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // 버튼 클릭 시 챗봇의 가시성을 토글
  const toggleChatBot = () => {
    setIsChatVisible((prevVisible) => !prevVisible);
  };

  // 드래그 종료 시 버튼 위치 저장
  const handleDragStop = (e: any, data: any) => {
    setButtonPosition({ x: data.x, y: data.y });
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Draggable로 버튼을 감싸면 드래그 가능 */}
      <Draggable onStop={handleDragStop}>
        <button onClick={toggleChatBot} className="p-0 border-none bg-transparent focus:outline-none">
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_3239_7434)">
              <rect x="0.9375" y="0.456543" width="76" height="76" rx="38" fill="white" fillOpacity="0.1" />
              <rect
                x="1.66827"
                y="1.18731"
                width="74.5385"
                height="74.5385"
                rx="37.2692"
                stroke="#6100FF"
                strokeWidth="1.46154"
              />
              <path
                d="M54.8281 40.0678C53.7781 48.1003 45.8331 54.6103 37.7306 54.6103H26.0581C25.0674 54.6107 24.1492 54.0907 23.64 53.2409C23.1308 52.391 23.1054 51.3362 23.5731 50.4628L24.0456 49.5703C24.5531 48.7059 24.5531 47.6346 24.0456 46.7703C20.0679 40.487 20.6892 32.3372 25.5733 26.7295C30.4575 21.1217 38.4448 19.3875 45.2147 22.4649C51.9845 25.5424 55.9295 32.7007 54.9156 40.0678H54.8281Z"
                fill="#6100FF"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_3239_7434"
                x="-19.0625"
                y="-19.5435"
                width="116"
                height="116"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3239_7434" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3239_7434" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </Draggable>

      {/* 챗봇이 보일 때만 렌더링, 버튼의 바로 아래에 위치 */}
      {isChatVisible && (
        <div
          style={{
            position: "absolute",
            top: buttonPosition.y + 90,
            left: buttonPosition.x,
          }}
        >
          <ChatBot />
        </div>
      )}
    </div>
  );
};

export default ChatBotContainer;
