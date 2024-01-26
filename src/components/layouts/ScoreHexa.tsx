// HexagonScore.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HexagonScoreProps {
  seed: string;
  generatedScore: number | null;
}

const HexagonScore: React.FC<HexagonScoreProps> = ({ seed, generatedScore }) => {
  const [currentScore, setCurrentScore] = useState<number | null>(null);

  useEffect(() => {
    if (generatedScore !== null) {
      setCurrentScore(generatedScore);
    } else {
      if (seed.toLowerCase().startsWith('0x') || seed.toLowerCase().startsWith('bc1')) {
        const hash = hashCode(seed);
        const uniqueScore = Math.abs(hash) % 851; // Ensure it's between 0 and 850
        setCurrentScore(uniqueScore);
      } else {
        setCurrentScore(null); // Reset score for non-ETH or non-BTC addresses
      }
    }
  }, [seed, generatedScore]);

  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  const getColorForScore = (score: number | null): string => {
    if (score !== null) {
      if (score >= 850) {
        return 'green';
      } else if (score >= 740) {
        return 'yellow';
      } else if (score >= 630) {
        return 'orange';
      } else if (score >= 410) {
        return 'red';
      } else if (score >= 310) {
        return 'black';
      } else {
        return 'grey';
      }
    } else {
      // Return a default color when the score is not available
      return 'grey';
    }
  };

  const color = generatedScore !== null ? getColorForScore(generatedScore) : 'grey';

  return (
    <div className={`hexagon-container ${color}`}>
      <div className="hexagon-poc">
        <span className="score" style={{ color: 'white', fontSize: '18px' }}>
          {currentScore !== null ? currentScore : 'Score'}
        </span>
        {currentScore !== null && (
          <div className="inner-hexagon">
            <Image src={`/${color}.png`} alt="Hexagon" width={100} height={100} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HexagonScore;
