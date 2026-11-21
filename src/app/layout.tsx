import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unfold — Understand anything. Learn everything.",
  description:
    "An AI learning environment that transforms complex ideas into clear, visual, interactive explanations.",
  keywords: [
    "AI learning",
    "visual explanations",
    "STEM education",
    "blackboard AI",
    "interactive proofs",
    "screen tutor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${mono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#06080F] text-[#F8F9FC] font-sans antialiased selection:bg-periwinkle-500/30 selection:text-periwinkle-300">
        {children}
      </body>
    </html>
  );
}
