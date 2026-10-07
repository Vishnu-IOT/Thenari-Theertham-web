import { Link } from "react-router-dom";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { PageHero, Reveal, Section, SectionTitle, usePageMeta } from "../components/ui.jsx";

export default function FestivalsPage() {
  const { t, festivals } = useData();
  const { tx } = useLang();
  usePageMeta(tx("festivals.title"), tx("festivals.desc"));
  return (
    <>
      <PageHero kicker={tx("festivals.kicker")} title={tx("festivals.pageTitle")} sub={tx("festivals.sub")} className="hero-festivals">
        <img className="spin-slow" src="/images/temple/festive.png" alt="" />
      </PageHero>

      <Section className="fx-sec">
        <SectionTitle kicker={tx("home.festKicker")} title={tx("common.festTitle")} sub={tx("common.festSub")} />
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
          <p>{tx("festivals.cta")}</p>
          <div className="btn-row">
            <a className="btn btn-maroon" href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>{tx("festivals.call", { phone: t.contact.phone })}</a>
            <Link className="btn btn-line" to="/visit#contact">{tx("festivals.reach")}</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
