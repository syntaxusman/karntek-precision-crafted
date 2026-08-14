import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { caseStudies } from "./data";

export function CaseStudies() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const item = caseStudies[i]!;

  const go = (n: number) => {
    setDir(n);
    setI((prev) => (prev + n + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="cases" className="relative overflow-hidden bg-[var(--paper)] py-24 md:py-32">
      <div className="gutter flex items-end justify-between">
        <h2 className="display text-[clamp(2rem,5vw,4rem)]">Selected work</h2>
        <div className="flex items-center gap-6">
          <span className="meta text-[var(--steel)]">
            {item.id} / {String(caseStudies.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous case study"
              className="meta border border-[var(--hairline)] px-4 py-3 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next case study"
              className="meta border border-[var(--hairline)] px-4 py-3 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12">
        <div className="relative aspect-16/10 overflow-hidden lg:col-span-8 lg:aspect-auto lg:h-[70svh]">
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.img
              key={item.id}
              src={item.image}
              alt={item.title}
              loading="lazy"
              custom={dir}
              initial={{ x: dir * 60, opacity: 0, scale: 1.05 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -dir * 60, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--hairline)]">
            <motion.div
              key={item.id}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (i + 1) / caseStudies.length }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-full origin-left bg-[var(--signal)]"
            />
          </div>
        </div>

        <div className="gutter flex flex-col justify-center bg-[var(--ink)] py-12 text-[var(--paper)] lg:col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="meta text-[var(--signal)]">{item.sector}</p>
              <h3 className="display mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)]">{item.title}</h3>
              <dl className="mt-8 space-y-6">
                {[
                  ["Challenge", item.challenge],
                  ["Solution", item.solution],
                  ["Outcome", item.outcome],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-[var(--hairline-invert)] pt-4">
                    <dt className="meta text-[var(--steel)]">{k}</dt>
                    <dd className="mt-2 text-[13px] leading-relaxed text-[var(--paper)]/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
