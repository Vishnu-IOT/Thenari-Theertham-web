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

    text: "Thenari Theertham, also known as Saragangatheertha, is one of the distinctive spiritual features of the temple. Water flows day and night, for years on end, through the mouth of a stone bull (Nandi) set above the well, and devotees believe it is the water of the Ganga from Varanasi. The theertham is revered by devotees and is associated with ancestral rites, and it is especially significant during Karkidakam and new-moon rituals.",
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
    text: "Sree Rama is said to have loosed an arrow here, and clear water rose like a fountain to quench Sitadevi's thirst. This is the Sree Rama Theertham, also called Saragangatheertha.",
  },
  {
    title: "Lakshmana Theertham",
    text: "Lakshmana's arrow first opened a pit nearby, but the water that rose was muddy and could not be drunk. It is remembered as part of the sacred landscape of Thenari.",
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
  // ---- FILL THESE IN: they are shown on the Donation page ----
  upiId: "", // e.g. 'thenaritemple@sbi'. When set, a QR code is drawn from it.
  // Or put your own QR picture here (it wins over the generated one).
  qrImage: "/images/donation/qr.png",
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
    to: "/renovation",
    label: "Renovation",
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
    src: "/images/deity/2.webp",
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
    name: "Palpayasam",

    time: "Morning",

    text: "Palpayasam, a sweet kheer of milk, is the morning offering to Sree Rama.",

    details:
      "Offered at the morning pooja. Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Neypayasam",

    time: "Temple schedule",

    text: "Neypayasam is a rich kheer cooked with ghee, offered to the deity.",

    details:
      "Please confirm the current availability and offering details with the temple.",
  },

  {
    name: "Vadamaala",

    time: "Temple schedule",

    text: "Vadamaala is a garland of vadas offered to the deity as a devotional offering.",

    details:
      "Please confirm the current availability and offering details with the temple.",
  },

  {
    name: "Thulasi Maala",

    time: "Temple schedule",

    text: "A garland of holy tulsi leaves, offered for Lord Vishnu.",

    details: "Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Thamara Maala",

    time: "Temple schedule",

    text: "A garland of lotus flowers, offered for Sree Rama.",

    details: "Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Kadumadhuram",

    time: "Evening",

    text: "Kadumadhuram is the evening offering made to the deity.",

    details:
      "Offered at the evening pooja. Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Ottayappam",

    time: "Temple schedule",

    text: "Ottayappam is one of the offerings listed among the temple's devotional services.",

    details:
      "Please confirm the current offering procedure and timings with the temple.",
  },

  {
    name: "Vettila Maala",

    time: "Temple schedule",

    text: "Vettila Maala is listed among the devotional offerings associated with the temple.",

    details: "Please confirm the current offering procedure with the temple.",
  },

  {
    name: "Chorunivedyam",

    time: "Karkidakam, every day",

    text: "Throughout the Ramayana month, boiled rice is offered to the deity every day as a special offering, as part of the ancestral rites.",

    details:
      "Offered on all days of Karkidakam. Please confirm the arrangements with the temple.",
  },

  {
    name: "Vahana Pooja",

    time: "By arrangement",

    text: "Vahana Pooja is one of the services listed for devotees.",

    details:
      "Visitors should confirm the current procedure and schedule before bringing a vehicle.",
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
// TEMPLE AT A GLANCE (History page)
// =========================================================

export const templeFacts = [
  {
    id: "tantri",
    label: "Temple Tantri (head priest)",
    value: "Kattumadam Mana Pravin Namboothiri",
  },
  {
    id: "mandapam",
    label: "2024",
    value: "Renovation of the Mandapam",
  },
  {
    id: "prathishta",
    label: "Prathishta Dinam (consecration day)",
    value: "Rohini asterism in the Malayalam month of Medam",
  },
  {
    id: "karkidakam",
    label: "Karkidakam 1 to 31",
    value: "The most significant days of the year",
  },
];

// =========================================================
// THE LEGEND — Sree Rama Theertham / Saragangatheertha
// =========================================================

export const legendChapters = [
  {
    title: "From Lanka to Rameswaram",
    text: "After the battle at Lanka to win back Sita, Rama's party journeyed home to Ayodhya and first reached Rameswaram, in Tamil Nadu. There Sree Rama decided to build a Shiva temple. Hanuman was taking a long time to bring the Spadika linga from the Himalayas, so Sitadevi shaped a linga from sand and it was installed. When Hanuman arrived with his linga, Rama asked him to remove Sita's linga and set his own in its place. Strong as he was, Hanuman could not move it. He came to know the power of Goddess Sita, let go of his pride, and became the true servant of his masters, Rama and Lakshmana.",
  },
  {
    title: "A rest at Thenari",
    text: "The journey to Ayodhya continued, and the party reached Thenari and stopped to rest. Sitadevi grew very thirsty, but no drinking water could be found. Sree Rama asked Lakshmana to loose an arrow and open a pit nearby, but the water that rose was muddy and could not be drunk. Then Sree Rama shot an arrow himself, and clear water burst out like an artesian well and flowed like a fountain.",
  },
  {
    title: "Neerkumizhi Amman",
    text: "As the water rose, Ganga Devi sent one of her disciples, a water bubble (neerkumizhi), along with it to Thenari. She saw Sree Rama standing there, bowed to him and carried the news back to Ganga Devi. Sree Rama told her, since she had come, to stay and look after the people of Thenari. She is now worshipped as Neerkumizhi Amman, also known as Thrikkumuzhi Amman.",
  },
  {
    title: "The well and the stone bull",
    text: "A well was made over the spring, and a stone bull was placed on top of it with its mouth open over the water. The water flows through the bull's mouth all through the year, day and night. Devotees believe it is the water of the Ganga flowing at Varanasi in Uttar Pradesh.",
  },
  {
    title: "Madhyaranya Shiva Temple",
    text: "Sree Rama, Lakshmana and Sita went on to the Madhyaranya Shiva temple, worshipped Lord Shiva and then set off on their journey again. The special feature of this Shiva temple is that its linga is said to have been made by Parasurama. When the villagers tried to install a new linga during the renovation, they could not remove the old one, so it is believed to be especially powerful.",
  },
];

// =========================================================
// KARKIDAKAM — the Ramayana month
// =========================================================

export const karkidakamItems = [
  {
    title: "Karkidakam 1 to 31",
    text: "Every day of the month is very significant at Thenari.",
  },
  {
    title: "Chorunivedyam",
    text: "On all days of the Ramayana month, a special offering of boiled rice is made to the deity as part of the ancestral rites.",
  },
  {
    title: "Karkidaka Vavu",
    text: "More than 6,000 devotees come on this day for Pithru Tharpanam (ancestral rites). The temple committee provides all the facilities needed.",
  },
];

// =========================================================
// FESTIVALS
// =========================================================

export const festivals = [
  {
    name: "Sree Rama Navami",

    date: "Date varies annually",

    image: "/images/festivals/rama navami.png",

    text: "Rama Navami is a major festival that celebrates the birth of Lord Rama, the seventh avatar of Lord Vishnu. Falling on the ninth day of the Chaitra month (typically in March or April), it marks the culmination of the nine-day Chaitra Navaratri festival. \nLord Rama is revered as the epitome of righteousness, virtue, and truth (Dharma). On this auspicious day, devotees observe fasts, visit temples, read the epic Ramayana, and participate in chariot processions (Ratha Yatras) to seek blessings for peace, prosperity, and moral strength.",
  },

  {
    name: "Karkidaka Vavu",

    date: "Date varies annually",

    image: "/images/festivals/karkidaka Vavu.png",

    text: "Karkidaka Vavu is one of the most spiritually significant annual ancestral rituals performed in Kerala. Held on the Amavasya (new moon day) of the Malayalam month of Karkidakam (July–August),  over 6,000 devotees gather at the temple to perform Pithru Tharpanam (ancestral rites) to honor and seek salvation (moksha) for their deceased ancestors. \nThe ritual at Thenari holds extraordinary sanctity because of Thenari Theertham, a rare natural spring situated directly in front of the sanctum sanctorum. Devotees firmly believe its waters are as sacred as the River Ganges. According to legends, the site is deeply connected to the Ramayana, serving as a spot where Lord Rama and Lakshmana stayed during their search for Sita.",
  },

  {
    name: "Hanumath Jayanthi",

    date: "Date varies annually",

    image: "/images/deity/ananeya.jpg",

    text: "Hanuman Jayanti (also known as Hanuman Janmotsav) is a major Hindu festival that commemorates the divine birth of Lord Hanuman, the revered monkey-deity, symbol of selfless service, loyalty, strength (Bala), wisdom (Buddhi), and unwavering devotion (Bhakti) to Lord Rama. \nDuring this festival, devotees offer a traditional Vada Mala (a sacred garland made of crispy fried lentil donuts) as a special prasada to the deity, particularly in South Indian traditions, to seek his protection, courage, and blessings.",
  },

  {
    name: "Navarathri",

    date: "Date varies annually",

    image: "/images/festivals/navaratri.png",

    text: "Navarathri Golu (Bommakkolu) holds deep spiritual, educational, and communal importance across South India, including several border regions and specific communities in Kerala. While the mainstream celebrations of Navarathri in Kerala heavily prioritize Saraswati Puja and Vidyarambham, the tradition of arranging tiered doll displays—locally called Bommakkolu or Golu—is highly respected. \n One of the most essential and grand doll sets added to a Golu is the coronation scene of Lord Rama. It features Lord Rama and Sita Devi seated on the throne, flanked by Lakshmana, Bharata, Shatrughna, and Lord Hanuman bowing devotedly at their feet.",
  },

  {
    name: "Niraputhari",

    date: "Date varies annually",

    image: "/images/festivals/niraputhari.png",

    text: `Niraputhari (also spelled Niraputhiri) is a highly revered harvest ritual and festival celebrated in Kerala. The word literally translates to "Nira" (filling/abundance) and "Puthari" (new rice). It marks the symbolic beginning of the annual harvest season, serving as a Thanksgiving ritual where the first yield of fresh paddy sheaves (nelkathir) is offered to the deities before household use. \n"Illam Nira, Vallam Nira"`,
  },

  {
    name: "Thulavavu Tharpanam",

    date: "Date varies annually",

    image: "/images/festivals/thulavavu.png",

    text: "Thula Vavu Tharpanam (also known as Thulamasa Vavu Bali) is an ancestral homage ritual performed by Hindus in Kerala. It takes place on the Amavasya (No Moon Day) in the Malayalam month of Thulam (which typically falls between October and November).",
  },

  // {
  //   name: "Ramayana Parayanam",

  //   date: "Karkidakam",

  //   image: "/images/gallery/5.jpg",

  //   text: "Karkidakam 1 to 31, the Ramayana month, is the most significant period at Thenari. Ramayana Parayanam is recited, and boiled rice (Chorunivedyam) is offered to the deity every day.",
  // },

  // {
  //   name: "Annadhanam",

  //   date: "Special occasions",

  //   image: "/images/gallery/6.jpg",

  //   text: "Annadhanam is associated with special religious occasions and community participation.",
  // },

  {
    name: "Deepavali",

    date: "Date varies annually",

    image: "/images/festivals/deepavali.png",

    text: "The Deepavali festival is celebrated with immense grandeur and spiritual devotion at the Thenari Sree Rama Temple, located in the Elappully village of Palakkad district, Kerala.",
  },

  {
    name: "Prathishta Dinam",

    date: "Rohini, month of Medam",

    image: "/images/gallery/17.jpg",

    text: "The consecration day of the temple is observed on the Rohini asterism in the Malayalam month of Medam.",
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
  photo(
    "/images/deity/2.webp",
    736,
    981,
    "Deity",
    "Deities on the golden seat",
  ),
  photo(
    "/images/gallery/10.jpg",
    516,
    387,
    "Temple",
    "Shrine and sacred water",
  ),
  photo(
    "/images/gallery/8.webp",
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
    "Temple",
    "Sacred temple ritual during the shrine's construction",
  ),
  photo(
    "/images/gallery/20.jpg",
    1600,
    900,
    "Temple",
    "Bird's-eye view of the temple and surrounding paddy fields",
  ),
  photo(
    "/images/gallery/21.webp",
    720,
    405,
    "Temple",
    "Aerial view of Thenari temple surrounded by paddy fields and coconut trees",
  ),
  photo(
    "/images/gallery/22.webp",
    574,
    1020,
    "Temple",
    "Traditional temple entrance with red tiled roof and temple signboard",
  ),
  photo(
    "/images/gallery/23.webp",
    1360,
    765,
    "Temple",
    "Panoramic view of the temple nestled among lush green paddy fields",
  ),
  photo(
    "/images/gallery/24.webp",
    574,
    1020,
    "Temple",
    "Traditional temple pavilion surrounded by coconut palms",
  ),
  photo(
    "/images/gallery/26.webp",
    1360,
    1020,
    "Temple",
    "Traditional Kerala temple building with tiled roof and courtyard",
  ),
  photo(
    "/images/gallery/27.webp",
    765,
    1020,
    "Temple",
    "Sacred stone Nandi water fountain within the temple premises",
  ),
  photo(
    "/images/gallery/29.webp",
    1360,
    765,
    "Temple",
    "Temple building and sacred water tank surrounded by greenery",
  ),
  photo(
    "/images/gallery/31.webp",
    1360,
    765,
    "Deity",
    "Traditional painting depicting Sree Rama, Lakshmana and Sage Vishwamitra",
  ),
  photo(
    "/images/gallery/32.webp",
    765,
    1020,
    "Temple",
    "Ancient sacred stone sculpture with flowing water",
  ),
  photo(
    "/images/gallery/33.webp",
    459,
    1020,
    "Temple",
    "Sacred water flowing from the traditional stone Nandi sculpture",
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

/* Video on the HOME page (zoom-in section after Pooja and Seva).
   Use a YouTube link in "url", OR your own file in "file", e.g.
   "/videos/temple.mp4" (put it in /public/videos/ and add "poster").
   Leave both empty to use the first video above. */
export const homeVideo = {
  url: "",
  file: "",
  poster: "",
  title: "",
};

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

// =========================================================
// KARKIDAKAM — detailed view (Festivals page)
// =========================================================

export const karkidakamDetail = {
  image: "/images/gallery/5.jpg",
  sideImage: "/images/festivals/karkidaka Vavu.png",
  title: "Karkidakam at Thenari",
  intro:
    "Karkidakam, the Ramayana month, is the most significant period in the temple's year. Every day from the 1st to the 31st is observed with worship, Ramayana Parayanam and the offering of Chorunivedyam to Sree Rama.",
  stats: [
    { value: "1 – 31", label: "Every day of the month is significant" },
    { value: "6,000+", label: "Devotees on Karkidaka Vavu" },
    { value: "Daily", label: "Chorunivedyam offered to the deity" },
  ],
  blocks: [
    {
      title: "Ramayana Parayanam",
      text: "The Ramayana is recited at the temple through the month. Karkidakam is known as the Ramayana month, and at Sree Rama's temple at Thenari it is the heart of the annual calendar.",
    },
    {
      title: "Chorunivedyam",
      text: "On all days of Karkidakam a special offering of boiled rice is made to the deity as part of the ancestral rites. Please confirm the arrangements with the temple before you visit.",
    },
    {
      title: "Karkidaka Vavu and Pithru Tharpanam",
      text: "On Karkidaka Vavu more than 6,000 devotees come for Pithru Tharpanam, the rites for ancestors, at the sacred theertham. The temple committee provides all the facilities needed.",
    },
    {
      title: "The sacred theertham",
      text: "Water flows day and night through the mouth of a stone bull above the well, and devotees believe it is the water of the Ganga from Varanasi. The theertham is especially significant during Karkidakam and new-moon rituals.",
    },
  ],
  note: "The date of Karkidaka Vavu changes every year. Call the temple to confirm this year's date and timings.",
};

// =========================================================
// RENOVATION — the renovated Mandapam (opened 2024) and notable visits
// (the export keeps its old name `inauguration` so every language file
// and the data loader keep working)
// =========================================================

export const inauguration = {
  to: "/renovation",
  year: "2024",
  title: "Renovation of the Mandapam",
  image: "/images/temple/renovation.png",
  imageAlt:
    "Ribbon being cut at the entrance of the renovated Mandapam, with marigold garlands and devotees looking on",
  lead: "In 2024 the renovated Mandapam of Sree Madhyaranya Sree Rama Temple Thenari was opened for devotees.",
  story: [
    "The entrance was dressed with long strings of marigold garlands. Committee members, devotees and invited guests gathered at the doorway, and the ribbon was cut to open the renovated Mandapam.",
    "The Mandapam gives devotees more covered space at the temple, beside the sacred theertham and the sanctum of Sree Rama.",
  ],
  facts: [
    { label: "Year", value: "2024" },
    { label: "Work", value: "Renovation of the Mandapam" },
    {
      label: "Place",
      value: "Sree Madhyaranya Sree Rama Temple Thenari, Elappully, Palakkad",
    },
  ],
  moments: [
    {
      title: "The ribbon cutting",
      text: "The renovated Mandapam was opened with a ribbon cutting at its main entrance.",
    },
    {
      title: "Marigold garlands",
      text: "Garlands of marigold lined the pillars and the roof edge of the new hall.",
    },
    {
      title: "Devotees together",
      text: "Committee members and devotees stood together at the doorway for the opening.",
    },
  ],
  guest: {
    image: "/images/inauguration/mla-ramesh-pisharodi.webp",
    imageAlt:
      "MLA Ramesh Pisharodi being welcomed with a yellow shawl inside the temple hall",
    title: "MLA Ramesh Pisharodi",
    caption: "MLA Ramesh Pisharodi is welcomed at the temple with a shawl.",
  },
  // A notable visitor. Put his photo at the path below; until the file
  // exists the page shows the text without a picture.
  visitor: {
    // The Instagram reel of the visit. It plays on the page when tapped.
    reel: "https://www.instagram.com/reel/DMz80qMyEB-/",
    image: "/images/inauguration/jayam-ravi.webp",
    imageAlt: "Actor Jayam Ravi at Sree Madhyaranya Sree Rama Temple Thenari",
    name: "Jayam Ravi",
    role: "Film actor",
    title: "Jayam Ravi visits the temple",
    text: "The film actor Jayam Ravi visited Sree Madhyaranya Sree Rama Temple at Thenari. The temple committee and devotees are glad to share the moment.",
    caption: "Actor Jayam Ravi at the temple.",
  },
};

// =========================================================
// TEMPLE FAMILY
// Tantri and priests are listed with a role; the committee lists below are
// plain names. Names stay in the same spelling in every language.
// Entries with draft: true are placeholders: they show only while
// developing (npm run dev) and are hidden in the live build.
// =========================================================

export const templePeople = [
  {
    id: "priests",
    entries: [
      {
        id: "tantri",
        name: "Kattumadam Mana Pravin Namboothiri",
        role: "Temple Tantri (head priest)",
        contribution:
          "Guides the tantric rites and the daily worship of Sree Rama at the temple.",
        photo: "",
      },
      {
        id: "melshanthi",
        draft: true,
        name: "Name to be added",
        role: "Melshanthi (chief priest)",
        contribution: "",
        photo: "",
      },
    ],
  },
];

export const templeCommittee = {
  trustees: [
    { name: "Add Name", chair: true },
    { name: "Add Name" },
    { name: "Add Name" },
    { name: "Add Name" },
    { name: "Add Name" },
    { name: "Add Name" },
  ],

  manager: "Add Name",

  patrons: ["Add Name", "Add Name", "Add Name"],

  // Role keys are translated in strings.js (people.role.*).
  // name: null shows the Temple Manager.
  officeBearers: [
    { role: "president", name: "Add Name" },
    { role: "secretary", name: "Add Name" },
    { role: "treasurer", name: "Add Name" },
    { role: "jtTreasurer", name: "Add Name" },
  ],

  vicePresidents: ["Add Name", "Add Name", "Add Name", "Add Name"],

  jtSecretaries: ["Add Name", "Add Name", "Add Name", "Add Name"],
};

// =========================================================
// POOJA OFFERINGS AND RATES — the home page carousel (6 a slide, up to 24)
// and the Donation page dropdown. "amount" is the temple's rate in rupees.
// (The History page "Pooja & Seva" keeps using `poojas` above.)
// The Malayalam and Tamil files list the same offerings in the same order.
// =========================================================

export const poojaRates = [
  { name: "Pushpanjali", tag: "Archana", amount: 10, text: "An offering of flowers with prayers to Sree Rama." },
  { name: "Ghee Lamp", tag: "Offering", amount: 20, text: "A lamp lit with ghee before the deity." },
  { name: "Sukta Pushpanjali", tag: "Archana", amount: 20, text: "Pushpanjali offered with the chanting of suktams." },
  { name: "Purusha Suktam", tag: "Archana", amount: 20, text: "Pooja with the chanting of the Purusha Suktam." },
  { name: "Santhana Gopalam", tag: "Prayer", amount: 20, text: "A prayer for children and the well-being of the family." },
  { name: "Roga Shamanam", tag: "Prayer", amount: 20, text: "A prayer for relief from illness." },
  { name: "Ayur Arogyam", tag: "Prayer", amount: 20, text: "A prayer for long life and good health." },
  { name: "Aval Nivedyam", tag: "Nivedyam", amount: 30, text: "Flattened rice offered to the deity." },
  { name: "Palpayasam", tag: "Nivedyam", amount: 80, text: "A sweet kheer of milk offered to Sree Rama." },
  { name: "Sharkara Payasam", tag: "Nivedyam", amount: 80, text: "A sweet kheer offered to the deity." },
  { name: "Ganapathi Homam", tag: "Homam", amount: 100, text: "A fire offering to Lord Ganapathi for a good beginning." },
  { name: "Trimadhuram", tag: "Nivedyam", amount: 40, text: "A sweet offering made to the deity." },
  { name: "Palabhishekam", tag: "Abhishekam", amount: 40, text: "Abhishekam of the deity with milk." },
  { name: "Chandanakkappu", tag: "Pooja", amount: 150, text: "The deity adorned with sandalwood paste." },
  { name: "Navagraha Pooja", tag: "Pooja", amount: 150, text: "Pooja to the nine planets." },
  { name: "Tender Coconut Abhishekam", tag: "Abhishekam", amount: 45, text: "Abhishekam of the deity with tender coconut water." },
  { name: "Sankhabhishekam", tag: "Abhishekam", amount: 20, text: "Abhishekam of the deity with water from the conch." },
  { name: "Betel-leaf Garland", tag: "Garland", amount: 30, text: "A garland of betel leaves offered to the deity." },
  { name: "Thulasi Garland", tag: "Garland", amount: 75, text: "A garland of holy tulsi leaves offered to the deity." },
  { name: "Orunaal Pooja", tag: "Pooja", amount: 400, text: "A pooja for one day at the temple." },
  { name: "Sahasranamam", tag: "Archana", amount: 50, text: "Chanting of the thousand names of the deity." },
  { name: "Choroonu", tag: "Ceremony", amount: 100, text: "The first rice-feeding ceremony of a child." },
  { name: "Vennakkappu", tag: "Pooja", amount: 600, text: "The deity adorned with butter." },
  { name: "Vahana Pooja", tag: "Pooja", amount: 50, text: "A pooja for the blessing of a vehicle." },
];
