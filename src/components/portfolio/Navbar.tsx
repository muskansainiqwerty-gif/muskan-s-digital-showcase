import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-tools", label: "AI Tools" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [6, 18]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.7]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <motion.div
        style={{
          backgroundColor: `oklch(0.16 0.03 265 / ${bgOpacity.get()})`,
        }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all ${
          scrolled
            ? "glass-strong border-border shadow-card"
            : "border-transparent"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-primary-foreground shadow-lg">
            M
          </span>
          <span className="gradient-text">Muskan</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 md:inline-block"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl md:hidden"
        >
          <div className="glass-strong flex flex-col rounded-2xl p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
