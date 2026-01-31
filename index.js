import express from "express";
import { model } from "./gemini.js";
import { remember, recall } from "./worldAI.js";

const app = express();
app.use(express.json());

app.post("/world", async (req, res) => {
  const { input } = req.body;

  remember("player", input);

  const history = recall(12);
  const prompt = history.map(m => `${m.role}: ${m.content}`).join("\n");

  const result = await model.generateContent(prompt + "\nAI:");
  const reply = result.response.text();

  remember("ai", reply);
  res.json({ reply });
});

app.listen(3000, () =>
  console.log("🌍 AI World Server running on port 3000")
);
