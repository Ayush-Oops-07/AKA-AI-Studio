"use client";

import { useEffect, useState } from "react";
import { Star, Loader2, MessageSquarePlus, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { Review } from "@/types";

const TABLE = "reviews";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data, error: fetchError } = await supabase
        .from(TABLE)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(12);

      if (!active) return;
      if (fetchError) {
        setError("Couldn't load reviews right now.");
      } else {
        setReviews((data as Review[]) ?? []);
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
            eyebrow="Client Trust"
            title="What our clients actually say."
            description="Real feedback from the businesses we've built websites for — no stock quotes, no fake logos."
          />
          <Reveal delay={0.1}>
            <button
              onClick={() => setShowForm((s) => !s)}
              className="glass-strong inline-flex shrink-0 items-center gap-2 rounded-pill px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/70"
            >
              <MessageSquarePlus className="h-4 w-4" />
              {showForm ? "Cancel" : "Write a Review"}
            </button>
          </Reveal>
        </div>

        {showForm && (
          <div className="mt-10">
            <ReviewForm onSuccess={handleNewReview} />
          </div>
        )}

        {!isSupabaseConfigured && (
          <div className="mt-10 glass-card p-6 text-sm text-ink-dim">
            Review storage isn&apos;t connected yet — add <code className="rounded bg-white/60 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
            <code className="rounded bg-white/60 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your environment variables to start
            collecting real reviews here.
          </div>
        )}

        {isSupabaseConfigured && loading && (
          <div className="mt-14 flex items-center justify-center gap-2 text-sm text-ink-faint">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading reviews...
          </div>
        )}

        {isSupabaseConfigured && !loading && error && (
          <p className="mt-10 text-sm text-ink-faint">{error}</p>
        )}

        {isSupabaseConfigured && !loading && !error && reviews.length === 0 && (
          <div className="mt-14 glass-card p-8 text-center text-sm text-ink-dim">
            No reviews yet — be the first client to share your experience.
          </div>
        )}

        {isSupabaseConfigured && reviews.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.id} delay={Math.min(i * 0.06, 0.3)}>
                <div className="glass-card h-full p-7">
                  <div className="flex gap-1 text-violet">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${idx < r.rating ? "fill-current" : "fill-none text-border-strong"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-ink">&ldquo;{r.message}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-sm font-semibold text-white">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{r.name}</p>
                      {r.business && <p className="text-xs text-ink-faint">{r.business}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewForm({ onSuccess }: { onSuccess: (review: Review) => void }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — real users never fill this
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (website) return; // bot caught by honeypot, silently ignore
    if (!name.trim() || !message.trim()) {
      setFormError("Please add your name and a short review.");
      return;
    }
    if (!supabase) {
      setFormError("Reviews aren't connected yet — ask the studio to finish Supabase setup.");
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
      setFormError("Something went wrong submitting your review. Please try again.");
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
        <p className="text-sm text-ink-dim">It&apos;s live on this page right now.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-2xl space-y-5 p-8">
      {/* Honeypot field — hidden from real users, bots tend to fill every input */}
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
          <label className="mb-2 block text-sm font-medium text-ink">Business (optional)</label>
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Mohit Enterprise Group"
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
        <label className="mb-2 block text-sm font-medium text-ink">Your review</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder="Tell us how your website turned out..."
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
