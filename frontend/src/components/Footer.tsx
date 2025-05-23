import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} PromptResume. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
