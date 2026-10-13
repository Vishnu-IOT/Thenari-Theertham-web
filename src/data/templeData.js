// =========================================================
// TEMPLE DATA
// =========================================================

// Darshan hours. Edit a single day in `weeklyTimings` below if it differs.
const MORNING = { label: "5:30 AM – 10:30 AM" };
const EVENING = { label: "5:00 PM – 7:00 PM" };

export const templeData = {
  name: "Thenari Theertham",

  subtitle: "Sree Madhyaranya Sree Rama Temple Thenari",

  tagline:
    "A sacred place of devotion, tradition and timeless faith in the heart of Thenari.",

  // =======================================================
  // HERITAGE
  // =======================================================

  heritage: [
    "Thenari Sree Rama Temple is situated at Thenari in Elappully, Palakkad, Kerala. The temple is closely associated with the sacred Thenari Theertham, a natural spring or water source located in front of the temple.",

    "The Thenari Sri Rama Temple is a sacred site that evokes blessed memories of the Ramayana and radiates the glory of devotion to Lord Rama. According to tradition, this region is linked to the Ramayana; it is believed that Lord Rama and Lakshmana traveled along this path. A confluence of faith, devotion, and legend, this temple stands as a beautiful part of our culture.",

    "The temple continues to be a place of worship where devotees gather for daily prayers, special offerings, ancestral rites and important religious observances.",
  ],

  // =======================================================
  // THEERTHAM
  // =======================================================

  theertham: {
    quote: "Where sacred waters meet timeless devotion.",

    text: "Thenari Theertham is one of the distinctive spiritual features of the temple. The sacred water source in front of the temple is traditionally revered by devotees and is associated with ancestral rites and other religious observances. The theertham is especially significant during occasions connected with Karkidakam and new-moon rituals.",
  },

  // =======================================================
  // IMAGES
  // =======================================================

  images: {
    theertham2: "/images/gallery/7.jpg",
  },

  // =======================================================
  // TEMPLE TIMINGS
  // =======================================================

  timings: {
    morning: MORNING,

    evening: EVENING,

    note: "On special days, the temple's closing time may differ.",
  },

  // =======================================================
  // CONTACT
  // =======================================================

  contact: {
    phone: "+91 62822 53183",

    email: "",

    address:
      "Theertham Paadam, Thenari Road, Elappully, Palakkad, Kerala 678622, India",

    hours: `${MORNING.label} / ${EVENING.label}`,

    // Digits only, with country code. Used for the WhatsApp links.
    whatsapp: "916282253183",
  },

  // =======================================================
  // LOCATION
  // =======================================================

  location: {
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Thenari+Theertham+Sree+Madhyarani+Sree+Rama+Temple+Elappully+Palakkad+Kerala",

    embedUrl:
      "https://www.google.com/maps?q=Thenari+Theertham+Sree+Madhyarani+Sree+Rama+Temple+Elappully+Palakkad+Kerala&output=embed",
  },

  // =======================================================
  // SOCIAL MEDIA
  // =======================================================

  social: [],

  // =======================================================
  // HOW TO REACH
  // =======================================================

  reach: [
    {
      mode: "By Road",
      text: "Thenari Theertham, Sree Madhyarani Sree Rama Temple, is located in Elappully, Palakkad district, along the Palakkad–Pollachi road corridor. Visitors can use the temple's map location to plan their driving route.",
    },
    {
      mode: "By Bus",
      text: "Palakkad is approximately 14 km from the temple. Local bus services connect the surrounding Elappully and Thenari areas. Visitors are advised to check the latest bus routes and timings before travelling.",
    },
    {
      mode: "By Train",
      text: "Palakkad Railway Station is approximately 12 km from the temple. Visitors can travel by train to Palakkad and arrange local transport for the onward journey. For train schedules and ticket bookings, visit https://www.irctc.co.in/nget/train-search.",
    },
    {
      mode: "By Air",
      text: "Visitors can reach the temple by road from nearby airports.\n Coimbatore International Airport is approximately 65 km away, \n Calicut International Airport is approximately 115 km away, \nCochin International Airport is approximately 120 km away.",
    },
  ],
};
// =========================================================
// WEEKLY TIMINGS — Sunday to Saturday
// =========================================================

