'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#FDF6EC] border-b border-[#D4A017]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-[#8B4513]">🥐 CandelaRolls</h1>
        </Link>

        <button
          onClick={onCartClick}
          className="bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
        >
          🛒 Carrito
        </button>
      </div>
    </header>
  );
}
