// Event website showreel.
//
// Each entry pairs a screen-recording in public/video/event-showreel/ with a
// poster generated from the video's first frame, so a card can show a still
// without downloading a single byte of video. The video is only fetched once
// the visitor hovers a card or opens the lightbox.

export type EventProject = {
  id: string;
  name: string;
  category: EventProjectCategory;
  description: string;
};

export const eventProjectCategories = [
  "Conference",
  "Summit",
  "Festival",
  "Community",
  "Developer Event",
  "Webinar",
] as const;

export type EventProjectCategory = (typeof eventProjectCategories)[number];

export const videoSrc = (id: string) => `/video/event-showreel/${id}.webm`;
export const posterSrc = (id: string) => `/images/event-showreel/${id}.webp`;

export const eventProjects: EventProject[] = [
  {
    id: "confex",
    name: "ConfexPro",
    category: "Conference",
    description:
      "Landing page konferensi kreatif dengan hero video, countdown, dan alur beli tiket yang langsung kelihatan.",
  },
  {
    id: "config",
    name: "Config",
    category: "Summit",
    description:
      "Halaman summit AI dua format, on-site dan online, lengkap dengan jadwal, pembicara, dan registrasi.",
  },
  {
    id: "crowdix",
    name: "Crowdix",
    category: "Conference",
    description:
      "Konferensi tahunan dengan tipografi besar, daftar pembicara, dan blok sponsor yang menonjol.",
  },
  {
    id: "stagefy",
    name: "Stagefy",
    category: "Festival",
    description:
      "Expo tiga hari untuk kreator dan inovator, dengan agenda per hari dan halaman pass bertingkat.",
  },
  {
    id: "confera",
    name: "Confera",
    category: "Conference",
    description:
      "Konferensi dengan gaya editorial berwarna, agenda, arsip rekaman sesi, dan pembelian tiket.",
  },
  {
    id: "next-summit",
    name: "Next Summit",
    category: "Summit",
    description:
      "Summit teknologi tiga hari dengan jadwal per track, profil pembicara, dan FAQ peserta.",
  },
  {
    id: "eventry",
    name: "Eventry",
    category: "Community",
    description:
      "Platform event modern untuk konferensi dan festival kreatif, dari venue sampai harga tiket.",
  },
  {
    id: "mdntevents",
    name: "MDNT Events",
    category: "Festival",
    description:
      "Event agency yang menghubungkan brand dengan audiensnya lewat pengalaman langsung dan studi kasus.",
  },
  {
    id: "meetzen",
    name: "Meetzen",
    category: "Community",
    description:
      "Halaman gathering komunitas dengan fokus networking, klaim tiket cepat, dan galeri suasana acara.",
  },
  {
    id: "evendo",
    name: "Evendo",
    category: "Conference",
    description:
      "Konferensi multi-hari dengan detail venue, tanggal, dan alur beli tiket langsung dari hero.",
  },
  {
    id: "eventify",
    name: "Eventify",
    category: "Conference",
    description:
      "Konferensi bergaya monokrom dengan marquee tipografi, agenda, dan tombol registrasi menempel.",
  },
  {
    id: "eventix",
    name: "Eventix",
    category: "Developer Event",
    description:
      "Event developer dengan halaman sponsor terpisah, profil pembicara, dan info venue yang jelas.",
  },
  {
    id: "evento",
    name: "Evento",
    category: "Summit",
    description:
      "Summit kreator satu hari dengan layout terang, arsip sesi, dan navigasi jadwal yang ringkas.",
  },
  {
    id: "solv-ai",
    name: "Solv AI",
    category: "Developer Event",
    description:
      "Conclave startup dengan artwork ilustratif, logo partner, dan penjualan tiket tiga hari.",
  },
  {
    id: "on-event",
    name: "On_Event",
    category: "Webinar",
    description:
      "Halaman event online dengan gaya berani, jadwal siaran, dan tombol beli akses yang menonjol.",
  },
  {
    id: "stazione-leopolda",
    name: "Stazione Leopolda",
    category: "Festival",
    description:
      "Halaman venue di Florence untuk konser dan festival, lengkap dengan form request penawaran.",
  },
];

/** The four shown on /event before visitors continue to /event-portfolio. */
export const featuredEventProjects = eventProjects.slice(0, 4);
