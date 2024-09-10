"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("code");

  useEffect(() => {
    if (search) {
      const params = {
        client_id: "Ov23liuvo3Bv9YQQXe1m",
        client_secret: `${process.env.NEXT_PUBLIC_Client_secrets}`,
        code: `${search}`,
      };
      console.log(`${process.env.NEXT_PUBLIC_Client_secrets}`);
      console.log(params);
      fetch(`http://localhost:3000/api/request_token`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }).then(() => {
        router.push("/ui_main"); // fetch 요청 후에 실행되도록 보장
      });
    }
  }, [search]);

  return null;
}
