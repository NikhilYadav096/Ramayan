import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

/** Starts Lenis smooth scrolling (skipped for reduced-motion users) and syncs it with ScrollTrigger. */
export function initScroll(): () => void {
  if (prefersReducedMotion()) return () => {};
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.9 });
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (t: number) => lenis?.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

export function lockScroll(lock: boolean) {
  document.documentElement.classList.toggle("scroll-locked", lock);
  if (lock) lenis?.stop();
  else lenis?.start();
}

/** Smooth-scroll to a section by id, honouring the fixed header offset. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -8, duration: 1.4 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
  // move keyboard focus to the section for screen-reader/keyboard users
  el.setAttribute("tabindex", "-1");
  (el as HTMLElement).focus({ preventScroll: true });
}

export { gsap, ScrollTrigger };
