import { MapPin, Rocket, MessageCircle } from "lucide-react";

const ComingSoonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Launching soon in{" "}
            <span className="text-primary">Lucknow</span> &{" "}
            <span className="text-secondary">Tier-1 cities</span>{" "}
            <span className="inline-block">🚀</span>
          </h2>

          <div className="inline-flex items-center gap-2 text-muted-foreground mb-8 px-4 py-2 rounded-full bg-card border border-border/50">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Starting with Lucknow, UP</span>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>

            <p className="text-foreground text-lg mb-6">
              Abhi hum <span className="font-semibold text-primary">build phase</span> me hain.
              <br />
              Isliye humein aapka <span className="font-semibold">honest feedback</span> chahiye.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background border border-border/50">
                <span className="text-xl">👉</span>
                <span className="text-sm text-muted-foreground">Kya aap is platform se buy karoge?</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background border border-border/50">
                <span className="text-xl">👉</span>
                <span className="text-sm text-muted-foreground">Kya improve karna chahiye?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
