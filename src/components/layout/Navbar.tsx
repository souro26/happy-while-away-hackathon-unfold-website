"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles, Terminal } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#06080F]/75 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto h-20 px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-periwinkle-500 to-indigo-700 flex items-center justify-center text-white font-display font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-white/20 group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-display font-semibold text-2xl tracking-tight text-white group-hover:text-periwinkle-300 transition-colors">
              Unfold
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-sans font-medium text-slate-300">
            <Link
              href="/product"
              className="hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-white transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/explore"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Explore</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-periwinkle-500/20 text-periwinkle-300 border border-periwinkle-500/30">
                Live Labs
              </span>
            </Link>
            <Link
              href="/about"
              className="hover:text-white transition-colors"
            >
              Philosophy
            </Link>
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-sans font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/app/board"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-periwinkle-500 to-indigo-600 hover:from-periwinkle-400 hover:to-indigo-500 text-white text-sm font-sans font-semibold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.35)] border border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-lilac-200" />
            <span>Launch Canvas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/app/board"
            className="text-xs bg-periwinkle-500 text-white font-semibold px-3 py-1.5 rounded-lg shadow-sm"
          >
            Launch
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#090D1A]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4">
          <Link
            href="/product"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Product Overview
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-base font-medium text-slate-200 hover:text-white"
          >
            How it Works
          </Link>
          <Link
            href="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-base font-medium text-slate-200 hover:text-white flex items-center justify-between"
          >
            <span>Explore Proofs</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-periwinkle-500/20 text-periwinkle-300 border border-periwinkle-500/30">
              Live
            </span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Philosophy
          </Link>
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-white/10 text-sm font-medium text-slate-200"
            >
              Sign In
            </Link>
            <Link
              href="/app/board"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-periwinkle-500 to-indigo-600 text-white text-sm font-semibold shadow-md"
            >
              Launch Canvas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
