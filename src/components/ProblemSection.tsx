import { XCircle } from "lucide-react";

const painPoints = [
  {
    text: "Balcony ya rooftop ke liye plants easily nahi milte",
    english: "Hard to find plants for balcony/rooftop",
  },
  {
    text: "Local nursery me variety limited hoti hai",
    english: "Limited variety at local nurseries",
  },
  {
    text: "Online plants aur accessories bahut mehange hote hain",
    english: "Online plants are too expensive",
  },
  {
    text: "Fertilizer aur plant care confusing lagti hai",
    english: "Plant care feels confusing",
  },
  {
    text: "Old pots kharab aur boring dikhte hain",
    english: "Old pots look damaged and boring",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Gardening shuru karna ya maintain karna
            <br />
            <span className="text-secondary">itna mushkil kyun lagta hai?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We heard these problems from gardeners across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 p-5 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-card hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <XCircle className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  {point.text}
                </p>
                <p className="text-muted-foreground text-xs mt-1.5">
                  {point.english}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
