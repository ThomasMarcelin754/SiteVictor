"use client";
import React from "react";
import { useCart } from "../context/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
        ) : (
          "Image"
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2 text-center">{product.description}</p>
      <div className="font-bold text-lg mb-4">{product.price.toFixed(2)} €</div>
      <button
        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
        onClick={() => addToCart(product)}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
