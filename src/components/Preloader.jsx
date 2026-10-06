import { useEffect, useState } from "react";
import { templeData as t } from "../data/templeData.js";
import { Diya } from "./ui.jsx";

/* Splash screen: temple doors swing apart to reveal the site. */
export default function Preloader() {
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
    <div className={`preloader ${phase === "open" ? "open" : ""}`} role="status" aria-label="Loading">
      <div className="door l" aria-hidden="true" />
      <div className="door r" aria-hidden="true" />
      <div className="pre-core">
        <Diya className="pre-diya" />
        <p className="pre-name">{t.name}</p>
        <p className="pre-sub">{t.subtitle}</p>
      </div>
    </div>
  );
}
