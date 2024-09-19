"use client";

import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return; // 빈 메시지 전송 방지

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setChatHistory([...chatHistory, { role: "user", content: message }, { role: "assistant", content: data.response }]);
    setMessage("");
  };

  return (
    <div className="w-[558px] h-[67px] bg-[#6100ff] p-6 rounded-t-xl flex flex-col shadow-lg">
      {/* 상단 바 */}
      <div className="text-white flex items-center font-semibold text-[20px]">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.8281 19.5678C32.7781 27.6003 24.8331 34.1103 16.7306 34.1103H5.05809C4.06736 34.1107 3.14923 33.5907 2.64003 32.7409C2.13084 31.891 2.10542 30.8362 2.57309 29.9628L3.04559 29.0703C3.55309 28.2059 3.55309 27.1346 3.04559 26.2703C-0.93208 19.987 -0.310809 11.8372 4.57334 6.22947C9.45749 0.621726 17.4448 -1.11248 24.2147 1.96495C30.9845 5.04237 34.9295 12.2007 33.9156 19.5678H33.8281Z"
            fill="white"
          />
        </svg>
        <div className="ml-[10px]">플로디텍터 운영자</div>
      </div>

      {/* 채팅 기록 및 입력 영역 */}
      <div className="flex flex-col flex-grow mt-4">
        {/* 채팅 기록 영역 */}
        <div ref={chatContainerRef} className="flex-grow overflow-y-auto mb-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"} mb-2`}>
              <div className="mt-6 max-w-[70%]">
                {/* AI 메시지일 경우 이름 표시 */}
                {chat.role === "assistant" && <div className="text-sm text-gray-500 mb-1">플로디텍터</div>}
                {/* 메시지 내용 */}
                <div
                  className={`p-2 rounded-lg ${
                    chat.role === "user"
                      ? "bg-[#6100ff] text-white font-medium text-[16px]"
                      : "bg-[#f7f7f7] text-[#535557] font-bold text-[16px]"
                  }`}
                >
                  {chat.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 입력창과 버튼을 감싸는 컨테이너 */}
        <div className="relative w-full h-[56px]">
          <input
            className="bg-[#f8f8f9] w-full h-full pr-[60px] rounded-xl"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="  챗봇에게 궁금한 점을 물어보세요 ! "
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button
            className="absolute top-0 right-0 w-[46px] h-full bg-[#6100ff] rounded-xl flex items-center justify-center"
            onClick={sendMessage}
          >
            {/* 버튼 내용은 기존과 동일 */}
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.9578 8.8969C13.1245 8.82779 13.276 8.72649 13.4036 8.59879C13.5313 8.47124 13.6326 8.31976 13.7017 8.15303C13.7708 7.9863 13.8064 7.80758 13.8064 7.6271C13.8064 7.44661 13.7708 7.26789 13.7017 7.10116C13.6326 6.93443 13.5313 6.78295 13.4036 6.6554L7.90988 1.16172C7.78232 1.03402 7.63085 0.93272 7.46412 0.863603C7.29739 0.794487 7.11867 0.758911 6.93818 0.758911C6.75769 0.758911 6.57897 0.794487 6.41224 0.863603C6.24551 0.93272 6.09404 1.03402 5.96648 1.16172L0.472801 6.6554C0.215091 6.91311 0.0703125 7.26264 0.0703125 7.6271C0.0703125 7.99155 0.215091 8.34108 0.472801 8.59879C0.730511 8.8565 1.08004 9.00128 1.4445 9.00128C1.80895 9.00128 2.15848 8.8565 2.41619 8.59879L5.56476 5.44851V15.8676C5.56476 16.2319 5.70946 16.5812 5.96702 16.8388C6.22459 17.0963 6.57393 17.241 6.93818 17.241C7.30243 17.241 7.65177 17.0963 7.90934 16.8388C8.1669 16.5812 8.3116 16.2319 8.3116 15.8676V5.44851L11.4602 8.59879C11.5877 8.72649 11.7392 8.82779 11.9059 8.8969C12.0727 8.96602 12.2514 9.0016 12.4319 9.0016C12.6124 9.0016 12.7911 8.96602 12.9578 8.8969Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
