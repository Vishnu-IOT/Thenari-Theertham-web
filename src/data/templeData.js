// =========================================================
// TEMPLE DATA — edit everything about the temple here.
// Pages read from this file, so no page code needs to change.
// =========================================================

export const templeData = {
  name: 'Thenari Theertham',
  subtitle: 'Sree Madhyarani Sree Rama Temple',
  tagline:
    'A sacred place of devotion, tradition and timeless faith in the heart of Thenari.',

  heritage: [
    'Thenari Sree Rama Temple is situated at Thenari in Elappully, Palakkad, Kerala. The temple is closely associated with the sacred Thenari Theertham, a natural spring or water source located in front of the temple.',
    'According to traditional accounts, the area is associated with the Ramayana and is believed to have been connected with the journey of Sree Rama and Lakshmana through the region. These stories form part of the religious tradition and faith associated with the temple.',
    'The temple continues to be a place of worship where devotees gather for daily prayers, special offerings, ancestral rites and important religious observances.',
  ],

  theertham: {
    quote: 'Where sacred waters meet timeless devotion.',
    text: 'Thenari Theertham is one of the distinctive spiritual features of the temple. The sacred water source in front of the temple is traditionally revered by devotees and is associated with ancestral rites and other religious observances. The theertham is especially significant during occasions connected with Karkidakam and new-moon rituals.',
  },

  // Opening windows as [hour, minute] in 24h, Indian Standard Time.
  // Used for the live "open now" ribbon on the Home page.
  timings: {
    morning: { label: '5:30 AM – 10:30 AM', open: [5, 30], close: [10, 30] },
    evening: { label: '5:00 PM – 7:00 PM', open: [17, 0], close: [19, 0] },
    note: 'Temple timings may vary on special occasions and festival days. Devotees are advised to confirm the timings before visiting.',
  },

  contact: {
    phone: '+91 62822 53183',
    whatsapp: '916282253183', // digits only, with country code
    email: '', // add an email and it will appear on the Contact page
    address: 'Theertham Paadam, Thenari Road, Elappully, Palakkad, Kerala 678622, India',
    hours: '5:30 AM – 10:30 AM / 5:00 PM – 7:00 PM',
  },

  location: {
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Thenari+Theertham+Sree+Madhyarani+Sree+Rama+Temple+Elappully+Palakkad+Kerala',
    embedUrl:
      'https://maps.google.com/maps?q=Thenari+Theertham+Sree+Madhyarani+Sree+Rama+Temple+Elappully+Palakkad+Kerala&output=embed',
  },

  social: [], // e.g. { label: 'Facebook', url: 'https://…' }

  reach: [
    {
      mode: 'By Road',
      text: "Thenari is located in Elappully, Palakkad district, along the Palakkad–Pollachi road corridor. Visitors can use the temple's map location to plan their current driving route.",
    },
    {
      mode: 'By Bus',
      text: 'Local bus services connect the surrounding Elappully and Thenari areas. Visitors are advised to check the latest local bus routes before travelling.',
    },
    {
      mode: 'By Train',
      text: 'Palakkad railway station is approximately 12 km from the temple according to published travel descriptions. Local transport can be used for the onward journey.',
    },
    {
      mode: 'By Air',
      text: 'Visitors travelling by air can use a current route planner to determine the most suitable airport and onward road connection to Thenari.',
    },
  ],
}

// =========================================================
// DONATION — fill these in and the Donation page shows them.
// Leave a value empty and that option is simply hidden.
// The website does not process payments; it prepares the
// offering and hands the devotee to UPI / bank / WhatsApp.
// =========================================================

