import { Button } from "@/components/ui/button";
import { Sprout, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd6sEyUmzm0oyqoxGDbNjrD02TpCQ-_IGSNhxFpKCkorJYDIA/viewform?usp=publish-editor";

const HeroSection = () => {
  const handleFeedbackClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful urban balcony garden with potted plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 text-sm font-medium mb-6 shadow-soft">
            <Sprout className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">Starting with Lucknow</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span className="text-muted-foreground">Expanding to Tier-1 cities</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="text-foreground">Urban Gardening</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-leaf to-primary bg-clip-text text-transparent">
              Made Simple
            </span>{" "}
            <span className="inline-block animate-float">🌱</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Affordable plants, fertilizers & gardening essentials for balconies
            and rooftops — <span className="text-foreground font-medium">delivered to your home.</span>
          </p>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="xl"
            onClick={handleFeedbackClick}
            className="group animate-pulse hover:animate-none"
          >
            <span>Help Us Build This</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            Takes only 2 minutes • Your feedback shapes our platform
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
