'use client'

// Import necessary libraries and components
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import EthIDAC from '@/components/layouts/EthIDAC';
import HexagonScore from '@/components/layouts/ScoreHexa';
import ScoreTxns from '@/components/layouts/ScoreTxns';

// Define the Transaction type
type TransactionType = 'Sent' | 'Received';

// Define the Transaction interface
interface Transaction {
  timestamp: string;
  type: TransactionType;
  cryptocurrency: string;
  thirdPartyIdacScore: number;
  usdAmount: number;
  thirdPartyWallet: string;
}

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

const DApp: React.FC = () => {
  const mounted = useRef(false);
  const [userAddress, setUserAddress] = useState('');
  const [generatedScore, setGeneratedScore] = useState<number | null>(null);
  const [insights, setInsights] = useState<string>('');

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleGenerateScore = async () => {
    const score = generateScore(userAddress);
    setGeneratedScore(score);

    const insightsResponse = await generateInsights(userAddress);
    setInsights(insightsResponse);
  };

  const generateScore = (address: string): number => {
    const hash = hashCode(address);
    const uniqueScore = Math.abs(hash) % 851;
    return uniqueScore;
  };

  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; str && i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  const generateInsights = async (userAddress: string): Promise<string> => {
    const openaiApiKey = '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';

    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          prompt: `Provide insights for Ethereum address ${userAddress} and its 3rd party involvement with other addresses.`,
          max_tokens: 500,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        return data.choices[0].text || 'No insights available.';
      } else {
        return 'No insights available.';
      }
    } catch (error) {
      console.error('Error generating insights:', error);
      return 'Error generating insights.';
    }
  };

  return (
    <div className="main-container">
      <Head>
        <title>DApp POC</title>
      </Head>
      <section className="bg-black">
        <div className="layout flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <h1 className="text-white font-bold text-4xl mb-6">DApp POC</h1>
          <h4>Connect wallet or enter address</h4>
          <p>To generate an iDAC score with AI-Insights</p>
          <hr
            style={{
              border: 'none',
              borderRadius: '5px',
              borderBottom: '3px solid grey',
              width: '100%',
              margin: '30px 0',
            }}
          />
          <div className="image-container">
            <Image src="/idacscore.png" alt="idacscore" width={1600} height={1000} />
          </div>
          <HexagonScore seed={userAddress.toLowerCase()} />
          <EthIDAC seed={userAddress} />
          <input
            type="text"
            placeholder=" ETH, BTC, or ATOM"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            style={{ backgroundColor: '#f0f0f0', color: 'black', margin: '10px 0' }}
          />
          <button
            onClick={handleGenerateScore}
            style={{ backgroundColor: '#913d88', color: 'white', fontWeight: '600', padding: '10px' }}
          >
            Generate Score
          </button>
          <hr
            style={{
              border: 'none',
              borderRadius: '5px',
              borderBottom: '3px solid grey',
              width: '100%',
              margin: '90px 0',
            }}
          />
          {generatedScore !== null && (
            <div className={getColorForScore(generatedScore)}>
              {/* Ensure transactions prop is passed correctly */}
              <ScoreTxns transactions={[]} />
            </div>
          )}
          {/* Display generated insights */}
          <div className="header container">
            <h2>AI Insights:</h2>
            <p>{insights}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DApp;
