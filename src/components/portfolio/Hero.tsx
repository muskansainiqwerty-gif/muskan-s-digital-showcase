import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.7_0.22_280/0.35)] blur-3xl animate-blob" />
        <div className="absolute right-1/4 top-1/2 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.72_0.18_220/0.25)] blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-[oklch(0.7_0.22_320/0.25)] blur-3xl animate-blob [animation-delay:-12s]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-sm text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for backend & full-stack roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]"
            >
              <span className="block text-foreground">Muskan Saini</span>
              <span className="mt-2 block gradient-text animate-gradient">
                Backend Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Building scalable, high-performance backend systems —{" "}
              <span className="text-foreground">2+ years of experience</span>,
              improved API performance by{" "}
              <span className="text-foreground">45%</span>, and shipped systems
              handling <span className="text-foreground">5,000+ daily transactions</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg glow-primary transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex items-center gap-5 text-muted-foreground"
            >
              <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-foreground">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
                <Linkedin size={20} />
              </a>
              <a href="mailto:muskan@example.com" aria-label="Email" className="transition-colors hover:text-foreground">
                <Mail size={20} />
              </a>
              <div className="ml-2 h-px w-16 bg-border" />
              <span className="font-mono text-xs uppercase tracking-widest">Let's connect</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4"
            >
              {[
                { v: "2+", l: "Years" },
                { v: "45%", l: "Perf boost" },
                { v: "5K+", l: "Daily txns" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl font-bold gradient-text">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-30 blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-2xl shadow-elevated animate-float">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  muskan.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <code className="text-muted-foreground">
                  <span className="text-[oklch(0.78_0.14_320)]">const</span>{" "}
                  <span className="text-[oklch(0.85_0.15_200)]">muskan</span> = {"{"}
                  {"\n  "}name: <span className="text-emerald-300">'Muskan Saini'</span>,
                  {"\n  "}role: <span className="text-emerald-300">'Backend Engineer'</span>,
                  {"\n  "}stack: [<span className="text-emerald-300">'Node'</span>,{" "}
                  <span className="text-emerald-300">'NestJS'</span>,{" "}
                  <span className="text-emerald-300">'MySQL'</span>],
                  {"\n  "}focus: <span className="text-emerald-300">'system design'</span>,
                  {"\n  "}<span className="text-[oklch(0.78_0.14_320)]">async</span>{" "}
                  <span className="text-[oklch(0.85_0.15_200)]">build</span>() {"{"}
                  {"\n    "}<span className="text-[oklch(0.78_0.14_320)]">return</span>{" "}
                  <span className="text-emerald-300">'scalable systems'</span>;
                  {"\n  "}{"}"}
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
