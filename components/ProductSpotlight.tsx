'use client';

import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function ProductSpotlight() {
  return (
    <SectionWrapper className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#8B4513]">
          Destacado: El Rollito Clásico
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image with 3D Tilt */}
          <div className="relative h-96 perspective group">
            <Image
              src="https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=600&h=600&fit=crop"
              alt="Rollito Clásico"
              fill
              className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div>
            <h3 className="text-3xl font-bold text-[#8B4513] mb-4">
              El Clásico
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro rollito estrella. Masa de canela suave y cálida con un equilibrio perfecto de dulzura y especias. 
              Aquí es donde todo comenzó.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-[#8B4513] mb-4">
                Ingredientes
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Canela premium de Ceilán</li>
                <li>✓ Mantequilla orgánica</li>
                <li>✓ Azúcar moreno</li>
                <li>✓ Masa fresca de levadura</li>
                <li>✓ Glaseado de queso crema</li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-[#D4A017]">€3.60</span>
              <span className="text-lg line-through text-gray-500">€4.50</span>
              <span className="text-sm bg-[#D4A017] text-white px-3 py-1 rounded-full">
                -20% Launch
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