export const weeklyTimings = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
].map((day) => ({ day, morning: MORNING.label, evening: EVENING.label }));

// =========================================================
// THEERTHAM HIGHLIGHTS
// =========================================================

export const waters = [
  {
    title: "Rama Theertham",
    text: "Rama-related traditions form an important part of the religious identity associated with Thenari.",
  },
  {
    title: "Lakshmana Theertham",
    text: "Lakshmana Theertham is mentioned in traditional accounts associated with the sacred landscape around Thenari.",
  },
];

export const surroundings = [
  {
    title: "Peaceful rural setting",
    text: "The temple is situated within the peaceful rural landscape of Elappully, surrounded by the natural beauty of Palakkad.",
  },
  {
    title: "Sacred spaces",
    text: "The temple and its sacred water source create a devotional environment for worshippers and visitors.",
  },
  {
    title: "Traditional worship",
    text: "Daily worship, offerings and special observances continue the temple's living devotional traditions.",
  },
];

// =========================================================
// DONATION — fill these in and the Donation page shows them.
// Leave a value empty and that option is simply hidden.
// The website does not process payments; it prepares the
// offering and hands the devotee to UPI / bank / WhatsApp.
// =========================================================

export const donation = {
  upiId: "", // e.g. 'thenaritemple@sbi'
  payeeName: "Thenari Theertham Sree Rama Temple",
  bank: {
    accountName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    branch: "",
  },
  amounts: [101, 501, 1001, 2501, 5001],
  purposes: [
    {
      id: "annadhanam",
      name: "Annadhanam",
      text: "Share a meal with devotees on special occasions and festival days.",
    },
    {
      id: "pooja",
      name: "Daily pooja and offerings",
      text: "Support the daily worship and the offerings made at the sanctum.",
    },
    {
      id: "theertham",
      name: "Care of the Theertham",
      text: "Help keep the sacred water source in front of the temple clean and cared for.",
    },
    {
      id: "festivals",
      name: "Festival celebrations",
      text: "Contribute to Sree Rama Navami, Navarathri, Deepavali and other observances.",
    },
    {
      id: "upkeep",
      name: "Temple upkeep",
      text: "General maintenance of the temple and its surroundings.",
    },
  ],
};

// =========================================================
// NAVIGATION
// =========================================================

export const navLinks = [
  {
    to: "/",
    label: "Home",
  },

  {
    to: "/history",
    label: "History",
  },

  {
    to: "/festivals",
    label: "Festivals",
  },

  {
    to: "/gallery",
    label: "Gallery",
  },

  {
    to: "/visit",
    label: "Reach Us",
  },

  {
    to: "/donation",
    label: "Donation",
  },
];

// =========================================================
// DEITIES
// =========================================================

export const deities = [
  {
    id: "ganesha",

    name: "Lord Ganesha",

    image: "/images/deity/ganesha.jpg",

    text: "Ganesha is one of the deities associated with the temple.",
  },

  {
    id: "rama",

    name: "Sree Rama",

    image: "/images/deity/1.jpg",

    text: "Sree Rama is the principal deity associated with Thenari Sree Rama Temple and is at the heart of the temple's devotional tradition.",
  },

  {
    id: "anjaneya",

    name: "Lord Anjaneya",

    image: "/images/deity/ananeya.jpg",

    text: "Lord Anjaneya is among the deities associated with the temple and its devotional traditions.",
  },
  {
    id: "navagraha",

    name: "Navagrahas",

    image: "/images/deity/navagraha.jpeg",

    text: "Navagrahas are the nine celestial deities in Hindu astrology who represent the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.",
  },
];

export const homeDeities = [
  {
    id: "rama",

    name: "Sree Rama",

    image: "/images/deity/1.jpg",

    text: "Sree Rama is the principal deity associated with Thenari Sree Rama Temple and is at the heart of the temple's devotional tradition.",
  },
  {
    id: "ganesha",

    name: "Lord Ganesha",

    image: "/images/deity/ganesha.jpg",

    text: "Ganesha is one of the deities associated with the temple.",
  },

  {
    id: "anjaneya",

    name: "Lord Anjaneya",

    image: "/images/deity/ananeya.jpg",

    text: "Lord Anjaneya is among the deities associated with the temple and its devotional traditions.",
  },
];

