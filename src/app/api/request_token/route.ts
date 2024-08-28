import { cookies } from "next/headers";

export async function POST(request: Request) {
  const receiveBody = await request.json();
  const token = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    body: JSON.stringify(receiveBody),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  const user_token = await token.json();

  if (user_token.access_token) {
    // 쿠키 설정
    const cookie = cookies();
    cookie.set({
      name: "user_token",
      value: user_token.access_token,
      path: "/", // 쿠키의 경로를 설정합니다.
      httpOnly: false, // 클라이언트 자바스크립트에서 접근할 수 없도록 합니다.
      secure: false, // HTTPS에서만 전송되도록 합니다.
    });
    return Response.json({ message: "token allocated" });
  } else return Response.json({ message: "token not found" });
}
