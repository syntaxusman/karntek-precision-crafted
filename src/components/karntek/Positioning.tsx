import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import facade from "@/assets/facade-mono.jpg";

const points = [
  { label: "Independent", y: 16, copy: "No products, no installers, no conflicts of interest." },
  { label: "Accredited", y: 40, copy: "Assessors registered with recognised professional bodies." },
  { label: "Insured", y: 64, copy: "£10M professional indemnity cover on every engagement." },
  { label: "Experienced", y: 86, copy: "A decade of complex buildings across the UK." },
];

export function Positioning() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" ref={ref} className="gutter bg-[var(--paper)] py-24 md:py-36">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="meta text-[var(--steel)]">01 / Position</p>
          <h2 className="display mt-8 text-[clamp(2.4rem,5.5vw,4.8rem)]">
            Clear advice.
            <br />
            <span className="text-[var(--ink-soft)]">Complete confidence.</span>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--steel)]">
            KARNTEK provides independent fire and building safety consultancy across property
            sectors, helping organisations understand risk, meet their responsibilities and make
            better decisions.
          </p>
          <a href="#services" className="link-underline meta mt-10 inline-block text-[var(--ink)]">
            What we do →
          </a>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative aspect-3/4 overflow-hidden md:aspect-16/12">
            <motion.img
              src={facade}
              alt="Monochrome architectural facade detail"
              loading="lazy"
              width={1200}
              height={1500}
              style={{ y: imgY }}
              className="absolute inset-0 h-[112%] w-full object-cover"
            />
          </div>

          {/* precision line + labels */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 6 12 L 40 12 L 40 38 L 74 38 L 74 62 L 30 62 L 30 88 L 94 88"
              fill="none"
              stroke="var(--signal)"
              strokeWidth="0.25"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </svg>

          <div className="absolute inset-0">
            {points.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[6%] flex items-start gap-3"
                style={{ top: `${p.y}%` }}
              >
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
                <div className="bg-[var(--paper)]/85 px-2 py-1 backdrop-blur-sm">
                  <p className="meta text-[var(--ink)]">{p.label}</p>
                  <p className="mt-1 hidden max-w-[15rem] text-[11px] leading-snug text-[var(--steel)] md:block">
                    {p.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
