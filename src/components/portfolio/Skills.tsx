import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  Server,
  Code2,
  Database,
  Wrench,
  Network,
} from "lucide-react";

const categories = [
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "NestJS", level: 90 },
      { name: "Express", level: 88 },
    ],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: [
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "RabbitMQ", level: 82 },
    ],
  },
  {
    icon: Network,
    title: "Concepts",
    items: [
      { name: "System Design", level: 85 },
      { name: "WebSockets", level: 88 },
      { name: "Microservices", level: 84 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Tools I use to ship reliable systems"
        description="A focused stack honed across production systems — from API design and async messaging to caching and real-time infrastructure."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass card-hover relative overflow-hidden rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <cat.icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="space-y-4">
              {cat.items.map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