export const donation = {
  upiId: '', // e.g. 'thenaritemple@sbi'
  payeeName: 'Thenari Theertham Sree Rama Temple',
  bank: {
    accountName: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
    branch: '',
  },
  amounts: [101, 501, 1001, 2501, 5001],
  purposes: [
    {
      id: 'annadhanam',
      name: 'Annadhanam',
      text: 'Share a meal with devotees on special occasions and festival days.',
    },
    {
      id: 'pooja',
      name: 'Daily pooja and offerings',
      text: 'Support the daily worship and the offerings made at the sanctum.',
    },
    {
      id: 'theertham',
      name: 'Care of the Theertham',
      text: 'Help keep the sacred water source in front of the temple clean and cared for.',
    },
    {
      id: 'festivals',
      name: 'Festival celebrations',
      text: 'Contribute to Sree Rama Navami, Navarathri, Deepavali and other observances.',
    },
    {
      id: 'upkeep',
      name: 'Temple upkeep',
      text: 'General maintenance of the temple and its surroundings.',
    },
  ],
}

// =========================================================
// NAVIGATION — exactly five pages
// =========================================================

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/donation', label: 'Donation' },
]

// =========================================================
// DEITIES
// =========================================================

export const deities = [
  {
    name: 'Sree Rama',
    script: 'ശ്രീരാമൻ',
    text: "Sree Rama is the principal deity associated with Thenari Sree Rama Temple and is at the heart of the temple's devotional tradition.",
  },
  {
    name: 'Sree Sastha',
    script: 'ശാസ്താവ്',
    text: 'Sree Sastha is one of the deities associated with the temple.',
  },
  {
    name: 'Lord Anjaneya',
    script: 'ആഞ്ജനേയൻ',
    text: "Lord Anjaneya is among the deities associated with the temple and its devotional traditions.",
  },
]

// =========================================================
// THEERTHAM HIGHLIGHTS
// =========================================================

export const waters = [
  {
    title: 'Rama Theertham',
    text: 'Rama-related traditions form an important part of the religious identity associated with Thenari.',
  },
  {
    title: 'Lakshmana Theertham',
    text: 'Lakshmana Theertham is mentioned in traditional accounts associated with the sacred landscape around Thenari.',
  },
]

export const surroundings = [
  {
    title: 'Peaceful rural setting',
    text: 'The temple is situated within the peaceful rural landscape of Elappully, surrounded by the natural beauty of Palakkad.',
  },
  {
    title: 'Sacred spaces',
    text: 'The temple and its sacred water source create a devotional environment for worshippers and visitors.',
  },
  {
    title: 'Traditional worship',
    text: "Daily worship, offerings and special observances continue the temple's living devotional traditions.",
  },
]

// =========================================================
// POOJAS & SEVA
// =========================================================

export const poojas = [
  {
    name: 'Unniyappam',
    time: 'Temple schedule',
    text: "Unniyappam is one of the offerings listed among the temple's devotional services.",
    details: 'Please confirm the current offering procedure and timings with the temple.',
  },
  {
    name: 'Vadamaala',
    time: 'Temple schedule',
    text: 'Vadamaala is a devotional offering associated with the temple.',
    details: 'Please confirm the current availability and offering details with the temple.',
  },
  {
    name: 'Vahana Pooja',
    time: 'By arrangement',
    text: 'Vahana Pooja is one of the services listed for devotees.',
    details: 'Visitors should confirm the current procedure and schedule before bringing a vehicle.',
  },
  {
    name: 'Vettila Maala',
    time: 'Temple schedule',
    text: "Vettila Maala is listed among the devotional offerings associated with the temple.",
    details: 'Please confirm the current offering procedure with the temple.',
  },
  {
    name: 'Vidhyarambham',
    time: 'Special occasions',
    text: "Vidhyarambham is a traditional ceremony associated with the beginning of a child's education.",
    details: 'Dates and arrangements should be confirmed with the temple.',
  },
  {
    name: 'Vivaham',
    time: 'By arrangement',
    text: "Marriage-related services are listed among the temple's services.",
    details: 'Please contact the temple to confirm current arrangements and availability.',
  },
]

// =========================================================
// FESTIVALS
// =========================================================

