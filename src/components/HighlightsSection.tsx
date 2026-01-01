import { Sparkles, Palette, BookOpen, IndianRupee } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Easy NPK Nutrient Tablets",
    description: "Just soil me daalo — no measuring, no mess.",
    gradient: "from-primary/20 to-leaf/20",
    iconColor: "text-primary",
  },
  {
    icon: Palette,
    title: "Decorative Pot Covers",
    description: "Apne old ya damaged pots ko naya look do.",
    gradient: "from-secondary/20 to-terracotta-light/20",
    iconColor: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Beginner-friendly Products",
    description: "No jargon. No confusion. Simple gardening.",
    gradient: "from-leaf/20 to-primary/20",
    iconColor: "text-leaf",
  },
  {
    icon: IndianRupee,
    title: "Budget-focused Pricing",
    description: "Plants & products — mostly under ₹500.",
    gradient: "from-terracotta/20 to-secondary/20",
    iconColor: "text-terracotta",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/60 to-accent/40" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background border border-primary/20 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What makes us <span className="text-primary">different?</span>
          </h2>
          <p className="text-muted-foreground">
            Built specifically for urban Indian gardeners
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
