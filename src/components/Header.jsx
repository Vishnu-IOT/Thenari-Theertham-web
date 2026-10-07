import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useData } from '../data/useData.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import LangSwitch from './LangSwitch.jsx'
import { istWeekday } from './ui.jsx'

function MobileMenu({ open, onClose }) {
  const { navLinks } = useData()
  const { tx } = useLang()
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, onClose])
  return (
    <>
      <div className={`drawer-backdrop ${open ? 'on' : ''}`} onClick={onClose} />
      <nav className={`drawer ${open ? 'on' : ''}`} aria-label={tx('header.mobile')} aria-hidden={!open}>
        {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1}>{l.label}</NavLink>)}
      </nav>
    </>
  )
}

/* Scrolling Sunday-Saturday darshan timings above the navbar */
function TimingMarquee() {
  const { weeklyTimings } = useData()
  const { tx } = useLang()
  const now = istWeekday()
  const items = weeklyTimings.map((d) => (
    <span className={`tm-item ${d.day === now ? 'today' : ''}`} key={d.day}>
      <b>{d.dayLabel}</b> {d.morning} <i aria-hidden="true">·</i> {d.evening}
      <em aria-hidden="true">◆</em>
    </span>
  ))
  return (
    <div className="timing-marquee" role="group" aria-label={tx('header.marqueeAria')}>
      <span className="tm-label">{tx('header.darshan')}</span>
      <div className="tm-window">
        <div className="tm-run">
          <div className="tm-track">{items}</div>
          <div className="tm-track" aria-hidden="true">{items}</div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const { t, navLinks } = useData()
  const { tx } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="site-header">
      <TimingMarquee />
      <div className="header-main">
        <Link to="/" className="brand" aria-label={tx('header.home', { name: t.name })}>
          <span className="emblem" aria-hidden="true">🪔</span>
          <span className="brand-text"><strong>{t.name}</strong><span>{t.subtitle}</span></span>
        </Link>
        <nav className="desktop-nav" aria-label={tx('header.main')}>
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={l.to === '/donation' ? 'nav-donate' : undefined}>
            <span>{l.label}</span>
          </NavLink>)}
        </nav>
        <div className="lng-tools">
          <LangSwitch />
          <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={tx('header.menu')}><i /><i /><i /></button>
        </div>
      </div>
      <div className="header-border" aria-hidden="true" />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
