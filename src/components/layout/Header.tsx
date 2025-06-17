import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900 to-gray-700 shadow-md rounded-b-lg border-b border-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 justify-center">
        <p
          className="block py-4 text-2xl font-bold text-white transition transform hover:scale-105"
          aria-label="Memory Game Home"
        >
          Memory Game
        </p>
      </div>
    </header>
  );
};

export default Header;