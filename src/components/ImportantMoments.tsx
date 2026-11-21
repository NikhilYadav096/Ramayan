import { moments } from "../data/content";
import { gsap } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

export default function ImportantMoments() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.utils.toArray<HTMLElement>(".mo__item").forEach((item) => {
      gsap.fromTo(
        item.querySelector("img"),
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
      gsap.from(item.querySelector(".mo__frame"), {
        clipPath: "inset(12% 6% 12% 6%)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 78%", once: true },
      });
      gsap.from(item.querySelectorAll(".mo__num, .mo__title, .mo__text"), {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 70%", once: true },
      });
    });
  });

  return (
    <section id="moments" className="mo section section--dark" ref={ref} aria-labelledby="mo-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Illustrated chapters</p>
          <h2 id="mo-title" className="h2">Moments that <em>shaped the epic</em></h2>
          <p className="section-head__lede">Seven scenes, shown through historical Indian paintings.</p>
        </header>
        <div className="mo__list">
          {moments.map((m, i) => (
            <article className={`mo__item ${i % 2 ? "mo__item--flip" : ""}`} key={m.id}>
              <div className="mo__frame">
                <img src={m.image.src} alt={m.image.alt} loading="lazy" decoding="async" style={{ objectPosition: m.image.focus }} />
              </div>
              <div className="mo__copy">
                <span className="mo__num" aria-hidden="true">{m.chapter}</span>
                <h3 className="mo__title">{m.title}</h3>
                <p className="mo__text">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
