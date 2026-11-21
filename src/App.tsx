import { useEffect } from "react";
import { initScroll, ScrollTrigger } from "./lib/scroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StoryTimeline from "./components/StoryTimeline";
import CharacterShowcase from "./components/CharacterShowcase";
import ImportantMoments from "./components/ImportantMoments";
import TeachingsSection from "./components/TeachingsSection";
import AskSection from "./components/AskSection";
import RamayanaChatbot from "./components/RamayanaChatbot";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const stop = initScroll();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      stop();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <StoryTimeline />
        <CharacterShowcase />
        <ImportantMoments />
        <TeachingsSection />
        <AskSection />
      </main>
      <Footer />
      <RamayanaChatbot />
    </>
  );
}
