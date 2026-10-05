import { useState } from "react";
import { usePageMeta, Reveal } from "../components/Common.jsx";
import { PageHero, TempleTitle } from "../components/Ornaments.jsx";
import { festivals } from "../data/templeData.js";

export default function FestivalsPage() {
  usePageMeta("Festivals & Events | Thenari Theertham", "Annual festivals and observances at Sree Madhyarani Sree Rama Temple.");
  const [first, ...rest] = festivals;
  const [open, setOpen] = useState(null);
  return (
    <div className="page-festivals">
      <PageHero theme="theme-saffron" mal="ഉത്സവങ്ങൾ" title="Festivals & Events" sub="The temple's annual calendar of worship" />
      <section className="fest-feature">
        <div className="container">
          <Reveal className="feature-card">
            <div className="feature-img"><img src={first.image} alt={first.name} /></div>
            <div className="feature-text">
              <p className="feature-small">Principal festival</p>
              <h2>{first.name}</h2>
              <p className="feature-date">{first.date}</p>
              <p>{first.text}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section fest-flags">
        <div className="container">
          <TempleTitle small="Throughout the year" title="Observances" />
          <div className="flag-grid">
            {rest.map((f, i) => (
              <Reveal key={f.name} className="flag-card">
                <div className="flag-top"><h3>{f.name}</h3></div>
                <img src={f.image} alt={f.name} loading="lazy" />
                <div className="flag-body">
                  <p className="flag-date">{f.date}</p>
                  <p>{f.text}</p>
                  <button className="link-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    {open === i ? "Hide Details" : "View Details"}
                  </button>
                  {open === i && <p className="flag-more">[Add full festival details here]</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
