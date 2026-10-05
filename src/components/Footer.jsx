import { Link } from 'react-router-dom'
import { navLinks, templeData as t } from '../data/templeData.js'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="divider light" aria-hidden="true"><span>🪔</span></div>
      <div className="container footer-grid">
        <div>
          <h2>{t.name}</h2>
          <p className="footer-sub">{t.subtitle}</p>
          <p className="footer-mantra">॥ श्री राम ॥</p>
        </div>
        <nav aria-label="Footer navigation"><ul>{navLinks.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul></nav>
        {t.social.length > 0 && <ul>{t.social.map((s) => <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>)}</ul>}
      </div>
      <p className="copyright">© 2026 {t.name}, {t.subtitle} &nbsp;·&nbsp; <Link to="/privacy">Privacy</Link></p>
    </footer>
  )
}
