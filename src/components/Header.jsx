import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, templeData as t } from '../data/templeData.js'

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, onClose])
  return (
    <>
      <div className={`drawer-backdrop ${open ? 'on' : ''}`} onClick={onClose} />
      <nav className={`drawer ${open ? 'on' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1}>{l.label}</NavLink>)}
      </nav>
    </>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="site-header">
      <div className="heritage-strip" aria-hidden="true">॥ श्री राम ॥ &nbsp;·&nbsp; ॥ ശ്രീ രാമ ॥</div>
      <div className="header-main">
        <Link to="/" className="brand" aria-label={`${t.name} home`}>
          <span className="emblem" aria-hidden="true">🪔</span>
          <span className="brand-text"><strong>{t.name}</strong><span>{t.subtitle}</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.label}</NavLink>)}
        </nav>
        <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><i /><i /><i /></button>
      </div>
      <div className="header-border" aria-hidden="true" />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
