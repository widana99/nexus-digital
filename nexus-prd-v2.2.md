# PRD — PT NEXUS DIGITAL STRATEGY
## Corporate Company Profile Platform (Enterprise Scale, High Traffic)

**Versi:** 2.2 (menambahkan tech stack dan model operasi tim engineering internal) · **Status:** Draft untuk review stakeholder · **Tahun:** 2026
**Entitas:** PT Nexus Digital Strategy (merek: NEXUS Digital Strategy / NEXUS)
**Platform:** Responsive web · **Pasar:** Indonesia · **Bahasa:** Bahasa Indonesia (default) + English

---

## 0. Ringkasan Revisi

### 0.0 Perubahan dari v2.1 ke v2.2

| Area | v2.1 | v2.2 |
|---|---|---|
| Tech stack | Daftar opsi umum | Stack final yang direkomendasikan: Next.js + TypeScript, Payload CMS self-hosted, PostgreSQL managed, Redis + worker, Cloudflare, container di cloud Singapura/Indonesia |
| API logic | Tidak dirinci | Route Handlers/Server Actions + Zod + service layer, daftar endpoint, alur inquiry dengan queue, kriteria kapan memisahkan layanan backend |
| Pengelola situs | Belum ditetapkan | **Tim engineering internal PT Nexus Digital Strategy**: pilihan self-hosted, model operasi, susunan tim, on-call, runbook |
| Keputusan CMS | Payload atau Sanity | Payload direkomendasikan karena kontrol data dan tim internal |
| Risiko | Tidak ada risiko operasional | Ditambah bus factor dan beban operasional self-hosted |
| Acceptance | Tanpa serah terima | Ditambah runbook, pelatihan, dan kemampuan deploy/rollback/restore tanpa vendor |

### 0.1 Perubahan dari v2.0

| Area | v2.0 | v2.1 | Alasan |
|---|---|---|---|
| Nama entitas | "NEXUS Digital Strategy" | **PT Nexus Digital Strategy** (legal), NEXUS (merek). Dipakai di footer, legal, metadata, schema | Nama resmi ditetapkan. Rate card memakai nama berbeda ("PT Nexus Strategi Digital") sehingga wajib diseragamkan |
| Data kontak | Placeholder | Alamat lengkap dan email dimasukkan. Gmail hanya sementara, target email domain perusahaan | Gmail mengurangi kredibilitas untuk klien institusi |
| Trust metrics | Kandidat umum | Metrik dari **Studi Kasus Brief 04** sebagai angka utama. Angka 300+ dan 60M+ hanya sebagai kapasitas berlabel, setelah dikonfirmasi | 300 dan 60M+ identik dengan spesifikasi Paket 05, bukan hasil terbukti |
| Engagement model | Foundation ditulis "Nano–Micro" | Dipetakan ke 5 paket rate card: Foundation (P01–02), National (P03), Enterprise (P04–05). Foundation mencakup semua tier | Paket 01 sudah memuat Macro dan KOL |
| Rate card | Belum dirujuk | Menjadi **Vendor Pack** (unduh setelah form), tidak jadi halaman harga publik | Rate card ditujukan untuk penyusunan RAB dinas |
| Istilah "gelombang" | Waves dipakai untuk semua | **Distribution Slots** (4 slot jam tayang) dan **Campaign Phases** (2 atau 3 fase strategi) | Rate card memakai "gelombang" untuk dua hal berbeda |
| Creator tiers | Rentang followers saja | Ditambah rentang engagement rate, format konten, dan prinsip sinergi multi-tier | Data tersedia di rate card |
| Platform | Tidak dibahas | Bagian **Platform Strategy** (TikTok dan Instagram) | Kekhasan layanan |
| GPR | Empat prinsip singkat | Definisi lengkap: **Government Public Relations**, kriteria screening, dan bukti BAST | Rate card memuat definisi rinci |
| Case study | Contoh generik | Studi kasus Krakatau Brief 04 sebagai kandidat #1 dengan **gerbang izin dan verifikasi** | Berisiko: isu bencana, nama instansi, akun kreator individu |
| Halaman About | Umum | Ditambah fasilitas operasional (studio, ruang supervisi, command center), butuh dokumentasi foto asli | Klaim fasilitas harus dibuktikan |
| Istilah lokal | Tidak ada | Glosarium: BAST, GPR, PPK, SPK, RAB, KOL, whitelisting | Audiens procurement dan pemerintah |
| Situs proposal lama | Tidak dibahas | Rencana migrasi, noindex, dan pengamanan situs Netlify yang ada | Situs berisi harga dan data akun kreator |
| Simulator anggaran | Tidak ada | Tidak dimasukkan ke situs publik (P2, hanya jika disetujui) | Memperlihatkan harga ke publik |
| Klaim performa | "Estimasi" saja | Semua estimasi impresi dan engagement wajib dilabeli **estimasi** dengan metodologi | Angka tidak boleh terbaca sebagai jaminan |

### 0.2 Isu Data yang Harus Dituntaskan Sebelum Phase 03

Temuan dari rate card. Sampai selesai, angka-angka ini tidak boleh tampil di website atau Vendor Pack.

