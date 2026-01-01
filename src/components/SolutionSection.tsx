import { CheckCircle2, Leaf, Package, Droplets, Home } from "lucide-react";

const solutions = [
  { icon: Leaf, text: "Indoor & balcony plants" },
  { icon: Package, text: "Gardening accessories" },
  { icon: Droplets, text: "Fertilizers & plant nutrition" },
  { icon: Home, text: "Beginner-friendly solutions" },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Hum ek simple aur affordable
              <br />
              <span className="text-primary">gardening platform</span> banana chahte hain
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ek hi jagah par — everything you need for urban gardening at
              affordable prices, specially designed for urban homes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-leaf flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {solution.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 animate-fade-in-up animation-delay-400">
            Sab kuch <span className="text-primary font-semibold">affordable price</span> me,
            specially urban homes ke liye.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
