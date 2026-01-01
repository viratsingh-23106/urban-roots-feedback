import { MapPin, Rocket } from "lucide-react";

const ComingSoonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Launching soon in{" "}
            <span className="text-primary">Lucknow</span> &{" "}
            <span className="text-secondary">Tier-1 cities</span>{" "}
            <span className="inline-block">🚀</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Starting with Lucknow, UP</span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
            <p className="text-foreground text-lg mb-4">
              Abhi hum <span className="font-semibold text-primary">build phase</span> me hain.
              <br />
              Isliye humein aapka <span className="font-semibold">honest feedback</span> chahiye.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-lg">👉</span>
                <span>Kya aap is platform se buy karoge?</span>
              </span>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2">
                <span className="text-lg">👉</span>
                <span>Kya improve karna chahiye?</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
