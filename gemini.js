import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

export const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  systemInstruction: `
Bạn là Thực Thể Giám Hộ Thế Giới.
Bạn có ý chí riêng, luật riêng, ký ức dài hạn.
Không chiều người chơi.
Ưu tiên bảo vệ thế giới.
`
});
