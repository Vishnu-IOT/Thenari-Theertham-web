import { useState } from "react";

export default function ReelPlayer({ reel, title }) {
  if (reel.file) {
    return (
      <video
        className="rl-video"
        src={reel.file}
        poster={reel.cover || undefined}
        controls
        autoPlay
        playsInline
        preload="metadata"
        aria-label={title}
      />
    );
  }

  const rawUrl = reel.url || reel.permalink || reel.id;

  const shortcode = String(rawUrl || "").match(
    /instagram\.com\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)|^([A-Za-z0-9_-]+)$/,
  );

  const id = shortcode?.[1] || shortcode?.[2];

  if (!id) {
    return <p>Unable to load this reel. Check its Instagram URL.</p>;
  }

  return (
    <div className="rl-embed">
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        title={title || "Instagram Reel"}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export function CoverImg({ src, fallback, ...rest }) {
  const [cur, setCur] = useState(src || fallback);

  return (
    <img
      {...rest}
      src={cur}
      onError={() => {
        if (cur !== fallback) setCur(fallback);
      }}
    />
  );
}
