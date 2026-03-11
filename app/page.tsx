'use client';

import Header from '@/components/Header';
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
      <Header onCartClick={() => setShowCart(!showCart)} />

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
