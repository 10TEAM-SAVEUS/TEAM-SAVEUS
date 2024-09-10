// pages/api/analyzeCode.ts
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { code } = req.body as { code: string };
  const prompt = `
다음 코드의 취약점을 분석하고, 해당 취약점에 대해 자세히 설명해주세요. 그리고 취약점을 해결할 수 있는 수정된 코드를 한국어로 제공해주세요.
취약점이 없다면 취약점이 없습니다.

코드:
${code}

분석할 내용은 다음과 같습니다:
1. 코드에 존재하는 주요 취약점은 무엇인지 설명하고,
2. 해당 취약점을 어떻게 수정할 수 있을지 구체적인 방안을 제시하고,
3. 수정된 코드 예시를 포함해주세요.

`;

  try {
    // 채팅 엔드포인트를 사용하여 요청
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 800, // 필요에 따라 토큰 수 조정
      temperature: 0.7,
    });
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error analyzing code:", error);
    res.status(500).json({ error: "Failed to analyze the code" });
  }
}
