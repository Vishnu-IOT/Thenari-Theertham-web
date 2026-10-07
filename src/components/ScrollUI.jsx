import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
export function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) }
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
}
export function BackToTop() {
  const { tx } = useLang()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return <button className={`back-top ${show ? 'on' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={tx('backTop')}>↑</button>
}
