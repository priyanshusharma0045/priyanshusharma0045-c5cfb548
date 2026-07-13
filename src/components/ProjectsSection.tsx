import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "HR Analytics Dashboard",
    description: "Built a Power BI dashboard analyzing employee attrition and key HR KPIs. Processed 75,000+ records with thorough EDA and data preprocessing to improve decision-making through visual insights.",
    tags: ["Power BI", "EDA", "Data Preprocessing"],
    metrics: "75K+ records",
    github: "https://github.com/priyanshusharma0045/HR-Analytic-dasboard",
  },
  {
    title: "Vendor Sales Analysis",
    description: "End-to-end data pipeline from preprocessing to database to visualization. Identified top-performing vendors, profitability patterns, and sales vs purchase trends to highlight business impact.",
    tags: ["Python", "SQL", "Data Pipeline"],
    metrics: "Full pipeline",
    github: "https://github.com/priyanshusharma0045/vendor-sales-analysis",
  },
  {
    title: "Demand Forecasting",
    description: "Time-series forecasting model predicting future demand using historical sales data. Applied feature engineering and evaluated multiple regression models to deliver accurate, business-ready forecasts.",
    tags: ["Python", "Time Series", "ML"],
    metrics: "Forecasting model",
    github: "https://github.com/priyanshusharma0045/Demand-Forecasting",
  },
];

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">Projects</p>
            <h2 className="heading-display text-3xl sm:text-4xl" style={{ lineHeight: 1.1 }}>Selected work.</h2>
          </div>
          <a
            href="https://github.com/priyanshusharma0045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5 font-medium"
          >
            View all on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-surface p-8 rounded-2xl border border-border/40 group hover:border-accent/20 transition-all duration-300 block ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[0.65rem] font-semibold text-accent uppercase tracking-widest">Project {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-semibold text-xl mt-1 group-hover:text-accent transition-colors duration-200">{p.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                  <ExternalLink size={14} />
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/8 text-accent font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{p.metrics}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
