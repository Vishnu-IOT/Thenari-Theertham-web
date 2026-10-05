import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, templeData as t } from '../data/templeData.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.documentElement.classList.remove('menu-open') }
  }, [open])

  return (
    <header className={`site-header ${solid || open ? 'solid' : ''}`}>
      <div className="header-main">
        <Link to="/" className="brand" aria-label={`${t.name} home`}>
          <img className="brand-chakra" src="/images/temple/chakra.webp" alt="" width="44" height="44" />
          <span className="brand-text"><strong>{t.name}</strong><span>{t.subtitle}</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={l.to === '/donation' ? 'nav-donate' : undefined}>
              <span>{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="drawer" aria-label={open ? 'Close menu' : 'Open menu'}>
          <i /><i /><i />
        </button>
      </div>

      <nav id="drawer" className={`drawer ${open ? 'on' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="drawer-links">
          {navLinks.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1} style={{ '--i': i }}>{l.label}</NavLink>
          ))}
        </div>
        <div className="drawer-foot">
          <p className="mantra">॥ ശ്രീ രാമ ॥</p>
          <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} tabIndex={open ? 0 : -1}>{t.contact.phone}</a>
        </div>
      </nav>
    </header>
  )
}
