"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function FadeImage({ alt, className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      className={cn(
        "transition-all duration-400 ease-out",
        loaded ? "opacity-100 blur-0" : "opacity-0 blur-xs",
        className
      )}
      onLoad={(e) => {
        setLoaded(true);
        if (onLoad) onLoad(e);
      }}
      {...props}
    />
  );
}
