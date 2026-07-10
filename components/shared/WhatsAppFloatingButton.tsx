"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/constants/data";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AKA AI Studio on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.386.638 4.716 1.85 6.756L3.87 29l7.42-1.945a12.94 12.94 0 0 0 4.714.897h.005C22.633 27.952 28 22.575 28 15.948 28 8.377 22.632 3 16.004 3zm0 23.05h-.004a10.7 10.7 0 0 1-4.19-.844l-.3-.128-3.302.866.88-3.222-.198-.33a10.66 10.66 0 0 1-1.79-6.388c0-5.87 4.782-10.652 10.658-10.652 5.877 0 10.658 4.782 10.658 10.654 0 5.87-4.781 10.044-10.412 10.044zm5.845-7.98c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.694.08-.32-.16-1.352-.498-2.575-1.588-.952-.849-1.595-1.898-1.782-2.218-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.377-.26-.626-.524-.542-.72-.552l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.669 0 1.574 1.147 3.094 1.307 3.307.16.213 2.257 3.446 5.467 4.833.764.33 1.36.527 1.826.674.767.244 1.465.21 2.017.127.615-.092 1.892-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.294-.214-.614-.374z" />
      </svg>
    </motion.a>
  );
}
