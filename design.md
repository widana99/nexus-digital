# DESIGN.md — PT Nexus Digital Strategy
## Visual Language & Design System (Phase 01 — Brand & Art Direction)

**Versi:** 1.1 (logo dianalisis, font Opsi A dipilih) · **Status:** Draft untuk review Brand/Direksi · **Rujukan:** PRD v2.2
**Arah:** Elegan · Modern · Minimalis · Aesthetic · Institusional
**Pertanyaan yang dijawab dokumen ini:** *"Apa yang membuat website NEXUS terlihat seperti NEXUS?"*

---

## 0. Status & Keputusan

| # | Keputusan | Status |
|---|---|---|
| K1 | Logo | **Diterima dan dianalisis** (bagian 3). Warna navy diambil dari file. Perlu versi vektor dan varian (lihat 3.2) |
| K2 | Aksen tunggal | **Diputuskan:** keluarga navy dari logo. Signal Orange dari PRD v2.2 dihapus |
| K3 | Font | **Diputuskan: Opsi A** (Newsreader + Schibsted Grotesk + IBM Plex Mono). Opsi B tidak dipakai |
| K4 | Type test | Wajib sebelum font dikunci di produksi (5.8) |
| K5 | **Nama merek pada wordmark** | Logo bertuliskan **NEXUS DIGI** dengan tagline "NEXUS DIGITAL STRATEGY". PRD memakai "NEXUS". Direksi perlu memutuskan nama pendek resmi untuk teks situs dan metadata (usulan: "NEXUS" untuk teks, logo tetap dipakai apa adanya) |

---

## 1. Kepribadian Visual

**Quiet confidence.** NEXUS tampil seperti publikasi editorial premium yang dipegang lembaga strategi, bukan seperti startup teknologi.

| Karakter | Diterjemahkan menjadi |
|---|---|
| Elegan | Serif display beraksen tinggi, whitespace lapang, garis tipis |
| Modern | Grid tegas, sans-serif netral yang presisi, asimetri terkontrol |
| Minimalis | Satu aksen, sedikit elemen, tanpa dekorasi tanpa fungsi |
| Aesthetic | Komposisi yang dipikirkan, fotografi dokumenter, detail tipografi (numeral, kapitalisasi, tracking) |
| Institusional | Konsisten, terstruktur, mudah dipindai oleh PPK dan eksekutif |

**Bukan:** SaaS, startup, gaming, cyberpunk, futuristik berlebihan, atau tampilan generik hasil AI.

## 2. Prinsip Desain

1. **Tipografi adalah identitas.** Jika harus memilih: tipografi yang lebih baik > dekorasi yang lebih banyak.
2. **Whitespace adalah kemewahan.** Setiap section punya ruang bernapas.
3. **Satu ide per layar.** Satu headline, satu pesan, satu tindakan.
4. **Garis di atas bayangan.** Hairline 1px menggantikan card, shadow, dan glow.
5. **Warna itu langka.** Aksen hanya untuk tindakan, keadaan aktif, dan sinyal data.
6. **Gerak menjelaskan hierarki,** bukan menghias.
7. **Bukti di atas klaim.** Angka, dokumen, dan foto asli mengalahkan slogan.
8. **Konsisten di atas kreatif.** Aturan yang sama di semua halaman.
9. **Mobile dirancang ulang,** bukan diperkecil.
10. **Ujian akhir:** *Apakah ini terasa seperti perusahaan strategi tingkat tinggi yang dapat dipercaya institusi?*

## 3. Logo

Logo adalah titik awal sistem visual. Warna, bentuk, dan karakternya memandu palet dan tipografi.

### 3.1 Hasil Analisis Logo

| Aspek | Temuan |
|---|---|
| Struktur | Wordmark **NEXUS DIGI** dalam huruf kapital tebal bergaya geometris, di bawahnya garis, tagline **NEXUS DIGITAL STRATEGY** berhuruf tipis dengan jarak antarhuruf lebar, dan garis lagi |
| Detail khas | (1) Huruf **X** memiliki goresan diagonal yang memanjang ke kanan atas seperti bilah atau sinyal. (2) Huruf **D** pada "DIGI" berisi siluet kepala dengan kacamata (ruang negatif) |
| Warna | Navy tua tunggal, sampel dari file ≈ `#031F44`. Satu warna, tanpa gradien |
| Latar file | Putih, bukan transparan |
| Format file | PNG raster 1983 × 793 px dengan artefak kompresi di tepi huruf |

