"use client";

import React from "react";
import { TRUST_METRICS } from "@/lib/data";

export default function TrustMetricsSection() {
  return (
    <section
      id="metrik"
      className="py-16 sm:py-20 bg-[#FBFAF7] border-b border-[#D8D5CE]"
      aria-label="Metrik Akuntabilitas dan Bukti Hasil"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-2">
              <span className="w-6 h-[1px] bg-[#031F44]" />
              <span>02 / DATA TERVERIFIKASI</span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-normal text-[#031F44]">
              Bukti di atas klaim.
            </h2>
          </div>
          <p className="font-mono text-[12px] text-[#8C8880] max-w-[340px]">
            Setiap angka memiliki definisi, periode, dan dokumen Berita Acara Serah Terima (BAST) yang dapat dipertanggungjawabkan.
          </p>
        </div>

        {/* 4 Metrics in Clean Editorial Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D8D5CE] divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CE]">
          {TRUST_METRICS.map((metric, index) => (
            <div
              key={index}
              className="py-8 sm:py-10 px-0 sm:px-6 lg:px-8 flex flex-col justify-between group hover:bg-[#F4F1EA]/60 transition-colors duration-200"
            >
              <div>
                <span className="font-serif text-[56px] sm:text-[68px] lg:text-[76px] font-light leading-none text-[#031F44] tracking-[-0.03em] block mb-3 group-hover:text-[#17396B] transition-colors">
                  {metric.number}
                </span>
                <h3 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#161616] mb-2 leading-snug">
                  {metric.label}
                </h3>
                <p className="font-sans text-[13px] text-[#57544E] leading-relaxed mb-4">
                  {metric.description}
                </p>
              </div>

              {/* Source attribution caption */}
              <div className="pt-3 border-t border-[#E6E2D9] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#8C8880]">
                  Sumber:
                </span>
                <span className="font-mono text-[11px] text-[#031F44] font-medium">
                  {metric.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
