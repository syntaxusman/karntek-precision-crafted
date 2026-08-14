import { insights } from "./data";

export function Insights() {
  const [feature, ...rest] = insights;

  return (
    <section id="insights" className="gutter bg-[var(--paper)] py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="display max-w-3xl text-[clamp(2rem,5vw,4.2rem)]">
          Intelligence for the built environment
        </h2>
        <a href="#insights" className="link-underline meta text-[var(--ink)]">
          All insights →
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <article className="group lg:col-span-7">
          <a href="#insights" className="block">
            <div className="relative aspect-4/3 overflow-hidden md:aspect-16/10">
              <img
                src={feature!.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="meta absolute left-0 top-0 bg-[var(--signal)] px-3 py-2 text-[var(--ink)]">
                {feature!.category}
              </span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-8 border-t border-[var(--hairline)] pt-5">
              <h3 className="display max-w-xl text-[clamp(1.4rem,2.6vw,2.2rem)]">
                {feature!.title}
              </h3>
              <span className="meta shrink-0 text-[var(--steel)] transition-transform duration-500 group-hover:translate-x-1">
                {feature!.meta} →
              </span>
            </div>
          </a>
        </article>

        <div className="flex flex-col gap-12 lg:col-span-5 lg:pt-20">
          {rest.map((a) => (
            <article key={a.title} className="group">
              <a href="#insights" className="flex gap-6">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden md:w-40">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="border-t border-[var(--hairline)] pt-3">
                  <p className="meta text-[var(--signal)]">{a.category}</p>
                  <h3 className="display mt-3 text-[clamp(1.1rem,1.7vw,1.5rem)]">{a.title}</h3>
                  <p className="meta mt-4 text-[var(--steel)] transition-transform duration-500 group-hover:translate-x-1">
                    {a.meta} →
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
