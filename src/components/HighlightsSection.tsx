import { Sparkles, Palette, BookOpen, IndianRupee } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Easy NPK Nutrient Tablets",
    description: "Just soil me daalo — no measuring, no mess.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Palette,
    title: "Decorative Pot Covers",
    description: "Apne old ya damaged pots ko naya look do.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Beginner-friendly Products",
    description: "No jargon. No confusion. Simple gardening.",
    color: "bg-leaf/10 text-leaf",
  },
  {
    icon: IndianRupee,
    title: "Budget-focused Pricing",
    description: "Plants & products — mostly under ₹500.",
    color: "bg-terracotta/10 text-terracotta",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What makes us <span className="text-primary">different?</span>
          </h2>
          <p className="text-muted-foreground">
            Built specifically for urban Indian gardeners
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-7 h-7" />
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
