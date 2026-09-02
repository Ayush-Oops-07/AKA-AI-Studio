import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 text-center">
      <span className="text-mono-eyebrow gradient-text">404 Error</span>
      <h1 className="text-display mt-4 text-4xl font-semibold text-ink sm:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-ink-dim sm:text-base">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
        <Button href="/work" variant="ghost" showArrow={false}>
          View Our Work
        </Button>
      </div>
    </div>
  );
}
