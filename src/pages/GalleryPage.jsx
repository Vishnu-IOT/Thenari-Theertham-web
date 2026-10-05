import { usePageMeta } from "../components/Common.jsx";
import { PageHero } from "../components/Ornaments.jsx";
import Gallery from "../components/Gallery.jsx";

export default function GalleryPage() {
  usePageMeta("Gallery | Thenari Theertham", "Photographs of Thenari Sree Rama Temple, the theertham and its festivals.");
  return (
    <div className="page-gallery">
      <PageHero theme="theme-gallery" mal="ചിത്രശാല" title="Gallery" sub="Darshan in pictures" />
      <section className="gallery-hall"><div className="container"><Gallery /></div></section>
    </div>
  );
}
