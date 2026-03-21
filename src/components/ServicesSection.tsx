import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarChart3, Database, Brain, LineChart, Sparkles } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analysis & Insights", desc: "Extract actionable insights from complex datasets to inform strategy and drive growth." },
  { icon: LineChart, title: "Dashboard Development", desc: "Interactive Power BI and Tableau dashboards for real-time monitoring and KPI tracking." },
  { icon: Database, title: "Data Cleaning & Preprocessing", desc: "Transform raw, messy data into clean, analysis-ready datasets with robust pipelines." },
  { icon: Brain, title: "ML Model Development", desc: "Build predictive models using classification, regression, and NLP techniques." },
  { icon: Sparkles, title: "Business Intelligence", desc: "End-to-end BI solutions that connect data to decisions across your organization." },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-14">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">Services</p>
          <h2 className="heading-display text-3xl sm:text-4xl mb-4" style={{ lineHeight: 1.1 }}>How I can help.</h2>
          <p className="text-muted-foreground max-w-md mx-auto">End-to-end data solutions — from raw collection to polished, decision-ready outputs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-7 rounded-2xl border border-border/40 bg-card hover:border-accent/20 transition-all duration-300 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <s.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