// =========================================================
// HOME HERO SLIDES (text is translated in templeData.ml.js)
// =========================================================

export const heroSlides = [
  {
    src: "/images/deity/1.jpg",
    kicker: "Principal deity",
    name: "Sree Rama",
    text: "Sree Rama, the principal deity of the temple, adorned with flower garlands.",
    alt: "Sree Rama adorned with flower garlands",
  },
  {
    src: "/images/deity/2.jpg",
    kicker: "The sanctum",
    name: "The deities on the golden seat",
    text: "The deities of the temple seated in the sacred sanctum.",
    alt: "The deities on the golden seat",
  },
  {
    src: "/images/deity/3.jpg",
    kicker: "Alankaram",
    name: "Adorned with garlands",
    text: "The deities dressed in garlands and ornaments for darshan.",
    alt: "The deities adorned with garlands",
  },
];

// =========================================================
// POOJAS & SEVA
// =========================================================

export const poojas = [
  {
    name: "Ottayappam",

    time: "Temple schedule",

    text: "Ottayappam is one of the offerings listed among the temple's devotional services.",

    details:
      "Please confirm the current offering procedure and timings with the temple.",
  },

  {
    name: "Vadamaala",

    time: "Temple schedule",

    text: "Vadamaala is a devotional offering associated with the temple.",

    details:
      "Please confirm the current availability and offering details with the temple.",
  },

  {
    name: "Vahana Pooja",

    time: "By arrangement",

    text: "Vahana Pooja is one of the services listed for devotees.",

    details:
      "Visitors should confirm the current procedure and schedule before bringing a vehicle.",
  },

  {
    name: "Vettila Maala",

    time: "Temple schedule",

    text: "Vettila Maala is listed among the devotional offerings associated with the temple.",

    details: "Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Vidhyarambham",

    time: "Special occasions",

    text: "Vidhyarambham is a traditional ceremony associated with the beginning of a child's education.",

    details: "Dates and arrangements should be confirmed with the temple.",
  },

  {
    name: "Vivaham",

    time: "By arrangement",

    text: "Marriage-related services are listed among the temple's services.",

    details:
      "Please contact the temple to confirm current arrangements and availability.",
  },
];

// =========================================================
// FESTIVALS
// =========================================================

export const festivals = [
  {
    name: "Sree Rama Navami",

    date: "Date varies annually",

    image: "/images/deity/1.jpg",

    text: "Sree Rama Navami is an important occasion associated with the worship of Sree Rama.",
  },

  {
    name: "Karkidaka Vavu",

    date: "Date varies annually",

    image: "/images/gallery/4.jpg",

    text: "Karkidaka Vavu is associated with ancestral rites and is an important observance connected with the sacred theertham.",
  },

  {
    name: "Hanumath Jayanthi",

    date: "Date varies annually",

    image: "/images/deity/ananeya.jpg",

    text: "Hanumath Jayanthi is an occasion associated with the worship of Lord Anjaneya.",
  },

  {
    name: "Navarathri",

    date: "Date varies annually",

    image: "/images/deity/2.jpg",

    text: "Navarathri is observed as part of the temple's annual religious calendar.",
  },

  {
    name: "Niraputhari",

    date: "Date varies annually",

    image: "/images/gallery/1.jpg",

    text: "Niraputhari is a traditional agricultural and religious observance associated with Kerala temple traditions.",
  },

  {
    name: "Thulavavu Tharpanam",

    date: "Date varies annually",

    image: "/images/gallery/10.jpg",

    text: "Thulavavu Tharpanam is associated with ancestral remembrance and religious observance.",
  },

  {
    name: "Ramayana Parayanam",

    date: "Karkidakam",

    image: "/images/gallery/5.jpg",

    text: "Ramayana Parayanam during the month of Karkidakam forms part of the devotional tradition associated with Kerala temples.",
  },

  {
    name: "Annadhanam",

    date: "Special occasions",

    image: "/images/gallery/6.jpg",

    text: "Annadhanam is associated with special religious occasions and community participation.",
  },

  {
    name: "Deepavali",

    date: "Date varies annually",

    image: "/images/deity/3.jpg",

    text: "Deepavali is reported among the important occasions associated with the temple.",
  },
];

// =========================================================
// GALLERY — real photographs from /public/images
// (w / h are the pixel sizes, so the grid never jumps while loading)
// =========================================================

