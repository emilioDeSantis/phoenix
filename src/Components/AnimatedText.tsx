// components/AnimatedWord.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  yOffset?: number; // Y offset for the animation
  stagger?: number; // Stagger duration between letters
  duration?: number; // Overall animation duration
  textStyle?: React.CSSProperties;
  triggerMargin?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  yOffset = 50,
  stagger = 0.005,
  duration = 0.8,
  textStyle,
  triggerMargin = '20%',
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();


  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && textRef.current) {
          gsap.fromTo(
            textRef.current.children, 
            { y: yOffset, opacity: 0 },
            {
              duration: duration,
              y: 0,
              opacity: 1,
              delay: index => delay + index * stagger,
              stagger: stagger,
            }
          );
          observer.disconnect();
        }
      },
      { 
        threshold: 0,
        rootMargin: `0px 0px -${triggerMargin} 0px` // Adjust the bottom margin
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, [delay, yOffset, stagger, duration]);

  const renderText = () => {
    return text.split(' ').map((word, index) => {
      // Handle space after each word except the last one
      const space = index < text.split(' ').length - 1 ? ' ' : '';
      return (
        <span key={index} style={{ display: 'inline-block', marginRight: '0.25em', opacity: 0 }}>
          {word}{space}
        </span>
      );
    });
  };
  

  return (
    <div ref={textRef} style={{ ...textStyle }}>
      {renderText()}
    </div>
  );
};

export default AnimatedText;
