import { useState } from "react";
import { storyStages } from "../data/content";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

export default function StoryTimeline() {
  const [open, setOpen] = useState<string | null>(null);

  const ref = useGsap<HTMLElement>(() => {
    gsap.fromTo(
      ".tl__fill",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".tl__list", start: "top 55%", end: "bottom 55%", scrub: true },
      },
    );
    gsap.utils.toArray<HTMLElement>(".tl__item").forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 58%",
        end: "bottom 58%",
        onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        onEnter: () => item.classList.add("is-reached"),
        onLeaveBack: () => item.classList.remove("is-reached"),
      });
      gsap.from(item.querySelector(".tl__media"), {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 80%", once: true },
      });
      gsap.from(item.querySelector(".tl__body"), {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 80%", once: true },
      });
    });
  });

  return (
    <section id="journey" className="tl section" ref={ref} aria-labelledby="tl-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">The Story Journey</p>
          <h2 id="tl-title" className="h2">Nine steps across a <em>kingdom, a forest and a sea</em></h2>
          <p className="section-head__lede">
            Told here after Valmiki's Ramayana. Other traditions vary, and where they do, we say so.
          </p>
        </header>

        <div className="tl__list">
          <div className="tl__rail" aria-hidden="true"><span className="tl__fill" /></div>
          <ol className="tl__items">
          {storyStages.map((s, i) => {
            const isOpen = open === s.id;
            return (
              <li className="tl__item" key={s.id}>
                <span className="tl__dot" aria-hidden="true">{i + 1}</span>
                <figure className="tl__media">
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: s.image.focus }}
                  />
                </figure>
                <div className="tl__body">
                  <p className="tl__kanda">{s.kanda}</p>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.summary}</p>
                  {s.sanskrit && (
                    <p className="sa-line">
                      <span lang="sa">{s.sanskrit.text}</span> <span className="sa-gloss">{s.sanskrit.meaning}</span>
                    </p>
                  )}
                  <button
                    className="link-btn"
                    aria-expanded={isOpen}
                    aria-controls={`tl-detail-${s.id}`}
                    onClick={() => setOpen(isOpen ? null : s.id)}
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                  <div id={`tl-detail-${s.id}`} className={`tl__detail ${isOpen ? "is-open" : ""}`}>
                    <p>{s.detail}</p>
                  </div>
                </div>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
