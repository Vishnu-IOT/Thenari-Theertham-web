import { useCallback, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader.jsx'
import { ScrollProgress, BackToTop } from './components/ScrollUI.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Donation from './pages/Donation.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  // Hero animations wait for the temple doors to open.
  const reveal = useCallback(() => document.documentElement.classList.add('ready'), [])

  return (
    <>
      <Preloader onReveal={reveal} />
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <ScrollToTop />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          {/* Old links keep working */}
          <Route path="/temple" element={<Navigate to="/about" replace />} />
          <Route path="/history" element={<Navigate to="/about" replace />} />
          <Route path="/theertham" element={<Navigate to="/about" replace />} />
          <Route path="/pooja-seva" element={<Navigate to="/about" replace />} />
          <Route path="/festivals" element={<Navigate to="/about" replace />} />
          <Route path="/visit" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
