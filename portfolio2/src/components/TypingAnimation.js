// Fix the rendering problem with lineChangeDelay. It renders too much.

import React, { useState, useEffect } from 'react';
import './TypingAnimation.css'; // Import CSS file for styling

function TypingAnimation() {
    const linesToType = [
        "a Full-Stack Software Engineer.",
        "an all around talented guy.",
        "you should check out my blogs.",
        "lastly, have a nice day.",
        "from the top!"
        // Add more lines of text as needed
      ];

  const typingSpeed = 100; // Adjust typing speed here (milliseconds)
  const backspacingSpeed = 75; // Adjust backspacing speed here (milliseconds)
  const lineChangeDelay = 1000; // Adjust delay before typing next line (milliseconds)

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  
    const timer = setTimeout(() => {
        console.log(lineChangeDelay)
      if (isTyping) {
        // Typing animation
        if (currentIndex < linesToType[currentLineIndex].length) {
          setDisplayText(prevText => prevText + linesToType[currentLineIndex][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsTyping(false);
            setCurrentIndex(0);
          }, lineChangeDelay);
        }
      } else {
        // Backspacing animation
        if (displayText.length > 0) {
          setDisplayText(prevText => prevText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentLineIndex(prevLineIndex => (prevLineIndex + 1) % linesToType.length);
          setCurrentIndex(0);
        }
      }
    }, isTyping ? typingSpeed : backspacingSpeed);
    console.log(timer)
    return () => {
        clearTimeout(timer)
        clearTimeout(lineChangeDelay)
    }; // Cleanup on unmount
    
  }, [displayText, isTyping, currentIndex, currentLineIndex, linesToType, typingSpeed, backspacingSpeed, lineChangeDelay]);

  return (
    <div className="typing-animation">
      <p className="typing-text">{displayText}</p>
    </div>
  );
};

export default TypingAnimation;