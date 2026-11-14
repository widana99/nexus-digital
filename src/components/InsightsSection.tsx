"use client";

import React from "react";
import { INSIGHTS } from "@/lib/data";

export default function InsightsSection() {
  const [featured, ...restInsights] = INSIGHTS;

  return (
    <section
      id="wawasan"
      className="py-20 sm:py-28 bg-[#FBFAF7] border-b border-[#D8D5CE]"
      aria-label="Wawasan Strategis dan Artikel Analisis"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#031F44]" />
          <span>08 / ANALISIS & INTELIJEN KEBIJAKAN</span>
          <span className="w-8 h-[1px] bg-[#D8D5CE]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-[36px] sm:text-[46px] font-normal text-[#031F44] tracking-[-0.02em]">
              Wawasan komunikasi publik.
            </h2>
          </div>
          <p className="font-sans text-[14px] text-[#57544E] max-w-[380px] leading-relaxed">
            Artikel pemikiran strategis dari tim intelijen NEXUS mengenai dinamika media sosial, audit digital, dan tata kelola informasi publik.
          </p>
        </div>

        {/* Magazine Layout: 1 Large Left, 2 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Featured Article */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#F4F1EA]/50 border border-[#D8D5CE] rounded-[2px] space-y-4 hover:border-[#031F44] transition-colors duration-200 group">
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#8C8880]">
              <span className="text-[#031F44] font-medium uppercase tracking-wider">
                {featured.category}
              </span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>

            <h3 className="font-serif text-[28px] sm:text-[34px] text-[#031F44] font-normal leading-snug group-hover:text-[#17396B] transition-colors">
              {featured.title}
            </h3>

            <p className="font-sans text-[15px] text-[#57544E] leading-[1.7]">
              {featured.excerpt}
            </p>

            <div className="pt-4 border-t border-[#E6E2D9] flex items-center justify-between">
              <span className="font-sans text-[13px] font-medium text-[#031F44] group-hover:underline flex items-center gap-1">
                Baca Selengkapnya
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="font-mono text-[10px] text-[#8C8880] uppercase tracking-wider">
                EDITORIAL BRIEF
              </span>
            </div>
          </div>

          {/* Secondary Stacked Articles */}
          <div className="lg:col-span-5 space-y-6">
            {restInsights.map((insight) => (
              <div
                key={insight.id}
                className="p-6 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] space-y-3 hover:border-[#031F44] transition-colors duration-200 group"
              >
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#8C8880]">
                  <span className="text-[#031F44] font-medium uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>

                <h4 className="font-serif text-[20px] sm:text-[22px] text-[#031F44] font-normal leading-snug group-hover:text-[#17396B] transition-colors">
                  {insight.title}
                </h4>

                <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                  {insight.excerpt}
                </p>

                <div className="pt-2">
                  <span className="font-sans text-[12px] font-medium text-[#031F44] group-hover:underline inline-flex items-center gap-1">
                    Baca Analisis →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
