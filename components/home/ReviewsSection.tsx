"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Star,
  Loader2,
  MessageSquarePlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { supabase } from "@/lib/supabaseClient";
import { SEED_REVIEWS } from "@/data/content";
import type { Review } from "@/data/content";

const TABLE = "reviews";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const prefersReduced = useReducedMotion();

  // Embla Autoplay plugin configuration: 5s delay, pause on hover/focus/drag
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 30 },
    prefersReduced ? [] : [autoplayRef.current]
  );

  // Resume autoplay 2 seconds after pointer/touch interaction ends
  useEffect(() => {
    if (!emblaApi || prefersReduced) return;

    let resumeTimeout: NodeJS.Timeout;

    const onPointerUp = () => {
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        autoplayRef.current?.play();
      }, 2000);
    };

    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      clearTimeout(resumeTimeout);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, prefersReduced]);

  // Track active slide index and snap list
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );

  // Load reviews from Supabase if configured
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
        const existingIds = new Set(data.map((r: Review) => r.id));
        const combined = [
          ...data,
          ...SEED_REVIEWS.filter((s) => !existingIds.has(s.id)),
        ];
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
    emblaApi?.scrollTo(0);
  }

  return (
    <section
      id="reviews"
      className="section-spacing overflow-x-clip"
      style={{ backgroundColor: "#F3ECE0" }}
    >
      <div className="container-main">
        {/* Header & Write Review toggle */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Real feedback from real businesses."
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              {/* Carousel navigation buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#E2DDD5] bg-white text-[#1F2A44] transition-all hover:bg-[#FBF6EE] active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#E2DDD5] bg-white text-[#1F2A44] transition-all hover:bg-[#FBF6EE] active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={() => setShowForm((s) => !s)}
                className="btn btn-outline shrink-0 text-sm"
              >
                <MessageSquarePlus className="h-4 w-4" />
                {showForm ? "Cancel" : "Write a Review"}
              </button>
            </div>
          </Reveal>
        </div>

        {/* Review form */}
        {showForm && (
          <div className="mt-10">
            <ReviewForm onSuccess={handleNewReview} />
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="mt-14 flex items-center justify-center gap-2 text-sm text-[#4A5370]">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading reviews...
          </div>
        )}

        {/* Embla Carousel Viewport */}
        <div
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Client reviews carousel"
          aria-live="off"
          className="mt-12 outline-none focus-visible:ring-2 focus-visible:ring-[#B84B23]/30"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {reviews.map((r, i) => (
                <div
                  key={r.id || `review-${i}`}
                  className="min-w-0 pl-4 flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23]/50 hover:shadow-md">
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 text-[#F2B705]">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-4 w-4 ${
                              idx < r.rating
                                ? "fill-current"
                                : "fill-none text-[#E2DDD5]"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="mt-3.5 text-sm leading-relaxed text-[#1F2A44]">
                        &ldquo;{r.message}&rdquo;
                      </p>
                    </div>

                    {/* Author badge */}
                    <div className="mt-6 flex items-center gap-3 border-t border-[#E2DDD5]/70 pt-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B84B23] text-xs font-bold text-white shadow-xs">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#1F2A44]">
                          {r.name}
                        </p>
                        {r.business && (
                          <p className="truncate text-xs text-[#4A5370]">
                            {r.business}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator dots with active 5-second progress fill */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className="relative h-2 overflow-hidden rounded-full transition-all duration-300 bg-[#CFC8BD] hover:bg-[#8B91A5]"
                  style={{ width: isActive ? "32px" : "8px" }}
                >
                  {isActive && !prefersReduced && (
                    <span
                      key={`progress-${selectedIndex}`}
                      className="absolute inset-0 bg-[#B84B23] rounded-full"
                      style={{
                        animation: "progressFill 5s linear forwards",
                      }}
                    />
                  )}
                  {isActive && prefersReduced && (
                    <span className="absolute inset-0 bg-[#B84B23] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Review submission form ─── */

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
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-[#0B3D2E]" />
        <p className="text-heading text-lg font-semibold text-[#1F2A44]">
          Thanks for your review!
        </p>
        <p className="text-sm text-[#4A5370]">
          Your review is now displayed on this page.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card mx-auto max-w-2xl space-y-5 p-7"
    >
      {/* Honeypot */}
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
          <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
            className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-3 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
            Business name and location (optional)
          </label>
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="e.g. Mohit Enterprise Group, Thawe"
            className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-3 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
          Rating
        </label>
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, idx) => {
            const value = idx + 1;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`${value} star${value > 1 ? "s" : ""}`}
                className="p-1 transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  className={`h-7 w-7 transition-colors ${
                    value <= rating
                      ? "fill-[#F2B705] text-[#F2B705]"
                      : "fill-none text-[#E2DDD5]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
          Your feedback
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder="Tell us about your experience working with AKA AI Studio..."
          className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-3 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
        />
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>

      <p className="text-center text-xs text-[#6B7280]">
        By submitting, you agree to our{" "}
        <Link
          href="/privacy"
          className="text-[#B84B23] underline underline-offset-2 hover:text-[#A8431F]"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
