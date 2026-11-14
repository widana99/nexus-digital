"use client";

import React from "react";
import { GPR_PILLARS } from "@/lib/data";

export default function IntegritySection() {
  return (
    <section
      id="integritas"
      className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#D8D5CE]"
      aria-label="Pilar Integritas dan Kepatuhan GPR"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>06 / TATA KELOLA & PROTOKOL GPR</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em]">
              Dampak tanpa mengorbankan integritas.
            </h2>
          </div>
          <p className="font-sans text-[14px] text-[#57544E] max-w-[440px] leading-relaxed">
            Empat pilar kepatuhan Government Public Relations (GPR) yang mengeliminasi risiko reputasi institusi dan memastikan keabsahan pertanggungjawaban dinas.
          </p>
        </div>

        {/* 4 Pillars Grid with Vertical Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D8D5CE] divide-y md:divide-y-0 md:divide-x divide-[#D8D5CE]">
          {GPR_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="py-8 px-0 md:px-6 lg:px-8 flex flex-col justify-between hover:bg-[#FBFAF7]/70 transition-colors duration-200"
            >
              <div>
                <span className="font-mono text-[13px] font-semibold text-[#031F44] tracking-wider block mb-3">
                  PILAR {pillar.number}
                </span>

                <h3 className="font-serif text-[22px] sm:text-[24px] text-[#031F44] font-normal leading-snug mb-3">
                  {pillar.title}
                </h3>

                <p className="font-sans text-[13px] text-[#57544E] leading-relaxed mb-6 font-medium">
                  {pillar.summary}
                </p>
              </div>

              {/* Specific Protocol Checklist */}
              <ul className="space-y-2 pt-4 border-t border-[#E6E2D9]">
                {pillar.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="font-sans text-[12px] text-[#57544E] flex items-start gap-2 leading-normal"
                  >
                    <span className="text-[#031F44] font-mono text-[11px] shrink-0 mt-[1px]">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
