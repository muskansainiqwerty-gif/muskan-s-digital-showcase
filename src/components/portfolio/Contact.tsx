import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "muskan.saini@example.com",
    href: "mailto:muskan.saini@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muskansaini",
    href: "https://linkedin.com/in/muskansaini",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great"
        description="Open to backend, full-stack, and systems roles. Drop a message — I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <c.icon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-0.5 text-sm font-medium text-foreground">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3500);
          }}
          className="glass space-y-4 rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" type="text" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" type="text" name="subject" placeholder="Project / role / collab" />
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about it..."
              className="w-full resize-none rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[oklch(0.7_0.22_280/0.6)]"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {sent ? "Message sent ✓" : (
              <>
                Send message
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        {...props}
        className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[oklch(0.7_0.22_280/0.6)]"
      />
    </div>
  );
}