export const festivals = [
  { name: 'Sree Rama Navami', date: 'Date varies annually', text: 'Sree Rama Navami is an important occasion associated with the worship of Sree Rama.' },
  { name: 'Karkidaka Vavu', date: 'Date varies annually', text: 'Karkidaka Vavu is associated with ancestral rites and is an important observance connected with the sacred theertham.' },
  { name: 'Hanumath Jayanthi', date: 'Date varies annually', text: 'Hanumath Jayanthi is an occasion associated with the worship of Lord Anjaneya.' },
  { name: 'Navarathri', date: 'Date varies annually', text: "Navarathri is observed as part of the temple's annual religious calendar." },
  { name: 'Niraputhari', date: 'Date varies annually', text: 'Niraputhari is a traditional agricultural and religious observance associated with Kerala temple traditions.' },
  { name: 'Thulavavu Tharpanam', date: 'Date varies annually', text: 'Thulavavu Tharpanam is associated with ancestral remembrance and religious observance.' },
  { name: 'Ramayana Parayanam', date: 'Karkidakam', text: 'Ramayana Parayanam during the month of Karkidakam forms part of the devotional tradition associated with Kerala temples.' },
  { name: 'Annadhanam', date: 'Special occasions', text: 'Annadhanam is associated with special religious occasions and community participation.' },
  { name: 'Deepavali', date: 'Date varies annually', text: 'Deepavali is reported among the important occasions associated with the temple.' },
]

// =========================================================
// GALLERY
// Photos live in /public/images/temple/gallery/.
// To add your own: drop the file there and add a line below.
// `shape` only affects the tile height (tall | wide | square).
// =========================================================

const G = '/images/temple/gallery/'

export const galleryCategories = ['All', 'Deity', 'Theertham', 'Craft']

export const gallery = [
  { id: 'rama-full', category: 'Deity', src: G + 'rama-full.webp', shape: 'square', caption: 'Sree Rama and Devi in gold', alt: 'Golden sculpture of Sree Rama holding a bow, with a figure standing beside him' },
  { id: 'boat-full', category: 'Theertham', src: G + 'boat-full.webp', shape: 'tall', caption: 'The sacred boat on the water', alt: 'A golden boat decorated with flower garlands carrying a deity panel on the water' },
  { id: 'rama-face', category: 'Deity', src: G + 'rama-face.webp', shape: 'tall', caption: 'The crowned countenance of Sree Rama', alt: 'Close view of the crowned face of the Sree Rama sculpture' },
  { id: 'chakra-full', category: 'Craft', src: G + 'chakra-full.webp', shape: 'square', caption: 'The golden chakra', alt: 'An ornate golden wheel with flame-like petals' },
  { id: 'boat-deity', category: 'Deity', src: G + 'boat-deity.webp', shape: 'tall', caption: 'Deity panel framed in garlands', alt: 'Golden deity panel with white and red flower garlands' },
  { id: 'boat-carving', category: 'Craft', src: G + 'boat-carving.webp', shape: 'wide', caption: 'Carved prow and golden hull', alt: 'Carved golden hull of the boat reflected in the water' },
  { id: 'sita', category: 'Deity', src: G + 'sita.webp', shape: 'tall', caption: 'Devi in blessing', alt: 'Golden sculpture of Devi with a raised hand in blessing' },
  { id: 'chakra-centre', category: 'Craft', src: G + 'chakra-centre.webp', shape: 'square', caption: 'The lotus at the centre of the wheel', alt: 'Close view of the lotus at the centre of the golden wheel' },
  { id: 'boat-garland', category: 'Theertham', src: G + 'boat-garland.webp', shape: 'tall', caption: 'Greenery and garlands at the prow', alt: 'Leaf garlands and flowers on the prow of the boat' },
  { id: 'rama-bow', category: 'Deity', src: G + 'rama-bow.webp', shape: 'tall', caption: 'The bow of Sree Rama', alt: 'Golden sculpture of Sree Rama holding his bow' },
]
