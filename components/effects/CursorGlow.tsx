"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * A soft, premium radial glow that follows the cursor on desktop.
 * Purely decorative — pointer-events disabled, hidden on touch devices.
 */
export function CursorGlow() {
  const position = useMousePosition();

  if (!position) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-[420px] w-[420px] rounded-full opacity-40 transition-transform duration-300 ease-out"
        style={{
          left: position.x - 210,
          top: position.y - 210,
          background:
            "radial-gradient(circle, rgba(67,97,238,0.10) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
