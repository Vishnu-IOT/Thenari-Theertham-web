import { Link } from "react-router-dom";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { SectionTitle } from "./ui.jsx";

/* Home page festival rail — kept as its own component. */
export default function HomeFestivals() {
  const { festivals } = useData();
  const { tx } = useLang();
  const list = festivals.slice(0, 6);
  return (
    <section className="section occasions">
      <img className="section-rama" src="/images/deity/fill.png" alt={tx("home.festAlt")} />
      <div className="container">
        <SectionTitle
          light
          kicker={tx("home.festKicker")}
          title={tx("common.festTitle")}
          sub={tx("common.festSub")}
        />
      </div>
      <div className="rail-wrap">
        <div className="rail" tabIndex={0} aria-label={tx("home.railAria")}>
          {list.map((f) => (
            <article className="fest" key={f.name}>
              <p className="fest-date">{f.date}</p>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
        <Link to="/festivals" className="fest-more">
          <span>{tx("home.festMore")}</span>
        </Link>
      </div>
    </section>
  );
}
