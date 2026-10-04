"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.2,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out cubic
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration, prefersReduced]);

  if (!value || value <= 0) return null;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
