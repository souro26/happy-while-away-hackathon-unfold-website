"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Maximize2,
  Volume2,
  Cpu,
  Brain,
  ShieldCheck,
  Compass,
  FileText,
  Activity,
  ChevronRight,
  Eye,
  Zap,
  Code2,
  Network,
  Share2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { KaTeXBlock } from "@/components/ui/KaTeXBlock";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"fourier" | "attention" | "gradient">("fourier");
  const [frequency, setFrequency] = useState(3.0);
  const [harmonicsCount, setHarmonicsCount] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);

  // Attention matrix hover state
  const [hoveredTokenIndex, setHoveredTokenIndex] = useState<number>(1);
  const tokens = ["Quantum", "state", "superposition", "collapsed"];
  const attentionWeights = [
    [0.15, 0.55, 0.22, 0.08],
    [0.10, 0.72, 0.12, 0.06],
    [0.18, 0.20, 0.56, 0.06],
    [0.05, 0.12, 0.18, 0.65],
  ];

  // Gradient descent momentum state
  const [momentum, setMomentum] = useState(0.85);

  // Continuous animation frame for rotating phasor and wave time phase
  const [phasorAngle, setPhasorAngle] = useState(45);
  const [timePhase, setTimePhase] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPhasorAngle((prev) => (prev + frequency * 2) % 360);
      setTimePhase((prev) => (prev + 0.08) % (2 * Math.PI));
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, frequency]);

  // Phasor geometry
  const phasorRad = (phasorAngle * Math.PI) / 180;
  const phasorX = 140 + 55 * Math.cos(phasorRad);
  const phasorY = 90 - 55 * Math.sin(phasorRad);

  // Compute live waveform SVG path points
  const waveformPath = useMemo(() => {
    const points: string[] = [];
    const width = 360;
    const height = 180;
    const centerY = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const t = (x / width) * 4 * Math.PI;
      // Fundamental + harmonics
      let yOffset = Math.sin(t * (frequency / 2) + timePhase) * 36;
      if (harmonicsCount >= 3) {
        yOffset += (Math.sin(3 * (t * (frequency / 2) + timePhase)) * 36) / 3;
      }
      if (harmonicsCount >= 5) {
        yOffset += (Math.sin(5 * (t * (frequency / 2) + timePhase)) * 36) / 5;
      }
      if (harmonicsCount >= 7) {
        yOffset += (Math.sin(7 * (t * (frequency / 2) + timePhase)) * 36) / 7;
      }

      const y = centerY - yOffset;
      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    }
    return points.join(" ");
  }, [frequency, harmonicsCount, timePhase]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#06080F] text-[#F8F9FC]">
      <Navbar />

      <main className="flex-1 w-full pt-20">
        {/* ==========================================
            HERO SECTION: ATMOSPHERIC & AMBIENT
        ========================================== */}
        <section className="relative px-6 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Radial Lighting Bloom */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-radial-hero pointer-events-none opacity-80" />
          <div className="absolute top-36 left-1/4 w-[500px] h-[300px] bg-periwinkle-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-36 right-1/4 w-[450px] h-[300px] bg-lilac-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Drifting Ambient Mathematical Glyphs */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25">
            <span className="absolute top-12 left-10 font-mono text-2xl text-periwinkle-300/40 animate-float">
              e^(iπ) + 1 = 0
            </span>
            <span className="absolute top-28 right-16 font-mono text-xl text-icy-300/40 animate-float-slow">
              ∇ × B = μ₀J + μ₀ε₀(∂E/∂t)
            </span>
            <span className="absolute bottom-20 left-1/5 font-mono text-2xl text-lilac-300/40 animate-float">
              ∫ e^(-x²) dx = √π
            </span>
            <span className="absolute bottom-16 right-1/4 font-mono text-xl text-periwinkle-400/40 animate-float-slow">
              Softmax(QKᵀ / √d_k)
            </span>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-periwinkle-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-periwinkle-200 tracking-wider uppercase">
              UNFOLD 2.0 • COGNITIVE LEARNING ENVIRONMENT
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl leading-[1.08] mb-8">
            Understand anything.{" "}
            <span className="bg-gradient-to-r from-periwinkle-300 via-lilac-200 to-white bg-clip-text text-transparent">
              Learn everything.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-light">
            Traditional learning is fragmented across static textbooks, video pauses, and generic chatbots.
            Unfold synthesizes mathematical intuition, real-time visual canvases, and Socratic checkpoints
            into one cohesive, living environment.
          </p>

          {/* Interactive Concept Input Bar */}
          <div className="w-full max-w-3xl glass-panel-glow rounded-2xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-center gap-2.5 focus-within:border-periwinkle-400 transition-all">
            <div className="flex items-center gap-3 px-3 w-full flex-1">
              <Sparkles className="w-5 h-5 text-periwinkle-400 shrink-0 animate-pulse" />
              <input
                type="text"
                defaultValue="Explain how Fourier transforms decompose audio waveforms into harmonic sinusoids"
                className="w-full bg-transparent font-sans text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none"
                placeholder="Ask any mathematical proof, physical principle, or ML architecture..."
              />
            </div>
            <Link
              href="/app/board"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-periwinkle-500 to-indigo-600 hover:from-periwinkle-400 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-200"
            >
              <span>Unfold Concept</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sample Query Switchers */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 text-xs font-mono text-slate-400">
            <span className="uppercase text-[11px] font-semibold tracking-wider text-slate-400">
              Interactive Laboratories:
            </span>
            <button
              onClick={() => setActiveTab("fourier")}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === "fourier"
                  ? "bg-periwinkle-500/20 text-periwinkle-300 font-bold border border-periwinkle-500/50 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              Fourier Analysis
            </button>
            <button
              onClick={() => setActiveTab("attention")}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === "attention"
                  ? "bg-periwinkle-500/20 text-periwinkle-300 font-bold border border-periwinkle-500/50 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              Transformer Attention
            </button>
            <button
              onClick={() => setActiveTab("gradient")}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === "gradient"
                  ? "bg-periwinkle-500/20 text-periwinkle-300 font-bold border border-periwinkle-500/50 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              Loss Landscape Momentum
            </button>
          </div>
        </section>

        {/* ==========================================
            FLAGSHIP LIVING PRODUCT CANVAS
            (Continuous, ambient, multi-track studio)
        ========================================== */}
        <section className="relative px-4 sm:px-8 pb-28 max-w-7xl mx-auto">
          <div className="glass-panel-glow rounded-3xl overflow-hidden border border-white/15">
            {/* Top Workspace Header Bar */}
            <div className="bg-[#090D1A]/90 border-b border-white/[0.08] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-2" />
                <span className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <span className="text-slate-500">canvas /</span>
                  <span className="text-periwinkle-300 font-semibold">
                    {activeTab === "fourier"
                      ? "Fourier_Decomposition.unfold"
                      : activeTab === "attention"
                      ? "Attention_Mechanism.unfold"
                      : "Gradient_Descent.unfold"}
                  </span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-periwinkle-500/20 text-periwinkle-300 border border-periwinkle-500/30">
                  Interactive Simulation 60 FPS
                </span>
              </div>

              {/* Simulation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Resume</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setFrequency(3.0);
                    setHarmonicsCount(3);
                    setMomentum(0.85);
                  }}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Reset Parameters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <div className="h-4 w-[1px] bg-white/10" />
                <Link
                  href="/app/board"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-periwinkle-500 hover:bg-periwinkle-400 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen</span>
                </Link>
              </div>
            </div>

            {/* Canvas Body: 3-Column Interactive Orchestration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] bg-[#070B14]">
              {/* Left Column: Symbolic Derivation & Progressive Proof */}
              <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between bg-[#080D1A]/50">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Symbolic Ground Truth
                    </span>
                    <span className="text-[11px] font-mono text-mint-400 bg-mint-400/10 px-2 py-0.5 rounded border border-mint-400/20">
                      Lean 4 Verified
                    </span>
                  </div>

                  {activeTab === "fourier" && (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Continuous Fourier Transform:
                        </span>
                        <div className="text-sm overflow-x-auto text-periwinkle-200">
                          <KaTeXBlock math="\hat{f}(\xi) = \int_{-\infty}^{\infty} f(t)\, e^{-2\pi i \xi t}\, dt" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Active Harmonic Expansion ({harmonicsCount} terms):
                        </span>
                        <div className="text-sm overflow-x-auto text-lilac-200">
                          <KaTeXBlock
                            math={`f(t) \\approx \\sin(${frequency.toFixed(
                              1
                            )}t) + \\frac{1}{3}\\sin(${ (frequency * 3).toFixed(
                              1
                            ) }t) + \\dots`}
                          />
                        </div>
                      </div>

                      {/* Progressive Steps */}
                      <div className="space-y-2 mt-4 text-xs font-sans text-slate-300">
                        <div className="p-2.5 rounded-lg bg-periwinkle-500/10 border border-periwinkle-500/25">
                          <span className="font-semibold text-periwinkle-300 block mb-0.5">
                            Step 1: Complex Phasor Rotation
                          </span>
                          The factor e^(-2&pi;i&xi;t) rotates on the unit circle at frequency &xi;, projecting
                          temporal coordinates into the frequency domain.
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10">
                          <span className="font-semibold text-slate-200 block mb-0.5">
                            Step 2: Orthogonal Cancellation
                          </span>
                          Frequencies different from &xi; average to zero around the origin. Only the matching harmonic component integrates to a nonzero center of mass.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "attention" && (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Scaled Dot-Product Attention:
                        </span>
                        <div className="text-sm overflow-x-auto text-periwinkle-200">
                          <KaTeXBlock math="\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Active Query Focus:
                        </span>
                        <p className="text-xs text-slate-300">
                          Hovering token &quot;<strong className="text-periwinkle-300">{tokens[hoveredTokenIndex]}</strong>&quot;.
                          Notice how attention mass concentrates heavily on correlated semantic anchors.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "gradient" && (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Momentum Accelerated Update:
                        </span>
                        <div className="text-sm overflow-x-auto text-periwinkle-200">
                          <KaTeXBlock math="v_t = \beta v_{t-1} + \eta \nabla_\theta \mathcal{L}(\theta)" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Position Step:
                        </span>
                        <div className="text-sm overflow-x-auto text-lilac-200">
                          <KaTeXBlock math="\theta_{t+1} = \theta_t - v_t" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Engine: WebAssembly AST</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Synchronized
                  </span>
                </div>
              </div>

              {/* Center Column: The Visual Physics & SVG Laboratory */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between relative bg-vector-grid">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Interactive Visual Blackboard
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      f = {frequency.toFixed(1)} Hz | Phase = {(timePhase / Math.PI).toFixed(2)}π
                    </span>
                  </div>

                  {/* Visual Renderings depending on active tab */}
                  {activeTab === "fourier" && (
                    <div className="space-y-6">
                      {/* 1. Complex Plane Phasor Circle */}
                      <div className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center">
                        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                          <span>Complex Unit Circle: e^(-iωt)</span>
                          <span className="text-periwinkle-300">θ = {phasorAngle.toFixed(0)}°</span>
                        </div>
                        <svg className="w-full max-w-[280px] h-[180px]" viewBox="0 0 280 180">
                          {/* Grid & Axis */}
                          <line x1="20" y1="90" x2="260" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="140" y1="10" x2="140" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                          <text x="250" y="85" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">Re</text>
                          <text x="145" y="20" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">Im</text>

                          {/* Unit Circle */}
                          <circle cx="140" cy="90" r="55" fill="none" stroke="rgba(129, 140, 248, 0.3)" strokeWidth="1.5" />

                          {/* Rotating Vector Arrow */}
                          <line
                            x1="140"
                            y1="90"
                            x2={phasorX}
                            y2={phasorY}
                            stroke="#818CF8"
                            strokeWidth="2.5"
                          />
                          <circle cx={phasorX} cy={phasorY} r="4.5" fill="#38BDF8" className="shadow-[0_0_8px_#38BDF8]" />

                          {/* Projected Cosine & Sine components */}
                          <line
                            x1={phasorX}
                            y1={phasorY}
                            x2={phasorX}
                            y2="90"
                            stroke="#FB7185"
                            strokeWidth="1.5"
                            strokeDasharray="2 2"
                          />
                          <line
                            x1={phasorX}
                            y1={phasorY}
                            x2="140"
                            y2={phasorY}
                            stroke="#34D399"
                            strokeWidth="1.5"
                            strokeDasharray="2 2"
                          />
                        </svg>
                      </div>

                      {/* 2. Waveform Synthesis */}
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                          <span>Synthesized Time Domain Waveform f(t)</span>
                          <span className="text-mint-400">{harmonicsCount} Active Harmonics</span>
                        </div>
                        <svg className="w-full h-[120px]" viewBox="0 0 360 180" preserveAspectRatio="none">
                          <line x1="0" y1="90" x2="360" y2="90" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                          <path
                            d={waveformPath}
                            fill="none"
                            stroke="#818CF8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {activeTab === "attention" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 block mb-3">
                          Self-Attention Weight Distribution:
                        </span>
                        <div className="grid grid-cols-4 gap-2">
                          {tokens.map((token, colIdx) => {
                            const weight = attentionWeights[hoveredTokenIndex][colIdx];
                            return (
                              <div
                                key={token}
                                className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/10 transition-all"
                              >
                                <span className="font-mono text-xs text-slate-300 mb-2">{token}</span>
                                <div className="w-full h-24 bg-white/[0.05] rounded-lg overflow-hidden flex flex-col justify-end p-1">
                                  <div
                                    className="w-full rounded bg-gradient-to-t from-periwinkle-500 to-icy-400 transition-all duration-300"
                                    style={{ height: `${weight * 100}%` }}
                                  />
                                </div>
                                <span className="font-mono text-[11px] text-periwinkle-300 mt-2">
                                  {(weight * 100).toFixed(0)}%
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Token Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">Select Query Token:</span>
                        {tokens.map((t, idx) => (
                          <button
                            key={t}
                            onClick={() => setHoveredTokenIndex(idx)}
                            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                              hoveredTokenIndex === idx
                                ? "bg-periwinkle-500 text-white font-bold"
                                : "bg-white/[0.04] text-slate-300 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "gradient" && (
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center">
                      <span className="text-[11px] font-mono text-slate-400 w-full mb-3">
                        Non-Convex Loss Surface Trajectory (Simulated 3D Projection)
                      </span>
                      <svg className="w-full h-[220px]" viewBox="0 0 320 220">
                        {/* Iso-loss Contour Ellipses */}
                        <ellipse cx="160" cy="110" rx="130" ry="75" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                        <ellipse cx="160" cy="110" rx="90" ry="50" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
                        <ellipse cx="160" cy="110" rx="50" ry="25" fill="none" stroke="rgba(129,140,248,0.25)" strokeWidth="1" />
                        <circle cx="160" cy="110" r="4" fill="#34D399" />
                        <text x="168" y="114" fill="#34D399" fontSize="10" fontFamily="monospace">Global Min</text>

                        {/* Trajectory with momentum */}
                        <path
                          d={`M 40 40 Q ${100 + momentum * 40} ${160 - momentum * 30}, 160 110`}
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="2.5"
                          strokeDasharray="4 4"
                        />
                        <circle cx="40" cy="40" r="5" fill="#FB7185" />
                        <text x="50" y="45" fill="#FB7185" fontSize="10" fontFamily="monospace">Initial θ₀</text>

                        {/* Current rolling particle */}
                        <circle
                          cx={100 + momentum * 30}
                          cy={120 - momentum * 10}
                          r="6"
                          fill="#FBBF24"
                          className="shadow-[0_0_12px_#FBBF24]"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span>Continuous Differential Solver</span>
                  <span className="font-mono text-[11px] text-periwinkle-300">Live SVG Canvas</span>
                </div>
              </div>

              {/* Right Column: Parameters & Socratic Checkpoint */}
              <div className="lg:col-span-3 p-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] flex flex-col justify-between bg-[#080D1A]/50">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                      Parameter Dynamics
                    </span>

                    {/* Frequency Scrubber */}
                    {activeTab === "fourier" && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                            <span>Fundamental Frequency:</span>
                            <span className="text-periwinkle-300 font-bold">{frequency.toFixed(1)} Hz</span>
                          </div>
                          <input
                            type="range"
                            min="1.0"
                            max="8.0"
                            step="0.2"
                            value={frequency}
                            onChange={(e) => setFrequency(parseFloat(e.target.value))}
                            className="w-full accent-periwinkle-500 bg-white/10 rounded-lg h-1.5 cursor-pointer"
                          />
                        </div>

                        {/* Harmonics Count Selector */}
                        <div>
                          <span className="text-xs font-mono text-slate-300 block mb-1.5">
                            Harmonics Count:
                          </span>
                          <div className="grid grid-cols-4 gap-1.5">
                            {[1, 3, 5, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => setHarmonicsCount(num)}
                                className={`py-1 rounded text-xs font-mono transition-colors ${
                                  harmonicsCount === num
                                    ? "bg-periwinkle-500 text-white font-bold"
                                    : "bg-white/[0.04] text-slate-300 hover:text-white"
                                }`}
                              >
                                N={num}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "gradient" && (
                      <div>
                        <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                          <span>Momentum (&beta;):</span>
                          <span className="text-periwinkle-300 font-bold">{momentum.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min="0.10"
                          max="0.98"
                          step="0.02"
                          value={momentum}
                          onChange={(e) => setMomentum(parseFloat(e.target.value))}
                          className="w-full accent-periwinkle-500 bg-white/10 rounded-lg h-1.5 cursor-pointer"
                        />
                      </div>
                    )}
                  </div>

                  {/* Socratic Knowledge Checkpoint */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-periwinkle-400" />
                      <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        Socratic Checkpoint
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {activeTab === "fourier"
                        ? "Why does multiplying by e^(-2πiξt) reveal the amplitude of frequency ξ?"
                        : activeTab === "attention"
                        ? "Why is the dot product QKᵀ divided by √d_k?"
                        : "How does high momentum prevent getting trapped in saddle points?"}
                    </p>

                    <div className="space-y-2">
                      <button
                        onClick={() => setQuizAnswer(true)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-sans border transition-all ${
                          quizAnswer === true
                            ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-200"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300"
                        }`}
                      >
                        {activeTab === "fourier"
                          ? "A) It rotates at the exact inverse frequency, canceling phase oscillation into a constant DC offset."
                          : activeTab === "attention"
                          ? "A) It stabilizes gradients by preventing the softmax function from entering extremely flat regions."
                          : "A) It accumulates kinetic directional velocity across flat plateau gradients."}
                      </button>

                      <button
                        onClick={() => setQuizAnswer(false)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-sans border transition-all ${
                          quizAnswer === false
                            ? "bg-rose-500/15 border-rose-500/40 text-rose-200"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300"
                        }`}
                      >
                        {activeTab === "fourier"
                          ? "B) It randomly removes high-frequency noise from the waveform."
                          : activeTab === "attention"
                          ? "B) It guarantees the attention matrix is strictly orthogonal."
                          : "B) It forces the step size to decrease linearly at every epoch."}
                      </button>
                    </div>

                    {quizAnswer !== null && (
                      <div
                        className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                          quizAnswer
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                        }`}
                      >
                        {quizAnswer ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Correct! Intuition verified in first-principles memory.</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 shrink-0" />
                            <span>Re-examine: Option A explains the constructive resonance.</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    href="/explore"
                    className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono font-medium text-slate-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Browse 40+ Interactive Proofs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            STORYTELLING SECTION 1: IDEAS BECOME VISIBLE
            (Multimodal OCR & Visual Graph Compilation)
        ========================================== */}
        <section className="relative px-6 sm:px-8 py-24 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-periwinkle-500/10 border border-periwinkle-500/20 text-xs font-mono text-periwinkle-300">
                <Eye className="w-3.5 h-3.5" />
                <span>Multimodal Vision Engine</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ideas become visible in real time.
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Point Unfold at any dense academic paper, handwritten equations on a whiteboard, or an ambiguous code diagram.
                Our vision engine parses mathematical symbols and compiles them into interactive, living concept graphs instantly.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-periwinkle-500/20 text-periwinkle-300 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-sm font-semibold text-white block">
                      Sub-pixel LaTeX Recognition
                    </span>
                    <span className="font-sans text-xs text-slate-400">
                      Accurately captures intricate indices, Dirac notation, and tensor products without hallucinating variables.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-periwinkle-500/20 text-periwinkle-300 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-sm font-semibold text-white block">
                      Dynamic Visual Grounding
                    </span>
                    <span className="font-sans text-xs text-slate-400">
                      Every formula is linked directly to a responsive geometric simulation that updates live.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Simulated Document Scanner & Compiled Graph */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Simulated Document with Laser Scan */}
                <div className="relative p-5 rounded-2xl bg-[#090D1A] border border-white/10 space-y-3 overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/[0.08] pb-2">
                    <span>lecture_notes_p42.pdf</span>
                    <span className="text-periwinkle-300">Live OCR</span>
                  </div>

                  {/* Scanning Laser Line */}
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-laser-scan shadow-[0_0_12px_#38BDF8]" />

                  <div className="space-y-2 opacity-80 font-serif text-xs text-slate-300">
                    <p className="font-mono text-[10px] text-slate-500">&sect; 4.2 Time-Independent Schr&ouml;dinger Equation</p>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5 font-mono text-xs text-periwinkle-200">
                      <KaTeXBlock math="\hat{H}\psi(\mathbf{r}) = E\psi(\mathbf{r})" />
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      Where the Hamiltonian operator represents the sum of kinetic and potential energy operators...
                    </p>
                  </div>
                </div>

                {/* Compiled Interactive Semantic Graph */}
                <div className="p-5 rounded-2xl bg-[#090D1A] border border-white/10 flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/[0.08] pb-2">
                    <span>Compiled Concept Tree</span>
                    <span className="text-mint-400">Constructed</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-periwinkle-500/15 border border-periwinkle-500/30 flex items-center justify-between">
                      <span className="text-xs font-mono text-periwinkle-200 font-semibold">
                        Hamiltonian Operator (&Hcirc;)
                      </span>
                      <span className="text-[10px] font-mono bg-periwinkle-500/30 text-periwinkle-200 px-1.5 py-0.5 rounded">
                        Energy
                      </span>
                    </div>

                    <div className="h-4 border-l-2 border-dashed border-white/20 ml-6" />

                    <div className="p-2.5 rounded-xl bg-icy-500/15 border border-icy-500/30 flex items-center justify-between ml-4">
                      <span className="text-xs font-mono text-icy-200 font-semibold">
                        Eigenstate Basis (&psi;)
                      </span>
                      <span className="text-[10px] font-mono bg-icy-500/30 text-icy-200 px-1.5 py-0.5 rounded">
                        Wavefunction
                      </span>
                    </div>

                    <div className="h-4 border-l-2 border-dashed border-white/20 ml-10" />

                    <div className="p-2.5 rounded-xl bg-mint-500/15 border border-mint-500/30 flex items-center justify-between ml-8">
                      <span className="text-xs font-mono text-mint-200 font-semibold">
                        Discrete Spectrum (E<sub>n</sub>)
                      </span>
                      <span className="text-[10px] font-mono bg-mint-500/30 text-mint-200 px-1.5 py-0.5 rounded">
                        Eigenvalues
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            STORYTELLING SECTION 2: ARCHITECTURAL RIGOR
            (Zero Hallucinations vs. Generic LLM Chatbots)
        ========================================== */}
        <section className="relative px-6 sm:px-8 py-24 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-500/10 border border-mint-500/20 text-xs font-mono text-mint-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Architectural Verification &amp; Rigor</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Grounded in mathematical truth.
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Generic conversational chatbots guess plausible sounding words. Unfold couples multimodal reasoning
              with formal symbolic computation engines to guarantee 0% algebraic hallucination.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {/* Feature Dimension */}
              <div className="p-6 md:p-8 space-y-6 bg-white/[0.01]">
                <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Capability Dimension
                </span>
                <div className="space-y-8 font-sans text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Visual Demonstration</h4>
                    <p className="text-xs text-slate-400">Dynamic physics and continuous parameter manipulation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Symbolic Proof Soundness</h4>
                    <p className="text-xs text-slate-400">Correct algebraic steps in calculus, linear algebra, and logic.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pedagogical Interaction</h4>
                    <p className="text-xs text-slate-400">Active learning versus passive consumption of text walls.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Multimodal Context</h4>
                    <p className="text-xs text-slate-400">Understanding whole screen state, diagrams, and textbook layouts.</p>
                  </div>
                </div>
              </div>

              {/* Standard AI Chatbots */}
              <div className="p-6 md:p-8 space-y-6 bg-white/[0.01]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-rose-300 uppercase tracking-wider">
                    Generic LLM Chatbots
                  </span>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Frequent Hallucination
                  </span>
                </div>
                <div className="space-y-8 font-sans text-sm text-slate-400">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-xs">Static ASCII approximations or non-interactive code snippets.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-xs">Drifts into erroneous arithmetic and hallucinated theorems.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-xs">Passively dumps full solutions without cognitive engagement.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-xs">Restricted to pasted text snippets or clunky image uploads.</span>
                  </div>
                </div>
              </div>

              {/* Unfold Cognitive Studio */}
              <div className="p-6 md:p-8 space-y-6 bg-periwinkle-500/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-periwinkle-300 uppercase tracking-wider">
                    Unfold Cognitive Environment
                  </span>
                  <span className="text-[10px] font-mono text-mint-400 bg-mint-400/10 px-2 py-0.5 rounded border border-mint-400/20">
                    Formally Grounded
                  </span>
                </div>
                <div className="space-y-8 font-sans text-sm text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-periwinkle-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium">Real-time 60 FPS vector canvases with parametric scrubbers.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-periwinkle-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium">Coupled with Lean 4 &amp; symbolic solvers for 100% verifiable proofs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-periwinkle-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium">Interactive Socratic checkpoints and diagnostic misconception testing.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-periwinkle-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium">Native sub-pixel screen perception and live document compilation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SCHOLARLY & RESEARCH VALIDATION
        ========================================== */}
        <section className="relative px-6 sm:px-8 py-20 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <p className="font-serif italic text-sm text-slate-300 leading-relaxed">
                &ldquo;Visual intuition is the primary bridge between rote memorization and true mathematical fluency.
                Unfold represents the first system that lets students directly manipulate theoretical abstractions.&rdquo;
              </p>
              <div>
                <span className="font-sans text-xs font-semibold text-white block">Dr. Sarah Vance</span>
                <span className="font-mono text-[11px] text-slate-400">Department of Mathematics, MIT</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <p className="font-serif italic text-sm text-slate-300 leading-relaxed">
                &ldquo;By coupling symbolic kernel checking with interactive blackboard projections, Unfold eliminates
                the dangerous algebraic hallucinations typical of contemporary LLMs.&rdquo;
              </p>
              <div>
                <span className="font-sans text-xs font-semibold text-white block">Prof. Marcus Sterling</span>
                <span className="font-mono text-[11px] text-slate-400">Cognitive Systems Lab, Stanford</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <p className="font-serif italic text-sm text-slate-300 leading-relaxed">
                &ldquo;Our undergraduate physics cohorts grasped quantum harmonic oscillators in a single session
                using Unfold&apos;s real-time phase space and eigenvalue visualizations.&rdquo;
              </p>
              <div>
                <span className="font-sans text-xs font-semibold text-white block">Elena Rostova</span>
                <span className="font-mono text-[11px] text-slate-400">Theoretical Physics, Oxford</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            CINEMATIC CALL TO ACTION
        ========================================== */}
        <section className="relative px-6 sm:px-8 py-28 max-w-7xl mx-auto overflow-hidden">
          <div className="relative glass-panel-glow rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center border border-white/20 overflow-hidden">
            {/* Center Radial Portal Glow */}
            <div className="absolute inset-0 bg-radial-portal pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono text-periwinkle-200">
                <Sparkles className="w-3.5 h-3.5 text-lilac-200" />
                <span>Begin First-Principles Learning Today</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Understand anything. <br />
                <span className="bg-gradient-to-r from-periwinkle-300 via-lilac-200 to-white bg-clip-text text-transparent">
                  Learn everything.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Join thousands of researchers, engineers, and curious minds who learn with visual clarity and mathematical rigor.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/app/board"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-periwinkle-500 to-indigo-600 hover:from-periwinkle-400 hover:to-indigo-500 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.5)] border border-white/20 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4 text-lilac-200" />
                  <span>Launch Live Canvas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/explore"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/10 text-white font-medium text-base px-8 py-3.5 rounded-xl border border-white/15 transition-all duration-200"
                >
                  <span>Explore Interactive Proofs</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
