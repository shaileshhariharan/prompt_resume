"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const promptConfig_1 = require("./promptConfig");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const groq = new groq_sdk_1.default({ apiKey: process.env.GROQ_API_KEY });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Prompt Resume BE");
});
//api endpoint
app.post("/generate", async (req, res) => {
    var _a, _b;
    try {
        const prompt = req.body.prompt;
        const resumePrompt = promptConfig_1.RESUME_PROMPT_TEMPLATE.replace("{{USER_INPUT}}", prompt);
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: resumePrompt,
                },
            ],
            model: "llama-3.3-70b-versatile",
        });
        const generatedResume = ((_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || "";
        const cleaned = generatedResume.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);
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
