import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const HeroSection = () => {
  const handleFeedbackClick = () => {
    // Placeholder - will be replaced with actual Google Form link
    window.open("https://forms.google.com/placeholder", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful urban balcony garden with potted plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
            <Sprout className="w-4 h-4 text-primary" />
            <span>Starting with Lucknow</span>
            <span className="text-muted-foreground">•</span>
            <span>Expanding to Tier-1 cities</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            Urban Gardening Made Simple{" "}
            <span className="inline-block animate-float">🌱</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Affordable plants, fertilizers & gardening essentials for balconies
            and rooftops — delivered to your home.
          </p>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="xl"
            onClick={handleFeedbackClick}
            className="group"
          >
            <span>Help Us Build This</span>
            <span className="text-xl group-hover:scale-110 transition-transform">🌱</span>
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Takes only 2 minutes • Your feedback shapes our platform
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
