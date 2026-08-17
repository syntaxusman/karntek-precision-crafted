export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={`inline-flex items-center leading-none ${className}`} aria-label="Karntek">
      <img
        src="/Karntek_CMYK_final.png"
        alt="Karntek"
        className={`h-[2.7em] w-auto object-contain ${invert ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
