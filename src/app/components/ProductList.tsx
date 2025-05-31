"use client";
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Spray Multi-surfaces",
    price: 8.99,
    description: "Nettoie et parfume toutes vos surfaces en un seul geste.",
    image: "",
  },
  {
    id: "2",
    name: "Savon Sols Naturel",
    price: 12.5,
    description: "Pour des sols éclatants, sans résidus chimiques.",
    image: "",
  },
  {
    id: "3",
    name: "Lingettes Écologiques",
    price: 6.5,
    description: "Pratiques, compostables et ultra efficaces.",
    image: "",
  },
  {
    id: "4",
    name: "Nettoyant Vitres",
    price: 7.2,
    description: "Des vitres sans traces, sans effort.",
    image: "",
  },
];

const ProductList = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Boutique</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductList;
