import { Sprout, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border/50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
            <Sprout className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-foreground">
              Urban Garden
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> in India
          </p>

          <p className="text-xs text-muted-foreground">
            © 2026 Urban Garden. Building something special for Indian gardeners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
