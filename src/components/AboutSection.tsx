import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">About Me</p>
          <h2 className="heading-display text-3xl sm:text-4xl mb-6">
            Turning complex data into<br />strategic decisions.
          </h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a college student pursuing <strong className="text-foreground">BCA with Data Science</strong> at SRM Institute of Science and Technology, Chennai (Expected Graduation: 2027).
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
      <div className={`max-w-7xl mx-auto mt-16 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
        <div className="card-surface p-8 rounded-2xl grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Degree</p>
            <p className="font-semibold">BCA with Data Science</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Institution</p>
            <p className="font-semibold">SRM Institute of Science & Technology</p>
            <p className="text-sm text-muted-foreground">Kattankulathur, Chennai</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
            <p className="font-semibold">2024 – 2027</p>
            <p className="text-sm text-muted-foreground">Expected</p>
          </div>
        </div>
      </div>
    </section>
  );
}
