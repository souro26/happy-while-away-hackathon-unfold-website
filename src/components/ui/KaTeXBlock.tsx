"use client";

import React, { useEffect, useRef } from "react";
import katex from "katex";
import { cn } from "@/lib/utils";

interface KaTeXBlockProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

export function KaTeXBlock({
  math,
  displayMode = true,
  className,
}: KaTeXBlockProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode,
          throwOnError: false,
        });
      } catch (err) {
        console.error("KaTeX rendering error:", err);
      }
    }
  }, [math, displayMode]);

  return (
    <span
      ref={containerRef}
      className={cn("katex-rendered inline-block font-mono", className)}
    />
  );
}
