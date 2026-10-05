const img = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// =========================================================
// TEMPLE DATA
// =========================================================

export const templeData = {
  name: "Thenari Theertham",

  subtitle: "Sree Madhyarani Sree Rama Temple",

  tagline:
    "A sacred place of devotion, tradition and timeless faith in the heart of Thenari.",

  // =======================================================
  // HERITAGE
  // =======================================================

  heritage: [
    "Thenari Sree Rama Temple is situated at Thenari in Elappully, Palakkad, Kerala. The temple is closely associated with the sacred Thenari Theertham, a natural spring or water source located in front of the temple.",

    "According to traditional accounts, the area is associated with the Ramayana and is believed to have been connected with the journey of Sree Rama and Lakshmana through the region. These stories form part of the religious tradition and faith associated with the temple.",

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
  // IMAGES — KEEPING ORIGINAL STRUCTURE
  // =======================================================

  images: {
    hero: img("thenari-hero", 1600, 1000),

    heritage: img("thenari-heritage", 1200, 900),

    theertham: img("thenari-theertham", 1200, 900),

    theertham2: img("thenari-theertham-2", 1200, 900),
  },

  // =======================================================
  // TEMPLE TIMINGS
  // =======================================================

  timings: {
    morning: "5:30 AM – 10:30 AM",

    evening: "5:00 PM – 7:00 PM",

    note: "Temple timings may vary on special occasions and festival days. Devotees are advised to confirm the timings before visiting.",
  },

  // =======================================================
  // CONTACT
  // =======================================================

  contact: {
    phone: "+91 62822 53183",

    email: "",

    address:
      "Theertham Paadam, Thenari Road, Elappully, Palakkad, Kerala 678622, India",

    hours: "5:30 AM – 10:30 AM / 5:00 PM – 7:00 PM",
  },

  // =======================================================
  // LOCATION
  // =======================================================

  location: {
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Thenari+Theertham+Sree+Madhyarani+Sree+Rama+Temple+Elappully+Palakkad+Kerala",

    embedUrl: "",
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

      text: "Thenari is located in Elappully, Palakkad district, along the Palakkad–Pollachi road corridor. Visitors can use the temple's map location to plan their current driving route.",
    },

    {
      mode: "By Bus",

      text: "Local bus services connect the surrounding Elappully and Thenari areas. Visitors are advised to check the latest local bus routes before travelling.",
    },

    {
      mode: "By Train",

      text: "Palakkad railway station is approximately 12 km from the temple according to published travel descriptions. Local transport can be used for the onward journey.",
    },

    {
      mode: "By Air",

      text: "Visitors travelling by air can use a current route planner to determine the most suitable airport and onward road connection to Thenari.",
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
    to: "/temple",
    label: "Temple",
  },

  {
    to: "/history",
    label: "History",
  },

  {
    to: "/theertham",
    label: "Theertham",
  },

  {
    to: "/pooja-seva",
    label: "Pooja & Seva",
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
    label: "Visit Us",
  },

  {
    to: "/contact",
    label: "Contact",
  },
];

// =========================================================
// DEITIES
// =========================================================

export const deities = [
  {
    name: "Sree Rama",

    image: img("sree-rama", 800, 1000),

    text: "Sree Rama is the principal deity associated with Thenari Sree Rama Temple and is at the heart of the temple's devotional tradition.",
  },

  {
    name: "Sree Sastha",

    image: img("sree-sastha", 800, 1000),

    text: "Sree Sastha is one of the deities associated with the temple.",
  },

  {
    name: "Lord Anjaneya",

    image: img("lord-anjaneya", 800, 1000),

    text: "Lord Anjaneya is among the deities associated with the temple and its devotional traditions.",
  },
];

// =========================================================
// POOJAS & SEVA
// =========================================================

export const poojas = [
  {
    name: "Unniyappam",

    time: "Temple schedule",

    text: "Unniyappam is one of the offerings listed among the temple's devotional services.",

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

    image: img("sree-rama-navami", 1200, 800),

    text: "Sree Rama Navami is an important occasion associated with the worship of Sree Rama.",
  },

  {
    name: "Karkidaka Vavu",

    date: "Date varies annually",

    image: img("karkidaka-vavu", 1200, 800),

    text: "Karkidaka Vavu is associated with ancestral rites and is an important observance connected with the sacred theertham.",
  },

  {
    name: "Hanumath Jayanthi",

    date: "Date varies annually",

    image: img("hanumath-jayanthi", 1200, 800),

    text: "Hanumath Jayanthi is an occasion associated with the worship of Lord Anjaneya.",
  },

  {
    name: "Navarathri",

    date: "Date varies annually",

    image: img("navarathri", 1200, 800),

    text: "Navarathri is observed as part of the temple's annual religious calendar.",
  },

  {
    name: "Niraputhari",

    date: "Date varies annually",

    image: img("niraputhari", 1200, 800),

    text: "Niraputhari is a traditional agricultural and religious observance associated with Kerala temple traditions.",
  },

  {
    name: "Thulavavu Tharpanam",

    date: "Date varies annually",

    image: img("thulavavu-tharpanam", 1200, 800),

    text: "Thulavavu Tharpanam is associated with ancestral remembrance and religious observance.",
  },

  {
    name: "Ramayana Parayanam",

    date: "Karkidakam",

    image: img("ramayana-parayanam", 1200, 800),

    text: "Ramayana Parayanam during the month of Karkidakam forms part of the devotional tradition associated with Kerala temples.",
  },

  {
    name: "Annadhanam",

    date: "Special occasions",

    image: img("annadhanam", 1200, 800),

    text: "Annadhanam is associated with special religious occasions and community participation.",
  },

  {
    name: "Deepavali",

    date: "Date varies annually",

    image: img("deepavali", 1200, 800),

    text: "Deepavali is reported among the important occasions associated with the temple.",
  },
];

// =========================================================
// HIGHLIGHTS
// =========================================================

export const highlights = [
  {
    title: "Thenari Theertham",

    image: img("highlight-theertham", 1000, 750),

    text: "The sacred water source in front of the temple is one of the defining spiritual features of Thenari.",
  },

  {
    title: "Temple Surroundings",

    image: img("highlight-surroundings", 1000, 750),

    text: "The temple is situated within the peaceful rural landscape of Elappully, surrounded by the natural beauty of Palakkad.",
  },

  {
    title: "Sacred Spaces",

    image: img("highlight-sacred-space", 1000, 750),

    text: "The temple and its sacred water source create a devotional environment for worshippers and visitors.",
  },

  {
    title: "Traditional Worship",

    image: img("highlight-worship", 1000, 750),

    text: "Daily worship, offerings and special observances continue the temple's living devotional traditions.",
  },

  {
    title: "Rama Theertham",

    image: img("rama-theertham", 1000, 750),

    text: "Rama-related traditions form an important part of the religious identity associated with Thenari.",
  },

  {
    title: "Lakshmana Theertham",

    image: img("lakshmana-theertham", 1000, 750),

    text: "Lakshmana Theertham is mentioned in traditional accounts associated with the sacred landscape around Thenari.",
  },
];

// =========================================================
// GALLERY
// =========================================================

const cats = [
  "Temple",
  "Deity",
  "Theertham",
  "Festivals",
  "Pooja",
  "Architecture",
  "Nature",
];

export const galleryCategories = ["All", ...cats];

export const gallery = cats.flatMap((category, index) => [
  {
    id: `${category.toLowerCase()}-1`,

    category,

    src: img(`thenari-gallery-${category.toLowerCase()}-1`, 1200, 800),

    caption: `${category} — Thenari Theertham`,

    alt: `${category} at Thenari Theertham, Sree Madhyarani Sree Rama Temple`,
  },

  {
    id: `${category.toLowerCase()}-2`,

    category,

    src: img(`thenari-gallery-${category.toLowerCase()}-2`, 1200, 800),

    caption: `${category} — Sacred Heritage`,

    alt: `Sacred heritage and surroundings of Thenari Sree Rama Temple`,
  },
]);