| # | Isu | Detail | Pemilik | Tenggat |
|---|---|---|---|---|
| D1 | Jumlah post tidak konsisten | Total konten yang tertulis vs intensitas harian × 30 hari: P01 105 vs 450, P02 250 vs 540, P03 480 vs 690. P04 (750) dan P05 (1.100 vs 1.110) cocok | Operasional | Phase 00 |
| D2 | Durasi berbeda | Semua paket 30 hari, tetapi simulator menampilkan "21 Hari Kerja" untuk Rp500 jt | Operasional | Phase 00 |
| D3 | Hak pakai konten | Whitelisting 60 hari (P03), 90 hari (P04), tanpa batas waktu (P05), dan syarat No. 5 menyebut hak cipta untuk publikasi resmi | Legal | Phase 00 |
| D4 | Nama badan hukum | Nama di rate card berbeda dari nama resmi. Seragamkan | Legal | Phase 00 |
| D5 | Data legalitas belum ada | NIB, NPWP, nomor akta dan SK pengesahan, sertifikasi, dan SBU bila ada | Legal | Phase 00 |
| D6 | Definisi "100% SLA" | Rate card: "100% Kepatuhan Jadwal Tayang". Perlu definisi, pengecualian force majeure, dan cara pengukuran | Legal + Operasional | Phase 00 |
| D7 | Sumber angka 300+ dan 60M+ | Konfirmasi apakah 300+ adalah jumlah kreator terverifikasi nyata atau kapasitas paket | Operasional | Phase 00 |
| D8 | Izin studi kasus Krakatau | Konfirmasi relasi dengan BNPB dan Pemda DIY, izin tayang, persetujuan kreator, dan dasar label "Terverifikasi Resmi" | Direksi + Legal | Phase 00 |
| D9 | Metodologi ER dan estimasi | Sumber rentang engagement rate per tier dan estimasi impresi/engagement per paket | Analytics | Phase 00 |
| D10 | Istilah dan penamaan paket | Ganti nama flashy (lihat 13.2) dan seragamkan istilah "gelombang" | Brand + Direksi | Phase 01 |
| D11 | Email dan domain | Email domain perusahaan menggantikan Gmail. Tentukan domain situs | Direksi | Phase 00 |
| D12 | Kelurahan dan kecamatan alamat | Rate card menyebut Cilandak (Timur) dan Pasar Minggu bergantian | Admin | Phase 00 |

---

## 1. Executive Summary

**PT Nexus Digital Strategy** membutuhkan company profile digital yang berfungsi sebagai kantor pusat digital: menjelaskan siapa NEXUS, apa kemampuannya, bukti hasilnya, dan bagaimana bekerja sama. Website harus melayani lalu lintas tinggi (kampanye, liputan media, peluncuran case study) tanpa penurunan performa, dan memenuhi standar due diligence klien pemerintah dan enterprise.

**Prinsip:** Less noise. More intelligence.
**North star:** apakah elemen ini terasa seperti perusahaan strategi tingkat tinggi yang dapat dipercaya institusi?

### 1.1 Data Entitas

| Item | Nilai |
|---|---|
| Nama badan hukum | PT Nexus Digital Strategy |
| Merek | NEXUS Digital Strategy (singkat: NEXUS) |
| Alamat | Gedung Menara 165 Lantai 4, Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560, DKI Jakarta *(kelurahan/kecamatan dikonfirmasi, D12)* |
| Email (sementara) | ptnexusnusabahari@gmail.com. Diganti email domain perusahaan (D11) |
| Telepon / WhatsApp | *Diisi perusahaan* |
| NIB / NPWP / Akta / SK | *Diisi Legal (D5)* |
| Fasilitas | Ruang Supervisi Konten 24/7, Studio Produksi Kreatif 4K, Dedicated Command Center *(semua klaim wajib didukung dokumentasi asli)* |

## 2. Tujuan Bisnis & Success Metrics

| Tujuan | Metrik | Baseline | Target (6 bulan pasca launch) |
|---|---|---|---|
| Kredibilitas | % pengunjung yang membuka ≥1 case study | Ukur di bulan 1 | Ditetapkan setelah baseline |
| Lead generation | Inquiry/bulan, rasio qualified lead, unduhan Vendor Pack | Ukur di bulan 1 | Ditetapkan setelah baseline |
| Pemahaman | Scroll depth hero → capabilities | Ukur di bulan 1 | ≥ 60% |
| Performa | Core Web Vitals (p75, field data) | n/a | LCP < 2,5 dtk, INP < 200 ms, CLS < 0,1 |
| Ketersediaan | Uptime | n/a | ≥ 99,9% |

## 3. Non-Goals

Bukan marketplace, e-commerce, platform sosial, marketplace influencer, portal registrasi creator, atau blog generik. **Bukan sistem operasional campaign.** Dashboard monitoring 24/7 yang dijanjikan kepada klien dalam SLA adalah sistem terpisah dan berada di luar scope PRD ini. Website hanya menjelaskan kapabilitasnya.

## 4. Audiens & Persona

**Primer:** kementerian, lembaga, pemda, BUMN/BUMD (rate card 2026 secara spesifik ditujukan untuk K/L). **Sekunder:** enterprise (corporate communication, PR, brand). **Tersier:** NGO, mitra, media, creator, calon karyawan.

| Persona | Tujuan | Journey utama |
|---|---|---|
| A. Executive Decision Maker | Kredibilitas dan reputational safety | Home → Capabilities → Work → Contact |
| B. Communication/PR Lead | Sistem campaign, creator, platform | Home → Approach → Work → Contact |
| C. **PPK / Pejabat Pengadaan** | Legalitas, scope, deliverable, RAB, SLA, BAST | Home → Engagements → Trust & Legalitas → **Vendor Pack** → Contact |
| D. Strategic Partner | Ekosistem dan kolaborasi | Home → About → Insights → Contact |
| E. Media/Jurnalis | Profil, kontak, materi press | Home → Newsroom → Press Contact |
| F. Calon Karyawan | Budaya dan lowongan | About → Careers |

## 5. Positioning, Messaging & Glosarium

**Statement:** PT Nexus Digital Strategy adalah mitra komunikasi digital strategis yang merancang, mengorkestrasi, dan mengukur kampanye komunikasi publik melalui ekosistem creator multi-tier, distribusi digital, dan campaign intelligence.

**Hero (uji A/B):** ID *Strategi di Balik Setiap Dampak Publik.* · EN *Strategy Behind Every Public Impact.*

**Aturan copy:** ringkas, spesifik, terukur. Hindari "influence", "dominasi", "dominance", "revolutionize", serta frasa "menggerakkan/menggiring opini" yang bertentangan dengan pilar netralitas. Semua klaim angka wajib punya periode dan sumber.

**Glosarium (halaman dan tooltip):**

| Istilah | Arti |
|---|---|
| GPR | Government Public Relations |
| BAST | Berita Acara Serah Terima |
| PPK | Pejabat Pembuat Komitmen |
| SPK | Surat Perintah Kerja |
| RAB | Rencana Anggaran Biaya |
| KOL | Key Opinion Leader |
| Whitelisting | Izin pemanfaatan materi untuk kanal resmi klien (definisi final: D3) |
| Distribution Slot | Slot jam tayang harian (4 slot) |
| Campaign Phase | Tahapan strategi kampanye (mis. edukasi → penetrasi) |

