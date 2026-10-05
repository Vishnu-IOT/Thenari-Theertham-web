import { Link } from 'react-router-dom'
import { navLinks, templeData as t } from '../data/templeData.js'
import { Ornament } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
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
        <div>
          <h3>Visit</h3>
          <p>{t.contact.address}</p>
          <p className="footer-hours">{t.contact.hours}</p>
          <p><a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a></p>
          {t.social.length > 0 && (
            <ul className="footer-social">{t.social.map((s) => <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>)}</ul>
          )}
        </div>
      </div>
      <Ornament className="footer-orn" />
      <p className="copyright">© {new Date().getFullYear()} {t.name}, {t.subtitle}</p>
    </footer>
  )
}
