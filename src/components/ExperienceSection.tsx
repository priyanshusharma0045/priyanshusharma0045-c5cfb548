import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, CheckCircle2 } from "lucide-react";

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
    <section id="experience" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">Experience</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-12" style={{ lineHeight: 1.1 }}>Where I've worked.</h2>

        <div className="relative pl-8 border-l-2 border-accent/20">
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 -translate-x-[calc(50%+1px)] w-4 h-4 rounded-full border-[3px] border-accent bg-background" />

          <div className="card-surface p-8 rounded-2xl border border-border/40">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl">Data Analyst Intern</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">NULL CLASS · Bengaluru, India</p>
                </div>
              </div>
              <span className="text-xs text-accent bg-accent/10 px-3.5 py-1.5 rounded-full font-medium">
                Apr 2025 – Jun 2025
              </span>
            </div>

            <ul className="space-y-3">
              {responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
