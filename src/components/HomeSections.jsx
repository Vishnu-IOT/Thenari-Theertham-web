import { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import {
  Diya,
  IconPhone,
  IconPin,
  Reveal,
  Section,
  SectionTitle,
} from "./ui.jsx";

export function HeritageIntro() {
  const { t } = useData();
  const { tx } = useLang();
  return (
    <Section id="heritage" className="heritage">
      <div className="split">
        <Reveal className="frames heritage-visual">
          <img
            className="rotating-chakra"
            src="/images/temple/chakra.webp"
            alt=""
            aria-hidden="true"
          />
          <img
            className="rama-image"
            src="/images/temple/heritage.webp"
            alt={tx("home.ramaAlt")}
            loading="lazy"
            width="1254"
            height="1254"
          />
        </Reveal>
        <Reveal>
          <p className="label">{tx("common.heritageKicker")}</p>
          <h2>{tx("home.heritageH2")}</h2>
          <div className="divider left" aria-hidden="true">
            <span />
          </div>
          {t.heritage.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Link className="btn btn-maroon" to="/history">
            {tx("home.heritageBtn")}
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

export function TheerthamSection() {
  const { t } = useData();
  const { tx } = useLang();
  return (
    <section className="theertham" aria-labelledby="th-title">
      <div className="ripples" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="container split">
        <Reveal className="th-images">
          <img
            className="big"
            src="/images/temple/boat-god.webp"
            alt={tx("home.boatAlt")}
            loading="lazy"
          />
          <img
            className="small"
            src={t.images.theertham2}
            alt={tx("home.boatAlt2")}
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <p className="label light">{tx("common.waters")}</p>
          <h2 id="th-title">{t.name}</h2>
          <p className="quote">{t.theertham.quote}</p>
          <p>{t.theertham.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* Home: three equal, aligned sanctum cards (photo on top, text below) */
export function DeitySection() {
  const { homeDeities } = useData();
  const { tx } = useLang();
  return (
    <Section id="deities">
      <SectionTitle
        kicker={tx("home.deityKicker")}
        title={tx("home.deityTitle")}
        sub={tx("home.deitySub")}
      />
      <div className="sc-grid">
        {homeDeities.map((d, i) => (
          <Reveal key={d.id} delay={i * 120} as="article" className="sc-card">
            <div className="sc-photo">
              <img src={d.image} alt={d.name} loading="lazy" decoding="async" width="640" height="800" />
            </div>
            <div className="sc-body">
              <span className="sc-tag">{d.id === "rama" ? tx("common.principal") : tx("common.sanctumDeity")}</span>
              <h3>{d.name}</h3>
              <p>{d.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* Pooja & Seva: aligned offering cards with an expandable details drawer */
function PoojaCard({ pooja }) {
  const { tx } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <article className={`ps-card ${open ? "open" : ""}`}>
      <div className="ps-top">
        <span className="ps-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c1.6 2.2 2.4 3.8 2.4 5.2a2.4 2.4 0 0 1-4.8 0C9.6 6.8 10.4 5.2 12 3Z" />
            <path d="M4 13h16c0 3.9-3.6 7-8 7s-8-3.1-8-7Z" />
          </svg>
        </span>
        <span className="ps-time">{pooja.time}</span>
      </div>
      <h3>{pooja.name}</h3>
      <p className="ps-text">{pooja.text}</p>
      <div className="ps-drawer">
        <p>{pooja.details}</p>
      </div>
      <button
        type="button"
        className="ps-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? tx("home.hideDetails") : tx("home.viewDetails")}
        <i aria-hidden="true" />
      </button>
    </article>
  );
}

export function PoojaSection() {
  const { poojas } = useData();
  const { tx } = useLang();
  return (
    <Section id="pooja" className="tint">
      <SectionTitle
        kicker={tx("home.poojaKicker")}
        title={tx("home.poojaTitle")}
        sub={tx("home.poojaSub")}
      />
      <div className="ps-grid">
        {poojas.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 100}>
            <PoojaCard pooja={p} />
          </Reveal>
        ))}
      </div>
      <p className="ps-note">
        {tx("home.poojaNote", { link: <Link to="/visit#contact">{tx("home.poojaNoteLink")}</Link> })}
      </p>
    </Section>
  );
}

export function Give() {
  const { tx } = useLang();
  return (
    <section className="give">
      <div className="container give-inner">
        <Reveal variant="zoom" className="give-lamp">
          <Diya />
        </Reveal>
        <div className="give-copy">
          <Reveal>
            <h2>{tx("home.giveTitle")}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>{tx("home.giveText")}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link className="btn btn-maroon" to="/donation">
              {tx("home.giveBtn")}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const { t } = useData();
  const { tx } = useLang();
  return (
    <section className="section visit">
      <div className="container visit-grid">
        <Reveal className="visit-times">
          <p className="kicker">{tx("common.darshan")}</p>
          <div className="time-block">
            <span>{tx("common.morning")}</span>
            <strong>{t.timings.morning.label}</strong>
          </div>
          <div className="time-block">
            <span>{tx("common.evening")}</span>
            <strong>{t.timings.evening.label}</strong>
          </div>
          <p className="note">{t.timings.note}</p>
        </Reveal>
        <Reveal delay={150} className="visit-where">
          <p className="kicker">{tx("home.findUs")}</p>
          <h2>{tx("home.place")}</h2>
          <p className="icon-line">
            <IconPin /> <span>{t.contact.address}</span>
          </p>
          <p className="icon-line">
            <IconPhone />{" "}
            <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>
              {t.contact.phone}
            </a>
          </p>
          <div className="btn-row">
            <a
              className="btn btn-gold"
              href={t.location.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {tx("home.directions")}
            </a>
            <Link className="btn btn-ghost" to="/visit#contact">
              {tx("home.contactBtn")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
