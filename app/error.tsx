"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log minimal non-sensitive telemetry if needed
  }, [error]);

  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-[#FBF6EE] px-4 pt-32 text-center">
      <div className="container-main max-w-md">
        <span className="text-eyebrow">Something went wrong</span>
        <h1 className="text-heading mt-4 text-3xl font-medium text-[#1F2A44] sm:text-5xl">
          Unexpected Error
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#4A5370]">
          We encountered an unexpected issue while loading this page. Please try refreshing or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary"
          >
            <RefreshCw className="h-4 w-4" /> Try Again
          </button>
          <Button href="/" variant="outline">
            <Home className="h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
