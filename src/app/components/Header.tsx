"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
      <div className="font-bold text-xl tracking-widest">
        <Link href="/">LOGO</Link>
      </div>
      <nav className="space-x-6 hidden md:block">
        <Link href="/" className="text-gray-700 hover:text-black">Accueil</Link>
        <Link href="/shop" className="text-gray-700 hover:text-black">Boutique</Link>
        <Link href="#" className="text-gray-700 hover:text-black">À propos</Link>
        <Link href="#" className="text-gray-700 hover:text-black">Contact</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative flex items-center">
          <span className="material-icons text-2xl">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Connexion</button>
      </div>
    </header>
  );
};

export default Header;
