import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "bhardawajpriyanshu@gmail.com", href: "mailto:bhardawajpriyanshu@gmail.com" },
  { icon: Phone, label: "9376352839", href: "tel:9376352839" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-sharma-128986352/" },
  { icon: Github, label: "GitHub", href: "https://github.com/priyanshusharma0045" },
];

const SERVICE_ID = "service_pt8lzwa";
const TEMPLATE_ID = "template_19n1cau";
const PUBLIC_KEY = "gvl6LyGOFh4NkFT_1";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message,
      }, PUBLIC_KEY);

      setSubmitted(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-3">Contact</p>
            <h2 className="heading-display text-3xl sm:text-4xl mb-4" style={{ lineHeight: 1.1 }}>
              Let's <span className="text-accent">connect</span>.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or interesting data challenges.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card border border-border/60 flex items-center justify-center group-hover:border-accent/30 group-hover:text-accent transition-all duration-200 shadow-sm">
                    <c.icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`card-surface p-8 rounded-2xl border border-border/40 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <p className="text-accent font-display font-semibold text-lg">Message sent!</p>
                <p className="text-muted-foreground text-sm">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-sm outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-sm outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-sm outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 active:scale-[0.98] inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {sending ? (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
