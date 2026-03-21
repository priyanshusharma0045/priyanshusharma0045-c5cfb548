import { useScrollReveal } from "@/hooks/useScrollReveal";

const responsibilities = [
  "Analyzed large datasets to extract actionable insights",
  "Performed data cleaning using Python & SQL",
  "Built interactive dashboards using Power BI",
  "Applied statistical and machine learning techniques",
  "Collaborated with cross-functional teams for data-driven solutions",
];

export default function ExperienceSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="section-padding bg-card">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Experience</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-12">Where I've worked.</h2>

        <div className="card-surface p-8 rounded-2xl border border-border/50">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-semibold text-xl">Data Analyst Intern</h3>
              <p className="text-muted-foreground">NULL CLASS · Bengaluru, India</p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              Apr 2025 – Jun 2025
            </span>
          </div>
          <ul className="space-y-3">
            {responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
