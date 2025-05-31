import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Signature ou secret manquant" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: "Signature Stripe invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // Ici tu peux traiter la commande (sauvegarder, notifier, etc.)
    // const session = event.data.object as Stripe.Checkout.Session;
  }

  return NextResponse.json({ received: true });
}
