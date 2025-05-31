import React from "react";

const Header = () => (
  <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
    <div className="font-bold text-xl tracking-widest">LOGO</div>
    <nav className="space-x-6 hidden md:block">
      <a href="#" className="text-gray-700 hover:text-black">Accueil</a>
      <a href="#" className="text-gray-700 hover:text-black">Produits</a>
      <a href="#" className="text-gray-700 hover:text-black">À propos</a>
      <a href="#" className="text-gray-700 hover:text-black">Contact</a>
    </nav>
    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Connexion</button>
  </header>
);

export default Header;
