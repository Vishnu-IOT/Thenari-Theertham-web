import { useEffect, useState } from "react";
import { useData } from "../data/useData.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { Diya } from "./ui.jsx";

/* Splash screen: temple doors swing apart to reveal the site. */
export default function Preloader() {
  const { t } = useData();
  const { tx } = useLang();
  const [phase, setPhase] = useState("show"); // show -> open -> gone
  useEffect(() => {
    const root = document.documentElement;
    const fast = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("locked");
    const open = setTimeout(() => {
      setPhase("open");
      root.classList.remove("locked");
      root.classList.add("ready"); // starts the hero text animation
    }, fast ? 300 : 1800);
    const gone = setTimeout(() => setPhase("gone"), fast ? 400 : 3200);
    return () => {
      clearTimeout(open);
      clearTimeout(gone);
      root.classList.remove("locked");
      root.classList.add("ready");
    };
  }, []);
  if (phase === "gone") return null;
  return (
    <div className={`preloader ${phase === "open" ? "open" : ""}`} role="status" aria-label={tx("loading")}>
      <div className="door l" aria-hidden="true">
        <img className="door-knob" src="/images/temple/door-knocker.webp" alt="" width="617" height="720" decoding="async" />
      </div>
      <div className="door r" aria-hidden="true">
        <img className="door-knob" src="/images/temple/door-knocker.webp" alt="" width="617" height="720" decoding="async" />
      </div>
      <div className="pre-core">
        <Diya className="pre-diya" />
        <p className="pre-name">{t.name}</p>
        <p className="pre-sub">{t.subtitle}</p>
      </div>
    </div>
  );
}
