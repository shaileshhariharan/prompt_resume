import React, { useState } from "react";
import { generateResume } from "../services/resumeService";
import { Resume } from "../types/resume";
import { Sparkles } from "lucide-react";
import axios from "axios";

interface InputFormProps {
  setResume: (resume: Resume) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  setResume,
  setIsLoading,
  setError,
}) => {
  const [prompt, setPrompt] = useState<string>("");

  const examplePrompts = [
    "Software developer with 5 years of experience in React and Node.js, previously worked at Google and Amazon",
    "Marketing professional with expertise in digital marketing, social media campaigns, and brand management",
    "Recent computer science graduate looking for entry-level positions in data science",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt to generate your resume");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const isExample = examplePrompts.includes(prompt);

      let generatedResume;

      if (isExample) {
        generatedResume = await generateResume(prompt);
      } else {
        const response = await axios.post("https://prompt-resume-qgol.vercel.app/generate", {
          prompt,
        });
        generatedResume = response.data;
      }

      setResume(generatedResume);
    } catch (error) {
      console.error("Error generating resume:", error);
      setError("Failed to generate resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Create Your Resume
      </h2>
      <p className="mb-6 text-gray-600">
        Describe your background, skills, and experience. Our AI will generate a
        professional resume for you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="prompt"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Professional Background
          </label>
          <textarea
            id="prompt"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            placeholder="E.g., I'm a software engineer with 5 years of experience in web development using React, Node.js, and AWS..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Example prompts:</p>
          <div className="space-y-2">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                type="button"
                className="text-sm text-left text-blue-600 hover:text-blue-800 hover:underline block truncate"
                onClick={() => handleExampleClick(example)}
              >
                {example.length > 70
                  ? example.substring(0, 70) + "..."
                  : example}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow transition-colors duration-200 flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default InputForm;
