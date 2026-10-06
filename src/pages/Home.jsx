import Hero from "../components/Hero.jsx";
import HomeFestivals from "../components/HomeFestivals.jsx";
import { HeritageIntro, TheerthamSection, DeitySection, PoojaSection, Give, Visit } from "../components/HomeSections.jsx";
import { usePageMeta } from "../components/ui.jsx";

export default function Home() {
  usePageMeta(
    "Thenari Theertham | Sree Madhyarani Sree Rama Temple",
    "Discover Thenari Theertham, Sree Madhyarani Sree Rama Temple — a sacred place of devotion, heritage and tradition.",
  );
  return (
    <>
      <Hero />
      <HeritageIntro />
      <TheerthamSection />
      <DeitySection />
      <PoojaSection />
      <HomeFestivals />
      <Give />
      <Visit />
    </>
  );
}
