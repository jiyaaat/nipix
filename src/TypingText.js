import React, { useEffect, useState } from 'react';
import './TypingText.css';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const formattedText = `"${text}"`; // Add double quotes around the text

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= formattedText.length) {
        setDisplayedText(formattedText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed as needed (milliseconds)

    return () => clearInterval(typingInterval);
  }, [formattedText]);

  return (
    <span style={{ position: 'relative' }}>
      {displayedText}
      <span
        className="blue-dot"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(100% + 5px)',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#3A75E2',
          animation: 'pulse 1s infinite alternate',
          display: displayedText.length < formattedText.length ? 'inline-block' : 'none',
        }}
      />
    </span>
  );
};

export default TypingText;
