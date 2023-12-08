'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import HexagonScore from '@/components/layouts/ScoreHexa';
import ScoreTxns from '@/components/layouts/ScoreTxns';

interface SectionProps {
  title?: string;
  intro?: string;
  paragraphs?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const transactions = [
  {
    timestamp: '2023-10-31T14:30:00Z',
    type: 'Received' as const,
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 855,
    usdAmount: 345.63,
    thirdPartyWallet: '0x2f2fD8f8046FfE409d410E23e17A26226158631e',
  },
  {
    timestamp: '2023-10-31T14:30:00Z',
    type: 'Received' as const,
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 755,
    usdAmount: 410.75,
    thirdPartyWallet: '0x6fA24B9d9F1844fE6EF62d38fEdc43A318b1D69D',
  },
  {
    timestamp: '2023-10-31T12:30:00Z',
    type: 'Sent' as const, // Make sure to use 'Sent' or 'Received'
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 670,
    usdAmount: 302.30,
    thirdPartyWallet: '0x9baf15cd8884eF29D2051E737ABf9b11dC5C72d8',
  },
  {
    timestamp: '2023-10-31T14:30:00Z',
    type: 'Received' as const,
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 555,
    usdAmount: 10523.12,
    thirdPartyWallet: '0x6fA24B9d9F1844fE6EF62d38fEdc43A318b1D69D',
  },
  {
    timestamp: '2023-10-31T14:30:00Z',
    type: 'Received' as const,
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 355,
    usdAmount: 24063.15,
    thirdPartyWallet: '0x458965214526321445214545862efda23541daf4',
  },
  {
    timestamp: '2023-10-31T14:30:00Z',
    type: 'Received' as const,
    cryptocurrency: 'ETH',
    thirdPartyIdacScore: 255,
    usdAmount: 0.00,
    thirdPartyWallet: '0x6fA24B9d9F1844fE6EF62d38fEdc43A318b1D69D',
  },
  // Add more transactions as needed
];

const IDAC: React.FC = () => {
  const [userAddress, setUserAddress] = useState('');
  const [generatedScore, setGeneratedScore] = useState<number | null>(null);

  const handleGenerateScore = () => {
    const isValidAddress = (address: string) => {
      const ethRegExp = /^(0x)?[0-9a-fA-F]{40}$/;
      const btcRegExp = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
      return ethRegExp.test(address) || btcRegExp.test(address);
    };

    if (!isValidAddress(userAddress)) {
      alert('Invalid Address. Please enter a valid address.');
      return;
    }

    const seed = userAddress.toLowerCase();
    const hash = hashCode(seed);
    const uniqueScore = Math.abs(hash) % 851;
    setGeneratedScore(uniqueScore);
  };

  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  const sections: SectionProps[] = [
    {
      imageUrl: "/idacscorelogo.png"
    },
    {
      title: "Digital Asset Crypto Score",
      paragraphs: ["This section unveils the concept of the iDeFi Digital Asset Crypto Score (iDAC Score), a groundbreaking development in the world of decentralized finance (DeFi). The iDAC Score represents a paradigm shift in establishing a Trust Score among users who are engaged in cryptocurrency transactions. It offers innovative solutions to redefine the future of DeFi, while also accommodating traditional financial institutions (TradFi) and trusted centralized financial exchanges (CeFi). It bridges the gap between digital and traditional finance, shaping the evolution of the entire financial ecosystem."]
    },
    {
      title: "Empowering Trust Among Crypto Users",
      intro: "The iDAC Score focuses on empowering trust among users in the cryptocurrency ecosystem:",
      paragraphs: [
        "Dynamic Trust Assessment: The iDAC Score employs dynamic algorithms to assess and establish trust among users in real-time. This dynamic approach ensures a more accurate and up-to-date trust evaluation, preventing potential issues.",
        "Multi-Dimensional Analysis: Consideration of various trust dimensions, including transaction history, user behavior patterns, and community reputation. This comprehensive analysis offers a holistic view of the trustworthiness of individuals and entities.",
        "Preventive Measures: Leveraging artificial intelligence, the iDAC Score uses predictive analytics to identify potential risks before they materialize. This proactive approach empowers users and institutions to take preventive measures against bad actors, hackers, scammers, and other threats."
      ]
    },
    {
      title: "Ensuring Security with iDAC Trust Score",
      intro: "The iDAC Trust Score ensures security and reliability in cryptocurrency transactions:",
      paragraphs: [
        "Trust Verification: Individuals and entities with higher iDAC Trust Scores are verified as trustworthy participants in the cryptocurrency ecosystem. This verification enhances security and reduces the risk of fraudulent activities.",
        "Community-driven Trust: The iDAC Score incorporates community feedback and reputation to further enhance trust assessment. Users actively contribute to the trustworthiness evaluation, creating a robust and decentralized trust network.",
        "Cross-Sector Applicability: The iDAC Trust Score extends its applicability beyond decentralized finance (DeFi) to include traditional financial institutions (TradFi) and centralized financial exchanges (CeFi). It becomes a standardized measure for establishing trust in digital asset activities across different financial sectors."
      ]
    },
    {
      title: "Promoting Responsible Participation",
      intro: "The iDAC Trust Score encourages responsible participation in the cryptocurrency ecosystem:",
      paragraphs: [
        "Risk Mitigation: Users can make informed decisions based on the iDAC Trust Score, mitigating risks associated with transactions. It promotes responsible engagement and discourages malicious activities.",
        "Secure Transactions: Traditional financial institutions can integrate the iDAC Trust Score into their risk assessment frameworks, enhancing the security of digital asset transactions. This integration bridges the gap between traditional and digital finance, creating a safer environment for all participants.",
        "Financial Inclusion: Within traditional finance, the iDAC Trust Score promotes financial inclusion and aligns with the evolving financial landscape. It acts as a catalyst for building trust and credibility among participants in digital asset activities."
      ]
    }
  ];

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

  return (
    <div>
      <div className="container header">
        {sections.map((section, index) => (
          <div className="container header section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.intro}</h4>
            {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="section-paragraph">{paragraph}</p>
            ))}
            {index !== 0 && ( // Check if it's not the first section
              <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '30px 0', marginBottom: '30px' }} />
            )}            {section.imageUrl && (
              <div className="image-container container header">
                <Image
                  layout="responsive"
                  width={100}
                  height={100}
                  src={section.imageUrl}
                  alt={section.imageAlt ?? 'Image'}
                />
              </div>
            )}
            {index === 4 && (
              <>
                <div className="image-container container header">
                  <Image
                    src='/idacscore.png'
                    alt='idacscore'
                    width={1600}
                    height={1000}
                  />
                </div>
                <input
                  type="text"
                  placeholder=" ETH, BTC or ATOM"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  style={{ backgroundColor: '#f0f0f0', color: 'black' }}
                />
                <button
                  onClick={handleGenerateScore}
                  style={{ backgroundColor: '#913d88', color: 'white', fontWeight: '600', padding: '10px' }}
                >
                  Generate Score
                </button>
                {generatedScore !== null && (
                  <div className={` ${getColorForScore(generatedScore)}`}>
                    <HexagonScore seed={userAddress.toLowerCase()} />
                  </div>
                )}
                {generatedScore !== null && <ScoreTxns transactions={transactions} />}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDAC;
