import ProductList from "../components/ProductList";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-block mb-6 text-black underline hover:text-gray-800"
        >
          ← Retour à la page d’accueil
        </Link>
      </div>
      <ProductList />
    </div>
  );
}
