import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import Demo from "@/sections/home/Demo";
import Faqs from "@/sections/home/Faqs";
import Features from "@/sections/home/Features";
import Hero from "@/sections/home/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Faqs />
      <Demo />
      <Footer />
    </main>
  );
}
