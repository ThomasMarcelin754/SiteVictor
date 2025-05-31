import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import FeaturedProducts from "./components/FeaturedProducts";
import Storytelling from "./components/Storytelling";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-12">
        <Hero />
        <Values />
        <FeaturedProducts />
        <Storytelling />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
