import { Check } from "lucide-react";
import privacyImg from "@/assets/privacy-camera.png";
import { useReveal } from "@/hooks/useReveal";

const promises = [
  "Physical camera shutter — closes when not in use",
  "Hardware microphone mute — you control when it listens",
  "Encrypted local containers — each data type isolated",
  'Voice delete — "Roommate, forget that" removes it permanently',
];

const Privacy = () => {
  useReveal();
  return (
    <section id="privacy" className="bg-background py-32">
      <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Your data lives with you. <em className="italic text-gold">Not with us.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            Every piece of personal data is encrypted and stored locally on
            your mirror. Roommate never sends your wardrobe, your conversations,
            or your emotional history to any server. Ever.
          </p>
          <ul className="mt-10 space-y-5">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-gold/60 flex items-center justify-center">
                  <Check size={14} className="text-gold" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <div
            className="absolute -inset-10 rounded-full"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <img
            src={privacyImg}
            alt="Physical camera shutter detail"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
