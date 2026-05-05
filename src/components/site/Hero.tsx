import heroMirror from "@/assets/hero-mirror.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container-wide grid md:grid-cols-5 gap-12 items-center pt-32 pb-24">
        <div className="md:col-span-3 animate-fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Introducing Roommate
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground">
            The mirror that <em className="italic text-gold">knows</em> you.
          </h1>
          <p className="mt-8 max-w-xl text-lg font-light text-muted-foreground leading-relaxed">
            A proactive AI companion that prepares your day, learns your style,
            and gets smarter every morning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="px-7 py-3.5 bg-gold text-accent-foreground text-sm tracking-wide hover:opacity-90 transition"
            >
              Join the Waitlist
            </a>
            <a
              href="#how"
              className="px-7 py-3.5 border border-foreground/40 text-foreground text-sm tracking-wide hover:border-foreground transition"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="md:col-span-2 relative animate-fade-in">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <img
            src={heroMirror}
            alt="Roommate smart mirror in dark room"
            width={1024}
            height={1280}
            className="relative w-full h-auto animate-float"
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-fade-bottom)" }} />
        </div>
      </div>

      <a
        href="#problem"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 animate-pulse-soft"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
