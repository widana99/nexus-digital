export interface MetricItem {
  number: string;
  label: string;
  description: string;
  source: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  scope: string;
}

export interface SystemNode {
  id: string;
  step: string;
  label: string;
  summary: string;
  detail: string;
}

export interface GPRPillar {
  number: string;
  title: string;
  summary: string;
  points: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  context: string;
  metrics: { value: string; label: string }[];
  platforms: string[];
  summary: string;
  videoLinks?: { platform: string; url: string; label: string }[];
}

export interface InsightItem {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export interface EngagementPackage {
  id: string;
  code: string;
  name: string;
  category: "Foundation" | "National" | "Enterprise Program";
  pagu: string;
  paguNumber: number;
  totalCreators: number;
  creatorBreakdown: {
    kol: number;
    macro: number;
    microNano: number;
  };
  dailyIntensity: string;
  estImpressions: string;
  whitelisting: string;
  slaFeatures: string[];
  description: string;
  recommendedFor: string;
}

export interface DistributionSlotItem {
  slot: string;
  code: string;
  hours: string;
  portion: string;
  portionNumber: number;
  targetAudience: string;
  contentCharacter: string;
}

export interface CreatorTierItem {
  tier: string;
  followers: string;
  benchmarkER: string;
  profile: string;
  strategicRole: string;
  formats: string;
}

export interface ProcurementTermItem {
  number: string;
  title: string;
  specification: string;
}

export const TRUST_METRICS: MetricItem[] = [
  {
    number: "41",
    label: "Akun Kreator Multi-Tier",
    description: "Sinergi terkoordinasi dari tier Nano hingga Key Opinion Leader.",
    source: "BAST Brief 04, September 2026",
  },
  {
    number: "81",
    label: "Konten Publikasi Terverifikasi",
    description: "Materi edukasi dan klarifikasi resmi berpedoman regulasi sah.",
    source: "BAST Brief 04",
  },
  {
    number: "11",
    label: "Daerah Sebaran Strategis",
    description: "Jangkauan wilayah berfokus pada titik diseminasi informasi krusial.",
    source: "Sebaran Wilayah BAST 04",
  },
  {
    number: "4",
    label: "Slot Jam Tayang Harian",
    description: "Distribusi terjadwal: Pagi (07.00), Siang (12.00), Sore (16.30), Malam (19.30).",
    source: "Metodologi Distribusi NEXUS",
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "digital-strategy",
    number: "01",
    title: "Digital Strategy & Campaign Architecture",
    subtitle: "Rancang bangun peta jalan komunikasi institusional",
    description:
      "Perumusan narasi tunggal, positioning kebijakan, dan pemetaan stakeholder kunci untuk memastikan arah kampanye terukur serta berakar pada kebutuhan publik.",
    deliverables: ["Dokumen Blueprint Strategi", "Matriks Risiko Isu & Mitigasi", "Peta Stakeholder & Persona"],
    scope: "Perencanaan Strategis",
  },
  {
    id: "public-communication",
    number: "02",
    title: "Public Communication & Crisis Advisory",
    subtitle: "Pendampingan komunikasi strategis dan mitigasi isu",
    description:
      "Supervisi konten mitigasi krisis, manajemen narasi publik berisiko tinggi, serta penyelarasan rilis resmi institusi dengan ritme percakapan digital masyarakat.",
    deliverables: ["Protokol Krisis Komunikasi", "Panduan Nada Bicara (Tone of Voice)", "Briefing Harian Monitoring"],
    scope: "Reputasi & Mitigasi",
  },
  {
    id: "creator-ecosystem",
    number: "03",
    title: "Multi-Tier Creator Ecosystem",
    subtitle: "Orkestrasi jejaring kreator terverifikasi non-partisan",
    description:
      "Aktivasi berjenjang mulai dari figur publik (KOL) untuk pemantik diskursus, praktisi ahli (Micro) untuk edukasi substansi, hingga kreator akar rumput (Nano) untuk penetrasi lokal.",
    deliverables: ["Kurasi Talent Non-Partisan", "Screening Rekam Jejak Hukum", "Manajemen Kontrak & Hak Pakai"],
    scope: "Ekosistem Kreator",
  },
  {
    id: "content-production",
    number: "04",
    title: "High-Volume Content Production",
    subtitle: "Produksi materi visual berkualitas studio 4K",
    description:
      "Pengolahan pesan kebijakan kompleks menjadi materi infografis, video vertikal 15-60 detik, dan carousel analitis yang mudah dipahami warga tanpa mendegradasi akurasi data.",
    deliverables: ["Video Vertikal TikTok/Reels", "Carousel Kebijakan Instagram", "Master Arsip Resolusi 4K"],
    scope: "Produksi Kreatif",
  },
  {
    id: "campaign-orchestration",
    number: "05",
    title: "Structured Distribution & Slot Management",
    subtitle: "Diseminasi presisi pada 4 slot jam tayang dinas",
    description:
      "Manajemen jadwal tayang harian secara terdisiplin pada momentum komuter, jam istirahat, kepulangan kerja, dan jam emas malam hari untuk retensi atensi optimal.",
    deliverables: ["Kalender Tayang Multi-Kanal", "Supervisi Distribusi Harian", "Validasi Penayangan Real-Time"],
    scope: "Distribusi Terjadwal",
  },
  {
    id: "intelligence-analytics",
    number: "06",
    title: "Intelligence, Sentiment & BAST Accountability",
    subtitle: "Audit jejak digital dan pelaporan akuntabilitas dinas",
    description:
      "Pelacakan sentimen komentar, deteksi potensi polarisasi atau misinformasi, serta penyusunan arsip bukti tayang bertimestamp permanen untuk audit instansi.",
    deliverables: ["Laporan BAST Lengkap Bukti Tayang", "Analisis Sentimen & Topik Warga", "Repositori Tautan Permanen"],
    scope: "Audit & Intelijen",
  },
];

export const NEXUS_SYSTEM_STEPS: SystemNode[] = [
  {
    id: "step-1",
    step: "01",
    label: "Strategy & Policy Synthesis",
    summary: "Bedah regulasi resmi dan perumusan pesan kunci.",
    detail: "Transformasi pasal dan regulasi rumit menjadi premis komunikasi humanis tanpa distorsi substansi hukum.",
  },
  {
    id: "step-2",
    step: "02",
    label: "Audience & Regional Mapping",
    summary: "Segmentasi target warga berbasis wilayah.",
    detail: "Pemetaan demografis dan preferensi konsumsi media per daerah pemilihan prioritas.",
  },
  {
    id: "step-3",
    step: "03",
    label: "Creator Network Alignment",
    summary: "Sinkronisasi kreator Nano, Micro, Macro, dan KOL.",
    detail: "Penetapan peran tiap tier kreator agar pesan saling menguatkan dari level elit hingga akar rumput.",
  },
  {
    id: "step-4",
    step: "04",
    label: "Content Production & QA",
    summary: "Supervisi ketat akurasi fakta materi 4K.",
    detail: "Pemeriksaan legalitas dan sensitivitas fakta sebelum proses produksi video dan grafis.",
  },
  {
    id: "step-5",
    step: "05",
    label: "4-Slot Timed Distribution",
    summary: "Pelepasan konten terjadwal di 4 slot waktu.",
    detail: "Distribusi serentak di waktu komuter, istirahat siang, petang, dan golden hour malam.",
  },
  {
    id: "step-6",
    step: "06",
    label: "Monitoring & Sentiment Guard",
    summary: "Supervisi respon warga dan mitigasi hoaks.",
    detail: "Moderasi aktif kolom diskusi untuk meredam provokasi dan mengklarifikasi kesalahpahaman.",
  },
  {
    id: "step-7",
    step: "07",
    label: "BAST Measurement & Audit",
    summary: "Pembuktian akuntabilitas hukum dan serah terima.",
    detail: "Penyusunan berkas Berita Acara Serah Terima dengan tautan permanen, timestamp, dan arsip digital.",
  },
];

export const GPR_PILLARS: GPRPillar[] = [
  {
    number: "01",
    title: "Netralitas Non-Partisan",
    summary: "Menjaga integritas institusional tanpa bias politik praktis.",
    points: [
      "Bebas keterkaitan dengan kubu kontestasi politik apa pun.",
      "Fokus pada literasi hak publik dan edukasi program layanan negara.",
      "Kepatuhan ketat terhadap undang-undang keterbukaan informasi.",
    ],
  },
  {
    number: "02",
    title: "Screening Rekam Jejak Bersih",
    summary: "Penyaringan ketat tanpa toleransi atas seluruh kreator mitra.",
    points: [
      "Bebas catatan pidana hukum dan kasus asusila.",
      "Screening bersih dari promosi judi online dan investasi bodong.",
      "Verifikasi integritas personal dan etika bermedia sosial.",
    ],
  },
  {
    number: "03",
    title: "Literasi Edukatif & Anti-Hoaks",
    summary: "Rujukan tunggal data valid kementerian dan lembaga resmi.",
    points: [
      "Penyampaian fakta berlandaskan basis data otentik pemerintah.",
      "Mitigasi cepat terhadap distorsi narasi atau disinformasi di kolom komentar.",
      "Pendekatan persuasif dan menjunjung adab komunikasi warga.",
    ],
  },
  {
    number: "04",
    title: "Akuntabilitas Audit BAST",
    summary: "Dirancang secara spesifik untuk mempermudah audit kepatuhan dinas.",
    points: [
      "Tautan permanen aktif dan tangkapan layar bertanda waktu (timestamp).",
      "Kepatuhan penuh pada format Berita Acara Serah Terima (BAST).",
      "Arsip cadangan master resolusi tinggi tersimpan aman.",
    ],
  },
];

export const ENGAGEMENT_PACKAGES: EngagementPackage[] = [
  {
    id: "p01",
    code: "PAKET 01",
    name: "Starter Public Impact",
    category: "Foundation",
    pagu: "Rp 100.000.000",
    paguNumber: 100,
    totalCreators: 35,
    creatorBreakdown: { kol: 1, macro: 4, microNano: 30 },
    dailyIntensity: "15 Konten / Hari (30 Hari Kalender)",
    estImpressions: "1,8 - 2,5 Juta Estimasi Impresi",
    whitelisting: "Hak penayangan kanal dinas resmi",
    slaFeatures: [
      "1x Penayangan Tokoh Publik/KOL untuk validasi resmi",
      "4x Video/Infografis Macro ulasan substansi",
      "30+ Konten Jaringan Micro & Nano amplifikasi warga",
      "Kepatuhan GPR 100% selaras panduan negara",
      "Akses Live Dashboard Monitoring 24/7",
      "Laporan BAST lengkap bukti tayang & stempel waktu",
      "Garansi penggantian talent bebas biaya tambahan",
    ],
    description:
      "Alokasi 35 akun kreator edukatif pilihan bebas sengketa. Diorkestrasikan untuk sosialisasi pengumuman dinas, regulasi baru, atau diseminasi program cepat selama 30 hari kalender.",
    recommendedFor: "Sosialisasi kebijakan baru, kampanye lokal dinas, atau peluncuran program cepat.",
  },
  {
    id: "p02",
    code: "PAKET 02",
    name: "Integrated Policy Education",
    category: "Foundation",
    pagu: "Rp 250.000.000",
    paguNumber: 250,
    totalCreators: 75,
    creatorBreakdown: { kol: 3, macro: 12, microNano: 60 },
    dailyIntensity: "18 Konten / Hari (30 Hari Kalender)",
    estImpressions: "5,5 - 8,0 Juta Estimasi Impresi",
    whitelisting: "Hak penayangan resmi 30 hari",
    slaFeatures: [
      "3x Penayangan Tokoh Publik/KOL sorotan figur nasional",
      "12x Video/Infografis Macro edukasi data & narasi regulasi",
      "60+ Konten Micro & Nano keterlibatan komunitas warga",
      "Penyelarasan disiplin 4 slot jam tayang harian",
      "Dashboard analitik live 24 jam dengan ekspor mingguan",
      "Arsip master file 4K siap pakai untuk dokumentasi",
      "Garansi penggantian talent perlindungan dinas",
    ],
    description:
      "Alokasi 75 akun kreator berintegritas tinggi untuk edukasi kebijakan terpadu dan literasi regulasi secara berkesinambungan di TikTok dan Instagram.",
    recommendedFor: "Edukasi berkelanjutan peraturan menteri, tata kelola layanan publik, sosialisasi program dinas.",
  },
  {
    id: "p03",
    code: "PAKET 03",
    name: "National Program",
    category: "National",
    pagu: "Rp 500.000.000",
    paguNumber: 500,
    totalCreators: 140,
    creatorBreakdown: { kol: 8, macro: 22, microNano: 110 },
    dailyIntensity: "23 Konten / Hari (30 Hari Kalender)",
    estImpressions: "14 - 20 Juta+ Estimasi Impresi",
    whitelisting: "Whitelisting Rights 60 Hari akun dinas",
    slaFeatures: [
      "8x Penayangan Tokoh Publik & Pakar kredibilitas tinggi",
      "22x Video/Infografis Macro ulasan substansi mendalam",
      "110+ Konten Jaringan Micro & Nano lintas 38 provinsi",
      "Strategi Dua Fase: Edukasi Awal dilanjutkan Penetrasi Massal",
      "Dashboard Live Monitoring sentimen warga 24/7",
      "Whitelisting Rights 60 hari untuk periklanan akun resmi dinas",
      "Dedicated Project Manager supervisi penuh & audit BAST",
    ],
    description:
      "Sindikasi 140 akun kreator pilihan lintas 38 provinsi dengan strategi dua fase. Rekomendasi paling efektif untuk Program Strategis Nasional (PSN) dan agenda kementerian.",
    recommendedFor: "Program Strategis Nasional (PSN), reformasi birokrasi, kampanye multisektoral lintas daerah.",
  },
  {
    id: "p04",
    code: "PAKET 04",
    name: "Enterprise Scale",
    category: "Enterprise Program",
    pagu: "Rp 750.000.000",
    paguNumber: 750,
    totalCreators: 210,
    creatorBreakdown: { kol: 15, macro: 35, microNano: 160 },
    dailyIntensity: "25 Konten / Hari (30 Hari Kalender)",
    estImpressions: "25 - 35 Juta+ Estimasi Impresi",
    whitelisting: "Whitelisting Rights 90 Hari saluran dinas",
    slaFeatures: [
      "15x Penayangan Tokoh Publik/KOL & cendekiawan nasional",
      "35x Konten Edukasi Otoritatif Macro lintas bidang",
      "160+ Amplifikasi Multi-Format: Video vertikal, carousel, stories",
      "Sindikasi konten terstruktur 30 hari tanpa jeda kosong",
      "Tim supervisi komunikasi khusus monitoring 24/7",
      "Whitelisting Rights 90 hari untuk saluran dinas",
      "Mid-Term Review & Laporan Eksekutif BAST terverifikasi",
    ],
    description:
      "Jangkauan ekspansif 210 akun kreator pilihan untuk sosialisasi program akbar kementerian dengan intensitas 25 konten setiap hari tanpa jeda.",
    recommendedFor: "Kampanye akbar nasional kementerian, sosialisasi undang-undang strategis, mitigasi isu krusial.",
  },
  {
    id: "p05",
    code: "PAKET 05",
    name: "Nusantara 360",
    category: "Enterprise Program",
    pagu: "Rp 1.000.000.000",
    paguNumber: 1000,
    totalCreators: 300,
    creatorBreakdown: { kol: 25, macro: 55, microNano: 220 },
    dailyIntensity: "37 Konten / Hari (30 Hari Kalender)",
    estImpressions: "45 - 60 Juta+ Estimasi Impresi",
    whitelisting: "Hak Pakai Konten Tanpa Batas Waktu",
    slaFeatures: [
      "25x Kolaborasi Akbar Tokoh Publik & Pakar gaung puncak",
      "55x Konten Edukatif Macro resolusi tinggi terverifikasi",
      "220+ Penetrasi Mikro & Nano menjangkau seluruh nusantara",
      "Strategi 3 Fase: Awareness, Edukasi, hingga Advokasi",
      "Dedicated Command Center monitoring analitik 24 jam",
      "Hak Pakai Konten tanpa batas waktu untuk arsip dinas",
      "Dokumentasi BAST Standar Audit BPK dan Inspektorat",
    ],
    description:
      "Armada terlengkap 300 akun kreator dengan penetrasi 360 derajat di seluruh penjuru nusantara dengan supervisi dedicated command center dinas selama 30 hari kalender.",
    recommendedFor: "Agenda transformasi nasional, gerakan serentak seluruh Indonesia, diseminasi kebijakan vital negara.",
  },
];

export const DISTRIBUTION_SLOTS: DistributionSlotItem[] = [
  {
    slot: "Slot Pagi",
    code: "SLOT 01",
    hours: "07.00 - 09.00 WIB",
    portion: "20%",
    portionNumber: 20,
    targetAudience: "Mobilitas pagi, komuter, dan warga memulai aktivitas",
    contentCharacter: "Pengingat layanan publik, infografis agenda dinas, dan pengantar pesan kebijakan ringkas.",
  },
  {
    slot: "Slot Siang",
    code: "SLOT 02",
    hours: "12.00 - 13.30 WIB",
    portion: "25%",
    portionNumber: 25,
    targetAudience: "Istirahat kerja, aparatur negara, dan waktu luang warga",
    contentCharacter: "Tutorial layanan publik, video edukasi solusi program bantuan, dan pembagian panduan praktis.",
  },
  {
    slot: "Slot Sore",
    code: "SLOT 03",
    hours: "16.30 - 18.00 WIB",
    portion: "20%",
    portionNumber: 20,
    targetAudience: "Perjalanan pulang kantor dan santai sore",
    contentCharacter: "Rekapitulasi perkembangan kebijakan hari ini, diskusi santai berbobot, dan konten inspirasi.",
  },
  {
    slot: "Slot Malam (Golden)",
    code: "SLOT 04",
    hours: "19.30 - 21.30 WIB",
    portion: "35%",
    portionNumber: 35,
    targetAudience: "Puncak waktu santai keluarga dan atensi prima media sosial",
    contentCharacter: "Video sinematik storytelling, pelibatan tokoh publik/KOL, narasi emosional humanis, dan siaran live.",
  },
];

export const CREATOR_TIERS: CreatorTierItem[] = [
  {
    tier: "Nano",
    followers: "< 1.000 followers",
    benchmarkER: "6,5% - 12,0%",
    profile: "Kreator akar rumput: pengurus RT/RW, kader Posyandu, pegiat desa, dan komunitas lokal.",
    strategicRole: "Keterikatan kultural tinggi, menyampaikan pesan di level tatap muka warga, dan penjamin efektivitas akar rumput.",
    formats: "Komentar edukatif, reels interaksi warga, rekaman testimoni lingkungan.",
  },
  {
    tier: "Micro",
    followers: "1.000 - 25.000 followers",
    benchmarkER: "3,8% - 6,2%",
    profile: "Praktisi spesialis: dokter, guru penggerak, pakar hukum, akademisi, dan profesional teknis.",
    strategicRole: "Pembedah pasal regulasi, penerjemah teknis kebijakan menjadi panduan aplikatif.",
    formats: "Carousel analitis, bedah regulasi, panduan tata cara layanan.",
  },
  {
    tier: "Macro",
    followers: "25.000 - 100.000 followers",
    benchmarkER: "2,2% - 4,0%",
    profile: "Kreator berskala besar dengan standar produksi audio-visual prima.",
    strategicRole: "Menciptakan tren percakapan, menjamin social proof, dan resonansi wacana di tingkat provinsi.",
    formats: "Video storytelling 60 detik, video pendek sinematik, tagar kampanye resmi.",
  },
  {
    tier: "KOL",
    followers: "> 100.000 followers",
    benchmarkER: "1,5% - 3,2%",
    profile: "Figur publik terkemuka, cendekiawan bangsa, analis independen bereputasi tinggi.",
    strategicRole: "Pemantik diskursus nasional, jangkar legitimasi moral, dan rujukan liputan media massa.",
    formats: "Keynote statement, wawancara dialog, siaran langsung interaktif.",
  },
];

export const PROCUREMENT_TERMS: ProcurementTermItem[] = [
  {
    number: "01",
    title: "Harga Penawaran All-Inclusive",
    specification:
      "Biaya sudah mencakup manajemen talent resmi, kompensasi kreator, penyusunan brief kreatif, sistem dashboard pemantauan, tim supervisi 24/7, dan berkas BAST.",
  },
  {
    number: "02",
    title: "Termin Pembayaran Standar Pemerintah",
    specification:
      "Mengikuti tata kelola pengadaan barang/jasa negara: Uang Muka (DP) 50% saat penerbitan SPK/MoU, dan Pelunasan 50% setelah penandatanganan Berita Acara Serah Terima (BAST).",
  },
  {
    number: "03",
    title: "Hak Tinjauan Materi Kreatif (Creative Review)",
    specification:
      "Instansi memiliki hak atas 1x tinjauan draf materi konten sebelum jadwal penayangan yang disepakati guna memastikan kepatuhan regulasi.",
  },
  {
    number: "04",
    title: "Garansi Penggantian Talent Bebas Biaya",
    specification:
      "Bila terdapat kreator yang berhalangan hadir atau mengalami kendala force majeure, agensi wajib menyediakan talent pengganti setara tanpa biaya tambahan anggaran dinas.",
  },
];

export const CASE_STUDY_BRIEF_04: CaseStudy = {
  id: "case-04",
  number: "CASE 01",
  title: "Tanggap Darurat Komunikasi Mitigasi Erupsi Krakatau",
  category: "Mitigasi Krisis & Informasi Keselamatan Warga (Brief 04)",
  context:
    "Diseminasi informasi evakuasi, zona aman, dan penyuluhan logistik darurat secara serentak di 11 daerah terdampak melalui jaringan kreator kredibel.",
  metrics: [
    { value: "41", label: "Kreator Terkoordinasi" },
    { value: "81", label: "Konten Informasi Terverifikasi" },
    { value: "11", label: "Daerah Jangkauan Strategis" },
    { value: "100%", label: "Kepatuhan Jadwal Tayang Darurat" },
  ],
  platforms: ["TikTok", "Instagram", "Facebook"],
  summary:
    "Pemanfaatan tier praktisi dan kreator lokal memungkinkan informasi jalur evakuasi diserap warga dalam hitungan menit, sekaligus meredam kabar bohong terkait kepanikan laut.",
  videoLinks: [
    {
      platform: "TikTok",
      url: "https://vt.tiktok.com/ZSq64yPUc/",
      label: "Pantauan Lapangan Publikasi TikTok (Brief 04)",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/reel/Dc-6tdcp_K1/?stkn=aWZtYWw3ZG15a3d4",
      label: "Publikasi Edukasi Warga Instagram Reels (Brief 04)",
    },
  ],
};

export const INSIGHTS: InsightItem[] = [
  {
    id: "insight-1",
    category: "Government Public Relations",
    date: "18 September 2026",
    readTime: "6 menit membaca",
    title: "Menjaga Kredibilitas Komunikasi Publik di Tengah Disrupsi Algoritma Media Sosial",
    excerpt:
      "Bagaimana kementerian dan dinas teknis dapat menavigasi arus algoritma video pendek tanpa mengorbankan marwah otoritas informasi resmi pemerintah.",
  },
  {
    id: "insight-2",
    category: "Campaign Architecture",
    date: "04 September 2026",
    readTime: "8 menit membaca",
    title: "Anatomi Ekosistem Kreator Multi-Tier: Mengapa KOL Saja Tidak Cukup untuk Kebijakan",
    excerpt:
      "Peran krusial praktisi mikro dan jejaring komunitas akar rumput dalam menjembatani bahasa birokrasi menjadi aksi nyata di tingkat warga.",
  },
  {
    id: "insight-3",
    category: "Audit & Akuntabilitas",
    date: "22 Agustus 2026",
    readTime: "5 menit membaca",
    title: "Standar Baru Dokumentasi BAST dalam Pengadaan Jasa Komunikasi Digital Pemerintah",
    excerpt:
      "Praktik terbaik bagi Pejabat Pembuat Komitmen (PPK) dalam memverifikasi bukti tayang digital dan kepatuhan kontrak secara akuntabel.",
  },
];
