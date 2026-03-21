import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "bhardawajpriyanshu@gmail.com", href: "mailto:bhardawajpriyanshu@gmail.com" },
  { icon: Phone, label: "9376352839", href: "tel:9376352839" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-sharma-128986352/" },
  { icon: Github, label: "GitHub", href: "https://github.com/priyanshusharma0045" },
];

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={ref} className="section-padding bg-card">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Contact</p>
            <h2 className="heading-display text-3xl sm:text-4xl mb-6">Let's connect.</h2>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or data challenges.
            </p>
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <c.icon size={18} />
                  </div>
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card-surface p-8 rounded-2xl border border-border/50">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-accent font-medium">Thanks! I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-sm outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-sm outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-sm outline-none focus:ring-2 focus:ring-accent/40 transition-shadow resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