## 6. Information Architecture

```text
HOME
├── ABOUT
│   ├── Company (profil, visi, legalitas, fasilitas)
│   ├── Leadership & Team
│   └── Careers
├── CAPABILITIES (satu template, 6 halaman ringkas)
├── APPROACH
│   ├── NEXUS System
│   ├── Platform Strategy
│   ├── Creator Tiers
│   ├── Distribution Slots
│   ├── Integrity & Compliance (GPR)
│   └── Measurement
├── WORK
│   ├── Case Studies
│   └── Case Study Detail
├── ENGAGEMENTS
│   ├── Engagement Models
│   ├── Service Levels & Accountability
│   └── Vendor Pack (unduh setelah form)
├── INSIGHTS
├── NEWSROOM
├── CONTACT
├── LEGAL (Privacy, Terms, Cookie, Content Disclosure)
├── GLOSSARY
└── 404 / 500 / Maintenance
```

**Navigasi desktop:** Capabilities · Approach · Work · Insights · About · [ID | EN] · [Mulai Percakapan]. Sticky dan accessible. **Mobile:** menu fullscreen dengan pengalih bahasa dan CTA.

## 7. Homepage (9 Section)

| # | Section | Isi |
|---|---|---|
| 01 | Hero | Headline, supporting copy, CTA, NEXUS Signal |
| 02 | Trust Metrics | 4 angka terverifikasi dan logo klien/mitra (bila izin) |
| 03 | About | Positioning, 4 supporting points, sorotan fasilitas |
| 04 | Capabilities | Editorial list interaktif (6 item) |
| 05 | NEXUS System | Diagram terpadu tunggal |
| 06 | Integrity & Accountability | 4 pilar GPR dan jejak BAST |
| 07 | Selected Work | 1–3 case study yang sudah disetujui |
| 08 | Insights | 3 artikel terbaru |
| 09 | Contact CTA + Footer | Form ringkas atau tautan ke Contact |

## 8. Hero & NEXUS Signal

Visual proprietary berupa jaringan editorial (audience, creator, konten, distribusi, sinyal kampanye). Tidak boleh terlihat seperti crypto, cyberpunk, atau dashboard sci-fi.

| Prioritas | Cakupan |
|---|---|
| **P0** | SVG dasar dengan idle pulse berbasis CSS, fallback statis untuk reduced-motion dan perangkat rendah |
| **P1** | Hover activation, scroll-linked signal, transformasi ke metrik case study |
| **P2** | Peta geografis interaktif (sebaran 11 daerah pada Brief 04 dan cakupan provinsi) |

## 9. Trust Metrics (Direvisi)

Tipografi-led, bukan kartu dashboard. Setiap angka wajib punya **definisi, periode, sumber**, dan tanggal pembaruan.

| Angka | Label | Sumber | Status |
|---|---|---|---|
| 41 | Kreator pada studi kasus Brief 04 | BAST Brief 04 | Tayang setelah D8 |
| 81 | Konten terverifikasi (BAST) | BAST Brief 04 | Tayang setelah D8 |
| 11 | Daerah + jangkauan nasional | BAST Brief 04 | Tayang setelah D8 |
| 4 | Distribution slot harian terstruktur | Metodologi NEXUS | Siap |
| 300+ | Kapasitas jaringan kreator terverifikasi | Database internal | **Menunggu D7** |

**Tidak dipakai sebagai angka utama:** "60M+ potensi jangkauan" (setara batas atas estimasi Paket 05) dan "100% SLA" tanpa definisi. Jika dipakai kemudian, harus berlabel *estimasi kapasitas* atau disertai definisi D6.

## 10. Capabilities

Enam capability: Digital Strategy, Public Communication, Creator Ecosystem, Content Production, Campaign Orchestration, Intelligence & Analytics.

- Format editorial list, bukan grid kartu.
- Desktop: hover memunculkan deskripsi dan visual. **Touch:** tap untuk expand. **Keyboard:** fokus dan Enter/Space. Nomor selalu terlihat.
- Satu template halaman detail: ringkasan, cakupan, output, contoh terkait, CTA.

## 11. Approach

### 11.1 NEXUS System
Satu diagram terpadu: Strategy → Audience → Creator Network → Content → Distribution → Monitoring → Measurement. Setiap node punya penjelasan, visual, supporting metric, dan capability terkait.

### 11.2 Platform Strategy

| Platform | Fokus | Format |
|---|---|---|
| TikTok | Penjangkauan luas untuk konten edukasi pendek, moderasi dialog kolom komentar untuk memitigasi hoaks | Video edukasi 15–60 detik |
| Instagram | Legitimasi dan otoritas informasi | Carousel data kebijakan, Reels visualisasi program, Q&A Story |

*Catatan:* klaim "distribusi algoritma presisi" pada rate card diganti dengan deskripsi berbasis konten dan komunitas, karena hasil algoritma platform tidak dapat dijanjikan.

### 11.3 Creator Tiers

| Tier | Followers | ER (benchmark internal) | Peran | Format |
|---|---|---|---|---|
| Nano | < 1K | 6,5–12,0% | Kreator akar rumput (pengurus RT/RW, kader Posyandu, komunitas lokal). Kedekatan kultural | Komentar edukatif, reels interaksi warga, testimoni |
| Micro | 1K–25K | 3,8–6,2% | Praktisi ahli (dokter, guru, pakar hukum, akademisi). Edukasi teknis kebijakan | Carousel analitis, bedah pasal, panduan layanan |
| Macro | 25K–100K | 2,2–4,0% | Produksi sinematik dan social proof | Video storytelling 60 detik, reels, tagar resmi |
| KOL | > 100K | 1,5–3,2% | Figur publik dan pemantik diskursus | Keynote, live dialog, pernyataan |

**Prinsip sinergi:** KOL membuka kesadaran nasional, Macro membentuk tren percakapan, Micro mengedukasi substansi, Nano memastikan pesan diterima di tingkat warga. Metodologi ER wajib didokumentasikan (D9).

### 11.4 Distribution Slots

