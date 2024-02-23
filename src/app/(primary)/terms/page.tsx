import React from 'react';
import Image from 'next/image';

interface SectionProps {
  title: string;
  intro: string;
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const terms: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: 'Terms of Service',
      intro: 'Disclosure for Educational and Ethical Purposes',
      paragraphs: [
        '1. Acceptance of Terms:',
        'By using this website, you agree to the following disclosure, which outlines the educational and ethical nature of the content provided. This disclosure may be updated at any time without prior notice.',
        '2. Nature of Content:',
        'This website offers access to a variety of educational resources, research tools, and information intended for ethical, educational, and research purposes. The content is not intended for commercial use.',
        '3. Educational Use:',
        'Unless explicitly specified, the materials and resources provided on this website are for educational purposes. The content is designed to inform, educate, and promote ethical considerations.',
        '4. Research and Development:',
        'The content on this website is a result of research and development efforts. It is intended to advance knowledge, understanding, and ethical practices in various fields.',
        '5. No Unlawful or Unethical Use:',
        'Users of this website must commit to using the content for lawful and ethical purposes. The materials and information should not be used in any way that violates the law or ethical principles.',
        '6. Termination/Access Restriction:',
        'We reserve the right to restrict or terminate access to our resources if they are used in an unlawful or unethical manner or for any other reason that we deem appropriate.',
        '7. Disclaimer:',
        'The information provided on this website is for educational and ethical purposes only. It should not be considered as professional advice or used as a substitute for expert guidance. We do not endorse or encourage any unethical or illegal activities.',
        '8. Changes to this Disclosure:',
        'We may update this disclosure to reflect changes in our educational and ethical policies. Users are encouraged to review this disclosure periodically.',
        'By using this website, you acknowledge that you have read, understood, and agreed to this disclosure.',
      ],
    },
    // Add more sections as needed
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default terms;
