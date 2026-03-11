'use client';

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useCart } from '@/lib/hooks/useCart';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { addItemToCart } = useCart();
  const [added, setAdded] = React.useState(false);

  React.useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const hoverIn = () => {
      gsap.to(cardElement, {
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(139, 69, 19, 0.3)',
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    const hoverOut = () => {
      gsap.to(cardElement, {
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    cardElement.addEventListener('mouseenter', hoverIn);
    cardElement.addEventListener('mouseleave', hoverOut);

    return () => {
      cardElement.removeEventListener('mouseenter', hoverIn);
      cardElement.removeEventListener('mouseleave', hoverOut);
    };
  }, []);

  const handleAddToCart = () => {
    addItemToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-md p-6 transform transition-transform duration-300 flex flex-col h-full"
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={product.imageUrl || 'https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=500&h=500&fit=crop'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-bold text-[#8B4513] mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm">{product.description}</p>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold text-[#D4A017]">€{(product.launchPrice / 100).toFixed(2)}</span>
          <span className="text-sm line-through text-gray-400 ml-2">€{(product.price / 100).toFixed(2)}</span>
        </div>
        <span className="text-xs bg-[#D4A017] text-white px-2 py-1 rounded">-20%</span>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-[#8B4513] text-white hover:bg-opacity-90'
        }`}
      >
        {added ? '✓ Agregado' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default ProductCard;
