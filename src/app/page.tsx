import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Promotion from "@/components/Promotion";
import Specs from "@/components/Specs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Promotion />
      <Specs />
      <Contact />
    </main>
  );
}