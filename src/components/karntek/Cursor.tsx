import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.4 });
  const rx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a,button,[data-cursor='active']"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        style={{ x: rx, y: ry }}
        className="absolute -left-4 -top-4 h-8 w-8"
        animate={{ scale: active ? 1.9 : 1, opacity: active ? 0.9 : 0.5 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-full w-full rounded-full border border-[var(--signal)]" />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -left-[2px] -top-[2px] h-1 w-1 rounded-full bg-[var(--signal)]"
      />
    </div>
  );
}
