import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const highlights = [
  { value: "2+", label: "Projects Completed" },
  { value: "75K+", label: "Records Processed" },
  { value: "5+", label: "ML Techniques" },
];

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — heading + stats */}
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">About Me</p>
            <h2 className="heading-display text-3xl sm:text-4xl mb-8" style={{ lineHeight: 1.1 }}>
              Turning complex data into
              <span className="text-accent"> strategic decisions</span>.
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="text-center p-4 rounded-2xl bg-secondary/60">
                  <p className="font-display font-bold text-2xl text-foreground">{h.value}</p>
                  <p className="text-[0.7rem] text-muted-foreground mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a college student pursuing <strong className="text-foreground font-medium">BCA with Data Science</strong> at SRM Institute of Science and Technology, Chennai (Expected Graduation: 2027).
            </p>
            <p>
              Passionate about data analysis, machine learning, and extracting meaningful insights from complex datasets — both structured and unstructured.
            </p>
            <p>
              With a strong foundation in statistical analysis, feature engineering, and predictive modeling, I specialize in techniques like Random Forest, XGBoost, and NLP to turn raw data into business value.
            </p>
          </div>
        </div>

        {/* Education card */}
        <div className={`mt-16 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
          <div className="card-surface p-8 rounded-2xl border border-border/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-r-full" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3" /> Degree
                </p>
                <p className="font-semibold">BCA with Data Science</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> Institution
                </p>
                <p className="font-semibold">SRM Institute of Science & Technology</p>
                <p className="text-sm text-muted-foreground mt-0.5">Kattankulathur, Chennai</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> Duration
                </p>
                <p className="font-semibold">2024 – 2027</p>
                <p className="text-sm text-muted-foreground mt-0.5">Expected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
