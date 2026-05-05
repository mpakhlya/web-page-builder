import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "Own It",
    desc: "One-time purchase",
    points: ["Full hardware", "All features included forever", "Local storage only"],
    featured: true,
    cta: "Reserve",
  },
  {
    name: "Subscribe",
    desc: "Monthly fee",
    points: ["Hardware included", "All features", "Optional encrypted cloud backup"],
    cta: "Choose plan",
  },
  {
    name: "Rent to Own",
    desc: "Monthly payments",
    points: ["Own it fully after 24 months", "All features included", "No commitment"],
    cta: "Learn more",
  },
];

const Pricing = () => {
  useReveal();
  return (
    <section id="pricing" className="bg-background py-32">
      <div className="container-wide">
        <h2 className="reveal text-center font-serif text-4xl md:text-6xl">
          Simple, honest pricing.
        </h2>
        <p className="reveal text-center mt-6 text-muted-foreground max-w-xl mx-auto">
          Every feature. Always free. Pay only for the hardware.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal p-10 bg-card flex flex-col ${
                p.featured ? "border-2 border-gold" : "border border-border"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.featured && (
                <span className="text-xs tracking-[0.25em] uppercase text-gold mb-4">
                  Most chosen
                </span>
              )}
              <h3 className="font-serif text-3xl">{p.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
              <ul className="mt-8 space-y-3 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="text-foreground/80 font-light">
                    — {pt}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-10 inline-flex justify-center items-center px-6 py-3 text-sm tracking-wide transition ${
                  p.featured
                    ? "bg-gold text-accent-foreground hover:opacity-90"
                    : "border border-foreground/40 hover:border-foreground"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-16 text-center text-sm text-muted-foreground">
          No ads. No data selling. No paid promotions. Ever.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
