import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  breadcrumb: string;
  backgroundImage?: string;
  backgroundOpacity?: string;
  statusBadge?: string;
  metaPills?: { label: string; value: string }[];
  children?: React.ReactNode;
}

export default function PageHeader({
  label,
  title,
  description,
  breadcrumb,
  backgroundImage,
  backgroundOpacity = "opacity-75",
  statusBadge,
  metaPills,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative pt-[110px] sm:pt-[130px] pb-12 sm:pb-16 bg-[#FBFAF7] border-b border-[#D8D5CE] overflow-hidden">
      {/* Full Background Artwork with High Clarity */}
      {backgroundImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className={`object-cover object-center select-none ${backgroundOpacity}`}
            priority
          />
          {/* Asymmetric directional scrim: gentle shielding on left for typography, open clarity on right for visual art */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF7]/92 via-[#FBFAF7]/65 to-[#FBFAF7]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7]/70 via-transparent to-[#FBFAF7]/85" />
          {/* Subtle architectural hairline coordinate grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#031F44_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03]" />
        </div>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 space-y-6">
        {/* Top Breadcrumb & Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#8C8880] tracking-wider uppercase">
            <Link href="/" className="hover:text-[#031F44] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#031F44] font-medium">{breadcrumb}</span>
          </div>

          {statusBadge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBFAF7]/90 backdrop-blur-md border border-[#D8D5CE] rounded-[2px] font-mono text-[10px] text-[#031F44] tracking-wide shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{statusBadge}</span>
            </div>
          )}
        </div>

        {/* Section Label with subtle blur reveal */}
        <ScrollReveal variant="blur-reveal" delay={20} duration={500}>
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#57544E] tracking-[0.18em] uppercase">
            <span className="w-8 h-[1px] bg-[#031F44]" />
            <span>{label}</span>
            <span className="w-8 h-[1px] bg-[#D8D5CE]" />
          </div>
        </ScrollReveal>

        {/* Title & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal variant="blur-reveal" delay={60} duration={650}>
              <h1 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] font-light text-[#031F44] tracking-[-0.025em] leading-[1.08]">
                {title}
              </h1>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4">
            <ScrollReveal variant="blur-reveal" delay={140} duration={700}>
              <div className="bg-[#FBFAF7]/88 hover:bg-[#FBFAF7]/95 backdrop-blur-md border border-[#D8D5CE]/90 p-5 sm:p-6 rounded-[2px] shadow-[0_4px_20px_rgba(3,31,68,0.04)] space-y-3.5 transition-colors">
                <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                  {description}
                </p>

                {metaPills && metaPills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#D8D5CE]/70">
                    {metaPills.map((pill, idx) => (
                      <div
                        key={idx}
                        className="px-2.5 py-1 bg-[#FBFAF7] border border-[#D8D5CE] rounded-[2px] font-mono text-[10px] text-[#57544E]"
                      >
                        <span className="text-[#8C8880] mr-1.5">{pill.label}:</span>
                        <span className="text-[#031F44] font-semibold">{pill.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {children && (
          <ScrollReveal variant="fade-up" delay={200} duration={600}>
            {children}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
