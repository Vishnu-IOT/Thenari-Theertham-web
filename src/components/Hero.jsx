import { Link } from "react-router-dom";
import { templeData as t } from "../data/templeData.js";
import { Embers } from "./ui.jsx";

export default function Hero() {
  const words = t.name.split(" ");
  const scrollNext = (e) => {
    e.preventDefault();
    document.getElementById("heritage")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Embers />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="mantra rise" style={{ "--d": ".1s" }}>
            ॥ ശ്രീ രാമ ॥
          </p>
          <h1 id="hero-title" className="hero-title">
            {words.map((w, i) => (
              <span className="w" key={w}>
                <i style={{ "--d": `${0.2 + i * 0.15}s` }}>{w}</i>
              </span>
            ))}
          </h1>
          <p className="hero-sub rise" style={{ "--d": ".6s" }}>
            {t.subtitle}
          </p>
          <p className="hero-tag rise" style={{ "--d": ".75s" }}>
            {t.tagline}
          </p>
          <div className="btn-row rise" style={{ "--d": ".9s" }}>
            <Link className="btn btn-gold" to="/history">
              Discover the temple
            </Link>
            <Link className="btn btn-ghost" to="/donation">
              Make an offering
            </Link>
          </div>
        </div>

        <div className="hero-stage">
          <span className="hero-halo" aria-hidden="true" />
          <div className="hero-chakra-wrap" aria-hidden="true">
            <img
              className="hero-chakra"
              src="/images/temple/chakra.webp"
              alt=""
            />
          </div>
          <img
            className="hero-deity"
            src="/images/temple/heritage.webp"
            width="1000"
            height="1000"
            alt="Golden sculpture of Sree Rama holding a bow, with Devi standing beside him"
          />
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#heritage"
        onClick={scrollNext}
        aria-label="Scroll down"
      >
        <span />
      </a>
    </section>
  );
}
