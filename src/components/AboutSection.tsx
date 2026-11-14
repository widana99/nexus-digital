"use client";

import React from "react";

export default function AboutSection() {
  const facilityHighlights = [
    {
      code: "F-01",
      title: "Ruang Supervisi Konten 24/7",
      desc: "Pemantauan percakapan publik real-time dan sistem eskalasi krisis sentimen warga secara berkesinambungan tanpa jeda.",
    },
    {
      code: "F-02",
      title: "Studio Produksi Kreatif 4K",
      desc: "Fasilitas in-house perekaman video kebijakan resolusi tinggi, podcast diskursus, dan infografis gerak berstandar penyiaran.",
    },
    {
      code: "F-03",
      title: "Dedicated Command Center",
      desc: "Infrastruktur kendali distribusi terpadu untuk orkestrasi serentak 4 slot jam tayang harian ke seluruh penjuru 38 provinsi.",
    },
  ];

  const operationalPillars = [
    {
      title: "Screening Hukum & Etika Ketat",
      desc: "Setiap akun kreator mitra disaring melalui uji kelayakan tuntas tanpa toleransi atas catatan hukum, tindak pidana, promosi judi online, pornografi, maupun pelanggaran asusila.",
    },
    {
      title: "Kepatuhan Tata Kelola BAST",
      desc: "Setiap sen anggaran negara dipertanggungjawabkan melalui pembuktian Berita Acara Serah Terima (BAST) berstempel waktu permanen yang siap diaudit BPK maupun Inspektorat.",
    },
    {
      title: "Standar Termin Pengadaan Resmi",
      desc: "Mendukung mekanisme pembiayaan pengadaan barang dan jasa pemerintah: Uang Muka (DP) 50% saat SPK/MoU dan Pelunasan 50% setelah serah terima hasil BAST.",
    },
  ];

  return (
    <section
      id="tentang"
      className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#D8D5CE]"
      aria-label="Profil dan Fasilitas PT Nexus Digital Strategy"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-10">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>03 / ENTITAS DIGITAL STRATEGY & TATA KELOLA</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision Statement & Entity Identity */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-[38px] sm:text-[46px] lg:text-[52px] font-light leading-[1.1] text-[#031F44] tracking-[-0.02em]">
              Less noise. <br />
              <span className="italic font-normal">More intelligence.</span>
            </h2>

            <div className="pt-2 pb-4 border-l-2 border-[#031F44] pl-4">
              <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                Di tengah disrupsi algoritma dan kebisingan media sosial, PT Nexus Digital Strategy bertindak sebagai jangkar strategis yang memastikan kebijakan kementerian dan instansi negara diterima publik secara jernih, faktual, dan bermartabat.
              </p>
            </div>

            <div className="p-4 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] space-y-2 text-[13px] font-sans text-[#57544E]">
              <div className="flex items-start gap-2">
                <span className="font-mono text-[#031F44] font-medium">•</span>
                <span>
                  <strong>Badan Hukum Resmi:</strong> PT Nexus Digital Strategy
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-[#031F44] font-medium">•</span>
                <span>
                  <strong>Domisili Operasional:</strong> Gedung Menara 165 Lantai 4, Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-[#031F44] font-medium">•</span>
                <span>
                  <strong>Fokus Industri:</strong> Komunikasi Publik Strategis, Ekosistem Kreator Terverifikasi, dan Kampanye Diseminasi Kebijakan
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Proposition & Facilities */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-sans text-[16px] sm:text-[18px] text-[#161616] leading-[1.7] font-normal">
              Kami menggabungkan kedalaman analisis regulasi dengan kecakapan distribusi digital kontemporer. Melalui integrasi 4-tier kreator (KOL, Macro, Micro, dan Nano), pesan kenegaraan disosialisasikan secara terukur tanpa menghilangkan kehangatan percakapan masyarakat.
            </p>

            {/* 3 Infrastructure Facilities */}
            <div className="space-y-4 pt-2 border-t border-[#D8D5CE]">
              <div className="font-mono text-[11px] text-[#8C8880] tracking-widest uppercase">
                Infrastruktur Produksi & Pemantauan Mandiri
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {facilityHighlights.map((fac) => (
                  <div
                    key={fac.code}
                    className="p-5 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] space-y-2 hover:border-[#031F44] transition-colors"
                  >
                    <span className="font-mono text-[11px] text-[#031F44] font-medium">
                      {fac.code}
                    </span>
                    <h3 className="font-sans text-[14px] font-semibold text-[#161616] leading-tight">
                      {fac.title}
                    </h3>
                    <p className="font-sans text-[12px] text-[#57544E] leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Rigor for Procurement Officers */}
            <div className="pt-2 space-y-3">
              <div className="font-mono text-[11px] text-[#8C8880] tracking-widest uppercase">
                Tata Kelola Pengadaan Khusus PPK & Dinas
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {operationalPillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px] space-y-1.5"
                  >
                    <h4 className="font-sans text-[13px] font-semibold text-[#031F44]">
                      {pil.title}
                    </h4>
                    <p className="font-sans text-[11px] text-[#57544E] leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
