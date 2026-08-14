import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { hotspots } from "./data";
import elevation from "@/assets/building-elevation.jpg";

export function BuildingMap() {
  const [active, setActive] = useState<string | null>(null);
  const point = hotspots.find((h) => h.id === active);

  return (
    <section className="gutter bg-[var(--paper-warm)] py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="display text-[clamp(2rem,5vw,4rem)]">
          One building.
          <br />
          <span className="text-[var(--ink-soft)]">Every layer of risk.</span>
        </h2>
        <p className="meta text-[var(--steel)]">Select a marker to inspect</p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <img
          src={elevation}
          alt="Elevation of a modern mid-rise residential building"
          loading="lazy"
          width={1408}
          height={1008}
          className="w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />

        {hotspots.map((h) => (
          <button
            key={h.id}
            onMouseEnter={() => setActive(h.id)}
            onFocus={() => setActive(h.id)}
            onClick={() => setActive(active === h.id ? null : h.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            aria-label={h.label}
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span
                className={`absolute inset-0 rounded-full border border-[var(--signal)] transition-transform duration-500 ${active === h.id ? "scale-[2.2]" : "scale-100"}`}
              />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
            </span>
          </button>
        ))}

        <AnimatePresence>
          {point && (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 left-4 right-4 max-w-sm bg-[var(--ink)] p-5 text-[var(--paper)] md:bottom-8 md:left-8"
            >
              <div className="flex items-center gap-3">
                <span className="meta text-[var(--signal)]">{point.id}</span>
                <p className="meta">{point.label}</p>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--paper)]/70">
                {point.copy}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
