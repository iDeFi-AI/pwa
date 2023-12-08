import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the next/image component


interface ScoreCardProps {
  idacScore?: number;
  description?: string;
}

const ScoreCard: React.FC<ScoreCardProps> = () => {
  const scoreDescriptions = [
    { score: 850, description: 'Excellent' },
    { score: 740, description: 'Good' },
    { score: 630, description: 'Fair' },
    { score: 410, description: 'Poor' },
    { score: 310, description: 'Mixed/Tumbled' },
    { score: 0, description: 'New/No-score' },
  ];

  // State to manage the current score and description
  const [currentScore, setCurrentScore] = useState<number>(scoreDescriptions[0].score);
  const [currentDescription, setCurrentDescription] = useState<string>(scoreDescriptions[0].description);

  // Array of random Ethereum and Bitcoin addresses (you can replace with real addresses)
  const addresses = [
    '0x2f2fD8f8046FfE409d410E23e17A26226158631e',
    '1Ebu6hGQfiLbCXwjxjZ3Pf5f8zUDJXvDwE',
    '0x6fA24B9d9F1844fE6EF62d38fEdc43A318b1D69D',
    '1NVV7qQ3z9K5oWNKqqiJJ5mP43bSLYm5AZ',
    '0x9baf15cd8884eF29D2051E737ABf9b11dC5C72d8',
    '0x458965214526321445214545862efda23541daf4',
  ];

  const [currentAddressIndex, setCurrentAddressIndex] = useState(0);
  const [currentAddress, setCurrentAddress] = useState<string>(addresses[0]);

  const getDescription = (score: number) => {
    return scoreDescriptions.find((item) => item.score <= score)?.description || 'New/No-score';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random score within the range of 0 to 850
      const randomScore = Math.floor(Math.random() * 851);
      setCurrentScore(randomScore);
      setCurrentDescription(getDescription(randomScore));

      const newAddressIndex = (currentAddressIndex + 1) % addresses.length;
      setCurrentAddressIndex(newAddressIndex);
      setCurrentAddress(addresses[newAddressIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentAddressIndex]);

  let color: string;

  if (typeof currentScore !== 'undefined') {
    if (currentScore >= 850) {
      color = 'green';
    } else if (currentScore >= 740) {
      color = 'yellow';
    } else if (currentScore >= 630) {
      color = 'orange';
    } else if (currentScore >= 410) {
      color = 'red';
    } else if (currentScore >= 310) {
      color = 'black';
    } else {
      color = 'grey';
    }
  } else {
    color = 'grey';
  }

  return (
    <div className={`container header idac-score-card ${color} black-card`}>
      <div className="hexagon">
        <span className="score" style={{ color: color === 'black' ? 'white' : 'black' }}>
          {currentScore}
        </span>
          <Image
            src="/hexagon.png" // Replace with the correct path to your image
            alt="Hexagon"
            width="100"
            height="100"
            layout="cover"
          />
      </div>
      <p className="description">
        {currentDescription}
      </p>
      <p className="address">{currentAddress}</p>
    </div>
  );
};

export default ScoreCard;