**Implikasi:**
- Logo cocok dengan arah institusional. Navy tunggal memberi dasar palet yang kuat dan mudah dipadukan dengan ivory.
- **Goresan diagonal pada X** menjadi motif turunan untuk NEXUS Signal (sudut ±45°, lihat 13).
- **Pola "garis — teks — garis"** pada tagline menjadi motif pemisah section: `—— 01 ABOUT ——`.
- **Jarak antarhuruf lebar pada tagline** menjadi dasar gaya `label` (tracking lebar).
- **Siluet kepala berkacamata** terlalu detail untuk ukuran kecil. Jangan dipakai sebagai favicon atau ikon berdiri sendiri, dan jangan diulang sebagai ilustrasi di tempat lain.
- File saat ini tidak layak produksi: tidak vektor, latar tidak transparan, dan tepi tidak bersih. Aset harus dibuat ulang atau di-trace ke SVG.

### 3.2 Aset yang Dibutuhkan

| Aset | Format | Catatan |
|---|---|---|
| Lockup lengkap (wordmark + garis + tagline) | SVG | Berwarna navy, putih, dan hitam |
| Wordmark saja (NEXUS DIGI) | SVG | Untuk navigasi dan ruang sempit |
| **Logo mark** untuk favicon dan avatar | SVG | Usulan: huruf **X** dengan goresan diagonal, dibuat sebagai mark mandiri |
| Aset Open Graph 1200 × 630 | PNG/JPG | Lockup di atas ivory |
| Tagline versi horizontal | SVG | Hanya untuk footer dan dokumen resmi |

Penyiapan vektor dikerjakan Brand di Phase 01. Warna navy final ditetapkan dari file vektor, bukan dari sampel raster ini.

### 3.3 Aturan Pemakaian

| Aturan | Spesifikasi |
|---|---|
| Ruang bebas | Minimal setinggi huruf "N" pada wordmark di semua sisi |
| Ukuran minimum | Wordmark 110 px lebar (digital). Lockup dengan tagline 220 px. Di bawah itu gunakan wordmark saja |
| Navigasi | Wordmark saja, kiri atas, navy di atas `--paper`, putih di atas navy |
| Footer | Lockup lengkap, versi putih di atas `--navy-950` |
| Latar | `--paper`, `--ivory`, dan `--navy-*` saja. Di atas foto hanya dengan scrim |
| Dilarang | Mengubah proporsi, menambah efek (shadow, gradien, glow), memutar, mengganti warna di luar tiga versi resmi, menaruh dalam pill atau kartu berwarna, memisahkan siluet kepala dari huruf D |

## 4. Sistem Warna

### 4.1 Pendekatan
Warna navy pada logo menjadi **satu-satunya keluarga aksen**. Karena navy sangat gelap, ia berfungsi ganda: sebagai warna merek (CTA, tautan, judul, section gelap) dan, dalam tingkat yang lebih terang, sebagai sinyal (keadaan aktif dan sorotan data). Tidak ada warna kedua.

**Proporsi:** 75% netral terang (paper/ivory) · 15% teks dan garis · 10% navy (CTA, judul, section gelap). Section navy maksimal 2 kali di homepage.

### 4.2 Token Warna

| Token | Nilai | Pemakaian |
|---|---|---|
| `--paper` | `#FBFAF7` | Latar utama |
| `--ivory` | `#F4F1EA` | Latar section alternatif, panel |
| `--stone-200` | `#E6E2D9` | Divider lembut |
| `--stone-300` | `#D8D5CE` | Border, garis tabel |
| `--stone-500` | `#8C8880` | Ikon pasif, garis grafik. **Bukan untuk teks kecil** |
| `--stone-700` | `#57544E` | Teks sekunder |
| `--ink` | `#161616` | Teks isi |
| `--navy-950` | `#010F24` | Footer, latar terdalam |
| `--navy-900` | `#031F44` | **Warna logo.** Judul, CTA primer, tautan, section gelap |
| `--navy-700` | `#17396B` | Hover CTA, tautan hover |
| `--navy-500` | `#3D68A8` | Sinyal aktif dan fokus di latar terang, garis grafik yang disorot |
| `--navy-300` | `#9DB7DD` | Sinyal aktif dan sorotan di latar navy |
| `--navy-100` | `#E3EBF6` | Latar hover halus, tanda blok |

