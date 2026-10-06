import { useState } from "react";
import { Link } from "react-router-dom";
import { templeData as t, weeklyTimings } from "../data/templeData.js";
import { IconChat, IconClock, IconMail, IconPhone, IconPin, PageHero, Reveal, Section, SectionTitle, usePageMeta } from "../components/ui.jsx";

const tel = `tel:${t.contact.phone.replace(/\s/g, "")}`;

function Bell() {
  return (
    <svg className="hero-bell" viewBox="0 0 120 170" aria-hidden="true">
      <defs>
        <linearGradient id="vcBell" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a8741c" />
          <stop offset="0.45" stopColor="#f1d489" />
          <stop offset="1" stopColor="#a8741c" />
        </linearGradient>
      </defs>
      <line x1="60" y1="0" x2="60" y2="34" stroke="#d4a23a" strokeWidth="3" />
      <circle cx="60" cy="38" r="7" fill="url(#vcBell)" />
      <path d="M28 118 C28 76 40 46 60 44 C80 46 92 76 92 118 L104 130 L16 130 Z" fill="url(#vcBell)" />
      <circle cx="60" cy="140" r="9" fill="url(#vcBell)" />
    </svg>
  );
}

function InfoCards() {
  const cards = [
    { icon: <IconPhone />, title: "Call the temple", body: <a href={tel}>{t.contact.phone}</a> },
    { icon: <IconPin />, title: "Address", body: <span>{t.contact.address}</span> },
    { icon: <IconClock />, title: "Darshan hours", body: <span>{t.contact.hours}</span> },
  ];
  if (t.contact.email) cards.push({ icon: <IconMail />, title: "Email", body: <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a> });
  return (
    <div className="vc-cards">
      {cards.map((c, i) => (
        <Reveal key={c.title} delay={i * 100} className="vc-card">
          <span className="vc-ic">{c.icon}</span>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

function WeekTable() {
  return (
    <Reveal className="vc-week">
      <h3>Darshan, Sunday to Saturday</h3>
      <table>
        <thead><tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Evening</th></tr></thead>
        <tbody>
          {weeklyTimings.map((d) => (
            <tr key={d.day}><th scope="row">{d.day}</th><td>{d.morning}</td><td>{d.evening}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="note">{t.timings.note}</p>
    </Reveal>
  );
}

function MapAndRoutes() {
  const [i, setI] = useState(0);
  return (
    <div className="vc-routes">
      <Reveal variant="left" className="vc-map">
        <iframe title="Map showing Thenari Theertham Sree Rama Temple" src={t.location.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a className="btn btn-gold vc-map-btn" href={t.location.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
      </Reveal>
      <Reveal variant="right" className="vc-panel">
        <div className="vc-tabs" role="tablist" aria-label="Ways to reach">
          {t.reach.map((r, k) => (
            <button key={r.mode} role="tab" id={`vc-tab-${k}`} aria-selected={i === k} aria-controls="vc-body" className={i === k ? "on" : ""} onClick={() => setI(k)}>{r.mode}</button>
          ))}
        </div>
        <div id="vc-body" role="tabpanel" aria-labelledby={`vc-tab-${i}`} key={i} className="vc-body">
          <h3>{t.reach[i].mode}</h3>
          <p>{t.reach[i].text}</p>
        </div>
      </Reveal>
    </div>
  );
}

function MessageForm() {
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim() && f.message.trim();

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    const text = `Namaskaram. ${f.message.trim()}\n\n${f.name.trim()}${f.phone.trim() ? `\nPhone: ${f.phone.trim()}` : ""}`;
    window.open(`https://wa.me/${t.contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <div className="vc-message">
      <Reveal className="vc-copy">
        <p className="kicker">Write to us</p>
        <h2>Questions about a pooja, a visit or an offering?</h2>
        <p>Send a note and the temple will reply. Your message opens in WhatsApp, ready to send, so you can read it once more before it goes.</p>
        <p className="icon-line"><IconChat /> <span>Prefer to talk? Call <a href={tel}>{t.contact.phone}</a> during darshan hours.</span></p>
        <p className="note">Not sure about dates? See the <Link to="/festivals">festival list</Link> or <Link to="/donation">make an offering</Link>.</p>
      </Reveal>

      <Reveal delay={120} as="form" className="vc-form" onSubmit={submit} noValidate>
        <label><span>Your name</span><input value={f.name} onChange={set("name")} autoComplete="name" required /></label>
        <label><span>Phone number <em>(optional)</em></span><input value={f.phone} onChange={set("phone")} type="tel" autoComplete="tel" inputMode="tel" /></label>
        <label><span>Your message</span><textarea rows="5" value={f.message} onChange={set("message")} required /></label>
        <button className="btn btn-maroon" type="submit" disabled={!valid}>Send on WhatsApp</button>
        <p className="vc-ok" role="status">{sent ? "WhatsApp should now be open with your message. Please press send there." : ""}</p>
      </Reveal>
    </div>
  );
}

export default function VisitContactPage() {
  usePageMeta("Visit & Contact | Thenari Theertham", "How to reach Thenari Sree Rama Temple, Elappully, Palakkad — address, timings, map, phone and a message form.");
  return (
    <>
      <PageHero kicker="Namaskaram" title="Visit & Contact" sub="Plan your darshan and reach the temple office." className="hero-visit">
        <Bell />
      </PageHero>

      <Section id="visit" className="vc-sec">
        <SectionTitle kicker="Pilgrimage" title="Visit the temple" sub={t.contact.address} />
        <InfoCards />
        <WeekTable />
        <MapAndRoutes />
      </Section>

      <Section id="contact" className="vc-sec vc-contact">
        <MessageForm />
      </Section>
    </>
  );
}
