import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";
import { Section, SectionHeading, usePageMeta } from "../components/Common.jsx";
import {
  HeritageIntro,
  TheerthamSection,
  DeitySection,
  PoojaSection,
  TempleTimings,
  FestivalSection,
  ArchitectureSection,
  VisitSection,
  ContactSection,
} from "../components/Sections.jsx";

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
      {/* <TempleTimings /> */}
      <FestivalSection />
      {/* <ArchitectureSection /> */}
      {/* <Section id="gallery-preview">
        <SectionHeading label="Darshan in pictures" title="Gallery" />
        <Gallery preview />
        <p className="center">
          <Link className="btn btn-maroon" to="/gallery">
            View Full Gallery →
          </Link>
        </p>
      </Section> */}
      {/* <VisitSection /> */}
      <ContactSection />
    </>
  );
}
