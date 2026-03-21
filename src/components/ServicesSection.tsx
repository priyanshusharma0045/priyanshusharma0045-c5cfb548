import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarChart3, Database, Brain, LineChart, Sparkles } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analysis & Insights", desc: "Extract actionable insights from complex datasets to inform strategy." },
  { icon: LineChart, title: "Dashboard Development", desc: "Interactive Power BI and Tableau dashboards for real-time monitoring." },
  { icon: Database, title: "Data Cleaning & Preprocessing", desc: "Transform raw, messy data into analysis-ready datasets." },
  { icon: Brain, title: "ML Model Development", desc: "Build predictive models using classification, regression, and NLP." },
  { icon: Sparkles, title: "Business Intelligence", desc: "End-to-end BI solutions for data-driven decision making." },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Services</p>
        <h2 className="heading-display text-3xl sm:text-4xl mb-12">How I can help.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="card-surface p-6 rounded-2xl" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
