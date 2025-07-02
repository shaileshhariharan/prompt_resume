"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const promptConfig_1 = require("./promptConfig");
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Prompt Resume BE");
});
//api endpoint
app.post("/generate", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const resumePrompt = promptConfig_1.RESUME_PROMPT_TEMPLATE.replace("{{USER_INPUT}}", prompt);
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
    }
    catch (error) {
        console.error("Error generating resume:", error);
        res.json({ error: "Something went wrong while generating the resume." });
    }
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