`--navy-900` bersumber dari sampel raster (`#031F44`) dan dikonfirmasi ulang dari file vektor. Skala 950–100 adalah turunan dengan menjaga hue.

### 4.3 Aturan Warna
- **Judul** memakai `--navy-900`, **isi** memakai `--ink`. Pembedaan ini tenang tetapi memberi identitas.
- Section gelap memakai `--navy-900` (bukan hitam murni) agar selaras dengan logo. Foto pada section gelap diberi scrim navy.
- Tidak ada gradien sebagai identitas. Gradien hanya untuk scrim foto.
- Tidak ada warna status neon. Error `#B3261E`, sukses `#1E6B45`, selalu disertai ikon dan teks.
- Aksen tidak pernah menjadi latar seluruh halaman.

### 4.4 Kontras (Terukur, WCAG 2.x)

| Pasangan | Rasio | Hasil |
|---|---|---|
| `--navy-900` di atas `--paper` | 15,7:1 | Lolos AAA |
| `--navy-900` di atas `--ivory` | 14,5:1 | Lolos AAA |
| `--ink` di atas `--paper` | 17,3:1 | Lolos AAA |
| `--stone-700` di atas `--paper` | 7,2:1 | Lolos AAA |
| `--stone-700` di atas `--ivory` | 6,7:1 | Lolos AA |
| `--navy-700` di atas `--paper` | 11,0:1 | Lolos AAA |
| `--navy-500` di atas `--paper` | 5,4:1 | Lolos AA (teks dan grafik) |
| `--navy-500` di atas `--ivory` | 5,0:1 | Lolos AA |
| `--paper` di atas `--navy-900` | 15,7:1 | Lolos AAA |
| `--paper` di atas `--navy-700` | 11,0:1 | Lolos AAA |
| `--navy-300` di atas `--navy-900` | 8,0:1 | Lolos AAA |
| `--navy-300` di atas `--navy-950` | 9,4:1 | Lolos AAA |
| `--stone-500` di atas `--paper` | 3,4:1 | Hanya untuk grafik, bukan teks |
| `--navy-500` di atas `--navy-900` | 2,9:1 | **Gagal.** Jangan dipakai di latar navy, gunakan `--navy-300` |

Rasio dihitung dengan rumus kontras WCAG dari nilai heksadesimal di atas. Perlu diulang jika nilai token berubah.

## 5. Tipografi

### 5.1 Pendekatan
Pasangan font terdiri dari **serif editorial** untuk suara merek (headline, angka besar, kutipan) dan **grotesk humanis** untuk kejelasan (UI, isi, label). Ditambah **mono** dalam porsi sangat kecil untuk detail data. Kontras antara serif yang hangat dan grotesk yang presisi menciptakan kesan premium tanpa dekorasi.

**Sengaja dihindari sebagai font utama** karena sudah menjadi wajah default situs template dan produk AI: Inter, Plus Jakarta Sans, Poppins, Montserrat, DM Sans, Manrope, Space Grotesk, Outfit, Roboto, dan Playfair Display. Instrument Serif dan Fraunces juga dihindari karena kini sangat sering muncul pada desain generatif.

### 5.2 Font Terpilih: Opsi A — "Editorial Modern"

| Peran | Font | Catatan |
|---|---|---|
| Display / Headline | **Newsreader** (variable, optical size) | Serif editorial yang hangat dan tajam di ukuran besar. Bobot 300–400, `font-optical-sizing: auto` |
| UI / Body | **Schibsted Grotesk** | Grotesk bergaya media editorial, netral tetapi punya karakter. Bobot 400/500/600 |
| Data / Label | **IBM Plex Mono** (bobot 400, dipakai terbatas) | Nomor section, timestamp, kode brief, caption data |

### 5.3 Opsi B (Tidak Dipilih, Disimpan sebagai Referensi)
Pasangan berlisensi komersial yang tidak dipakai saat ini:

