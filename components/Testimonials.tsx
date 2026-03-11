'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "¡Absolutamente divino! El rollito clásico estaba cálido, esponjoso y perfectamente especiado. ¡El mejor que he probado!",
    name: "María García",
    rating: 5,
  },
  {
    quote: "El rollito de Limón fue una sorpresa deliciosa. Tan fresco y cítrico, perfecto con mi café de la mañana.",
    name: "Carlos López",
    rating: 5,
  },
  {
    quote: "CandelaRolls hizo nuestro brunch familiar inolvidable. A todos les encantó la variedad, ¡especialmente el rollito de Queso y Ajo!",
    name: "Elena Martínez",
    rating: 5,
  },
  {
    quote: "Pedí los rollitos para una fiesta y fueron un éxito rotundo. ¡Tan deliciosos y satisfactorios!",
    name: "Roberto Sánchez",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-[#D4A017] text-xl' : 'text-gray-300 text-xl'}>
          ★
        </span>
      );
    }
    return <div className="flex gap-1 justify-center mb-3">{stars}</div>;
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8DC] to-[#FDF6EC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-16">
          Lo Que Dicen Nuestros Clientes
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-h-80 flex flex-col justify-center">
          <div className="text-center">
            {renderStars(current.rating)}
            <blockquote className="text-xl md:text-2xl italic font-medium text-[#8B4513] leading-relaxed mb-8">
              &quot;{current.quote}&quot;
            </blockquote>
            <p className="text-lg font-bold text-[#8B4513]">— {current.name}</p>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#8B4513] w-8' : 'bg-[#D4A017]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
