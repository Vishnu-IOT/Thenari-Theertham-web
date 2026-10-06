import { Link } from "react-router-dom";
import { navLinks, templeData as t, weeklyTimings } from "../data/templeData.js";
import { Ornament } from "./ui.jsx";

const today = () =>
  new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "long" }).format(new Date());

export default function Footer() {
  const now = today();
  return (
    <footer className="site-footer">
      <div className="ft-watermark" aria-hidden="true">
        <img src="/images/temple/chakra.webp" alt="" />
        <span lang="ml">ശ്രീ രാമ</span>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/temple/chakra.webp" alt="" width="72" height="72" loading="lazy" />
          <h2>{t.name}</h2>
          <p>{t.subtitle}</p>
          <p className="mantra">॥ ശ്രീ രാമ ॥</p>
        </div>

        <nav aria-label="Footer navigation">
          <h3>Pages</h3>
          <ul>{navLinks.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </nav>

        <div className="ft-timings">
          <h3>Darshan timings</h3>
          <ul>
            {weeklyTimings.map((d) => (
              <li key={d.day} className={d.day === now ? "today" : ""}>
                <span className="ft-day">{d.day}</span>
                <span className="ft-time">{d.morning}<br />{d.evening}</span>
              </li>
            ))}
          </ul>
          <p className="ft-note">Timings may vary on festival days.</p>
        </div>

        <div>
          <h3>Visit</h3>
          <p>{t.contact.address}</p>
          <p><a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>{t.contact.phone}</a></p>
          <p><a href={t.location.mapUrl} target="_blank" rel="noreferrer">Get directions →</a></p>
          {t.social.length > 0 && (
            <ul className="footer-social">{t.social.map((s) => <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>)}</ul>
          )}
        </div>
      </div>

      <Ornament className="footer-orn" />
      <p className="copyright">© {new Date().getFullYear()} {t.name}, {t.subtitle}</p>
    </footer>
  );
}
