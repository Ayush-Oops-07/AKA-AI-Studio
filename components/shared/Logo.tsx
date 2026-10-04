import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/images/logo.jpeg"
      alt="AKA AI Studio logo"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[6px] object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
