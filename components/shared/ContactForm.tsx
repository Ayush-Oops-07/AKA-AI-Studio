"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/constants/data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Hi AKA AI Studio, I'm ${name || "someone"}${businessName ? ` from ${businessName}` : ""}.`,
      message || "I'd like to talk about building a website.",
    ];
    const waLink = CONTACT.whatsappHrefWithMessage(lines.join(" "));

    window.open(waLink, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-card flex h-full flex-col items-center justify-center p-10 text-center">
        <MessageCircle className="h-10 w-10 text-blue" />
        <h3 className="text-display mt-4 text-xl font-medium text-ink">Opening WhatsApp...</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-dim">
          Your message is ready to send. If WhatsApp didn&apos;t open automatically,{" "}
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-medium text-blue underline">
            tap here
          </a>
          .
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-medium text-ink-dim underline hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card space-y-5 p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sheshnath Gupta"
            required
            className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Business (optional)</label>
          <input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Mohit Enterprise Group"
            className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">What are you looking to build?</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Tell us a bit about your business and what you need..."
          className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-blue via-violet to-cyan px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgba(67,97,238,0.5)] transition-transform hover:scale-[1.01]"
      >
        <MessageCircle className="h-4 w-4" />
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-ink-faint">
        This opens WhatsApp with your message pre-filled — nothing sends until you hit send there.
      </p>
    </motion.form>
  );
}
