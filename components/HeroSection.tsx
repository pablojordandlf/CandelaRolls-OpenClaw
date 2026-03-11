'use client';

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  const subheadingRef = React.useRef<HTMLParagraphElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    // Headline animation
    if (headlineRef.current) {
      gsap.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }

    // Subheading animation
    if (subheadingRef.current) {
      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
      });
    }

    // Button animation
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'back.out',
      });
    }
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=1920&h=1080&fit=crop"
          alt="Rollitos de Canela Artesanales"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
        >
          Hecho a Mano.
          <br />
          Cálido.
          <br />
          <span className="text-[#D4A017]">Irresistible.</span>
        </h1>

        <p
          ref={subheadingRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 drop-shadow-md max-w-2xl mx-auto"
        >
          Descubre nuestros rollitos de canela artesanales, horneados con pasión y los mejores ingredientes.
        </p>

        <button
          ref={buttonRef}
          onClick={scrollToProducts}
          className="px-8 sm:px-12 py-3 sm:py-4 bg-[#8B4513] hover:bg-[#D4A017] text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl transform transition duration-300 hover:scale-110 hover:shadow-3xl"
        >
          Pedir Ahora
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
