import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { CAPABILITIES } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enam Kapabilitas Inti",
  description:
    "Rancang bangun arsitektur komunikasi publik, supervisi mitigasi krisis, dan audit BAST digital terpadu oleh PT Nexus Digital Strategy.",
};

export default function KapabilitasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="KAPABILITAS"
          label="01 / ARSITEKTUR LAYANAN"
          title="Enam kapabilitas inti komunikasi publik."
          description="Metodologi komprehensif yang dirancang untuk memenuhi standar tata kelola komunikasi kementerian, lembaga negara, dan BUMN."
          backgroundImage="/images/kapabilitas-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="ARSITEKTUR RESMI PT NEXUS DIGITAL STRATEGY"
          metaPills={[
            { label: "Siklus", value: "6 Node Terintegrasi" },
            { label: "Fasilitas", value: "Gedung Menara 165 Lt. 4" },
            { label: "Akuntabilitas", value: "Audit BAST & GPR" },
          ]}
        />

        {/* Detailed Capabilities Grid */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            {CAPABILITIES.map((cap) => {
              const nodeMap: Record<string, { code: string; label: string; facility: string }> = {
                "digital-strategy": {
                  code: "NODE-01 / STRAT",
                  label: "Strategy War Room & Blueprint",
                  facility: "Executive Boardroom Menara 165",
                },
                "public-communication": {
                  code: "NODE-02 / CRISIS",
                  label: "Crisis Telemetry Radar & Advisory",
                  facility: "Command Center 24/7",
                },
                "creator-ecosystem": {
                  code: "NODE-03 / MESH",
                  label: "Archipelago Creator Mesh",
                  facility: "Jejaring Terverifikasi 38 Provinsi",
                },
                "content-production": {
                  code: "NODE-04 / STUDIO",
                  label: "4K Broadcast Optical Facility",
                  facility: "Studio Produksi 4K Menara 165",
                },
                "campaign-orchestration": {
                  code: "NODE-05 / CLOCK",
                  label: "24-Hour Broadcast Slot Dial",
                  facility: "Sistem Terjadwal 4 Slot Tayang",
                },
                "intelligence-analytics": {
                  code: "NODE-06 / AUDIT",
                  label: "BAST Telemetry & Audit Ledger",
                  facility: "Repositori Arsip Timestamp",
                },
              };
              const node = nodeMap[cap.id] || {
                code: `NODE-${cap.number}`,
                label: "Arsitektur Layanan",
                facility: "Menara 165",
              };

              return (
                <div
                  key={cap.id}
                  id={cap.id}
                  className="p-6 sm:p-10 bg-[#F4F1EA]/60 border border-[#D8D5CE] rounded-[2px] space-y-8 scroll-mt-28"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D8D5CE] pb-4">
                    <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
                      <span className="font-mono text-[20px] sm:text-[24px] font-semibold text-[#031F44]">
                        {cap.number}
                      </span>
                      <span className="font-mono text-[11px] text-[#3D68A8] bg-[#031F44]/5 px-2.5 py-1 rounded-[2px] font-medium">
                        {node.code}
                      </span>
                      <h2 className="font-serif text-[28px] sm:text-[34px] text-[#031F44] font-normal">
                        {cap.title}
                      </h2>
                    </div>
                    <span className="font-mono text-[11px] text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE] px-3 py-1 rounded-[2px] uppercase tracking-wider">
                      {cap.scope}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-[#8C8880]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#031F44]" />
                        <span>Fasilitas Pelaksana: {node.facility}</span>
                      </div>
                      <h3 className="font-sans text-[16px] sm:text-[18px] text-[#031F44] font-medium">
                        {cap.subtitle}
                      </h3>
                      <p className="font-sans text-[15px] sm:text-[16px] text-[#57544E] leading-[1.7]">
                        {cap.description}
                      </p>
                    </div>

                    {/* Concrete Deliverables Box */}
                    <div className="lg:col-span-5 bg-[#FBFAF7] p-6 rounded-[2px] border border-[#D8D5CE] space-y-3">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                        Dokumen Output & Hasil Nyata:
                      </span>
                      <ul className="space-y-2">
                        {cap.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="font-sans text-[13px] text-[#161616] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D8D5CE]/60">
                    <div className="flex items-center gap-3 font-mono text-[11px] text-[#8C8880]">
                      <span>Kepatuhan Regulasi & Standar GPR Terjamin</span>
                      <span>•</span>
                      <Link href="/tentang#fasilitas" className="text-[#031F44] hover:underline">
                        Lihat Fasilitas Terkait →
                      </Link>
                    </div>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 text-[13px] font-mono font-medium text-[#031F44] hover:text-[#17396B] transition-colors"
                    >
                      <span>Konsultasikan Ruang Lingkup Ini</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] font-light">
                Perlu kajian strategi untuk program kerja instansi Anda?
              </h2>
              <p className="font-sans text-[14px] text-[#9DB7DD] mt-1">
                Tim analisis NEXUS siap menyusun telaah awal kebutuhan komunikasi kementerian Anda.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors shrink-0"
            >
              <span>Mulai Konsultasi Resmi</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
