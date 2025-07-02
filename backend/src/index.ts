import express, { json } from "express";
import cors from "cors";
import { RESUME_PROMPT_TEMPLATE } from "./promptConfig";
import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8080;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prompt Resume BE");
});

//api endpoint
app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const resumePrompt = RESUME_PROMPT_TEMPLATE.replace(
      "{{USER_INPUT}}",
      prompt
    );

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(resumePrompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON block if the model wraps it in markdown (```json ... ```)
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    res.json(parsed);
    console.log(parsed);

    res.json(parsed);
    console.log(parsed);
  } catch (error) {
    console.error("Error generating resume:", error);
    res.json({ error: "Something went wrong while generating the resume." });
  }
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
