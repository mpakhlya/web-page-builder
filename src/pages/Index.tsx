import Navigation from "@/components/site/Navigation";
import Hero from "@/components/site/Hero";
import Problem from "@/components/site/Problem";
import HowItWorks from "@/components/site/HowItWorks";
import Features from "@/components/site/Features";
import Privacy from "@/components/site/Privacy";
import Hardware from "@/components/site/Hardware";
import Pricing from "@/components/site/Pricing";
import Waitlist from "@/components/site/Waitlist";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Roommate";
    const desc = "A smart mirror and proactive AI companion that prepares your day, learns your style, and protects your privacy.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <h1 className="sr-only">Roommate — Proactive AI smart mirror</h1>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Privacy />
      <Hardware />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default Index;
