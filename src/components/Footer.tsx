import { assets } from "../data/assets";
import { gsap } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";
import { scrollToId } from "../lib/scroll";
import { navItems } from "./Navbar";

export default function Footer() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from(".foot__quote, .foot__sa", {
      y: 30,
      opacity: 0,
      duration: 1.1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ".foot__hero", start: "top 75%", once: true },
    });
    gsap.fromTo(
      ".foot__bg img",
      { yPercent: -6 },
      { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".foot__hero", start: "top bottom", end: "bottom top", scrub: true } },
    );
  });

  return (
    <footer className="foot" ref={ref}>
      <div className="foot__hero">
        <div className="foot__bg" aria-hidden="true">
          <img src={assets.closing.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: assets.closing.focus }} />
          <span />
        </div>
        <div className="wrap foot__center">
          <p className="foot__sa" lang="sa">कथा</p>
          <p className="sa-gloss foot__sa-gloss">Katha, a story that is told</p>
          <blockquote className="foot__quote">
            Some stories are not just told. They are lived, remembered, and passed on.
          </blockquote>
        </div>
      </div>
      <div className="wrap foot__bar">
        <nav aria-label="Footer" className="foot__nav">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}>{n.label}</a>
          ))}
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollToId("top"); }}>Back to top ↑</a>
        </nav>
        <p className="fine">
          Narrative follows Valmiki's Ramayana; later and regional traditions are noted where they differ. Artwork:
          public-domain and CC0 historical paintings via Wikimedia Commons, used as temporary images (see ASSET_SOURCES.md).
          An educational project; not an authoritative religious text.
        </p>
      </div>
    </footer>
  );
}
