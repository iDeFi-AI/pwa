'use client'

import React from 'react'
import Image from 'next/image'

interface TeamMember {
  imgSrc: string;
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    imgSrc: "/team.gif",
    name: "01001010 01011001",
    role: "CEO | CSO",
    description: "Classified"
  },
  {
    imgSrc: "/team.gif",
    name: "01010011 01010011",
    role: "CFO | CBO",
    description: "Classified"
  },
  {
    imgSrc: "/team.gif",
    name: "01001011 01001101",
    role: "CTO | CPO",
    description: "Classified"
  },
  // Add more team members to the array if needed 
];

const TEAM: React.FC = () => {

  return (
    <div>
      <div className="container header">
        <h2>Meet the Team</h2>
        <h4>Each team member comes from an extraordinary background</h4>
        <br></br>
        <p>To protect the identities and those involved at iDeFi-AI.<br></br>Our team has requested to remain anonymous until further notice is given</p>
      </div>

      <div className="container header team-container">
        {teamMembers.map((member, index) => (
          <div className="container team-member" key={index}>
            {/* Replace <img> with <Image /> */}
            <Image src={member.imgSrc} alt={member.name} width={5} height={5} />

            <div className="container member-info">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
            <div className="container team-description">
              {member.description}
            </div>
          </div>
        ))}
        <hr style={{ border: 'none', borderRadius: '5px', borderBottom: '3px solid grey', width: '100%', margin: '90px 0' }} />
      </div>
      <div className="container header">
        <h2>Want to reach us?</h2>
      </div>
      <div className="container header team-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfPg9T44Zm4nNrKlfvhKjJ9UXlnZ4VAhb7LdA978y28ZtrMvQ/viewform?embedded=true"
          width="1000"
          height="600"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default TEAM;
