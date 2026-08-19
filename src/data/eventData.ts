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
    { value: "2x", label: "Revisi\nTermasuk Paket" },
    { value: "7 Hari", label: "Support\nPasca-launch" },
  ],
};

export const eventTypes = [
  {
    name: "Webinar & Talkshow",
    description:
      "Info pembicara, jadwal, dan link daftar dalam satu halaman yang rapi.",
  },
  {
    name: "Workshop & Bootcamp",
    description:
      "Cocok buat batch berulang, template bisa dipakai lagi tiap sesi baru.",
  },
  {
    name: "Konferensi & Seminar",
    description:
      "Multi-section: pembicara, sponsor, jadwal beberapa hari, tiket bertingkat.",
  },
  {
    name: "Acara Kampus & Sekolah",
    description:
      "Pensi, study tour, sampai lomba antar-jurusan biar event sekolah keliatan profesional.",
  },
  {
    name: "Peluncuran Produk & Komunitas",
    description:
      "Launching produk digital, meet-up komunitas, atau gathering member.",
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
  },
  {
    num: "02",
    text: "Nggak ada satu tempat buat calon peserta cek detail, lihat pembicara, dan langsung daftar.",
  },
  {
    num: "03",
    text: "Sponsor atau pihak eksternal susah percaya kalau event-nya cuma dipromosikan lewat story doang.",
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
    cta: "Chat via WhatsApp",
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
    question: "Websitenya berapa halaman?",
    answer:
      "Standarnya 1 halaman yang isinya lengkap dari atas ke bawah (biasa disebut landing page), biar cepat dibangun dan gampang di-scroll calon peserta. Butuh lebih dari 1 halaman? Ada di paket Premium.",
  },
  {
    question: "Domain-nya dari mana?",
    answer:
      "Domain lu beli sendiri (bisa dibantu rekomendasi penyedia), gua yang urus koneksinya ke halaman sampai bisa diakses via domain itu.",
  },
  {
    question: "Berapa lama pengerjaannya?",
    answer:
      "Rata-rata 3 hari kerja untuk paket Terima Beres, tergantung kompleksitas dan seberapa cepat brief-nya lengkap.",
  },
  {
    question: "Kalau butuh cepat banget gimana?",
    answer:
      "Bisa, ada opsi percepatan pengerjaan (rush) dengan biaya tambahan. Kabarin timeline lu di awal biar bisa gua atur.",
  },
  {
    question: "Bisa request desain sesuai referensi?",
    answer:
      "Bisa banget. Kirim referensi visual atau contoh yang lu suka, nanti gua sesuaikan dengan tetap custom, bukan asal contek.",
  },
  {
    question: "Bisa dapet notifikasi WhatsApp tiap ada yang daftar?",
    answer:
      "Bisa, ini fitur tambahan (add-on) di luar paket standar karena butuh layanan berlangganan terpisah. Kabarin aja kalau mau ditambahkan, nanti gua kasih tau biayanya.",
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
