'use client'

import React from 'react';

const FigmaVideo = () => (
  <div style={{ position: 'relative', paddingBottom: '125%', height: 0, overflow: 'hidden' }}>
    <iframe
      style={{
        border: '4px solid #913d88',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#f0f0f0',
        borderRadius: '20px'
      }}
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FO2n1As8SeWhJBwY9YSlT8l%2FiDeFi.ai%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D7-25%26viewport%3D177%252C539%252C0.38%26t%3D9kSpIdnf2lA3RPxh-1%26scaling%3Dscale-down%26starting-point-node-id%3D71%253A966%26mode%3Ddesign"
      allowFullScreen
    ></iframe>
  </div>
);

const YouTubeVideo = () => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
      allowFullScreen
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'solid', borderRadius: '20px', borderColor: '#913d88' }}
      src="https://www.youtube.com/embed/9ly8VacW-qY?si=-TFXtuPL_toyLnaY"
    ></iframe>
  </div>
);

const YouTubeVideo2 = () => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
      allowFullScreen
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'solid', borderRadius: '20px', borderColor: '#913d88' }}
      src="https://www.youtube.com/embed/lIpgfnMMCcw?si=8dlWYmfbNoZI0KrJ"
    ></iframe>
  </div>
);

const YouTubeVideo3 = () => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
      allowFullScreen
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'solid', borderRadius: '20px', borderColor: '#913d88' }}
      src="https://www.youtube.com/embed/oLH52dC8vPU?si=Bg4l8c_5xm3ILbHt"
    ></iframe>
  </div>
);

const YouTubeVideo4 = () => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
      allowFullScreen
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'solid', borderRadius: '20px', borderColor: '#913d88' }}
      src="https://www.youtube.com/embed/SyG0uLmq5-A?si=ScNSt6oNJXULA-F0"
    ></iframe>
  </div>
);

interface SectionProps {
  title: string;
  intro: string;
  paragraphs: string[];
  video?: React.ReactNode;
}

const DACI: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: '#1 B1H0',
      intro: 'The B1ack H0rnet introduces an ingenious solution, the Rogue Wallet, which seamlessly infiltrates mixers and tumblers for data mining and intelligence extraction.',
      paragraphs: [
        'The Rogue Wallet is designed to infiltrate cryptocurrency mixers and tumblers, extracting valuable data without detection.',
        'AI-driven intelligence: B1H0 employs advanced AI for data analysis and pattern recognition, enhancing transparency in crypto transactions.',
        'Applications: B1H0 contributes to threat intelligence, crypto-analytics, and regulatory compliance, strengthening security in the crypto-sphere.',
      ],
      video: <YouTubeVideo />,
    },
    {
      title: '#2 iDAC',
      intro: 'A revolutionary trust algorithim, reshaping risk assessment in DeFi while accommodating traditional financial institutions (TradFi) and centralized financial exchanges (CeFi).',
      paragraphs: [
        'iDAC Score: A paradigm shift in risk assessment, iDAC Score sets new standards for DeFi, TradFi, and CeFi.',
        'Multi-industry application: iDAC Score bridges the gap between traditional finance and the crypto world, empowering global financial institutions.',
        'Unlocking financial potential: iDAC Score facilitates risk detection and enhances financial decision-making for individuals and institutions.',
      ],
      video: <YouTubeVideo2 />,
    },
    {
      title: '#3 AI Insights',
      intro: 'Embark on a journey into the future of decentralized finance (DeFi) with our cutting-edge Artificial Intelligence (AI) solutions. Setting unprecedented standards for DeFi, traditional financial institutions (TradFi), and centralized financial exchanges (CeFi).',
      paragraphs: [
        'Intelligent Transaction Analysis: Harnessing the power of advanced AI algorithms, our platform delivers unparalleled insights into cryptocurrency transactions. The AI-driven analysis seamlessly integrates with the iDAC Score, providing a comprehensive overview of transactional activities.',
        'Seamless Integration with iDAC Score: The synergy between AI and the iDAC Score reshapes risk assessment in real-time. As transactions unfold, our AI diligently analyzes patterns, contributing to the dynamic calculation of the iDAC Score. This integration ensures a secure and transparent financial landscape.',
        'Empowering Financial Decision-Making: AI doesn\'t just provide insights; it empowers individuals and institutions to make informed financial decisions. By unlocking untapped potential and revolutionizing decision-making processes, our AI solutions redefine the way we approach risk assessment in both traditional and crypto finance.',
        'Revolutionizing Threat Intelligence: As we propel into the future, our AI takes center stage in evolving threat intelligence, crypto-analytics, and regulatory compliance. The insights generated contribute to a more secure and compliant crypto-sphere, ensuring the integrity of financial transactions.',
      ],
      video: <YouTubeVideo3 />,
    },
    {
      title: '#4 AI Threat Detection',
      intro: 'Explore the capabilities of our state-of-the-art AI Threat Detection system, revolutionizing decentralized finance (DeFi) and reshaping security standards for traditional financial institutions (TradFi) and centralized financial exchanges (CeFi).',
      paragraphs: [
        'Advanced Threat Analysis: Our platform leverages cutting-edge AI algorithms to provide in-depth insights into potential threats within cryptocurrency transactions. The AI-driven analysis seamlessly integrates with the iDAC Score, delivering a holistic view of transactional activities and enhancing threat detection capabilities.',
        'Dynamic Integration with iDAC Score: The dynamic synergy between AI Threat Detection and the iDAC Score transforms risk assessment in real-time. As transactions unfold, our AI system meticulously examines patterns, contributing to the continuous refinement of the iDAC Score. This integration ensures a resilient and transparent financial landscape with enhanced threat detection.',
      ],
      video: <YouTubeVideo4 />,
    },    
  ];

  return (
    <div>
      <div className="container header">
        {sections.map((section, index) => (
          <div className="container header section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.intro}</h4>
            <br></br>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="section-paragraph">
                {paragraph}
              </p>
            ))}
            {section.video && section.video}
            <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '30px 0', marginBottom: '30px'}} />
          </div>
        ))}
        <div className="container header section">
          <h2>#4 Mobile Demo</h2>
          <FigmaVideo />
        </div>
      </div>
    </div>
  );
};

export default DACI;
