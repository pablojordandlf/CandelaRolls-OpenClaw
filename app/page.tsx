'use client';

import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProductGrid from '@/components/ProductGrid';
import ProductSpotlight from '@/components/ProductSpotlight';
import Testimonials from '@/components/Testimonials';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDF6EC]">
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-4 right-4 z-40 bg-cinnamon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
      >
        🛒 Cart
      </button>

      {showCart && <CartSidebar isOpen={showCart} onClose={() => setShowCart(false)} />}

      <HeroSection />
      <StorySection />
      <ProductGrid />
      <ProductSpotlight />
      <Testimonials />
      <Footer />
    </main>
  );
}
