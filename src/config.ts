export const site = {
  recipientName: "Eva",
  giverName: "Vlad", // shown nowhere by default, here if you want to sign a note
  introGreeting: "Oki deci...",
  introSubtitle: "Am facut un site. Nu te panica",
  // The button that "obviously invites clicking"
  ctaLabel: "Surprizaaa",
  endingLines: [
    "Happy Birthday, Eva ❤️",
    "I hope you will have an amazing birthday, I miss you",
    "I can't wait to see what adventures come next <3",
  ],
};

// Little disclaimers / jokes that appear while things "load"
export const loadingJokes = [
  "Aham...",
  "Ok dar nu te-a intrebat nimeni",
  "dUamna dar suntem la televizor",
  "La multi ani iubirea mea",
  "nu am nevoie de 2 iubiti",
  "Nu a puscat chiar totul :D",
];

// Tooltip one-liners sprinkled around interactive bits
export const tooltipJokes = [
  "Nu gandi, doar apasa",
  "Din nou :)",
  "Sper sa ai o zi de nastere superba in Burges",
  "10/10 curiozitate",
  "putin haos :)",
];

// Achievements that pop up as little toasts when you discover things
export const achievements = {
  firstStar: "⭐ Achievement: Steaua norocoasa",
  firstBalloon: "🎈 Achievement: Cui ii plac baloanele?",
  envelopeOpened: "💌 Achievement: Cutsy letter",
  giftOpened: "🎁 Achievement: Deschide Deschide Deschide",
  heartCaught: "❤️ Achievement: Cuuuute",
  flowerBloomed: "🌸 Achievement: Floricele pe campii",
  duckFound: "🦆 Achievement: Ha m-ai prins",
  moonClicked: "🌙 Achievement: Lunmoji",
  catFound: "🐱 Achievement: Nu intreba",
  fiveClicks: "✨ Achievement: Ai gasit un mic secret",
  candlesBlown: "🎂 Achievement: Birthday Mode Activated",
  allFound: "🏆 Achievement: Ai gasit totul felicitaari",
};


export const galleryNotes = [
  "Un cuplu superb",
  "Doua persoane dragute :)",
  "Arati super frumos aici",
  "Amintirea noastra favorita",
  "10/10 trebuie sa repetam",
  "My happy place",
  "Zambeam la poza asta",
  "Hihi :3",
  "You and me and me and you",
  "Bucuresti moment"
];

// ─────────────────────────────────────────────────────────────
//  📸  PHOTO GALLERY
//  Drop your images in /public/photos/ and list them here.
//  Add as many as you want (the layout adapts automatically).
//  `caption` is optional — leave it out and a random note
//  from `galleryNotes` above will be used instead.
// ─────────────────────────────────────────────────────────────
export type GalleryPhoto = {
  src: string;
  caption?: string;
  rotation?: number;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "public/photos/noi3.jpeg" },
  { src: "public/photos/noi2.jpeg" },
  { src: "public/photos/ateneunoi.jpeg" },
  { src: "public/photos/deieri.jpeg" },
  { src: "public/photos/lift.jpeg" },
  { src: "public/photos/sosete.jpeg" },
  { src: "public/photos/sarut.jpeg" },
  { src: "public/photos/parcnoi.jpeg" },
  { src: "public/photos/suc.jpeg" },
  { src: "public/photos/tinutmana.jpeg" },
];


export const playlist: { title: string; src: string }[] = [
  {title: "Piesa noastra poate :)", src: "public/music/mastermind.mp3"}
];
