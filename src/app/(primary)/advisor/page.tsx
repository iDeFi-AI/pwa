import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  title: string;
  content: string;
  paragraphs?: string[]; // Use "?" to make paragraphs optional
  imageUrl?: string;
  imageAlt?: string;
}

const FinancialAdvisorPage: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: 'iDeFi.AI Financial Advisory Insights',
      content: '',
    },
    {
      title: 'Overview of iDeFi.ai',
      content: 'Welcome to iDeFi.ai, where blockchain technology and AI converge to redefine financial advisory services with unparalleled innovation.',
      paragraphs: [
        'Our vision is to transform financial advisory by leveraging the latest in blockchain, AI, and Quantum Technologies to deliver superior insights and security.',
        'Unlike others in the industry, iDeFi.ai goes beyond the conventional methods, offering a comprehensive suite of advanced tools designed to provide actionable and decisionable insights in real-time.',
        'Join us in exploring a new era of financial advisory, where technology empowers smarter investments, secure transactions, and enhanced user experience.'
      ],
    },
    {
      title: 'Our Unique Approach',
      content: 'At iDeFi.ai, our approach is centered on creating a financial ecosystem that prioritizes security, efficiency, and inclusivity, setting us apart from competitors like Noves.fi.',
      paragraphs: [
        "While Noves.fi focuses on integrating traditional financial metrics, iDeFi.ai combines the power of blockchain and AI to offer deeper insights and advanced security features.",
        "Security: Our AI-driven risk scoring models provide precise assessments, ensuring your investments are protected against potential threats.",
        "Efficiency: By analyzing money flows, we streamline the onboarding process and enhance user experience, making financial management seamless.",
        "Inclusivity: We believe in breaking down barriers and making financial services accessible to everyone, leveraging blockchain transparency and AI adaptability.",
      ],
    },
    {
      title: 'Core Services',
      content: 'Our core services include risk scoring, on/off-boarding insights, sentiment analysis, and actionable moments for better financial decision-making.',
      paragraphs: [
        "Risk Scoring: Our AI-driven models provide precise risk assessments to flag potential issues and ensure informed investment decisions.",
        "On/Off Boarding: We analyze money flows to streamline the onboarding process and enhance user experience.",
        "Sentiment Analysis: By monitoring market sentiment, especially around Real-World Assets (RWA), we identify value, growth, and decline trends.",
        "Actionable Moments: Our system triggers alerts for tax consequences, investment opportunities, and other critical financial events.",
        "Other Outcomes: We continuously innovate to provide additional insights and solutions tailored to your financial needs.",
      ],
    },
    {
      title: 'Our Commitment',
      content: 'iDeFi.ai is at the forefront of the financial advisory revolution. Our commitment to user-friendliness, robust security measures, and AI-driven solutions positions us as a leader in the sector.',
      paragraphs: [
        "Being at the forefront means that we are driving the transformation of financial advisory services. Our commitment to innovation and excellence is unwavering.",
        "User-friendliness is key. We ensure our platform is accessible to all users, regardless of their technical expertise.",
        "Robust security measures are our foundation. We continually enhance our security protocols to protect your digital assets.",
        "AI-driven solutions are the future. By integrating AI capabilities, we offer unparalleled efficiency and innovation in financial advisory.",
      ],
    },
    {
      title: 'Raw Blockchain Data vs. iDeFi.AI Insights',
      content: 'See how we transform raw blockchain data into actionable insights:',
      paragraphs: [
        "Here is an example of raw blockchain data and how we transform it into a more digestible format for financial advisors.",
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <h4 className="text-xl mb-4">{section.content}</h4>
            {index !== 0 && <br />}
            {section.title === 'Welcome to iDeFi.ai: The Future of Financial Advisory' && (
              <p>
                {' '}
                <Link href="/terms">
                  <a className="text-purple-450 underline hover:underline">Review our Educational and Ethical Disclosure</a>
                </Link>{' '}
              </p>
            )}
            {section.paragraphs && (
              <div>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 text-lightlaven">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <br />
            {section.imageUrl && (
              <div className="mt-4">
                <Image
                  layout="responsive"
                  objectFit="cover"
                  width={800}
                  height={400}
                  src={section.imageUrl}
                  alt={section.imageAlt ?? section.title}
                  className="rounded-md"
                />
              </div>
            )}
            {index !== 0 && <hr className="my-12 border-t-2 border-gray-700 w-full" />}
          </div>
        ))}

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Raw Blockchain Data Response</h2>
          <pre className="bg-gray-400 p-4 rounded-md text-left overflow-auto max-h-96">
            {`{
  "status": "1",
  "message": "OK",
  "result": [
    {
      "blockNumber": "1234567",
      "timeStamp": "1622548800",
      "hash": "0xabc123...",
      "nonce": "0",
      "blockHash": "0xdef456...",
      "transactionIndex": "0",
      "from": "0x123...",
      "to": "0x456...",
      "value": "1000000000000000000",
      "gas": "21000",
      "gasPrice": "20000000000",
      "isError": "0",
      "txreceipt_status": "1",
      "input": "0x",
      "contractAddress": "",
      "cumulativeGasUsed": "21000",
      "gasUsed": "21000",
      "confirmations": "10"
    },
    {
      "blockNumber": "1234568",
      "timeStamp": "1622548810",
      "hash": "0xghi789...",
      "nonce": "1",
      "blockHash": "0xjkl012...",
      "transactionIndex": "1",
      "from": "0x123...",
      "to": "0x789...",
      "value": "2000000000000000000",
      "gas": "21000",
      "gasPrice": "20000000000",
      "isError": "0",
      "txreceipt_status": "1",
      "input": "0x",
      "contractAddress": "",
      "cumulativeGasUsed": "42000",
      "gasUsed": "21000",
      "confirmations": "10"
    }
    // More transactions...
  ]
}`}
          </pre>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Transformed iDeFi.AI JSON Response</h2>
          <pre className="bg-gray-400 p-4 rounded-md text-left overflow-auto max-h-96">
            {`{
  "address": "0x123...",
  "status": "Pass",
  "description": "Not Flagged",
  "ai_insights": {
    "risk_score": 2,
    "summary": "This wallet shows regular activity with no significant red flags detected. The transactions involve moderate amounts and typical gas usage, indicating standard usage patterns.",
    "recommendations": "Monitor periodically for any changes in transaction patterns or unusual activities."
  },
  "transactions": [
    {
      "transactionHash": "0xabc123...",
      "timestamp": "2021-06-01T00:00:00Z",
      "from": "0x123...",
      "to": "0x456...",
      "value": "1.0 ETH",
      "gasUsed": "21000",
      "status": "Success",
      "description": "Regular transaction",
      "ai_analysis": {
        "type": "Standard Transfer",
        "risk_level": "Low",
        "notes": "Typical transfer between two addresses with no irregularities."
      }
    },
    {
      "transactionHash": "0xghi789...",
      "timestamp": "2021-06-01T00:00:10Z",
      "from": "0x123...",
      "to": "0x789...",
      "value": "2.0 ETH",
      "gasUsed": "21000",
      "status": "Success",
      "description": "Regular transaction",
      "ai_analysis": {
        "type": "Standard Transfer",
        "risk_level": "Low",
        "notes": "No suspicious activity detected. Regular transaction with expected parameters."
      }
    }
    // More transactions...
  ]
}`}
          </pre>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose iDeFi.AI?</h2>
          <p className="text-lightlaven">
            Our AI-driven insights transform complex blockchain data into actionable recommendations that financial advisors can use to make informed decisions for their clients. Whether it be identifying risk levels, monitoring transaction patterns, or providing tax-related information, iDeFi.AI offers a comprehensive solution that makes understanding blockchain data simple and effective.
          </p>
        </div>
      </div>
    </div>
  );
};


export default FinancialAdvisorPage;
