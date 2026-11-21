import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/scroll";

/**
 * Runs `setup` inside a scoped gsap.context and reverts it on unmount.
 * Skipped entirely under prefers-reduced-motion, so content stays in its natural, visible state.
 */
export function useGsap<T extends HTMLElement = HTMLElement>(setup: () => void) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    const ctx = gsap.context(setup, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}
