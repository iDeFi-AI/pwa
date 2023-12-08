import React from 'react';
import Image from 'next/image';

const Video: React.FC = () => (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
    <iframe
      allowFullScreen
      style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border: "none", borderRadius: "25px" }}
      src="https://www.youtube.com/embed/9ly8VacW-qY?si=-TFXtuPL_toyLnaY"
      frameBorder="0"
    ></iframe>
  </div>
);

interface SectionProps {
  title: string;
  intro: string;
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const BlogPost: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: "Operation B1H0",
      intro: "The B1ack H0rnet",
      paragraphs: ["Operation B1H0, a pivotal blockchain project centered around the innovative tool known as “The B1ack H0rnet”. This ingenious solution is being designed to clandestinely infiltrate mixers and tumblers within the cryptocurrency ecosystem, serving a dual purpose of intelligent data mining and resourceful intelligence extraction. Here’s a detailed look at how this cover operation functions."],
      imageUrl: "/b1h03.jpg",
      imageAlt: "Description of image",
    },
    {
      title: "Advanced Capability",
      intro: "B1H0 possesses a remarkable capability...",
      paragraphs: ["B1H0 possesses a remarkable capability to inject multiple “roque” wallet addresses into the dynamic world of cryptocurrency mixers and tumblers. Traditionally, these services act as shields, obfuscating the trails of cryptocurrency funds. B1H0, on the other hand, operates stealthily, much like a swarm of “hornets” infiltrating a hive."],
      imageUrl: "/b1h0.jpg",
      imageAlt: "Description of image",
    },
    {
      title: "Artificial Intelligence",
      intro: "The Queen Hornet",
      paragraphs: ["Central to this decentralized operation is our sophisticated AI system, analogous to the “queen bee”. This AI boasts an advanced understanding of blockchain operations, smart contracts, and digital token transactions. It orchestrates the entire process, intelligently governing the actions of each injected rogue address."],
      imageUrl: "/idefiai.jpg",
      imageAlt: "Description of image",
    },
    {
      title: "Use Cases & Solutions",
      intro: "B1H0 stealth operation unlocks a new realm...",
      paragraphs: ["Threat Intelligence: By providing a transparent view of typically obscured transactions, we contribute to the broader fight against money laundering and illicit trade in the cryptocurrency world, offering vital data to relevant law enforcement agencies and financial institutions. Crypto-Analytics: Researchers and analysts benefit from a better understanding of cryptocurrency transactions. The solution provides previously unattainable insights crucial for market forecasting and trend prediction. Regulatory Compliance: Financial firms and institutions can proactively monitor their operations to ensure compliance with regulatory guidelines. By tracking interactions with potential mixers or tumblers, they can avoid transactions that may lead to compliance issues."],
      imageUrl: "/b1h02.jpg",
    },
    {
      title: "Initial Proof of Concept",
      intro: "Visual concept using Python",
      paragraphs: [""],
    }
  ];

  return (
    <div className="container header">
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <h2>{section.title}</h2>
          <h4>{section.intro}</h4>

          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="section-paragraph">{paragraph}</p>
          ))}

          {section.imageUrl && (
            <div className="image-container">
              <Image
                layout="responsive"
                objectFit="cover"
                width={200} // Adjust the width and height as needed
                height={200} // Adjust the width and height as needed
                src={section.imageUrl}
                alt={section.imageAlt ?? section.title}
                className="englarged-image"
              />
              <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '90px 0' }} />
            </div>
          )}
        </div>
      ))}
      <Video />
    </div>
  );
};

export default BlogPost;
