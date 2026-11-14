"use client";

import React, { useState } from "react";
import { CAPABILITIES, CapabilityItem } from "@/lib/data";

export default function CapabilitiesSection() {
  const [expandedId, setExpandedId] = useState<string>("digital-strategy");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="kapabilitas"
      className="py-20 sm:py-28 bg-[#FBFAF7] border-b border-[#D8D5CE]"
      aria-label="Enam Kapabilitas Inti NEXUS"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>04 / ENAM KAPABILITAS INTI</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em]">
              Orkestrasi terukur, dari regulasi hingga dampak.
            </h2>
          </div>
          <p className="font-sans text-[14px] text-[#57544E] max-w-[420px] leading-relaxed">
            Daftar kapabilitas institusional yang dirancang secara khusus untuk memenuhi standar ketat tata kelola komunikasi kementerian, BUMN, dan lembaga negara.
          </p>
        </div>

        {/* Interactive Editorial Rows (Replacing generic AI card grids) */}
        <div className="border-t border-[#D8D5CE] divide-y divide-[#D8D5CE]">
          {CAPABILITIES.map((cap: CapabilityItem) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div
                key={cap.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? "bg-[#F4F1EA]/70" : "hover:bg-[#F4F1EA]/30"
                }`}
              >
                {/* Row Header (Accessible Button) */}
                <button
                  type="button"
                  onClick={() => toggleExpand(cap.id)}
                  className="w-full py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#3D68A8] focus-visible:outline-offset-[-2px] group"
                  aria-expanded={isExpanded}
                  aria-controls={`capability-panel-${cap.id}`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-[14px] sm:text-[16px] text-[#031F44] font-medium">
                      {cap.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-[22px] sm:text-[28px] md:text-[32px] text-[#031F44] font-normal group-hover:text-[#17396B] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-[13px] sm:text-[14px] text-[#57544E] mt-1 hidden sm:block">
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider hidden lg:inline-block">
                      {cap.scope}
                    </span>
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#D8D5CE] text-[#031F44] transition-transform duration-200 font-mono text-[16px] ${
                        isExpanded ? "rotate-45 bg-[#031F44] text-[#FBFAF7] border-[#031F44]" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Expandable Panel */}
                {isExpanded && (
                  <div
                    id={`capability-panel-${cap.id}`}
                    className="px-4 sm:px-6 pb-8 pt-2 pl-12 sm:pl-20 border-t border-[#E6E2D9] animate-in fade-in duration-200"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
                      {/* Left: Detailed Narrative */}
                      <div className="md:col-span-7">
                        <p className="font-sans text-[15px] sm:text-[16px] text-[#161616] leading-[1.7] mb-4">
                          {cap.description}
                        </p>
                        <a
                          href="#kontak"
                          className="inline-flex items-center gap-2 text-[13px] font-mono text-[#031F44] font-medium hover:underline pt-2"
                        >
                          <span>Konsultasikan kebutuhan spesifik</span>
                          <span>→</span>
                        </a>
                      </div>

                      {/* Right: Concrete Deliverables List */}
                      <div className="md:col-span-5 bg-[#FBFAF7] p-5 rounded-[2px] border border-[#D8D5CE]">
                        <h4 className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider mb-3">
                          Output Dokumen & Deliverable Resmi:
                        </h4>
                        <ul className="space-y-2">
                          {cap.deliverables.map((deliv, idx) => (
                            <li
                              key={idx}
                              className="font-sans text-[13px] text-[#57544E] flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
