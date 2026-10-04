"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { HERO, CONTACT, LIVE_WEBSITES_COUNT } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

const HEADLINE_WORDS = [
  "Your",
  "shop",
  "closes",
  "at",
  "9.",
  "Your",
  "website",
];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isEntered, setIsEntered] = useState(false);

  // Layer F: Subtle 3D tilt following cursor (max 3 degrees, stiffness 120, damping 18)
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -Number(((y / (rect.height / 2)) * 3).toFixed(2));
    const rotateY = Number(((x / (rect.width / 2)) * 3).toFixed(2));
    setTilt({ rotateX, rotateY });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  const anim = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: TRANSITION_EASE },
        };

  return (
    <section
      id="top"
      className="relative overflow-x-clip pb-16 pt-32 lg:pb-24 lg:pt-40"
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div className="container-main grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left 7 cols: text content */}
        <div className="lg:col-span-7">
          {/* Eyebrow badge */}
          <motion.div {...anim(0.06)}>
            <span className="text-eyebrow inline-block font-semibold">
              {HERO.label}
            </span>
          </motion.div>

          {/* Headline: Fraunces, 500 weight, clamp(2rem, 4.2vw, 3.4rem), line-height 1.12, letter-spacing -0.01em, max 3 lines on desktop, max 4 on mobile */}
          <h1
            className="text-heading mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.01em] text-[#1F2A44] lg:max-w-[18ch] [text-wrap:balance]"
          >
            {/* Word by word reveal: 12px slide up with 60ms stagger */}
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-[0.26em]"
                initial={
                  prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.06, // 60ms stagger
                  ease: TRANSITION_EASE,
                }}
              >
                {word}
              </motion.span>
            ))}

            {/* Last two words and full stop in whitespace-nowrap with underline on "never does" */}
            <span className="whitespace-nowrap inline-block">
              <motion.span
                className="inline-block"
                initial={
                  prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + HEADLINE_WORDS.length * 0.06,
                  ease: TRANSITION_EASE,
                }}
              >
                <motion.span
                  className="inline-block"
                  style={{
                    backgroundImage: "linear-gradient(#B84B23, #B84B23)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 92%",
                  }}
                  initial={
                    prefersReduced
                      ? { backgroundSize: "100% 3px" }
                      : { backgroundSize: "0% 3px" }
                  }
                  animate={{ backgroundSize: "100% 3px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + HEADLINE_WORDS.length * 0.06 + 0.35,
                    ease: TRANSITION_EASE,
                  }}
                >
                  never does
                </motion.span>.
              </motion.span>
            </span>
          </h1>

          {/* Supporting text: Inter, 18px, line-height 1.6, colour #4A5370, max-width 52ch */}
          <motion.p
            {...anim(0.32)}
            className="mt-5 text-[18px] leading-[1.6] text-[#4A5370] lg:max-w-[52ch]"
          >
            {HERO.supporting}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...anim(0.4)}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button href={CONTACT.whatsappHref} variant="whatsapp">
              {HERO.ctaPrimary}
            </Button>
            <Button href="/work" variant="outline" showArrow>
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          {/* Micro-trust line under buttons */}
          <motion.p
            {...anim(0.46)}
            className="mt-3 text-xs leading-normal text-[#4A5370]"
          >
            {HERO.trustLine}
          </motion.p>

          {/* Verified real stats (three real facts only, zero percentages) */}
          <motion.div
            {...anim(0.52)}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[#E2DDD5] pt-6"
          >
            <div className="transition-transform duration-200 hover:scale-[1.03] cursor-default">
              <div className="text-heading text-2xl font-bold text-[#1F2A44] sm:text-3xl">
                <StatCounter value={LIVE_WEBSITES_COUNT} suffix="+" />
              </div>
              <p className="mt-1 text-xs leading-snug text-[#4A5370]">
                websites live
              </p>
            </div>
            <div className="transition-transform duration-200 hover:scale-[1.03] cursor-default">
              <div className="text-heading text-2xl font-bold text-[#1F2A44] sm:text-3xl">
                <StatCounter value={3} suffix="" />
              </div>
              <p className="mt-1 text-xs leading-snug text-[#4A5370]">
                founders you talk to directly
              </p>
            </div>
            <div className="transition-transform duration-200 hover:scale-[1.03] cursor-default">
              <div className="text-heading text-lg font-bold text-[#1F2A44] sm:text-2xl pt-0.5">
                Replies
              </div>
              <p className="mt-1 text-xs leading-snug text-[#4A5370]">
                within one business day
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right 5 cols: founder group photo with layered soft animations */}
        <div className="relative flex flex-col items-center lg:col-span-5 lg:items-end w-full">
          {/* Layer A: Entrance wrapper (runs once on load, 900ms, 200ms delay, fade, rise 20px, scale 0.97 to 1, de-blur 8px to 0) */}
          <motion.div
            initial={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)" }
            }
            animate={
              prefersReduced
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
            }
            transition={
              prefersReduced
                ? { duration: 0.3 }
                : { duration: 0.9, delay: 0.2, ease: TRANSITION_EASE }
            }
            onAnimationComplete={() => setIsEntered(true)}
            style={{
              willChange: prefersReduced || isEntered ? "auto" : "transform, opacity, filter",
            }}
            className="relative w-full max-w-[460px]"
          >
            {/* Layer B: Gentle float wrapper (loops forever after entrance, translateY 0 to -6px, 7s ease-in-out alternate) */}
            <motion.div
              animate={prefersReduced ? {} : { y: [0, -6, 0] }}
              transition={{
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                willChange: prefersReduced ? "auto" : "transform",
              }}
              className="relative w-full"
            >
              {/* Layer F: Cursor response / 3D Tilt wrapper (separate from Layer B, max 3 deg, spring 120/18) */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: prefersReduced ? 0 : tilt.rotateX,
                  rotateY: prefersReduced ? 0 : tilt.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  willChange: prefersReduced ? "auto" : "transform",
                }}
                className="relative w-full"
              >
                {/* Layer D: Soft breathing halo behind the frame (rgba(196, 87, 47, 0.18), opacity 0.5 to 1 over 6s infinite) */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2.5 rounded-[22px] bg-[rgba(196,87,47,0.18)] blur-xl -z-10"
                  animate={prefersReduced ? {} : { opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />

                {/* Card frame: clean hugged frame with border, rounded 16px, white background */}
                <div className="relative w-full rounded-[16px] border border-[#1F2A44]/12 bg-white p-3 shadow-sm transition-shadow duration-300">
                  {/* Layer E: Desktop badge 1 (fades in 400ms after photo = 0.6s, floats on 5.5s loop with 4px movement) */}
                  <motion.div
                    initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6,
                      ease: TRANSITION_EASE,
                    }}
                    className="hidden sm:block absolute -top-[14px] right-4 z-20"
                  >
                    <motion.div
                      animate={prefersReduced ? {} : { y: [0, -4, 0] }}
                      transition={{
                        duration: 5.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      className="flex items-center gap-2 rounded-[10px] border border-[#E2DDD5] bg-white px-3 py-1.5 shadow-md transition-transform duration-200 hover:scale-[1.03] cursor-default"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-[#25D366]">
                        <span className="h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
                      </span>
                      <span className="text-xs font-medium text-[#1F2A44]">
                        {HERO.floatingBadge1}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Layer E: Desktop badge 2 (fades in 400ms after photo = 0.6s, floats on 6.5s loop with 4px movement) */}
                  <motion.div
                    initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6,
                      ease: TRANSITION_EASE,
                    }}
                    className="hidden sm:block absolute bottom-[64px] -left-4 z-20"
                  >
                    <motion.div
                      animate={prefersReduced ? {} : { y: [0, -4, 0] }}
                      transition={{
                        duration: 6.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      className="flex items-center gap-1.5 rounded-[10px] border border-[#E2DDD5] bg-white px-3 py-1.5 shadow-md transition-transform duration-200 hover:scale-[1.03] cursor-default"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B84B23]" />
                      <span className="text-xs font-medium text-[#1F2A44]">
                        {HERO.floatingBadge2}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Layer C: Slow image drift inside clipped frame (scale 1.00 to 1.04 over 14s alternate) */}
                  <div className="overflow-hidden rounded-[10px] bg-[#F3ECE0]">
                    <motion.div
                      animate={prefersReduced ? {} : { scale: [1.00, 1.04, 1.00] }}
                      transition={{
                        duration: 14,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      className="w-full h-full origin-center"
                    >
                      <Image
                        src={HERO.founderPhoto}
                        alt={HERO.founderPhotoAlt}
                        width={1402}
                        height={1122}
                        priority
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 560px"
                        className="h-auto w-full object-cover"
                        style={{ objectPosition: "center 30%" }}
                      />
                    </motion.div>
                  </div>

                  {/* Caption sits below the image, inside the frame, never overlapped */}
                  <div className="pt-3 pb-1 text-center">
                    <p className="text-[15px] font-medium text-[#1F2A44]">
                      Adarsh, Ayush and Kumari Abhilasha
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#4A5370]">
                      MCA students and founders of AKA AI Studio
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Under 640px (< sm) mobile static row: badges never overlap caption or photo */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.6,
              ease: TRANSITION_EASE,
            }}
            className="mt-3 flex sm:hidden w-full max-w-[460px] flex-wrap items-center justify-center gap-2"
          >
            <div className="flex items-center gap-1.5 rounded-[10px] border border-[#E2DDD5] bg-white px-3 py-1.5 text-xs font-medium text-[#1F2A44] shadow-xs transition-transform duration-200 hover:scale-[1.03] cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-[#25D366]">
                <span className="h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
              </span>
              <span>{HERO.floatingBadge1}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-[10px] border border-[#E2DDD5] bg-white px-3 py-1.5 text-xs font-medium text-[#1F2A44] shadow-xs transition-transform duration-200 hover:scale-[1.03] cursor-default">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B84B23]" />
              <span>{HERO.floatingBadge2}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
