'use client';

// Import necessary libraries and components
import React, { useEffect, useRef, useState } from 'react';
import {
  pushTransaction,
  pushAiInsights,
  listenToTransactions,
  storeUserId,
} from '@/utilities/firebaseClient';
import Head from 'next/head';
import Image from 'next/image';
import EthIDAC from '@/components/layouts/EthIDAC';
import HexagonScore from '@/components/layouts/ScoreHexa';
import ScoreTxns from '@/components/layouts/ScoreTxns';
import CodeTerminal from '@/components/layouts/CodeTerminal';
import { fetchData, generateInsights, generateOpenAIPrompt as generateOpenAIPromptUtil } from '@/utilities/dataUtils';
import web3 from '@/utilities/web3Utils';

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

interface InsightsResponse {
  openAIResponse?: string | null; // Adjust the type based on the expected response
  // Add other properties as needed
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
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const otherAddress = ''; // Adjust this value based on your requirements

  useEffect(() => {
    mounted.current = true;

    // Listen to changes in transactions and update the state
    listenToTransactions((data) => {
      if (mounted.current) {
        setTransactions(data || []);
      }
    });

    return () => {
      mounted.current = false;
    };
  }, []);

  const isValidAddress = (address: string) => {
    const ethRegExp = /^(0x)?[0-9a-fA-F]{40}$/;
    const btcRegExp = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
    return ethRegExp.test(address) || btcRegExp.test(address);
  };

  const handleAccountChange = (account: string | null) => {
    setConnectedAccount(account);
    setUserAddress(account || ''); // Set userAddress when account changes
  };

