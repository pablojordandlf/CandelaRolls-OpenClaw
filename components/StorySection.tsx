import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger); // Assume this is registered globally or in a layout effect

interface StorySectionProps {
  storyTitle?: string;
  storyText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

// Default values for props
const defaultProps: StorySectionProps = {
  storyTitle: "Nuestra Historia",
  storyText: "Fundado con pasión por la repostería, CandelaRolls ha servido deliciosos rollitos de canela durante más de una década. Creemos en usar los mejores ingredientes y técnicas tradicionales para crear momentos de pura alegría.",
  imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=500&h=500&fit=crop',
  imageAlt: 'Rollitos de canela artesanales frescos',
};

const StorySection: React.FC<StorySectionProps> = (props = {}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { storyTitle, storyText, imageUrl, imageAlt } = { ...defaultProps, ...props } as Required<StorySectionProps>;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Ensure GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error("GSAP or ScrollTrigger not loaded. Please ensure they are imported and registered.");
      return;
    }

    // Register ScrollTrigger if not already done
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-pinned reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        pin: true, // Pin the section while it's in view
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1, // Helps with smooth pinning
      },
    });

    // Initial state for text and image
    gsap.set(textRef.current, { opacity: 0, y: 50 });
    gsap.set(imageRef.current, { opacity: 0, x: 50 });

    // Animation sequence
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.5'); // Start image animation slightly before text finishes

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      tl.kill();
    };
  }, [storyTitle, storyText, imageUrl, imageAlt]); // Re-run if props change

  const sectionStyle = {
    backgroundColor: '#FFF8DC', // Cream background
  };

  const textColumnStyle = {
    color: '#8B4513', // Cinnamon text color
  };

  const goldHighlightStyle = {
    color: '#D4A017', // Gold color for highlights
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen py-16 px-4"
      style={sectionStyle}
    >
      <div
        ref={textRef}
        className="lg:w-1/2 lg:pr-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8"
        style={textColumnStyle}
      >
        <h2 className="text-5xl font-bold mb-6" style={goldHighlightStyle}>{storyTitle}</h2>
        <p className="text-lg leading-relaxed mb-8" style={textColumnStyle}>
          {storyText}
        </p>
        <p className="text-lg leading-relaxed" style={textColumnStyle}>
            Te invitamos a probar la tradición y el amor horneado en cada bocado.
        </p>
      </div>
      <div
        ref={imageRef}
        className="lg:w-1/2 flex justify-center items-center p-8"
      >
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
