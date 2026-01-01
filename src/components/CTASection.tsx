import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, Sparkles } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd6sEyUmzm0oyqoxGDbNjrD02TpCQ-_IGSNhxFpKCkorJYDIA/viewform?usp=publish-editor";

const CTASection = () => {
  const handleFeedbackClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-secondary/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-leaf/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Help us build something useful
            <br />
            for <span className="text-primary">real gardeners</span>{" "}
            <span className="inline-block animate-float">🌱</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Your honest feedback will help us create a platform that truly
            serves the needs of urban gardeners in India.
          </p>

          <Button
            variant="cta"
            size="xl"
            onClick={handleFeedbackClick}
            className="group mb-6 animate-pulse hover:animate-none"
          >
            <span>Give Your Feedback</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-leaf" />
            Takes only 2 minutes
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            100% anonymous
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-card">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Gift className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-sm text-foreground">
              Early users ko launch ke time{" "}
              <span className="font-semibold text-secondary">special benefits</span>{" "}
              milenge 🎁
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
