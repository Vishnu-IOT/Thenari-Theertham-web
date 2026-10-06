import { useCallback, useEffect, useRef } from "react";

export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  const touch = useRef(null);
  const move = useCallback((d) => onChange((index + d + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", k);
    document.documentElement.classList.add("locked");
    return () => {
      window.removeEventListener("keydown", k);
      document.documentElement.classList.remove("locked");
    };
  }, [move, onClose]);

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  return (
    <div className="gl-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <button className="gl-lb-btn gl-lb-close" onClick={onClose} aria-label="Close">×</button>
      <button className="gl-lb-btn gl-lb-prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous image">‹</button>
      <figure key={item.id} onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          <b>{item.caption}</b>
          <small>{item.category} · {index + 1} of {items.length}</small>
        </figcaption>
      </figure>
      <button className="gl-lb-btn gl-lb-next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next image">›</button>
    </div>
  );
}
