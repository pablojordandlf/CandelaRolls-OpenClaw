import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger); // This will be done in a central place or effect hook

interface HeroSectionProps {
  // Define props if any, e.g., imageUrl, headline, buttonText
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  // Placeholder for GSAP animations
  React.useEffect(() => {
    // GSAP animations for parallax, split text, and button scroll will go here
    // For now, we'll just have the static content
    // Example:
    // const headline = document.querySelector('.hero-headline');
    // if (headline) {
    //   const split = new SplitText(headline, { type: "chars" });
    //   gsap.from(split.chars, { y: 100, opacity: 0, stagger: 0.1, duration: 1 });
    // }

    // ScrollTrigger for parallax effect
    // ScrollTrigger for button scroll animation
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1588195538326-c5b1e72fc460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" // Placeholder: Unsplash image of cinnamon rolls
          alt="Cinnamon Rolls Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority // Prioritize loading this image
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg">
          Handcrafted. Warm. Irresistible.
        </h1>
        <button 
          className="order-now-button px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold text-lg rounded-full shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => {
            // Smooth scroll to products section
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
