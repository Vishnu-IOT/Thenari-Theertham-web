import Hero from "../components/Hero.jsx";
import HomeFestivals from "../components/HomeFestivals.jsx";
import { HeritageIntro, TheerthamSection, DeitySection, PoojaSection, Give, Visit } from "../components/HomeSections.jsx";
import { usePageMeta } from "../components/ui.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function Home() {
  const { tx } = useLang();
  usePageMeta(tx("home.title"), tx("home.desc"));
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
