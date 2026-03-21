import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, BarChart3, Brain, LineChart, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  { icon: Code2, title: "Programming", items: ["Python", "Java", "SQL"] },
  { icon: BarChart3, title: "Data Analysis", items: ["Data Cleaning", "EDA", "Statistical Analysis", "Feature Engineering", "Predictive Modeling"] },
  { icon: Brain, title: "Machine Learning", items: ["Regression", "Classification", "Random Forest", "XGBoost", "NLP"] },
  { icon: LineChart, title: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools & Libraries", items: ["Excel", "Jupyter Notebook", "VS Code", "Google Colab", "pandas", "numpy", "scikit-learn"] },
];

export default function SkillsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">Skills</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-4" style={{ lineHeight: 1.1 }}>What I work with.</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">Technologies and tools I use to transform raw data into meaningful insights.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-surface p-6 rounded-2xl border border-border/40 group hover:border-accent/20 transition-colors duration-300 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <cat.icon className="w-4.5 h-4.5 text-accent" size={18} />
                </div>
                <h3 className="font-display font-semibold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
