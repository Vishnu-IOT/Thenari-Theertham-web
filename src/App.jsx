import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader.jsx'
import { ScrollProgress, BackToTop } from './components/ScrollUI.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { TemplePage, HistoryPage, TheerthamPage, PoojaSeva, FestivalsPage, GalleryPage, VisitPage, ContactPage, PrivacyPage, NotFoundPage } from './pages/Pages.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temple" element={<TemplePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/theertham" element={<TheerthamPage />} />
          <Route path="/pooja-seva" element={<PoojaSeva />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
