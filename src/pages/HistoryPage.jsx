import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { videoItems as videos } from "../data/templeData.js";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import {
  Reveal,
  PageHero,
  SectionTitle,
  Ornament,
  usePageMeta,
} from "../components/ui.jsx";

const sectionIds = ["heritage", "deities", "theertham", "seva", "timings"];
if (videos.length) sectionIds.splice(1, 0, "video");

/* Sticky in-page navigation that follows the reader */
function JumpNav() {
  const { tx } = useLang();
  const sections = sectionIds.map((id) => ({ id, label: tx(`history.s.${id}`) }));
  const [active, setActive] = useState("heritage");
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const top = () => {
      if (window.scrollY < 200) setActive("heritage");
    };
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, []);
  return (
    <nav className="jump" aria-label={tx("history.jump")}>
      <div className="container jump-inner">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "on" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(s.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Heritage() {
  const { t } = useData();
  const { tx } = useLang();
  const chapters = t.heritage.map((text, i) => ({ title: tx(`history.ch.${i}`), text }));
  return (
    <section id="heritage" className="section heritage">
      <div className="container heritage-grid">
        <div className="mandala">
          <figure className="mandala-sticky">
            <img
              className="heritage-photo"
              src="/images/gallery/5.jpg"
              alt={tx("history.photoAlt")}
              width="387"
              height="516"
              loading="lazy"
            />
            <figcaption>{tx("history.photoCap")}</figcaption>
          </figure>
        </div>
        <div className="chapters">
          <Reveal>
            <p className="kicker">{tx("common.heritageKicker")}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>{tx("history.heritageH2")}</h2>
          </Reveal>
          {chapters.map((c, i) => (
            <Reveal key={c.title} delay={60} className="chapter">
              <h3>{c.title}</h3>
              <p className={i === 0 ? "dropcap" : ""}>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* YouTube loads only after a tap, so the page stays fast on mobile data */
function VideoCard({ id, title }) {
  const { tx } = useLang();
  const [play, setPlay] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);
  return (
    <figure className="video-card">
      <div className="video-frame">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title || tx("history.videoFallback")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlay(true)}
            aria-label={tx("history.playVideo", { title: title || tx("history.videoFallback") })}
          >
            {thumbOk && (
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                onError={() => setThumbOk(false)}
              />
            )}
            <span className="video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {title && <figcaption>{title}</figcaption>}
    </figure>
  );
}

/* Horizontal scroller with arrow buttons (swipe works on touch) */
function VideoSection() {
  const { tx } = useLang();
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!videos.length) return null;
  const go = (dir) => {
    const el = track.current;
    const card = el.querySelector(".video-slide");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="video" className="section video-sec">
      <div className="container">
        <SectionTitle
          kicker={tx("history.videoKicker")}
          title={tx("history.videoTitle")}
          sub={tx("history.videoSub")}
        />
        <div className="video-scroller">
          <button
            type="button"
            className="video-arrow prev"
            onClick={() => go(-1)}
            disabled={edge.start}
            aria-label={tx("history.videoPrev")}
          >
            ‹
          </button>
          <div className="video-track" ref={track} onScroll={update} tabIndex={0} aria-label={tx("history.videoTrack")}>
            {videos.map((v) => (
              <div className="video-slide" key={v.id}>
                <VideoCard id={v.id} title={v.title} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="video-arrow next"
            onClick={() => go(1)}
            disabled={edge.end}
            aria-label={tx("history.videoNext")}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/* History: alternating photo / text rows, each deity on its own line */
function Deities() {
  const { deities } = useData();
  const { tx } = useLang();
  return (
    <section id="deities" className="section deities-sec">
      <div className="container">
        <SectionTitle kicker={tx("history.deityKicker")} title={tx("history.deityTitle")} />
        <div className="dz-list">
          {deities.map((d, i) => (
            <Reveal key={d.id} as="article" className={`dz-row ${i % 2 ? "flip" : ""}`}>
              <figure className="dz-photo">
                <img src={d.image} alt={d.name} loading="lazy" decoding="async" />
              </figure>
              <div className="dz-text">
                <p className="dz-kicker">{d.id === "rama" ? tx("common.principal") : tx("common.sanctumDeity")}</p>
                <h3>{d.name}</h3>
                <span className="dz-rule" aria-hidden="true" />
                <p className="dz-desc">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Theertham() {
  const { t, waters, surroundings } = useData();
  const { tx } = useLang();
  return (
    <section id="theertham" className="section waters about-waters">
      <div className="ripples" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="container">
        <div className="about-waters-top">
          <div>
            <Reveal>
              <p className="kicker">{tx("common.waters")}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>{t.name}</h2>
            </Reveal>
            <Reveal delay={160}>
              <blockquote className="pull light">
                {t.theertham.quote}
              </blockquote>
            </Reveal>
            <Reveal delay={220}>
              <p className="lead">{t.theertham.text}</p>
            </Reveal>
          </div>
          <Reveal variant="arch" className="waters-photo">
            <img
              src="/images/temple/boat-god.webp"
              alt={tx("history.boatAlt")}
              loading="lazy"
            />
          </Reveal>
        </div>
        <div className="water-cards">
          {waters.map((w, i) => (
            <Reveal key={w.title} delay={i * 120} className="water-card">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="around">
          {surroundings.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="around-item">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* History: dark two-column layout, intro panel + a ledger of offerings */
function Seva() {
  const { poojas } = useData();
  const { tx } = useLang();
  const [open, setOpen] = useState(null);
  return (
    <section id="seva" className="section seva-dark">
      <div className="container sd-wrap">
        <Reveal className="sd-intro">
          <p className="sd-kicker">{tx("history.sevaKicker")}</p>
          <h2>{tx("history.sevaTitle")}</h2>
          <span className="sd-rule" aria-hidden="true" />
          <p>{tx("history.sevaText")}</p>
          <Link className="btn btn-gold" to="/visit#contact">
            {tx("history.ask")}
          </Link>
        </Reveal>

        <ul className="sd-list">
          {poojas.map((p, i) => {
            const on = open === i;
            return (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 60}
                className={`sd-item ${on ? "on" : ""}`}
              >
                <button
                  type="button"
                  className="sd-head"
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  aria-controls={`sd-${i}`}
                >
                  <span className="sd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3c1.6 2.2 2.4 3.8 2.4 5.2a2.4 2.4 0 0 1-4.8 0C9.6 6.8 10.4 5.2 12 3Z" />
                      <path d="M4 13h16c0 3.9-3.6 7-8 7s-8-3.1-8-7Z" />
                    </svg>
                  </span>
                  <span className="sd-main">
                    <b>{p.name}</b>
                    <small>{p.time}</small>
                  </span>
                  <span className="sd-toggle" aria-hidden="true" />
                </button>
                <div className="sd-panel" id={`sd-${i}`} role="region">
                  <div>
                    <p>{p.text}</p>
                    <p className="sd-note">{p.details}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Timings() {
  const { t } = useData();
  const { tx } = useLang();
  return (
    <section id="timings" className="section timings">
      <div className="container">
        <SectionTitle kicker={tx("common.darshan")} title={tx("history.timingsTitle")} />
        <Reveal className="timing-board">
          <div>
            <span>{tx("common.morning")}</span>
            <strong>{t.timings.morning.label}</strong>
          </div>
          <Ornament className="vertical" />
          <div>
            <span>{tx("common.evening")}</span>
            <strong>{t.timings.evening.label}</strong>
          </div>
        </Reveal>
        <p className="center note">{t.timings.note}</p>
        <Reveal className="about-cta">
          <Link className="btn btn-maroon" to="/visit#contact">
            {tx("common.planVisit")}
          </Link>
          <Link className="btn btn-line" to="/donation">
            {tx("history.support")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function HistoryPage() {
  const { t } = useData();
  const { tx } = useLang();
  usePageMeta(tx("history.title"), tx("history.desc"));
  return (
    <>
      <PageHero
        kicker={tx("common.ayodhyaMantra")}
        title={tx("history.pageTitle")}
        sub={t.subtitle}
        className="hero-about"
      >
        <img className="spin-slow" src="/images/temple/history.png" alt="" />
      </PageHero>
      <JumpNav />
      <Heritage />
      <VideoSection />
      <Deities />
      <Theertham />
      <Seva />
      <Timings />
    </>
  );
}
