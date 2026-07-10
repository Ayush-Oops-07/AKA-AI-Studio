import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function GlassCard({ children, className, as = "div" }: GlassCardProps) {
  const Comp = as;
  return (
    <Comp className={cn("glass-card p-6 md:p-8", className)}>{children}</Comp>
  );
}
