import { NextApiRequest, NextApiResponse } from "next";
import openai from "../../utils/openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  // 메시지 길이 제한: 50자로 제한
  const MAX_MESSAGE_LENGTH = 50;

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    const errorMessage = `메시지 길이는 ${MAX_MESSAGE_LENGTH}자 이내로 보내주세요.`;

    // 에러 메시지를 AI 응답 형식으로 반환
    return res.status(200).json({
      response: errorMessage,
    });
  }

  try {
    // AI의 답변 생성 요청
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert in analyzing CNNVD (China's National Vulnerability Database). Always respond in Korean.",
        }, // 한국어로 답변하라는 지침
        { role: "user", content: message },
      ],
    });

    // AI 응답이 있는지 체크
    const aiResponse = completion?.choices?.[0]?.message?.content ?? "추후 검토 후 다시 연락드리겠습니다.";

    // 애매한 응답을 체크하는 패턴들
    const ambiguousResponses = ["잘 모르겠습니다", "확실하지 않습니다", "명확하지 않습니다", "답변하기 어렵습니다"];
    const isAmbiguous = ambiguousResponses.some((phrase) => aiResponse.includes(phrase));

    // 애매한 답변인 경우 "추후 검토 후 다시 연락드리겠습니다." 출력
    if (isAmbiguous) {
      res.status(200).json({ response: "추후 검토 후 다시 연락드리겠습니다." });
    } else {
      // 정상적인 AI 응답 반환
      res.status(200).json({ response: aiResponse });
    }
  } catch (error) {
    console.error(error);

    // 서버 에러 메시지를 AI 응답 형식으로 반환
    return res.status(500).json({
      response: "서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.",
    });
  }
}
