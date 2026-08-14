export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.45em] leading-none ${className}`}
      aria-label="KARNTEK — Complete Compliance"
    >
      <span
        className="display text-[1.35em] tracking-[0.02em]"
        style={{ color: invert ? "var(--paper)" : "var(--ink)" }}
      >
        KARN
        <span style={{ color: "var(--signal)" }}>T</span>EK
      </span>
      <span className="meta hidden text-[0.5em] sm:inline" style={{ color: "var(--steel)" }}>
        Complete Compliance
      </span>
    </span>
  );
}
