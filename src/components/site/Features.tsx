import { Sparkles, Heart, Radar, Shirt, Users, Droplets } from "lucide-react";
import mirrorUI from "@/assets/mirror-ui.png";
import emotion from "@/assets/emotion-connection.png";
import multiuser from "@/assets/multiuser-couple.png";
import eventRadar from "@/assets/event-radar.png";
import wardrobeIntel from "@/assets/wardrobe-intelligence.png";
import laundryIntel from "@/assets/laundry-intelligence.png";
import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: Sparkles, title: "Style Intelligence", text: "Learns your wardrobe, your style, your preferences. Suggests outfits filtered by weather, calendar and what's clean.", img: mirrorUI },
  { icon: Heart, title: "Emotional Awareness", text: "Reads your mood before it speaks. Knows when to talk and when to stay quiet.", img: emotion },
  { icon: Radar, title: "Lifetime Event Radar", text: "Spots events months ahead. Gently prepares you without overwhelming you. No calendar entry needed — just mention it.", img: eventRadar },
  { icon: Shirt, title: "Wardrobe Intelligence", text: "Tracks every item. Knows what's clean, what's worn, what needs care. Calculates versatility scores automatically.", img: wardrobeIntel },
  { icon: Users, title: "Multi-user Ready", text: "Recognizes everyone in the household. Completely separate profiles. Suggests coordinated outfits when going out together.", img: multiuser },
  { icon: Droplets, title: "Laundry Intelligence", text: "Monitors your dirty item buildup. Suggests laundry on your free days. Never on a busy day.", img: laundryIntel },
];

const Features = () => {
  useReveal();
  return (
    <section id="features" className="bg-surface py-32">
      <div className="container-wide">
        <h2 className="reveal text-center font-serif text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Everything it does. <em className="italic text-gold">Nothing</em> it shouldn't.
        </h2>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text, img }, i) => (
            <article
              key={title}
              className="reveal group bg-card border border-border hover:border-gold/60 transition-colors duration-500 overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {img && (
                <div className="overflow-hidden h-48">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8 flex-1">
                <Icon className="text-gold" size={26} strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