| Slot | Jam (WIB) | Porsi | Target | Konten |
|---|---|---|---|---|
| Pagi | 07.00–09.00 | 20% | Mobilitas pagi dan komuter | Pengingat layanan publik, infografis agenda, pengantar kebijakan ringkas |
| Siang | 12.00–13.30 | 25% | Istirahat kerja dan warga | Tutorial layanan, video edukasi program bantuan, panduan praktis |
| Sore | 16.30–18.00 | 20% | Perjalanan pulang kantor | Rekap perkembangan kebijakan, diskusi, konten inspirasi |
| Malam (Golden) | 19.30–21.30 | 35% | Puncak santai keluarga | Video sinematik, pelibatan KOL, narasi humanis, siaran live |

Ditampilkan sebagai timeline. Jadwal mengikuti WIB atau disesuaikan zona waktu kegiatan dinas regional.

### 11.5 Campaign Phases
Strategi dua fase (edukasi pemahaman awal → penetrasi massal) untuk program nasional, dan tiga fase (awareness → edukasi → advokasi) untuk skala penuh. Istilah *fase*, bukan *gelombang*, untuk menghindari kerancuan dengan slot jam tayang.

### 11.6 Integrity & Compliance (GPR)
Headline: *Dampak Tanpa Mengorbankan Integritas.*

| Pilar | Definisi |
|---|---|
| Netralitas Non-Partisan | Bebas afiliasi politik praktis, kepentingan golongan, dan provokasi polarisasi |
| Rekam Jejak Bersih | Screening tanpa toleransi atas catatan hukum, tindak pidana, promosi judi online, pornografi, penipuan finansial, dan pelanggaran asusila |
| Literasi Edukatif & Anti-Hoaks | Pesan berpedoman regulasi sah dan rujukan data resmi kementerian, persuasif dan humanis |
| Akuntabilitas Audit BAST | Bukti tayang dengan timestamp, tautan permanen, dan arsip master 4K untuk mendukung audit dinas |

Wording dijaga: *dirancang untuk mendukung audit*, bukan menjamin hasil pemeriksaan lembaga tertentu.

## 12. Work (Case Studies)

**Struktur detail:** Challenge → Context → Strategy → Creator System → Content System → Distribution → Results → Learnings.
**Kartu:** nomor case, judul, deskripsi singkat, 4 metrik, "Lihat Case →".

### 12.1 Kandidat #1: Tanggap Darurat Erupsi Krakatau (Brief 04, 7 September 2026)

| Data | Nilai (dari rate card) |
|---|---|
| Kreator | 41 akun multi-tier |
| Konten | 81 |
| Sebaran | 11 daerah + nasional |
| Platform | TikTok, Instagram, Facebook |
| Status di rate card | "Terverifikasi Resmi" (dasar verifikasi: D8) |

**Rekomendasi penyajian:** fokus pada sistem dan proses (bagaimana tier bekerja bersama, bagaimana slot diatur), bukan pada isu bencana atau nama tokoh. Contoh akun kreator dianonimkan atau ditayangkan dengan izin tertulis. Nama instansi hanya jika ada izin.

### 12.2 Kebijakan Wajib Sebelum Publish
1. Persetujuan tertulis klien atau pihak terkait.
2. Opsi anonimisasi ("Kementerian X") bila terikat NDA.
3. Persetujuan kreator untuk penampilan akun, handle, dan statistik.
4. Verifikasi angka oleh Analytics terhadap BAST.
5. Persetujuan final Legal/Direksi.
6. Periode dan tanggal data dicantumkan.
7. Sensitivitas topik (bencana, kebijakan sensitif) ditinjau khusus.

Minimum saat launch: **3 case study** disetujui. Jika belum tersedia, gunakan format *Capability Snapshot* berlabel jelas atau tunda section Work.

## 13. Engagements

### 13.1 Model Engagement (Publik) dan Pemetaan Rate Card

Harga tidak tampil sebagai daftar publik. Website menampilkan tiga model. Detail lengkap ada di Vendor Pack.

| Model | Rate card | Skala | Deskripsi |
|---|---|---|---|
| **Foundation** | Paket 01–02 | 35–75 kreator, 30 hari | Diseminasi isu spesifik dan edukasi kebijakan terpadu |
| **National** | Paket 03 | 140 kreator, multi-wilayah | Program strategis nasional, dua fase (edukasi → penetrasi), whitelisting |
| **Enterprise Program** | Paket 04–05 | 210–300 kreator | Program skala penuh, supervisi khusus, command center, tiga fase (P05) |

### 13.2 Penyeragaman Nama Paket (untuk Vendor Pack dan materi resmi)

| Rate card | Usulan | Alasan |
|---|---|---|
| Starter Public Impact | Tetap | Netral |
| Strategic Booster | Tetap / *Integrated Policy Education* | Netral |
| Dominance Pro Nasional | **National Program** | Kata "dominance" tidak sejalan dengan netralitas |
| Enterprise Scale | Tetap | Netral |
| Ultimate Monolith 360° | **Nusantara 360** | Terlalu flashy |

Keputusan akhir: Brand dan Direksi (D10).

### 13.3 Data Paket (Referensi Internal, Menunggu D1 dan D2)

| Paket | Pagu | Kreator (N/Mi/Ma/KOL) | Post/hari | Est. impresi | Total post tertulis vs hitungan |
|---|---|---|---|---|---|
| 01 | Rp100 jt | 35 (20/10/4/1) | 15 | 1,8–2,5 jt | 105 vs 450 |
| 02 | Rp250 jt | 75 (35/25/12/3) | 18 | 5,5–8,0 jt | 250 vs 540 |
| 03 | Rp500 jt | 140 (60/50/22/8) | 23 | 14–20 jt+ | 480 vs 690 |
| 04 | Rp750 jt | 210 (80/80/35/15) | 25 | 25–35 jt+ | 750 vs 750 |
| 05 | Rp1 M | 300 (100/120/55/25) | 37 | 45–60 jt+ | 1.100 vs 1.110 |

Semua estimasi impresi wajib berlabel **estimasi** dengan metodologi (D9).

