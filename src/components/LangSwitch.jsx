import { useLang } from "../i18n/LanguageContext.jsx";

/* Malayalam / English switch. Each label is written in its own language. */
export default function LangSwitch() {
  const { lang, setLang, tx } = useLang();
  return (
    <div className="lng-switch" role="group" aria-label={tx("lang.label")}>
      <button type="button" lang="ml" className={lang === "ml" ? "on" : ""} aria-pressed={lang === "ml"} onClick={() => setLang("ml")}>
        ML
      </button>
      <button type="button" lang="en" aria-label="English" className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}
