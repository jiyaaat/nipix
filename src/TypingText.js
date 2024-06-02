// TypingText.js
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
        // Reset typing animation by setting currentIndex back to 0
        currentIndex = 0;
      }
    }, 150); // Adjust typing speed as needed (milliseconds)

    return () => clearInterval(typingInterval);
  }, [formattedText]);

  return (
    <span className="typing-container">
      <span className="typing-text">{displayedText}</span>
      <span
        className="blue-dot"
        style={{
          display: displayedText.length < formattedText.length ? 'inline-block' : 'none',
        }}
      />
    </span>
  );
};

export default TypingText;
