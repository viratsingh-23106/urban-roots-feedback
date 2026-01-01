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
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
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
              className="flex items-start gap-3 p-4 rounded-xl bg-background shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <XCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-medium text-sm">
                  {point.text}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
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
