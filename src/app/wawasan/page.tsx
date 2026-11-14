"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { INSIGHTS } from "@/lib/data";
import Link from "next/link";

export default function WawasanPage() {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubscribed(true);
    }
  };

  const articleDetails = [
    {
      id: "insight-1",
      keyTakeaways: [
        "Algoritma video vertikal mengutamakan durasi tonton (watch time) di atas jumlah pengikut akun.",
        "Komunikasi negara harus memiliki 'golden hook' di 3 detik awal tanpa merendahkan wibawa otoritas.",
        "Pemanfaatan multi-format: video vertikal untuk jangkauan cepat, carousel untuk arsip kebijakan permanen.",
      ],
    },
    {
      id: "insight-2",
      keyTakeaways: [
        "KOL menghasilkan atensi sesaat, namun praktisi mikro menghasilkan legitimasi substansi.",
        "Kreator tingkat kelurahan (Nano) memiliki tingkat kepercayaan warga 3x lebih tinggi pada isu bantuan sosial.",
        "Sinergi empat tingkatan menutup celah antara pembuat regulasi di pusat dan penerima manfaat di daerah.",
      ],
    },
    {
      id: "insight-3",
      keyTakeaways: [
        "Tangkapan layar statis tidak lagi memadai untuk audit akuntabilitas BPK dan APIP.",
        "Kewajiban pencantuman tautan permanen bertimestamp dan arsip resolusi master 4K.",
        "Penetapan indikator kinerja utama (KPI) berbasis kualitas respon warga, bukan sekadar angka penayangan bot.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="WAWASAN & INTELIJEN"
          label="06 / PUBLIKASI RISET"
          title="Analisis strategis komunikasi publik dan dinamika digital."
          description="Kajian thought leadership berkala mengenai arsitektur narasi kebijakan, etika Government Public Relations, dan akuntabilitas belanja media negara."
        />

        {/* Section 1: In-depth Editorial Articles */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Publikasi Terpilih
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Kajian Kebijakan & Strategi Komunikasi
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Ditulis oleh tim peneliti dan pengarah strategi NEXUS untuk mendukung efektivitas diseminasi program kementerian dan dinas teknis.
              </p>
            </div>

            <div className="space-y-12">
              {INSIGHTS.map((item, idx) => {
                const detail = articleDetails[idx];
                return (
                  <article
                    key={item.id}
                    className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-6 hover:border-[#031F44] transition-colors shadow-[0_2px_8px_rgba(3,31,68,0.02)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D5CE] pb-4">
                      <span className="font-mono text-[11px] text-[#031F44] bg-[#FBFAF7] border border-[#D8D5CE] px-2.5 py-1 rounded-[1px] uppercase tracking-wider font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-3 font-mono text-[12px] text-[#8C8880]">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-[24px] sm:text-[30px] text-[#031F44] font-normal leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[15px] text-[#57544E] leading-relaxed max-w-[900px]">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    {detail && (
                      <div className="bg-[#FBFAF7] p-6 rounded-[2px] border border-[#D8D5CE] space-y-3">
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                          Pokok Pikiran Strategis:
                        </span>
                        <ul className="space-y-2">
                          {detail.keyTakeaways.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="font-sans text-[13px] text-[#161616] flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-mono text-[11px] text-[#8C8880]">
                        Arsip Publikasi Tim Kebijakan NEXUS
                      </span>
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-2 text-[13px] font-mono font-medium text-[#031F44] hover:underline"
                      >
                        <span>Diskusikan Relevansi Topik Ini</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Policy Intelligence Newsletter Subscription */}
        <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="bg-[#FBFAF7] border border-[#D8D5CE] p-8 sm:p-12 rounded-[2px] max-w-[800px] mx-auto space-y-6 text-center">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Buletin Bulanan
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] text-[#031F44]">
                Berlangganan Wawasan Komunikasi Publik
              </h2>
              <p className="font-sans text-[14px] text-[#57544E] max-w-[560px] mx-auto leading-relaxed">
                Dapatkan ringkasan kajian algoritma media sosial, studi kasus komunikasi instansi negara, dan rekomendasi mitigasi isu langsung di email kedinasan Anda setiap awal bulan.
              </p>

              {emailSubscribed ? (
                <div className="p-4 bg-[#EAF2ED] border border-[#7BAE8E] text-[#1E5631] font-mono text-[13px] rounded-[2px]">
                  Terima kasih. Email kedinasan Anda telah terdaftar dalam daftar distribusi buletin analitis NEXUS.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[480px] mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="nama@instansi.go.id"
                    className="w-full sm:flex-1 px-4 py-3 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#031F44] text-[#FBFAF7] text-[13px] font-medium rounded-[2px] hover:bg-[#17396B] transition-colors shrink-0"
                  >
                    Daftar Buletin
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] font-light">
                Ingin mengadakan workshop strategi komunikasi bagi jajaran Humas Anda?
              </h2>
              <p className="font-sans text-[14px] text-[#9DB7DD] mt-1">
                Tim narasumber ahli kami siap memberikan pelatihan penataan kampanye dan mitigasi krisis dinas.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors shrink-0"
            >
              <span>Ajukan Permohonan Workshop</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
