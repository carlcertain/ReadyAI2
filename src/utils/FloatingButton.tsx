import React from 'react';

type FloatingActionButtonProps = {
  url: string;
  label: string;
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ url, label }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
    >
      {label}
    </a>
  );
};

export default FloatingActionButton;