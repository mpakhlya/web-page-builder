import { Sun, Smartphone, Moon } from "lucide-react";
import morning from "@/assets/lifestyle-morning.jpg";
import mobile from "@/assets/mobile-companion.jpg";
import evening from "@/assets/evening-winddown.jpg";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    icon: Sun,
    title: "Good morning.",
    text: "Motion detected. Face recognized. Music starts. Your day is already being prepared.",
    img: morning,
  },
  {
    icon: Smartphone,
    title: "Always with you.",
    text: "Your mobile companion keeps Roommate in your pocket. Syncs locally when you're home.",
    img: mobile,
  },
  {
    icon: Moon,
    title: "Day done.",
    text: "Roommate checks in, reviews your day, and quietly prepares tomorrow.",
    img: evening,
  },
];

const HowItWorks = () => {
  useReveal();
  return (
    <section id="how" className="bg-background py-32">
      <div className="container-wide">
        <h2 className="reveal text-center font-serif text-4xl md:text-6xl">
          A day with Roommate.
        </h2>
        <p className="reveal text-center mt-6 text-muted-foreground max-w-xl mx-auto">
          Morning to night, quietly proactive.
        </p>

        <div className="relative mt-24 grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gold/30" />
          {steps.map(({ icon: Icon, title, text, img }, i) => (
            <div key={title} className="reveal text-center" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative z-10 mx-auto w-24 h-24 rounded-full border border-gold/40 flex items-center justify-center bg-background">
                <Icon className="text-gold" size={28} strokeWidth={1.25} />
              </div>
              <h3 className="mt-8 font-serif text-2xl">{title}</h3>
              <p className="mt-4 text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {text}
              </p>
              <div className="mt-10 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
