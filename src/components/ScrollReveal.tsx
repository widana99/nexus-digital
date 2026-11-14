"use client";

import React, { useEffect, useRef, useState } from "react";

export type ScrollRevealVariant = "blur-reveal" | "canvas-depth" | "fade-up" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: ScrollRevealVariant;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
  as?: React.ElementType;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  variant = "blur-reveal",
  delay = 0,
  duration = 700,
  className = "",
  as: Component = "div",
  threshold = 0.12,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // If browser prefers reduced motion, show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Use IntersectionObserver with efficient threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve immediately after trigger to avoid scroll thread work
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case "blur-reveal":
        return isVisible
          ? "opacity-100 translate-y-0 filter blur-0 scale-100"
          : "opacity-0 translate-y-4 filter blur-[6px] scale-[0.99]";

      case "canvas-depth":
        return isVisible
          ? "opacity-100 scale-100 filter blur-0"
          : "opacity-75 scale-[1.03] filter blur-[3px]";

      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6";

      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";

      default:
        return isVisible
          ? "opacity-100 translate-y-0 filter blur-0"
          : "opacity-0 translate-y-4 filter blur-[6px]";
    }
  };

  const transitionStyle: React.CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: isVisible ? "auto" : "opacity, transform, filter",
  };

  return (
    <Component
      ref={elementRef}
      style={transitionStyle}
      className={`transform-gpu ${getVariantStyles()} ${className}`}
    >
      {children}
    </Component>
  );
}
