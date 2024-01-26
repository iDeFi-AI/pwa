// components/ScoreTxns.tsx
import React from 'react';
import Image from 'next/image';

type TransactionType = 'Sent' | 'Received';

interface Transaction {
  timestamp: string;
  type: TransactionType;
  cryptocurrency: string;
  thirdPartyIdacScore: number;
  usdAmount: number;
  thirdPartyWallet: string;
}

interface ScoreTxnsProps {
  transactions: Transaction[];
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

const ScoreTxns: React.FC<ScoreTxnsProps> = ({ transactions }) => {
  return (
    <div className="score-transactions">
      <h2>Transaction History</h2>
      <div className="table-container">
        {Array.isArray(transactions) && transactions.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Party Score</th>
                <th>Type</th>
                <th>Party Wallet</th>
                <th>Timestamp</th>
                <th>Crypto</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index}>
                  <td className="score-transactions">
                    <div className="txn-hex">
                      {/* Use next/image directly */}
                      <Image
                        src={`/${getColorForScore(txn.thirdPartyIdacScore)}.png`}
                        alt="Hexagon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="tab-score">{txn.thirdPartyIdacScore}</div>
                  </td>
                  <td>{txn.type}</td>
                  <td className="wallet">
                    <div className="shortened-wallet" title={txn.thirdPartyWallet}>
                      {shortenWalletAddress(txn.thirdPartyWallet)}
                    </div>
                  </td>
                  <td>{txn.timestamp}</td>
                  <td>{txn.cryptocurrency}</td>
                  <td>${txn.usdAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions available for the given address.</p>
        )}
      </div>
      <style jsx>{`
        .score-transactions {
          margin-top: 20px;
        }
        .table-container {
          overflow-x: auto; /* Enable horizontal scroll on small screens */
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .txn-hex {
          margin-right: 8px;
        }
        .tab-score {
          max-width: 100px;
          color: white;
        }
        .wallet {
          word-break: break-all;
        }
        .shortened-wallet {
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Media query for smaller screens */
        @media (max-width: 600px) {
          th, td {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

// Function to shorten a wallet address
const shortenWalletAddress = (address: string): string => {
  const prefixLength = 6; // Show the first 6 characters
  const suffixLength = 4; // Show the last 4 characters

  if (address.length <= prefixLength + suffixLength) {
    return address; // If the address is short, return as is
  }

  const prefix = address.slice(0, prefixLength);
  const suffix = address.slice(-suffixLength);

  return `${prefix}...${suffix}`;
};

export default ScoreTxns;
