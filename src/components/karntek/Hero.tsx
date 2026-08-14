import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import tower from "@/assets/hero-tower.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 90, damping: 22 });
  const sy = useSpring(my, { stiffness: 90, damping: 22 });

  const imgX = useTransform(sx, [0, 1], [18, -18]);
  const imgY = useTransform(sy, [0, 1], [12, -12]);
  const scale = useTransform(sy, [0, 1], [1.1, 1.04]);
  const lineX = useTransform(sx, [0, 1], ["30%", "70%"]);
  const lineY = useTransform(sy, [0, 1], ["35%", "65%"]);

  const [clock, setClock] = useState("00");
  useEffect(() => {
    const t = setInterval(() => {
      setClock(String(new Date().getSeconds()).padStart(2, "0"));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative min-h-[100svh] overflow-hidden bg-[var(--paper)] pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />

      {/* Architectural composition */}
      <div className="gutter relative">
        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Arched crop, right-weighted, extends past the grid */}
          <div className="relative ml-auto h-[42svh] w-[74%] overflow-hidden arch-arch sm:h-[48svh] md:absolute md:right-[-2%] md:top-0 md:h-[74svh] md:w-[40%]">
            <motion.img
              src={tower}
              alt="Contemporary UK high-rise residential tower"
              width={1280}
              height={1600}
              style={{ x: imgX, y: imgY, scale }}
              className="h-full w-full object-cover"
            />
            <motion.div
              style={{ left: lineX }}
              className="absolute inset-y-0 w-px bg-[var(--signal)] opacity-80 mix-blend-screen"
            />
            <motion.div
              style={{ top: lineY }}
              className="absolute inset-x-0 h-px bg-[var(--signal)] opacity-60 mix-blend-screen"
            />
            <span className="meta absolute bottom-5 left-5 text-[var(--paper)] mix-blend-difference">
              Ref. 001 / High-Rise Residential
            </span>
          </div>

          {/* Typography */}
          <div className="relative z-10 mt-10 md:mt-0 md:pt-[10svh]">
            <motion.h1
              initial="hidden"
              animate="show"
              className="display text-[clamp(3rem,12vw,10.5rem)] text-[var(--ink)]"
            >
              {["Buildings.", "Safety.", "Certainty."].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: "110%" },
                      show: { y: 0 },
                    }}
                    transition={{
                      delay: 0.25 + i * 0.12,
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`block ${i === 1 ? "md:pl-[9vw]" : ""} ${i === 2 ? "md:pl-[18vw]" : ""}`}
                    style={{ color: i === 2 ? "var(--ink-soft)" : "var(--ink)" }}
                  >
                    {word}
                    {i === 2 && (
                      <span className="ml-[0.1em] inline-block h-[0.12em] w-[0.12em] translate-y-[-0.55em] rounded-full bg-[var(--signal)] align-baseline" />
                    )}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>


      {/* Lower bar */}
      <div className="gutter relative mt-10 md:absolute md:bottom-10 md:left-0 md:right-0 md:mt-0">
        <div className="flex flex-col gap-8 border-t border-[var(--hairline)] pt-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-[15px] leading-relaxed text-[var(--steel)]"
          >
            Independent fire &amp; building safety expertise for the people responsible for keeping
            buildings safe, compliant and protected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pb-2 md:gap-8"
          >
            <a
              href="#contact"
              className="meta group inline-flex items-center gap-4 bg-[var(--ink)] px-7 py-4 text-[var(--paper)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--ink)]"
            >
              Request a Quote
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a href="#who" className="link-underline meta text-[var(--ink)]">
              Explore Karntek
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="meta flex items-center gap-3 pb-2 text-[var(--steel)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] signal-dot" />
            Karntek / Fire + Building Safety / {clock}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
