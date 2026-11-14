"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavSubItem {
  number: string;
  label: string;
  href: string;
  description: string;
}

interface NavCategory {
  id: string;
  label: string;
  summary: string;
  items: NavSubItem[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "layanan",
    label: "Layanan & Tarif",
    summary: "Arsitektur program komunikasi, produksi 4K, dan simulasi alokasi pagu anggaran.",
    items: [
      {
        number: "01",
        label: "Enam Kapabilitas Inti",
        href: "/kapabilitas",
        description: "Arsitektur strategi, mitigasi krisis, hingga pelaporan audit BAST.",
      },
      {
        number: "02",
        label: "Rate Card & Simulator 2026",
        href: "/rate-card",
        description: "Katalog 5 paket pengadaan dinas (Rp 100 Jt - Rp 1 M) dan matriks kreator.",
      },
      {
        number: "03",
        label: "Jadwal 4 Slot Tayang",
        href: "/jadwal-tayang",
        description: "Disiplin jam siar harian dan sinergi algoritma TikTok serta Instagram.",
      },
    ],
  },
  {
    id: "tata-kelola",
    label: "Tata Kelola & Bukti",
    summary: "Standar kepatuhan GPR, perlindungan hukum PPK, dan rekam jejak terverifikasi.",
    items: [
      {
        number: "01",
        label: "Protokol Integritas GPR",
        href: "/integritas",
        description: "Netralitas non-partisan, screening 3 lapisan, dan auditabilitas BAST.",
      },
      {
        number: "02",
        label: "Studi Kasus & Rekam Jejak",
        href: "/kasus",
        description: "Dokumentasi mitigasi darurat Krakatau (Brief 04) dengan bukti siar aktif.",
      },
    ],
  },
  {
    id: "perusahaan",
    label: "Perusahaan & Riset",
    summary: "Identitas entitas hukum resmi, infrastruktur Menara 165, dan kajian kebijakan.",
    items: [
      {
        number: "01",
        label: "Profil PT & Menara 165",
        href: "/tentang",
        description: "Legalitas perseroan, Studio 4K, Supervisi 24/7, dan Command Center.",
      },
      {
        number: "02",
        label: "Wawasan & Riset Kebijakan",
        href: "/wawasan",
        description: "Kajian thought leadership berkala dan buletin komunikasi pemerintah.",
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>("layanan");

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard accessibility: close dropdown or mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeDropdown) {
          setActiveDropdown(null);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown, mobileMenuOpen]);

  const handleMouseEnter = (categoryId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(categoryId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleToggleClick = (categoryId: string) => {
    setActiveDropdown((prev) => (prev === categoryId ? null : categoryId));
  };

  const toggleMobileCategory = (categoryId: string) => {
    setExpandedMobileCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FBFAF7]/95 backdrop-blur-md border-b border-[#D8D5CE] shadow-[0_1px_4px_rgba(3,31,68,0.03)]"
            : "bg-[#FBFAF7] border-b border-[#E6E2D9]"
        }`}
      >
        <div
          ref={navContainerRef}
          className="max-w-[1280px] mx-auto px-5 sm:px-8 h-[68px] sm:h-[72px] flex items-center justify-between"
        >
          {/* Logo brand wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-[#3D68A8] focus-visible:outline-offset-4 rounded-xs shrink-0"
            aria-label="PT Nexus Digital Strategy Beranda"
          >
            <div className="relative w-[185px] sm:w-[210px] h-[32px] sm:h-[34px]">
              <Image
                src="/logos/nexus-wordmark-navy.svg"
                alt="NEXUS DIGITAL STRATEGY"
                fill
                priority
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Link>

          {/* Desktop Categorized Navigation (Clean 3 Groups) */}
          <nav
            className="hidden lg:flex items-center gap-2 xl:gap-4"
            aria-label="Navigasi Utama Terkategori"
          >
            {NAV_CATEGORIES.map((category) => {
              const isOpen = activeDropdown === category.id;
              const hasActiveChild = category.items.some(
                (item) => item.href === pathname
              );

              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Category Trigger Button */}
                  <button
                    type="button"
                    onClick={() => handleToggleClick(category.id)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-sans transition-colors duration-150 rounded-[2px] focus-visible:outline-2 focus-visible:outline-[#3D68A8] ${
                      isOpen || hasActiveChild
                        ? "text-[#031F44] font-medium bg-[#F4F1EA]/80"
                        : "text-[#57544E] hover:text-[#031F44] hover:bg-[#F4F1EA]/50"
                    }`}
                  >
                    <span>{category.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#031F44]" : "text-[#8C8880]"
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" />
                    </svg>
                  </button>

                  {/* Dropdown Panel */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-[380px] bg-[#FBFAF7] border border-[#D8D5CE] shadow-[0_8px_24px_rgba(3,31,68,0.06)] rounded-[2px] p-4 space-y-3 z-50 animate-in fade-in zoom-in-95 duration-150"
                      role="menu"
                      aria-orientation="vertical"
                      aria-label={category.label}
                    >
                      {/* Category Header Note */}
                      <div className="border-b border-[#E6E2D9] pb-2.5 px-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#3D68A8] font-semibold block">
                          Kategori: {category.label}
                        </span>
                        <p className="font-sans text-[12px] text-[#57544E] mt-0.5 leading-relaxed">
                          {category.summary}
                        </p>
                      </div>

                      {/* Items List */}
                      <div className="space-y-1">
                        {category.items.map((item) => {
                          const isCurrentPage = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              className={`group block p-2.5 rounded-[2px] transition-colors ${
                                isCurrentPage
                                  ? "bg-[#F4F1EA] border-l-2 border-[#031F44]"
                                  : "hover:bg-[#F4F1EA]/80"
                              }`}
                            >
                              <div className="flex items-baseline gap-2.5">
                                <span className="font-mono text-[11px] text-[#3D68A8] font-semibold shrink-0">
                                  {item.number}
                                </span>
                                <div className="space-y-0.5 flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-serif text-[15px] text-[#031F44] font-normal group-hover:text-[#17396B]">
                                      {item.label}
                                    </span>
                                    <span className="font-mono text-[11px] text-[#8C8880] opacity-0 group-hover:opacity-100 transition-opacity">
                                      →
                                    </span>
                                  </div>
                                  <p className="font-sans text-[12px] text-[#57544E] leading-normal line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions: Language Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center text-[12px] font-mono tracking-wider text-[#8C8880] border border-[#D8D5CE] rounded-[2px] p-[2px]">
              <button
                type="button"
                onClick={() => setCurrentLang("ID")}
                className={`px-2 py-[2px] transition-colors duration-150 rounded-[1px] ${
                  currentLang === "ID"
                    ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                    : "hover:text-[#161616]"
                }`}
                aria-label="Beralih ke Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setCurrentLang("EN")}
                className={`px-2 py-[2px] transition-colors duration-150 rounded-[1px] ${
                  currentLang === "EN"
                    ? "bg-[#031F44] text-[#FBFAF7] font-medium"
                    : "hover:text-[#161616]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-5 py-[9px] text-[13px] font-medium text-[#FBFAF7] bg-[#031F44] hover:bg-[#17396B] rounded-[2px] transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#3D68A8] focus-visible:outline-offset-2 active:scale-[0.99]"
            >
              <span>Konsultasi Dinas</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-[#031F44] border border-[#D8D5CE] rounded-[2px] hover:bg-[#F4F1EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#3D68A8]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Categorized Accordion) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-[#FBFAF7] flex flex-col justify-between px-6 py-6 lg:hidden overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
        >
          <div className="space-y-6">
            <div className="font-mono text-[11px] text-[#8C8880] tracking-widest uppercase border-b border-[#D8D5CE] pb-2">
              Menu Navigasi Berdasarkan Kategori
            </div>

            <nav className="space-y-4">
              {NAV_CATEGORIES.map((cat, idx) => {
                const isExpanded = expandedMobileCategory === cat.id;

                return (
                  <div
                    key={cat.id}
                    className="border border-[#D8D5CE] rounded-[2px] bg-[#FBFAF7] overflow-hidden"
                  >
                    {/* Category Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory(cat.id)}
                      className="w-full flex items-center justify-between p-4 bg-[#F4F1EA]/70 text-left font-serif text-[18px] text-[#031F44]"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] text-[#3D68A8] font-semibold">
                          0{idx + 1}
                        </span>
                        <span>{cat.label}</span>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M4 6L8 10L12 6" />
                      </svg>
                    </button>

                    {/* Sub-items in accordion */}
                    {isExpanded && (
                      <div className="p-3 divide-y divide-[#E6E2D9] space-y-1">
                        {cat.items.map((item) => {
                          const isCurrent = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block p-2.5 rounded-[1px] transition-colors ${
                                isCurrent
                                  ? "bg-[#F4F1EA] text-[#031F44] font-medium"
                                  : "text-[#57544E] hover:text-[#031F44]"
                              }`}
                            >
                              <div className="flex items-baseline gap-2">
                                <span className="font-mono text-[11px] text-[#8C8880]">
                                  {item.number}
                                </span>
                                <span className="font-sans text-[15px] text-[#031F44]">
                                  {item.label}
                                </span>
                              </div>
                              <p className="font-sans text-[12px] text-[#57544E] pl-5 mt-0.5 leading-snug">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D8D5CE] mt-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] text-[#57544E]">Pilihan Bahasa:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentLang("ID")}
                  className={`px-3 py-1 text-[12px] font-mono rounded-[2px] border ${
                    currentLang === "ID"
                      ? "bg-[#031F44] text-[#FBFAF7] border-[#031F44]"
                      : "border-[#D8D5CE] text-[#57544E]"
                  }`}
                >
                  Bahasa Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentLang("EN")}
                  className={`px-3 py-1 text-[12px] font-mono rounded-[2px] border ${
                    currentLang === "EN"
                      ? "bg-[#031F44] text-[#FBFAF7] border-[#031F44]"
                      : "border-[#D8D5CE] text-[#57544E]"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-[14px] font-medium text-[#FBFAF7] bg-[#031F44] rounded-[2px]"
            >
              <span>Mulai Konsultasi Dinas</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
