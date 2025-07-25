'use client';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Home() {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();
    const stripe = await stripePromise;
    if (stripe && data.id) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center font-sans px-4">
      <h1 className="text-4xl font-bold mb-4">Omniplex Pro Plan</h1>
      <p className="mb-6 text-gray-300 text-lg">Unlock premium features for just $10</p>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
      >
        Checkout with Stripe
      </button>
    </div>
  );
}
