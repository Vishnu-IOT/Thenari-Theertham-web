import { Link } from "react-router-dom";
import { festivals, templeData as t } from "../data/templeData.js";
import { PageHero, Reveal, Section, SectionTitle, usePageMeta } from "../components/ui.jsx";

export default function FestivalsPage() {
  usePageMeta("Festivals & Events | Thenari Theertham", "Annual festivals and observances at Sree Madhyarani Sree Rama Temple, Elappully, Palakkad.");
  return (
    <>
      <PageHero kicker="ഉത്സവങ്ങൾ" title="Festivals & Events" sub="The temple's annual calendar of worship." className="hero-festivals">
        <img className="spin-slow" src="/images/temple/chakra.webp" alt="" />
      </PageHero>

      <Section className="fx-sec">
        <SectionTitle kicker="Through the year" title="Festivals and observances" sub="Dates change every year, so please confirm with the temple before you plan a visit." />
        <div className="fx-list">
          {festivals.map((f, i) => (
            <Reveal key={f.name} variant={i % 2 ? "right" : "left"} className={`fx-row ${i % 2 ? "rev" : ""}`}>
              <div className="fx-img">
                <img src={f.image} alt={f.name} loading="lazy" decoding="async" />
              </div>
              <div className="fx-body">
                <p className="fx-no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                <p className="fx-date">{f.date}</p>
                <h2>{f.name}</h2>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="fx-cta">
          <p>Planning to attend? Call the temple to confirm this year's dates.</p>
          <div className="btn-row">
            <a className="btn btn-maroon" href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>Call {t.contact.phone}</a>
            <Link className="btn btn-line" to="/visit#contact">Visit & Contact</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
