import React from 'react';
import Image from 'next/image';

const FigmaVideo = () => (
  <div style={{ position: 'relative', paddingBottom: '125%', height: 0, overflow: 'hidden' }}>
    <iframe
      style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#f0f0f0',
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
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'none', borderRadius: '25px' }}
      src="https://www.youtube.com/embed/9ly8VacW-qY?si=-TFXtuPL_toyLnaY"
      frameBorder="0"
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
      title: 'B1H0: B1ackH0rnet',
      intro: 'B1H0 introduces an ingenious solution, the Rogue Wallet, which seamlessly infiltrates mixers and tumblers for data mining and intelligence extraction.',
      paragraphs: [
        'The Rogue Wallet is designed to infiltrate cryptocurrency mixers and tumblers, extracting valuable data without detection.',
        'AI-driven intelligence: B1H0 employs advanced AI for data analysis and pattern recognition, enhancing transparency in crypto transactions.',
        'Applications: B1H0 contributes to threat intelligence, crypto-analytics, and regulatory compliance, strengthening security in the crypto-sphere.',
      ],
      video: <YouTubeVideo />,
    },
    {
      title: 'iDAC: Digital Asset Score',
      intro: 'iDAC Score is a revolutionary concept, reshaping risk assessment in DeFi while accommodating traditional financial institutions (TradFi) and centralized financial exchanges (CeFi).',
      paragraphs: [
        'iDAC Score: A paradigm shift in risk assessment, iDAC Score sets new standards for DeFi, TradFi, and CeFi.',
        'Multi-industry application: iDAC Score bridges the gap between traditional finance and the crypto world, empowering global financial institutions.',
        'Unlocking financial potential: iDAC Score facilitates risk detection and enhances financial decision-making for individuals and institutions.',
      ],
    },
    {
      title: 'AI-API: ',
      intro: 'The AI-API empowers developers and businesses with Red, Blue, and Purple AI for offensive, defensive, and collaborative security.',
      paragraphs: [
        'Red.AI (Offensive Security): Employing automated tools, Red.AI assesses security postures and proactively identifies vulnerabilities.',
        'Blue.AI (Defensive Security): Leveraging AI algorithms, Blue.AI detects threats and provides insights to strengthen security.',
        'Purple.AI (Collaborative Security): Facilitating collaboration among security tools, Purple.AI enhances threat response and security measures.',
        'Security, growth, and insights: The AI-API provides valuable tools for organizations to enhance collaboration, mitigate risks, and make data-driven decisions.',
      ],
    },
    // Add more sections as needed
  ];

  return (
    <div>
      <div className="container header">
        <h1>iPOC</h1>
        <h3>iDeFi Proof of Concept(s)</h3>
        <br></br>
        {sections.map((section, index) => (
          <div className="container section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.intro}</h4>
            <br></br>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="section-paragraph">
                {paragraph}
              </p>
            ))}
            {section.video && section.video}
          </div>
        ))}
      </div>
      <FigmaVideo />
    </div>
  );
};

export default DACI;
