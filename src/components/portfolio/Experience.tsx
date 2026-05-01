import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const experiences = [
  {
    company: "Antier Solutions",
    role: "Full Stack Developer",
    period: "2023 — Present",
    bullets: [
      "Built scalable APIs and microservices serving thousands of daily users.",
      "Implemented Redis caching layer that boosted performance by 45%.",
      "Used RabbitMQ for async processing — decoupling heavy workflows.",
      "Built secure auth systems with JWT and role-based access control (RBAC).",
      "Worked on real-time systems using WebSockets with sub-100ms latency.",
    ],
    stack: ["NestJS", "Node.js", "MySQL", "Redis", "RabbitMQ", "Docker"],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've shipped real systems"
        description="A look at the work, the impact, and the tech behind it."
      />

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[oklch(0.7_0.22_280)] via-border to-transparent md:left-8" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-16 md:pl-24"
            >
              {/* node */}
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-lg glow-primary md:left-3 md:h-11 md:w-11">
                <Briefcase size={18} />
              </div>

              <div className="glass card-hover rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="gradient-text font-medium">
                        {exp.company}
                      </span>
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[oklch(0.78_0.14_280)]"
                      />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
