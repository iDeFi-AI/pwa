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

const InvestorPage: React.FC<InvestorPageProps> = () => {
  const sections: SectionProps[] = [
    {
      title: 'Welcome to the Data Room',
      content: '',
      imageUrl: '/dbroom.gif',
      imageAlt: 'Company Logo',
    },
    {
      title: 'Overview of iDeFi-AI',
      content: 'Welcome to the innovative world of iDeFi-AI, where blockchain technology and artificial intelligence converge to shape the future of decentralized finance (DeFi).',
      paragraphs: [
        'Our vision is to revolutionize the financial landscape by harnessing the power of cutting-edge technology. Through the fusion of blockchain, artificial intelligence and Quantum Technologies, we are paving the way for a more inclusive and efficient financial ecosystem.',
        'At iDeFi-AI, we are committed to enhancing security within the DeFi space. Our innovative solutions are designed to minimize fraud, reduce risks, and provide users with a safe environment to manage their digital assets.',
        'Join us on this exciting journey into the future of finance, where smart contracts, decentralized applications, and AI-driven insights will become the norm. Together, we are shaping the path for a more accessible and interconnected financial world.'
      ],
    },
    {
      title: 'Our Mission',
      content: 'At iDeFi-AI, our mission is to create a financial ecosystem that prioritizes security, efficiency, and inclusivity. We believe that the synergy between AI and blockchain is the foundation upon which the future of DeFi is built.',
      paragraphs: [
        "Our mission represents a commitment to a new era of financial services. We envision a future where anyone, regardless of their background or geographic location, can participate in the global financial system.",
        " Security is paramount in the decentralized world. Our dedication to building a secure environment means that users can have confidence in their financial transactions. By leveraging the power of AI and blockchain, we're paving the way for robust security measures that can withstand the challenges of the digital age.",
        " Inclusivity is a core value we hold dear. We aim to break down barriers and make financial services accessible to everyone. By embracing blockchain's transparency and AI's adaptability, we're creating an ecosystem that welcomes users from all walks of life. This inclusivity is what makes iDeFi-AI stand out in the world of DeFi.",
      ],
    },
    {
      title: 'Core Objectives',
      content: 'Our core objectives include democratizing finance, making cryptocurrency accessible to traditional financial institutions, and reshaping the financial landscape using advanced AI techniques.',
      paragraphs: [
        "Democratizing finance means we're championing financial empowerment for all. We believe in breaking the chains of traditional banking and giving control back to individuals. With blockchain and AI, we're eliminating intermediaries and enabling peer-to-peer financial interactions.",
        " Our goal of making cryptocurrency accessible to traditional financial institutions marks the convergence of two worlds. We're bridging the gap between innovative blockchain technologies and the established financial industry. This bridge facilitates the seamless flow of assets and ideas, bringing the best of both worlds together.",
        " The financial landscape is undergoing a profound transformation, and we're at the forefront of it. Our utilization of advanced AI techniques means that our solutions are constantly evolving and improving. With this dynamic approach, we're shaping the financial future by incorporating AI-driven insights into DeFi applications and smart contracts.",
      ],
    },
    {
      title: 'Our Commitment',
      content: 'iDeFi-AI is at the forefront of the DeFi revolution. Our commitment to user-friendliness, robust security measures, and AI-driven solutions positions us as a trailblazer in the decentralized finance sector.',
      paragraphs: [
        "Being at the forefront of the DeFi revolution means we're the driving force behind the transformation of financial services. Our commitment to staying ahead of the curve is unwavering. We're setting the standard for what DeFi can and should be.",
        " User-friendliness is a key aspect of our commitment. We understand that DeFi can be complex, and we're making it as user-friendly as possible. Our user-centric approach ensures that anyone, regardless of their technical expertise, can seamlessly navigate and benefit from our platform.",
        " Robust security measures are the foundation of trust. Our commitment to security isn't just a promise; it's an ongoing process. We continuously refine and enhance our security protocols to provide users with peace of mind and protect their digital assets.",
        " AI-driven solutions represent the future of DeFi. We believe that AI can revolutionize how financial systems operate. By integrating AI capabilities into our applications and smart contracts, we're setting the stage for a new era of efficiency and innovation in the DeFi sector.",
      ],
    },
    {
      title: 'Crypto Exploration',
      content: 'Unraveling the Cryptocurrency Universe',
      imageUrl: '/mapkey.jpg',
      paragraphs: [
        "Cryptocurrency is reshaping the digital financial landscape through decentralization and blockchain technology. Whether you're a seasoned enthusiast or a newcomer, join us on a comprehensive journey into the heart of crypto.",
        "Crypto User: As crypto users, we navigate the blockchain realm with wallets shrouded in anonymity. Explore the nuances of wallet ownership, transactions, and the pursuit of financial privacy in this transparent, blockchain-driven space.",
        "Crypto Wallet: Your crypto wallet is the fortress safeguarding public and private keys, empowering blockchain transactions. Explore its role, the inner workings, and the paramount importance of securing keys to protect digital assets.",
        "Wallet Address: Every crypto user has a wallet address, a cryptographic identifier representing their public key. Demystify wallet addresses, exploring hash functions, security implications, and their role in maintaining transparency and accountability on the blockchain.",
        "Address Transaction: In the crypto world, each transaction embarks on a unique journey identified by a transaction hash. Join us in exploring address transactions, delving into the significance of transaction IDs, tracking crypto transfers, and their role in risk scoring and detection.",
      ]
    }
  ];

  return (
    <div>
      <div className="container header layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.content}</h4>
            {index !== 0 && ( // Add this condition to exclude line break in the first section
              <br />
            )}
            {section.title === 'Welcome to the Data Room' && ( // Check if this is the specific section
              <p>
                {' '}
                <Link 
                  href="/terms"
                  className="text-purple-450 underline hover:underline">Review our Educational and Ethical Disclosure 
                </Link>{' '}
              </p>
            )}
            {section.paragraphs && (
              <div>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <br />
            {section.imageUrl && (
              <div className="image-container">
                <Image
                  layout="responsive"
                  objectFit="cover"
                  width={200}
                  height={300}
                  src={section.imageUrl}
                  alt={section.imageAlt ?? section.title}
                />
              </div>
            )}
            {index !== 0 && ( // Check if it's not the first section
              <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '90px 0' }} />
            )}
          </div>
        ))}
      </div>
      <div className="container header">
        <h2>Explore Our Key Initiatives</h2>
        <ul>
          <li>
            <Link href="/b1h0">B1H0 - B1ack H0rnet</Link>
          </li>
          <li>
            <Link href="/idac">iDAC - Digital Risk Scoring</Link>
          </li>
          <li>
            <Link href="/ipoc">POC - Initial Proof of Concepts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface InvestorPageProps {}

export default InvestorPage;
