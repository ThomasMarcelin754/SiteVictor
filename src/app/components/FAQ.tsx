import React from "react";

const faqs = [
  {
    question: "Quels sont les délais de livraison ?",
    answer: "La livraison est assurée sous 2 à 4 jours ouvrés partout en France.",
  },
  {
    question: "Vos produits sont-ils écologiques ?",
    answer: "Oui, nos formules sont conçues à partir d’ingrédients naturels et biodégradables.",
  },
  {
    question: "Puis-je retourner un produit ?",
    answer: "Vous disposez de 30 jours pour changer d’avis et retourner votre commande.",
  },
];

const FAQ = () => (
  <section className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