const photo = (src, w, h, category, caption, alt) => ({
  id: src,
  src,
  w,
  h,
  category,
  caption,
  alt: alt || `${caption}, Thenari Sree Rama Temple`,
});

export const gallery = [
  photo(
    "/images/gallery/1.jpg",
    447,
    447,
    "Temple",
    "The temple beside the paddy fields",
  ),
  photo(
    "/images/gallery/4.jpg",
    447,
    447,
    "Temple",
    "The golden boat on the theertham",
  ),
  photo(
    "/images/deity/1.jpg",
    701,
    1023,
    "Deity",
    "Sree Rama in flower garlands",
  ),
  photo(
    "/images/gallery/2.jpg",
    738,
    414,
    "Temple",
    "Temple entrance and signboard",
  ),
  photo(
    "/images/gallery/5.jpg",
    387,
    516,
    "Temple",
    "Carved wooden temple facade",
  ),
  photo("/images/deity/ganesha.jpg", 640, 480, "Deity", "Lord Ganesha"),
  photo("/images/gallery/7.jpg", 399, 501, "Temple", "The boat at dusk"),
  photo(
    "/images/gallery/3.jpg",
    738,
    408,
    "Temple",
    "The path through the greenery",
  ),
  photo("/images/deity/ananeya.jpg", 736, 981, "Deity", "Lord Anjaneya"),
  photo("/images/gallery/9.jpg", 522, 383, "Temple", "Tiled temple roofs"),
  photo("/images/gallery/6.jpg", 364, 549, "Temple", "Traditional Kerala hall"),
  photo("/images/deity/2.jpg", 736, 981, "Deity", "Deities on the golden seat"),
  photo(
    "/images/gallery/10.jpg",
    516,
    387,
    "Temple",
    "Shrine and sacred water",
  ),
  photo(
    "/images/gallery/8.jpg",
    415,
    739,
    "Temple",
    "The golden boat with the deity",
  ),
  photo(
    "/images/deity/3.jpg",
    454,
    675,
    "Deity",
    "Deities adorned with garlands",
  ),
  photo(
    "/images/gallery/12.jpg",
    600,
    800,
    "Deity",
    "Sacred deity adorned with flowers",
  ),

  photo(
    "/images/gallery/13.jpg",
    800,
    533,
    "Temple",
    "Traditional temple architecture",
  ),

  photo(
    "/images/gallery/14.jpg",
    600,
    900,
    "Temple",
    "Theertham and temple surroundings",
  ),
  photo(
    "/images/gallery/15.jpg",
    738,
    492,
    "Temple",
    "Temple surrounded by greenery",
  ),
  photo(
    "/images/gallery/16.jpg",
    1600,
    900,
    "Temple",
    "Aerial view of the temple beside the sacred theertham",
  ),
  photo(
    "/images/gallery/17.jpg",
    1280,
    853,
    "Events",
    "Temple inauguration ceremony with devotees",
  ),
  photo(
    "/images/gallery/18.jpg",
    1500,
    1000,
    "Temple",
    "Traditional temple shrine surrounded by devotees",
  ),
  photo(
    "/images/gallery/19.jpg",
    640,
    480,
    "Rituals",
    "Sacred temple ritual during the shrine's construction",
  ),
  photo(
    "/images/gallery/20.jpg",
    1600,
    900,
    "Temple",
    "Bird's-eye view of the temple and surrounding paddy fields",
  ),
];

export const galleryCategories = [
  "All",
  "Temple",
  // "Architecture",
  // "Theertham",
  "Deity",
];

/* Videos shown on the History page (3 or 4 recommended).
   Paste the exact YouTube URL of each video, any format works:
   https://www.youtube.com/watch?v=XXXX | https://youtu.be/XXXX | .../shorts/XXXX
   Leave the list empty and the video section is hidden. */
