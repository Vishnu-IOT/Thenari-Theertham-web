import { useEffect, useState } from 'react'
import { templeData as t } from '../data/templeData.js'
export default function Preloader() {
  const [phase, setPhase] = useState('show')
  useEffect(() => {
    const a = setTimeout(() => setPhase('hide'), 1700)
    const b = setTimeout(() => setPhase('gone'), 2300)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])
  if (phase === 'gone') return null
  return (
    <div className={`preloader ${phase}`} role="status" aria-label="Loading">
      <div className="lamp" aria-hidden="true">🪔</div>
      <p className="pre-name">{t.name}</p>
      <p>{t.subtitle}</p>
    </div>
  )
}
