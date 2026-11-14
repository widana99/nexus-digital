"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

export default function TentangPage() {
  const facilities = [
    {
      number: "01",
      name: "Studio Produksi Audio-Visual 4K",
      location: "Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/studio-4k-menara165.jpg",
      specs: [
        "Kamera sinematik 4K broadcast-ready dan sensor warna terkalibrasi.",
        "Set studio modular untuk format wawancara pimpinan dinas dan podcast kebijakan.",
        "Akustik ruang kedap suara berstandar studio rekaman profesional.",
        "Sistem editing dan render server berkecepatan tinggi untuk materi instan.",
      ],
      description:
        "Fasilitas mandiri yang memungkinkan seluruh materi edukasi publik diproduksi dengan standar sinematografi bermartabat tanpa ketergantungan pada vendor pihak ketiga.",
    },
    {
      number: "02",
      name: "Ruang Supervisi & Moderasi Sentimen 24/7",
      location: "Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/command-center-247.jpg",
      specs: [
        "Tim operator jaga 3 shift selama 24 jam tanpa jeda.",
        "Sistem deteksi dini anomali komentar dan provokasi hoaks.",
        "Protokol eskalasi 15 menit untuk penanganan isu darurat publik.",
        "Sistem enkripsi data dan perlindungan informasi strategis.",
      ],
      description:
        "Pusat pengawasan respon masyarakat di kolom diskusi media sosial untuk memastikan kesalahpahaman informasi diluruskan secara santun dan berbasis data sah.",
    },
    {
      number: "03",
      name: "Executive Boardroom & Dedicated Command Center",
      location: "Menara 165 Lantai 4, Jakarta Selatan",
      image: "/images/executive-boardroom.jpg",
      specs: [
        "Ruang sidang eksekutif tertutup untuk rapat koordinasi pimpinan dinas dan PPK.",
        "Panorama koridor bisnis TB Simatupang dengan pencahayaan alami bermartabat.",
        "Dashboard analitik real-time memantau penayangan serentak lintas 38 provinsi.",
        "Sambungan telekonferensi aman berstandar kepresidenan dan kementerian.",
      ],
      description:
        "Ruang kendali operasi kampanye yang memfasilitasi Pejabat Pembuat Komitmen (PPK) dan pimpinan institusi menelaah draf KAK serta memantau dampak publik secara langsung dan transparan.",
    },
  ];

  const leadershipDisciplines = [
    {
      title: "Analis Kebijakan & Regulasi Publik",
      role: "Membedah pasal undang-undang dan peraturan menteri menjadi premis komunikasi berbobot tanpa mengurangi esensi hukum.",
    },
    {
      title: "Pengarah Kreatif Audio-Visual",
      role: "Menjaga kualitas estetika sinematik, kejelasan infografis, dan nada bicara yang bermartabat sesuai marwah negara.",
    },
    {
      title: "Kurator Jaringan Kreator Nasional",
      role: "Melakukan audit integritas, verifikasi latar belakang hukum, dan manajemen hubungan kerja kreator di 38 provinsi.",
    },
    {
      title: "Auditor Kepatuhan & Akuntabilitas BAST",
      role: "Menjamin setiap bukti tayang, tangkapan layar bertimestamp, dan laporan pertanggungjawaban lolos uji audit BPK dan Inspektorat.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="TENTANG PERUSAHAAN"
          label="PROFIL & TATA KELOLA"
          title="PT Nexus Digital Strategy: Mitra komunikasi strategis institusi negara."
          description="Berakar pada komitmen tata kelola informasi publik, integritas non-partisan, serta keunggulan infrastruktur produksi dan supervisi digital di Jakarta Selatan."
          backgroundImage="/images/tentang-hero-canvas.jpg"
          backgroundOpacity="opacity-85"
          statusBadge="KANTOR PUSAT: MENARA 165 LANTAI 4 JAKARTA SELATAN"
          metaPills={[
            { label: "Kedudukan", value: "DKI Jakarta" },
            { label: "Fasilitas", value: "Studio 4K & Command Center" },
            { label: "Integritas", value: "Non-Partisan Terverifikasi" },
          ]}
        />

        {/* Section 1: Corporate Profile & Legal Standing */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                  Identitas Korporasi
                </span>
                <h2 className="font-serif text-[28px] sm:text-[38px] text-[#031F44] font-normal leading-tight">
                  Menjembatani Kebijakan Negara dengan Pemahaman Warga
                </h2>
                <div className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#57544E] leading-relaxed">
                  <p>
                    PT Nexus Digital Strategy didirikan sebagai entitas komunikasi strategis yang secara khusus berfokus pada sektor pelayanan publik, kementerian, badan usaha milik negara (BUMN), dan lembaga pemerintah.
                  </p>
                  <p>
                    Kami menyadari bahwa keberhasilan suatu kebijakan tidak hanya diukur dari pengesahannya di lembaran negara, melainkan seberapa jernih manfaat kebijakan tersebut dipahami, diterima, dan dimanfaatkan oleh masyarakat luas.
                  </p>
                  <p>
                    Dengan memadukan pendekatan analisis kebijakan publik dan orkestrasi teknologi media sosial modern, NEXUS menghadirkan kampanye diseminasi yang terukur, berbobot, dan akuntabel secara hukum.
                  </p>
                </div>
              </div>

              {/* Legal & Operational Credentials Box */}
              <div className="lg:col-span-6 bg-[#F4F1EA]/70 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-6">
                <span className="font-mono text-[11px] text-[#031F44] uppercase tracking-wider block font-semibold border-b border-[#D8D5CE] pb-2">
                  Legalitas & Kedudukan Operasional
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Nama Entitas Resmi
                    </span>
                    <span className="font-serif text-[20px] text-[#031F44]">
                      PT Nexus Digital Strategy
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Kantor Pusat Operasional
                    </span>
                    <p className="font-sans text-[14px] text-[#161616] leading-relaxed mt-1">
                      Gedung Menara 165 Lantai 4, Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560, DKI Jakarta.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Status Hukum & Kepatuhan
                    </span>
                    <p className="font-sans text-[13px] text-[#57544E] leading-relaxed mt-1">
                      Perseroan Terbatas sah terdaftar di Kementerian Hukum dan HAM Republik Indonesia, memiliki Nomor Induk Berusaha (NIB) terverifikasi, taat perpajakan (PKP), dan memenuhi kualifikasi pengadaan pemerintah melalui LPSE/LKPP.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block">
                      Wilayah Operasi Jaringan
                    </span>
                    <span className="font-mono text-[13px] text-[#031F44] font-medium block mt-1">
                      Nasional (38 Provinsi di Seluruh Indonesia)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 3 Core Facilities in Menara 165 (With Documentary Imagery) */}
        <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Infrastruktur Perusahaan
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Tiga Fasilitas Unggulan Menara 165
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Seluruh operasional produksi dan supervisi didukung oleh fasilitas fisik mutakhir di kawasan bisnis TB Simatupang untuk menjamin kecepatan reaksi dan keamanan data instansi dinas.
              </p>
            </div>

            <div className="space-y-12">
              {facilities.map((fac) => (
                <div
                  key={fac.number}
                  className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-8 hover:border-[#031F44] transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#E6E2D9] pb-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-[22px] sm:text-[26px] font-semibold text-[#031F44]">
                        {fac.number}
                      </span>
                      <h3 className="font-serif text-[24px] sm:text-[28px] text-[#031F44]">
                        {fac.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[12px] text-[#3D68A8] bg-[#F4F1EA] px-3 py-1 rounded-[1px]">
                      {fac.location}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                      <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden border border-[#D8D5CE] bg-[#010F24]">
                        <Image
                          src={fac.image}
                          alt={fac.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 560px"
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#010F24]/90 via-[#010F24]/50 to-transparent p-4">
                          <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block">
                            Fasilitas Fisik Resmi:
                          </span>
                          <span className="font-sans text-[13px] text-[#FBFAF7]">
                            {fac.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <p className="font-sans text-[15px] text-[#57544E] leading-relaxed">
                        {fac.description}
                      </p>

                      <div className="bg-[#F4F1EA]/50 p-5 rounded-[2px] border border-[#E6E2D9] space-y-2">
                        <span className="font-mono text-[11px] text-[#8C8880] uppercase tracking-wider block font-semibold">
                          Spesifikasi Fasilitas:
                        </span>
                        <ul className="space-y-2">
                          {fac.specs.map((spec, sIdx) => (
                            <li
                              key={sIdx}
                              className="font-sans text-[13px] text-[#161616] flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#031F44] mt-1.5 shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Disciplines & Leadership */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-[760px] space-y-3">
              <span className="font-mono text-[11px] text-[#031F44] tracking-wider uppercase font-semibold block">
                Sumber Daya Manusia
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#031F44] font-normal leading-tight">
                Disiplin Keahlian Terpadu
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#57544E] leading-relaxed">
                Kami mengintegrasikan para pakar dari berbagai rumpun ilmu untuk menghasilkan kampanye publik yang solid dari sisi regulasi dan menarik secara visual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipDisciplines.map((disc, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-3"
                >
                  <span className="font-mono text-[12px] text-[#3D68A8] font-semibold block">
                    DIVISI 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-[22px] text-[#031F44]">
                    {disc.title}
                  </h3>
                  <p className="font-sans text-[14px] text-[#57544E] leading-relaxed">
                    {disc.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#031F44] text-[#FBFAF7]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] font-light">
                Ingin berkunjung atau meninjau fasilitas kami di Menara 165?
              </h2>
              <p className="font-sans text-[14px] text-[#9DB7DD] mt-1">
                Kami dengan senang hati menyambut delegasi instansi dinas untuk audiensi resmi.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9DB7DD] text-[#031F44] font-medium text-[14px] rounded-[2px] hover:bg-[#FBFAF7] transition-colors shrink-0"
            >
              <span>Jadwalkan Kunjungan / Audiensi</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
