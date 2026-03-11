import { NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const inMemoryOrders = new Map();

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature || !webhookSecret) {
    console.warn('Missing webhook secret or signature');
    return Response.json({ received: true });
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    switch (event.type) {
      case 'checkout.session.completed':
        console.log('✓ Payment successful:', event.data.object.id);
        break;

      case 'checkout.session.expired':
        console.log('⚠ Checkout expired:', event.data.object.id);
        break;

      default:
        console.log('Event:', event.type);
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return Response.json({ error: 'Webhook failed' }, { status: 400 });
  }
}
