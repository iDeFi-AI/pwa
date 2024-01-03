// EthIDAC.tsx

import React, { useState, useEffect } from 'react';
import web3 from '../../utilities/web3Utils';

interface EthIDACProps {
  seed: string;
}

const EthIDAC: React.FC<EthIDACProps> = ({ seed }) => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [account, setAccount] = useState<string | null>(null);
  const [transactionFee, setTransactionFee] = useState<number>(0.01); // Example fee in ETH

  useEffect(() => {
    const hash = hashCode(seed);
    const uniqueScore = Math.abs(hash) % 851; // Ensure it's between 0 and 850
    setCurrentScore(uniqueScore);
  }, [seed]);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accounts: string[] | null = await web3.eth.getAccounts();
        setAccount(accounts?.[0] || null);
      } catch (error: any) {
        console.error('Error fetching account:', error.message);
      }
    };

    fetchAccount();
  }, []);

  const signMessage = async () => {
    try {
      if (!account) {
        console.error('Account not available.');
        return;
      }

      const signature: string = await web3.eth.personal.sign(`Score: ${currentScore}`, account, '');
      console.log('Signature:', signature);

      // You can send this signature and other details to your backend for verification and further processing
      // Also, deduct the transaction fee from the user's account

      // For demonstration purposes, let's deduct the fee from the user's account locally
      const updatedBalance = await deductTransactionFee(account, transactionFee);
      console.log('Updated Balance:', updatedBalance);
    } catch (error: any) {
      console.error('Error signing message:', error.message);
    }
  };

  const deductTransactionFee = async (userAccount: string, fee: number): Promise<number> => {
    try {
      const balance: string | bigint = await web3.eth.getBalance(userAccount);
      
      if (typeof balance === 'string') {
        const balanceWei: bigint = BigInt(balance);
        const feeWei: bigint = BigInt(web3.utils.toWei(fee.toString(), 'ether'));
        const newBalanceWei: bigint = balanceWei - feeWei;
  
        // Here you would send a transaction to deduct the fee from the user's account
        // This is a simplified example, and you may need to handle gas, confirmations, etc.
  
        const newBalance: string = newBalanceWei.toString();
        return parseFloat(web3.utils.fromWei(newBalance, 'ether'));
      } else {
        // Handle the case when the balance is a bigint (e.g., not supported by parseFloat)
        return 0;
      }
    } catch (error: any) {
      console.error('Error deducting transaction fee:', error.message);
      return 0;
    }
  };
  
  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  return (
    <div>
      {account && (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={signMessage}>Sign Message and Deduct Fee</button>
        </div>
      )}
    </div>
  );
};

export default EthIDAC;
