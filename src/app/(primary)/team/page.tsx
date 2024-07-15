'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    imgSrc: "/tyrone.png",
    name: "Tyrone Ross",
    role: "CEO",
    description: "Tyrone Ross is the CEO of iDeFi.ai and is a registered investment adviser. Recognized by Investment News 40 under 40(2019), and WealthManagement.com as a top ten advisor set to change the industry in 2019. FinancialPlanning.com named him as one of 20 people who will change wealth management in 2020. And recently he was also named as Investopedia's Top 100 financial advisors. Along with all these, he keeps on driving the investment culture to new heights so he was also acknowledged as one of Barron's 10 people to watch in wealth management in 2022.",
    links: {
      linkedin: "https://www.linkedin.com/in/tyroneross/",
    },
  },
  {
    imgSrc: "/jerry.png",
    name: "Jerry Yen",
    role: "CSO",
    description: "Jerry Yen leads strategic development for iDeFi.ai, with broad strategy, business, and technology experience across AI, blockchain, SaaS, analytics, fintech, retirement, and personal computing. He also built 180 algorithms for Advice Analytics (connecting employees to financial advisors) and invented military-grade rocket trajectory optimization algorithms for General Dynamics that remain a fleet standard today. Yen is a strategic advisor and investor for multiple startups, and has held executive roles at GuidedChoice (designing personalized 401(k) investment technology), Hewlett Packard, The Walt Disney Company, and General Dynamics. Yen holds degrees from UCLA, Northwestern, and Stanford University in aerospace engineering and business strategy.",
    links: {
      linkedin: "https://www.linkedin.com/in/jerryyen",
    },
  },
  {
    imgSrc: "/shawn.png",
    name: "Shawn Saucier",
    role: "CFO",
    description: "Shawn Saucier is head of the financial development behind iDeFi.ai ",
    links: {
      linkedin: "https://www.linkedin.com/in/shawn-saucier/",
    },
  },
  {
    imgSrc: "/keaton.png",
    name: "Keaton McCune",
    role: "CTO",
    description: "Keaton McCune is the leading technology team leader",
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
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <h4 className="text-xl mb-4">Each team member comes from an extraordinary background</h4>
        <p className="mb-8">Click on a team member to learn more!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer items-center text-center"
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
                        className="text-blue-500 underline"
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
