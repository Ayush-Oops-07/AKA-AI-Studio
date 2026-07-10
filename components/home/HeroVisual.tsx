"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_FLOATING_ICONS } from "@/constants/data";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [orbitRadius, setOrbitRadius] = useState(235);

  useEffect(() => {
    function updateRadius() {
      const w = window.innerWidth;
      if (w >= 1024) setOrbitRadius(270);
      else if (w >= 640) setOrbitRadius(235);
      else setOrbitRadius(160);
    }
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relY * -10, y: relX * 12 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(Math.sin(i * 12.9) * 0.5 + 0.5) * 100}%`,
    delay: (i % 7) * 0.6,
    duration: 6 + (i % 5),
    driftX: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8)}px`,
    size: 3 + (i % 3),
  }));

  return (
    <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px] lg:h-[560px] lg:w-[560px]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue/25 via-violet/20 to-cyan/25 blur-[80px]" />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex h-full w-full items-center justify-center [perspective:1200px]"
      >
        {/* Floating particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="animate-drift absolute bottom-0 rounded-full bg-gradient-to-br from-blue to-violet opacity-0"
            style={
              {
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                "--drift-x": p.driftX,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Rotating gradient ring */}
        <div className="animate-spin-slow absolute inset-0 rounded-full p-[3px]" style={{
          background: "conic-gradient(from 0deg, #4361ee, #8b5cf6, #22c9e0, #4361ee)",
          maskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
          WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
        }} />
        {/* Secondary counter-rotating ring, offset */}
        <div className="animate-spin-slower absolute inset-6 rounded-full border border-dashed border-blue/25" />

        {/* Glass ring frame */}
        <div className="glass-strong absolute inset-8 rounded-full sm:inset-10 lg:inset-12" />

        {/* Team photo circle */}
        <div className="absolute inset-16 overflow-hidden rounded-full shadow-glossy sm:inset-20 lg:inset-24">
          <Image
            src="/images/team/group-photo.jpg"
            alt="Ayush, Komal & Anushka — the AKA AI Studio founders"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 400px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent py-3 text-center">
            <span className="text-xs font-medium tracking-wide text-white">Ayush &middot; Komal &middot; Anushka</span>
          </div>
        </div>

        {/* Floating technology icons orbiting the ring */}
        {HERO_FLOATING_ICONS.map((item, i) => {
          const angle = (i / HERO_FLOATING_ICONS.length) * 2 * Math.PI;
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="absolute left-1/2 top-1/2 hidden sm:block"
              style={{
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * orbitRadius}px, ${Math.sin(angle) * orbitRadius}px)`,
              }}
            >
              <div
                className="animate-float glass-strong flex flex-col items-center gap-1 rounded-2xl px-3 py-2 shadow-glossy"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                <Icon className="h-4 w-4 text-blue" strokeWidth={1.8} />
                <span className="text-[9px] font-medium text-ink-dim">{item.label}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
