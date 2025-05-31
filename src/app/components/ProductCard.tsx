"use client";
import React, { useState } from "react";
import Image from "next/image";
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
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
      <div className="w-24 h-24 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
        {product.image ? (
          <Image src={product.image} alt={product.name} width={96} height={96} className="w-full h-full object-cover rounded" />
        ) : (
          "Image"
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2 text-center">{product.description}</p>
      <div className="font-bold text-lg mb-4">{product.price.toFixed(2)} €</div>
      <button
        className={`bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition ${added ? "scale-105 ring-2 ring-green-400" : ""}`}
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "Ajouté !" : "Ajouter au panier"}
      </button>
      {added && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow animate-bounce">
          +1
        </div>
      )}
    </div>
  );
};

export default ProductCard;
