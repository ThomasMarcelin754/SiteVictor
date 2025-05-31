import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: "Panier vide" }, { status: 400 });
    }

    // Utilisation du type CartItem
    type CartItem = {
      id: string;
      name: string;
      price: number;
      image?: string;
      quantity: number;
    };
    const line_items = (cart as CartItem[]).map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: process.env.NEXT_PUBLIC_BASE_URL + "/checkout?success=1",
      cancel_url: process.env.NEXT_PUBLIC_BASE_URL + "/checkout?canceled=1",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Erreur inconnue" }, { status: 500 });
  }
}