export const templeVideos = [
  {
    url: "https://youtu.be/x38O59Sz10I?si=nIAZbx46kGxx59Xs",
    title:
      "Thenari Theertham, Sree Madhyaranya Sree Rama Temple Thenari|Palakkad|Kerala",
  },
  {
    url: "https://youtu.be/cd9fs-mJs9Q?si=xMQmRdVKL8ptCWrA",
    title: "தேனாரி இராமர் கோவில் || Elapully || chitoor || thenari || palakkad",
  },
  {
    url: "https://youtu.be/rQsA1ixUCDU?si=pdXzWRdOfFuxKu_d",
    title:
      "ഭഗവാൻ ശ്രീരാമൻ വിശ്രമിച്ച തേനാരി | Thenari Theertham | Thenari Sree Rama Temple",
  },
  {
    url: "https://youtu.be/n00fE4av47E?si=KwThNxToRbxeDmLR",
    title:
      "അത്ഭുത തീർത്ഥം ഒഴുകുന്ന തേനാരി ശ്രീരാമക്ഷേത്രം /Thenari Sree Rama Temple",
  },
  // { url: "https://www.youtube.com/watch?v=...", title: "Video title" },
];

/* Accepts watch, youtu.be, embed, shorts and live links */
export function youtubeId(url = "") {
  const m = String(url).match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/,
  );
  return m ? m[1] : null;
}

/* Valid videos only, with their YouTube id. Used by History and Gallery. */
export const videoItems = templeVideos
  .map((v) => ({ ...v, id: youtubeId(v.url) }))
  .filter((v) => v.id);

/* =========================================================
   INSTAGRAM REELS — shown on the History page ("Reels" tab) and in the
   Gallery ("Reels" section).
   Paste the exact reel link in "url":
     https://www.instagram.com/reel/XXXXXXXXXXX/
   Optional "cover": a screenshot of the reel saved in /public/images/reels/
   (used as the thumbnail; if left out, a temple photo is used).
   Leave the list empty and the reels tabs/sections are hidden.
   ========================================================= */
export const instagramProfile = ""; // e.g. "https://www.instagram.com/your_temple_page/"

/* Titles can be plain text, or one text per language: { en: "...", ml: "...", ta: "..." }.
   Optional "file": your own video, e.g. "/reels/reel-1.mp4" (put the file in
   /public/reels/). With "file" set, the reel plays in the website's own player
   and Instagram is not used at all. Without it, Instagram's player is embedded
   inside the page (sandboxed, so it can never send visitors to Instagram). */
export const templeReels = [
  {
    url: "https://www.instagram.com/reel/DbpgDkVCBpe/?cplk=MWpwdXQ1dGtzeDI1NQ==",
    title: {
      en: "Evening deeparadhana at Thenari",
      ml: "തേനാരിയിലെ സന്ധ്യാ ദീപാരാധന",
      ta: "தேனாரியில் மாலை தீபாராதனை",
    },
    cover: "/images/reels/reel-1.jpg",
    // file: "/reels/reel-1.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DMz80qMyEB-/?stkn=NHgxcnNobXEwbDN2",
    title: {
      en: "The Tenari Rama Lakshmana Temple visited by Jayam Ravi.",
      ml: "ജയം രവി സന്ദർശിച്ച തേനാരി രാമ ലക്ഷ്മണ ക്ഷേത്രം.",
      ta: "ஜெயம் ரவி சென்ற தேனாரி ராம லட்சுமண கோவில்.",
    },
    cover: "/images/reels/reel-1.jpg",
    // file: "/reels/reel-1.mp4",
  },
  {
    url: "https://www.instagram.com/reel/DUhGEUikvUG/?rpxt=MWRzc2N1bXMyZjkxeQ==",
    title: {
      en: "Tenari Rama Temple!!",
      ml: "തേനാരി രാമ ക്ഷേത്രം!!",
      ta: "தேனாரி ராமர் கோவில்!!",
    },
    cover: "/images/reels/reel-1.jpg",
    // file: "/reels/reel-1.mp4",
  },
];

/* Picks the title for the visitor's language */
export const titleOf = (t, lang) =>
  t && typeof t === "object" ? t[lang] || t.en || "" : t || "";

/* Accepts reel, reels, p and tv links (with or without ?igsh=... tracking) */
export function instagramId(url = "") {
  const m = String(url).match(
    /instagram\.com\/(?:[\w.]+\/)?(?:reels?|p|tv)\/([\w-]+)/i,
  );
  return m ? m[1] : null;
}

/* Valid reels only, with their Instagram code. Used by History and Gallery. */
export const reelItems = templeReels
  .map((r) => ({ ...r, id: instagramId(r.url) }))
  .filter((r) => r.id);
