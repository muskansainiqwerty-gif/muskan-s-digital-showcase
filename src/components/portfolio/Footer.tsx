import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-md gradient-primary text-xs font-bold text-primary-foreground">
            M
          </span>
          <span>© {new Date().getFullYear()} Muskan Saini. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin size={18} />
          </a>
          <a href="mailto:muskan.saini@example.com" aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
