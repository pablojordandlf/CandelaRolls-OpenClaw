import { PRODUCTS } from '@/lib/stripe';

export async function GET() {
  return Response.json(PRODUCTS);
}
