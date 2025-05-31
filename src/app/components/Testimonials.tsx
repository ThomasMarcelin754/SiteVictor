import React from "react";

const testimonials = [
  {
    name: "Sophie L.",
    text: "Des produits efficaces et élégants, j’adore le parfum subtil !",
  },
  {
    name: "Marc D.",
    text: "Enfin une gamme qui nettoie vraiment sans agresser la planète.",
  },
  {
    name: "Claire P.",
    text: "Livraison rapide, packaging soigné, je recommande à 100 %.",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Ils nous font confiance</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">
              <span className="text-2xl">👤</span>
            </div>
            <p className="text-gray-700 italic mb-2">“{t.text}”</p>
            <div className="text-gray-500 text-sm">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
