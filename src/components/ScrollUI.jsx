import { useEffect, useRef, useState } from 'react'

/* Top progress bar + a global --sy variable used for gentle parallax. */
export function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let raf = 0
    const run = () => {
      raf = 0
      const h = document.documentElement
      const y = window.scrollY
      h.style.setProperty('--sy', y.toFixed(0))
      if (bar.current) bar.current.style.transform = `scaleX(${y / Math.max(1, h.scrollHeight - h.clientHeight)})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(run) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    run()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <button className={`back-top ${show ? 'on' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  )
}
