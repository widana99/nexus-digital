"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  ENGAGEMENT_PACKAGES,
  CREATOR_TIERS,
  PROCUREMENT_TERMS,
  EngagementPackage,
} from "@/lib/data";
import Link from "next/link";

export default function RateCardPage() {
  const [selectedPagu, setSelectedPagu] = useState<number>(500);

  // Find closest package to current slider
  const activePackage: EngagementPackage =
    ENGAGEMENT_PACKAGES.find((pkg) => pkg.paguNumber === selectedPagu) ||
    ENGAGEMENT_PACKAGES[2];

  const presets = [100, 250, 500, 750, 1000];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="RATE CARD 2026"
          label="02 / SKEMA INVESTASI & PENGADAAN"
          title="Katalog pagu anggaran dan matriks kreator terverifikasi."
          description="Transparan, all-inclusive, dan selaras dengan regulasi pengadaan barang dan jasa pemerintah (LKPP/LPSE) serta standar audit BAST."
          backgroundImage="/images/rate-card-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="STANDAR LKPP & AUDIT BAST 2026"
          metaPills={[
            { label: "Pagu Tersedia", value: "Rp 100 Jt - Rp 1 M" },
            { label: "Termin SPK", value: "50% DP / 50% BAST" },
            { label: "Kepatuhan", value: "Akuntabel & Bebas Temuan" },
          ]}
        />

        {/* Section 1: Interactive Budget Simulator */}
        <section className="py-16 sm:py-20 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Simulasi Kebutuhan Program
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Kalkulator Alokasi Pagu Anggaran
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Sesuaikan alokasi rencana anggaran instansi Anda untuk melihat estimasi jangkauan kreator multi-tier, intensitas harian, dan jangkauan impresi publik.
              </p>
            </div>

            {/* Slider Control Container */}
            <div className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-8 shadow-[0_2px_8px_rgba(3,31,68,0.02)]">
              <div className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <label
                    htmlFor="budget-slider"
                    className="font-mono text-[12px] uppercase text-[#8C8880] tracking-wider font-semibold"
                  >
                    Pilih Pagu Anggaran Instansi
                  </label>
                  <span className="font-serif text-[32px] sm:text-[40px] text-[#031F44] font-normal">
                    {activePackage.pagu}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  id="budget-slider"
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={selectedPagu}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    // Snap to closest preset
                    const closest = presets.reduce((prev, curr) =>
                      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
                    );
                    setSelectedPagu(closest);
                  }}
                  className="w-full h-2 bg-[#E6E2D9] rounded-lg appearance-none cursor-pointer accent-[#031F44]"
                />

                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSelectedPagu(preset)}
                      className={`px-3 py-1.5 text-[12px] font-mono rounded-[2px] border transition-all ${
                        selectedPagu === preset
                          ? "bg-[#031F44] text-[#FBFAF7] border-[#031F44] font-medium"
                          : "bg-[#FBFAF7] text-[#57544E] border-[#D8D5CE] hover:border-[#031F44]"
                      }`}
                    >
                      Rp {preset === 1000 ? "1 Milyar" : `${preset} Jt`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Projection Result Card */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-[#E6E2D9]">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                    Paket Rekomendasi
                  </span>
                  <div className="font-serif text-[20px] text-[#031F44] font-medium">
                    {activePackage.name}
                  </div>
                  <div className="font-mono text-[12px] text-[#3D68A8]">
                    {activePackage.code} ({activePackage.category})
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                    Kekuatan Armada Kreator
                  </span>
                  <div className="font-serif text-[24px] text-[#031F44]">
                    {activePackage.totalCreators} Akun Terverifikasi
                  </div>
                  <div className="font-mono text-[12px] text-[#57544E]">
                    {activePackage.creatorBreakdown.kol} KOL • {activePackage.creatorBreakdown.macro} Macro • {activePackage.creatorBreakdown.microNano} Micro/Nano
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                    Intensitas Penayangan
                  </span>
                  <div className="font-serif text-[20px] text-[#031F44]">
                    {activePackage.dailyIntensity}
                  </div>
                  <div className="font-mono text-[12px] text-[#57544E]">
                    4 Slot Waktu Harian
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                    Estimasi Dampak Publik
                  </span>
                  <div className="font-serif text-[20px] text-[#031F44]">
                    {activePackage.estImpressions}
                  </div>
                  <div className="font-mono text-[12px] text-[#3D68A8]">
                    {activePackage.whitelisting}
                  </div>
                </div>
              </div>

              {/* Package Description & CTA */}
              <div className="pt-6 border-t border-[#E6E2D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-sans text-[13px] text-[#57544E] max-w-[700px] leading-relaxed">
                  <strong className="text-[#031F44]">Peruntukan:</strong> {activePackage.recommendedFor}
                </p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#031F44] text-[#FBFAF7] text-[13px] font-medium rounded-[2px] hover:bg-[#17396B] transition-colors shrink-0"
                >
                  <span>Ajukan Penawaran {activePackage.code}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed 5 Packages Matrix */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Katalog Paket Pengadaan
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Lima Skema Kemitraan Komunikasi Strategis
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Tiap skema telah dirancang all-inclusive mencakup kompensasi talent, manajemen produksi, dashboard analitik 24 jam, serta berkas serah terima resmi (BAST).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ENGAGEMENT_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] flex flex-col justify-between space-y-6 hover:border-[#031F44] transition-all hover:shadow-[0_4px_16px_rgba(3,31,68,0.04)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                      <span className="font-mono text-[12px] text-[#3D68A8] font-semibold">
                        {pkg.code}
                      </span>
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider">
                        {pkg.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] sm:text-[24px] text-[#031F44] font-normal leading-snug">
                      {pkg.name}
                    </h3>

                    <div className="py-2">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase block">
                        Pagu Anggaran
                      </span>
                      <span className="font-serif text-[28px] text-[#031F44] font-medium">
                        {pkg.pagu}
                      </span>
                    </div>

                    <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E6E2D9]">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                        Rincian Armada & Layanan:
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.slaFeatures.map((feat, idx) => (
                          <li
                            key={idx}
                            className="font-sans text-[12px] text-[#161616] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6E2D9]">
                    <Link
                      href="/kontak"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium text-[#031F44] bg-[#F4F1EA] hover:bg-[#031F44] hover:text-[#FBFAF7] rounded-[2px] transition-colors"
                    >
                      <span>Pilih Paket {pkg.code}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Creator Tier Matrix */}
        <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Matriks Ekosistem Kreator
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Empat Tingkatan Kreator & Tolok Ukur Keterlibatan
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                NEXUS tidak hanya mengandalkan figur ternama. Kami menyinergikan praktisi ahli dan pegiat lokal untuk menjamin kedalaman substansi regulasi di tingkat masyarakat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CREATOR_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 rounded-[2px] space-y-5"
                >
                  <div className="border-b border-[#E6E2D9] pb-3 space-y-1">
                    <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider block">
                      Tier Level
                    </span>
                    <h3 className="font-serif text-[24px] text-[#031F44]">
                      {tier.tier}
                    </h3>
                    <div className="font-mono text-[12px] text-[#8C8880]">
                      {tier.followers}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Tolok Ukur Engagement Rate
                    </span>
                    <span className="font-mono text-[14px] font-semibold text-[#031F44]">
                      {tier.benchmarkER}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Profil Mitra
                    </span>
                    <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                      {tier.profile}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Peran Strategis
                    </span>
                    <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                      {tier.strategicRole}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E6E2D9]">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Format Publikasi
                    </span>
                    <p className="font-sans text-[12px] text-[#161616] mt-1">
                      {tier.formats}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Ketentuan Pengadaan & Termin BAST */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Kepatuhan Pengadaan
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Ketentuan Layanan & Standar Akuntabilitas PPK
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Seluruh kesepakatan disusun untuk memberikan perlindungan hukum penuh bagi Pejabat Pembuat Komitmen (PPK) dan tim pengadaan dinas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROCUREMENT_TERMS.map((term) => (
                <div
                  key={term.number}
                  className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[14px] font-semibold text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE] px-2.5 py-1 rounded-[2px]">
                      {term.number}
                    </span>
                    <h3 className="font-serif text-[20px] text-[#031F44] font-medium">
                      {term.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[14px] text-[#57544E] leading-relaxed pl-1">
                    {term.specification}
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
                Membutuhkan proposal spesifik atau penyesuaian pagu?
              </h2>
              <p className="font-sans text-[14px] text-[#9DB7DD] mt-1">
                Tim anggaran kami siap menyusun simulasi kebutuhan detail sesuai Kerangka Acuan Kerja (KAK) Anda.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors shrink-0"
            >
              <span>Ajukan Dokumen KAK / TOR</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
