import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    title: "Token-Based E-Commerce Platform",
    summary:
      "Full-stack commerce platform with token-driven payments, integrated Razorpay, and a microservices backend designed for scale.",
    achievements: [
      "5,000+ daily transactions",
      "45% API performance improvement",
      "Razorpay payment integration",
      "Microservices architecture",
    ],
    stack: ["React", "NestJS", "MySQL", "Redis", "Razorpay", "Docker"],
    accent: "from-[oklch(0.7_0.22_280)] to-[oklch(0.72_0.18_220)]",
  },
  {
    title: "EduBlockPro",
    summary:
      "EdTech platform with a modular backend powering live learning experiences for thousands of concurrent users.",
    achievements: [
      "2,000+ concurrent users",
      "RabbitMQ async processing",
      "Redis-backed query optimization",
      "Modular service architecture",
    ],
    stack: ["NestJS", "Node.js", "RabbitMQ", "Redis", "PostgreSQL"],
    accent: "from-[oklch(0.72_0.18_220)] to-[oklch(0.78_0.16_180)]",
  },
  {
    title: "Four Mini Game Platform",
    summary:
      "Real-time multiplayer mini-game platform with low-latency game state sync and push notifications.",
    achievements: [
      "1,000+ real-time users",
      "WebSockets with sub-100ms latency",
      "Redis-based state management",
      "Firebase push notifications",
    ],
    stack: ["Node.js", "WebSockets", "Redis", "Firebase", "React"],
    accent: "from-[oklch(0.7_0.22_320)] to-[oklch(0.7_0.22_280)]",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected projects"
        title="Things I've built and shipped"
        description="A selection of production work — focused on backend architecture, real-time systems, and measurable performance wins."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass card-hover"
          >
            {/* visual header */}
            <div className="relative h-40 overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`}
              />
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="relative flex h-full items-end p-5">
                <Sparkles className="text-foreground/80" size={28} />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>

              <ul className="mt-4 space-y-1.5">
                {p.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full gradient-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 pt-4">
                <a
                  href="https://github.com"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-card"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
