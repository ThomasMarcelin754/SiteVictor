import React from "react";

const Footer = () => (
  <footer className="bg-white border-t py-8 mt-12">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Nettoyage Élégant. Tous droits réservés.
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-500 hover:text-black">CGV</a>
        <a href="#" className="text-gray-500 hover:text-black">Mentions légales</a>
        <a href="#" className="text-gray-500 hover:text-black">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-black text-xl">🌐</a>
        <a href="#" className="text-gray-400 hover:text-black text-xl">📸</a>
        <a href="#" className="text-gray-400 hover:text-black text-xl">🐦</a>
      </div>
    </div>
  </footer>
);

export default Footer;
