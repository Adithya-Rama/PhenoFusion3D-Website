import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pipeline from "@/components/Pipeline";
import Visualisation from "@/components/Visualisation";
import TechStack from "@/components/TechStack";
import Organisation from "@/components/Organisation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pipeline />
      <Visualisation />
      <TechStack />
      <Organisation />
      <Contact />
    </main>
  );
}
