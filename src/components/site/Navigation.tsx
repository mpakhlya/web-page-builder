import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#pricing", label: "Pricing" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20">
        <a href="#" className="font-serif text-2xl text-foreground tracking-tight">
          Roommate
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm border border-gold text-foreground hover:bg-gold hover:text-accent-foreground transition-colors"
        >
          Join Waitlist
        </a>

        <button
          aria-label="Open menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 container-wide">
          <span className="font-serif text-2xl">Roommate</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="container-wide flex flex-col gap-6 pt-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-6 py-3 border border-gold text-foreground"
            >
              Join Waitlist
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
