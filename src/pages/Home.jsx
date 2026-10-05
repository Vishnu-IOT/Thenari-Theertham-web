import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { templeData as t, deities, festivals } from '../data/templeData.js'
import { Reveal, Embers, SectionTitle, Ornament, Diya, usePageMeta, useTempleStatus, IconPin, IconPhone } from '../components/ui.jsx'

/* ============ Hero: the memorable moment ============ */
function Hero() {
  const words = t.name.split(' ')
  const scrollNext = (e) => {
    e.preventDefault()
    document.getElementById('status')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Embers />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="mantra rise" style={{ '--d': '.1s' }}>॥ ശ്രീ രാമ ॥</p>
          <h1 id="hero-title" className="hero-title">
            {words.map((w, i) => (
              <span className="w" key={w}><i style={{ '--d': `${0.2 + i * 0.15}s` }}>{w}</i></span>
            ))}
          </h1>
          <p className="hero-sub rise" style={{ '--d': '.6s' }}>{t.subtitle}</p>
          <p className="hero-tag rise" style={{ '--d': '.75s' }}>{t.tagline}</p>
          <div className="btn-row rise" style={{ '--d': '.9s' }}>
            <Link className="btn btn-gold" to="/about">Discover the temple</Link>
            <Link className="btn btn-ghost" to="/donation">Make an offering</Link>
          </div>
        </div>

        <div className="hero-stage">
          <span className="hero-halo" aria-hidden="true" />
          <div className="hero-chakra-wrap" aria-hidden="true">
            <img className="hero-chakra" src="/images/temple/chakra.webp" alt="" />
          </div>
          <img className="hero-deity" src="/images/temple/heritage.webp" width="1000" height="1000" alt="Golden sculpture of Sree Rama holding a bow, with Devi standing beside him" />
        </div>
      </div>
      <a className="scroll-cue" href="#status" onClick={scrollNext} aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}

/* ============ Live darshan status ============ */
function Status() {
  const s = useTempleStatus()
  return (
    <section id="status" className="status">
      <div className="container status-inner">
        <p className={`status-live ${s.open ? 'open' : ''}`}>
          <span className="dot" aria-hidden="true" />
          {s.text}
        </p>
        <p className="status-times">
          <span>Morning {t.timings.morning.label}</span>
          <span>Evening {t.timings.evening.label}</span>
        </p>
      </div>
    </section>
  )
}

/* ============ Heritage teaser ============ */
function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story-grid">
        <Reveal variant="arch" className="niche" aria-hidden="true">
          <div className="niche-chakra"><img src="/images/temple/chakra.webp" alt="" loading="lazy" /></div>
          <img className="niche-deity" src="/images/temple/heritage.webp" alt="" loading="lazy" />
        </Reveal>
        <div className="story-copy">
          <Reveal><p className="kicker">Our heritage</p></Reveal>
          <Reveal delay={80}><h2>A sacred place of faith and tradition</h2></Reveal>
          <Reveal delay={160}><Ornament className="left" /></Reveal>
          <Reveal delay={220}><p className="lead dropcap">{t.heritage[0]}</p></Reveal>
          <Reveal delay={300}>
            <blockquote className="pull">{t.theertham.quote}</blockquote>
          </Reveal>
          <Reveal delay={360}><Link className="btn btn-maroon" to="/about">Read the full story</Link></Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============ Theertham ============ */
function Waters() {
  return (
    <section className="section waters" aria-labelledby="waters-title">
      <div className="ripples" aria-hidden="true"><i /><i /><i /></div>
      <div className="container waters-grid">
        <div className="waters-copy">
          <Reveal><p className="kicker">The sacred waters</p></Reveal>
          <Reveal delay={80}><h2 id="waters-title">{t.name}</h2></Reveal>
          <Reveal delay={160}><p className="lead">{t.theertham.text}</p></Reveal>
          <Reveal delay={240}>
            <ul className="chips">
              <li>Rama Theertham</li>
              <li>Lakshmana Theertham</li>
              <li>Karkidakam rites</li>
            </ul>
          </Reveal>
          <Reveal delay={320}><Link className="btn btn-ghost" to="/about#theertham">About the theertham</Link></Reveal>
        </div>
        <Reveal variant="arch" className="waters-photo">
          <img src="/images/temple/boat-god.webp" alt="A golden boat adorned with flower garlands carrying a deity panel on calm water" loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}

/* ============ Deities ============ */
function Sanctum() {
  return (
    <section className="section sanctum">
      <div className="container">
        <SectionTitle kicker="The sanctum" title="Deities of the temple" sub="Sree Rama is the principal deity, worshipped together with Sree Sastha and Lord Anjaneya." />
        <div className="deity-grid">
          {deities.map((d, i) => (
            <Reveal key={d.name} delay={i * 120} className="deity">
              <div className="deity-arch">
                <span className="script" lang="ml">{d.script}</span>
              </div>
              <h3>{d.name}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ Festivals rail ============ */
function Occasions() {
  const rail = useRef(null)
  const go = (dir) => rail.current?.scrollBy({ left: dir * Math.min(360, rail.current.clientWidth * 0.8), behavior: 'smooth' })
  const list = festivals.slice(0, 6)
  return (
    <section className="section occasions">
      <div className="container">
        <SectionTitle light kicker="Through the year" title="Festivals and observances" sub="Dates change every year, so please confirm with the temple before you plan a visit." />
      </div>
      <div className="rail-wrap">
        <div className="rail" ref={rail} tabIndex={0} aria-label="Festivals, scroll sideways">
          {list.map((f) => (
            <article className="fest" key={f.name}>
              <p className="fest-date">{f.date}</p>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
            </article>
          ))}
          <Link to="/about#festivals" className="fest fest-more"><span>See all {festivals.length} observances</span></Link>
        </div>
        <div className="rail-btns container">
          <button onClick={() => go(-1)} aria-label="Previous">‹</button>
          <button onClick={() => go(1)} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  )
}

/* ============ Donation invitation ============ */
function Give() {
  return (
    <section className="give">
      <div className="container give-inner">
        <Reveal variant="zoom" className="give-lamp"><Diya /></Reveal>
        <div className="give-copy">
          <Reveal><h2>Offer a lamp, a meal, a prayer</h2></Reveal>
          <Reveal delay={100}><p>Every offering helps the daily worship, the care of the theertham and the festivals that bring the community together.</p></Reveal>
          <Reveal delay={200}><Link className="btn btn-maroon" to="/donation">Give to the temple</Link></Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============ Visit ============ */
function Visit() {
  return (
    <section className="section visit">
      <div className="container visit-grid">
        <Reveal className="visit-times">
          <p className="kicker">Darshan</p>
          <div className="time-block"><span>Morning</span><strong>{t.timings.morning.label}</strong></div>
          <div className="time-block"><span>Evening</span><strong>{t.timings.evening.label}</strong></div>
          <p className="note">{t.timings.note}</p>
        </Reveal>
        <Reveal delay={150} className="visit-where">
          <p className="kicker">Find us</p>
          <h2>Elappully, Palakkad</h2>
          <p className="icon-line"><IconPin /> <span>{t.contact.address}</span></p>
          <p className="icon-line"><IconPhone /> <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a></p>
          <div className="btn-row">
            <a className="btn btn-gold" href={t.location.mapUrl} target="_blank" rel="noreferrer">Get directions</a>
            <Link className="btn btn-ghost" to="/contact">Contact the temple</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta('Thenari Theertham | Sree Madhyarani Sree Rama Temple', 'Thenari Theertham, Sree Madhyarani Sree Rama Temple, Elappully, Palakkad — a sacred place of devotion, heritage and tradition.')
  return (
    <>
      <Hero />
      <Status />
      <Story />
      <Waters />
      <Sanctum />
      <Occasions />
      <Give />
      <Visit />
    </>
  )
}
