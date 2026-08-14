import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { sectors, services } from "./data";
import facade from "@/assets/facade-mono.jpg";
import tower from "@/assets/hero-tower.jpg";

const items = [
  { label: "Who We Help", key: "who" },
  { label: "Services", key: "services" },
  { label: "Insights", key: "insights" },
  { label: "About", key: "about" },
  { label: "Case Studies", key: "cases" },
  { label: "Contact", key: "contact" },
];

const panels: Record<
  string,
  { heading: string; columns: { title: string; links: string[] }[]; image: string; copy: string }
> = {
  who: {
    heading: "Who We Help",
    columns: [
      { title: "Sectors", links: sectors.slice(0, 3).map((s) => s.title) },
      { title: "", links: sectors.slice(3).map((s) => s.title) },
    ],
    image: facade,
    copy: "We work with the people who carry the responsibility — from single blocks to national portfolios.",
  },
  services: {
    heading: "Building Safety",
    columns: [
      { title: "Assessment", links: services.slice(0, 4).map((s) => s.title) },
      { title: "Inspection & Delivery", links: services.slice(4).map((s) => s.title) },
    ],
    image: tower,
    copy: "Independent, accredited and insured. Every engagement produces evidence you can defend.",
  },
};

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setOpen(null)}
      data-cursor="active"
    >
      <div
        className={`gutter flex items-center justify-between transition-all duration-500 ${
          scrolled || open
            ? "bg-[var(--paper)]/92 py-4 backdrop-blur-md"
            : "bg-transparent py-6 md:py-8"
        }`}
        style={{ borderBottom: `1px solid ${scrolled || open ? "var(--hairline)" : "transparent"}` }}
      >
        <a href="#top" className="text-[13px] md:text-[15px]">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((it) => (
            <a
              key={it.key}
              href={`#${it.key}`}
              onMouseEnter={() => setOpen(panels[it.key] ? it.key : null)}
              data-active={open === it.key}
              className="link-underline meta text-[var(--ink)] transition-opacity hover:opacity-100"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="meta group hidden items-center gap-3 bg-[var(--ink)] px-5 py-3 text-[var(--paper)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--ink)] md:inline-flex"
          >
            Request a Quote
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <button
            onClick={() => setMenu(true)}
            className="meta flex items-center gap-2 lg:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-6 bg-[var(--ink)]" />
              <span className="block h-px w-6 bg-[var(--ink)]" />
            </span>
          </button>
        </div>
      </div>

      {/* Mega panel */}
      <AnimatePresence>
        {open && panels[open] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden overflow-hidden border-b border-[var(--hairline)] bg-[var(--paper)] lg:block"
          >
            <div className="gutter grid grid-cols-12 gap-10 py-12">
              <div className="col-span-3">
                <p className="meta text-[var(--steel)]">Section</p>
                <h3 className="display mt-4 text-4xl">{panels[open].heading}</h3>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--steel)]">
                  {panels[open].copy}
                </p>
              </div>
              {panels[open].columns.map((col, i) => (
                <div key={i} className="col-span-3">
                  {col.title && <p className="meta mb-5 text-[var(--steel)]">{col.title}</p>}
                  <ul className={col.title ? "space-y-3" : "space-y-3 pt-[2.1rem]"}>
                    {col.links.map((l, j) => (
                      <li key={l}>
                        <a
                          href="#services"
                          className="group flex items-baseline gap-3 text-[15px] text-[var(--ink)]"
                        >
                          <span className="meta w-6 text-[var(--steel)] transition-colors group-hover:text-[var(--signal)]">
                            {String(i * 4 + j + 1).padStart(2, "0")}
                          </span>
                          <span className="link-underline">{l}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-3">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={panels[open].image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-[var(--signal)] opacity-70" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--ink)] text-[var(--paper)]"
          >
            <div className="gutter flex items-center justify-between py-6">
              <span className="text-[13px]">
                <Logo invert />
              </span>
              <button onClick={() => setMenu(false)} className="meta text-[var(--paper)]">
                Close ✕
              </button>
            </div>
            <nav className="gutter flex flex-1 flex-col justify-center gap-1">
              {items.map((it, i) => (
                <motion.a
                  key={it.key}
                  href={`#${it.key}`}
                  onClick={() => setMenu(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 border-b border-[var(--hairline-invert)] py-5"
                >
                  <span className="meta text-[var(--signal)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-4xl">{it.label}</span>
                </motion.a>
              ))}
            </nav>
            <div className="gutter pb-10">
              <a
                href="#contact"
                onClick={() => setMenu(false)}
                className="meta flex items-center justify-between bg-[var(--signal)] px-6 py-5 text-[var(--ink)]"
              >
                Request a Quote <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
