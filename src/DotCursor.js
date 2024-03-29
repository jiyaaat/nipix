// DotCursor.js

import React, { useState, useEffect } from 'react';
import './DotCursor.css'; // Import CSS for styling

const DotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setActive(true); // Activate the dot cursor upon click
      setTimeout(() => {
        setActive(false);
      }, 200); // Deactivate after 200ms
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={`dot-cursor ${active ? 'active' : ''}`} style={{ left: position.x, top: position.y }}></div>
  );
};

export default DotCursor;