  const connectWallet = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = 'https://idefi.ai/dapp'; // Redirect to the mobile wallet deep link
      } else {
        const accounts: string[] | null = await web3.eth.requestAccounts();
        const fetchedAccount = accounts?.[0] || null;
        setConnectedAccount(fetchedAccount);
        setUserAddress(fetchedAccount || '');
        window.location.reload();
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error.message);
    }
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accounts: string[] | null = await web3.eth.getAccounts();
        const fetchedAccount = accounts?.[0] || null;
        setConnectedAccount(fetchedAccount);
        setUserAddress(fetchedAccount || ''); // Set userAddress when account changes
      } catch (error: any) {
        console.error('Error fetching account:', error.message);
      }
    };

    // Fetch account only if mounted and there is no connected account
    if (mounted.current && !connectedAccount) {
      fetchAccount();
    }
  }, [connectedAccount]); 
  
  const handleGenerateScore = async () => {
    // Determine the address to use
    const addressToUse = connectedAccount || userAddress;

    if (!isValidAddress(addressToUse)) {
      alert('Invalid Address. Please enter a valid address.');
      return;
    }

    // Fetch transaction data
    const fetchedTransactions = await fetchData(addressToUse, 'eth');

    if (fetchedTransactions && fetchedTransactions.length > 0) {
      // Store user ID in Firebase
      storeUserId({ userId: addressToUse });

      // Push each transaction individually to Firebase
      fetchedTransactions.forEach((transaction) => {
        pushTransaction(transaction);
      });

      // Set transactions state for ScoreTxns component
      setTransactions(fetchedTransactions);

      // Generate and set the score
      const score = generateScore(addressToUse);
      setGeneratedScore(score);
      
      alert('Transaction history loaded succesfully!');

      try {
        // Generate OpenAI prompt based on transactions
        const openAIPrompt = generateOpenAIPrompt(addressToUse, otherAddress, fetchedTransactions, generatedScore);

        // Generate and set insights
        const insightsResponse = await generateInsights(addressToUse, otherAddress, openAIPrompt, generatedScore);

        // Log the insightsResponse for debugging
        console.log('Insights response:', insightsResponse);

        if (insightsResponse) {
          if (typeof insightsResponse === 'string') {
            // Set insights only if it's a string (not null)
            setInsights(insightsResponse);

            // Push insights to Firebase
            pushAiInsights({ userAddress: addressToUse, insights: insightsResponse, timestamp: Date.now() });
          } else {
            console.error('Invalid insights response:', insightsResponse);
          }
        } else {
          console.error('Insights response is null.');
        }
      } catch (error) {
        console.error('Error generating insights:', error);
      }
    } else {
      // Handle case where there are no transactions
      setTransactions([]); // Set transactions to an empty array

      // Set generated score to null or any default value
      setGeneratedScore(null);

      // Optionally, you can set a message or take other actions to inform the user
      console.log('No transactions available for the given address.');
      alert('No transactions or score available for the given address.');
      return; // This will prevent further execution of the function
    }
  };

  const generateOpenAIPrompt = (userAddress: string, otherAddress: string, transactions: Transaction[], generatedScore: number | null): string => {
    const transactionDetails = transactions.map((txn, index) => (
      `Transaction ${index + 1} - ${txn.type}: ${txn.usdAmount} USD involving ${txn.thirdPartyWallet}.`
    )).join('\n');
  
    const prompt = `
      Analyze Ethereum address ${userAddress} for potential malicious activities or bad actors. Look for patterns, anomalies, or any indicators that may suggest malicious behavior.
      Provide insights for the relationship between Ethereum addresses ${userAddress} and ${otherAddress}. Consider the unique addresses involved ${otherAddress}.
      Showcasing iDAR-Trust Score: ${generatedScore}.
      ${transactionDetails}
    `;
  
    // Log the generated prompt
    console.log('Generated OpenAI Prompt:', prompt);
  
    return prompt;
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

  return (
    <div className="main-container">
      <Head>
        <title>dAPP - iDAR</title>
      </Head>
      <section className="bg-black">
        <div className="layout flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <h1 className="text-white font-bold text-4xl mb-6">dAPP - iDAR</h1>
          <h4>Connect wallet or enter address</h4>
          <p>Generate iDAR Trust Score with DeFi-AI</p>
          <hr
            style={{
              border: 'none',
              borderRadius: '5px',
              borderBottom: '3px solid grey',
              width: '100%',
              margin: '30px 0',
            }}
          />
          <div className="image-container" style={{ padding: '50px' }}>
            <Image src="/idacscore.png" alt="idacscore" width={1600} height={1000} />
          </div>
          {generatedScore !== null && (
            <div className={` ${getColorForScore(generatedScore)}`}>
              <HexagonScore seed={userAddress.toLowerCase()} generatedScore={generatedScore} />
            </div>
          )}
         <div className="flex items-center justify-center">
          <button
            onClick={connectWallet}
            style={{
              backgroundColor: '#913d88',
              color: 'white',
              fontWeight: '300',
              margin: '10px',
              padding: '10px',
              borderRadius: '5px',
            }}
           >
            Connect Wallet
          </button>
          <button
            onClick={handleGenerateScore}
            style={{
              backgroundColor: '#913d88',
              color: 'white',
              fontWeight: '300',
              margin: '10px',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Generate Score
          </button>
          </div>
          <EthIDAC seed={userAddress} onAccountChange={handleAccountChange} />
          <input
            type="text"
            placeholder=" ETH or BTC"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            style={{ textAlign: 'center', backgroundColor: '#f0f0f0', color: 'black', margin: '10px 0' }}
          />
          <hr
            style={{
              border: 'none',
              borderRadius: '5px',
              borderBottom: '3px solid grey',
              width: '100%',
              margin: '90px 0',
            }}
          />
          {generatedScore !== null && transactions.length > 0 && (
        <ScoreTxns transactions={transactions} overallScore={generatedScore} />
        )}
          {generatedScore !== null && transactions.length === 0 && (
            <p>No transactions available for the given address.</p>
          )}
          {/* Display generated insights */}
          <div className="header container">
            <h2>iDAR AI:</h2>
            <CodeTerminal>{insights}</CodeTerminal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DApp;
