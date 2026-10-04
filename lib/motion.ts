/**
 * ──────────────────────────────────────────────────────────
 * Centralized Animation Tokens & Motion Variants
 * ──────────────────────────────────────────────────────────
 * All timing, easing curves, and reusable motion variants live here.
 * Smooth, confident, and professional — never flashy.
 * Hardware-accelerated: transforms and opacity only (200 to 700ms).
 * Strict adherence to cubic-bezier(0.22, 1, 0.36, 1).
 * ──────────────────────────────────────────────────────────
 */

export const TRANSITION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.2,       // 200ms
  normal: 0.35,    // 350ms
  reveal: 0.55,    // 550ms
  slow: 0.7,       // 700ms
};

// 1. Headline word reveal (fade + slide up 12px, 60ms stagger)
export const wordReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.1 + i * 0.06,
      ease: TRANSITION_EASE,
    },
  }),
};

// 2. Section Heading Accent Line Draw
export const accentLineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: DURATION.reveal,
      ease: TRANSITION_EASE,
    },
  },
};

// 3. Project Card Clip-Path Wipe Reveal + Hover Zoom
export const cardWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: TRANSITION_EASE,
    },
  },
};

// 4. Button interaction presets (2px lift, 0.98 press)
export const buttonMotion = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1,
    transition: { duration: DURATION.fast, ease: TRANSITION_EASE },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Arrow slide 4px
export const arrowSlide = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { duration: DURATION.fast, ease: TRANSITION_EASE },
  },
};

// 5. Mobile Sticky Bottom Bar entrance
export const stickyBarMotion = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION.normal, ease: TRANSITION_EASE },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: DURATION.fast, ease: TRANSITION_EASE },
  },
};

// 6. Page route transitions (app/template.tsx)
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: TRANSITION_EASE },
  },
};

// 7. Mobile Menu Drawer
export const mobileMenuDrawer = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: { duration: 0.35, ease: TRANSITION_EASE },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: TRANSITION_EASE },
  },
};

export const mobileBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: TRANSITION_EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: TRANSITION_EASE },
  },
};

// 8. Form error horizontal shake (transform only, 300ms)
export const formShake = {
  shake: {
    x: [0, -8, 8, -6, 6, 0],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// 9. Highlighter sweep effect
export const highlightSweep = {
  hidden: { backgroundSize: "0% 100%" },
  visible: {
    backgroundSize: "100% 100%",
    transition: { duration: 0.6, ease: TRANSITION_EASE },
  },
};

// 10. Milestone pop-in (scale 0.6 to 1 with small overshoot)
export const milestoneDotPop = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
};

// 11. Generic fade & slide reveals
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.reveal, ease: TRANSITION_EASE },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: TRANSITION_EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.reveal, ease: TRANSITION_EASE },
  },
};

// Floating loop for badges
export const floatAnimation = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Micro-interaction: icon wiggle on hover
export const iconWiggle = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -8, 8, -4, 4, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Micro-interaction: badge / stat scale on hover
export const hoverScaleSmall = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: TRANSITION_EASE },
  },
};

// Hero Photo Layered Animations
export const heroPhotoEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.2,
      ease: TRANSITION_EASE,
    },
  },
  reduced: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const heroPhotoFloat = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const heroPhotoDrift = {
  animate: {
    scale: [1.00, 1.04, 1.00],
    transition: {
      duration: 14,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const heroPhotoHalo = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const heroBadgeFloat1 = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const heroBadgeFloat2 = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 6.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
