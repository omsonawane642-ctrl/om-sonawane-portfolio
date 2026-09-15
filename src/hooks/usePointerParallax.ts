"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Tracks the cursor once for the whole hero, in two forms:
 *  - `raw`: a plain ref updated every mousemove, read inside the Three.js
 *    animation loop (no React re-renders — needed for a smooth 60fps globe).
 *  - `springX` / `springY`: framer-motion spring values, used to move the
 *    DOM floating cards in sync with the globe using CSS transforms.
 *
 * Disables itself gracefully on touch-only devices, where there is no
 * cursor to follow.
 */
export function usePointerParallax() {
  const raw = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 18, mass: 0.6 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 18, mass: 0.6 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(coarse);
    if (coarse) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      raw.current.x = x;
      raw.current.y = y;
      rawX.set(x);
      rawY.set(y);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return { raw, springX, springY, isTouch };
}
