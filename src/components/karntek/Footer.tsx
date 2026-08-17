import { Logo } from "./Logo";

const columns: { title: string; links: string[] }[] = [
  {
    title: "Who We Help",
    links: [
      "Residential Property",
      "Managing Agents",
      "Developers",
      "Housing Associations",
      "Education",
      "Commercial Property",
    ],
  },
  {
    title: "Services",
    links: [
      "Building Safety",
      "Building Safety Cases",
      "FRAEW",
      "Structural Risk Assessments",
      "Fire Risk Assessments",
      "Fire Door Inspections",
      "Fire Compartmentation",
      "Project Management",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Case Studies", "Contact"],
  },
  {
    title: "Resources",
    links: ["Industry Updates", "Guides", "CPD Training", "Downloads", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <div className="pointer-events-none absolute inset-0 tech-grid-invert opacity-60" />
      <div className="gutter relative pt-20 pb-10 md:pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[15px]">
              <Logo invert />
            </span>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-[var(--paper)]/60">
              Independent fire and building safety consultancy for the organisations responsible for
              keeping buildings safe, compliant and protected.
            </p>
            <div className="mt-8">
              <p className="meta text-[var(--steel)]">Get in touch</p>
              <ul className="mt-4 space-y-2 text-[13px] text-[var(--paper)]/80">
                <li>0330 043 1000</li>
                <li>hello@karntek.co.uk</li>
                <li>Unit 4, Blackfriars House, Manchester M3 2JA</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-8 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="meta text-[var(--signal)]">{c.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="link-underline text-[13px] text-[var(--paper)]/70 transition-colors hover:text-[var(--paper)]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-[var(--hairline-invert)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="meta text-[var(--steel)]">© Artistry</p>
          <div className="flex gap-8">
            <a href="#top" className="link-underline meta text-[var(--paper)]/70">
              Privacy Policy
            </a>
            <a href="#top" className="link-underline meta text-[var(--paper)]/70">
              Terms &amp; Conditions
            </a>
          </div>
          <div className="flex gap-4">
            {["Li", "X", "In"].map((s) => (
              <a
                key={s}
                href="#top"
                aria-label={s}
                className="meta flex h-8 w-8 items-center justify-center border border-[var(--hairline-invert)] text-[10px] text-[var(--paper)]/70 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
