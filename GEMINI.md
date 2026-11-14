# Workspace Master Directives — PT NEXUS DIGITAL STRATEGY

Setiap kali menerima prompt atau instruksi apa pun dalam proyek ini, Antigravity Agent **wajib secara otomatis dan konsisten** menerapkan standar dan skills berikut tanpa perlu diperintahkan ulang:

---

## 1. Anti-AI-Slop & Copywriting Protocol (`antislop`, `no-ai-slop`, `antislop-*`)
- **Dilarang Keras Tanda Em Dash (`—`)**: Jangan gunakan karakter em dash dalam teks apa pun yang ditulis oleh agent. Gunakan koma, titik, titik dua, atau tanda kurung.
- **Dilarang Buzzwords AI Generik**: Haram menggunakan kata-kata hampa seperti *"AI Powered"*, *"Cutting Edge"*, *"Revolutionary"*, *"Seamless"*, *"Next Generation"*, *"Ultimate"*, *"Effortless"*. Tulis copy yang konkret, berbobot, berbasis fakta, dan mencerminkan bahasa institusional tingkat tinggi.
- **Prinsip Bukti di Atas Klaim**: Dilarang mengarang testimoni, profil, foto, rating, statistik, atau metrik (seperti 99.9% uptime, 10K+ users). Jika data riil belum tersedia, gunakan placeholder jujur (`[REAL DATA]` atau *"Segera Hadir"*) atau jangan tampilkan sama sekali.
- **Tanpa Elemen Template AI**:
  - Hindari hero generic dengan blue/purple radial glow, blob mesh gradient, floating cards berlebihan, atau terminal palsu.
  - Hindari Bento Grid generik, tata letak 3 kartu copy-paste, atau footer 4-kolom template tanpa penyesuaian kebutuhan.
  - Ikon tidak boleh berupa bintang, sihir, kilat, atau robot kecuali benar-benar relevan dengan fungsi spesifik.
- **Delivery Gate Mandatori**: Sebelum menyatakan tugas selesai, periksa bahwa semua link/tombol fungsional (bukan dead links), tidak ada layout rusak di mobile, dan kontras memenuhi standar aksesibilitas.

---

## 2. Visual Design & Frontend Craft (`high-end-visual-design`, `ui-craft`, `frontend-ui-engineering`)
- **Rujukan Utama**: Patuhi secara mutlak arsitektur desain di `design.md`.
  - **Karakter**: *Quiet confidence*, editorial berkelas, institusional, minimalis elegan. Bukan SaaS generik, bukan startup playful, bukan cyberpunk.
  - **Tipografi**:
    - Display/Heading: *Newsreader* (editorial serif dengan aksen tinggi).
    - Body/UI: *Schibsted Grotesk* (sans-serif modern netral dan presisi).
    - Monospace/Label: *IBM Plex Mono* (data tabular, koordinat, metrik teknis).
  - **Sistem Warna**:
    - Satu keluarga aksen: Deep Navy (`#031F44`).
    - Latar: Paper (`#FBFBF9`) dan Ivory (`#F5F4F0`).
    - Tidak ada gradien warna-warni, tidak ada glow neon.
  - **Tekstur & Bentuk**:
    - Garis tipis 1px (*hairline*) menggantikan drop shadow tebal dan card floating.
    - Whitespace lapang (*whitespace is luxury*).
- **Standar Frontend**:
  - Mobile-first responsif: Wajib diuji pada breakpoint mobile (375px+). Bebas horizontal scroll, tap target minimal 44px.
  - UI State Lengkap: Setiap komponen data wajib memiliki **Empty State**, **Loading State**, dan **Error State**.
  - Aksesibilitas (WCAG AA): Rasio kontras teks minimal 4.5:1 (normal) dan 3:1 (large text). Navigasi keyboard penuh (`Tab`, `Enter`, `Escape`), focus ring terlihat jelas.
  - Mikro-animasi: Halus, bertujuan fungsional (menjelaskan hierarki atau feedback interaksi), bukan dekorasi berlebihan.

---

## 3. Security, Hardening & Data Protection (`security-and-hardening`)
- **Validasi Input Ketat**: Semua input pengguna dan payload API wajib divalidasi dan disanitasi menggunakan schema validator (misal: Zod) di sisi server sebelum diproses.
- **Pencegahan Kerentanan Web (OWASP Top 10)**:
  - Proteksi penuh terhadap XSS (sanitasi HTML, hindari `dangerouslySetInnerHTML` tanpa sanitasi murni).
  - Proteksi CSRF, SQL Injection, dan SSRF.
  - Konfigurasi HTTP Security Headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).
- **Pengelolaan Kredensial & Secrets**: Jangan pernah mengekspos API keys, secrets database, atau token di file publik atau client-bundle. Selalu gunakan environment variable yang aman.
- **Rate Limiting & Queue**: Terapkan pembatasan laju (rate limiting) pada endpoint publik/inquiry form untuk mencegah spam dan abuse.

---

## 4. Code Quality & Engineering Integrity
- **Full Output Enforcement**: Dilarang menyisakan placeholder kosong `// TODO implement this later` pada fungsi inti yang sedang dikerjakan. Kode harus fungsional dan lengkap.
- **Verifikasi Nyata**: Kode harus diuji, dieksekusi, atau diverifikasi secara logis sebelum diserahkan.
- **Preservasi Dokumentasi**: Jangan menghapus komentar atau dokumentasi kode yang sudah ada tanpa alasan yang jelas.
