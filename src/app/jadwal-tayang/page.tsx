"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { DISTRIBUTION_SLOTS, NEXUS_SYSTEM_STEPS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function JadwalTayangPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="JADWAL TAYANG"
          label="03 / ORKESTRASI PENAYANGAN"
          title="Manajemen 4 slot jam tayang dan strategi platform."
          description="Penyebaran informasi dinas secara terdisiplin mengikuti ritme atensi masyarakat harian, didukung sistem orkestrasi 7 tahap terpadu."
          backgroundImage="/images/jadwal-tayang-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="SINKRONISASI WAKTU INDONESIA BARAT (WIB)"
          metaPills={[
            { label: "Slot Harian", value: "4 Jendela Terjadwal" },
            { label: "Prime Time", value: "19.30 - 21.30 WIB" },
            { label: "Sistem", value: "Orkestrasi 7 Tahap" },
          ]}
        />

        {/* Section 1: 4-Slot Timed Broadcast Management */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Disiplin Distribusi Harian
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Empat Slot Jam Tayang Terjadwal
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Kami menghindari penayangan acak. Setiap konten didistribusikan pada jendela waktu dengan tingkat keterbukaan atensi warga tertinggi sepanjang 24 jam.
              </p>
            </div>

            {/* Visual Distribution Proportion Bar */}
            <div className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase text-[#8C8880] tracking-wider font-semibold">
                  Komposisi Proporsi Alokasi Harian (100%)
                </span>
                <span className="font-mono text-[11px] text-[#031F44]">
                  Waktu Indonesia Barat (WIB)
                </span>
              </div>

              <div className="w-full h-8 bg-[#E6E2D9] rounded-[2px] overflow-hidden flex text-[11px] font-mono text-[#FBFAF7] font-medium">
                <div
                  style={{ width: "20%" }}
                  className="bg-[#031F44] flex items-center justify-center border-r border-[#FBFAF7]/30"
                  title="Slot Pagi (20%)"
                >
                  Pagi 20%
                </div>
                <div
                  style={{ width: "25%" }}
                  className="bg-[#17396B] flex items-center justify-center border-r border-[#FBFAF7]/30"
                  title="Slot Siang (25%)"
                >
                  Siang 25%
                </div>
                <div
                  style={{ width: "20%" }}
                  className="bg-[#3D68A8] flex items-center justify-center border-r border-[#FBFAF7]/30"
                  title="Slot Sore (20%)"
                >
                  Sore 20%
                </div>
                <div
                  style={{ width: "35%" }}
                  className="bg-[#010F24] flex items-center justify-center"
                  title="Slot Malam (35%)"
                >
                  Malam 35%
                </div>
              </div>
            </div>

            {/* 4 Slots Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DISTRIBUTION_SLOTS.map((slot) => (
                <div
                  key={slot.code}
                  className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 rounded-[2px] space-y-4 flex flex-col justify-between hover:border-[#031F44] transition-all shadow-[0_2px_8px_rgba(3,31,68,0.02)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E6E2D9] pb-3">
                      <span className="font-mono text-[11px] text-[#3D68A8] font-semibold">
                        {slot.code}
                      </span>
                      <span className="font-mono text-[12px] font-semibold text-[#031F44] bg-[#F4F1EA] px-2 py-0.5 rounded-[1px]">
                        {slot.portion}
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] text-[#031F44]">
                      {slot.slot}
                    </h3>

                    <div className="font-mono text-[13px] text-[#031F44] font-medium bg-[#F4F1EA]/80 p-2 rounded-[2px]">
                      {slot.hours}
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                        Target Audiens
                      </span>
                      <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                        {slot.targetAudience}
                      </p>
                    </div>

                    <div className="space-y-1 pt-1 border-t border-[#E6E2D9]">
                      <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                        Karakter Materi
                      </span>
                      <p className="font-sans text-[13px] text-[#161616] leading-relaxed">
                        {slot.contentCharacter}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Platform Strategy Matrix: TikTok vs Instagram with Bespoke Canvas Background */}
        <section className="relative py-16 sm:py-24 bg-[#F5F4F0] border-b border-[#D8D5CE] overflow-hidden">
          {/* Full Section Background: Platform Synergy Canvas Lithograph */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/platform-synergy-canvas.jpg"
              alt="Strategi Sinergi Distribusi Platform TikTok dan Instagram PT Nexus Digital Strategy"
              fill
              className="object-cover object-center opacity-85 select-none"
              sizes="100vw"
              priority={false}
            />
            {/* Directional scrim: soft parchment gradient that allows the dual pavilions to be clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7]/90 via-[#FBFAF7]/65 to-[#FBFAF7]/92" />
            <div className="absolute inset-0 bg-[radial-gradient(#031F44_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03]" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#D8D5CE]/80">
              <div className="max-w-[760px] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#031F44]" />
                  <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold">
                    Arsitektur Saluran Distribusi · PT Nexus Digital Strategy
                  </span>
                </div>
                <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                  Strategi Platform: Sinergi TikTok & Instagram
                </h2>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                  Kedua platform memiliki karakter algoritma dan audiens berbeda. NEXUS mengintegrasikan kekuatan discovery TikTok dengan otoritas visual Instagram.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#FBFAF7]/90 backdrop-blur-md border border-[#D8D5CE] rounded-[2px] font-mono text-[11px] text-[#031F44] shrink-0 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Multi-Channel Broadcast Synchronization</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* TikTok Architecture Card (Frosted Glass over Left Pavilion) */}
              <div className="group bg-[#FBFAF7]/90 hover:bg-[#FBFAF7]/98 backdrop-blur-md border border-[#D8D5CE] hover:border-[#031F44] p-6 sm:p-8 rounded-[2px] space-y-6 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,31,68,0.06)] hover:-translate-y-0.5">
                <div className="border-b border-[#E6E2D9] pb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider block font-semibold">
                      Discovery & Penetrasi Algoritma
                    </span>
                    <span className="font-mono text-[10px] text-[#031F44] bg-[#031F44]/5 px-2 py-0.5 rounded-[2px]">
                      CHANNEL-01 / TIKTOK
                    </span>
                  </div>
                  <h3 className="font-serif text-[26px] text-[#031F44]">
                    TikTok untuk Layanan Publik
                  </h3>
                  <p className="font-sans text-[14px] text-[#57544E]">
                    Mesin jangkauan organik tercepat untuk menjangkau warga di luar lingkaran pengikut akun dinas.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Formula Pacing
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      3 detik pertama krusial dengan hook pertanyaan relevan warga. Durasi optimal 15 hingga 45 detik.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Peran Kreator
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      Jaringan kreator Nano dan Micro menggunakan bahasa daerah atau santai untuk memecah kekakuan regulasi.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Kekuatan Utama
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      Distribusi For You Page (FYP) memungkinkan pesan menjangkau ratusan ribu warga lokal secara serentak.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6E2D9] flex items-center justify-between font-mono text-[11px] text-[#8C8880]">
                  <span>Pilar: Viralitas Organik & Edukasi Cepat</span>
                  <span className="text-[#031F44] font-medium">Slot 01, 02, 04</span>
                </div>
              </div>

              {/* Instagram Architecture Card (Frosted Glass over Right Pavilion) */}
              <div className="group bg-[#FBFAF7]/90 hover:bg-[#FBFAF7]/98 backdrop-blur-md border border-[#D8D5CE] hover:border-[#031F44] p-6 sm:p-8 rounded-[2px] space-y-6 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,31,68,0.06)] hover:-translate-y-0.5">
                <div className="border-b border-[#E6E2D9] pb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider block font-semibold">
                      Otoritas Visual & Dokumentasi
                    </span>
                    <span className="font-mono text-[10px] text-[#031F44] bg-[#031F44]/5 px-2 py-0.5 rounded-[2px]">
                      CHANNEL-02 / INSTAGRAM
                    </span>
                  </div>
                  <h3 className="font-serif text-[26px] text-[#031F44]">
                    Instagram untuk Reputasi Institusi
                  </h3>
                  <p className="font-sans text-[14px] text-[#57544E]">
                    Pilar legitimasi visual, edukasi mendalam, dan kanal konfirmasi resmi bagi kalangan profesional dan media.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Format Carousel Analitis
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      Slide 1-10 untuk membedah pasal kebijakan, bagan alur layanan dinas, dan data resmi kementerian.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Instagram Reels Berkualitas 4K
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      Dokumentasi liputan lapangan, pernyataan pimpinan kementerian, dan pesan tokoh publik (KOL).
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                      Kekuatan Utama
                    </span>
                    <p className="font-sans text-[13px] text-[#161616]">
                      Tingkat simpan (save) dan bagikan (share) tinggi di kalangan aparatur negara, akademisi, dan media.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6E2D9] flex items-center justify-between font-mono text-[11px] text-[#8C8880]">
                  <span>Pilar: Otoritas Legitimasi & Referensi Sah</span>
                  <span className="text-[#031F44] font-medium">Slot 02, 03, 04</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The 7-Step NEXUS System */}
        <section className="py-16 sm:py-24 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#9DB7DD] tracking-wider uppercase font-semibold block">
                Metodologi Operasional Terpadu
              </span>
              <h2 className="font-serif text-[28px] sm:text-[38px] text-[#FBFAF7] font-normal leading-tight">
                Sistem 7 Tahap Orkestrasi Kampanye
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#9DB7DD] leading-relaxed">
                Alur kerja presisi dari sintesis kebijakan hukum hingga serah terima fisik berkas BAST terverifikasi.
              </p>
            </div>

            <div className="space-y-6">
              {NEXUS_SYSTEM_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="p-6 sm:p-8 bg-[#010F24]/80 border border-[#3D68A8]/30 rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:border-[#9DB7DD]/60 transition-colors"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-[24px] sm:text-[28px] font-semibold text-[#9DB7DD]">
                      {step.step}
                    </span>
                  </div>

                  <div className="lg:col-span-4 space-y-1">
                    <h3 className="font-serif text-[20px] sm:text-[22px] text-[#FBFAF7]">
                      {step.label}
                    </h3>
                    <p className="font-sans text-[13px] text-[#9DB7DD]">
                      {step.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="font-sans text-[14px] text-[#D8D5CE] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[26px] sm:text-[30px] text-[#031F44]">
                Ingin menyesuaikan jadwal tayang dengan agenda kerja instansi Anda?
              </h2>
              <p className="font-sans text-[14px] text-[#57544E] mt-1">
                Jadwalkan audiensi teknis bersama direktur operasional penayangan kami.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#031F44] text-[#FBFAF7] font-medium text-[14px] rounded-[2px] hover:bg-[#17396B] transition-colors shrink-0"
            >
              <span>Konsultasikan Jadwal Tayang</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
