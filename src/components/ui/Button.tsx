import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "chalk";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-unfold-blue hover:bg-unfold-blue-hover text-white shadow-sm focus-visible:ring-unfold-blue",
    secondary:
      "bg-white hover:bg-neutral-50 text-unfold-slate border border-unfold-border shadow-sm focus-visible:ring-unfold-blue",
    outline:
      "bg-transparent border border-unfold-border hover:bg-neutral-100 text-unfold-slate",
    ghost:
      "bg-transparent hover:bg-black/5 text-unfold-charcoal hover:text-unfold-slate",
    chalk:
      "bg-blue-950/60 hover:bg-blue-900/70 text-blue-300 border border-blue-600/40 shadow-sm",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2",
    lg: "text-base px-6 py-3 rounded-lg gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
