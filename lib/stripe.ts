import Stripe from 'stripe';
import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'classic',
    name: 'Clásico',
    description: 'El roll clásico de Pablo',
    price: 450,
    launchPrice: 360,
    currency: 'eur',
    imageUrl: '/images/products/clasico.jpg',
  },
  {
    id: 'lemon',
    name: 'Limón',
    description: 'Roll con toque cítrico de limón',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: '/images/products/limon.jpg',
  },
  {
    id: 'cheese',
    name: 'Queso',
    description: 'Roll con queso cremoso',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: '/images/products/queso.jpg',
  },
  {
    id: 'cheese-garlic',
    name: 'Queso y Ajo',
    description: 'Roll con queso y ajo asado',
    price: 650,
    launchPrice: 520,
    currency: 'eur',
    imageUrl: '/images/products/queso-ajo.jpg',
  },
];

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
