import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="h-px bg-gold/60" />
      <div className="container-wide py-12 grid md:grid-cols-3 gap-8 items-center">
        <span className="font-serif text-2xl">Roommate</span>
        <ul className="flex justify-center gap-8 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
          <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
        </ul>
        <div className="flex md:justify-end gap-6 text-foreground/80">
          <a href="#" aria-label="Instagram" className="hover:text-gold transition"><Instagram size={18} strokeWidth={1.25} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-gold transition"><Twitter size={18} strokeWidth={1.25} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold transition"><Linkedin size={18} strokeWidth={1.25} /></a>
        </div>
      </div>
      <div className="container-wide pb-8 text-xs text-muted-foreground">
        © 2026 Roommate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
