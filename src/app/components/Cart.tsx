"use client";
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Votre panier</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">Votre panier est vide.</div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                    ) : (
                      "Image"
                    )}
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-500">{item.price.toFixed(2)} €</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >-</button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                  <button
                    className="ml-4 text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <div className="font-bold text-xl">Total : {total.toFixed(2)} €</div>
              <button
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                onClick={clearCart}
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
