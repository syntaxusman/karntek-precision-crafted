import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import dark from "@/assets/dark-tower.jpg";

export function CPD() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.22]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <motion.img
        src={dark}
        alt=""
        loading="lazy"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[var(--ink)]/50" />
      <div className="gutter relative grid grid-cols-1 gap-12 py-28 md:py-40 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="meta text-[var(--signal)]">CPD Training</p>
          <h2 className="display mt-8 text-[clamp(2.2rem,6vw,5.4rem)]">
            Knowledge changes
            <br />
            how buildings
            <br />
            are managed.
          </h2>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="max-w-sm text-[15px] leading-relaxed text-[var(--paper)]/75">
            Accredited CPD sessions delivered in person or online for boards, estates teams and
            managing agents — covering the Building Safety Act, compartmentation, fire doors and
            practical risk decision-making.
          </p>
          <a
            href="#contact"
            className="meta group mt-10 inline-flex w-fit items-center gap-4 bg-[var(--signal)] px-7 py-4 text-[var(--ink)] transition-colors hover:bg-[var(--paper)]"
          >
            Book a CPD Session
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
