import React from 'react';
import Image from 'next/image';

const Video: React.FC = () => (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
    <iframe
      allowFullScreen
      style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border: "none", borderRadius: "25px" }}
      src="https://www.youtube.com/embed/9ly8VacW-qY?si=-TFXtuPL_toyLnaY"
      frameBorder="0">
    </iframe>
  </div>
);

interface SectionProps {
  title: string;
  intro: string;
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const iDAC: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: "",
      intro: "",
      imageUrl: '/idacscore.png',
      paragraphs: [""]
    },
    {
      title: "Digital Asset Crypto Score (iDAC)",
      intro: "The Crypto of FICO",
      paragraphs: ["This section unveils the concept of the iDeFi Digital Asset Score (iDAC Score), a groundbreaking development in the world of decentralized finance (DeFi). The iDAC Score represents a paradigm shift in risk assessment, offering innovative solutions to redefine the future of DeFi, while also accommodating traditional financial institutions (TradFi) and trusted centralized financial exchanges (CeFi). It bridges the gap between digital and traditional finance, shaping the evolution of the entire financial ecosystem."]
    },
    {
      title: "Innovations in Risk Detection",
      intro: "Innovation in Risk Detection - A Proactive Approach",
      paragraphs: ["Traditional static risk assessments are no longer sufficient for the dynamic crypto landscape. Innovations in risk detection provide a proactive approach that empowers users and institutions with timely insights for informed decisions. We're revolutionizing risk assessment by embracing real-time data and AI-driven algorithms.",
        "This approach ensures that risk isn't just assessed; it's anticipated. We're leaving behind the old models of assessing historical data and introducing a new era where potential risks are identified before they materialize, creating a safer and more reliable financial ecosystem."]
    },
    {
      title: "Operation B1H0: Enhancing iDAC Score Accuracy",
      intro: "B1H0 (Black Hornet) and Data Validation",
      paragraphs: ["Operation B1H0, led by the Black Hornets, plays a pivotal role in enhancing the accuracy of the iDAC Score. It employs sophisticated techniques, including data validation processes that rigorously verify the integrity of the data used in generating the iDAC Score.",
        "The script above showcases B1H0's interactions with the blockchain and other wallets, illustrating the complexity of mapping out the internal processes of each transaction. B1H0 injects a certain amount of unpredictability into the validation process, ensuring the highest accuracy in risk detection and assessment."]
    },
    {
      title: "Utilizing the iDAC Score Across Financial Sectors",
      intro: "Beyond DeFi: iDAC's Expanding Horizon",
      paragraphs: ["The iDAC Score's applicability extends beyond decentralized finance, embracing a wide range of financial sectors. In the DeFi sector, the iDAC Score empowers users with transparent risk assessments, promoting financial inclusion and aligning with the evolving financial landscape.",
        "Traditional financial institutions (TradFi) are also integrating the iDAC Score into their risk assessment models, bridging the gap between the crypto and traditional financial worlds. Trusted centralized financial exchanges (CeFi) are leveraging the iDAC Score to enhance the security and transparency of crypto trading, ensuring a safer environment for investors."]
    }
  ];

  return (
    <div>
      <div className="container header">
        {sections.map((section, index) => (
          <div className="container section" key={index}>
            <h2>{section.title}</h2>
            <h4>{section.intro}</h4>
            <br></br>
            {section.imageUrl && (
              <div className="image-container">
                <Image
                  layout="responsive"
                  width={100}
                  height={100}
                  src={section.imageUrl}
                  alt={section.imageAlt ?? section.title}
                />
              </div>
            )}
            {index !== 0 && ( // Check if it's not the first section
              <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '90px 0' }} />
            )}
            {section.paragraphs.map((paragraph, pIndex) => (<p key={pIndex} className="section-paragraph">{paragraph}</p>))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default iDAC;
