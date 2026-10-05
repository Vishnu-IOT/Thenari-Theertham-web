import { useMemo, useState } from 'react'
import { templeData as t, donation as d } from '../data/templeData.js'
import { Reveal, PageHero, Diya, usePageMeta, IconCopy, IconCheck, IconChat, IconPhone } from '../components/ui.jsx'

const inr = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
const bankRows = [
  ['Account name', d.bank.accountName],
  ['Account number', d.bank.accountNumber],
  ['Bank', d.bank.bankName],
  ['IFSC', d.bank.ifsc],
  ['Branch', d.bank.branch],
].filter(([, v]) => v)

function CopyRow({ label, value }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="copy-row">
      <span>{label}</span>
      <b>{value}</b>
      <button type="button" onClick={copy} aria-label={`Copy ${label}`}>{ok ? <IconCheck /> : <IconCopy />}</button>
    </div>
  )
}

function Thanks({ offer, onBack }) {
  const note = `Offering to ${t.name} - ${offer.purpose.name}`
  const upi = d.upiId
    ? `upi://pay?pa=${encodeURIComponent(d.upiId)}&pn=${encodeURIComponent(d.payeeName)}&am=${offer.amount}&cu=INR&tn=${encodeURIComponent(note)}`
    : ''
  const lines = [
    'Namaskaram. I would like to make an offering to the temple.',
    `Purpose: ${offer.purpose.name}`,
    `Amount: ${inr(offer.amount)}`,
    `Name: ${offer.name}`,
    offer.star ? `In the name of / star: ${offer.star}` : '',
    offer.phone ? `Phone: ${offer.phone}` : '',
  ].filter(Boolean).join('\n')
  const wa = `https://wa.me/${t.contact.whatsapp}?text=${encodeURIComponent(lines)}`

  return (
    <div className="thanks" role="status">
      <div className="thanks-lamp"><Diya /></div>
      <h2>Thank you, {offer.name.split(' ')[0]}</h2>
      <p className="lead">Your offering of <b>{inr(offer.amount)}</b> for <b>{offer.purpose.name}</b> is ready. Complete it in one of the ways below.</p>

      <div className="pay-options">
        {upi && (
          <div className="pay-card">
            <h3>Pay by UPI</h3>
            <p>Opens your UPI app with the amount filled in. On a computer, use the UPI ID instead.</p>
            <a className="btn btn-gold" href={upi}>Pay {inr(offer.amount)}</a>
            <CopyRow label="UPI ID" value={d.upiId} />
          </div>
        )}
        {bankRows.length > 0 && (
          <div className="pay-card">
            <h3>Bank transfer</h3>
            {bankRows.map(([l, v]) => <CopyRow key={l} label={l} value={v} />)}
          </div>
        )}
        <div className="pay-card">
          <h3>{upi || bankRows.length ? 'Tell the temple office' : 'Confirm with the temple office'}</h3>
          <p>{upi || bankRows.length
            ? 'After paying, send your details so the offering can be recorded and a receipt arranged.'
            : 'Send your details on WhatsApp or call, and the temple office will share how to complete the offering.'}</p>
          <a className="btn btn-maroon" href={wa} target="_blank" rel="noreferrer"><IconChat /> Send on WhatsApp</a>
          <a className="btn btn-line" href={`tel:${t.contact.phone.replace(/\s/g, '')}`}><IconPhone /> Call {t.contact.phone}</a>
        </div>
      </div>

      <p className="note center">This website does not collect or hold any money. Please keep your payment confirmation until the temple confirms your receipt.</p>
      <button className="btn btn-ghost-dark" onClick={onBack}>Change my offering</button>
    </div>
  )
}

export default function Donation() {
  usePageMeta('Donation | Thenari Theertham', 'Make an offering to Thenari Sree Rama Temple for Annadhanam, daily pooja, the theertham, festivals and temple upkeep.')
  const [purposeId, setPurposeId] = useState(d.purposes[0].id)
  const [amount, setAmount] = useState(d.amounts[1])
  const [custom, setCustom] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', star: '' })
  const [done, setDone] = useState(false)
  const [tried, setTried] = useState(false)

  const purpose = d.purposes.find((p) => p.id === purposeId)
  const value = custom !== '' ? Number(custom) : amount
  const amountOk = Number.isFinite(value) && value >= 1
  const nameOk = form.name.trim().length > 1
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const offer = useMemo(() => ({ purpose, amount: value, ...form, name: form.name.trim() }), [purpose, value, form])

  const submit = (e) => {
    e.preventDefault()
    setTried(true)
    if (!amountOk || !nameOk) return
    setDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero kicker="Dakshina" title="Donation" sub="Offer a lamp, a meal or a prayer to Sree Rama." className="hero-donation">
        <Diya className="hero-diya" />
      </PageHero>

      <section className="section give-sec">
        <div className="container">
          {done ? (
            <Thanks offer={offer} onBack={() => setDone(false)} />
          ) : (
            <form className="give-grid" onSubmit={submit} noValidate>
              <div className="give-form">
                <Reveal as="fieldset" className="step">
                  <legend>Where would you like your offering to go?</legend>
                  <div className="purpose-list">
                    {d.purposes.map((p) => (
                      <label key={p.id} className={`purpose ${p.id === purposeId ? 'on' : ''}`}>
                        <input type="radio" name="purpose" checked={p.id === purposeId} onChange={() => setPurposeId(p.id)} />
                        <span className="purpose-name">{p.name}</span>
                        <span className="purpose-text">{p.text}</span>
                      </label>
                    ))}
                  </div>
                </Reveal>

                <Reveal as="fieldset" className="step" delay={80}>
                  <legend>Choose an amount</legend>
                  <div className="amounts">
                    {d.amounts.map((a) => (
                      <button type="button" key={a} className={custom === '' && amount === a ? 'on' : ''} aria-pressed={custom === '' && amount === a} onClick={() => { setAmount(a); setCustom('') }}>{inr(a)}</button>
                    ))}
                  </div>
                  <label className="field">
                    <span>Or enter another amount in rupees</span>
                    <input inputMode="numeric" pattern="[0-9]*" value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, '').slice(0, 8))} placeholder="e.g. 750" aria-invalid={tried && !amountOk} />
                  </label>
                  {tried && !amountOk && <p className="err">Please choose or enter an amount.</p>}
                </Reveal>

                <Reveal as="fieldset" className="step" delay={160}>
                  <legend>Your details</legend>
                  <label className="field">
                    <span>Your name</span>
                    <input value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={tried && !nameOk} />
                  </label>
                  {tried && !nameOk && <p className="err">Please enter your name.</p>}
                  <label className="field">
                    <span>Phone number <em>(optional)</em></span>
                    <input value={form.phone} onChange={set('phone')} type="tel" inputMode="tel" autoComplete="tel" />
                  </label>
                  <label className="field">
                    <span>Offering in the name of, and star <em>(optional)</em></span>
                    <input value={form.star} onChange={set('star')} placeholder="Name and nakshatra" />
                  </label>
                </Reveal>
              </div>

              <aside className="summary" aria-live="polite">
                <div className="summary-card">
                  <Diya className="summary-diya" />
                  <p className="summary-label">Your offering</p>
                  <p className={`summary-amount ${amountOk ? '' : 'dim'}`} key={value}>{amountOk ? inr(value) : 'Choose an amount'}</p>
                  <p className="summary-purpose">{purpose.name}</p>
                  <button className="btn btn-gold" type="submit">Continue</button>
                  <p className="summary-note">Nothing is charged on this page. In the next step you will see how to complete the offering.</p>
                </div>
              </aside>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
