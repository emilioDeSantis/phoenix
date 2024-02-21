"use client";

import React, { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  style?: React.CSSProperties;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, style }) => {
  const [displayText, setDisplayText] = useState(text);
  const [hovering, setHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (hovering && currentIndex < text.length) {
      interval = setInterval(() => {
        scrambleText(currentIndex);
        setCurrentIndex(currentIndex => currentIndex + 1);
      }, 50); // Adjust time for scrambling speed
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hovering, currentIndex, text]);

  const scrambleText = (index: number) => {
    let scrambled = displayText
      .substring(0, index)
      .concat(text.substring(index)); // Unscramble from left to right
    setDisplayText(scrambled);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    setCurrentIndex(0); // Reset currentIndex on hover
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setDisplayText(text); // Reset text to normal
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {displayText}
    </div>
  );
};

export default ScrambleText;
