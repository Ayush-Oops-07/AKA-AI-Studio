import { cn } from "@/lib/utils";

/**
 * Custom AKA AI Studio logomark.
 * Three overlapping strokes (Ayush, Komal, Anushka) converge into a single
 * peak — one studio, three founders — inside a soft gradient badge.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aka-logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4361ee" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22c9e0" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#aka-logo-bg)" />
      {/* Three peaks converging into one — Ayush, Komal & Anushka, one studio */}
      <path d="M13 28.5L20 15.5L22.2 19.7L17.4 28.5H13Z" fill="white" fillOpacity="0.55" />
      <path d="M27 28.5L20 15.5L17.8 19.7L22.6 28.5H27Z" fill="white" fillOpacity="0.55" />
      <path d="M20 11L26.3 28.5H23L20 20.4L17 28.5H13.7L20 11Z" fill="white" />
    </svg>
  );
}
