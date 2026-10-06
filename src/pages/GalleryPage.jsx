import { useState } from "react";
import { gallery, galleryCategories } from "../data/templeData.js";
import { PageHero, usePageMeta } from "../components/ui.jsx";
import Lightbox from "../components/Lightbox.jsx";

export default function GalleryPage() {
  usePageMeta("Gallery | Thenari Theertham", "Photographs of the deities, sacred theertham and architecture of Thenari Sree Rama Temple.");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  const count = (c) => (c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length);

  return (
    <>
      <PageHero kicker="Darshan in pictures" title="Gallery" sub={`${gallery.length} photographs of the temple, the theertham and the deities.`} className="hero-gallery">
        <div className="hero-collage">
          {[gallery[2], gallery[1], gallery[0]].map((g, i) => <img key={g.id} src={g.src} alt="" style={{ "--i": i }} />)}
        </div>
      </PageHero>

      <section className="section gl-sec">
        <div className="container">
          <div className="gl-filters" role="group" aria-label="Filter gallery">
            {galleryCategories.map((c) => (
              <button key={c} className={c === cat ? "on" : ""} aria-pressed={c === cat} onClick={() => setCat(c)}>
                {c} <small>{count(c)}</small>
              </button>
            ))}
          </div>

          <ul className="gl-grid" key={cat}>
            {items.map((g, i) => (
              <li key={g.id} style={{ "--i": i }}>
                <button onClick={() => setActive(i)} aria-label={`Open photo: ${g.caption}`}>
                  <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" />
                  <span className="gl-cap"><b>{g.caption}</b><small>{g.category}</small></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {active !== null && <Lightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />}
    </>
  );
}
