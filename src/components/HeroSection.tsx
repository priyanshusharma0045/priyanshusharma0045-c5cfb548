import profilePhoto from "@/assets/profile-photo.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="min-h-screen flex items-center section-padding pt-28 md:pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className={`space-y-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="available-badge">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            OPEN TO OPPORTUNITIES
          </div>

          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
            Hi, I'm a<br />
            <span className="text-accent">data analyst</span>.
          </h1>

          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Transforming data into actionable insights and intelligent solutions. Aspiring AI/ML Engineer with a passion for predictive modeling.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors active:scale-[0.97]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Photo card */}
        <div className={`flex justify-center md:justify-end ${visible ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <div className="relative">
            <div className="card-surface p-4 rounded-3xl">
              <img
                src={profilePhoto}
                alt="Priyanshu Sharma"
                className="w-64 h-72 sm:w-72 sm:h-80 object-cover rounded-2xl"
              />
              <div className="mt-3 px-1">
                <p className="font-display font-semibold text-lg">Priyanshu Sharma</p>
                <p className="text-muted-foreground text-sm">Chennai, India</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 card-surface px-4 py-2 rounded-xl text-xs font-medium">
              🎓 BCA Data Science
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
