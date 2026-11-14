"use client";

import React, { useState, useEffect } from "react";

interface NodePoint {
  id: string;
  name: string;
  category: string;
  cx: number;
  cy: number;
  description: string;
}

export default function NexusSignal({
  className = "",
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "navy";
}) {
  const [activeNode, setActiveNode] = useState<string | null>("creator");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / (window.innerHeight * 1.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nodes: NodePoint[] = [
    {
      id: "policy",
      name: "REGULASI",
      category: "Sumber",
      cx: 70,
      cy: 330,
      description: "Sintesis regulasi dan kebijakan resmi kementerian.",
    },
    {
      id: "strategy",
      name: "STRATEGI",
      category: "Arsitektur",
      cx: 160,
      cy: 240,
      description: "Perumusan narasi tunggal dan mitigasi risiko isu.",
    },
    {
      id: "creator",
      name: "KREATOR MULTI-TIER",
      category: "Orkestrasi",
      cx: 260,
      cy: 140,
      description: "Aktivasi Nano, Micro, Macro, dan KOL terverifikasi.",
    },
    {
      id: "distribution",
      name: "DISTRIBUSI 4-SLOT",
      category: "Kanal",
      cx: 360,
      cy: 240,
      description: "Penjadwalan presisi pada jam komuter dan malam hari.",
    },
    {
      id: "measurement",
      name: "AUDIT BAST",
      category: "Akuntabilitas",
      cx: 450,
      cy: 150,
      description: "Pelaporan bukti tayang dan validasi kepatuhan dinas.",
    },
  ];

  const isLight = theme === "light";
  const primaryNavy = isLight ? "#031F44" : "#9DB7DD";
  const activeNavy = isLight ? "#3D68A8" : "#FBFAF7";
  const baseLineColor = isLight ? "#D8D5CE" : "rgba(227, 235, 246, 0.2)";
  const activeLineColor = isLight ? "#031F44" : "#9DB7DD";
  const passiveNodeFill = isLight ? "#FBFAF7" : "#031F44";
  const labelColor = isLight ? "#57544E" : "#9DB7DD";

  // Calculate dynamic signal position along the 45 degree primary axis
  const signalX = 70 + scrollProgress * (450 - 70);
  const signalY = 330 - scrollProgress * (330 - 150);

  return (
    <div
      className={`relative w-full aspect-[540/400] max-w-[540px] select-none ${className}`}
      aria-label="Diagram Arsitektur Jaringan NEXUS Signal"
      role="region"
    >
      <svg
        viewBox="0 0 540 400"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle line glow */}
          <filter id="subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Diagonal 45-degree Guide Line (echoing the X blade from NEXUS logo) */}
        <line
          x1="50"
          y1="350"
          x2="470"
          y2="130"
          stroke={baseLineColor}
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.8"
        />

        {/* Network connections */}
        <polyline
          points="70,330 160,240 260,140 360,240 450,150"
          fill="none"
          stroke={baseLineColor}
          strokeWidth="1.5"
        />

        {/* Secondary network support paths */}
        <line
          x1="160"
          y1="240"
          x2="360"
          y2="240"
          stroke={baseLineColor}
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <line
          x1="70"
          y1="330"
          x2="260"
          y2="140"
          stroke={baseLineColor}
          strokeWidth="0.75"
          opacity="0.5"
        />

        {/* Active dynamic progress line */}
        <line
          x1="70"
          y1="330"
          x2={signalX}
          y2={signalY}
          stroke={activeLineColor}
          strokeWidth="2"
          className="transition-all duration-75"
        />

        {/* Moving Signal Pulse (Controlled by scroll) */}
        <g
          transform={`translate(${signalX}, ${signalY})`}
          className="transition-transform duration-75"
        >
          <circle
            r="8"
            fill="none"
            stroke={activeNavy}
            strokeWidth="1.5"
            className="animate-ping opacity-75"
          />
          <circle r="4" fill={activeNavy} />
        </g>

        {/* Network Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer group"
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              tabIndex={0}
              role="button"
              aria-label={`Node ${node.name}: ${node.description}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveNode(node.id);
                }
              }}
            >
              {/* Hit target area (44px accessible) */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r="22"
                fill="transparent"
              />

              {/* Node Outer Ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isActive ? "9" : "6"}
                fill={isActive ? activeNavy : passiveNodeFill}
                stroke={isActive ? primaryNavy : baseLineColor}
                strokeWidth={isActive ? "2" : "1.5"}
                className="transition-all duration-200"
              />

              {/* Micro Crosshair on Active */}
              {isActive && (
                <>
                  <line
                    x1={node.cx - 14}
                    y1={node.cy}
                    x2={node.cx + 14}
                    y2={node.cy}
                    stroke={primaryNavy}
                    strokeWidth="0.75"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1={node.cx}
                    y1={node.cy - 14}
                    x2={node.cx}
                    y2={node.cy + 14}
                    stroke={primaryNavy}
                    strokeWidth="0.75"
                    strokeDasharray="2 2"
                  />
                </>
              )}

              {/* Node Label (IBM Plex Mono) */}
              <text
                x={node.cx}
                y={node.cy + (node.cy > 200 ? 22 : -16)}
                textAnchor="middle"
                fill={isActive ? primaryNavy : labelColor}
                className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase font-medium transition-colors duration-150"
              >
                {node.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Selected Node Status Box */}
      <div
        className={`mt-2 p-3 sm:p-4 rounded-[2px] border transition-all duration-300 ${
          isLight
            ? "bg-[#F4F1EA] border-[#D8D5CE]"
            : "bg-[#010F24] border-[rgba(157,183,221,0.3)] text-[#FBFAF7]"
        }`}
      >
        {activeNode ? (
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#031F44] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-medium text-[#031F44]">
                {nodes.find((n) => n.id === activeNode)?.category}:
              </span>
              <span className="font-sans text-[13px] font-semibold text-[#161616]">
                {nodes.find((n) => n.id === activeNode)?.name}
              </span>
            </div>
            <p className="font-sans text-[12px] text-[#57544E] leading-relaxed">
              {nodes.find((n) => n.id === activeNode)?.description}
            </p>
          </div>
        ) : (
          <p className="font-mono text-[11px] text-[#8C8880] text-center">
            Arahkan kursor atau sentuh titik sinyal untuk menelusuri alur orkestrasi
          </p>
        )}
      </div>
    </div>
  );
}
