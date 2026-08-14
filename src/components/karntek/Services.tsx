import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services } from "./data";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-[var(--ink)] text-[var(--paper)]">
      <div className="gutter py-24 md:py-32">
        <div className="flex items-end justify-between">
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)]">What we do</h2>
          <p className="meta hidden text-[var(--steel)] md:block">
            {String(active + 1).padStart(2, "0")} / {services.length}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Visual */}
          <div className="relative order-2 hidden lg:order-1 lg:col-span-5 lg:block">
            <div className="sticky top-32 aspect-3/4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[active].id}
                  src={services[active].image}
                  alt=""
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[var(--ink)] to-transparent p-6 pt-24">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={services[active].id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-sm text-sm leading-relaxed text-[var(--paper)]/80"
                  >
                    {services[active].copy}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="absolute left-0 top-0 h-px w-full bg-[var(--signal)]" />
            </div>
          </div>

          {/* List */}
          <ul className="order-1 lg:order-2 lg:col-span-7">
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <li key={s.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative w-full border-b border-[var(--hairline-invert)] py-5 text-left md:py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`meta w-8 transition-colors ${isActive ? "text-[var(--signal)]" : "text-[var(--steel)]"}`}
                      >
                        {s.id}
                      </span>
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.4,
                          x: isActive ? 8 : 0,
                        }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className={`display flex-1 ${isActive ? "text-[clamp(1.5rem,3.6vw,2.9rem)]" : "text-[clamp(1.3rem,3vw,2.3rem)]"} transition-[font-size] duration-500`}
                      >
                        {s.title}
                      </motion.span>
                      <span
                        className={`meta transition-all duration-500 ${isActive ? "translate-x-0 text-[var(--signal)] opacity-100" : "-translate-x-2 opacity-0"}`}
                      >
                        →
                      </span>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden pl-13 text-[13px] leading-relaxed text-[var(--steel)] lg:hidden"
                        >
                          <span className="block pt-3">{s.copy}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
            <li className="pt-8">
              <a href="#contact" className="link-underline meta text-[var(--paper)]">
                Explore all services →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
