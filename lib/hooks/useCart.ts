'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: Product, quantity: number) => void;
  removeItemFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartSubtotal: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('candelarolls-cart');
        if (saved) setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error('Cart load error:', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('candelarolls-cart', JSON.stringify(cartItems));
      } catch (e) {
        console.error('Cart save error:', e);
      }
    }
  }, [cartItems]);

  const addItemToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.launchPrice,
          launchPrice: product.launchPrice,
          quantity,
          imageUrl: product.imageUrl,
        },
      ];
    });
  };

  const removeItemFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItemQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItemFromCart(id);
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
      );
    }
  };

  const clearCart = () => setCartItems([]);

  const getCartSubtotal = () =>
    cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const getCartTotal = () => getCartSubtotal();

  return React.createElement(
    CartContext.Provider,
    {
      value: {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
        getCartTotal,
        getCartSubtotal,
      },
    },
    children
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
