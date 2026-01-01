import { Sprout, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-foreground">
              Urban Garden
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> in India
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
