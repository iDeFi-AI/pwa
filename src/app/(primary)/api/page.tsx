import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  title: string;
  content: string;
  paragraphs?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const ApiOverviewPage: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: 'Welcome to iDeFi.ai API Suite',
      content: 'Explore the innovative world of iDeFi.ai API, where blockchain and AI converge to shape the future of decentralized finance.',
      imageAlt: 'API Overview',
    },
    {
      title: 'API Capabilities',
      content: 'Our API suite offers a wide range of capabilities designed to empower developers and financial institutions.',
      paragraphs: [
        'Real-time Transaction Monitoring: Stay updated with real-time transaction data to detect suspicious activities and ensure secure operations.',
        'AI-driven Risk Analysis: Utilize our AI models to assess risk levels and gain insights into potential threats.',
        'Smart Contract Security: Analyze smart contracts for vulnerabilities and ensure they are secure and reliable.',
        'Data Transformation: Convert raw blockchain data into actionable insights for better decision-making.'
      ],
    },
    {
      title: 'Building, Testing, and Deploying Our API',
      content: 'Discover our meticulous process of building, testing, and deploying the iDeFi.ai API to ensure it meets the highest standards of performance and security.',
      paragraphs: [
        'Development: Using modern frameworks, we design and implement features that cater to our users\' needs.',
        'Testing: Rigorous testing, including unit tests, integration tests, and security audits, ensures our API\'s reliability.',
        'Deployment: Automated CI/CD pipelines facilitate quick and efficient deployment of new features and updates.',
        'Monitoring: Continuous monitoring helps us maintain optimal performance and promptly address any issues.'
      ],
    },
    {
      title: 'Get Started with iDeFi.ai API',
      content: 'Start leveraging our powerful API today. Our comprehensive documentation and support resources make it easy for you to get started.',
      paragraphs: [
        'Create an Account: You need to create an account in order to generate your Token to access your API Keys [here](https://api.idefi.ai/).',
        'API Documentation: Access detailed information about our API endpoints and how to use them. Visit our documentation page [here](https://api.idefi.ai/docs).',
        'API Key: Obtain your API key by registering on our developer portal. Get started [here](https://api.idefi.ai/devs).',
        'Support: Need assistance? Visit our support page for FAQs, guides, and contact information.'
      ],
    },
    {
      title: 'Key Initiatives within iDeFi.ai API',
      content: 'Explore the key initiatives being built, tested, and deployed within our API suite to drive innovation in the DeFi space.',
      paragraphs: [
        'B1H0 - B1ack H0rnet: This initiative focuses on advanced transaction monitoring and threat detection using AI. Access real-time transaction data and AI-driven insights via our API to secure your financial operations. [Learn more](https://api.idefi.ai/b1h0).',
        'iDAC - Digital Risk Scoring: Leveraging AI, our Digital Risk Scoring initiative provides comprehensive risk assessments. Integrate these models into your applications to make informed decisions. [Discover more](https://api.idefi.ai/idac).',
        'Initial Proof of Concepts (POCs): Continuously developing and testing new proof of concepts to drive DeFi innovation. Experiment with cutting-edge technologies and integrate them into your solutions via our API. [Explore POCs](https://api.idefi.ai/pocs).'
      ],
    },
    {
      title: 'Partner Ecosystem and Feature Development',
      content: 'Learn how we collaborate with partners to develop and test new features within our ecosystem.',
      paragraphs: [
        'Collaboration: We work closely with partners to understand their needs and challenges, developing tailored solutions to enhance their operations.',
        'Feature Development: Using our API logic, we build and test new features that address real-world problems faced by our partners, including customized transaction monitoring tools and specialized risk analysis models.',
        'Testing and Deployment: Rigorous testing ensures new features meet our high standards for reliability and security before deployment. These features are then made accessible to our partners via the API suite.'
      ],
    }
  ];

  return (
    <div>
      <div className="container header layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.content}</h4>
            {index !== 0 && <br />}
            {section.paragraphs && (
              <div>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph.includes('http') ? (
                      <Link href={paragraph.match(/https?:\/\/[^\s]+/g)![0]} target="_blank" className="text-purple-450 underline hover:underline">
                        {paragraph.replace(/https?:\/\/[^\s]+/g, '').trim()}
                      </Link>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            )}
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
            {index !== 0 && (
              <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '90px 0' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiOverviewPage;
