import { teachings } from "../data/content";
import { gsap } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

export default function TeachingsSection() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from(".tc", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ".tc__grid", start: "top 82%", once: true },
    });
  });

  return (
    <section id="teachings" className="teach section" ref={ref} aria-labelledby="teach-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Teachings &amp; Values</p>
          <h2 id="teach-title" className="h2">Ideas that <em>keep the epic alive</em></h2>
          <p className="section-head__lede">
            These are common ways of reading the story. Traditions and readers interpret them differently, and the
            epic often shows values in tension rather than offering simple rules.
          </p>
        </header>
        <ul className="tc__grid">
          {teachings.map((t) => (
            <li className="tc" key={t.id}>
              <span className="tc__sa" lang="sa">{t.sanskrit}</span>
              <span className="tc__roman">{t.roman}</span>
              <h3 className="tc__title">{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
