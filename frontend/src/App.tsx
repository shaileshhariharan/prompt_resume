import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResumePreview from "./components/ResumePreview";
import Footer from "./components/Footer";
import { Resume } from "./types/resume";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <InputForm
              setResume={setResume}
              setIsLoading={setIsLoading}
              setError={setError}
            />
          </div>

          <div className="relative min-h-[400px] bg-white rounded-xl shadow-sm p-6 md:p-8">
            {isLoading ? (
              <LoadingIndicator />
            ) : error ? (
              <div className="text-center text-red-500 p-4">
                <p className="font-medium">Error: {error}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Please try again or adjust your prompt.
                </p>
              </div>
            ) : resume ? (
              <ResumePreview resume={resume} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <p className="text-center text-lg">
                  Your resume will appear here
                </p>
                <p className="text-center text-sm">
                  Enter your details in the form and click "Generate Resume"
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
