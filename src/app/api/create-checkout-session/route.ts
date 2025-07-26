export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-06-30.basil'
    ,
});

export async function POST(req: NextRequest) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Pro Plan',
                        },
                        unit_amount: 1000, // $10
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        return NextResponse.json({ id: session.id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
    }
}
