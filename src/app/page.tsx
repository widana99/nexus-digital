"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NexusSignal from "@/components/NexusSignal";
import {
  TRUST_METRICS,
  CAPABILITIES,
  ENGAGEMENT_PACKAGES,
  CASE_STUDY_BRIEF_04,
  INSIGHTS,
} from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState<number>(0);
  const featuredPackages = ENGAGEMENT_PACKAGES.slice(0, 3);

  const facilities = [
    {
      id: "studio-4k",
      number: "01",
      badge: "PRODUKSI KONTEN 4K",
      name: "Studio Produksi Audio-Visual 4K",
      location: "Gedung Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/studio-4k-menara165.jpg",
      description:
        "Fasilitas mandiri berstandar siaran penyiaran dengan kamera sinematik 4K, tata pencahayaan profesional terkalibrasi, ruang akustik terisolasi, dan set modular wawancara pimpinan instansi.",
      specs: [
        "Kamera Sinematik 4K Resolusi Ultra Tinggi",
        "Set Wawancara Pejabat & Podcast Regulasi",
        "Pencahayaan Softbox Grid Modular",
        "Mastering Video Standar Dokumentasi BAST",
      ],
    },
    {
      id: "command-center",
      number: "02",
      badge: "SUPERVISI 24/7",
      name: "Dedicated Command Center & Pengawasan Sentimen",
      location: "Gedung Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/command-center-247.jpg",
      description:
        "Pusat kendali operasional multi-layar yang memantau dinamika percakapan publik, distribusi serentak di 38 provinsi, serta mitigasi cepat terhadap disinformasi dan hoaks.",
      specs: [
        "Video Wall Real-Time Pemetaan 38 Provinsi",
        "Sistem Deteksi Dini Sentimen & Anomali Isu",
        "Tim Analis Komunikasi Jaga 3 Shift 24 Jam",
        "Protokol Eskalasi Darurat 15 Menit",
      ],
    },
    {
      id: "boardroom",
      number: "03",
      badge: "SIDANG STRATEGI",
      name: "Executive Boardroom & Ruang Koordinasi KAK",
      location: "Gedung Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/executive-boardroom.jpg",
      description:
        "Ruang sidang pimpinan institusi dan Pejabat Pembuat Komitmen (PPK) untuk penelaahan draf Kerangka Acuan Kerja (KAK), penyelarasan narasi kementerian, dan penandatanganan kesepakatan.",
      specs: [
        "Kapasitas Sidang Eksekutif Tertutup",
        "Panorama Koridor Bisnis TB Simatupang",
        "Sambungan Komunikasi Aman Berstandar Kedinasan",
        "Fasilitas Telaah Dokumen & Portofolio BAST",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      {/* Sticky Institutional Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            01. HERO SECTION: Fine-Art Canvas Tapestry & Architectural Telemetry
           ========================================================================= */}
        <section
          className="relative pt-28 sm:pt-36 pb-20 sm:pb-32 overflow-hidden border-b border-[#D8D5CE] bg-[#FBFAF7]"
          aria-labelledby="hero-heading"
        >
          {/* Authentic Architectural Linen Canvas Art Background */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/images/nexus-hero-canvas-art.jpg"
              alt="PT Nexus Digital Strategy Architectural Canvas Art"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-right-top opacity-[0.95]"
            />
            {/* Soft gradient veil ensuring perfect readability of text on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF7] via-[#FBFAF7]/92 to-transparent lg:via-[#FBFAF7]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FBFAF7] via-transparent to-transparent opacity-80" />
          </div>

          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Strategic Institutional Headline & Actions */}
              <div className="lg:col-span-8 space-y-8">
                {/* Institutional Badge */}
                <ScrollReveal variant="blur-reveal" delay={20} duration={500}>
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#FBFAF7]/90 backdrop-blur-sm border border-[#D8D5CE] rounded-[2px] shadow-[0_1px_3px_rgba(3,31,68,0.04)]">
                    <span className="w-2 h-2 rounded-full bg-[#031F44] animate-pulse" />
                    <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#031F44]">
                      Mitra Komunikasi Publik Strategis
                    </span>
                    <span className="text-[#8C8880] text-[10px]">•</span>
                    <span className="font-mono text-[11px] text-[#57544E]">
                      Gedung Menara 165 Jakarta
                    </span>
                  </div>
                </ScrollReveal>

                {/* Main Headline */}
                <ScrollReveal variant="blur-reveal" delay={60} duration={650}>
                  <h1
                    id="hero-heading"
                    className="font-serif text-[42px] sm:text-[58px] lg:text-[70px] font-light text-[#031F44] tracking-[-0.025em] leading-[1.06]"
                  >
                    Strategi di Balik Setiap Dampak Publik.
                  </h1>
                </ScrollReveal>

                {/* Lead Paragraph */}
                <ScrollReveal variant="blur-reveal" delay={120} duration={700}>
                  <p className="font-sans text-[16px] sm:text-[18px] lg:text-[20px] text-[#423F3A] leading-[1.65] max-w-[700px]">
                    PT Nexus Digital Strategy merancang arsitektur komunikasi terpadu, orkestrasi kreator multi-tier, dan pembuktian dampak terverifikasi bagi kementerian, BUMN, dan lembaga negara.
                  </p>
                </ScrollReveal>

                {/* Strategic Primary Actions */}
                <ScrollReveal variant="blur-reveal" delay={180} duration={700}>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/kapabilitas"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[#FBFAF7] bg-[#031F44] hover:bg-[#17396B] rounded-[2px] transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#3D68A8] shadow-[0_2px_8px_rgba(3,31,68,0.12)]"
                    >
                      <span>Jelajahi Kapabilitas Layanan</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/rate-card"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[#031F44] bg-[#FBFAF7] hover:bg-[#F4F1EA] border border-[#D8D5CE] hover:border-[#031F44] rounded-[2px] transition-colors duration-150 backdrop-blur-sm"
                    >
                      <span>Katalog Rate Card 2026</span>
                    </Link>

                    <Link
                      href="/kontak"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-[13px] font-mono text-[#57544E] hover:text-[#031F44] transition-colors"
                    >
                      <span>Konsultasi Pengadaan</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Institutional Proof Chips */}
                <ScrollReveal variant="blur-reveal" delay={240} duration={700}>
                  <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-[#57544E] border-t border-[#D8D5CE]/80">
                    <div className="flex items-center gap-2">
                      <span className="text-[#031F44] font-semibold">✓</span>
                      <span>Format BAST Sesuai Audit BPK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#031F44] font-semibold">✓</span>
                      <span>Zero-Tolerance Judi Online & Politik</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#031F44] font-semibold">✓</span>
                      <span>Studio 4K & Command Center 24/7</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Floating Architectural Telemetry Card over the Canvas Art */}
              <div className="lg:col-span-4 flex flex-col justify-end items-end space-y-4">
                <ScrollReveal variant="blur-reveal" delay={140} duration={750}>
                  <div className="w-full max-w-[340px] bg-[#FBFAF7]/95 backdrop-blur-md border border-[#D8D5CE] p-5 rounded-[2px] shadow-[0_8px_24px_rgba(3,31,68,0.06)] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1E5631] animate-ping" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#1E5631] font-semibold">
                          Sistem Siaga Operasional
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#8C8880]">24/7 LIVE</span>
                    </div>

                    <div className="space-y-2.5 font-mono text-[11px]">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[#8C8880]">Markas Komando:</span>
                        <span className="text-[#031F44] font-medium text-right">Menara 165 Lt. 4</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[#8C8880]">Koordinat Hub:</span>
                        <span className="text-[#57544E]">6°17&apos;45&quot;S 106°48&apos;14&quot;E</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[#8C8880]">Distribusi Wilayah:</span>
                        <span className="text-[#031F44] font-medium">38 Provinsi Terhubung</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[#8C8880]">Slot Siar Aktif:</span>
                        <span className="text-[#3D68A8] font-semibold">Slot 03 (16.30 - 18.00 WIB)</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E6E2D9] flex items-center justify-between text-[10px] font-mono text-[#8C8880]">
                      <span>CANVAS LITHOGRAPH NO. 01</span>
                      <span className="text-[#031F44]">TB SIMATUPANG</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            02. TRUST METRICS: 4 Verified Data Points with Hairlines
           ========================================================================= */}
        <section
          className="border-b border-[#D8D5CE] bg-[#FBFAF7]"
          aria-label="Metrik Bukti Dampak Terverifikasi"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#D8D5CE]">
              {TRUST_METRICS.map((metric, idx) => (
                <ScrollReveal
                  key={idx}
                  variant="blur-reveal"
                  delay={idx * 75}
                  duration={600}
                >
                  <div className="py-8 sm:py-10 px-4 sm:px-6 space-y-2 first:pl-0 last:pr-0">
                    <div className="font-serif text-[44px] sm:text-[54px] font-normal text-[#031F44] tracking-tight leading-none">
                      {metric.number}
                    </div>
                    <div className="font-sans text-[14px] font-medium text-[#161616]">
                      {metric.label}
                    </div>
                    <p className="font-sans text-[12px] text-[#57544E] leading-relaxed">
                      {metric.description}
                    </p>
                    <div className="pt-1">
                      <span className="font-mono text-[10px] text-[#8C8880] tracking-wider uppercase">
                        {metric.source}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            03. COMPANY PROFILE & FACILITIES SHOWCASE (WITH AUTHENTIC CORPORATE IMAGERY)
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]"
          aria-labelledby="about-pt-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            {/* Header Text & Identity */}
            <ScrollReveal variant="blur-reveal" delay={40} duration={650}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                    Profil Korporasi & Infrastruktur
                  </span>
                  <h2
                    id="about-pt-heading"
                    className="font-serif text-[30px] sm:text-[40px] text-[#031F44] font-normal leading-tight"
                  >
                    Infrastruktur Produksi & Pusat Supervisi di Gedung Menara 165
                  </h2>
                  <p className="font-sans text-[15px] sm:text-[16px] text-[#57544E] leading-relaxed">
                    PT Nexus Digital Strategy memadukan analisis kebijakan pemerintah dengan fasilitas fisik berstandar penyiaran di kawasan bisnis TB Simatupang Jakarta Selatan. Kami menjamin kecepatan respon, integritas data, dan akuntabilitas audit BAST.
                  </p>
                </div>

                <div className="lg:col-span-5 flex lg:justify-end items-center pt-2">
                  <Link
                    href="/tentang"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#FBFAF7] border border-[#D8D5CE] hover:border-[#031F44] text-[13px] font-mono text-[#031F44] rounded-[2px] transition-colors group"
                  >
                    <span>Pelajari Profil Legalitas & Tata Kelola</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Interactive Facilities Showcase with Real Documentary Imagery */}
            <div className="bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] overflow-hidden shadow-[0_4px_20px_rgba(3,31,68,0.03)]">
              {/* Facility Selector Tabs */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#D8D5CE] divide-y md:divide-y-0 md:divide-x divide-[#D8D5CE] bg-[#F4F1EA]/40">
                {facilities.map((fac, idx) => (
                  <button
                    key={fac.id}
                    type="button"
                    onClick={() => setActiveFacilityIndex(idx)}
                    className={`p-5 text-left transition-all relative ${
                      activeFacilityIndex === idx
                        ? "bg-[#FBFAF7] border-b-2 border-b-[#031F44]"
                        : "hover:bg-[#FBFAF7]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-1.5">
                      <span className="font-mono text-[11px] text-[#3D68A8] font-semibold">
                        FASILITAS {fac.number}
                      </span>
                      <span className="font-mono text-[10px] text-[#8C8880] uppercase">
                        {fac.badge}
                      </span>
                    </div>
                    <div className="font-serif text-[18px] sm:text-[20px] text-[#031F44] font-medium leading-snug">
                      {fac.name}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Facility Presentation */}
              {(() => {
                const currentFac = facilities[activeFacilityIndex];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                    {/* Facility Photograph (Architectural / Documentary) */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden border border-[#D8D5CE] bg-[#010F24]">
                        <Image
                          src={currentFac.image}
                          alt={currentFac.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 640px"
                          priority
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#010F24]/90 via-[#010F24]/50 to-transparent p-4 sm:p-5">
                          <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block">
                            Lokasi Terverifikasi:
                          </span>
                          <span className="font-sans text-[13px] text-[#FBFAF7] font-medium block">
                            {currentFac.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Facility Technical Specifications */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider font-semibold block">
                          Spesifikasi Operasional
                        </span>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-[#031F44] leading-snug">
                          {currentFac.name}
                        </h3>
                        <p className="font-sans text-[14px] text-[#57544E] leading-relaxed pt-1">
                          {currentFac.description}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-[#E6E2D9]">
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                          Kapabilitas Fasilitas:
                        </span>
                        <ul className="space-y-2">
                          {currentFac.specs.map((item, sIdx) => (
                            <li
                              key={sIdx}
                              className="font-sans text-[13px] text-[#161616] flex items-center gap-2.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/kontak"
                          className="inline-flex items-center gap-2 text-[13px] font-mono text-[#031F44] font-medium hover:underline"
                        >
                          <span>Jadwalkan Kunjungan ke Fasilitas Ini</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* =========================================================================
            04. CORE CAPABILITIES TEASER: 6 Pillars in Clean Editorial List
           ========================================================================= */}
        {/* =========================================================================
            04. CORE CAPABILITIES TEASER: 6 Pillars with Architectural Canvas Tapestry
           ========================================================================= */}
        <section
          className="relative py-16 sm:py-24 bg-[#F5F4F0] border-b border-[#D8D5CE] overflow-hidden"
          aria-labelledby="capabilities-heading"
        >
          {/* Full Section Background: Architectural Canvas Lithograph & Isometric Blueprint */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/capabilities-canvas-art.jpg"
              alt="Arsitektur Solusi dan 6 Kapabilitas Inti Komunikasi Publik PT Nexus Digital Strategy"
              fill
              className="object-cover object-center opacity-30 select-none"
              sizes="100vw"
              priority={false}
            />
            {/* Subtle multi-layer parchment gradient scrim for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7]/94 via-[#FBFAF7]/82 to-[#FBFAF7]/96" />
            {/* Fine architectural hairline coordinate grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#031F44_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.035]" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <ScrollReveal variant="blur-reveal" delay={30} duration={650}>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#D8D5CE]/80">
                <div className="max-w-[760px] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#031F44]" />
                    <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold">
                      Arsitektur Solusi · PT Nexus Digital Strategy
                    </span>
                    <span className="font-mono text-[10px] text-[#8C8880] border-l border-[#D8D5CE] pl-2 hidden sm:inline">
                      6 Node Operasional Terintegrasi
                    </span>
                  </div>
                  <h2
                    id="capabilities-heading"
                    className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight"
                  >
                    Enam Kapabilitas Inti Komunikasi Publik
                  </h2>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                    Metodologi holistik yang mencakup seluruh siklus kampanye: mulai dari perumusan narasi regulasi hingga pembuktian berkas audit BAST.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="hidden xl:flex flex-col text-right font-mono text-[11px] text-[#8C8880]">
                    <span className="text-[#031F44] font-medium">Standar BAST & GPR</span>
                    <span>Menara 165 Lt. 4, Jakarta</span>
                  </div>
                  <Link
                    href="/kapabilitas"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#031F44] text-[#FBFAF7] hover:bg-[#17396B] border border-[#031F44] text-[13px] font-mono rounded-[2px] transition-colors shadow-sm"
                  >
                    <span>Lihat 6 Kapabilitas Lengkap</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 6 Capabilities Frosted-Glass Canvas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap, capIdx) => {
                const nodeMap: Record<string, { code: string; label: string }> = {
                  "digital-strategy": { code: "NODE-01 / STRAT", label: "Strategy War Room & Blueprint" },
                  "public-communication": { code: "NODE-02 / CRISIS", label: "Crisis Telemetry Radar & Advisory" },
                  "creator-ecosystem": { code: "NODE-03 / MESH", label: "Archipelago Creator Mesh" },
                  "content-production": { code: "NODE-04 / STUDIO", label: "4K Broadcast Optical Facility" },
                  "campaign-orchestration": { code: "NODE-05 / CLOCK", label: "24-Hour Broadcast Slot Dial" },
                  "intelligence-analytics": { code: "NODE-06 / AUDIT", label: "BAST Telemetry & Audit Ledger" },
                };
                const nodeInfo = nodeMap[cap.id] || { code: `NODE-${cap.number}`, label: "Sistem Terpadu" };

                return (
                  <ScrollReveal
                    key={cap.id}
                    variant="blur-reveal"
                    delay={capIdx * 60}
                    duration={650}
                  >
                    <div className="group relative bg-[#FBFAF7]/92 hover:bg-[#FBFAF7]/98 backdrop-blur-md border border-[#D8D5CE] hover:border-[#031F44] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(3,31,68,0.06)] hover:-translate-y-0.5 h-full">
                      <div className="space-y-4">
                        {/* Node Identification & Scope Pill */}
                        <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                          <div className="flex items-baseline gap-2.5">
                            <span className="font-mono text-[20px] font-semibold text-[#031F44]">
                              {cap.number}
                            </span>
                            <span className="font-mono text-[10px] text-[#3D68A8] bg-[#031F44]/5 px-2 py-0.5 rounded-[2px] tracking-wide font-medium">
                              {nodeInfo.code}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[#8C8880] uppercase tracking-wider">
                            {cap.scope}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3 className="font-serif text-[20px] text-[#031F44] font-normal leading-snug group-hover:text-[#17396B] transition-colors">
                            {cap.title}
                          </h3>
                          <p className="font-sans text-[13px] text-[#57544E] leading-relaxed mt-2">
                            {cap.subtitle}
                          </p>
                        </div>

                        {/* Deliverables List */}
                        <div className="pt-3 border-t border-[#E6E2D9] space-y-1.5">
                          <span className="font-mono text-[10px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                            Deliverables Utama:
                          </span>
                          <ul className="space-y-1">
                            {cap.deliverables.map((del, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 font-sans text-[12px] text-[#161616]">
                                <span className="text-[#3D68A8] font-mono text-[11px] leading-tight select-none">›</span>
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Interactive Action Anchor */}
                      <div className="pt-4 border-t border-[#E6E2D9]/80 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#8C8880] truncate max-w-[160px]">
                          {nodeInfo.label}
                        </span>
                        <Link
                          href={`/kapabilitas#${cap.id}`}
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#031F44] hover:text-[#3D68A8] font-medium transition-colors"
                        >
                          <span>Rincian Kapabilitas</span>
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Bottom Institutional Verification Ribbon */}
            <div className="p-4 sm:p-5 bg-[#FBFAF7]/95 backdrop-blur-md border border-[#D8D5CE] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-[#57544E]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span>
                  Fasilitas In-House Terpadu: Command Center 24/7 & Studio 4K Gedung Menara 165 Lt. 4, Jakarta Selatan.
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#031F44] font-medium">
                <Link href="/tentang#fasilitas" className="hover:underline">
                  Inspeksi Fasilitas →
                </Link>
                <span className="text-[#D8D5CE]">|</span>
                <Link href="/rate-card" className="hover:underline">
                  Katalog Biaya Dinas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            05. RATE CARD & INVESTMENT HIGHLIGHT: 5 Packages & Simulator Teaser
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]"
          aria-labelledby="rate-card-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <ScrollReveal variant="blur-reveal" delay={30} duration={650}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="max-w-[700px] space-y-3">
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                    Transparansi Anggaran
                  </span>
                  <h2
                    id="rate-card-heading"
                    className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight"
                  >
                    Katalog Rate Card 2026 & Standar Pengadaan
                  </h2>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                    Pagu anggaran all-inclusive mulai dari Rp 100 Juta hingga Rp 1 Milyar dengan skema pembayaran bertahap (50% DP pada SPK, 50% pelunasan BAST).
                  </p>
                </div>

                <Link
                  href="/rate-card"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#031F44] text-[#FBFAF7] hover:bg-[#17396B] text-[13px] font-mono rounded-[2px] transition-colors shrink-0"
                >
                  <span>Buka Kalkulator & Simulator Anggaran</span>
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* 3 Featured Packages Teaser */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPackages.map((pkg, pkgIdx) => (
                <ScrollReveal
                  key={pkg.id}
                  variant="blur-reveal"
                  delay={pkgIdx * 75}
                  duration={650}
                >
                  <div className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-7 rounded-[2px] space-y-4 hover:border-[#031F44] transition-colors h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                        <span className="font-mono text-[12px] text-[#3D68A8] font-semibold">
                          {pkg.code}
                        </span>
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase">
                          {pkg.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-[22px] text-[#031F44]">
                        {pkg.name}
                      </h3>

                      <div>
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase block">
                          Pagu Anggaran
                        </span>
                        <span className="font-serif text-[28px] text-[#031F44] font-medium">
                          {pkg.pagu}
                        </span>
                      </div>

                      <div className="space-y-1.5 font-mono text-[12px] text-[#57544E] border-t border-[#E6E2D9] pt-3">
                        <div>{pkg.totalCreators} Akun Kreator Terkoordinasi</div>
                        <div>{pkg.dailyIntensity}</div>
                        <div className="text-[#031F44] font-medium">{pkg.estImpressions}</div>
                      </div>

                      <p className="font-sans text-[13px] text-[#57544E] leading-relaxed pt-1">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/rate-card"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-[12px] font-mono text-[#031F44] bg-[#F4F1EA] hover:bg-[#E6E2D9] rounded-[2px] transition-colors"
                      >
                        <span>Lihat Rincian Paket</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Quick Procurement Guarantees */}
            <ScrollReveal variant="fade-up" delay={100} duration={650}>
              <div className="p-6 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#031F44] font-semibold block">
                    01 / HARGA ALL-INCLUSIVE
                  </span>
                  <p className="font-sans text-[13px] text-[#57544E]">
                    Sudah termasuk kompensasi talent, manajemen produksi, dashboard 24/7, dan berkas BAST.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#031F44] font-semibold block">
                    02 / TERMIN RESMI PEMERINTAH
                  </span>
                  <p className="font-sans text-[13px] text-[#57544E]">
                    Uang Muka (DP) 50% saat SPK/MoU dan 50% Pelunasan setelah penandatanganan BAST sah.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#031F44] font-semibold block">
                    03 / GARANSI PENGGANTIAN
                  </span>
                  <p className="font-sans text-[13px] text-[#57544E]">
                    Jaminan penggantian kreator setara tanpa beban anggaran tambahan bila terjadi force majeure.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            06. INTEGRITY & DISTRIBUTION TEASER
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]"
          aria-labelledby="gpr-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <ScrollReveal variant="blur-reveal" delay={30} duration={650}>
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                    Government Public Relations (GPR)
                  </span>
                  <h2
                    id="gpr-heading"
                    className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight"
                  >
                    Integritas Non-Partisan & Disiplin 4 Slot Tayang
                  </h2>
                  <p className="font-sans text-[15px] text-[#57544E] leading-relaxed">
                    Kami menerapkan kebijakan zero tolerance terhadap judi online, pornografi, dan afiliasi politik praktis. Setiap pesan disebarkan melalui 4 slot jam tayang terjadwal (Pagi 07.00, Siang 12.00, Sore 16.30, Malam 19.30 WIB) guna menjamin atensi prima warga.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/integritas"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#031F44] text-[#FBFAF7] hover:bg-[#17396B] text-[13px] font-medium rounded-[2px] transition-colors"
                    >
                      <span>Pelajari Protokol Integritas</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href="/jadwal-tayang"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4F1EA] hover:bg-[#E6E2D9] text-[#031F44] text-[13px] font-medium border border-[#D8D5CE] rounded-[2px] transition-colors"
                    >
                      <span>Jadwal 4 Slot Tayang</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Visual Pillar Summary Card */}
              <div className="lg:col-span-6">
                <ScrollReveal variant="blur-reveal" delay={120} duration={700}>
                  <div className="bg-[#031F44] text-[#FBFAF7] p-8 sm:p-10 rounded-[2px] space-y-6">
                    <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block font-semibold">
                      Standar Auditibilitas BAST & APIP
                    </span>

                    <div className="space-y-4 font-sans text-[14px] text-[#D8D5CE]">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[#9DB7DD] font-semibold">01</span>
                        <span><strong>Netralitas Absolut:</strong> Bebas konflik kepentingan politik, murni literasi layanan publik.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[#9DB7DD] font-semibold">02</span>
                        <span><strong>Screening 3 Lapisan:</strong> Audit catatan hukum, rekam jejak medsos 24 bulan, dan Pakta Integritas.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[#9DB7DD] font-semibold">03</span>
                        <span><strong>Arsip Permanen 4K:</strong> Seluruh materi diserahkan dengan bukti tayang aktif bertanda waktu (timestamp).</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            07. VERIFIED WORK SPOTLIGHT: Brief 04 Krakatau (WITH CRISIS DESK PHOTOGRAPHY)
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]"
          aria-labelledby="case-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <ScrollReveal variant="blur-reveal" delay={30} duration={650}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="max-w-[700px] space-y-3">
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                    Rekam Jejak Nyata
                  </span>
                  <h2
                    id="case-heading"
                    className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight"
                  >
                    Bukti Kerja: Mitigasi Erupsi Krakatau (Brief 04)
                  </h2>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                    Operasi komunikasi darurat yang mengoordinasikan 41 akun kreator terverifikasi untuk menyalurkan informasi keselamatan warga di 11 wilayah secara serentak.
                  </p>
                </div>

                <Link
                  href="/kasus"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#031F44] text-[#FBFAF7] hover:bg-[#17396B] text-[13px] font-mono rounded-[2px] transition-colors shrink-0"
                >
                  <span>Kaji Studi Kasus Lengkap</span>
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Case Highlight Box with Real Emergency Field Operations Photography */}
            <ScrollReveal variant="fade-up" delay={80} duration={700}>
              <div className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-8 shadow-[0_2px_8px_rgba(3,31,68,0.02)]">
                {/* 4 Verified Metric Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#E6E2D9] pb-8">
                  {CASE_STUDY_BRIEF_04.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-serif text-[32px] sm:text-[40px] text-[#031F44] font-normal">
                        {m.value}
                      </div>
                      <div className="font-mono text-[12px] text-[#57544E]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photo & Operational Narrative Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Photojournalistic Evidence Image */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden border border-[#D8D5CE] bg-[#010F24]">
                      <Image
                        src="/images/brief-04-krakatau-mitigation.jpg"
                        alt="Meja Koordinasi Operasi Tanggap Darurat Mitigasi Krakatau"
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#010F24]/90 via-[#010F24]/60 to-transparent p-4">
                        <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block">
                          Dokumentasi Meja Koordinasi Lapangan:
                        </span>
                        <span className="font-sans text-[12px] text-[#FBFAF7] block">
                          Peta Zona Bahaya Selat Sunda & Log Stempel Waktu (Brief 04 BAST)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Verification Links */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="space-y-2">
                      <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider font-semibold block">
                        Diseminasi Jalur Evakuasi Cepat
                      </span>
                      <h3 className="font-serif text-[22px] sm:text-[24px] text-[#031F44] leading-snug">
                        Penyebaran Informasi Zona Aman Tanpa Menimbulkan Kepanikan Laut
                      </h3>
                      <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                        Jejaring kreator lokal di pesisir Banten dan Lampung membagikan titik evakuasi dan nomor kontak dinas dalam hitungan menit, sekaligus meredam kabar hoaks tsunami palsu dengan rujukan data resmi BMKG dan PVMBG.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E6E2D9] space-y-3">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                        Tautan Bukti Siaran Lapangan:
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {CASE_STUDY_BRIEF_04.videoLinks?.map((vl, idx) => (
                          <a
                            key={idx}
                            href={vl.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F4F1EA] hover:bg-[#031F44] hover:text-[#FBFAF7] border border-[#D8D5CE] text-[12px] font-mono text-[#031F44] rounded-[2px] transition-colors"
                          >
                            <span>Bukti Siar {vl.platform}</span>
                            <span>↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            08. INSIGHTS HIGHLIGHT: Policy Intelligence
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]"
          aria-labelledby="insights-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <ScrollReveal variant="blur-reveal" delay={30} duration={650}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="max-w-[700px] space-y-3">
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                    Publikasi Kebijakan
                  </span>
                  <h2
                    id="insights-heading"
                    className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight"
                  >
                    Wawasan & Intelijen Digital Pemerintah
                  </h2>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                    Kajian berkala dari tim peneliti strategi mengenai dinamika algoritma media sosial dan etika komunikasi negara.
                  </p>
                </div>

                <Link
                  href="/wawasan"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4F1EA] hover:bg-[#E6E2D9] border border-[#D8D5CE] text-[13px] font-mono text-[#031F44] rounded-[2px] transition-colors shrink-0"
                >
                  <span>Baca Semua Artikel</span>
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSIGHTS.map((item, insIdx) => (
                <ScrollReveal
                  key={item.id}
                  variant="blur-reveal"
                  delay={insIdx * 80}
                  duration={650}
                >
                  <article
                    className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 rounded-[2px] flex flex-col justify-between space-y-4 hover:border-[#031F44] transition-colors h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#8C8880]">
                        <span className="text-[#031F44] font-semibold">{item.category}</span>
                        <span>{item.date}</span>
                      </div>

                      <h3 className="font-serif text-[18px] sm:text-[20px] text-[#031F44] font-normal leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[13px] text-[#57544E] leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E6E2D9]">
                      <Link
                        href="/wawasan"
                        className="font-mono text-[12px] text-[#031F44] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Baca Telaah</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            09. EXECUTIVE CTA & VENDOR PACK REQUEST PORTAL
           ========================================================================= */}
        <section
          className="py-16 sm:py-24 bg-[#031F44] text-[#FBFAF7]"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <ScrollReveal variant="blur-reveal" delay={40} duration={700}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block font-semibold">
                    Mulai Kolaborasi Kedinasan
                  </span>
                  <h2
                    id="cta-heading"
                    className="font-serif text-[32px] sm:text-[44px] font-light text-[#FBFAF7] leading-tight"
                  >
                    Siap memperkuat jangkauan dan akuntabilitas komunikasi publik instansi Anda?
                  </h2>
                  <p className="font-sans text-[15px] sm:text-[16px] text-[#9DB7DD] max-w-[680px] leading-relaxed">
                    Ajukan konsultasi Kerangka Acuan Kerja (KAK) dinas atau unduh Vendor Pack 2026 resmi berisi profil entitas hukum, katalog rate card lengkap, dan portofolio BAST.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Link
                    href="/kontak"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors"
                  >
                    <span>Mulai Konsultasi SPK / KAK</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href="/kontak"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#9DB7DD]/40 text-[#FBFAF7] text-[13px] font-mono rounded-[2px] hover:border-[#FBFAF7] transition-colors"
                  >
                    <span>Unduh Vendor Pack PDF</span>
                    <span>↓</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
