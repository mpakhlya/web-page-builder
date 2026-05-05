import wardrobe from "@/assets/wardrobe-flatlay.png";
import { useReveal } from "@/hooks/useReveal";

const oldWay = [
  "Apps that wait for you to ask",
  "Manual data entry",
  "No memory, no learning",
  "Reactive, never proactive",
];
const newWay = [
  "Prepares your day before you ask",
  "Learns from observation",
  "Gets smarter every single day",
  "Proactive, always ahead",
];

const Problem = () => {
  useReveal();
  return (
    <section id="problem" className="relative bg-surface py-32 overflow-hidden">
      <img
        src={wardrobe}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-surface/80" />

      <div className="relative container-wide">
        <blockquote className="reveal max-w-4xl mx-auto text-center">
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-foreground">
            "The modern wardrobe is at maximum capacity. Yet outfit confidence
            is at an absolute minimum."
          </p>
        </blockquote>

        <div className="reveal mt-24 grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/40" />
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              The old way
            </p>
            <ul className="space-y-4">
              {oldWay.map((t) => (
                <li key={t} className="font-serif text-xl text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              The Roommate way
            </p>
            <ul className="space-y-4">
              {newWay.map((t) => (
                <li key={t} className="font-serif text-xl text-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
