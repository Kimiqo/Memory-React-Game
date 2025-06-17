import React from 'react';

const Header: React.FC = () => {

  return(
  <header className="w-full shadow-sm rounded-b-lg border-b border-gray-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <a href="/" className="block py-4">
        Memory Game
      </a>
    </div>
  </header>
  );
};

export default Header;