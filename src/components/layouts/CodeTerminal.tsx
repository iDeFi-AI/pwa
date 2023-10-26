import React, { useState, useEffect } from 'react';

const MagicOcean: React.FC<{ setMessage: React.Dispatch<React.SetStateAction<string>>; script: string }> = ({ setMessage, script }) => {
  const lines = script.split('\n');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < lines.length) {
        setMessage((prevMessage) => prevMessage + (prevMessage ? '\n' : '') + lines[index]);
        setIndex(index + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000); // Adjust the interval as needed
    return () => {
      clearInterval(timer);
    };
  }, [lines, setMessage, index]);

  return null;
};

export const CodeTerminal: React.FC<CodeTerminalProps> = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <div
      id='App:CodeTerminal'
      style={{
        backgroundColor: '#000',
        padding: '1em',
        borderRadius: '5px',
        color: '#fff',
        whiteSpace: 'pre-wrap', // Allow text to wrap
        wordWrap: 'break-word', // Break words that are too long
      }}
    >
      <MagicOcean setMessage={setMessage} script={children} />
      {message}
    </div>
  );
};

interface CodeTerminalProps {
  children: string;
}

export default CodeTerminal;
