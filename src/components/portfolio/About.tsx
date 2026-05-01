import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Database } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const pillars = [
  {
    icon: Cpu,
    title: "Backend-first mindset",
    text: "Designing reliable APIs and services with Node.js & NestJS, optimized for throughput and clean separation of concerns.",
  },
  {
    icon: Database,
    title: "Data & performance",
    text: "Modeling data in MySQL/PostgreSQL, tuning queries, and using Redis to cut latency and offload hot reads.",
  },
  {
    icon: Layers,
    title: "System design",
    text: "Microservices, message queues (RabbitMQ), WebSockets — building modular systems that scale horizontally.",
  },
  {
    icon: Zap,
    title: "Full-stack reach",
    text: "Comfortable owning the React frontend when needed — shipping end-to-end features without hand-offs.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About me"
        title="Engineer focused on systems that scale"
        description="I'm a backend engineer with full-stack range. Over the last 2+ years I've built production APIs, microservices, real-time systems, and payment-grade flows — caring as much about latency and reliability as I do about clean code."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass card-hover rounded-2xl p-6"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-lg">
              <p.icon size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
