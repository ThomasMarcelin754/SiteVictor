import React from "react";

const Newsletter = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Inscrivez-vous à la newsletter</h2>
      <p className="text-gray-600 mb-6">
        Recevez nos conseils, nouveautés et offres exclusives directement dans votre boîte mail.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Votre email"
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black flex-1"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          S’inscrire
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;
