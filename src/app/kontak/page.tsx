"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function KontakPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    position: "",
    email: "",
    phone: "",
    budget: "Rp 500 Juta (Paket 03)",
    message: "",
  });

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadEmail) {
      setDownloadSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7] text-[#161616]">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          breadcrumb="KONTAK & PENGADAAN"
          label="KONSULTASI & VENDOR PACK"
          title="Hub koordinasi resmi dan permohonan berkas pengadaan."
          description="Saluran komunikasi formal bagi Pejabat Pembuat Komitmen (PPK), Biro Humas, dan pimpinan kementerian/BUMN untuk konsultasi KAK, proposal biaya, dan audiensi."
        />

        {/* Section 1: Consultation Form & Office Info */}
        <section className="py-16 sm:py-24 bg-[#FBFAF7] border-b border-[#D8D5CE]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Formal Consultation Form */}
              <div className="lg:col-span-7 bg-[#F4F1EA]/60 border border-[#D8D5CE] p-6 sm:p-10 rounded-[2px] space-y-6">
                <div className="border-b border-[#D8D5CE] pb-4 space-y-1">
                  <span className="font-mono text-[11px] text-[#031F44] uppercase tracking-wider block font-semibold">
                    Formulir Audiensi & Kerangka Acuan Kerja (KAK)
                  </span>
                  <h2 className="font-serif text-[26px] sm:text-[30px] text-[#031F44]">
                    Ajukan Kebutuhan Komunikasi Dinas
                  </h2>
                  <p className="font-sans text-[13px] text-[#57544E]">
                    Tim pengarah strategi kami akan merespons dalam waktu maksimal 1x24 jam kerja dinas.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-[#EAF2ED] border border-[#7BAE8E] text-[#1E5631] space-y-3 rounded-[2px]">
                    <div className="font-serif text-[22px] font-normal">
                      Permohonan Konsultasi Berhasil Terkirim
                    </div>
                    <p className="font-sans text-[14px] leading-relaxed">
                      Terima kasih atas kepercayaan institusi Anda kepada PT Nexus Digital Strategy. Tim sekretariat direksi kami akan segera menghubungi nomor telepon dan email kedinasan yang terdaftar untuk mengatur jadwal telaah materi.
                    </p>
                    <div className="pt-2 font-mono text-[12px] text-[#1E5631]">
                      Ref ID: NEXUS-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Nama Lengkap & Gelar *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Dr. H. Hendra Wijaya, M.Si"
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Instansi / Kementerian / BUMN *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.agency}
                          onChange={(e) =>
                            setFormData({ ...formData, agency: e.target.value })
                          }
                          placeholder="Kementerian / Biro Humas / Lembaga"
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Jabatan Kedinasan *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.position}
                          onChange={(e) =>
                            setFormData({ ...formData, position: e.target.value })
                          }
                          placeholder="PPK / Kepala Biro / Pranata Humas"
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Alamat Surel Kedinasan *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="nama@instansi.go.id"
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Nomor Telepon / WhatsApp Dinas *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+62 812-XXXX-XXXX"
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                          Perkiraan Alokasi Pagu Anggaran
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                        >
                          <option value="Rp 100 Juta (Paket 01 Starter)">
                            Rp 100 Juta (Paket 01 Starter)
                          </option>
                          <option value="Rp 250 Juta (Paket 02 Policy)">
                            Rp 250 Juta (Paket 02 Policy)
                          </option>
                          <option value="Rp 500 Juta (Paket 03 National)">
                            Rp 500 Juta (Paket 03 National)
                          </option>
                          <option value="Rp 750 Juta (Paket 04 Enterprise)">
                            Rp 750 Juta (Paket 04 Enterprise)
                          </option>
                          <option value="Rp 1 Milyar (Paket 05 Nusantara 360)">
                            Rp 1 Milyar (Paket 05 Nusantara 360)
                          </option>
                          <option value="Penyesuaian Kustom / Multi-Tahun">
                            Penyesuaian Kustom / Multi-Tahun
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#57544E] uppercase tracking-wider block font-semibold">
                        Uraian Singkat Program / Pesan Kunci *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Jelaskan secara ringkas maksud dan tujuan kampanye, target audiens, dan batas waktu pelaksanaan."
                        className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#031F44] hover:bg-[#17396B] text-[#FBFAF7] text-[14px] font-medium rounded-[2px] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Kirim Dokumen Permohonan Konsultasi</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Office Credentials & Vendor Pack Download Portal */}
              <div className="lg:col-span-5 space-y-8">
                {/* Physical Office Card */}
                <div className="bg-[#FBFAF7] border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-4">
                  <span className="font-mono text-[11px] text-[#031F44] uppercase tracking-wider block font-semibold border-b border-[#D8D5CE] pb-2">
                    Kantor Pusat Operasional
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-[22px] text-[#031F44]">
                      PT Nexus Digital Strategy
                    </h3>
                    <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                      Gedung Menara 165 Lantai 4<br />
                      Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu<br />
                      Jakarta Selatan 12560, DKI Jakarta.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E6E2D9] space-y-2 font-mono text-[12px] text-[#57544E]">
                    <div className="flex justify-between">
                      <span className="text-[#8C8880]">Jam Layanan:</span>
                      <span>Senin - Jumat, 08.30 - 17.30 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8880]">Pusat Supervisi:</span>
                      <span className="text-[#1E5631] font-semibold">24 Jam Nonstop Aktif</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8880]">Surel Resmi:</span>
                      <span className="text-[#031F44]">sekretariat@nexusdigital.co.id</span>
                    </div>
                  </div>
                </div>

                {/* Vendor Pack PDF Instant Request Portal */}
                <div className="bg-[#F4F1EA]/80 border border-[#D8D5CE] p-6 sm:p-8 rounded-[2px] space-y-4">
                  <span className="font-mono text-[11px] text-[#3D68A8] uppercase tracking-wider block font-semibold">
                    Dokumentasi Pengadaan Mandiri
                  </span>
                  <h3 className="font-serif text-[22px] text-[#031F44]">
                    Unduh Vendor Pack 2026 (PDF)
                  </h3>
                  <p className="font-sans text-[13px] text-[#57544E] leading-relaxed">
                    Paket resmi mencakup Dokumen Profil Perusahaan, Katalog Rate Card 2026, Matriks Kreator 4 Tingkatan, serta Contoh Format BAST Standar Audit BPK.
                  </p>

                  {downloadSuccess ? (
                    <div className="p-4 bg-[#EAF2ED] border border-[#7BAE8E] text-[#1E5631] font-mono text-[12px] rounded-[2px] space-y-2">
                      <div>Tautan unduhan telah dikirim ke email kedinasan Anda.</div>
                      <a
                        href="/logos/nexus-lockup-navy.svg"
                        download="NEXUS-Vendor-Pack-2026.pdf"
                        className="inline-block font-sans font-medium text-[#031F44] underline"
                      >
                        Atau unduh berkas langsung di sini (PDF)
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleDownload} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={downloadEmail}
                        onChange={(e) => setDownloadEmail(e.target.value)}
                        placeholder="masukkan.email@instansi.go.id"
                        className="w-full px-3.5 py-2.5 bg-[#FBFAF7] border border-[#D8D5CE] text-[13px] font-sans text-[#161616] placeholder:text-[#8C8880] focus:border-[#031F44] focus:outline-none rounded-[2px]"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#031F44] hover:bg-[#17396B] text-[#FBFAF7] text-[13px] font-medium rounded-[2px] transition-colors"
                      >
                        Kirimkan Dokumen Vendor Pack PDF
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