| Pasangan | Kesan |
|---|---|
| Serif display berkarakter tinggi (mis. Canela atau GT Sectra) + grotesk netral berkelas (mis. Neue Montreal atau Söhne) | Butik dan majalah, paling elegan |
| Tiempos Headline + Söhne | Editorial-institusional, mirip publikasi keuangan |

Opsi B dapat ditinjau kembali di masa depan bila identitas tipografi ingin ditingkatkan. Font Opsi A ditayangkan dengan lisensi terbuka menurut Google Fonts. Simpan salinan lisensi (OFL) bersama repositori saat font diunduh dan di-self-host, dan konfirmasi ulang syaratnya pada saat itu.

### 5.4 Peran & Skala

| Token | Font | Ukuran (`clamp`) | Bobot | Line-height | Tracking |
|---|---|---|---|---|---|
| `display` | Serif | `clamp(3.5rem, 2rem + 6vw, 8rem)` | 300 | 1.0 | −0.03em |
| `h1` | Serif | `clamp(2.75rem, 1.6rem + 4vw, 5.5rem)` | 300–400 | 1.05 | −0.025em |
| `h2` | Serif | `clamp(2rem, 1.4rem + 2.4vw, 4rem)` | 400 | 1.1 | −0.02em |
| `h3` | Serif | `clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)` | 400 | 1.2 | −0.01em |
| `body-lg` | Sans | `clamp(1.125rem, 1.05rem + 0.3vw, 1.375rem)` | 400 | 1.55 | 0 |
| `body` | Sans | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` | 400 | 1.65 | 0 |
| `ui` | Sans | 0.9375rem | 500 | 1.3 | 0.005em |
| `label` | Sans | 0.75–0.8125rem, huruf kapital | 500 | 1.3 | **+0.16em** (menggemakan tagline logo) |
| `caption` | Sans | 0.75–0.875rem | 400 | 1.5 | 0 |
| `mono` | Mono | 0.75–0.875rem | 400 | 1.5 | +0.02em |
| `stat` | Serif | `clamp(4rem, 2.5rem + 7vw, 9rem)` | 300 | 0.95 | −0.03em |

### 5.5 Aturan Tipografi
- **Panjang baris:** isi 60–72 karakter, headline maksimal 14–18 kata. Bahasa Indonesia cenderung lebih panjang, jadi uji semua headline dalam ID.
- **Italik serif** dipakai sebagai penekanan, maksimal satu frasa per headline.
- **Huruf kapital** hanya untuk `label` dan nomor section, tidak untuk headline.
- **Numeral:** angka statistik memakai serif besar dengan tabular figures jika tersedia. Nomor section (01, 02, …) memakai mono.
- **Rata teks:** kiri (ragged-right), tidak justify. Gunakan `text-wrap: balance` untuk headline dan `pretty` untuk paragraf.
- **Hierarki:** maksimal 3 tingkat ukuran per layar.
- **Tanpa** gradient text, teks berkedip, atau teks bergerak yang menghambat membaca.
- **Ligatur dan kerning:** aktifkan `font-kerning: normal` dan ligatur standar.

### 5.6 Pemuatan Font (Performa)
- Self-host format WOFF2, subset ke Latin dan Latin Extended.
- Preload maksimal 2 file di atas fold (serif regular dan sans regular).
- `font-display: swap` dengan `size-adjust` dan metrik fallback agar CLS mendekati nol.
- Gunakan font variabel untuk mengurangi jumlah file.
- Fallback: serif ke `Georgia, "Times New Roman", serif`, sans ke `system-ui, -apple-system, "Segoe UI", sans-serif`.

### 5.7 Contoh Komposisi
```text
LABEL     01 — ABOUT                     (mono, kapital, stone-700)
H1        Strategi di balik setiap        (serif 300, −0.025em)
          dampak *publik.*                (italik pada satu kata)
BODY-LG   NEXUS merancang, mengorkestrasi (sans 400, 60–70 ch)
          dan mengukur komunikasi ...
