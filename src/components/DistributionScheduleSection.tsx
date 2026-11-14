"use client";

import React, { useState } from "react";
import { DISTRIBUTION_SLOTS } from "@/lib/data";

export default function DistributionScheduleSection() {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(3); // Default to Golden Hour malam (35%)
  const currentSlot = DISTRIBUTION_SLOTS[selectedSlotIndex];

  return (
    <section
      id="jadwal-tayang"
      className="py-20 sm:py-28 bg-[#FBFAF7] border-b border-[#D8D5CE]"
      aria-label="Manajemen Empat Slot Jam Tayang Harian"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>06 / MANAJEMEN 4 SLOT JAM TAYANG</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em]">
              Disiplin ritme distribusi, bukan unggah acak.
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#57544E] mt-2 max-w-[580px] leading-relaxed">
              Penetapan jadwal penayangan berpedoman pada ritme sosiologis warga Indonesia untuk memaksimalkan retensi atensi pesan kebijakan.
            </p>
          </div>

          <div className="font-mono text-[12px] text-[#8C8880] border border-[#D8D5CE] p-3 rounded-[2px] bg-[#F4F1EA]">
            Zona Waktu: Waktu Indonesia Barat (WIB) / Disesuaikan Zona Dinas
          </div>
        </div>

        {/* 4-Slot Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {DISTRIBUTION_SLOTS.map((slot, idx) => {
            const isSelected = selectedSlotIndex === idx;
            return (
              <button
                key={slot.code}
                type="button"
                onClick={() => setSelectedSlotIndex(idx)}
                className={`p-5 text-left border rounded-[2px] transition-all relative ${
                  isSelected
                    ? "bg-[#031F44] text-[#FBFAF7] border-[#031F44] shadow-md"
                    : "bg-[#F4F1EA]/60 hover:bg-[#F4F1EA] text-[#161616] border-[#D8D5CE]"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      isSelected ? "text-[#9DB7DD]" : "text-[#8C8880]"
                    }`}
                  >
                    {slot.code}
                  </span>
                  <span
                    className={`font-serif text-[24px] font-light leading-none ${
                      isSelected ? "text-[#FBFAF7]" : "text-[#031F44]"
                    }`}
                  >
                    {slot.portion}
                  </span>
                </div>

                <div
                  className={`font-mono text-[12px] font-medium mb-1 ${
                    isSelected ? "text-[#9DB7DD]" : "text-[#031F44]"
                  }`}
                >
                  {slot.hours}
                </div>

                <div
                  className={`font-sans text-[14px] font-medium leading-snug ${
                    isSelected ? "text-[#FBFAF7]" : "text-[#161616]"
                  }`}
                >
                  {slot.slot}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Slot Deep Dive Card */}
        <div className="bg-[#F4F1EA] p-6 sm:p-10 rounded-[2px] border border-[#D8D5CE] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-r border-[#D8D5CE] pb-4 md:pb-0 md:pr-6">
            <span className="font-mono text-[11px] text-[#031F44] uppercase tracking-wider font-semibold">
              Rincian Alokasi {currentSlot.slot}:
            </span>
            <div className="font-serif text-[42px] font-light text-[#031F44] leading-none">
              {currentSlot.portion}
            </div>
            <p className="font-mono text-[12px] text-[#57544E]">
              Porsi Dari Total Volume Harian
            </p>
            <div className="pt-2">
              <span className="font-mono text-[13px] bg-[#FBFAF7] px-2.5 py-1 border border-[#D8D5CE] rounded-[2px] inline-block font-medium text-[#031F44]">
                {currentSlot.hours}
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block mb-1">
                Fokus Sasaran Audiens:
              </span>
              <p className="font-sans text-[16px] text-[#161616] font-medium">
                {currentSlot.targetAudience}
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block mb-1">
                Karakteristik & Format Materi Tayang:
              </span>
              <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                {currentSlot.contentCharacter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
