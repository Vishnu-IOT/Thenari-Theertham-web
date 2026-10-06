import { useState } from "react";
import { Link } from "react-router-dom";
import { templeData as t, deities, poojas } from "../data/templeData.js";
import { Diya, IconPhone, IconPin, Reveal, Section, SectionTitle } from "./ui.jsx";

export function HeritageIntro() {
  return (
    <Section id="heritage" className="heritage">
      <div className="split">
        <Reveal className="frames heritage-visual">
          <img className="rotating-chakra" src="/images/temple/chakra.webp" alt="" aria-hidden="true" />
          <img
            className="rama-image"
            src="/images/temple/heritage.webp"
            alt="Golden sculpture of Sree Rama holding a bow, with a figure standing beside him"
            loading="lazy"
            width="1254"
            height="1254"
          />
        </Reveal>
        <Reveal>
          <p className="label">Our heritage</p>
          <h2>A Sacred Place of Faith and Tradition</h2>
          <div className="divider left" aria-hidden="true"><span /></div>
          {t.heritage.map((p, i) => <p key={i}>{p}</p>)}
          <Link className="btn btn-maroon" to="/history">Discover Our History →</Link>
        </Reveal>
      </div>
    </Section>
  );
}

export function TheerthamSection() {
  return (
    <section className="theertham" aria-labelledby="th-title">
      <div className="ripples" aria-hidden="true"><i /><i /><i /></div>
      <div className="container split">
        <Reveal className="th-images">
          <img className="big" src="/images/temple/boat-god.webp" alt="Golden boat on the sacred water of Thenari Theertham" loading="lazy" />
          <img className="small" src={t.images.theertham2} alt="The boat on the theertham at dusk" loading="lazy" />
        </Reveal>
        <Reveal>
          <p className="label light">The sacred waters</p>
          <h2 id="th-title">{t.name}</h2>
          <p className="quote">{t.theertham.quote}</p>
          <p>{t.theertham.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function DeitySection() {
  return (
    <Section id="deities">
      <SectionTitle kicker="Sanctum" title="Temple deities" sub="Sree Rama, the principal deity of the temple." />
      <div className="deity-list">
        {deities.map((d) => (
          <Reveal key={d.name} className="card deity-card">
            <div className="img-wrap arch">
              <img src={d.image} alt={d.name} loading="lazy" width="700" height="900" />
            </div>
            <h3>{d.name}</h3>
            <p>{d.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PoojaCard({ pooja }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card pooja-card">
      <h3>{pooja.name}</h3>
      <p className="time">{pooja.time}</p>
      <p>{pooja.text}</p>
      <div className={`more ${open ? "open" : ""}`}><p>{pooja.details}</p></div>
      <button className="link-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? "Hide Details" : "View Details"}
      </button>
    </article>
  );
}

export function PoojaSection() {
  return (
    <Section id="pooja" className="tint">
      <SectionTitle kicker="Daily worship" title="Pooja & Seva" />
      <div className="pooja-list">
        {poojas.map((p) => <PoojaCard key={p.name} pooja={p} />)}
      </div>
    </Section>
  );
}

export function Give() {
  return (
    <section className="give">
      <div className="container give-inner">
        <Reveal variant="zoom" className="give-lamp"><Diya /></Reveal>
        <div className="give-copy">
          <Reveal><h2>Offer a lamp, a meal, a prayer</h2></Reveal>
          <Reveal delay={100}><p>Every offering helps the daily worship, the care of the theertham and the festivals that bring the community together.</p></Reveal>
          <Reveal delay={200}><Link className="btn btn-maroon" to="/donation">Give to the temple</Link></Reveal>
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="section visit">
      <div className="container visit-grid">
        <Reveal className="visit-times">
          <p className="kicker">Darshan</p>
          <div className="time-block"><span>Morning</span><strong>{t.timings.morning.label}</strong></div>
          <div className="time-block"><span>Evening</span><strong>{t.timings.evening.label}</strong></div>
          <p className="note">{t.timings.note}</p>
        </Reveal>
        <Reveal delay={150} className="visit-where">
          <p className="kicker">Find us</p>
          <h2>Elappully, Palakkad</h2>
          <p className="icon-line"><IconPin /> <span>{t.contact.address}</span></p>
          <p className="icon-line"><IconPhone /> <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>{t.contact.phone}</a></p>
          <div className="btn-row">
            <a className="btn btn-gold" href={t.location.mapUrl} target="_blank" rel="noreferrer">Get directions</a>
            <Link className="btn btn-ghost" to="/visit#contact">Contact the temple</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
