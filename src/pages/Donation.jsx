import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useData, english } from '../data/useData.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Reveal, PageHero, Diya, usePageMeta, IconCopy, IconCheck, IconChat, IconPhone } from '../components/ui.jsx'

const inr = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

function CopyRow({ label, value }) {
  const { tx } = useLang()
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="copy-row">
      <span>{label}</span>
      <b>{value}</b>
      <button type="button" onClick={copy} aria-label={tx('donation.copy', { label })}>{ok ? <IconCheck /> : <IconCopy />}</button>
    </div>
  )
}

function CopyBtn({ label, value }) {
  const { tx } = useLang()
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return <button type="button" className="copy-btn" onClick={copy} aria-label={tx('donation.copy', { label })}>{ok ? <IconCheck /> : <IconCopy />}</button>
}

/* Every choice in the dropdown: the general needs, then the pooja offerings.
   The English twin is used for the UPI note, which stays in English. */
function buildOptions(src, tx) {
  const needs = src.donation.purposes.map((p) => ({ ...p, group: tx('donation.offeringGroupNeeds') }))
  const poojas = src.poojaRates.map((p, i) => ({ id: `pooja-${i}`, name: p.name, text: p.text, amount: p.amount, group: tx('donation.offeringGroupPooja') }))
  return [...needs, ...poojas]
}
const enLookup = (id) => buildOptions(english, (k) => k).find((o) => o.id === id)

/* UPI QR: your own picture if present, else drawn from the UPI id, else a neutral frame. */
function QrBox({ d }) {
  const { tx } = useLang()
  const [src, setSrc] = useState(d.qrImage || '')
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (!failed && d.qrImage) return
    if (!d.upiId) { setSrc(''); return }
    let live = true
    import('qrcode').then((Q) => {
      const uri = `upi://pay?pa=${encodeURIComponent(d.upiId)}&pn=${encodeURIComponent(d.payeeName)}&cu=INR`
      return Q.toDataURL(uri, { margin: 1, width: 360, color: { dark: '#4a0e1a', light: '#ffffff' } })
    }).then((url) => { if (live) setSrc(url) }).catch(() => {})
    return () => { live = false }
  }, [failed, d.qrImage, d.upiId, d.payeeName])

  return (
    <div className="qr-box">
      {src ? (
        <img src={src} alt={tx('donation.qrAlt', { name: d.payeeName })} width="220" height="220" onError={() => { setFailed(true); setSrc('') }} />
      ) : (
        <div className="qr-empty"><span>QR</span><small>{tx('donation.qrSoon')}</small></div>
      )}
    </div>
  )
}

function PayPanel() {
  const { donation: d } = useData()
  const { tx } = useLang()
  const rows = [
    ['accountName', d.bank.accountName],
    ['accountNumber', d.bank.accountNumber],
    ['bankName', d.bank.bankName],
    ['ifsc', d.bank.ifsc],
    ['branch', d.bank.branch],
  ]
  return (
    <section className="pay-panel" aria-labelledby="pay-h">
      <div className="pay-head">
        <h2 id="pay-h">{tx('donation.payTitle')}</h2>
        <p>{tx('donation.paySub')}</p>
      </div>
      <div className="pay-cols">
        <div className="pay-qr">
          <QrBox d={d} />
          <b>{tx('donation.scan')}</b>
          <small>{tx('donation.scanHint')}</small>
          {d.upiId && <CopyRow label={tx('donation.upiId')} value={d.upiId} />}
        </div>
        <div className="pay-bank">
          <h3>{tx('donation.bankTitle')}</h3>
          <dl>
            {rows.map(([k, v]) => (
              <div key={k} className="bank-row">
                <dt>{tx(`donation.bankRows.${k}`)}</dt>
                <dd>{v ? <><b>{v}</b><CopyBtn label={tx(`donation.bankRows.${k}`)} value={v} /></> : <em>{tx('donation.pending')}</em>}</dd>
              </div>
            ))}
          </dl>
          <p className="note">{tx('donation.payCheck')}</p>
        </div>
      </div>
    </section>
  )
}

