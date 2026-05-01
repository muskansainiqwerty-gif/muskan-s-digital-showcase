import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const tools = [
  {
    name: "Claude",
    desc: "For complex reasoning, code reviews, and architectural sparring.",
  },
  {
    name: "Cursor",
    desc: "Pair-programming inside the editor — accelerating refactors & tests.",
  },
];

export function AITools() {
  return (
    <Section id="ai-tools">
      <SectionHeader
        eyebrow="AI in my workflow"
        title="Engineering, amplified"
        description="I lean on AI tools to debug faster, sharpen designs, and ship higher-quality code without compromising ownership."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass card-hover relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full gradient-primary opacity-20 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm text-muted-foreground"
      >
        <Sparkles size={14} className="text-[oklch(0.78_0.14_280)]" />
        Used for debugging, optimization, and improving development speed.
      </motion.p>
    </Section>
  );
}
