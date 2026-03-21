import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HR Analytics Dashboard",
    description: "Built a Power BI dashboard analyzing employee attrition and key HR KPIs. Processed 75,000+ records with thorough EDA and data preprocessing to improve decision-making through visual insights.",
    tags: ["Power BI", "EDA", "Data Preprocessing"],
    github: "https://github.com/priyanshusharma0045",
  },
  {
    title: "Vendor Sales Analysis",
    description: "End-to-end data pipeline from preprocessing to database to visualization. Identified top-performing vendors, profitability patterns, and sales vs purchase trends to highlight business impact.",
    tags: ["Python", "SQL", "Data Pipeline"],
    github: "https://github.com/priyanshusharma0045",
  },
];

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="section-padding bg-card">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Projects</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-12">Selected work.</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="card-surface p-8 rounded-2xl border border-border/50 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-display font-semibold text-xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors active:scale-[0.97]"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
