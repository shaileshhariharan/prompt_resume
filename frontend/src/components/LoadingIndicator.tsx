import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-300 animate-spin absolute top-4 left-4"></div>
      </div>
      <p className="mt-6 text-gray-600 text-center">
        Crafting your professional resume...
      </p>
      <p className="mt-2 text-sm text-gray-500 text-center max-w-xs">
        Our AI is analyzing your background and creating a tailored resume just for you. This may take a moment.
      </p>
    </div>
  );
};

export default LoadingIndicator;