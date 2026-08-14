import { useState } from "react";
import { motion } from "motion/react";

const routes = [
  {
    id: "01",
    title: "Request a Quote",
    copy: "Send us the building details and we'll scope the work and price it.",
  },
  {
    id: "02",
    title: "Speak to an Expert",
    copy: "A 20-minute call with a consultant on your specific risk question.",
  },
  {
    id: "03",
    title: "Arrange a Site Visit",
    copy: "We attend, assess and follow up with a written position.",
  },
];

export function Contact() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="gutter relative overflow-hidden bg-[var(--paper)] py-24 md:py-32"
    >
      <motion.div
        animate={{ opacity: active === null ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute inset-0 tech-grid"
      />
      <div className="relative">
        <p className="meta text-[var(--steel)]">Contact</p>
        <h2 className="display mt-8 max-w-4xl text-[clamp(2.4rem,7vw,6rem)]">
          Let&apos;s talk about your building.
        </h2>

        <div className="mt-16 grid grid-cols-1 border-t border-[var(--hairline)] md:grid-cols-3">
          {routes.map((r, i) => {
            const isActive = active === i;
            return (
              <a
                key={r.id}
                href="#contact"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex min-h-56 flex-col justify-between border-b border-[var(--hairline)] p-6 transition-colors md:border-r md:p-8"
                style={{
                  backgroundColor: isActive ? "var(--ink)" : "transparent",
                  color: isActive ? "var(--paper)" : "var(--ink)",
                }}
              >
                <span
                  className="meta"
                  style={{ color: isActive ? "var(--signal)" : "var(--steel)" }}
                >
                  {r.id}
                </span>
                <div>
                  <h3 className="display text-[clamp(1.4rem,2.4vw,2rem)]">{r.title}</h3>
                  <p
                    className="mt-4 max-w-xs text-[13px] leading-relaxed"
                    style={{ color: isActive ? "rgba(250,250,247,0.7)" : "var(--steel)" }}
                  >
                    {r.copy}
                  </p>
                </div>
                <span
                  className="meta mt-6 transition-transform duration-500 group-hover:translate-x-2"
                  style={{ color: isActive ? "var(--signal)" : "var(--ink)" }}
                >
                  →
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-16 gap-y-6">
          {[
            ["Telephone", "0330 043 1000"],
            ["Email", "hello@karntek.co.uk"],
            ["Office", "Manchester · London · Nationwide"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="meta text-[var(--steel)]">{k}</p>
              <p className="mt-2 text-[15px]">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
