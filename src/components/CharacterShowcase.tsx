import { useEffect, useRef, useState } from "react";
import { characters, type Character } from "../data/content";
import { gsap, lockScroll } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

function CharacterDialog({ c, onClose }: { c: Character; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    lockScroll(true);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="cd" onClick={onClose}>
      <div
        className="cd__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cd-title"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button className="cd__close" ref={closeRef} onClick={onClose} aria-label="Close character details">×</button>
        <img className="cd__img" src={c.image.src} alt={c.image.alt} style={{ objectPosition: c.image.focus }} />
        <div className="cd__body">
          <p className="eyebrow">{c.epithet}</p>
          <h3 id="cd-title" className="h2">{c.name}</h3>
          {c.sanskrit && (
            <p className="sa-line"><span lang="sa">{c.sanskrit.text}</span> <span className="sa-gloss">{c.sanskrit.meaning}</span></p>
          )}
          <p>{c.intro}</p>
          <h4 className="cd__label">Role in the story</h4>
          <p>{c.role}</p>
          <h4 className="cd__label">Qualities</h4>
          <ul className="chips">{c.qualities.map((q) => <li key={q}>{q}</li>)}</ul>
          <h4 className="cd__label">Why they matter</h4>
          <p>{c.significance}</p>
          <p className="fine">Artwork: a historical painting featuring this figure, shown as a temporary image.</p>
        </div>
      </div>
    </div>
  );
}

export default function CharacterShowcase() {
  const [sel, setSel] = useState<Character | null>(null);

  const ref = useGsap<HTMLElement>(() => {
    gsap.from(".char", {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".chars__grid", start: "top 80%", once: true },
    });
  });

  return (
    <section id="characters" className="chars section" ref={ref} aria-labelledby="chars-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Characters</p>
          <h2 id="chars-title" className="h2">The people who <em>carry the story</em></h2>
          <p className="section-head__lede">Select a figure to read about their role, qualities and meaning.</p>
        </header>
        <ul className="chars__grid">
          {characters.map((c, i) => (
            <li key={c.id} className={`char char--${(i % 4) + 1}`}>
              <button className="char__btn" onClick={() => setSel(c)} aria-haspopup="dialog">
                <img src={c.image.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: c.image.focus }} />
                <span className="char__shade" />
                <span className="char__text">
                  <span className="char__epithet">{c.epithet}</span>
                  <span className="char__name">{c.name}</span>
                  <span className="char__more">
                    {c.qualities.slice(0, 3).join(" · ")}
                  </span>
                  <span className="sr-only">. Open details for {c.name}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {sel && <CharacterDialog c={sel} onClose={() => setSel(null)} />}
    </section>
  );
}
