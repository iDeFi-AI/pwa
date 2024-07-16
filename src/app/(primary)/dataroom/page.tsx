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

const DataroomPage: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: 'Welcome to iDeFi.AI',
      content: '',
      imageUrl: '/dbroom.gif',
      imageAlt: 'Company Logo',
    },
    {
      title: 'Overview of iDeFi.ai',
      content: 'Welcome to the innovative world of iDeFi.ai, where blockchain technology and artificial intelligence converge to shape the future of decentralized finance (DeFi).',
      paragraphs: [
        'Our vision is to revolutionize the financial landscape by harnessing the power of cutting-edge technology. Through the fusion of blockchain, artificial intelligence, and Quantum Technologies, we are paving the way for a more inclusive and efficient financial ecosystem.',
        'At iDeFi.ai, we are committed to enhancing security within the DeFi space. Our innovative solutions are designed to minimize fraud, reduce risks, and provide users with a safe environment to manage their digital assets.',
        'Join us on this exciting journey into the future of finance, where smart contracts, decentralized applications, and AI-driven insights will become the norm. Together, we are shaping the path for a more accessible and interconnected financial world.',
      ],
    },
    {
      title: 'Our Mission',
      content: 'At iDeFi.ai, our mission is to create a financial ecosystem that prioritizes security, efficiency, and inclusivity. We believe that the synergy between AI and blockchain is the foundation upon which the future of DeFi is built.',
      paragraphs: [
        'Our mission represents a commitment to a new era of financial services. We envision a future where anyone, regardless of their background or geographic location, can participate in the global financial system.',
        'Security is paramount in the decentralized world. Our dedication to building a secure environment means that users can have confidence in their financial transactions. By leveraging the power of AI and blockchain, we are paving the way for robust security measures that can withstand the challenges of the digital age.',
        'Inclusivity is a core value we hold dear. We aim to break down barriers and make financial services accessible to everyone. By embracing blockchains transparency and AIs adaptability, we are creating an ecosystem that welcomes users from all walks of life. This inclusivity is what makes iDeFi.ai stand out in the world of DeFi.',
      ],
    },
    {
      title: 'Core Objectives',
      content: 'Our core objectives include democratizing finance, making cryptocurrency accessible to traditional financial institutions, and reshaping the financial landscape using advanced AI techniques.',
      paragraphs: [
        'Democratizing finance means we are championing financial empowerment for all. We believe in breaking the chains of traditional banking and giving control back to individuals. With blockchain and AI, we are eliminating intermediaries and enabling peer-to-peer financial interactions.',
        'Our goal of making cryptocurrency accessible to traditional financial institutions marks the convergence of two worlds. We are bridging the gap between innovative blockchain technologies and the established financial industry. This bridge facilitates the seamless flow of assets and ideas, bringing the best of both worlds together.',
        'The financial landscape is undergoing a profound transformation, and we are at the forefront of it. Our utilization of advanced AI techniques means that our solutions are constantly evolving and improving. With this dynamic approach, we are shaping the financial future by incorporating AI-driven insights into DeFi applications and smart contracts.',
      ],
    },
    {
      title: 'Our Commitment',
      content: 'iDeFi.ai is at the forefront of the DeFi revolution. Our commitment to user-friendliness, robust security measures, and AI-driven solutions positions us as a trailblazer in the decentralized finance sector.',
      paragraphs: [
        'Being at the forefront of the DeFi revolution means we are the driving force behind the transformation of financial services. Our commitment to staying ahead of the curve is unwavering. We are setting the standard for what DeFi can and should be.',
        'User-friendliness is a key aspect of our commitment. We understand that DeFi can be complex, and we are making it as user-friendly as possible. Our user-centric approach ensures that anyone, regardless of their technical expertise, can seamlessly navigate and benefit from our platform.',
        'Robust security measures are the foundation of trust. Our commitment to security is not just a promise; its an ongoing process. We continuously refine and enhance our security protocols to provide users with peace of mind and protect their digital assets.',
        'AI-driven solutions represent the future of DeFi. We believe that AI can revolutionize how financial systems operate. By integrating AI capabilities into our applications and smart contracts, we are setting the stage for a new era of efficiency and innovation in the DeFi sector.',
      ],
    },
    {
      title: 'Key Initiatives',
      content: 'Explore the key initiatives being built and tested at iDeFi.ai. Access real-time transaction data, AI-driven insights, and more to secure and optimize your financial operations.',
      paragraphs: [
        'B1H0 - B1ack H0rnet: Our innovative tool for infiltrating mixers and tumblers within the cryptocurrency ecosystem, designed for intelligent data mining and resourceful intelligence extraction.',
        'iDAC - Digital Risk Scoring: Our revolutionary trust algorithm that reshapes risk assessment in DeFi while accommodating traditional financial institutions (TradFi) and centralized financial exchanges (CeFi).',
        'AI Insights: Our AI-driven solutions provide unparalleled insights into cryptocurrency transactions, enabling intelligent transaction analysis, seamless integration with the iDAC Score, and empowering financial decision-making.',
        'AI Threat Detection: Our state-of-the-art AI Threat Detection system revolutionizes decentralized finance (DeFi) security, reshaping standards for traditional financial institutions (TradFi) and centralized financial exchanges (CeFi).',
      ],
    },
    {
      title: 'API Suite',
      content: 'Our API suite provides access to real-time transaction data, AI-driven insights, and more to secure and optimize your financial operations.',
      paragraphs: [
        'The iDeFi.ai API suite allows developers to integrate advanced blockchain analytics, AI-driven insights, and real-time monitoring into their applications.',
        'Access endpoints for risk scoring, transaction analysis, compliance monitoring, and more, enabling you to build secure and intelligent financial applications.',
        'Our API documentation and developer resources provide all the information you need to get started quickly and efficiently.',
      ],
    },
    {
      title: 'Quantum Suite',
      content: 'Explore the potential of quantum technology in finance with QiDeFi.AI.',
      paragraphs: [
        'Leveraging the power of quantum computing to solve complex financial problems and optimize transactions.',
        'Harnessing artificial intelligence to provide actionable insights and predictive analytics for smart contract transactions.',
        'Real-time monitoring and analysis of on-chain data to ensure security and efficiency in all financial transactions.',
        'Ensuring robust security measures and compliance with industry standards to protect user data and transactions.',
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.content}</h4>
            {index !== 0 && ( // Add this condition to exclude line break in the first section
              <br />
            )}
            {section.title === 'Welcome to iDeFi.AI' && ( // Check if this is the specific section
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
                  <p key={pIndex} className="mb-4 text-lightlaven">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {section.imageUrl && (
              <div className="mt-4">
                <Image
                  layout="responsive"
                  objectFit="cover"
                  width={200}
                  height={300}
                  src={section.imageUrl}
                  alt={section.imageAlt ?? section.title}
                  className="rounded-md"
                />
              </div>
            )}
            {index !== 0 && <hr className="my-12 border-t-2 border-gray-700 w-full" />}
          </div>
        ))}

        <div className="mt-12 text-center">
          <Link href="https://api.idefi.ai">
            <button className="text-lightlaven hover:text-white">iDeFi.ai API</button>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="https://q.idefi.ai">
            <button className="text-lightlaven hover:text-white">QiDeFi.AI</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataroomPage;
