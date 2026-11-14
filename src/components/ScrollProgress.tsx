"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setProgress(percent);
        setIsVisible(scrollY > 40);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 h-[2.5px] z-[120] pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background track */}
      <div className="w-full h-full bg-[#031F44]/5" />

      {/* Active progress bar with subtle gradient and leading signal */}
      <div
        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#031F44] via-[#17396B] to-[#3D68A8] transition-all duration-75 ease-out will-change-[width]"
        style={{ width: `${progress}%` }}
      >
        {/* Subtle luminous signal head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-[5px] bg-[#9DB7DD] rounded-full blur-[1px] shadow-[0_0_8px_rgba(61,104,168,0.8)]" />
      </div>
    </div>
  );
}