### 13.4 Vendor Pack
PDF yang diunduh setelah pengisian form ringkas (nama, instansi, email, tujuan), berisi:
1. Surat pengantar dan profil perusahaan.
2. Data legalitas (D5).
3. Protokol GPR.
4. Matriks tier kreator dan distribution slots.
5. Ringkasan model engagement dan rate card (setelah D1–D3 selesai).
6. SLA, kebijakan penggantian talent, dan contoh laporan BAST.
7. Ketentuan kerja sama (termin pembayaran, creative review, hak pemanfaatan materi), disetujui Legal.

### 13.5 Service Levels & Accountability
*Setiap Campaign Meninggalkan Jejak.*

| Komponen | Deskripsi | Catatan |
|---|---|---|
| Kepatuhan jadwal tayang | Target 100% | Definisi dan pengecualian (D6) |
| Dashboard monitoring 24/7 | Reach, impresi, sentimen komentar | Sistem terpisah, di luar scope website |
| Laporan BAST | Bukti tayang, timestamp, tautan aktif | Contoh laporan dianonimkan |
| Analisis demografi | Usia, gender, wilayah | |
| Repositori aset master 4K | Arsip video dan infografis | |
| Whitelisting | Izin pemanfaatan materi | Durasi per paket (D3) |
| Garansi penggantian talent | Talent pengganti setara tanpa biaya tambahan bila kreator berhalangan (force majeure) | |

## 14. Insights & Newsroom

- **Insights:** thought leadership, layout editorial. Kategori: digital communication, creator economy, public communication, campaign strategy, audience behavior, analytics. Target awal 1 artikel/minggu (usulan).
- **Newsroom:** siaran pers, media kit, kontak humas, aset merek.

## 15. Contact & Lead Handling

**Form:** Nama*, Instansi/Organisasi*, Email*, Telepon, Jenis Proyek*, Rentang Anggaran, Brief Proyek* (min. 50 karakter). Alternatif: WhatsApp Business dan email domain perusahaan.

**Jenis proyek:** Digital Strategy, Public Communication, Creator Campaign, Content Production, Campaign Orchestration, Analytics & Monitoring, Lainnya.
**Anggaran:** < Rp100 jt, Rp100–250 jt, Rp250–500 jt, Rp500 jt–1 M, > Rp1 M, Lebih suka didiskusikan.

**Persyaratan:**
- Validasi sisi klien dan server, sanitasi input.
- Captcha non-intrusif (mis. Cloudflare Turnstile), honeypot, rate limiting.
- Consent eksplisit pemrosesan data pribadi (UU PDP) dan tautan Privacy Policy.
- Notifikasi email ke tim dan auto-reply.
- Integrasi CRM (HubSpot atau setara) via webhook/API.
- Target respons internal 1 hari kerja (usulan).
- Status: NEW → REVIEWING → CONTACTED → QUALIFIED → PROPOSAL → WON / LOST → ARCHIVED.
- Retensi data inquiry sesuai kebijakan (usulan 24 bulan) dan mekanisme penghapusan atas permintaan.

## 16. Halaman Trust & Legal

**Wajib:** Leadership & Team, Profil Perusahaan (nama badan hukum, alamat, NIB, NPWP, akta), fasilitas (dokumentasi asli), klien/mitra (dengan izin), sertifikasi (bila ada), Vendor Pack, Privacy Policy, Terms of Use, Cookie Policy, Content Disclosure Policy, Glosarium.

## 17. Bilingual & Konten

- Default Bahasa Indonesia, English di semua halaman utama. Istilah lokal (BAST, PPK, SPK, RAB) dipertahankan dengan glosarium di versi English.
- URL `/id` dan `/en`, hreflang, metadata per bahasa.
- CMS mendukung field terjemahan dan status terjemahan.
- **Content readiness plan:** penanggung jawab copy, timeline, sumber angka, jadwal foto dokumentasi (studio, command center, tim). Konten final menjadi prasyarat Phase 03.

## 18. Tech Stack & Arsitektur (High Traffic, Dikelola Tim Internal)

### 18.1 Prinsip
1. **Statis dahulu:** halaman publik dirender SSG/ISR dan disajikan dari CDN. Origin hanya untuk revalidasi dan endpoint form.
2. **Pisahkan jalur baca dan tulis:** halaman publik tidak bergantung pada query database per request.
3. **Edge caching** dengan invalidasi per konten (on-demand revalidation dari CMS).
4. **Degradasi anggun:** jika CMS atau database tidak tersedia, situs tetap menyajikan cache terakhir dan form tetap menerima inquiry lewat queue.
5. **Bukan platform operasional:** sistem dashboard campaign dan data kreator berada di luar scope.
6. **Dapat dioperasikan tim internal:** teknologi mainstream dan terdokumentasi, infrastruktur sebagai kode, observability sejak awal, dan lock-in vendor minimal.

### 18.2 Asumsi Kapasitas (validasi sebelum Phase 05)

| Parameter | Asumsi awal |
|---|---|
| Kunjungan bulanan normal | 100 ribu – 500 ribu |
| Lonjakan (media/kampanye) | hingga 10× rata-rata harian |
| Konkurensi puncak | ≥ 5.000 pengunjung bersamaan |
| Origin | Halaman publik tidak bergantung pada query database per request |

### 18.3 Tech Stack

