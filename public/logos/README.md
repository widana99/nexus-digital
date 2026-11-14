# Panduan Penempatan Aset Logo — PT Nexus Digital Strategy

Folder ini disiapkan untuk menampung seluruh varian logo resmi sesuai spesifikasi **[design.md (Bagian 3.2)](file:///c:/Users/Lenovo/project/Web%20Project/nexus-digital/design.md)**.

Silakan masukkan file logo Anda ke dalam folder ini dengan penamaan yang disarankan berikut:

---

## 1. Varian yang Dibutuhkan

| Nama File | Format | Deskripsi & Tempat Penggunaan |
|---|---|---|
| `nexus-lockup-navy.svg` | SVG | Lockup lengkap (Wordmark + Garis + Tagline) warna Deep Navy (`#031F44`). Digunakan pada dokumen resmi, profil, atau hero alternatif di atas latar terang (`--paper` / `--ivory`). |
| `nexus-lockup-white.svg` | SVG | Lockup lengkap versi putih murni. Wajib untuk Footer dengan latar gelap `--navy-950`. |
| `nexus-wordmark-navy.svg` | SVG | Wordmark "NEXUS DIGI" saja warna Deep Navy. Digunakan pada bar Navigasi utama (kiri atas) di atas latar `--paper`. |
| `nexus-wordmark-white.svg` | SVG | Wordmark versi putih untuk bar Navigasi ketika berada di atas latar gelap. |
| `nexus-mark-x.svg` | SVG | Logo mark mandiri (simbol huruf X dengan goresan diagonal khas). Digunakan untuk Favicon browser dan foto profil/avatar media sosial. |
| `nexus-og-image.png` | PNG (1200 × 630 px) | Lockup di atas latar ivory untuk kartu pratinjau media sosial (Open Graph & Twitter Card). |
| `nexus-tagline-horizontal.svg` | SVG | Tagline versi horizontal khusus untuk dokumen resmi dan penempatan footer lebar. |

---

## 2. Catatan Kualitas Sesuai Design System
- **Warna Navy**: Pastikan kode warna menggunakan Deep Navy resmi: `#031F44`.
- **Transparansi**: Latar belakang file SVG wajib transparan (bukan latar putih).
- **Vektor Murni**: Pastikan huruf dan garis sudah dikonversi ke path/kurva (*outline strokes*) agar tidak bergantung pada ketersediaan font lokal sistem.
