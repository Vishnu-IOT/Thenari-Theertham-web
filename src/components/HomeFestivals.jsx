import { Link } from "react-router-dom";
import { festivals } from "../data/templeData.js";
import { SectionTitle } from "./ui.jsx";

/* Home page festival rail — kept as its own component. */
export default function HomeFestivals() {
  const list = festivals.slice(0, 6);
  return (
    <section className="section occasions">
      <img className="section-rama" src="/images/deity/fill.png" alt="Festivals" />
      <div className="container">
        <SectionTitle
          light
          kicker="Through the year"
          title="Festivals and observances"
          sub="Dates change every year, so please confirm with the temple before you plan a visit."
        />
      </div>
      <div className="rail-wrap">
        <div className="rail" tabIndex={0} aria-label="Festivals, scroll sideways">
          {list.map((f) => (
            <article className="fest" key={f.name}>
              <p className="fest-date">{f.date}</p>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
        <Link to="/festivals" className="fest-more">
          <span>Explore Festivals →</span>
        </Link>
      </div>
    </section>
  );
}