| Lapisan | Pilihan | Alasan | Alternatif |
|---|---|---|---|
| Frontend | **Next.js (App Router) + TypeScript** | SSG/ISR, ekosistem SEO dan i18n matang, image optimization, talenta mudah dicari | Astro (lebih ringan untuk situs konten) |
| Styling | Tailwind CSS + design tokens (CSS variables) | Konsisten dengan design system | CSS Modules |
| Animasi | **GSAP** (dimuat lazy) + CSS transition | NEXUS Signal berbasis SVG dan scroll. Hanya satu library | Motion (Framer Motion) |
| i18n | next-intl | Routing `/id` dan `/en`, hreflang | |
| Validasi | Zod (dibagi antara form dan API) | Satu skema untuk client dan server | |
| CMS | **Payload CMS (self-hosted)**, berjalan di dalam Next.js | Kontrol data penuh, TypeScript native, memakai PostgreSQL sendiri, cocok untuk tim engineering internal | Sanity (managed), Strapi |
| Database | **PostgreSQL managed** dengan backup dan PITR | Relasional, matang, portabel antar penyedia | |
| Cache, rate limit, queue | Redis managed + worker (mis. BullMQ) | Rate limiting form, antrian email dan CRM | Antrian bawaan cloud |
| Storage | Object storage S3-compatible + CDN | Gambar, PDF Vendor Pack via signed URL | |
| CDN & WAF | **Cloudflare** (CDN, WAF, DDoS, bot management, Turnstile) | Edge di Asia Tenggara, proteksi bot | CDN cloud lain |
| Hosting | **Container (Docker)** di cloud region Singapura atau cloud lokal Indonesia, di belakang CDN | Kontrol, kepatuhan UU PDP, tidak bergantung platform tertutup | Vercel (lebih mudah, biaya bandwidth naik dengan trafik) |
| Infrastruktur | Terraform (IaC), GitHub Actions (CI/CD) | Lingkungan dapat direproduksi, deployment terotomasi | |
| Observability | Sentry, uptime monitor, log terpusat, metrik dan alerting | Deteksi masalah sebelum klien | |
| Testing | Vitest, Playwright (E2E), axe (aksesibilitas), k6 (uji beban), Lighthouse CI | Kualitas dan performa terjaga otomatis | |
| Email transaksional | Penyedia email API/SMTP dengan domain perusahaan (SPF, DKIM, DMARC) | Deliverability notifikasi dan auto-reply | |

Nama vendor bersifat rekomendasi awal. Harga, region, dan fitur terbaru wajib diverifikasi saat evaluasi (lihat 18.10).

### 18.4 Arsitektur

```text
Pengunjung → Cloudflare (CDN, WAF, Turnstile)
              ├── Halaman statis/ISR (cache edge)
              └── Origin: Next.js (container)
                    ├── Route Handlers / Server Actions (API)
                    ├── Payload CMS (admin, Local API)
                    ├── PostgreSQL managed (konten CMS, inquiry)
                    ├── Redis (rate limit, queue)
                    └── Worker → email, CRM, notifikasi
Editor → Payload admin → publish → webhook revalidate → cache edge diperbarui
```

### 18.5 API Layer
Permukaan API kecil, sehingga tidak diperlukan microservices maupun GraphQL.

- **Route Handlers / Server Actions** di Next.js, validasi Zod, dan **service layer** terpisah dari handler agar logika dapat dipindahkan ke layanan lain jika dibutuhkan.
- Konten dibaca lewat Local API Payload saat build dan revalidasi, bukan pada setiap request pengunjung.

| Endpoint | Fungsi |
|---|---|
| `POST /api/inquiry` | Menerima form kontak |
| `POST /api/vendor-pack` | Menerima permintaan unduh, mengembalikan signed URL berbatas waktu |
| `POST /api/revalidate` | Dipanggil CMS saat publish (dengan secret) |
| `GET /api/health` | Health check untuk monitoring |
| Webhook keluar | Sinkronisasi ke CRM |

**Alur inquiry:** submit → validasi Zod → verifikasi Turnstile → rate limit (Redis) → simpan ke PostgreSQL → masukkan ke queue → worker mengirim email notifikasi, auto-reply, dan sinkron CRM (dengan retry dan dead-letter queue).

**Kapan memisahkan layanan backend (mis. NestJS atau Fastify):** jika muncul kebutuhan seperti portal klien, autentikasi pengguna eksternal, atau sistem operasional campaign. Layanan tersebut dibuat terpisah, bukan digabung ke website.

### 18.6 Model Operasi Tim Internal

| Aspek | Ketentuan |
|---|---|
| Susunan tim (usulan minimum) | 1 Engineering Lead, 2 full-stack engineer, 0,5 DevOps/SRE, 0,5 QA. Editor konten berasal dari tim non-engineering |
| Kepemilikan | Setiap komponen (frontend, CMS, infrastruktur, form/CRM) punya pemilik utama dan cadangan. Tidak ada komponen yang hanya dipahami satu orang |
| Alur rilis | Trunk-based development, code review wajib, preview per PR, staging → production, rollback satu perintah |
| Pembaruan dependensi | Otomatis (mis. Renovate), tinjauan bulanan |
| Patch keamanan | Target penanganan celah kritis ≤ 48 jam (usulan) |
| On-call | Rotasi dengan runbook insiden dan eskalasi, aktif terutama saat kampanye besar |
| Backup dan DR | Backup harian, uji pemulihan tiap kuartal (restore drill) |
| Dokumentasi | README, arsitektur, ADR (catatan keputusan teknis), runbook, panduan editor CMS |
| Onboarding | Engineer baru dapat menjalankan proyek lokal dan deploy ke staging dalam ≤ 1 hari |
| Biaya operasional | Anggaran hosting, monitoring, dan lisensi dihitung sebelum Phase 05 |

Jika sebagian pembangunan dikerjakan vendor eksternal, wajib ada serah terima terjadwal (kode, IaC, dokumentasi, akses akun) dan tim internal ikut sejak awal (pair review).

### 18.7 Migrasi Situs Proposal yang Ada
Rate card saat ini berjalan di situs terpisah (Netlify) dan memuat harga serta contoh akun kreator.
- Pastikan situs tersebut **noindex** atau diproteksi sampai konten disetujui (D3, D8).
- Setelah launch, konten diarahkan ke Vendor Pack dan halaman Engagements, lalu situs lama dialihkan (301) atau dinonaktifkan.
- Mode Auto-Layout, cetak PDF, dan simulator anggaran tidak dibawa ke situs utama. Simulator (P2) hanya jika Direksi setuju harga terlihat publik.

### 18.8 Performance Budget

| Metrik | Target |
|---|---|
| LCP | < 2,5 dtk (p75, mobile 4G) |
| INP | < 200 ms |
| CLS | < 0,1 |
| TTFB | < 600 ms dari edge |
| Lighthouse | ≥ 90 |
| JS awal (kompresi) | ≤ 170 KB per halaman (usulan) |

Font di-subset dan self-hosted, gambar responsif, lazy loading, code splitting, animasi dimuat setelah konten kritis. Konten inti terbaca tanpa menunggu animasi. Lighthouse CI dan budget JS berjalan di pipeline CI dan memblokir merge jika dilanggar.

