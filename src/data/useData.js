import * as en from "./templeData.js";
import * as ml from "./templeData.ml.js";
import { useLang } from "../i18n/LanguageContext.jsx";

/* Images, URLs, ids and numbers stay in templeData.js. Only the words are
   translated: the Malayalam file lists them in the same order as the English. */
const byIndex = (base, over = []) => base.map((b, i) => ({ ...b, ...(over[i] || {}) }));

function build(o = {}) {
  const t = en.templeData;
  const ot = o.templeData || {};
  return {
    t: {
      ...t,
      ...ot,
      theertham: { ...t.theertham, ...(ot.theertham || {}) },
      timings: {
        morning: { ...t.timings.morning, ...(ot.timings?.morning || {}) },
        evening: { ...t.timings.evening, ...(ot.timings?.evening || {}) },
        note: ot.timings?.note ?? t.timings.note,
      },
      contact: { ...t.contact, ...(ot.contact || {}) },
      reach: byIndex(t.reach, ot.reach),
    },
    navLinks: byIndex(en.navLinks, o.navLinks),
    weeklyTimings: byIndex(en.weeklyTimings.map((d) => ({ ...d, dayLabel: d.day })), o.weeklyTimings),
    waters: byIndex(en.waters, o.waters),
    surroundings: byIndex(en.surroundings, o.surroundings),
    donation: { ...en.donation, purposes: byIndex(en.donation.purposes, o.donation?.purposes) },
    deities: byIndex(en.deities, o.deities),
    homeDeities: byIndex(en.homeDeities, o.homeDeities),
    heroSlides: byIndex(en.heroSlides, o.heroSlides),
    poojas: byIndex(en.poojas, o.poojas),
    festivals: byIndex(en.festivals, o.festivals),
    gallery: byIndex(en.gallery, o.gallery),
  };
}

const bundles = { en: build(), ml: build(ml) };

/* English bundle, for text that must stay Latin (e.g. the UPI payment note). */
export const english = bundles.en;

export function useData() {
  const { lang } = useLang();
  return bundles[lang] || bundles.en;
}
