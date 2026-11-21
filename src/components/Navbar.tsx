import { useEffect, useState } from "react";
import { scrollToId } from "../lib/scroll";

export const navItems = [
  { id: "about", label: "The Epic" },
  { id: "journey", label: "The Journey" },
  { id: "characters", label: "Characters" },
  { id: "moments", label: "Moments" },
  { id: "teachings", label: "Teachings" },
  { id: "ask", label: "Ask" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${solid || open ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={go("top")} aria-label="Ramayana, back to top">
          <span lang="sa" className="nav__brand-sa">रामायण</span>
          <span className="nav__brand-en">Ramayana</span>
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav__bars" aria-hidden="true" />
        </button>
        <nav id="site-menu" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              aria-current={active === n.id ? "true" : undefined}
              className={active === n.id ? "is-active" : ""}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
