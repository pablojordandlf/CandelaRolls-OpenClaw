import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  animationType?: 'chars' | 'words';
  className?: string;
  // GSAP animation properties can be passed here if needed for customization
  // For now, we'll use a sensible default animation
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, animationType = 'chars', className = '' }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Ensure GSAP is registered
    gsap.registerPlugin(); // Placeholder, actual plugins are usually auto-included

    let animationTarget: gsap.TweenTarget;
    let animationConfig: gsap.TweenVars = {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: 'power3.out',
    };

    if (animationType === 'chars') {
      const chars = gsap.utils.selector(element)('.char');
      animationTarget = chars;
    } else { // words
      const words = gsap.utils.selector(element)('.word');
      animationTarget = words;
      animationConfig.stagger = 0.1; // Slightly larger stagger for words
    }

    gsap.from(animationTarget, animationConfig);

  }, [text, animationType]); // Re-run if text or type changes

  const renderText = () => {
    if (animationType === 'chars') {
      return text.split('').map((char, index) => (
        <span key={`${char}-${index}`} className="char inline-block" aria-hidden="true">
          {char === ' ' ? '\u00A0' : char} {/* Preserve spaces using non-breaking space */}
        </span>
      ));
    } else { // words
      return text.split(' ').map((word, index) => (
        <span key={index} className="word inline-block mr-2" aria-hidden="true">
          {word}
        </span>
      ));
    }
  };

  // Use a heading element as a common default, but allow override via className
  const Tag = 'h2'; // Or 'h1', 'h3', 'p' depending on context and className

  return (
    <Tag ref={textRef} className={`animated-text ${className}`} aria-label={text}>
      {renderText()}
    </Tag>
  );
};

export default AnimatedText;
