import React from "react";
import { FileText } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">PromptResume</h1>
        </div>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <a 
                href="#" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Templates
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                About
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
