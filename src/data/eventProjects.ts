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
  /** Container of the source clip. Defaults to webm for the original batch. */
  ext?: "webm" | "mp4";
};

export const eventProjectCategories = [
  "Conference",
  "Summit",
  "Concert",
  "Sport",
  "Competition",
  "Festival",
  "Community",
  "Developer Event",
  "Webinar",
] as const;

export type EventProjectCategory = (typeof eventProjectCategories)[number];

export const videoSrc = (project: EventProject) =>
  `/video/event-showreel/${project.id}.${project.ext ?? "webm"}`;
export const posterSrc = (project: EventProject) =>
  `/images/event-showreel/${project.id}.webp`;

export const eventProjects: EventProject[] = [
  {
    id: "sonorous",
    name: "Sonorous",
    category: "Concert",
    description:
      "Festival musik elektronik dengan line-up per genre, info batas usia, dan alur beli tiket yang tegas.",
    ext: "mp4",
  },
  {
    id: "running-club",
    name: "Running Club",
    category: "Competition",
    description:
      "Halaman lomba lari 10K lengkap dengan tanggal, jam start-finish, titik lokasi, dan tombol pendaftaran.",
    ext: "mp4",
  },
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
  {
    id: "sonixa",
    name: "Sonixa",
    category: "Concert",
    description:
      "Halaman artis hip-hop dengan rilisan terbaru, jadwal tur, diskografi, dan pendaftaran newsletter.",
    ext: "mp4",
  },
  {
    id: "playza",
    name: "Playza",
    category: "Concert",
    description:
      "Situs band dengan galeri tur, album, dan halaman kontak booking yang gampang dijangkau.",
    ext: "mp4",
  },
  {
    id: "night-club",
    name: "Night Club",
    category: "Concert",
    description:
      "Venue live music dengan galeri suasana, jadwal penampil per hall, dan form reservasi meja.",
    ext: "mp4",
  },
  {
    id: "cycling",
    name: "Cycling",
    category: "Competition",
    description:
      "Event bersepeda dengan detail rute, kategori peserta, dan pendaftaran langsung dari hero.",
    ext: "mp4",
  },
  {
    id: "climbr",
    name: "Climbr",
    category: "Sport",
    description:
      "Gym panjat tebing dengan info level dinding, paket membership, dan booking sesi pertama.",
    ext: "mp4",
  },
  {
    id: "rally-padel",
    name: "Rally Padel",
    category: "Sport",
    description:
      "Booking lapangan padel per jam, paket membership, dan FAQ buat pemain yang baru mulai.",
    ext: "mp4",
  },
  {
    id: "ballor",
    name: "Ballor",
    category: "Sport",
    description:
      "Akademi sepak bola anak dengan program latihan per usia, jadwal sesi, dan trial gratis.",
    ext: "mp4",
  },
  {
    id: "gelaf",
    name: "Gelaf",
    category: "Sport",
    description:
      "Klub golf dengan driving range, kelas pelatihan, dan pendaftaran membership bertingkat.",
    ext: "mp4",
  },
  {
    id: "xpedition",
    name: "Xpedition",
    category: "Sport",
    description:
      "Trip petualangan alam terbuka dengan paket perjalanan, jadwal keberangkatan, dan booking online.",
    ext: "mp4",
  },
  {
    id: "outdoor",
    name: "Outdoor",
    category: "Sport",
    description:
      "Aktivitas luar ruang yang bisa dikustom: pilih kegiatan, grup, penginapan, lalu booking trip.",
    ext: "mp4",
  },
  {
    id: "livepower",
    name: "LivePower",
    category: "Sport",
    description:
      "Coaching sepeda dan wellness dengan program personal, profil pelatih, dan jadwal sesi.",
    ext: "mp4",
  },
  {
    id: "yogafit",
    name: "YogaFit",
    category: "Sport",
    description:
      "Studio yoga dengan jadwal kelas, profil instruktur, dan pendaftaran membership yang ringkas.",
    ext: "mp4",
  },
];

/** Shown on /event before visitors continue to /event-portfolio. */
const featuredIds = ["sonorous", "running-club", "crowdix", "stagefy"];

export const featuredEventProjects = featuredIds
  .map((id) => eventProjects.find((p) => p.id === id)!)
  .filter(Boolean);
