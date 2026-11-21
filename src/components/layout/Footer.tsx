import React from "react";
import Link from "next/link";
import { Sparkles, Terminal, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#06080F] border-t border-white/[0.08] py-16 px-6 sm:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-periwinkle-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-periwinkle-500 to-indigo-700 flex items-center justify-center text-white font-display font-bold text-base shadow-[0_0_12px_rgba(99,102,241,0.35)]">
              U
            </div>
            <span className="font-display font-semibold text-2xl tracking-tight text-white">
              Unfold
            </span>
          </div>
          <p className="font-sans text-sm text-slate-400 leading-relaxed">
            Understand anything. Learn everything. The AI visual learning
            environment engineered for first-principles comprehension and mathematical rigor.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 w-fit">
            <span className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
            <span>Formal Verification: Lean 4 Kernel Online</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-14 text-sm font-sans text-slate-400">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Cognitive Labs
            </span>
            <Link href="/product" className="hover:text-periwinkle-300 transition-colors">
              Visual Blackboard
            </Link>
            <Link href="/how-it-works" className="hover:text-periwinkle-300 transition-colors">
              Multimodal Screen Vision
            </Link>
            <Link href="/explore" className="hover:text-periwinkle-300 transition-colors">
              Interactive Proofs
            </Link>
            <Link href="/app/board" className="hover:text-periwinkle-300 transition-colors">
              Live Workspace
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Research &amp; Identity
            </span>
            <Link href="/about" className="hover:text-periwinkle-300 transition-colors">
              Product Philosophy
            </Link>
            <Link href="/login" className="hover:text-periwinkle-300 transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="hover:text-periwinkle-300 transition-colors">
              Create Account
            </Link>
            <a
              href="https://arxiv.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-periwinkle-300 transition-colors"
            >
              Pedagogical Papers
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Compliance &amp; Rigor
            </span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Security Architecture</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Zero Hallucination Protocol</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Privacy &amp; Data Ethics</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 relative z-10">
        <span>&copy; {new Date().getFullYear()} Unfold Cognitive Systems Inc. All rights reserved.</span>
        <span>Engineered with mathematical rigor &amp; continuous visual motion.</span>
      </div>
    </footer>
  );
}
