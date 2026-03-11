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
    imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=500&h=500&fit=crop',
  },
  {
    id: 'lemon',
    name: 'Limón',
    description: 'Roll con toque cítrico de limón',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
  },
  {
    id: 'cheese',
    name: 'Queso',
    description: 'Roll con queso cremoso',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd87e8f?w=500&h=500&fit=crop',
  },
  {
    id: 'cheese-garlic',
    name: 'Queso y Ajo',
    description: 'Roll con queso y ajo asado',
    price: 650,
    launchPrice: 520,
    currency: 'eur',
    imageUrl: 'https://images.unsplash.com/photo-1608039755401-742245ab8520?w=500&h=500&fit=crop',
  },
];

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
