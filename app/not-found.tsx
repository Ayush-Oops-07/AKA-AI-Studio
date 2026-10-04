import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="flex min-h-[75vh] flex-col items-center justify-center px-4 pt-32 text-center"
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div className="container-main max-w-md">
        <span className="text-eyebrow">404 Error</span>
        <h1 className="text-heading mt-4 text-3xl font-medium text-[#1F2A44] sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#4A5370]">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
          <Button href="/work" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
