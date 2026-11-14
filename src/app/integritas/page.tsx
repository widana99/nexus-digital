"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GPR_PILLARS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function IntegritasPage() {
  const screeningLayers = [
    {
      layer: "01",
      title: "Verifikasi Legalitas & Rekam Jejak Hukum",
      summary: "Pemeriksaan latar belakang formal seluruh kreator sebelum penugasan.",
      details: [
        "Verifikasi identitas resmi (KTP, NPWP, dan rekening bank berbadan hukum sah).",
        "Pemeriksaan rekam jejak perkara hukum perdata maupun pidana.",
        "Audit riwayat unggahan media sosial selama 24 bulan ke belakang.",
      ],
    },
    {
      layer: "02",
      title: "Audit Konten & Anti-Afiliasi Politik",
      summary: "Penapisan ketat terhadap potensi konflik kepentingan dan konten terlarang.",
      details: [
        "Penyaringan bebas promosi judi online, investasi bodong, dan obat terlarang tanpa toleransi.",
        "Verifikasi netralitas: tidak terdaftar sebagai pengurus partai atau tim sukses pemilu.",
        "Evaluasi adab bertutur, kesopanan komunikasi, dan ketiadaan ujaran kebencian/SARA.",
      ],
    },
    {
      layer: "03",
      title: "Pakta Integritas & Klausul Penggantian",
      summary: "Ikatan komitmen hukum formal yang melindungi instansi dinas.",
      details: [
        "Penandatanganan Pakta Integritas Layanan Publik dan perjanjian kerahasiaan (NDA).",
        "Kewajiban menjaga marwah institusi negara selama masa kontrak kampanye.",
        "Klausul garansi penggantian talent setara bebas biaya jika terjadi force majeure atau pelanggaran etik.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="INTEGRITAS GPR"
          label="04 / TATA KELOLA PEMERINTAHAN"
          title="Protokol Government Public Relations dan perlindungan PPK."
          description="Standar kepatuhan tertinggi untuk menjaga marwah institusi negara melalui netralitas non-partisan, penyaringan reputasi ketat, dan auditabilitas BAST."
          backgroundImage="/images/integritas-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="KEPATUHAN GPR & BEBAS TEMUAN AUDIT"
          metaPills={[
            { label: "Skrining", value: "3 Lapis Terverifikasi" },
            { label: "Netralitas", value: "100% Non-Partisan" },
            { label: "Akuntabilitas", value: "Standar Audit BPK" },
          ]}
        />

        {/* Section 1: 4 Pillars of GPR */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Pilar Tata Kelola
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Empat Pilar Government Public Relations
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Komunikasi publik kementerian dan dinas memiliki tanggung jawab moral terhadap warga. NEXUS memastikan setiap pesan disampaikan dengan kehormatan dan fakta sah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GPR_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#D8D5CE] pb-3">
                    <span className="font-mono text-[14px] font-semibold text-[#031F44]">
                      PILAR {pillar.number}
                    </span>
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider">
                      Standar Kepatuhan
                    </span>
                  </div>

                  <h3 className="font-serif text-[24px] text-[#031F44]">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E6E2D9]">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Spesifikasi Protokol:
                    </span>
                    <ul className="space-y-1.5">
                      {pillar.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="font-sans text-[13px] text-[#161616] flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: 3-Layer Screening System with Bespoke Canvas Tapestry */}
        <section className="relative py-16 sm:py-24 bg-[#F5F4F0] border-b border-[#D8D5CE] overflow-hidden">
          {/* Full Section Background: 3-Layer Screening Security Chambers Canvas Lithograph */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/screening-layers-canvas.jpg"
              alt="Tiga Lapisan Penyaringan Integritas Kreator Mitra PT Nexus Digital Strategy"
              fill
              className="object-cover object-center opacity-85 select-none"
              sizes="100vw"
              priority={false}
            />
            {/* Directional scrim: soft parchment gradient that allows the 3 security chambers and corridors to be clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7]/90 via-[#FBFAF7]/65 to-[#FBFAF7]/92" />
            <div className="absolute inset-0 bg-[radial-gradient(#031F44_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03]" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#D8D5CE]/80">
              <div className="max-w-[760px] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#031F44]" />
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold">
                    Penapisan Bakat & Kreator · PT Nexus Digital Strategy
                  </span>
                </div>
                <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                  Tiga Lapisan Penyaringan Kreator Mitra
                </h2>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                  Mitigasi risiko reputasi dimulai sebelum kamera menyala. Kami memberlakukan protokol audit menyeluruh untuk memastikan akun yang terlibat tidak mencoreng institusi.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#FBFAF7]/90 backdrop-blur-md border border-[#D8D5CE] rounded-[2px] font-mono text-[11px] text-[#031F44] shrink-0 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Zero-Tolerance Judi Online & Afiliasi Politik</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screeningLayers.map((layer) => {
                const gatewayBadges: Record<string, { code: string; highlight: string }> = {
                  "01": {
                    code: "CHAMBER-01 / LEGAL",
                    highlight: "Audit Jejak Rekam: KTP, NPWP & Sosmed 24 Bulan",
                  },
                  "02": {
                    code: "CHAMBER-02 / NETRAL",
                    highlight: "Penapisan: 100% Bebas Judi & Netralitas ASN/Parpol",
                  },
                  "03": {
                    code: "CHAMBER-03 / PAKTA",
                    highlight: "Perlindungan: Garansi Penggantian Talent Bebas Biaya",
                  },
                };
                const badge = gatewayBadges[layer.layer] || {
                  code: `CHAMBER-${layer.layer}`,
                  highlight: "Kepatuhan Regulasi Penuh",
                };

                return (
                  <div
                    key={layer.layer}
                    className="group bg-[#FBFAF7]/90 hover:bg-[#FBFAF7]/98 backdrop-blur-md border border-[#D8D5CE] hover:border-[#031F44] p-6 sm:p-8 rounded-[2px] space-y-5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,31,68,0.06)] hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-[12px] font-semibold text-[#FBFAF7] bg-[#031F44] px-2.5 py-1 rounded-[1px]">
                            LAPIS {layer.layer}
                          </span>
                          <span className="font-mono text-[10px] text-[#3D68A8] bg-[#031F44]/5 px-2 py-0.5 rounded-[2px] font-medium">
                            {badge.code}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider">
                          Proses Kurasi
                        </span>
                      </div>

                      <h3 className="font-serif text-[20px] sm:text-[22px] text-[#031F44] font-medium leading-snug group-hover:text-[#17396B] transition-colors">
                        {layer.title}
                      </h3>

                      <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                        {layer.summary}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#E6E2D9]">
                        <span className="font-mono text-[10px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                          Langkah Verifikasi:
                        </span>
                        <ul className="space-y-2">
                          {layer.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="font-sans text-[12px] text-[#161616] flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] mt-1.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E6E2D9] font-mono text-[10px] text-[#8C8880]">
                      <span>{badge.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Perlindungan PPK & Standar Audit BAST */}
        <section className="py-16 sm:py-24 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#9DB7DD] tracking-wider uppercase font-semibold block">
                Akuntabilitas Pelaporan Dinas
              </span>
              <h2 className="font-serif text-[28px] sm:text-[38px] text-[#FBFAF7] font-normal leading-tight">
                Standar BAST & Perlindungan Hukum PPK
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#9DB7DD] leading-relaxed">
                Kami memahami kepatuhan terhadap aparat pengawas internal pemerintah (APIP), Inspektorat Jenderal, dan Badan Pemeriksa Keuangan (BPK). Berkas kami siap uji kapan saja.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#010F24]/80 border border-[#3D68A8]/30 rounded-[2px] space-y-3">
                <span className="font-mono text-[12px] text-[#9DB7DD] font-semibold block">
                  01 / Timestamp & Bukti Aktif
                </span>
                <h3 className="font-serif text-[20px] text-[#FBFAF7]">
                  Tautan Permanen Terverifikasi
                </h3>
                <p className="font-sans text-[13px] text-[#D8D5CE] leading-relaxed">
                  Setiap konten disertai tangkapan layar berstempel waktu (timestamp) dan tautan tayang aktif yang diuji berkala untuk mencegah tautan mati saat pemeriksaan.
                </p>
              </div>

              <div className="p-6 bg-[#010F24]/80 border border-[#3D68A8]/30 rounded-[2px] space-y-3">
                <span className="font-mono text-[12px] text-[#9DB7DD] font-semibold block">
                  02 / Master Arsip Resolusi 4K
                </span>
                <h3 className="font-serif text-[20px] text-[#FBFAF7]">
                  Penyimpanan Cadangan Mandiri
                </h3>
                <p className="font-sans text-[13px] text-[#D8D5CE] leading-relaxed">
                  Semua file video, grafis, dan naskah diserahkan dalam bentuk flash drive terenkripsi dan repositori cloud cadangan dengan hak pakai penuh tanpa kedaluwarsa.
                </p>
              </div>

              <div className="p-6 bg-[#010F24]/80 border border-[#3D68A8]/30 rounded-[2px] space-y-3">
                <span className="font-mono text-[12px] text-[#9DB7DD] font-semibold block">
                  03 / Format Resmi Sesuai KAK
                </span>
                <h3 className="font-serif text-[20px] text-[#FBFAF7]">
                  Format BAST Siap Tanda Tangan
                </h3>
                <p className="font-sans text-[13px] text-[#D8D5CE] leading-relaxed">
                  Laporan diselaraskan langsung dengan klausul dalam Kerangka Acuan Kerja (KAK) dan Surat Perintah Kerja (SPK) sehingga proses serah terima berjalan lancar dan akuntabel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[26px] sm:text-[30px] text-[#031F44]">
                Ingin meninjau draf Pakta Integritas dan Dokumen Kepatuhan GPR kami?
              </h2>
              <p className="font-sans text-[14px] text-[#57544E] mt-1">
                Tim legal dan kepatuhan kami siap memberikan paparan langsung kepada Biro Humas atau PPK Anda.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#031F44] text-[#FBFAF7] font-medium text-[14px] rounded-[2px] hover:bg-[#17396B] transition-colors shrink-0"
            >
              <span>Minta Dokumen Kepatuhan GPR</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
