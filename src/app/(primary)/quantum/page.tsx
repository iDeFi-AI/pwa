import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const QuantumTechPage: React.FC = () => {
  const sections = [
    {
      subtitle: 'Revolutionizing finance with cutting-edge quantum technology and artificial intelligence.',
      imageUrl: '/qcat.png',
      imageAlt: 'Quantum Technology',
    },
    {
      title: 'Quantum Computing',
      description: 'Leveraging the power of quantum computing to solve complex financial problems and optimize transactions.',
    },
    {
      title: 'AI-Driven Insights',
      description: 'Harnessing artificial intelligence to provide actionable insights and predictive analytics for smart contract transactions.',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Real-time monitoring and analysis of on-chain data to ensure security and efficiency in all financial transactions.',
    },
    {
      title: 'Security and Compliance',
      description: 'Ensuring robust security measures and compliance with industry standards to protect user data and transactions.',
    },
    {
      title: 'Accessing Key Initiatives on API Suite',
      description: 'Explore the key initiatives being built and tested at https://q.idefi.ai. Access real-time transaction data, AI-driven insights, and more to secure and optimize your financial operations.',
    },
    {
      title: 'Collaboration with Partners',
      description: 'Learn how we collaborate with partners to develop and test new features within our ecosystem, addressing real-world problems with customized solutions.',
    },
  ];

  return (
    <div className="container min-h-screen py-12 px-4 bg-black sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-lightlaven font-semibold tracking-wide uppercase text-center">Quantum Suite</h2>
          <p className="text-center mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to QiDEFi.AI
          </p>
          <p className="text-center mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Revolutionizing finance with cutting-edge quantum technology and artificial intelligence.
          </p>
        </div>

        <div className="mt-10">
          {sections.map((section, index) => (
            <div key={index} className="relative mb-10">
              <div className="ml-16">
                <h3 className="text-white text-lg leading-6 font-medium text-gray-900">{section.title}</h3>
                <p className="mt-2 text-base text-gray-500">{section.description}</p>
                {section.imageUrl && (
                  <div className="mt-4">
                    <Image
                      src={section.imageUrl}
                      alt={section.imageAlt}
                      width={600}
                      height={400}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://q.idefi.ai">
            <span className="text-lightlaven hover:text-white">Visit QiDEFi.AI</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuantumTechPage;
