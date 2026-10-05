import { Link } from 'react-router-dom'
import { templeData as t } from '../data/templeData.js'
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-img" src={t.images.hero} alt="Temple entrance surrounded by greenery in soft light (replace with temple photograph)" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">॥ श्री राम ॥</p>
        <h1 id="hero-title">{t.name}</h1>
        <h2>{t.subtitle}</h2>
        <p>{t.tagline}</p>
        <div className="btn-row">
          <Link className="btn btn-gold" to="/temple">Explore the Temple</Link>
          <Link className="btn btn-ghost" to="/visit">Plan Your Visit</Link>
        </div>
      </div>
      <a className="scroll-cue" href="#heritage">Discover the Heritage ↓</a>
    </section>
  )
}
