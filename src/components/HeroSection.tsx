const profilePhoto = "https://i.postimg.cc/s2CQcjN6/Priyanshu-main-image.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="min-h-screen flex items-center section-padding pt-28 md:pt-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-[480px] h-[480px] rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center relative">
        {/* Text */}
        <div className={`space-y-7 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="available-badge">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            OPEN TO OPPORTUNITIES
          </div>

          <div>
            <p className="text-muted-foreground text-base font-medium mb-2 tracking-wide uppercase" style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>
              Data Analyst · AI/ML Enthusiast
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]" style={{ lineHeight: 1.08 }}>
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-accent">Priyanshu</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent/30 rounded-full" />
              </span>
              <br />
              <span className="text-muted-foreground font-semibold" style={{ fontSize: "0.72em" }}>
                I turn data into decisions.
              </span>
            </h1>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            Transforming complex datasets into actionable insights and intelligent solutions — with a focus on predictive modeling and visual storytelling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 active:scale-[0.97] inline-flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-transparent transition-all duration-300 active:scale-[0.97]"
            >
              Contact Me
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">Find me</span>
            <span className="w-8 h-px bg-border" />
            {[
              { icon: Github, href: "https://github.com/priyanshusharma0045", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-sharma-128986352/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bhardawajpriyanshu@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors duration-200 active:scale-[0.95]"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className={`flex justify-center md:justify-end ${visible ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-full border border-accent/10 pointer-events-none" />
            <div className="absolute -inset-6 rounded-full border border-accent/[0.05] pointer-events-none" />

            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
              <img
                src={profilePhoto}
                alt="Priyanshu Sharma"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-2 left-2 card-surface px-4 py-2.5 rounded-xl text-xs font-medium shadow-lg flex items-center gap-2">
              <span>🎓</span> BCA Data Science
            </div>
            <div className="absolute -top-1 -right-1 card-surface px-3 py-2 rounded-xl text-xs font-medium shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent font-semibold">2+ Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${visible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "800ms" }}>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
      </div>
    </section>
  );
}
