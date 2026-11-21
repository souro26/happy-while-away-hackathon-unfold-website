import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Wispr Flow & Deep Space inspired palette
        midnight: {
          950: "#06080F",
          900: "#090D1A",
          850: "#0D1322",
          800: "#131C31",
          700: "#1E2B4A",
          600: "#2B3C66",
        },
        periwinkle: {
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        lilac: {
          200: "#E9D5FF",
          300: "#DDD6FE",
          400: "#C4B5FD",
          500: "#A855F7",
        },
        icy: {
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        mint: {
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
        },
        coral: {
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
        },
        amber: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "laser-scan": {
          "0%, 100%": { transform: "translateY(0%)", opacity: "0.8" },
          "50%": { transform: "translateY(100%)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "wave-drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "laser-scan": "laser-scan 4s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "wave-drift": "wave-drift 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
