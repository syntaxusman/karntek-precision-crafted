import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sectors } from "./data";

export function FindYourRoute() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="who" className="gutter relative bg-[var(--paper)] py-24 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="display text-[clamp(2.5rem,7vw,6rem)]">Where do you fit?</h2>
        <p className="max-w-sm text-[15px] leading-relaxed text-[var(--steel)]">
          Tell us what you&apos;re responsible for and we&apos;ll show you where KARNTEK can help.
        </p>
      </div>

      <div className="mt-14 border-t border-[var(--hairline)]">
        {sectors.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={s.id}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="group relative block border-b border-[var(--hairline)] outline-none"
            >
              <motion.div
                animate={{
                  backgroundColor: isActive ? "rgba(21,21,22,0.03)" : "rgba(21,21,22,0)",
                }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center gap-6 py-6 md:gap-10 md:py-8"
              >
                <span
                  className={`meta w-8 transition-colors ${isActive ? "text-[var(--signal)]" : "text-[var(--steel)]"}`}
                >
                  {s.id}
                </span>

                <motion.h3
                  animate={{ opacity: active === null || isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4 }}
                  className="display flex-1 text-[clamp(1.6rem,4.5vw,3.4rem)]"
                >
                  {s.title}
                </motion.h3>

                <div className="hidden w-64 lg:block">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key={s.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="text-[13px] leading-relaxed text-[var(--steel)]"
                      >
                        {s.copy}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative hidden h-20 w-36 shrink-0 overflow-hidden md:block">
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key={s.id}
                        src={s.image}
                        alt=""
                        loading="lazy"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        exit={{ clipPath: "inset(0 0 0 100%)" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 h-full w-full object-cover grayscale"
                      />
                    )}
                  </AnimatePresence>
                </div>

                <span
                  className={`meta transition-transform duration-500 ${isActive ? "translate-x-1 text-[var(--signal)]" : "text-[var(--steel)]"}`}
                >
                  →
                </span>

                <motion.span
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[var(--signal)]"
                />
              </motion.div>

              {/* mobile description */}
              <p className="pb-6 pl-14 text-[13px] leading-relaxed text-[var(--steel)] lg:hidden">
                {s.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
