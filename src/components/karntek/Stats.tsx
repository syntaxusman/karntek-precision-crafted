import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 10, prefix: "£", suffix: "M", label: "Professional Indemnity Insurance" },
  { value: 10000, suffix: "+", label: "Sites Worked On" },
  { value: 500, suffix: "+", label: "Clients" },
  { value: 10, suffix: "+", label: "Years in the Sector" },
];

function Counter({ to, inView }: { to: number; inView: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <>{n.toLocaleString("en-GB")}</>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 tech-grid-invert"
      />
      <div className="gutter relative py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
          <p className="meta text-[var(--steel)]">By the numbers</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2">
          {stats.map((s, i) => (
            <div key={s.label} className="relative border-t border-[var(--hairline-invert)] py-10">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 h-px w-full origin-left bg-[var(--signal)]"
              />
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="display text-[clamp(3.5rem,11vw,9rem)]"
                >
                  {s.prefix}
                  <Counter to={s.value} inView={inView} />
                  <span className="text-[var(--signal)]">{s.suffix}</span>
                </motion.div>
              </div>
              <p className="meta mt-4 text-[var(--steel)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
