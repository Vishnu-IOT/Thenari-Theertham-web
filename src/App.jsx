import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";
import { ScrollProgress, BackToTop } from "./components/ScrollUI.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import FestivalsPage from "./pages/FestivalsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import VisitContactPage from "./pages/VisitContactPage.jsx";
import Donation from "./pages/Donation.jsx";
import NotFound from "./pages/NotFound.jsx";

/* Scroll to top on page change, or to the #anchor when the link has one. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <ScrollToTop />
      <main id="main" className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/visit" element={<VisitContactPage />} />
          <Route path="/contact" element={<Navigate to="/visit#contact" replace />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
