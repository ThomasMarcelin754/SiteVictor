"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePay = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Erreur inconnue");
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Paiement</h1>
      <p className="text-gray-600 mb-6">Clique sur le bouton pour payer avec Stripe.</p>
      <button
        className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition text-lg"
        onClick={handlePay}
        disabled={loading || cart.length === 0}
      >
        {loading ? "Redirection..." : "Payer avec Stripe"}
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
}
