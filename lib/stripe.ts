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
    imageUrl: 'https://images.pexels.com/photos/5632631/pexels-photo-5632631.jpeg?w=500&h=500&fit=crop',
  },
  {
    id: 'lemon',
    name: 'Limón',
    description: 'Roll con toque cítrico de limón',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=500&h=500&fit=crop',
  },
  {
    id: 'cheese',
    name: 'Queso',
    description: 'Roll con queso cremoso',
    price: 550,
    launchPrice: 440,
    currency: 'eur',
    imageUrl: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?w=500&h=500&fit=crop',
  },
  {
    id: 'cheese-garlic',
    name: 'Queso y Ajo',
    description: 'Roll con queso y ajo asado',
    price: 650,
    launchPrice: 520,
    currency: 'eur',
    imageUrl: 'https://images.pexels.com/photos/2979617/pexels-photo-2979617.jpeg?w=500&h=500&fit=crop',
  },
];

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
