import { useEffect, useState } from 'react'
import { templeData as t } from '../data/templeData.js'
import { Diya } from './ui.jsx'

const seen = () => { try { return sessionStorage.getItem('tt-doors') === '1' } catch { return false } }
const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* The temple doors open once per visit. */
export default function Preloader({ onReveal }) {
  const [phase, setPhase] = useState(() => (seen() || reduced() ? 'gone' : 'show'))

  useEffect(() => {
    if (phase === 'gone') { onReveal(); return }
    document.documentElement.classList.add('locked')
    const a = setTimeout(() => setPhase('open'), 1600)
    const b = setTimeout(onReveal, 2100)
    const c = setTimeout(() => {
      setPhase('gone')
      document.documentElement.classList.remove('locked')
      try { sessionStorage.setItem('tt-doors', '1') } catch { /* ignore */ }
    }, 3300)
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(c); document.documentElement.classList.remove('locked') }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'gone') return null
  return (
    <div className={`preloader ${phase}`} role="status" aria-label="Opening the temple">
      <div className="door l" />
      <div className="door r" />
      <div className="pre-core">
        <Diya className="pre-diya" />
        <p className="pre-name">{t.name}</p>
        <p className="pre-sub">{t.subtitle}</p>
      </div>
    </div>
  )
}
