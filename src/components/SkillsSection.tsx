import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  { title: "Programming", items: ["Python", "Java", "SQL"] },
  { title: "Data Analysis", items: ["Data Cleaning", "EDA", "Statistical Analysis", "Feature Engineering", "Predictive Modeling"] },
  { title: "Machine Learning", items: ["Regression", "Classification", "Random Forest", "XGBoost", "NLP"] },
  { title: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools & Libraries", items: ["Excel", "Jupyter Notebook", "VS Code", "Google Colab", "pandas", "numpy", "scikit-learn"] },
];

export default function SkillsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Skills</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-12">What I work with.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="card-surface p-6 rounded-2xl"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-display font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
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