### 18.9 Uji Beban & Resiliensi
- Load test (k6) pra-launch dan sebelum kampanye besar dengan skenario lonjakan 10×, plus stress test form dan API.
- Uji failover CDN/origin dan simulasi CMS atau database down.
- Backup harian, RPO ≤ 24 jam, RTO ≤ 4 jam (usulan), pemulihan diuji berkala.

### 18.10 Decision Log

| Keputusan | Rekomendasi | Opsi lain | Batas waktu |
|---|---|---|---|
| Domain dan email perusahaan | Ditentukan Direksi | | Phase 00 |
| Kapasitas dan susunan tim engineering | Sesuai 18.6 | | Phase 00 |
| Lokasi hosting dan data | Container di Singapura atau Indonesia | Vercel | Sebelum Phase 02 |
| CMS | Payload (self-hosted) | Sanity, Strapi | Sebelum Phase 05 (evaluasi singkat dengan prototipe alur approval Legal) |
| Library animasi | GSAP | Motion | Sebelum Phase 04 |
| CRM | HubSpot atau setara | | Sebelum Phase 05 |
| Analytics | GA4 + alternatif privacy-friendly | | Sebelum Phase 05 |
| Penyedia database dan Redis managed | Diputuskan bersama lokasi hosting | | Sebelum Phase 05 |

## 19. Non-Functional Requirements

| Kategori | Persyaratan |
|---|---|
| Ketersediaan | Uptime ≥ 99,9%, status page, incident response |
| Keamanan | HTTPS/HSTS, CSP, WAF, MFA admin, RBAC, audit log, secret management, dependency scanning, pen test sebelum launch dan tahunan |
| Privasi | Kepatuhan UU PDP, consent management, minimisasi data, retensi dan penghapusan |
| Aksesibilitas | WCAG 2.1 AA, keyboard, screen reader, reduced motion |
| Kompatibilitas | Chrome, Safari, Firefox, Edge (2 versi terakhir), iOS Safari, Android Chrome, termasuk perangkat menengah-rendah |
| Lingkungan | Dev, staging, production, CI/CD dengan tes otomatis, preview per PR |
| Maintainability | Design system terdokumentasi, komponen reusable, runbook |
| Operabilitas | Infrastruktur sebagai kode, monitoring dan alerting, rotasi on-call, restore drill kuartalan, dokumentasi arsitektur dan ADR |

## 20. CMS & Editorial Workflow

**Konten:** Case Studies, Insights, Capabilities, Engagement Models, Team, Newsroom, Legal, Vendor Pack (file dan versi), Glosarium, Site Settings (logo, sosial, kontak, alamat, data entitas, statistik, CTA).

**Workflow:** Draft → Review → Approval (Legal untuk case study, metrik, dan klaim) → Scheduled/Published. Ada versioning, riwayat perubahan, dan preview.
**Field case study tambahan:** nomor brief, tanggal, jumlah kreator per tier, jumlah konten, wilayah, platform, status verifikasi, status izin, dan dokumen BAST rujukan (internal, tidak tampil).
**Role:** Super Admin, Admin, Editor, Reviewer/Legal, Viewer (RBAC + audit log). Alur approval Legal diimplementasikan sebagai workflow kustom di Payload (status field dan hooks), dengan effort tercatat di Phase 05.
**Inquiry:** daftar, detail, ubah status, catatan internal, ekspor, arsip. Jika CRM dipakai, CMS menjadi buffer pencatatan.

## 21. SEO & Analytics

- Metadata per halaman dan per bahasa: title, description, canonical, hreflang, Open Graph, Twitter/X.
- Structured data: **Organization** (legalName: PT Nexus Digital Strategy, alamat, kontak), Article, BreadcrumbList.
- Sitemap dan robots.txt dinamis, penanganan 404/410/301.
- Kata kunci awal: komunikasi publik pemerintah, digital public relations, kampanye creator Indonesia, strategi komunikasi digital kementerian, digital strategy Indonesia.
- **Analytics:** GA4 + Search Console setelah consent. Event: `CTA_CLICK`, `CAPABILITY_VIEW`, `CASE_STUDY_VIEW`, `ENGAGEMENT_VIEW`, `INSIGHT_VIEW`, `CONTACT_START`, `CONTACT_SUBMIT`, `EMAIL_CLICK`, `WHATSAPP_CLICK`, `SOCIAL_CLICK`, `VENDOR_PACK_DOWNLOAD`.
- Dashboard konversi bulanan untuk funnel Awareness → Understanding → Trust → Evaluation → Inquiry → Qualified Lead.

## 22. Design System

**Filosofi:** Swiss Editorial × Institutional Modernism × Digital Intelligence. Quiet confidence.

| Elemen | Spesifikasi |
|---|---|
| Warna | Obsidian `#0B0B0C`, Warm Ivory `#F4F1EA`, Neutral `#D8D5CE`, Text `#161616`, Accent Signal Orange `#FF5A36` (terbatas: CTA, active state, sinyal data) |
| Logo | Aset logo resmi (versi biru dan putih yang sudah ada) dievaluasi terhadap palet. Adaptasi dilakukan di Phase 01 dan disetujui Brand |
| Kontras | Semua kombinasi lolos WCAG AA. Orange di atas ivory tidak dipakai untuk teks kecil tanpa verifikasi |
| Tipografi | Display Instrument Serif, UI/Body Manrope (alternatif Inter). Dukungan karakter Bahasa Indonesia |
| Type scale | Hero 96–128, H1 72–88, H2 48–64, H3 28–36, Body Large 20–24, Body 16–18, Caption 12–14 px, responsif dengan `clamp()` |
| Grid | Desktop 12 kolom, margin 80, gap 24, maks 1280 px. Tablet 8 kolom. Mobile 4 kolom, padding 20–24 px |
| Spacing | Basis 4 px, ritme 32/48/64/96/120/160/200 |
| Radius | 0/4/8/12 px. Hindari 24/32/999 px |
| Shadow | Border diutamakan. Bila perlu sangat halus |
| Fotografi | Dokumenter dan autentik: foto **asli** studio, command center, tim, dan kegiatan lapangan (dengan izin). Hindari stok generik |
| Motion | Menjelaskan hierarki, bukan dekorasi. Hormati `prefers-reduced-motion` |

