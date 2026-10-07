import { useMemo, useState } from "react";
import { galleryCategories, videoItems } from "../data/templeData.js";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { PageHero, usePageMeta } from "../components/ui.jsx";
import Lightbox from "../components/Lightbox.jsx";

export default function GalleryPage() {
  const { gallery: photos } = useData();
  const { tx } = useLang();
  usePageMeta(tx("gallery.title"), tx("gallery.desc"));

  /* Videos are mixed in among the photos (one after every few photos) */
  const { gallery, videoTiles, categories } = useMemo(() => {
    const fallback = tx("gallery.videoFallback");
    const tiles = videoItems.map((v) => ({
      id: `video-${v.id}`,
      type: "video",
      videoId: v.id,
      src: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      category: "Video",
      caption: v.title || fallback,
      alt: v.title || fallback,
    }));
    const all = [...photos];
    if (tiles.length) {
      const gap = Math.max(2, Math.floor(photos.length / (tiles.length + 1)));
      tiles.forEach((v, k) => all.splice(Math.min(all.length, gap * (k + 1) + k), 0, v));
    }
    const cats = tiles.length && !galleryCategories.includes("Video") ? [...galleryCategories, "Video"] : galleryCategories;
    return { gallery: all, videoTiles: tiles, categories: cats };
  }, [photos, tx]);
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  const count = (c) => (c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length);

  return (
    <>
      <PageHero kicker={tx("gallery.kicker")} title={tx("gallery.pageTitle")} sub={videoTiles.length ? tx("gallery.subVideos", { photos: photos.length, videos: videoTiles.length }) : tx("gallery.sub", { photos: photos.length })} className="hero-gallery">
        <div className="hero-collage">
          {[photos[2], photos[1], photos[0]].map((g, i) => <img key={g.id} src={g.src} alt="" style={{ "--i": i }} />)}
        </div>
      </PageHero>

      <section className="section gl-sec">
        <div className="container">
          <div className="gl-filters" role="group" aria-label={tx("gallery.filter")}>
            {categories.map((c) => (
              <button key={c} className={c === cat ? "on" : ""} aria-pressed={c === cat} onClick={() => setCat(c)}>
                {tx(`cat.${c}`)} <small>{count(c)}</small>
              </button>
            ))}
          </div>

          <ul className="gl-grid" key={cat}>
            {items.map((g, i) => (
              <li key={g.id} style={{ "--i": i }}>
                <button onClick={() => setActive(i)} aria-label={tx(g.type === "video" ? "gallery.playVideo" : "gallery.openPhoto", { caption: g.caption })}>
                  <img src={g.src} alt={g.alt} width={g.type === "video" ? 480 : g.w} height={g.type === "video" ? 360 : g.h} className={g.type === "video" ? "gl-vthumb" : ""} loading="lazy" decoding="async" />
                  {g.type === "video" && <span className="gl-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>}
                  <span className="gl-cap"><b>{g.caption}</b><small>{tx(`cat.${g.category}`)}</small></span>
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
