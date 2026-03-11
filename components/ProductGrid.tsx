'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/lib/stripe';
import type { Product } from '@/types';

const ProductGrid: React.FC = () => {
  return (
    <section id="products-section" className="py-16 px-4 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-4">
          Nuestros Rollitos
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Descubre nuestras deliciosas variedades artesanales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
