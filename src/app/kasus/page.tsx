"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { CASE_STUDY_BRIEF_04 } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function KasusPage() {
  const practiceAreas = [
    {
      code: "SEKTOR 01",
      title: "Mitigasi Krisis & Tanggap Bencana",
      description: "Penyebaran informasi evakuasi, peta zona bahaya, dan klarifikasi kepanikan warga dalam hitungan jam.",
    },
    {
      code: "SEKTOR 02",
      title: "Sosialisasi Regulasi & Kebijakan Baru",
      description: "Penerjemahan pasal undang-undang dan peraturan menteri menjadi panduan aplikatif bagi masyarakat.",
    },
    {
      code: "SEKTOR 03",
      title: "Edukasi Program Bantuan & Perlindungan Sosial",
      description: "Sosialisasi hak penerima manfaat, mekanisme pendaftaran, dan tata cara verifikasi data warga.",
    },
    {
      code: "SEKTOR 04",
      title: "Diseminasi Proyek Strategis Nasional (PSN)",
      description: "Transparansi capaian infrastruktur, dampak ekonomi lokal, dan keterlibatan tenaga kerja nasional.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="STUDI KASUS"
          label="05 / BUKTI KERJA NYATA"
          title="Dokumentasi penugasan strategis dan dampak publik."
          description="Rekam jejak orkestrasi kampanye komunikasi publik nyata dengan bukti tayang terverifikasi, metrik audit BAST, dan tautan publikasi aktif."
          backgroundImage="/images/kasus-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="AUDIT RESMI BAST BRIEF 04 KRAKATAU"
          metaPills={[
            { label: "Operasi", value: "Mitigasi Selat Sunda" },
            { label: "Akun Kreator", value: "41 Talent Terverifikasi" },
            { label: "Kepatuhan", value: "100% Sesuai BAST" },
          ]}
        />

        {/* Featured Case Study: Brief 04 Krakatau */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Penugasan Terverifikasi
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Studi Kasus 01: Tanggap Darurat Mitigasi Erupsi Krakatau
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Operasi komunikasi darurat untuk menyalurkan informasi keselamatan warga, zona aman, dan penyuluhan logistik di 11 wilayah pesisir secara serentak.
              </p>
            </div>

            {/* Case Container */}
            <div className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D5CE] pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[12px] text-[#3D68A8] font-semibold">
                    KODE DOKUMEN: BRIEF 04 / BAST TERBIT
                  </span>
                  <h3 className="font-serif text-[26px] sm:text-[30px] text-[#031F44]">
                    {CASE_STUDY_BRIEF_04.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {CASE_STUDY_BRIEF_04.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="font-mono text-[11px] text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE] px-2.5 py-1 rounded-[1px]"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4 Verified Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {CASE_STUDY_BRIEF_04.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FBFAF7] p-5 rounded-[2px] border border-[#D8D5CE] space-y-1"
                  >
                    <div className="font-serif text-[32px] sm:text-[40px] text-[#031F44] font-normal">
                      {m.value}
                    </div>
                    <div className="font-mono text-[12px] text-[#57544E]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Documentary Operations Photograph */}
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-[2px] overflow-hidden border border-[#D8D5CE] bg-[#010F24]">
                <Image
                  src="/images/brief-04-krakatau-mitigation.jpg"
                  alt="Meja Koordinasi Operasi Tanggap Darurat Komunikasi Mitigasi Krakatau"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#010F24]/90 via-[#010F24]/50 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block">
                      Dokumentasi Operasi Lapangan Resmi:
                    </span>
                    <span className="font-serif text-[16px] sm:text-[18px] text-[#FBFAF7] block">
                      Meja Koordinasi Tanggap Darurat Mitigasi Erupsi Krakatau & Selat Sunda
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#D8D5CE] bg-[#010F24]/80 px-2.5 py-1 rounded-[1px] border border-[#3D68A8]/40 shrink-0">
                    STATUS BAST: DIVERIFIKASI
                  </span>
                </div>
              </div>

              {/* Narrative & Execution Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 font-sans text-[15px] text-[#57544E] leading-relaxed">
                  <h4 className="font-serif text-[20px] text-[#031F44]">
                    Konteks Tantangan & Pendekatan Lapangan
                  </h4>
                  <p>
                    Saat peningkatan aktivitas vulkanik terjadi, arus disinformasi dan kepanikan warga di media sosial meningkat tajam. Informasi peringatan resmi dari instansi teknis membutuhkan amplifikasi cepat tanpa memicu kepanikan massal.
                  </p>
                  <p>
                    NEXUS mengaktifkan 41 akun kreator terkurasi lintas tingkatan: kreator lokal di pesisir Banten dan Lampung bertindak sebagai informan situasi riil di dermaga, sementara kreator edukasi membagikan peta jalur evakuasi dan nomor kontak darurat resmi.
                  </p>
                  <p>
                    Hasilnya, 81 konten edukasi terbit tepat waktu dengan kepatuhan 100% pada jadwal tayang darurat, berhasil meredam kabar palsu terkait tsunami serta memastikan distribusi informasi logistik berjalan tertib.
                  </p>
                </div>

                {/* Live Public Video Proofs Box */}
                <div className="lg:col-span-5 bg-[#FBFAF7] p-6 rounded-[2px] border border-[#D8D5CE] space-y-4">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                    Verifikasi Tautan Bukti Siar Publik:
                  </span>
                  <p className="font-sans text-[13px] text-[#57544E]">
                    Tautan di bawah merupakan rekaman siaran asli yang telah dipublikasikan dan diverifikasi dalam berkas BAST Brief 04:
                  </p>

                  <div className="space-y-3 pt-2">
                    {CASE_STUDY_BRIEF_04.videoLinks?.map((vl, idx) => (
                      <a
                        key={idx}
                        href={vl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 bg-[#F4F1EA]/80 hover:bg-[#031F44] hover:text-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] transition-colors group"
                      >
                        <div className="space-y-0.5">
                          <span className="font-mono text-[11px] uppercase tracking-wider block text-[#3D68A8] group-hover:text-[#9DB7DD]">
                            Platform: {vl.platform}
                          </span>
                          <span className="font-sans text-[13px] font-medium block">
                            {vl.label}
                          </span>
                        </div>
                        <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-3">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>

                  <p className="font-mono text-[11px] text-[#8C8880] pt-2">
                    * Berkas tangkapan layar bertimestamp dan arsip video 4K lengkap tersimpan dalam repositori dinas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Area Layanan & Penugasan Lainnya */}
        <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Cakupan Penugasan
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Pengalaman di Sektor-Sektor Kritis
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                NEXUS beroperasi dengan standar ketat pada isu-isu berkepentingan publik tinggi di mana kesalahan narasi memiliki konsekuensi sosial nyata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practiceAreas.map((area) => (
                <div
                  key={area.code}
                  className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-3 hover:border-[#031F44] transition-colors"
                >
                  <span className="font-mono text-[11px] text-[#3D68A8] font-semibold block">
                    {area.code}
                  </span>
                  <h3 className="font-serif text-[22px] text-[#031F44]">
                    {area.title}
                  </h3>
                  <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] font-light">
                Ingin meninjau portofolio penugasan relevan dengan kementerian Anda?
              </h2>
              <p className="font-sans text-[14px] text-[#9DB7DD] mt-1">
                Kami siap memaparkan studi kasus spesifik dan simulasi penanganan isu di kantor Anda.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors shrink-0"
            >
              <span>Jadwalkan Paparan Portofolio</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