function Thanks({ offer, onBack }) {
  const { t, donation: d } = useData()
  const { tx } = useLang()
  const bankRows = [
    ['accountName', d.bank.accountName],
    ['accountNumber', d.bank.accountNumber],
    ['bankName', d.bank.bankName],
    ['ifsc', d.bank.ifsc],
    ['branch', d.bank.branch],
  ].filter(([, v]) => v)
  // The UPI note stays in English: some UPI apps reject non-Latin text.
  const enPurpose = enLookup(offer.purpose.id) || offer.purpose
  const note = `Offering to ${english.t.name} - ${enPurpose.name}`
  const upi = d.upiId
    ? `upi://pay?pa=${encodeURIComponent(d.upiId)}&pn=${encodeURIComponent(d.payeeName)}&am=${offer.amount}&cu=INR&tn=${encodeURIComponent(note)}`
    : ''
  const lines = [
    tx('donation.wa.intro'),
    tx('donation.wa.purpose', { v: offer.purpose.name }),
    tx('donation.wa.amount', { v: inr(offer.amount) }),
    tx('donation.wa.name', { v: offer.name }),
    offer.star ? tx('donation.wa.star', { v: offer.star }) : '',
    offer.phone ? tx('donation.wa.phone', { v: offer.phone }) : '',
  ].filter(Boolean).join('\n')
  const wa = `https://wa.me/${t.contact.whatsapp}?text=${encodeURIComponent(lines)}`

  return (
    <div className="thanks" role="status">
      <div className="thanks-lamp"><Diya /></div>
      <h2>{tx('donation.thanks', { name: offer.name.split(' ')[0] })}</h2>
      <p className="lead">{tx('donation.lead', { amount: <b>{inr(offer.amount)}</b>, purpose: <b>{offer.purpose.name}</b> })}</p>

      <div className="pay-options">
        {upi && (
          <div className="pay-card">
            <h3>{tx('donation.upiTitle')}</h3>
            <p>{tx('donation.upiText')}</p>
            <a className="btn btn-gold" href={upi}>{tx('donation.pay', { amount: inr(offer.amount) })}</a>
            <CopyRow label={tx('donation.upiId')} value={d.upiId} />
          </div>
        )}
        {bankRows.length > 0 && (
          <div className="pay-card">
            <h3>{tx('donation.bank')}</h3>
            {bankRows.map(([k, v]) => <CopyRow key={k} label={tx(`donation.bankRows.${k}`)} value={v} />)}
          </div>
        )}
        <div className="pay-card">
          <h3>{upi || bankRows.length ? tx('donation.tell') : tx('donation.confirm')}</h3>
          <p>{upi || bankRows.length ? tx('donation.tellText') : tx('donation.confirmText')}</p>
          <a className="btn btn-maroon" href={wa} target="_blank" rel="noreferrer"><IconChat /> {tx('donation.whatsapp')}</a>
          <a className="btn btn-line" href={`tel:${t.contact.phone.replace(/\s/g, '')}`}><IconPhone /> {tx('donation.call', { phone: t.contact.phone })}</a>
        </div>
      </div>

      <p className="note center">{tx('donation.noMoney')}</p>
      <button className="btn btn-ghost-dark" onClick={onBack}>{tx('donation.change')}</button>
    </div>
  )
}

