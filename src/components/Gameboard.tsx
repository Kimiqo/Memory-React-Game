import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const Gameboard: React.FC = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [cardIds, setCardIds] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const [cardsData, setCardsData] = useState<{ id: number; name: string; image: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all character data on mount
  useEffect(() => {
    async function fetchAllCards() {
      try {
        setIsLoading(true);
        const promises = cardIds.map(async (id) => {
          const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch character ${id}`);
          }
          return response.json();
        });
        const data = await Promise.all(promises);
        setCardsData(data.map((item) => ({ id: item.id, name: item.name, image: item.image })));
        shuffleCards();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardIds].sort(() => Math.random() - 0.5);
    setCardIds(shuffledCards);
  };

  const handleClick = (id: number) => {
    if (gameOver) {
      restartGame();
      return;
    }

    if (clickedCards.includes(id)) {
      setGameOver(true);
      setBestScore();
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
      shuffleCards();
    }
  };

  const setBestScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const restartGame = () => {
    setScore(0);
    setClickedCards([]);
    setGameOver(false);
    shuffleCards();
  };

  if (isLoading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-6">Error: {error}</div>;

  return (
    <div className="mx-5 my-6 rounded-lg border-2 border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold">Score: {score}</p>
        <p className="text-lg font-semibold">High Score: {highScore}</p>
      </div>
      {gameOver ? (
        <div className="text-center mb-6">
          <p className="text-xl text-red-500 mb-4">Game Over!</p>
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Restart
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardIds.map((charId) => {
            const cardData = cardsData.find((data) => data.id === charId) || { id: charId, name: '', image: '' };
            return (
              <GameCard
                key={charId}
                id={cardData.id}
                name={cardData.name}
                image={cardData.image}
                handleClick={() => handleClick(cardData.id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gameboard;