# CandelaRolls Stripe Setup

This guide will help you set up Stripe for CandelaRolls.

## 1. Obtain Stripe API Keys

1.  Go to the [Stripe Dashboard](https://dashboard.stripe.com/).
2.  Navigate to **Developers** > **API keys**.
3.  You will find your **Publishable key** (starts with `pk_test_...`) and **Secret key** (starts with `sk_test_...`).
4.  Copy these keys.

## 2. Set Up Webhook

1.  In the Stripe Dashboard, navigate to **Developers** > **Webhooks**.
2.  Click **Add an endpoint**.
3.  **Endpoint URL**: For local development, use a tool like ngrok to expose your local server. e.g., `https://your-ngrok-subdomain.ngrok.io/api/webhooks/stripe`.
    *   To set this up, run `ngrok http 3000` (if your local Next.js app runs on port 3000).
    *   Make sure to update the `NEXT_PUBLIC_BASE_URL` in your `.env.local` file to match your ngrok URL (e.g., `NEXT_PUBLIC_BASE_URL=https://your-ngrok-subdomain.ngrok.io`).
4.  **Events to send**: Select `checkout.session.completed`, `checkout.session.expired`, and `payment_intent.payment_failed`.
5.  Click **Add endpoint**.
6.  After creation, click on the new endpoint and find the **Signing secret** (starts with `whsec_...`). Copy this secret.

## 3. Configure Environment Variables

Create a file named `.env.local` in the root of your project and add the following variables:

\`\`\`dotenv
# .env.local

# Your Next.js app base URL (e.g., from ngrok for local dev)
NEXT_PUBLIC_BASE_URL=https://your-ngrok-subdomain.ngrok.io

# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY # Not used directly in backend, but good to have
STRIPE_WEBHOOK_SECRET=whsec_YOUR_STRIPE_WEBHOOK_SIGNING_SECRET
\`\`\`

**Important:** Replace the placeholder values (`sk_test_...`, `whsec_...`, and the URL) with your actual keys and ngrok URL.
Do NOT commit `.env.local` to version control. Use `.env.local.example` for documentation.

## 4. Verify

After setting up, test your checkout flow and ensure webhook events are received in your local console.
You can inspect received events in your Stripe Dashboard under **Developers** > **Events**.
\`\`\`