export default function Donation() {
  const data = useData()
  const { donation: d } = data
  const { tx } = useLang()
  usePageMeta(tx('donation.title'), tx('donation.desc'))
  const options = useMemo(() => buildOptions(data, tx), [data, tx])
  const [params] = useSearchParams()
  const wanted = params.get('offering')
  const [purposeId, setPurposeId] = useState(options.some((o) => o.id === wanted) ? wanted : d.purposes[0].id)
  const [amount, setAmount] = useState(d.amounts[1])
  const [custom, setCustom] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', star: '' })
  const [done, setDone] = useState(false)
  const [tried, setTried] = useState(false)

  const purpose = options.find((p) => p.id === purposeId) || options[0]
  // An offering with a fixed rate fills in its amount
  useEffect(() => { if (purpose.amount) setCustom(String(purpose.amount)) }, [purpose.id, purpose.amount])
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
      <PageHero kicker={tx('donation.kicker')} title={tx('donation.pageTitle')} sub={tx('donation.sub')} className="hero-donation">
        <Diya className="hero-diya" />
      </PageHero>

      <section className="section give-sec">
        <div className="container">
          {done ? (
            <Thanks offer={offer} onBack={() => setDone(false)} />
          ) : (
            <>
            <PayPanel />
            <form className="give-grid" onSubmit={submit} noValidate>
              <div className="give-form">
                <Reveal as="fieldset" className="step">
                  <legend>{tx('donation.where')}</legend>
                  <label className="field select-field">
                    <span className="sr-only">{tx('donation.where')}</span>
                    <select value={purposeId} onChange={(e) => setPurposeId(e.target.value)}>
                      {[tx('donation.offeringGroupNeeds'), tx('donation.offeringGroupPooja')].map((g) => (
                        <optgroup key={g} label={g}>
                          {options.filter((o) => o.group === g).map((o) => <option key={o.id} value={o.id}>{o.amount ? `${o.name} — ₹${Number(o.amount).toLocaleString('en-IN')}` : o.name}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </label>
                  <p className="select-hint" aria-live="polite">{purpose.text}</p>
                </Reveal>

                <Reveal as="fieldset" className="step" delay={80}>
                  <legend>{tx('donation.chooseAmount')}</legend>
                  <div className="amounts">
                    {d.amounts.map((a) => (
                      <button type="button" key={a} className={custom === '' && amount === a ? 'on' : ''} aria-pressed={custom === '' && amount === a} onClick={() => { setAmount(a); setCustom('') }}>{inr(a)}</button>
                    ))}
                  </div>
                  <label className="field">
                    <span>{tx('donation.other')}</span>
                    <input inputMode="numeric" pattern="[0-9]*" value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, '').slice(0, 8))} placeholder={tx('donation.otherPh')} aria-invalid={tried && !amountOk} />
                  </label>
                  {tried && !amountOk && <p className="err">{tx('donation.errAmount')}</p>}
                </Reveal>

                <Reveal as="fieldset" className="step" delay={160}>
                  <legend>{tx('donation.details')}</legend>
                  <label className="field">
                    <span>{tx('donation.yourName')}</span>
                    <input value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={tried && !nameOk} />
                  </label>
                  {tried && !nameOk && <p className="err">{tx('donation.errName')}</p>}
                  <label className="field">
                    <span>{tx('donation.phone')} <em>{tx('donation.optional')}</em></span>
                    <input value={form.phone} onChange={set('phone')} type="tel" inputMode="tel" autoComplete="tel" />
                  </label>
                  <label className="field">
                    <span>{tx('donation.star')} <em>{tx('donation.optional')}</em></span>
                    <input value={form.star} onChange={set('star')} placeholder={tx('donation.starPh')} />
                  </label>
                </Reveal>
              </div>

              <aside className="summary" aria-live="polite">
                <div className="summary-card">
                  <Diya className="summary-diya" />
                  <p className="summary-label">{tx('donation.summary')}</p>
                  <p className={`summary-amount ${amountOk ? '' : 'dim'}`} key={value}>{amountOk ? inr(value) : tx('donation.chooseAmount')}</p>
                  <p className="summary-purpose">{purpose.name}</p>
                  <button className="btn btn-gold" type="submit">{tx('donation.next')}</button>
                  <p className="summary-note">{tx('donation.noCharge')}</p>
                </div>
              </aside>
            </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}
