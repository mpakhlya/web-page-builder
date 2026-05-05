import { FormEvent, useState } from "react";
import { toast } from "sonner";
import bg from "@/assets/emotion-connection.png";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list. We'll be in touch.");
    setEmail("");
  };

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative container-wide max-w-3xl text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Your mornings will <em className="italic text-gold">never</em> be the same.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Join the waitlist. Be first to meet your Roommate.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-foreground/30 focus:border-gold outline-none px-5 py-3.5 text-foreground placeholder:text-muted-foreground transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-gold text-accent-foreground text-sm tracking-wide hover:opacity-90 transition"
          >
            Join the Waitlist
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Just one email when we launch.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;
