import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/priyanshusharma0045", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-sharma-128986352/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bhardawajpriyanshu@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            PS<span className="text-accent">.</span>
          </a>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priyanshu Sharma
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors duration-200 active:scale-[0.95]"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
