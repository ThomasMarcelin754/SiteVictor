import React from "react";

const Hero = () => (
  <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
      Découvrez l’Art du Nettoyage
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">
      Des produits efficaces, naturels et élégants pour un intérieur sain et raffiné.
    </p>
    <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition">
      Découvrir nos produits
    </button>
    <div className="mt-12 w-full flex justify-center">
      <div className="w-80 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
        Image/Vidéo ici
      </div>
    </div>
  </section>
);

export default Hero;
