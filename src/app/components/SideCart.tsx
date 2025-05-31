"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const SideCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <button
        className="fixed top-6 right-6 z-40 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-800 transition"
        onClick={() => setOpen(true)}
        aria-label="Voir le panier"
      >
        <span className="material-icons text-2xl">shopping_cart</span>
        {cart.length > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-xs rounded-full px-2 py-0.5">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Votre panier</h3>
          <button onClick={() => setOpen(false)} aria-label="Fermer">
            <span className="material-icons text-2xl">close</span>
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">Votre panier est vide.</div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.price.toFixed(2)} €</div>
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
                      className="ml-2 text-red-500 hover:underline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <span className="material-icons text-base">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">{total.toFixed(2)} €</span>
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-2"
            onClick={clearCart}
          >
            Vider le panier
          </button>
          <Link
            href="/checkout"
            className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center mb-2"
            onClick={() => setOpen(false)}
          >
            Payer
          </Link>
          <Link
            href="/cart"
            className="block text-center text-black underline hover:text-gray-800"
            onClick={() => setOpen(false)}
          >
            Voir le panier détaillé
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default SideCart;
