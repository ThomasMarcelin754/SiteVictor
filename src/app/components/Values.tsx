import React from "react";

const values = [
  {
    title: "Efficacité",
    description: "Des formules puissantes pour un nettoyage impeccable.",
    icon: "🧼",
  },
  {
    title: "Naturel",
    description: "Des ingrédients respectueux de votre intérieur et de la planète.",
    icon: "🌱",
  },
  {
    title: "Élégance",
    description: "Des produits au design raffiné pour sublimer votre quotidien.",
    icon: "✨",
  },
];

const Values = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {values.map((val) => (
          <div key={val.title} className="flex flex-col items-center">
            <div className="text-5xl mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
            <p className="text-gray-600">{val.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
