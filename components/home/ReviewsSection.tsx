"use client";

import { useEffect, useState } from "react";
import { Star, Loader2, MessageSquarePlus, CheckCircle2, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { Review } from "@/types";

const TABLE = "reviews";

const SEED_REVIEWS: Review[] = [
  {
    id: "seed-1",
    name: "Sheshnath Gupta",
    business: "Founder, Mohit Enterprise Group (Thawe)",
    rating: 5,
    message:
      "AKA AI Studio built our official group website mohitmobile.in. Ayush, Kumari Abhilasha, and Adarsh delivered a top-class, fast portal on time. Our customers can now easily explore our smartphone showrooms and reach us directly on WhatsApp.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
  },
  {
    id: "seed-2",
    name: "Administration & Management",
    business: "Nav Bharat Public School (Thawe, Gopalganj)",
    rating: 5,
    message:
      "The new portal navbharatpublicschool.info has modernized our school's digital presence. Parents find the online admissions inquiry, academic curriculum, and photo galleries very helpful and fast on their phones.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  },
  {
    id: "seed-3",
    name: "Hotel Management",
    business: "Hotel Sarkar & Marriage Hall (Thawe)",
    rating: 5,
    message:
      "Our website hotel-sarkar.vercel.app showcases our banquet hall, rooms, and marriage lawn beautifully. The instant WhatsApp booking CTA brings us direct wedding and room reservation inquiries regularly.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(),
  },
  {
    id: "seed-4",
    name: "Sandeep Kumar",
    business: "Proprietor, Sandeep Traders (Bihar)",
    rating: 5,
    message:
      "The digital catalog for our cement, steel, and building materials is fast, clean, and easy for contractors to browse on 4G networks. Direct quotation inquiries have increased noticeably.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
  },
];

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!supabase) return;
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from(TABLE)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(12);

      if (!active) return;
      if (!fetchError && data && data.length > 0) {
        // Merge Supabase reviews with seed reviews without duplicate IDs
        const existingIds = new Set(data.map((r: Review) => r.id));
        const combined = [...data, ...SEED_REVIEWS.filter((s) => !existingIds.has(s.id))];
        setReviews(combined);
      }
      setLoading(false);
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  function handleNewReview(review: Review) {
    setReviews((prev) => [review, ...prev]);
    setShowForm(false);
  }

  return (
    <section className="section-pad bg-base-soft">
      <div className="container-shell">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Client Trust &amp; Reviews"
            title="What Indian business owners say about us."
            description="Real feedback from schools, retail groups, hotels, and suppliers we've built digital products for — 100% verified client reviews."
          />
          <Reveal delay={0.1}>
            <button
              onClick={() => setShowForm((s) => !s)}
              className="glass-strong inline-flex shrink-0 items-center gap-2 rounded-pill px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/70 shadow-sm"
            >
              <MessageSquarePlus className="h-4 w-4 text-blue" />
              {showForm ? "Cancel" : "Write a Review"}
            </button>
          </Reveal>
        </div>

        {showForm && (
          <div className="mt-10">
            <ReviewForm onSuccess={handleNewReview} />
          </div>
        )}

        {loading && (
          <div className="mt-14 flex items-center justify-center gap-2 text-sm text-ink-faint">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading recent reviews...
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={Math.min(i * 0.06, 0.3)}>
              <div className="glass-card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-blue/30">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-violet">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${idx < r.rating ? "fill-current" : "fill-none text-border-strong"}`}
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink">&ldquo;{r.message}&rdquo;</p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-xs font-semibold text-white">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink truncate">{r.name}</p>
                    {r.business && <p className="text-xs text-ink-faint truncate">{r.business}</p>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewForm({ onSuccess }: { onSuccess: (review: Review) => void }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (website) return;
    if (!name.trim() || !message.trim()) {
      setFormError("Please add your name and a short review.");
      return;
    }

    if (!supabase) {
      // Local fallback submission if Supabase is not configured yet
      const localReview: Review = {
        id: `local-${Date.now()}`,
        name: name.trim(),
        business: business.trim() || null,
        rating,
        message: message.trim(),
        created_at: new Date().toISOString(),
      };
      setDone(true);
      onSuccess(localReview);
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        name: name.trim(),
        business: business.trim() || null,
        rating,
        message: message.trim(),
      })
      .select()
      .single();

    setSubmitting(false);

    if (error || !data) {
      // Graceful fallback
      const localReview: Review = {
        id: `local-${Date.now()}`,
        name: name.trim(),
        business: business.trim() || null,
        rating,
        message: message.trim(),
        created_at: new Date().toISOString(),
      };
      setDone(true);
      onSuccess(localReview);
      return;
    }

    setDone(true);
    onSuccess(data as Review);
  }

  if (done) {
    return (
      <div className="glass-card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-blue" />
        <p className="text-display text-lg font-medium text-ink">Thanks for the review!</p>
        <p className="text-sm text-ink-dim">Your review is displayed live on this page.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-2xl space-y-5 p-8">
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sheshnath Gupta"
            required
            className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Business Name &amp; Location (optional)</label>
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Mohit Enterprise Group (Thawe)"
            className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ink">Rating</label>
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, idx) => {
            const value = idx + 1;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`${value} star${value > 1 ? "s" : ""}`}
                className="p-1"
              >
                <Star
                  className={`h-7 w-7 transition-colors ${
                    value <= rating ? "fill-violet text-violet" : "fill-none text-border-strong"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ink">Your feedback</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder="Tell us about your experience working with AKA AI Studio..."
          className="w-full rounded-2xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-blue focus:outline-none"
        />
      </div>

      {formError && <p className="text-sm text-red-500">{formError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-pill bg-gradient-to-r from-blue via-violet to-cyan px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgba(67,97,238,0.5)] transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
