"use client";

import React, { useState } from "react";
import { CASE_STUDY_BRIEF_04 } from "@/lib/data";

export default function SelectedWorkSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="kasus"
      className="py-20 sm:py-28 bg-[#FBFAF7] border-b border-[#D8D5CE]"
      aria-label="Studi Kasus dan Bukti Kinerja"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>08 / STUDI KASUS PILIHAN & BUKTI PENAYANGAN</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em]">
              Setiap kampanye meninggalkan jejak.
            </h2>
          </div>
          <p className="font-sans text-[14px] text-[#57544E] max-w-[420px] leading-relaxed">
            Studi kasus faktual yang membuktikan integrasi antara koordinasi kreator di lapangan dengan kecepatan respons informasi publik darurat.
          </p>
        </div>

        {/* Featured Case Study Container */}
        <div className="border border-[#D8D5CE] bg-[#F4F1EA]/60 rounded-[2px] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D5CE] pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] font-semibold text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE] px-2.5 py-1 rounded-[2px]">
                {CASE_STUDY_BRIEF_04.number}
              </span>
              <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider">
                {CASE_STUDY_BRIEF_04.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {CASE_STUDY_BRIEF_04.platforms.map((plat) => (
                <span
                  key={plat}
                  className="font-mono text-[11px] text-[#57544E] bg-[#FBFAF7] px-2 py-0.5 border border-[#E6E2D9] rounded-[2px]"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-snug">
                {CASE_STUDY_BRIEF_04.title}
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#57544E] leading-[1.7]">
                {CASE_STUDY_BRIEF_04.context}
              </p>
              <p className="font-sans text-[14px] text-[#161616] leading-relaxed pt-2">
                {CASE_STUDY_BRIEF_04.summary}
              </p>

              {/* Verified Field Links From Proposal Rate Card */}
              {CASE_STUDY_BRIEF_04.videoLinks && (
                <div className="pt-4 space-y-2">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                    Sampel Penayangan Lapangan Terverifikasi:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {CASE_STUDY_BRIEF_04.videoLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBFAF7] border border-[#D8D5CE] hover:border-[#031F44] rounded-[2px] font-mono text-[12px] text-[#031F44] transition-colors"
                      >
                        <span>🔗</span>
                        <span>{link.label}</span>
                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Verified Metrics Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {CASE_STUDY_BRIEF_04.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] flex flex-col justify-between"
                >
                  <span className="font-serif text-[32px] sm:text-[40px] font-light text-[#031F44] leading-none mb-1">
                    {m.value}
                  </span>
                  <span className="font-sans text-[12px] text-[#57544E] font-medium leading-snug">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#D8D5CE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="font-mono text-[11px] text-[#8C8880]">
              Dokumen Rujukan: BAST No. 04/SPK-KRAKATAU/IX/2026
            </span>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#031F44] hover:text-[#17396B] font-mono group"
            >
              <span>Pelajari Rincian Strategi Kasus</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010F24]/60 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
        >
          <div className="bg-[#FBFAF7] max-w-[640px] w-full p-6 sm:p-8 rounded-[2px] border border-[#D8D5CE] shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#D8D5CE] pb-3">
              <span className="font-mono text-[11px] text-[#031F44] font-medium">
                DOKUMENTASI SISTEM KASUS 01
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center border border-[#D8D5CE] rounded-[2px] text-[#031F44] hover:bg-[#F4F1EA]"
                aria-label="Tutup jendela rincian kasus"
              >
                ✕
              </button>
            </div>

            <h4
              id="modal-case-title"
              className="font-serif text-[24px] sm:text-[28px] text-[#031F44] font-normal leading-snug"
            >
              Protokol Respons Cepat Krakatau (Brief 04)
            </h4>

            <div className="space-y-4 font-sans text-[14px] text-[#57544E] leading-relaxed">
              <p>
                <strong>Tantangan:</strong> Arus kesimpangsiuran informasi terkait kenaikan level aktivitas vulkanik berpotensi memicu gelombang kepanikan tidak terarah di pesisir barat Banten dan Lampung.
              </p>
              <p>
                <strong>Eksekusi Sistem:</strong> Dalam 3 jam pertama, NEXUS mengaktifkan 41 kreator kredibel lintas tier. Tier Micro dan praktisi lokal bertindak sebagai rujukan panduan evakuasi, sementara KOL menyampaikan himbauan resmi BMKG/BNPB tanpa unsur dramatisasi.
              </p>
              <p>
                <strong>Hasil:</strong> 81 konten terverifikasi ditayangkan tepat waktu di 4 slot harian, meredam lebih dari 90% sentimen hoaks kepanikan, dan terdokumentasi rapi dalam Berita Acara Serah Terima (BAST).
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D5CE] flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 bg-[#031F44] text-[#FBFAF7] text-[13px] font-medium rounded-[2px]"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
