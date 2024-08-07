'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  imgSrc: string;
  name: string;
  role: string;
  description: string;
  links?: {
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    imgSrc: "/team.gif",
    name: "01010100 01010010",
    role: "CEO",
    description: "Team Member 1 is the CEO of iDeFi.ai and is a registered investment adviser. Recognized by Investment News 40 under 40(2019), and WealthManagement.com as a top ten advisor set to change the industry in 2019. FinancialPlanning.com named him as one of 20 people who will change wealth management in 2020. And recently he was also named as Investopedia's Top 100 financial advisors. Along with all these, he keeps on driving the investment culture to new heights so he was also acknowledged as one of Barron's 10 people to watch in wealth management in 2022.",
  },
  {
    imgSrc: "/team.gif",
    name: "01001010 01011001",
    role: "CSO",
    description: "Team Member 2 leads strategic development for iDeFi.ai, with broad strategy, business, and technology experience across AI, blockchain, SaaS, analytics, fintech, retirement, and personal computing. He also built 180 algorithms for Advice Analytics (connecting employees to financial advisors) and invented military-grade rocket trajectory optimization algorithms for General Dynamics that remain a fleet standard today. Yen is a strategic advisor and investor for multiple startups, and has held executive roles at GuidedChoice (designing personalized 401(k) investment technology), Hewlett Packard, The Walt Disney Company, and General Dynamics. Yen holds degrees from UCLA, Northwestern, and Stanford University in aerospace engineering and business strategy.",
  },
  {
    imgSrc: "/team.gif",
    name: "01010011 01010011",
    role: "CFO",
    description: "Team Member 3 is the Chief Financial Officer and Founder of iDeFi.ai, a technology startup specializing in AI, WEB3, Crypto, DeFi, and Blockchain. With extensive experience in financial management, market research, and strategy within technology companies, Shawn brings industry expertise in computer hardware, software, SaaS, digital media, and blockchain DeFi. He is particularly interested in early-stage hi-tech start-ups in Southern California. His specialties include financial management and strategy, market research, and marketing strategy. His skills encompass financial reporting, GAAP, cash management, sales, new business development, marketing, technical accounting, cost accounting, lean manufacturing, six sigma, venture capital, and private equity. Shawn is a graduate of the University of San Diego School of Business Administration and holds a Professional Skills Program Certificate in Business Administration and Management.",
    links: {
      linkedin: "https://www.linkedin.com/in/shawn-saucier/",
    },
  },
  {
    imgSrc: "/team.gif",
    name: "01001011 01001101",
    role: "CTO",
    description: "Team Member 4 is the Chief Technology Officer of iDeFi.ai, responsible for the technological vision and execution of the company's roadmap. A self-taught expert in hacking and full-stack web development, k3y10 has transitioned into a dynamic technical leader with over eight years of experience. He has spearheaded innovations in cryptography, blockchain technology, quantum laser communication, and embedded AI software. His journey began in cybersecurity and software development, bootstrapping platforms and security teams for startups across various funding stages. k3y10's unique skill set surpasses that of a typical computer science graduate, and he continues to lead groundbreaking efforts at the forefront of technology.",
    links: {
      linkedin: "https://www.linkedin.com/in/k3yton",
    },
  },
  // Add more team members to the array if needed 
];

const TEAM: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-white min-h-screen">
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <h4 className="text-xl mb-4">Each team member comes from an extraordinary background</h4>
        <h4 className="text-xl mb-4">To protect our privacy, some members have asked to remain anonymous</h4>
        <p className="mb-8">Click on a team member to learn more!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer items-center text-center"
              onClick={() => handleToggleDescription(index)}
            >
              <div className="flex justify-center">
                <Image src={member.imgSrc} alt={member.name} width={150} height={150} className="rounded-full mb-4" />
              </div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-400">{member.role}</p>
              {expandedIndex === index && (
                <div className="mt-4 text-sm text-gray-200 overflow-auto max-h-32">
                  {member.description}
                  <div className="mt-4">
                    {member.links?.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neorange underline"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <hr className="my-12 border-t-2 border-gray-700 w-full" />

        <div>
          <h2 className="text-2xl font-bold mb-4">Want to reach us?</h2>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfPg9T44Zm4nNrKlfvhKjJ9UXlnZ4VAhb7LdA978y28ZtrMvQ/viewform?embedded=true"
              width="1000"
              height="600"
              className="w-full max-w-4xl"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TEAM;
