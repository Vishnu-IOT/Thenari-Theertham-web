import { Link } from "react-router-dom";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { Ornament, istWeekday } from "./ui.jsx";

export default function Footer() {
  const { t, navLinks, weeklyTimings } = useData();
  const { tx } = useLang();
  const now = istWeekday();
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

        <nav aria-label={tx("footer.nav")}>
          <h3>{tx("footer.pages")}</h3>
          <ul>{navLinks.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </nav>

        <div className="ft-timings">
          <h3>{tx("footer.timings")}</h3>
          <ul>
            {weeklyTimings.map((d) => (
              <li key={d.day} className={d.day === now ? "today" : ""}>
                <span className="ft-day">{d.dayLabel}</span>
                <span className="ft-time">{d.morning}<br />{d.evening}</span>
              </li>
            ))}
          </ul>
          <p className="ft-note">{tx("footer.timingsNote")}</p>
        </div>

        <div>
          <h3>{tx("footer.visit")}</h3>
          <p>{t.contact.address}</p>
          <p><a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>{t.contact.phone}</a></p>
          <p><a href={t.location.mapUrl} target="_blank" rel="noreferrer">{tx("footer.directions")}</a></p>
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