**Anti-AI-slop:** tanpa gradien ungu/biru neon, bola 3D melayang, glassmorphism berlebihan, kartu bulat besar, teks gradien, ikon berlebihan, partikel acak, dan frasa generik ("revolutionize", "unlock your potential", "transform your business").

## 23. Responsive

Desktop ≥1440, Laptop 1024–1439, Tablet 768–1023, Mobile 320–767. Mobile didesain ulang dengan pendekatan content-first. Semua interaksi hover punya padanan tap dan keyboard.

## 24. Prioritas Fungsional

| Prioritas | Cakupan |
|---|---|
| **P0** | Homepage (9 section), navigasi, bilingual, capabilities, approach, case studies (yang disetujui), engagement model, Vendor Pack, contact + CRM, halaman trust & legal, glosarium, NEXUS Signal dasar, CMS + workflow, responsive, SEO, analytics + consent, keamanan, arsitektur high-traffic, observability |
| **P1** | Insights, Newsroom, Signal lanjutan, visualisasi campaign, Careers, dashboard inquiry di CMS |
| **P2** | Peta geografis interaktif, simulator anggaran (jika disetujui), personalisasi, pencarian lanjutan, mikrosite kampanye |

## 25. Fase & Timeline (Usulan, Perlu Validasi)

| Fase | Output | Estimasi |
|---|---|---|
| 00 — Discovery & Governance | Stakeholder, RACI, **penuntasan D1–D12**, keputusan hosting/CMS/domain, susunan tim engineering internal dan model on-call, content plan, kebijakan case study, baseline metrik | 3–4 minggu |
| 01 — Brand & Art Direction | Identitas visual, tipografi, warna, motion, NEXUS Signal, design tokens, penamaan paket | 3–4 minggu |
| 02 — UX Architecture | Sitemap, wireframe, journey, arsitektur konten dan konversi | 3 minggu |
| 03 — UI Design | Halaman utama, responsive, ID/EN | 5–6 minggu |
| 04 — Interaction | Signal, transisi, mikrointeraksi, uji performa | 3 minggu |
| 05 — Full-Stack | Next.js, CMS, CRM, form, infrastruktur, CI/CD (paralel dengan 04) | 8–10 minggu |
| 06 — Quality & Launch | Uji beban, pen test, aksesibilitas, SEO, UAT, deployment, runbook, pelatihan editor dan engineer, restore drill, hypercare | 4 minggu |

Total sekitar 5–7 bulan. Dikonfirmasi setelah Phase 00.

## 26. Stakeholder

| Peran | Tanggung jawab |
|---|---|
| Executive Sponsor (Direksi) | Strategi, anggaran, positioning, keputusan penamaan |
| Product Owner | Prioritas dan keputusan produk |
| Brand/Creative Lead | Art direction dan konsistensi |
| Content Lead | Copy ID/EN, case study, insight |
| Legal/Compliance | Legalitas, izin case study, privasi, klaim, ketentuan kerja sama |
| Operasional/Analytics | Kebenaran data paket, BAST, metrik, metodologi |
| Engineering Lead | Arsitektur, performa, keamanan, kepemilikan operasional setelah launch |
| DevOps/SRE | Infrastruktur, CI/CD, monitoring, backup, on-call |
| Marketing/Sales | Lead handling, CRM, peluncuran |

RACI dan jadwal review ditetapkan di Phase 00. Perubahan scope melalui change request tertulis.

## 27. Risiko Utama

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Data rate card tidak konsisten muncul di publik | Kredibilitas rusak di mata PPK | Selesaikan D1–D3 sebelum konten publik |
| Case study Krakatau tanpa izin atau sensitif | Reputasi, hukum | Gerbang izin 12.2, anonimisasi |
| Framing "influence/dominasi" | Reputasi | Copy rules, penggantian nama paket |
| Klaim performa dianggap jaminan | Sengketa kontrak | Label estimasi, metodologi |
| Data kreator individu tayang tanpa izin | Pelanggaran privasi | Persetujuan tertulis, anonimisasi |
| Lonjakan trafik | Downtime | Arsitektur statis + CDN, uji beban |
| Animasi memperlambat performa | Bounce tinggi | Performance budget, fallback |
| Pelanggaran UU PDP | Sanksi | Consent, retensi, review Legal |
| Scope creep ke sistem operasional | Timeline dan biaya | Non-goals dikunci |
| Konten terlambat | Launch mundur | Content readiness gate |
| Ketergantungan pada sedikit engineer (bus factor) | Operasi terhenti bila anggota kunci pergi | Kepemilikan utama dan cadangan, dokumentasi, cross-training |
| Beban operasional self-hosted | Insiden tanpa penanganan cepat | IaC, monitoring, on-call, database dan Redis memakai layanan managed |

## 28. Acceptance Criteria

1. Semua halaman P0 selesai dalam ID/EN.
2. Data entitas (nama legal, alamat, legalitas, email domain) konsisten di seluruh situs dan schema.
3. Isu D1–D12 tuntas atau angka terkait tidak tayang.
4. Minimal 3 case study lolos gerbang 12.2 (atau alternatif yang disepakati).
5. Vendor Pack tersedia dan disetujui Legal.
6. Responsif dan lolos matriks browser/device.
7. CMS dipakai editor non-teknis dengan workflow approval.
8. Form inquiry aman, tersimpan, terkirim ke CRM, dan menghasilkan notifikasi.
9. Halaman legal dan consent management aktif.
10. Core Web Vitals lolos di lab dan lolos uji beban lonjakan.
11. Pen test selesai, temuan kritis dan tinggi tertutup.
12. WCAG 2.1 AA lolos audit.
13. SEO, hreflang, sitemap, structured data, dan analytics tervalidasi.
14. Situs proposal lama diamankan atau dialihkan.
15. Backup dan pemulihan diuji, monitoring aktif.
16. Runbook, dokumentasi arsitektur, dan pelatihan tim internal selesai. Tim mampu deploy, rollback, dan restore dari backup tanpa bantuan vendor.
17. Design system terdokumentasi.

## 29. Master Principle

> **NEXUS does not sell noise. NEXUS engineers signal.**

Setiap keputusan diuji dengan pertanyaan: *apakah ini terasa seperti perusahaan strategi tingkat tinggi yang dapat dipercaya institusi, dan dapat melayani lalu lintas besar tanpa gagal?*
