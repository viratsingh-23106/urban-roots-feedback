import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleFeedbackClick = () => {
    // Placeholder - will be replaced with actual Google Form link
    window.open("https://forms.google.com/placeholder", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/5">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
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
            className="group mb-6"
          >
            <span>Give Your Feedback</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mb-8">
            Takes only 2 minutes • 100% anonymous
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-soft">
            <Gift className="w-5 h-5 text-secondary" />
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
