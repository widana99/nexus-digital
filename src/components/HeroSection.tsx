"use client";

import React from "react";
import NexusSignal from "./NexusSignal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-[110px] sm:pt-[130px] pb-16 sm:pb-24 border-b border-[#D8D5CE] overflow-hidden bg-[#FBFAF7]"
      aria-label="Bagian Pengantar NEXUS Digital Strategy"
    >
      {/* Background subtle spatial grid (architectural restraint, non-slop hairline) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D8D5CE 1px, transparent 1px), linear-gradient(to bottom, #D8D5CE 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Signature Rail: Tagline Pattern */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-8">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>01 / REKAYASA SINYAL DIGITAL</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        {/* 2-Column Editorial Grid: Left Headline, Right NEXUS Signal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-serif text-[42px] sm:text-[58px] md:text-[68px] lg:text-[76px] font-light leading-[1.04] tracking-[-0.025em] text-[#031F44]">
              Strategi di balik setiap dampak{" "}
              <span className="italic font-normal text-[#17396B]">publik.</span>
            </h1>

            <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-[#57544E] leading-[1.65] max-w-[620px]">
              PT Nexus Digital Strategy adalah mitra komunikasi strategis yang merancang,
              mengorkestrasi, dan membuktikan kampanye komunikasi publik melalui
              ekosistem kreator multi-tier dan sistem intelijen terpadu.
            </p>

            {/* Strategic Proof Pills (Concrete and Institutional) */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center px-3 py-1 font-mono text-[11px] text-[#031F44] bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                Akuntabilitas Audit BAST
              </span>
              <span className="inline-flex items-center px-3 py-1 font-mono text-[11px] text-[#031F44] bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                Netralitas Non-Partisan
              </span>
              <span className="inline-flex items-center px-3 py-1 font-mono text-[11px] text-[#031F44] bg-[#F4F1EA] border border-[#D8D5CE] rounded-[2px]">
                Manajemen 4 Slot Tayang
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#kapabilitas"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[14px] font-medium text-[#FBFAF7] bg-[#031F44] hover:bg-[#17396B] rounded-[2px] transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#3D68A8] focus-visible:outline-offset-2"
              >
                <span>Jelajahi Kapabilitas</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[14px] font-medium text-[#031F44] bg-transparent border border-[#031F44] hover:bg-[#F4F1EA] rounded-[2px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#3D68A8] focus-visible:outline-offset-2"
              >
                <span>Akses Vendor Pack</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered NEXUS Signal (Dimensional Hero) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[480px] bg-[#FBFAF7] p-4 sm:p-6 rounded-[2px] border border-[#D8D5CE] shadow-[0_2px_12px_rgba(3,31,68,0.04)] relative">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E6E2D9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#031F44]" />
                  <span className="font-mono text-[11px] text-[#031F44] font-medium uppercase tracking-wider">
                    Sistem Orkestrasi NEXUS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#8C8880]">
                  SUDUT 45°
                </span>
              </div>

              {/* Dimensional Signal Component */}
              <NexusSignal theme="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
