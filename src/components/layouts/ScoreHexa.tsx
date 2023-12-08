// HexagonScore.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HexagonScoreProps {
  seed: string;
}

const HexagonScore: React.FC<HexagonScoreProps> = ({ seed }) => {
  const [currentScore, setCurrentScore] = useState<number>(0);

  useEffect(() => {
    const hash = hashCode(seed);
    const uniqueScore = Math.abs(hash) % 851; // Ensure it's between 0 and 850
    setCurrentScore(uniqueScore);
  }, [seed]);

  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  const getColorForScore = (score: number): string => {
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
  };

  const color = getColorForScore(currentScore);

  return (
    <div className={`hexagon-container ${color}`}>
      <div className="hexagon-poc">
        <span className="score" style={{ color: 'white', fontSize: '18px' }}>
          {currentScore}
        </span>
        <div className="inner-hexagon" >
          <Image
            src={`/${color}.png`}
            alt="Hexagon"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HexagonScore;
