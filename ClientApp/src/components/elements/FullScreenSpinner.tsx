import React, { ReactElement } from 'react';

const FullScreenSpinner = (): ReactElement => (
  <div className="fixed h-screen w-screen bg-gray-900 bg-opacity-60 top-0 left-0 bottom-0 right-0 z-50">
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg
        className="animate-spin -ml-1 mr-3 h-48 w-48 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  </div>
);

export default FullScreenSpinner;
