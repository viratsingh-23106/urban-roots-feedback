import { CheckCircle2, Leaf, Package, Droplets, Home } from "lucide-react";

const solutions = [
  { icon: Leaf, text: "Indoor & balcony plants" },
  { icon: Package, text: "Gardening accessories" },
  { icon: Droplets, text: "Fertilizers & plant nutrition" },
  { icon: Home, text: "Beginner-friendly solutions" },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(var(--accent)/0.5)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Hum ek simple aur affordable
              <br />
              <span className="bg-gradient-to-r from-primary to-leaf bg-clip-text text-transparent">
                gardening platform
              </span>{" "}
              banana chahte hain
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ek hi jagah par — everything you need for urban gardening at
              affordable prices, specially designed for urban homes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-leaf/20 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-leaf flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {solution.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fade-in-up animation-delay-400">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/50 border border-primary/10">
              <span className="text-muted-foreground">
                Sab kuch <span className="text-primary font-semibold">affordable price</span> me,
                specially urban homes ke liye.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
