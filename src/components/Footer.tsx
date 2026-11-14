"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#010F24] text-[#FBFAF7] pt-16 pb-12 border-t border-[rgba(157,183,221,0.15)] relative overflow-hidden"
      aria-label="Informasi Perusahaan dan Catatan Legal"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 space-y-12">
        {/* Top Tier: Logo & Strategic Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[rgba(157,183,221,0.12)] pb-12">
          {/* Logo & Entity Name */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-[180px] sm:w-[210px] h-[44px]">
                <Image
                  src="/logos/nexus-lockup-white.svg"
                  alt="PT NEXUS DIGITAL STRATEGY"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-sans text-[13px] text-[#9DB7DD] max-w-[360px] leading-relaxed">
              Mitra komunikasi digital strategis yang merancang, mengorkestrasi, dan membuktikan dampak kampanye publik bagi kementerian, BUMN, dan lembaga negara.
            </p>
            <div className="pt-2">
              <Link
                href="/tentang"
                className="font-mono text-[12px] text-[#FBFAF7] hover:text-[#9DB7DD] underline transition-colors"
              >
                Pelajari Profil Perusahaan & Tata Kelola →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
              Struktur Platform
            </span>
            <ul className="space-y-2 text-[13px] font-sans text-[#D8D5CE]">
              <li>
                <Link href="/kapabilitas" className="hover:text-[#FBFAF7] transition-colors">
                  Enam Kapabilitas Inti
                </Link>
              </li>
              <li>
                <Link href="/rate-card" className="hover:text-[#FBFAF7] transition-colors">
                  Rate Card & Simulator 2026
                </Link>
              </li>
              <li>
                <Link href="/jadwal-tayang" className="hover:text-[#FBFAF7] transition-colors">
                  Manajemen 4 Slot Jam Tayang
                </Link>
              </li>
              <li>
                <Link href="/integritas" className="hover:text-[#FBFAF7] transition-colors">
                  Protokol GPR & Akuntabilitas BAST
                </Link>
              </li>
              <li>
                <Link href="/kasus" className="hover:text-[#FBFAF7] transition-colors">
                  Studi Kasus Krakatau (Brief 04)
                </Link>
              </li>
              <li>
                <Link href="/wawasan" className="hover:text-[#FBFAF7] transition-colors">
                  Wawasan Kebijakan Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Entity & Office Address */}
          <div className="md:col-span-4 space-y-3 font-sans text-[13px] text-[#9DB7DD]">
            <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
              Kantor Pusat Operasional
            </span>
            <p className="text-[#D8D5CE] leading-relaxed">
              <strong>PT Nexus Digital Strategy</strong>
              <br />
              Gedung Menara 165 Lantai 4, Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560, DKI Jakarta.
            </p>
            <p className="font-mono text-[11px] text-[#8C8880] pt-1">
              Fasilitas: Studio Produksi 4K • Ruang Supervisi 24/7 • Dedicated Command Center
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#031F44] border border-[#3D68A8]/40 text-[#FBFAF7] font-mono text-[11px] rounded-[2px] hover:border-[#9DB7DD] transition-colors"
              >
                <span>Unduh Vendor Pack PDF 2026</span>
                <span>↓</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Compliance */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8C8880]">
          <div>
            © {currentYear} PT Nexus Digital Strategy. Seluruh hak cipta dilindungi.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/tentang" className="hover:text-[#FBFAF7] transition-colors">
              Profil PT
            </Link>
            <Link href="/integritas" className="hover:text-[#FBFAF7] transition-colors">
              Kepatuhan GPR
            </Link>
            <Link href="/kontak" className="hover:text-[#FBFAF7] transition-colors">
              Kontak & Pengadaan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
