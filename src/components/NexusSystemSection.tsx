"use client";

import React, { useState } from "react";
import { NEXUS_SYSTEM_STEPS } from "@/lib/data";

export default function NexusSystemSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="pendekatan"
      className="py-20 sm:py-28 bg-[#031F44] text-[#FBFAF7] border-b border-[#010F24]"
      aria-label="Sistem Terpadu NEXUS"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor di Latar Navy */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#9DB7DD] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#9DB7DD]" />
          <span>05 / DIAGRAM ALUR TERPADU</span>
          <span className="w-8 h-[1px] bg-[rgba(157,183,221,0.3)]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-[38px] sm:text-[48px] font-light text-[#FBFAF7] leading-[1.08] tracking-[-0.02em]">
              Tujuh simpul rekayasa sinyal.
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#9DB7DD] mt-2 max-w-[540px]">
              Alur berkesinambungan yang menjamin tidak ada ruang bagi spekulasi dalam pelaksanaan kampanye institusi.
            </p>
          </div>

          {/* Quick Platform Pillars */}
          <div className="flex gap-4 font-mono text-[11px]">
            <div className="px-3 py-2 border border-[rgba(157,183,221,0.25)] rounded-[2px] bg-[#010F24]/50">
              <span className="text-[#9DB7DD] block text-[9px] uppercase">Kanal Primer</span>
              <span className="text-[#FBFAF7] font-medium">TikTok: Edukasi & Penetrasi</span>
            </div>
            <div className="px-3 py-2 border border-[rgba(157,183,221,0.25)] rounded-[2px] bg-[#010F24]/50">
              <span className="text-[#9DB7DD] block text-[9px] uppercase">Kanal Otoritas</span>
              <span className="text-[#FBFAF7] font-medium">Instagram: Kebijakan & Data</span>
            </div>
          </div>
        </div>

        {/* 7-Step Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[rgba(157,183,221,0.2)] pt-10">
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-6 space-y-2">
            {NEXUS_SYSTEM_STEPS.map((stepItem, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={stepItem.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 text-left transition-all duration-200 rounded-[2px] flex items-center justify-between border ${
                    isSelected
                      ? "bg-[#010F24] border-[#9DB7DD] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      : "border-transparent hover:border-[rgba(157,183,221,0.2)] hover:bg-[#010F24]/30"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-[12px] font-medium px-2 py-0.5 rounded-[2px] ${
                        isSelected
                          ? "bg-[#9DB7DD] text-[#031F44]"
                          : "text-[#9DB7DD] bg-[rgba(157,183,221,0.1)]"
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    <span
                      className={`font-sans text-[15px] sm:text-[16px] transition-colors ${
                        isSelected ? "text-[#FBFAF7] font-medium" : "text-[#D8D5CE]"
                      }`}
                    >
                      {stepItem.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[14px] transition-transform duration-200 ${
                      isSelected ? "text-[#9DB7DD] translate-x-1" : "text-[#8C8880]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Node Deep Dive */}
          <div className="lg:col-span-6 bg-[#010F24] p-8 sm:p-10 rounded-[2px] border border-[rgba(157,183,221,0.25)] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[rgba(157,183,221,0.15)] pb-4 mb-6">
              <span className="font-mono text-[12px] text-[#9DB7DD] uppercase tracking-widest">
                TAHAP {NEXUS_SYSTEM_STEPS[activeStep].step} DARI 07
              </span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#9DB7DD] animate-pulse" />
            </div>

            <h3 className="font-serif text-[26px] sm:text-[32px] text-[#FBFAF7] font-normal mb-3 leading-snug">
              {NEXUS_SYSTEM_STEPS[activeStep].label}
            </h3>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#E3EBF6] leading-[1.7] mb-6">
              {NEXUS_SYSTEM_STEPS[activeStep].detail}
            </p>

            {/* Strategic Rule Quote */}
            <div className="p-4 bg-[#031F44] border-l-2 border-[#9DB7DD] rounded-r-[2px]">
              <div className="font-mono text-[10px] text-[#9DB7DD] uppercase tracking-wider mb-1">
                Prinsip Kepatuhan
              </div>
              <p className="font-sans text-[13px] text-[#D8D5CE] italic">
                {NEXUS_SYSTEM_STEPS[activeStep].summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
