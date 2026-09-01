// Copy and configuration for the /event landing page (Indonesian).
// Kept separate from siteData so the sales copy can be tuned without
// touching the portfolio content.

const WA_NUMBER = "6289636141858";

/** Builds a WhatsApp deep link with an event-specific opening message. */
export const eventWhatsappUrl = (context?: string) => {
  const message = context
    ? `Halo Fandy! Gua tertarik bikin website event (${context}). Bisa dibantu?`
    : "Halo Fandy! Gua mau bikin website buat event. Bisa dibantu?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * CTA copy, tuned to where the reader is on the page. Early on the ask is
 * light ("just ask"), mid-page it invites them to describe their event, and
 * near the pricing it names the action they are ready to take.
 */
export const eventCtas = {
  /** Cold: first screen, still deciding whether to care. */
  cold: "Tanya Dulu, Gratis Kok",
  /** Warm: has seen the work and the process. */
  warm: "Ceritain Event Lu",
  /** Ready: at the price, only needs the last nudge. */
  ready: "Chat via WhatsApp",
};

export const eventHero = {
  eyebrow: "Website Acara · Spesialis Event",
  headline: "Website event lu, beres dalam 3 hari.",
  headlineAccent: "beres dalam 3 hari",
  subheadline:
    "Dari webinar, workshop, sampai konferensi. Gua bikin halaman yang bikin calon peserta langsung percaya dan mau daftar. Desain, isi konten, sampai domain siap pakai, semuanya terima beres.",
  statsNote:
    "Desain, deploy, koneksi domain, sampai form registrasi udah termasuk. Lu tinggal share linknya ke calon peserta.",
  stats: [
    { value: "3 Hari", label: "Pengerjaan,\nBisa Express" },
    { value: "100%", label: "Desain Custom,\nBukan Template" },
    { value: "30+", label: "Contoh Desain\nEvent Siap Dilihat" },
    { value: "7 Hari", label: "Support\nPasca-launch" },
  ],
};

/** Running promo, surfaced by the popup and the mobile sticky bar. */
export const eventPromo = {
  tier: "Terima Beres",
  originalPrice: "Rp 2,2Jt",
  price: "Rp 1,6Jt",
  quotaNote: "Cuma buat 2 orang minggu ini",
  capacityNote: "Seminggu gua cuma nerima 3 project",
  headline: "Klaim harga promo minggu ini",
  body: "Paket Terima Beres lagi turun harga. Website event lu beres dalam 3 hari, udah termasuk desain, deploy, koneksi domain, form registrasi, dan Google Analytics.",
  cta: "Klaim Harga Promo",
  waContext: "klaim promo Terima Beres Rp 1,6Jt",
};

/**
 * Structured-data copy only — nothing here is rendered on the page.
 *
 * Feeds the Service/WebPage `description` and the `hasOfferCatalog` list in
 * the JSON-LD, which is how search engines learn the full range of events
 * these pages get built for. The wording visitors actually read lives in
 * `eventTypes` and `eventFaqs`.
 */
export const eventAbout = {
  eyebrow: "Tentang Layanan Ini",
  heading: "Jasa pembuatan website event, dari brief sampai online.",
  paragraphs: [
    "Website event itu satu halaman yang jadi pusat informasi acara lu: tanggal, lokasi, susunan acara, profil pembicara atau pengisi, harga tiket, dan form pendaftaran. Semuanya di satu link yang gampang dibagikan di Instagram, WhatsApp, atau poster. Calon peserta nggak perlu nanya berulang-ulang, dan lu nggak perlu jawab pertanyaan yang sama tiap hari.",
    "Gua kerjain sendiri dari desain sampai jadi website beneran, bukan pakai template jadi. Rata-rata 3 hari kerja untuk paket Terima Beres, sudah termasuk koneksi ke domain punya lu, form pendaftaran yang datanya masuk otomatis ke Google Sheet, dan Google Analytics biar keliatan berapa orang yang buka halaman dan datang dari mana.",
    "Semua halaman dibangun responsive, jadi tampilannya tetap rapi dibuka dari HP, tablet, maupun desktop. Ini penting karena mayoritas calon peserta bakal buka link acara lu dari HP.",
  ],
  listHeading: "Jenis event yang sering gua kerjain",
  eventList: [
    "Webinar, workshop, kelas online, dan bootcamp berbatch",
    "Seminar, konferensi, dan summit beberapa hari dengan banyak pembicara",
    "Konser, festival musik, dan pensi sekolah",
    "Fun run, turnamen, dan perlombaan dengan kategori peserta",
    "Acara kampus, study tour, dan lomba antar-jurusan",
    "Peluncuran produk, meet-up komunitas, dan gathering member",
    "Pameran, expo, dan job fair",
    "Halal bihalal, reuni, dan acara internal perusahaan",
  ],
  closing:
    "Nggak nemu jenis acara lu di daftar itu? Selama event-nya butuh orang tau infonya atau daftar, halamannya tetap bisa dibikin. Kabarin aja detailnya.",
};

export const eventTypes = [
  {
    name: "Webinar, Workshop & Bootcamp",
    description:
      "Sesi online maupun on-site: info pembicara, jadwal, dan link daftar dalam satu halaman. Cocok buat kelas online dan batch berulang, template dipakai lagi tiap angkatan baru.",
  },
  {
    name: "Konferensi & Seminar",
    description:
      "Multi-section buat seminar, konferensi, atau summit beberapa hari: pembicara, sponsor, jadwal per hari, dan tiket bertingkat. Cocok juga buat pameran dan job fair.",
  },
  {
    name: "Event Sport & Perlombaan",
    description:
      "Fun run, turnamen, atau lomba antar-tim. Kategori peserta, rute, hadiah, dan pendaftaran per kategori dalam satu halaman.",
  },
  {
    name: "Acara Kampus & Sekolah",
    description:
      "Pensi, study tour, sampai lomba antar-jurusan biar event sekolah keliatan profesional.",
  },
  {
    name: "Peluncuran Produk & Komunitas",
    description:
      "Launching produk digital, meet-up komunitas, gathering member, sampai acara internal perusahaan seperti reuni dan halal bihalal.",
  },
  {
    name: "Konser & Festival",
    description:
      "Line-up, venue, dan penjualan tiket dalam satu halaman yang meyakinkan.",
  },
];

export const eventProblems = [
  {
    num: "01",
    text: "Info event nyebar di caption IG dan chat WA, orang gampang lupa atau salah paham jadwal.",
    solution:
      "Satu link resmi yang isinya lengkap dan selalu update. Sekali share, semua orang lihat info yang sama.",
  },
  {
    num: "02",
    text: "Nggak ada satu tempat buat calon peserta cek detail, lihat pembicara, dan langsung daftar.",
    solution:
      "Detail, pembicara, dan form pendaftaran ada di satu halaman. Dari penasaran ke daftar cuma butuh satu scroll.",
  },
  {
    num: "03",
    text: "Sponsor atau pihak eksternal susah percaya kalau event-nya cuma dipromosikan lewat story doang.",
    solution:
      "Halaman dengan domain sendiri bikin proposal lu langsung keliatan serius di mata sponsor.",
  },
];

export const eventProcess = [
  {
    step: "01",
    title: "Ceritain event lu",
    body: "Kirim detail event via WhatsApp: tanggal, jenis event, dan referensi tampilan kalau ada. 10 menit selesai.",
  },
  {
    step: "02",
    title: "Desain & bangun",
    body: "Gua kerjain desain sekaligus develop halamannya, biasanya kelar dalam 2-3 hari kerja.",
  },
  {
    step: "03",
    title: "Revisi bareng",
    body: "Lu cek hasilnya, kasih revisi (2x termasuk paket), gua sesuaikan sampai pas.",
  },
  {
    step: "04",
    title: "Live & siap pakai",
    body: "Gua bantu connect ke domain punya lu, form registrasi tersambung, tinggal share linknya.",
  },
];

export type EventPricingTier = {
  tier: string;
  /** Current price, as displayed. */
  price: string;
  priceSuffix?: string;
  /** Struck-through price shown above `price` when there is a promo running. */
  originalPrice?: string;
  /** Short line under the price explaining the promo terms. */
  priceNote?: string;
  /** Numeric IDR value, used for the Offer structured data. */
  priceValue: number;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
  waContext: string;
};

export const eventPricing: EventPricingTier[] = [
  {
    tier: "Source Only",
    price: "Rp 900K",
    priceValue: 900000,
    featured: false,
    features: [
      "1 halaman custom design",
      "Source code diserahkan",
      "Deploy & domain diurus sendiri",
    ],
    cta: "Tanya Paket Ini",
    waContext: "paket Source Only",
  },
  {
    tier: "Terima Beres",
    price: "Rp 1,6Jt",
    originalPrice: "Rp 2,2Jt",
    priceNote: "Harga promo, cuma buat 2 orang minggu ini",
    priceValue: 1600000,
    featured: true,
    badge: "Paling Dipilih",
    features: [
      "1 halaman custom design",
      "Deploy + connect domain punya lu",
      "Form registrasi otomatis tersimpan ke Google Sheet",
      "Google Analytics terpasang, jadi lu tau berapa orang yang buka halaman, datang dari mana, dan promosi mana yang paling ngefek",
      "2x revisi termasuk",
      "Support 7 hari pasca-launch",
    ],
    cta: "Ambil Paket Ini",
    waContext: "paket Terima Beres promo Rp 1,6Jt",
  },
  {
    tier: "Premium",
    price: "Rp 4Jt",
    priceSuffix: "an",
    priceValue: 4000000,
    featured: false,
    features: [
      "Multi-section: jadwal, pembicara, sponsor, FAQ",
      "Integrasi tiket/pembayaran",
      "Google Analytics + heatmap pengunjung (Microsoft Clarity), keliatan bagian mana yang paling dilihat dan di titik mana calon peserta berhenti scroll",
      "Deploy + domain + support diperpanjang",
      "3x revisi termasuk",
    ],
    cta: "Tanya Paket Ini",
    waContext: "paket Premium",
  },
];

export const eventFaqs = [
  {
    question: "Berapa lama pengerjaannya?",
    answer:
      "Rata-rata 3 hari kerja untuk paket Terima Beres, tergantung kompleksitas dan seberapa cepat brief-nya lengkap.",
  },
  {
    question: "Websitenya berapa halaman?",
    answer:
      "Standarnya 1 halaman yang isinya lengkap dari atas ke bawah (biasa disebut landing page), biar cepat dibangun dan gampang di-scroll calon peserta. Butuh lebih dari 1 halaman? Ada di paket Premium.",
  },
  {
    question: "Kalau butuh cepat banget gimana?",
    answer:
      "Bisa, ada opsi percepatan pengerjaan (rush) dengan biaya tambahan. Kabarin timeline lu di awal biar bisa gua atur.",
  },
  {
    question: "Domain-nya dari mana?",
    answer:
      "Domain lu beli sendiri (bisa dibantu rekomendasi penyedia), gua yang urus koneksinya ke halaman sampai bisa diakses via domain itu.",
  },
  {
    question: "Bisa request desain sesuai referensi?",
    answer:
      "Bisa banget. Kirim referensi visual atau contoh yang lu suka, nanti gua sesuaikan dengan tetap custom, bukan asal contek.",
  },
  {
    question: "Bisa custom form submission atau pendaftaran?",
    answer:
      "Bisa, field-nya diatur sesuai kebutuhan event lu: nama, kontak, asal instansi, pilihan sesi, ukuran kaos, sampai upload bukti transfer. Datanya masuk otomatis dan bisa dibuatkan dashboard khusus buat lihat semua pendaftar dalam satu tabel, difilter, dan diekspor ke Excel, jadi lu nggak perlu buka spreadsheet mentah tiap mau cek. Kabarin aja kebutuhannya, nanti gua sesuaikan.",
  },
  {
    question: "Setelah live, masih bisa update konten?",
    answer:
      "Bisa, ada masa support 7 hari untuk update kecil (ganti jadwal, nama sponsor, dll) tanpa biaya tambahan.",
  },
];

// ⚠️ PLACEHOLDER TESTIMONIALS — replace every entry below with real quotes from
// real clients before this page goes live. Publishing invented endorsements as
// if they were genuine is misleading to visitors (and illegal advertising in
// many markets). The copy here exists so the section can be designed and
// reviewed at realistic length.
export const eventTestimonials = [
  {
    text: "Halamannya jadi cuma 3 hari, dan pendaftar langsung masuk ke Google Sheet tanpa perlu direkap manual. Panitia lain sampai nanya bikinnya di mana.",
    name: "Rizky P.",
    role: "Ketua Panitia, Seminar Nasional",
  },
  {
    text: "Sebelumnya info acara kami cuma nyebar di caption Instagram. Begitu ada satu link resmi, sponsor jadi jauh lebih gampang diajak ngobrol.",
    name: "Nadia A.",
    role: "Marketing Communication, Konferensi Tahunan",
  },
  {
    text: "Revisi dibalas cepat, dan pas hari-H websitenya aman aja walau dibuka ratusan orang barengan.",
    name: "Bagas S.",
    role: "Event Organizer, Festival Musik",
  },
  {
    text: "Template-nya kami pakai lagi buat batch berikutnya, tinggal ganti tanggal sama nama pembicara. Hemat waktu banget.",
    name: "Larasati D.",
    role: "Program Lead, Workshop & Bootcamp",
  },
];

/** Project ids pulled from the homepage featured work, reused as proof of craft. */
export const eventShowcaseIds = [
  "lulladream",
  "bicarakan-id",
  "qfast",
  "speakeasy",
];
