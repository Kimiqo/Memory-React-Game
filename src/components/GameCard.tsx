import React from 'react';

interface CardProps {
  id: number;
  name: string;
  image: string;
  handleClick: () => void;
}

const GameCard: React.FC<CardProps> = ({ name, image, handleClick }) => {
  return (
    <div
      className="relative w-44 h-80 bg-neutral-900 text-gray-50 rounded-2xl shadow-inner shadow-gray-50 overflow-hidden cursor-pointer group hover:skew-x-6 hover:-skew-y-6 transition-transform duration-300"
      onClick={handleClick}
    >
      <div className="relative z-10 flex flex-col justify-between items-center h-full p-4">
        <div className="relative after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:blur-xl after:-z-10 after:bottom-24 after:right-12 after:group-hover:translate-x-8 after:group-hover:translate-y-12 after:transition-transform before:absolute before:w-12 before:h-12 before:bg-sky-400 before:rounded-full before:blur-xl before:-z-10 before:top-16 before:right-12 before:group-hover:translate-x-8 before:group-hover:-translate-y-8 before:transition-transform">
          <img src={image} alt={name} className="w-full h-56 object-cover" />
        </div>
        <div className="flex items-center gap-2 text-sm font-light">
          <span>{name}</span>
          <svg
            className="w-4 h-4 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              strokeWidth={8}
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GameCard;