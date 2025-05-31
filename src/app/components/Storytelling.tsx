import React from "react";

const Storytelling = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
        <p className="text-gray-700 mb-4">
          Inspirés par la nature et le design, nous avons créé une gamme de produits de nettoyage alliant efficacité, respect de l’environnement et élégance. Notre mission : sublimer votre quotidien tout en préservant la planète.
        </p>
        <p className="text-gray-600">
          Chaque formule est pensée pour offrir une expérience sensorielle unique, dans le respect de votre intérieur et de votre bien-être.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          Image ambiance ici
        </div>
      </div>
    </div>
  </section>
);

export default Storytelling;
