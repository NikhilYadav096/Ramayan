import { assets } from "../data/assets";
import { gsap, scrollToId } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

const lines = ["An Epic That", "Lives Beyond", "Time"];

export default function HeroSection() {
  const ref = useGsap<HTMLElement>(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero__img", { scale: 1.18, duration: 2.6, ease: "power2.out" }, 0)
      .from(".hero__veil", { opacity: 0, duration: 1.2 }, 0)
      .from(".hero__eyebrow", { y: 16, opacity: 0, duration: 0.9 }, 0.4)
      .from(".hero__line > span", { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.55)
      .from(".hero__lede, .hero__cta", { y: 20, opacity: 0, duration: 0.9, stagger: 0.12 }, 1.2)
      .from(".hero__scroll", { opacity: 0, duration: 1 }, 1.8);
    gsap.to(".hero__img", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
    });
  });

  const hv = assets.heroVideo;
  return (
    <section id="top" className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden={hv ? undefined : "true"}>
        <img
          className="hero__img"
          src={assets.hero.src}
          alt={assets.hero.alt}
          style={{ objectPosition: assets.hero.focus }}
          fetchPriority="high"
        />
        {hv && (
          <video className="hero__video" src={hv.src} poster={hv.poster} autoPlay muted loop playsInline preload="none" />
        )}
        <div className="hero__veil" />
      </div>

      <svg className="hero__mandala" viewBox="0 0 200 200" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          {Array.from({ length: 16 }).map((_, i) => (
            <ellipse key={i} cx="100" cy="100" rx="14" ry="62" transform={`rotate(${i * 22.5} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="22" />
        </g>
      </svg>

      <div className="wrap hero__content">
        <p className="hero__eyebrow eyebrow">
          <span lang="sa">रामायण</span> <span className="eyebrow__gloss">— the journey of Rama</span>
        </p>
        <h1 id="hero-title" className="hero__title">
          {lines.map((l) => (
            <span className="hero__line" key={l}>
              <span>{l}</span>
            </span>
          ))}
        </h1>
        <p className="hero__lede">
          A timeless story of dharma, courage, devotion, relationships and responsibility, told for more than two thousand
          years and still being told.
        </p>
        <a className="btn" href="#about" onClick={(e) => { e.preventDefault(); scrollToId("about"); }}>
          <span className="hero__cta">Explore the Journey</span>
        </a>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
