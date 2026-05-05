import brand from "@/assets/brand-identity.png";
import { useReveal } from "@/hooks/useReveal";

const specs = [
  "Dresser-height form factor",
  "Two-way mirror glass with integrated display zone",
  "Built-in premium speakers",
  "Mechanical camera shutter (visible, physical privacy)",
  "Hardware microphone mute button",
  "Single power cable — nothing else",
  "Plug and play setup — guided entirely by voice",
  "WiFi connected via QR code scan",
];

const Hardware = () => {
  useReveal();
  return (
    <section id="hardware" className="bg-surface py-32">
      <div className="container-wide">
        <h2 className="reveal text-center font-serif text-4xl md:text-6xl">
          One beautiful object.
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <img
              src={brand}
              alt="Roommate hardware"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-auto"
            />
          </div>
          <ul className="reveal space-y-5">
            {specs.map((s) => (
              <li key={s} className="border-b border-border pb-4 text-foreground/90 font-light">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal mt-20 text-center font-serif italic text-2xl md:text-3xl text-gold">
          Plug it in. Say hello. It does the rest.
        </p>
      </div>
    </section>
  );
};

export default Hardware;
