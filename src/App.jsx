import { useEffect, useState } from 'react'
import * as D from './data.js'

const asset = p => `${import.meta.env.BASE_URL}assets/${p}`

// Shows a soft colour block until the photo exists in /public/assets
function Photo({ src, alt = '', className = 'ph' }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={className}>
      {ok && <img src={asset(src)} alt={alt} onError={() => setOk(false)} />}
    </div>
  )
}

function Header() {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState(D.NAV[0][0])
  useEffect(() => {
    const on = () => {
      setSolid(window.scrollY > 60)
      let cur = D.NAV[0][0]
      for (const [id] of D.NAV) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={solid ? 'solid' : ''}>
      <div className="wrap"><nav>
        <a className="brand" href="#top" aria-label="Walawwa Villa Kathaluwa home">
          <img src={asset('gallery/logo.png')} alt="Walawwa Villa Kathaluwa" />
        </a>
        <ul>{D.NAV.map(([id, label]) => <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a></li>)}</ul>
        <a className="call" href={`tel:${D.PHONE_TEL}`}>{D.PHONE_DISPLAY}</a>
      </nav></div>
    </header>
  )
}

function Hero() {
  const [ok, setOk] = useState(true)
  return (
    <section className="hero">
      {ok && <img src={asset('gallery/img3.png')} alt="" onError={() => setOk(false)} />}
      <div>
        <span className="eyebrow">Ahangama · Galle · Sri Lanka</span>
        <h1>Walawwa Villa Kathaluwa</h1>
        <span className="rule" aria-hidden="true" />
        <p>Luxury stay near the ocean</p>
        <div className="row">
          <a className="btn" href="#contact">Check availability</a>
          <a className="btn ghost" href="#about">Explore the villa</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about"><div className="wrap about">
      <Photo src="gallery/img4.png" alt="The villa's sitting area and veranda" />
      <div>
        <h2>A traditional walawwa, a short walk from the sea</h2>
        <p>Walawwa Villa sits in Walawwaththa, Kathaluwa, on the quiet southern coast of Sri Lanka. Tiled roofs, shaded verandas and palm gardens give it the feel of a classic Sri Lankan manor home, with the comforts you expect from a luxury stay.</p>
        <p>Wake to birdsong, spend the day on the beach, and come back to a calm, private place to rest.</p>
        <div className="facts">
          <div><b>Minutes</b>to the beach</div>
          <div><b>Ahangama</b>Galle District</div>
          <div><b>Private</b>villa stay</div>
        </div>
      </div>
    </div></section>
  )
}

const Rooms = () => (
  <section id="rooms" className="sandbg"><div className="wrap">
    <h2>Rooms</h2>
    <p>Light, airy rooms with comfortable beds and garden views.</p>
    <div className="rooms">
      {D.ROOMS.map(r => (
        <article className="room" key={r.name}>
          <Photo src={r.img} alt={r.name} />
          <h3>{r.name}</h3><p>{r.text}</p>
        </article>
      ))}
    </div>
  </div></section>
)

const Amenities = () => (
  <section id="amenities"><div className="wrap">
    <h2>Everything for an easy stay</h2>
    <div className="am">
      {D.AMENITIES.map(([t, s]) => <div key={t}><b>{t}</b><span>{s}</span></div>)}
    </div>
  </div></section>
)

const Gallery = () => (
  <section id="gallery" className="sandbg"><div className="wrap">
    <h2>Gallery</h2>
    <div className="gal">
      {D.GALLERY.map((g, i) => <Photo key={g} src={g} alt={`Walawwa Villa photo ${i + 1}`} />)}
    </div>
  </div></section>
)

function Contact() {
  const today = new Date().toISOString().split('T')[0]
  const [f, setF] = useState({ name: '', in: '', out: '', guests: 2, msg: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const text = `Hello, I would like to book Walawwa Villa.\nName: ${f.name}\nCheck-in: ${f.in}\nCheck-out: ${f.out}\nGuests: ${f.guests}\n${f.msg}`
    window.open(`https://wa.me/${D.WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
  }
  return (
    <section id="contact" className="contact"><div className="wrap cgrid">
      <div>
        <h2>Book your stay</h2>
        <p>Send your dates and we will reply with availability and rates. Or call us directly.</p>
        <dl>
          <dt>Phone and WhatsApp</dt><dd><a href={`tel:${D.PHONE_TEL}`}>{D.PHONE_DISPLAY}</a></dd>
          <dt>Address</dt><dd>{D.ADDRESS}</dd>
          <dt>Find us</dt><dd><a href={D.MAP_URL} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></dd>
        </dl>
        <div className="booking-options">
          <h3>Book with your preferred site</h3>
          <div>
            {D.BOOKING_PLATFORMS.map(([name, url]) => (
              <a className="btn" key={name} href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <form onSubmit={submit}>
        <label>Your name<input required autoComplete="name" value={f.name} onChange={set('name')} /></label>
        <div className="two">
          <label>Check-in<input type="date" required min={today} value={f.in} onChange={set('in')} /></label>
          <label>Check-out<input type="date" required min={f.in || today} value={f.out} onChange={set('out')} /></label>
        </div>
        <label>Number of guests<input type="number" min="1" required value={f.guests} onChange={set('guests')} /></label>
        <label>Message (optional)<textarea rows="3" value={f.msg} onChange={set('msg')} /></label>
        <button className="btn" type="submit">Send on WhatsApp</button>
      </form>
    </div></section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero /><About /><Rooms /><Amenities /><Gallery /><Contact />
      </main>
      <footer>© {new Date().getFullYear()} Walawwa Villa Kathaluwa · Ahangama, Sri Lanka</footer>
    </>
  )
}
