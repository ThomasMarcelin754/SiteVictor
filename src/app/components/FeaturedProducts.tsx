import React from "react";

const products = [
  {
    name: "Spray Multi-surfaces",
    description: "Nettoie et parfume toutes vos surfaces en un seul geste.",
  },
  {
    name: "Savon Sols Naturel",
    description: "Pour des sols éclatants, sans résidus chimiques.",
  },
  {
    name: "Lingettes Écologiques",
    description: "Pratiques, compostables et ultra efficaces.",
  },
];

const FeaturedProducts = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Nos produits phares</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((prod) => (
          <div key={prod.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
              Image
            </div>
            <h3 className="text-xl font-semibold mb-2">{prod.name}</h3>
            <p className="text-gray-600 mb-4 text-center">{prod.description}</p>
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
              Voir le produit
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
