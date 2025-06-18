import React, { useState } from 'react';

const HowToPlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRules = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
      <button
        onClick={toggleRules}
        className="w-full flex justify-between items-center py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:bg-yellow-400 transition-colors duration-200"
        aria-label={isOpen ? 'Hide game rules' : 'Show game rules'}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">How to Play</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-2 p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md border border-yellow-400/50">
          <h2 className="text-xl font-bold mb-2">How to Play Dragon Ball Memory Game</h2>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            <li>Click each character card exactly once to earn a point.</li>
            <li>Avoid clicking the same card twice, or the game will end!</li>
            <li>Cards shuffle after each click, so stay sharp!</li>
            <li>Your score resets on game over, but your high score is saved.</li>
            <li>Click "Restart" after a game over to try again.</li>
            <li>Aim for the highest score by clicking all unique cards!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;