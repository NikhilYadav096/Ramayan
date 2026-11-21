import { assets } from "../data/assets";
import { gsap } from "../lib/scroll";
import { useGsap } from "../hooks/useGsap";

const paragraph =
  "The Ramayana is among the oldest and most beloved stories ever told. Attributed to the sage Valmiki, it follows Rama, a prince of Ayodhya, through exile, loss and war, and asks how a person should live when duty, love and truth pull in different directions. Across India and much of Asia, it has been sung, danced, painted and retold in countless languages for more than two thousand years.";

export default function AboutSection() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.fromTo(
      ".about__word",
      { opacity: 0.18 },
      {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: { trigger: ".about__text", start: "top 78%", end: "bottom 55%", scrub: true },
      },
    );
    gsap.from(".about__frame", {
      clipPath: "inset(30% 8% 0% 8% round 200px 200px 0 0)",
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about__frame", start: "top 82%" },
    });
    gsap.to(".about__frame img", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: { trigger: ".about__frame", start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  return (
    <section id="about" className="about section" ref={ref} aria-labelledby="about-title">
      <div className="wrap about__grid">
        <div className="about__copy">
          <p className="eyebrow">The Epic</p>
          <h2 id="about-title" className="h2">
            A story older than <em>memory</em>
          </h2>
          <p className="about__text">
            {paragraph.split(" ").map((w, i) => (
              <span className="about__word" key={i}>{w} </span>
            ))}
          </p>
          <ul className="about__facts">
            <li><strong>7</strong> kandas, or books</li>
            <li><strong>24,000</strong> verses, traditionally</li>
            <li><strong>Many</strong> retellings across Asia</li>
          </ul>
        </div>

        <figure className="about__figure">
          <div className="about__frame">
            <img
              src={assets.aboutManuscript.src}
              alt={assets.aboutManuscript.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: assets.aboutManuscript.focus }}
            />
          </div>
          <figcaption className="about__sa">
            <span lang="sa" className="sa-big">धर्मो रक्षति रक्षितः</span>
            <span className="sa-gloss">
              “Dharma protects those who protect it.” A well-known saying from the wider Sanskrit tradition (found in the Manusmriti and Mahabharata), often linked to the epics' ideals, not a line from Valmiki's Ramayana.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