LINK      Jelajahi kapabilitas →          (sans 500, garis bawah tipis)
```

### 5.8 Type Test (Wajib Sebelum Font Dikunci)
1. Uji headline Bahasa Indonesia panjang (mis. "Strategi di Balik Setiap Dampak Publik") pada ukuran 128, 88, 48, dan 28 px.
2. Uji angka besar: 41 · 81 · 11 · 300+ dalam serif.
3. Uji tabel dan form pada 14–16 px.
4. Uji di layar 320 px, layar retina, dan layar Android kelas menengah.
5. Uji di samping logo: wordmark geometris tebal berhuruf kapital harus berdampingan baik dengan serif Newsreader (headline) dan tidak bersaing dengan Schibsted Grotesk (UI). Wordmark berdiri sendiri, jangan meniru bentuk hurufnya pada headline.
6. Uji beban: total ukuran font ≤ 120 KB WOFF2 di atas fold.
7. Tanda gagal: jika terlihat seperti template (semua dalam satu font tanpa kontras peran), ulang.

## 6. Grid & Layout

| Breakpoint | Kolom | Margin | Gap | Lebar maks |
|---|---|---|---|---|
| ≥ 1440 | 12 | 80 px | 24 px | 1280 px konten, 1440 px bleed |
| 1024–1439 | 12 | 48 px | 24 px | fluid |
| 768–1023 | 8 | 32 px | 20 px | fluid |
| 320–767 | 4 | 20–24 px | 16 px | fluid |

**Komposisi khas:**
- **Rail nomor:** kolom 1–2 berisi nomor section (mono) dan label, kolom 4–12 berisi konten. Ini menjadi tanda tangan tata letak NEXUS.
- **Asimetri terkontrol:** headline besar di kiri, teks pendukung sempit di kanan bawah.
- **Garis hairline** horizontal memisahkan section dan baris daftar.
- **Full-bleed** untuk foto besar dan section gelap. Konten tetap di grid.

## 7. Spacing

Basis 4 px. Ritme vertikal antar section (desktop): 160–200 px, tablet 120 px, mobile 80 px.
Token: `4, 8, 12, 16, 24, 32, 48, 64, 96, 120, 160, 200`. Jarak di dalam komponen memakai kelipatan 8.

## 8. Komponen

| Komponen | Spesifikasi |
|---|---|
| **Navigasi** | Sticky, tinggi 72 px (mobile 64). Latar `--paper` dengan blur sangat halus dan hairline bawah setelah scroll. Logo kiri, menu tengah, pengalih bahasa `ID / EN` dan CTA kanan. Mobile: menu fullscreen, tautan serif besar |
| **Tombol primer** | Latar `--navy-900`, teks `--paper`, radius 2 px, tinggi 52 px, padding 28 px, teks sentence case 15 px. Hover: latar `--navy-700` dan panah bergeser 4 px ke kanan |
| **Tombol sekunder** | Border 1px `--navy-900`, tanpa latar. Hover: latar `--navy-900`, teks `--paper` |
| **Tautan teks** | Garis bawah 1px, offset 4 px. Hover: garis bergeser (slide) |
| **Daftar capabilities** | Baris editorial dengan hairline, nomor mono, judul serif besar. Hover/tap/fokus: deskripsi dan visual muncul, nomor tetap terlihat |
| **Kartu case study** | Tanpa bayangan, border hairline. Nomor "CASE 01", judul serif, deskripsi singkat, 4 metrik dalam serif dengan label kecil, "Lihat Case →". Hover: gambar scale 1.00 → 1.03 |
| **Statistik** | Angka serif besar + label kecil + sumber/periode (caption). Bukan kartu |
| **Form** | Field dengan garis bawah 1px (bukan kotak berlatar), label di atas, kolom tunggal. Fokus: garis `--navy-500` 2px dan ring terlihat. Error: teks dan ikon, bukan hanya warna |
| **Tabel** | Hairline horizontal, header label kapital kecil, tanpa zebra. Wajib bisa digulir horizontal di mobile |
| **Badge/tag** | Teks label kecil dengan border hairline, radius 2 px. Dipakai hemat |
| **Timeline distribusi** | Garis horizontal 1px dengan 4 titik slot, porsi (20/25/20/35%) dalam serif, jam dalam mono |
| **Footer** | Latar `--navy-950`, lockup logo versi putih, tautan sans, NEXUS Signal memudar |

**Radius:** 0, 2, 4, 8 px saja. **Bayangan:** tidak dipakai, kecuali menu dropdown (sangat halus, opasitas ≤ 8%).

## 9. Fotografi & Citra

- **Gaya:** dokumenter, editorial, autentik, manusia nyata, kontras tinggi, komposisi disengaja.
- **Subjek:** studio produksi, command center, tim bekerja, kegiatan lapangan (dengan izin tertulis), detail tangan, layar, dan ruang.
- **Perlakuan seragam:** semua foto diproses dengan gaya yang sama (mis. desaturasi lembut dengan kontras tinggi dan butiran halus). Aturan tunggal, diterapkan konsisten.
- **Rasio:** 3:2, 4:5 (potret), 16:9 (hero). Hindari kotak 1:1 di section utama.
- **Caption:** mono kecil dengan kredit dan lokasi.
- **Dilarang:** stok jabat tangan, orang bisnis acak, wajah hasil AI, kantor yang terlalu ditata, ikon 3D, ilustrasi generik.
- **Wajah orang** hanya dengan persetujuan tertulis. Akun kreator individu diperlakukan sesuai kebijakan case study (PRD 12.2).
- **Teknis:** AVIF/WebP, `srcset`, dimensi eksplisit, LQIP halus, lazy load di bawah fold.

## 10. Ikonografi

- Ikon minimal, hanya bila menambah pemahaman. Hindari ikon sebagai dekorasi.
- Gaya: garis 1.5 px, sudut tajam atau radius kecil, tanpa isian, satu ukuran dasar 24 px.
- Preferensi: **nomor dan tipografi menggantikan ikon** (01, 02, 03).
- Panah "→" dan "↗" dari glyph font atau SVG kustom dengan ketebalan setara garis.
- Set ikon kustom kecil (≤ 24 ikon), dibuat di Phase 01, bukan dari library generik.

## 11. Visualisasi Data

- Minimal: garis 1–1.5 px, tanpa grid tebal, tanpa 3D, tanpa donat berwarna-warni.
- Satu warna aksen untuk data yang disorot, sisanya `--stone-500` dan `--ink`.
- Angka langsung pada grafik (direct label), bukan legenda panjang.
- Grafik tidak boleh terlihat seperti dashboard enterprise. Fokus pada satu cerita per grafik.
- Peta sebaran wilayah (P2): titik halus di atas kontur sederhana, tanpa peta interaktif berat.

## 12. Motion

### 12.1 Token

| Token | Nilai |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | 150 ms (hover, fokus) |
| `--dur-base` | 300 ms (transisi komponen) |
| `--dur-slow` | 600 ms (reveal, scale gambar) |
| `--dur-signal` | 900–1400 ms (pergerakan sinyal) |

### 12.2 Pola
- **Reveal:** fade + geser naik 16–24 px, sekali per elemen, tersusun bertahap (stagger 60–80 ms).
- **Garis:** hairline "digambar" dari kiri ke kanan saat masuk viewport.
- **Hover:** underline slide, panah bergeser, gambar scale 1.03.
- **Halaman:** transisi halus antar rute (fade), tanpa animasi berat.
- **Dilarang:** bounce, spin, floating acak, parallax berlebihan, partikel tak berujung, kursor kustom yang mengganggu.
- **Reduced motion:** semua reveal menjadi fade tanpa geser atau langsung tampil. NEXUS Signal menjadi statis.
- **Performa:** hanya animasi `transform` dan `opacity`, tanpa memicu layout. Animasi dijeda saat di luar viewport atau tab tidak aktif.

## 13. NEXUS Signal (Visual Khas)

**Konsep:** jaringan editorial yang menunjukkan bagaimana strategi, audiens, kreator, konten, dan distribusi terhubung menjadi dampak terukur. Terinspirasi diagram peta redaksi dan peta rute, bukan jaringan crypto.

### 13.1 Aturan Bentuk
- Node: lingkaran kecil 4–6 px atau titik silang tipis, warna `--stone-500` (pasif), `--navy-900` (aktif di latar terang), dan `--navy-300` (aktif di latar navy).
- Garis: 1 px, sangat halus, lurus atau lengkung lembut (tanpa garis neon, tanpa glow).
- **Sudut:** jalur utama mengikuti diagonal sekitar 45° yang menggemakan goresan pada huruf X di logo. Satu jalur diagonal utama menjadi "bilah sinyal" khas.
- Komposisi: titik-titik tersebar menyerupai sebaran wilayah Indonesia (abstrak, bukan peta literal) dengan beberapa jalur utama.
- Label mikro dalam mono untuk 3–5 node kunci (mis. "STRATEGY", "CREATOR", "DISTRIBUTION").
- Palet hanya dari token. Tidak ada gradien warna.

### 13.2 Keadaan

| State | Perilaku |
|---|---|
| Idle | Node berdenyut sangat lambat (opasitas 0.6 → 1), maksimal 3 node bergerak bersamaan |
| Hover / fokus | Node terkait dan jalur ke node lain menyala `--navy-500` (latar terang) atau `--navy-300` (latar navy), keterangan mikro muncul |
| Scroll | Sinyal (titik terang kecil) berjalan menyusuri jalur sesuai posisi scroll |
| Case study | Sinyal berubah menjadi garis metrik (reach, konten, wilayah) |
| Footer | Sinyal memudar hingga hilang |

### 13.3 Teknis
Diimplementasikan sebagai SVG. Versi P0: statis dengan denyut berbasis CSS. Versi P1: interaksi hover dan scroll (GSAP, lazy). Tanpa WebGL dan canvas berat. Fallback statis untuk reduced-motion dan perangkat berdaya rendah. Ukuran aset ≤ 40 KB.

## 14. Arah Visual per Section Homepage

| # | Section | Latar | Komposisi | Tipografi dominan |
|---|---|---|---|---|
| 01 | Hero | `--paper` | Headline `display` di kiri, NEXUS Signal di kanan, CTA di bawah, rail nomor | Serif 300, satu kata italik |
| 02 | Trust Metrics | `--paper` | Empat statistik sejajar dengan hairline, tanpa kartu | `stat` serif + label |
| 03 | About | `--ivory` | Rail nomor kiri, headline dan paragraf kanan, foto fasilitas dokumenter | `h2` + `body-lg` |
| 04 | Capabilities | `--paper` | Daftar editorial 6 baris, visual berubah saat hover | `h3` serif besar |
| 05 | NEXUS System | `--navy-900` | Diagram terpadu, node aktif beraksen | Serif putih + mono |
| 06 | Integrity | `--ivory` | Empat pilar dalam 4 kolom dengan hairline vertikal | `h3` + `body` |
| 07 | Selected Work | `--paper` | Satu kasus besar full-bleed, dua kasus kecil | Serif + metrik |
| 08 | Insights | `--paper` | Tata letak majalah: satu artikel besar, dua kecil | Serif judul |
| 09 | Contact + Footer | `--navy-900` lalu `--navy-950` | Headline besar, form garis bawah, footer | `h1` serif putih |

Section navy maksimal dua kali agar ritme tetap tenang. Setiap pemisah section memakai pola `—— 01 LABEL ——` dari tagline logo.

## 15. Responsive

- Mobile dirancang sendiri: satu kolom, `display` turun ke ±56 px, rail nomor berubah menjadi label di atas judul.
- Semua interaksi hover memiliki padanan tap dan keyboard.
- Area sentuh ≥ 44 px, jarak antar tautan ≥ 8 px.
- Gambar hero mobile memakai potongan (art direction) tersendiri.
- Tabel dan diagram lebar digulir di dalam wadahnya, bukan seluruh halaman.

## 16. Aksesibilitas dalam Desain

- Kontras WCAG AA untuk semua teks dan komponen.
- Fokus terlihat: outline 2 px `--navy-500` (di latar navy: `--navy-300`) dengan offset 3 px, tidak dihilangkan.
- Ukuran teks minimum isi 16 px. Caption tidak di bawah 12 px.
- Jangan mengandalkan warna saja untuk status atau informasi.
- Animasi menghormati `prefers-reduced-motion`. Tidak ada kedipan lebih dari 3 kali per detik.
- Urutan heading semantik. Alt text pada semua foto informatif.

## 17. Aturan Anti-AI-Slop

**Dilarang:**
- Gradien ungu, biru-ungu, atau neon. Gradien teks. Mesh gradient sebagai latar.
- Bola 3D melayang, blob acak, partikel, aurora.
- Glassmorphism di mana-mana, kartu bulat besar (radius ≥ 16 px), pill di mana-mana.
- Ikon dalam lingkaran berwarna sebagai penghias fitur, grid kartu 3 kolom dengan ikon.
- Bayangan tebal atau glow.
- Font default template: Inter, Plus Jakarta Sans, Poppins, Montserrat, DM Sans, Manrope, Space Grotesk, Outfit, Roboto, Playfair Display sebagai font utama.
- Kata-kata generik: "revolutionize", "unlock", "transform your business", "next-generation", "seamless", "cutting-edge".
- Foto stok generik dan wajah hasil AI.

**Uji kualitas sebelum setiap desain disetujui:**
1. **Squint test:** dengan mata menyipit, apakah hierarki tetap jelas hanya dari tipografi dan ruang?
2. **Template test:** jika logo diganti logo lain, apakah situs masih terlihat sebagai NEXUS? Jika tidak, terlalu generik.
3. **Subtract test:** buang satu elemen dekoratif. Jika desain tidak rusak, elemen itu memang tidak diperlukan.
4. **Screenshot test:** apakah tangkapan layar hero dapat dikenali sebagai milik NEXUS tanpa logo?
5. **North star:** apakah terasa seperti perusahaan strategi tingkat tinggi yang dapat dipercaya institusi?

## 18. Design Tokens

```css
:root {
  /* Warna */
  --paper: #FBFAF7;
  --ivory: #F4F1EA;
  --stone-200: #E6E2D9;
  --stone-300: #D8D5CE;
  --stone-500: #8C8880;
  --stone-700: #57544E;
  --ink: #161616;
  --navy-950: #010F24;
  --navy-900: #031F44; /* warna logo, konfirmasi dari SVG */
  --navy-700: #17396B;
  --navy-500: #3D68A8;
  --navy-300: #9DB7DD;
  --navy-100: #E3EBF6;

  /* Tipografi */
  --font-serif: "Newsreader", Georgia, "Times New Roman", serif;
  --font-sans: "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, Menlo, monospace;

  /* Spacing (basis 4px) */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-6: 24px;
  --s-8: 32px; --s-12: 48px; --s-16: 64px; --s-24: 96px;
  --s-30: 120px; --s-40: 160px; --s-50: 200px;

  /* Radius */
  --r-0: 0; --r-1: 2px; --r-2: 4px; --r-3: 8px;

  /* Motion */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 150ms; --dur-base: 300ms; --dur-slow: 600ms;
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-base: 0ms; --dur-slow: 0ms; }
}
```

Token diekspor ke konfigurasi Tailwind sebagai satu sumber kebenaran, dan terdokumentasi di Storybook (atau setara) oleh tim engineering internal.

## 19. Deliverables Phase 01 & Checklist

| # | Deliverable | Status |
|---|---|---|
| 01 | Brand positioning visual | Selesai (bagian 1–2) |
| 02 | Analisis logo dan turunan palet | Selesai (3, 4). Menunggu file vektor |
| 03 | Sistem warna | Draft final (4), kontras sudah diukur |
| 04 | Sistem tipografi dan skala | Font dipilih (Opsi A), final setelah type test |
| 05 | Grid dan spacing | Draft (6–7) |
| 06 | Arahan fotografi | Draft (9), perlu sesi foto |
| 07 | Ikonografi | Draft (10), set kustom belum dibuat |
| 08 | Komponen UI | Draft (8) |
| 09 | Motion dan NEXUS Signal | Draft (12–13), prototipe SVG belum dibuat |
| 10 | Design tokens | Draft (18) |
| 11 | Aturan anti-slop | Selesai (17) |
| 12 | Moodboard dan uji visual | Belum |

**Kriteria selesai Phase 01:** designer atau developer lain dapat membaca dokumen ini dan menghasilkan desain yang konsisten tanpa menebak, dan seluruh uji di 5.8 dan 17 lolos.

## 20. Langkah Berikutnya

1. Siapkan **aset logo vektor** (lockup, wordmark, logo mark X) dalam versi navy, putih, dan hitam, lalu konfirmasi warna navy dari file vektor.
2. Putuskan **nama pendek merek** untuk teks situs (K5).
3. Jalankan type test Opsi A dengan teks Bahasa Indonesia, angka statistik, dan di samping logo (5.8).
4. Bangun **style tile** satu halaman (logo, palet navy dan ivory, tipografi, komponen, sampel foto) untuk persetujuan Direksi.
5. Buat prototipe NEXUS Signal (SVG statis, diagonal 45°) dan uji performa.
6. Lanjut ke Phase 02 (UX architecture) dan Phase 03 (UI design).
