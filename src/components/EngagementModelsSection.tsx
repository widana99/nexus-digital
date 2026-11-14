"use client";

import React, { useState } from "react";
import {
  ENGAGEMENT_PACKAGES,
  CREATOR_TIERS,
  PROCUREMENT_TERMS,
  EngagementPackage,
} from "@/lib/data";

export default function EngagementModelsSection() {
  const [selectedPaguIndex, setSelectedPaguIndex] = useState(2); // Default to Paket 03 (Rp 500 jt)
  const [activeTab, setActiveTab] = useState<"simulator" | "packages" | "tiers" | "terms">("simulator");

  const currentPkg = ENGAGEMENT_PACKAGES[selectedPaguIndex];

  return (
    <section
      id="rate-card"
      className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#D8D5CE]"
      aria-label="Model Engagement, Rate Card Resmi, dan Simulator Anggaran"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>05 / MODEL PENGADAAN & RATE CARD 2026</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em] leading-tight">
              Tarif terstandarisasi untuk penyusunan RAB dinas.
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#57544E] mt-3 max-w-[620px] leading-relaxed">
              Struktur alokasi kreator multi-tier, kepatuhan etika penyiaran negara, dan akuntabilitas Berita Acara Serah Terima (BAST) untuk pagu Rp 100 Juta hingga Rp 1 Miliar.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="p-4 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] font-mono text-[11px] text-[#031F44] max-w-[340px]">
            <span className="font-semibold block mb-1">KETENTUAN RESMI:</span>
            Harga bersifat all-inclusive (manajemen talent, kompensasi kreator, review brief, dan tim supervisi 24/7).
          </div>
        </div>

        {/* Navigation Tabs for Engagement Section */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#D8D5CE] pb-3 mb-10 font-mono text-[12px]">
          <button
            type="button"
            onClick={() => setActiveTab("simulator")}
            className={`px-4 py-2 rounded-[2px] transition-colors ${
              activeTab === "simulator"
                ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                : "text-[#57544E] hover:text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE]"
            }`}
          >
            Simulator Pagu Anggaran
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("packages")}
            className={`px-4 py-2 rounded-[2px] transition-colors ${
              activeTab === "packages"
                ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                : "text-[#57544E] hover:text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE]"
            }`}
          >
            Daftar 5 Paket Resmi
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tiers")}
            className={`px-4 py-2 rounded-[2px] transition-colors ${
              activeTab === "tiers"
                ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                : "text-[#57544E] hover:text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE]"
            }`}
          >
            Klasifikasi 4-Tier Kreator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 rounded-[2px] transition-colors ${
              activeTab === "terms"
                ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                : "text-[#57544E] hover:text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE]"
            }`}
          >
            Ketentuan Pengadaan & BAST
          </button>
        </div>

        {/* TAB 1: INTERACTIVE SIMULATOR */}
        {activeTab === "simulator" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Pagu Selector Pills */}
            <div className="bg-[#FBFAF7] p-6 sm:p-8 rounded-[2px] border border-[#D8D5CE] shadow-sm">
              <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block mb-4">
                Pilih Pagu Anggaran Resmi Anda:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {ENGAGEMENT_PACKAGES.map((pkg, idx) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPaguIndex(idx)}
                    className={`p-3 text-center border rounded-[2px] transition-all ${
                      selectedPaguIndex === idx
                        ? "bg-[#031F44] text-[#FBFAF7] border-[#031F44] shadow-sm"
                        : "bg-[#F4F1EA]/60 hover:bg-[#F4F1EA] text-[#161616] border-[#D8D5CE]"
                    }`}
                  >
                    <span className="font-mono text-[10px] block opacity-80 uppercase mb-0.5">
                      {pkg.code}
                    </span>
                    <span className="font-serif text-[16px] sm:text-[17px] font-normal block leading-tight">
                      {pkg.pagu}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FBFAF7] p-6 sm:p-10 rounded-[2px] border border-[#D8D5CE]">
              {/* Left Column: Package Identity & Strategic Alignment */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] text-[#031F44] bg-[#E3EBF6] px-2.5 py-0.5 rounded-[2px] font-medium">
                      MODEL {currentPkg.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[12px] text-[#8C8880]">
                      DURASI: 30 HARI KALENDER
                    </span>
                  </div>
                  <h3 className="font-serif text-[30px] sm:text-[36px] text-[#031F44] font-normal leading-snug">
                    {currentPkg.name}
                  </h3>
                  <p className="font-sans text-[15px] text-[#57544E] mt-3 leading-relaxed">
                    {currentPkg.description}
                  </p>
                </div>

                <div className="p-4 bg-[#F4F1EA] border-l-2 border-[#031F44] rounded-r-[2px] space-y-1">
                  <span className="font-mono text-[10px] text-[#031F44] uppercase tracking-wider font-semibold">
                    Rekomendasi Penerapan Dinas:
                  </span>
                  <p className="font-sans text-[13px] text-[#161616]">
                    {currentPkg.recommendedFor}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[#FBFAF7] bg-[#031F44] hover:bg-[#17396B] rounded-[2px] transition-colors"
                  >
                    <span>Ajukan Konsultasi Pagu {currentPkg.pagu}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Tactical Breakdown & SLA Grid */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-[#E6E2D9] lg:pl-8">
                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                    <span className="font-serif text-[28px] sm:text-[32px] text-[#031F44] block leading-none mb-1">
                      {currentPkg.totalCreators}
                    </span>
                    <span className="font-mono text-[10px] text-[#57544E] uppercase">
                      Total Akun
                    </span>
                  </div>
                  <div className="p-3 bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                    <span className="font-serif text-[24px] sm:text-[28px] text-[#031F44] block leading-none mb-1">
                      {currentPkg.creatorBreakdown.kol}
                    </span>
                    <span className="font-mono text-[10px] text-[#57544E] uppercase">
                      Tokoh / KOL
                    </span>
                  </div>
                  <div className="p-3 bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                    <span className="font-serif text-[24px] sm:text-[28px] text-[#031F44] block leading-none mb-1">
                      {currentPkg.creatorBreakdown.macro}
                    </span>
                    <span className="font-mono text-[10px] text-[#57544E] uppercase">
                      Macro Studio
                    </span>
                  </div>
                </div>

                {/* Intensity & Whitelisting Specs */}
                <div className="space-y-2 border-t border-b border-[#E6E2D9] py-3 text-[13px] font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[#57544E]">Intensitas Penayangan:</span>
                    <span className="font-mono font-medium text-[#161616]">
                      {currentPkg.dailyIntensity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#57544E]">Estimasi Resonansi Impresi:</span>
                    <span className="font-mono font-medium text-[#031F44]">
                      {currentPkg.estImpressions}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#57544E]">Hak Pakai / Whitelisting:</span>
                    <span className="font-mono font-medium text-[#161616]">
                      {currentPkg.whitelisting}
                    </span>
                  </div>
                </div>

                {/* Included Deliverables & SLA */}
                <div>
                  <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block mb-2">
                    Cakupan Layanan Terverifikasi (SLA):
                  </span>
                  <ul className="space-y-1.5">
                    {currentPkg.slaFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="font-sans text-[12px] text-[#57544E] flex items-start gap-2"
                      >
                        <span className="text-[#031F44] font-mono text-[11px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ALL 5 PACKAGES COMPARISON TABLE */}
        {activeTab === "packages" && (
          <div className="overflow-x-auto border border-[#D8D5CE] bg-[#FBFAF7] rounded-[2px] animate-in fade-in duration-200">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-[#D8D5CE] bg-[#F4F1EA] font-mono text-[11px] text-[#031F44] uppercase tracking-wider">
                  <th className="py-4 px-5">Paket & Model</th>
                  <th className="py-4 px-4">Pagu Anggaran</th>
                  <th className="py-4 px-4">Alokasi Kreator</th>
                  <th className="py-4 px-4">Intensitas Harian</th>
                  <th className="py-4 px-4">Whitelisting</th>
                  <th className="py-4 px-5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E2D9] font-sans text-[13px]">
                {ENGAGEMENT_PACKAGES.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-[#F4F1EA]/50 transition-colors">
                    <td className="py-4 px-5">
                      <span className="font-mono text-[10px] text-[#8C8880] block">
                        {pkg.code} • {pkg.category}
                      </span>
                      <strong className="font-serif text-[16px] text-[#031F44]">
                        {pkg.name}
                      </strong>
                    </td>
                    <td className="py-4 px-4 font-mono font-semibold text-[#031F44]">
                      {pkg.pagu}
                    </td>
                    <td className="py-4 px-4">
                      <strong>{pkg.totalCreators} Akun</strong>
                      <span className="block text-[11px] text-[#8C8880] font-mono">
                        {pkg.creatorBreakdown.kol} KOL / {pkg.creatorBreakdown.macro} Macro / {pkg.creatorBreakdown.microNano} Micro-Nano
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-[12px] text-[#57544E]">
                      {pkg.dailyIntensity}
                    </td>
                    <td className="py-4 px-4 text-[12px] text-[#57544E]">
                      {pkg.whitelisting}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <a
                        href="#kontak"
                        className="inline-block px-3 py-1.5 text-[12px] font-mono font-medium text-[#031F44] border border-[#031F44] hover:bg-[#031F44] hover:text-[#FBFAF7] rounded-[2px] transition-colors"
                      >
                        Pilih →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: 4-TIER CREATOR CLASSIFICATION */}
        {activeTab === "tiers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {CREATOR_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className="p-6 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] flex flex-col justify-between space-y-4 hover:border-[#031F44] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3 mb-3">
                    <span className="font-mono text-[13px] font-semibold text-[#031F44]">
                      TIER {tier.tier.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] text-[#8C8880]">
                      ER: {tier.benchmarkER}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-[#57544E] block mb-2">
                    Rentang: {tier.followers}
                  </span>

                  <p className="font-sans text-[13px] text-[#161616] font-medium leading-snug mb-3">
                    {tier.profile}
                  </p>

                  <p className="font-sans text-[12px] text-[#57544E] leading-relaxed mb-4">
                    {tier.strategicRole}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E2D9]">
                  <span className="font-mono text-[10px] text-[#8C8880] uppercase tracking-wider block mb-1">
                    Format Konten Utama:
                  </span>
                  <p className="font-sans text-[12px] text-[#031F44] font-medium">
                    {tier.formats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: PROCUREMENT TERMS & SLA */}
        {activeTab === "terms" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FBFAF7] p-6 sm:p-10 rounded-[2px] border border-[#D8D5CE] animate-in fade-in duration-200">
            {PROCUREMENT_TERMS.map((term) => (
              <div
                key={term.number}
                className="p-5 bg-[#F4F1EA]/60 border border-[#D8D5CE] rounded-[2px] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#031F44] bg-[#FBFAF7] px-2 py-0.5 border border-[#D8D5CE] rounded-[2px]">
                    PASAL {term.number}
                  </span>
                  <h4 className="font-sans text-[14px] font-semibold text-[#161616]">
                    {term.title}
                  </h4>
                </div>
                <p className="font-sans text-[13px] text-[#57544E] leading-relaxed pl-1">
                  {term.specification}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
