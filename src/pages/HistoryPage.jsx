import { usePageMeta, Reveal } from "../components/Common.jsx";
import { PageHero } from "../components/Ornaments.jsx";
import { RotatingChakra } from "../components/RotatingChakra.jsx";
import { templeData as t } from "../data/templeData.js";

const headings = ["Sthalam", "Ramayana Tradition", "Living Worship"];

export default function HistoryPage() {
  usePageMeta("History | Thenari Theertham", "The sacred history and traditions of Sree Madhyarani Sree Rama Temple, Thenari.");
  return (
    <div className="page-history">
      <PageHero theme="theme-ola" mal="സ്ഥല ചരിത്രം" title="Sthala Charitham" sub="The history and tradition of the temple" />
      <section className="ola-section">
        <div className="container ola-grid">
          <Reveal className="ola-side">
            <div className="rama-medallion">
              <RotatingChakra />
              <img src="/images/temple/heritage.png" alt="Golden sculpture of Sree Rama holding a bow" width="600" height="600" />
            </div>
            <p className="ola-caption">Sree Rama — the heart of the temple's devotional tradition</p>
          </Reveal>
          <div className="ola-leaves">
            {t.heritage.map((p, i) => (
              <Reveal key={i} className="ola-leaf">
                <span className="ola-hole" aria-hidden="true" /><span className="ola-hole r" aria-hidden="true" />
                <h2>{headings[i]}</h2>
                <p>{p}</p>
              </Reveal>
            ))}
            <p className="ola-thread" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}
