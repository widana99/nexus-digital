"use client";

import React, { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap wajib diisi (minimal 3 karakter)"),
  organization: z.string().min(3, "Nama instansi/lembaga wajib diisi"),
  email: z.string().email("Format email resmi tidak valid"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Silakan pilih jenis kebutuhan proyek"),
  selectedPackage: z.string().optional(),
  requestVendorPack: z.boolean().default(true),
  message: z.string().min(15, "Ringkasan brief proyek minimal 15 karakter"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "Digital Strategy & Campaign Architecture",
    selectedPackage: "Paket 03: National Program (Pagu Rp 500 Juta)",
    requestVendorPack: true,
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission with network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="kontak"
      className="py-20 sm:py-28 bg-[#031F44] text-[#FBFAF7] border-b border-[#010F24]"
      aria-label="Formulir Konsultasi dan Permintaan Vendor Pack"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Rail Nomor */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#9DB7DD] tracking-[0.18em] uppercase mb-4">
          <span className="w-8 h-[1px] bg-[#9DB7DD]" />
          <span>10 / INISIASI KOMUNIKASI & VENDOR PACK</span>
          <span className="w-8 h-[1px] bg-[rgba(157,183,221,0.3)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Institutional Notice & Download Information */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-[38px] sm:text-[48px] font-light text-[#FBFAF7] leading-[1.08] tracking-[-0.02em]">
              Mulai percakapan strategis.
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#E3EBF6] leading-[1.7]">
              Sampaikan kebutuhan kampanye dinas, pengkajian regulasi, atau ajukan permohonan berkas Vendor Pack 2026 resmi untuk penyusunan Rencana Anggaran Biaya (RAB) kementerian.
            </p>

            {/* Vendor Pack Contents Preview Box */}
            <div className="p-5 bg-[#010F24] border border-[rgba(157,183,221,0.25)] rounded-[2px] space-y-3">
              <span className="font-mono text-[11px] text-[#9DB7DD] uppercase tracking-wider block font-semibold">
                Berkas Resmi Vendor Pack (PDF) Mencakup:
              </span>
              <ul className="space-y-1.5 font-sans text-[13px] text-[#D8D5CE]">
                <li className="flex items-center gap-2">
                  <span className="text-[#9DB7DD]">•</span>
                  <span>Surat Pengantar & Profil Legalitas Perusahaan (NIB/Akta)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DB7DD]">•</span>
                  <span>Rincian Rate Card 5 Paket Pagu (Rp 100 Jt - Rp 1 Miliar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DB7DD]">•</span>
                  <span>Matriks 4-Tier Kreator & 4 Slot Jam Tayang</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DB7DD]">•</span>
                  <span>Contoh Format Laporan BAST Berstempel Waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DB7DD]">•</span>
                  <span>Draft Perjanjian Kerjasama (SPK & Klausul GPR)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 text-[13px] font-sans text-[#9DB7DD]">
              <div className="flex items-center gap-2">
                <span className="font-mono">•</span>
                <span>Waktu tanggapan tim: Maksimal 1 hari kerja resmi.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono">•</span>
                <span>Kerahasiaan data instansi dilindungi kebijakan UU PDP.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Underline-Only Form Design */}
          <div className="lg:col-span-7 bg-[#010F24] p-6 sm:p-10 rounded-[2px] border border-[rgba(157,183,221,0.25)] shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full border border-[#9DB7DD] text-[#9DB7DD] flex items-center justify-center mx-auto text-[20px]">
                  ✓
                </div>
                <h3 className="font-serif text-[26px] text-[#FBFAF7]">
                  Inquiry Berhasil Diterima.
                </h3>
                <p className="font-sans text-[14px] text-[#D8D5CE] max-w-[440px] mx-auto leading-relaxed">
                  Terima kasih, Bapak/Ibu {formData.fullName}. Tim strategi PT Nexus Digital Strategy telah mencatat brief instansi Anda ({formData.organization}) dan tautan berkas resmi Vendor Pack 2026 akan dikirimkan ke {formData.email}.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        organization: "",
                        email: "",
                        phone: "",
                        projectType: "Digital Strategy & Campaign Architecture",
                        selectedPackage: "Paket 03: National Program (Pagu Rp 500 Juta)",
                        requestVendorPack: true,
                        message: "",
                      });
                    }}
                    className="font-mono text-[12px] text-[#9DB7DD] hover:underline"
                  >
                    Kirimkan permohonan lain →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="fullName"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                  >
                    Nama Lengkap & Gelar *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contoh: Raden Satria, M.Si / Tim Komunikasi"
                    className={`w-full py-2.5 bg-transparent border-b text-[15px] text-[#FBFAF7] placeholder:text-[#57544E] focus:outline-none transition-colors ${
                      errors.fullName
                        ? "border-[#B3261E] focus:border-[#B3261E]"
                        : "border-[rgba(157,183,221,0.3)] focus:border-[#9DB7DD]"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="font-sans text-[11px] text-[#B3261E] block mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Organization & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization */}
                  <div className="space-y-1">
                    <label
                      htmlFor="organization"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                    >
                      Instansi / Korporasi / Lembaga *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Contoh: Kementerian / BUMN / Pemda"
                      className={`w-full py-2.5 bg-transparent border-b text-[15px] text-[#FBFAF7] placeholder:text-[#57544E] focus:outline-none transition-colors ${
                        errors.organization
                          ? "border-[#B3261E] focus:border-[#B3261E]"
                          : "border-[rgba(157,183,221,0.3)] focus:border-[#9DB7DD]"
                      }`}
                    />
                    {errors.organization && (
                      <span className="font-sans text-[11px] text-[#B3261E] block mt-1">
                        {errors.organization}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                    >
                      Alamat Email Resmi Dinas *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@instansi.go.id / corcomm@perusahaan.co.id"
                      className={`w-full py-2.5 bg-transparent border-b text-[15px] text-[#FBFAF7] placeholder:text-[#57544E] focus:outline-none transition-colors ${
                        errors.email
                          ? "border-[#B3261E] focus:border-[#B3261E]"
                          : "border-[rgba(157,183,221,0.3)] focus:border-[#9DB7DD]"
                      }`}
                    />
                    {errors.email && (
                      <span className="font-sans text-[11px] text-[#B3261E] block mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Selected Package & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label
                      htmlFor="selectedPackage"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                    >
                      Pilihan Paket Pagu Anggaran
                    </label>
                    <select
                      id="selectedPackage"
                      name="selectedPackage"
                      value={formData.selectedPackage}
                      onChange={handleChange}
                      className="w-full py-2.5 bg-[#010F24] border-b border-[rgba(157,183,221,0.3)] text-[14px] text-[#FBFAF7] focus:outline-none focus:border-[#9DB7DD]"
                    >
                      <option value="Paket 01: Starter Public Impact (Pagu Rp 100 Juta)">
                        Paket 01: Starter Public Impact (Pagu Rp 100 Jt)
                      </option>
                      <option value="Paket 02: Integrated Policy Education (Pagu Rp 250 Juta)">
                        Paket 02: Integrated Policy Education (Pagu Rp 250 Jt)
                      </option>
                      <option value="Paket 03: National Program (Pagu Rp 500 Juta)">
                        Paket 03: National Program (Pagu Rp 500 Jt)
                      </option>
                      <option value="Paket 04: Enterprise Scale (Pagu Rp 750 Juta)">
                        Paket 04: Enterprise Scale (Pagu Rp 750 Jt)
                      </option>
                      <option value="Paket 05: Nusantara 360 (Pagu Rp 1 Miliar)">
                        Paket 05: Nusantara 360 (Pagu Rp 1 Miliar)
                      </option>
                      <option value="Konsultasi Kustom Khusus">
                        Konsultasi Kustom Khusus
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="phone"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                    >
                      Nomor Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 8..."
                      className="w-full py-2.5 bg-transparent border-b border-[rgba(157,183,221,0.3)] text-[14px] text-[#FBFAF7] placeholder:text-[#57544E] focus:outline-none focus:border-[#9DB7DD]"
                    />
                  </div>
                </div>

                {/* Brief Message */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#9DB7DD]"
                  >
                    Ringkasan Sasaran / Kebutuhan Program *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sampaikan sasaran kampanye, kebijakan yang hendak disosialisasikan, target tanggal tayang, atau kebutuhan khusus lainnya."
                    className={`w-full py-2 bg-transparent border-b text-[14px] text-[#FBFAF7] placeholder:text-[#57544E] focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-[#B3261E] focus:border-[#B3261E]"
                        : "border-[rgba(157,183,221,0.3)] focus:border-[#9DB7DD]"
                    }`}
                  />
                  {errors.message && (
                    <span className="font-sans text-[11px] text-[#B3261E] block mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Checkbox Request Vendor Pack */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="requestVendorPack"
                    name="requestVendorPack"
                    checked={formData.requestVendorPack}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#9DB7DD] rounded-[2px]"
                  />
                  <label
                    htmlFor="requestVendorPack"
                    className="font-sans text-[13px] text-[#D8D5CE] cursor-pointer"
                  >
                    Kirimkan pula berkas lengkap Vendor Pack resmi (PDF) ke alamat email saya.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#8C8880]">
                    Kerahasiaan data terjamin
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[14px] font-medium text-[#031F44] bg-[#9DB7DD] hover:bg-[#FBFAF7] rounded-[2px] transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-[#031F44] border-t-transparent animate-spin" />
                        <span>Memproses...</span>
                      </span>
                    ) : (
                      <>
                        <span>Kirimkan Formulir & Permintaan</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
