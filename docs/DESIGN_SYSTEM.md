# Unfold — Design System Specifications

## 1. Aesthetic Vision: The Dual-Experience Paradigm
Unfold rejects generic AI SaaS templates (avoiding ubiquitous purple gradients, random floating glowing orbs, and copy-paste cards). Instead, Unfold establishes a purposeful **Dual-Experience Identity**:

1. **The Public Marketing Experience (Light Editorial)**:
   * **Tone**: Academic, authoritative, crisp, spacious, inviting.
   * **Inspiration**: High-end publications (Stripe Press, Brilliant.org, Figma design docs).
   * **Philosophy**: Clear typography, high information density, generous whitespace, tangible product previews.

2. **The Learning Application Experience (Deep Focus Canvas)**:
   * **Tone**: Studio-grade, dark-mode focused, tactile, distraction-free.
   * **Inspiration**: Modern IDEs, creative tools (Linear, Desmos, Excalidraw, Figma).
   * **Philosophy**: The canvas takes center stage. Controls recede until hovered or activated. High-contrast math and diagram elements guide learner attention.

---

## 2. Color Palette & Semantic Tokens

### A. Public Website (Light Mode)
```css
:root {
  /* Backgrounds & Surfaces */
  --bg-marketing: #FBFBFA;         /* Warm ivory editorial canvas */
  --surface-card: #FFFFFF;         /* Crisp white card surface */
  --surface-subtle: #F4F4F1;       /* Subtle warm gray for contrast */
  --surface-hover: #ECECE8;        /* Interactive hover state */
  
  /* Text & Content */
  --text-primary: #121417;         /* Deep slate-black */
  --text-secondary: #4A5059;       /* Editorial charcoal */
  --text-muted: #747C87;           /* Soft muted caption text */
  --text-inverse: #FFFFFF;
  
  /* Brand Accents */
  --brand-primary: #2563EB;        /* Unfold Royal Blue */
  --brand-primary-hover: #1D4ED8;
  --brand-accent: #7C3AED;         /* Deep violet accent */
  --brand-highlight: #F59E0B;      /* Warm amber for key concepts */
  
  /* Borders & Dividers */
  --border-light: rgba(18, 20, 23, 0.08);
  --border-strong: rgba(18, 20, 23, 0.16);
  --border-accent: rgba(37, 99, 235, 0.35);
}
```

### B. Authenticated Application (Dark Canvas Mode)
```css
.app-theme-dark {
  /* Backgrounds & Surfaces */
  --bg-canvas: #0A0D14;            /* Deep obsidian chalkboard */
  --bg-panel: #101522;             /* Sidebar and docked panels */
  --bg-card: #161D2F;              /* Elevated canvas cards and math blocks */
  --bg-card-hover: #1E273D;        /* Interactive hover state */
  --bg-active: #25314D;            /* Active selection state */
  
  /* Text & Content */
  --text-canvas-primary: #F3F4F8;  /* Crisp chalk white */
  --text-canvas-secondary: #9DA6B8;/* Soft lead gray */
  --text-canvas-muted: #647087;    /* Low-priority metadata */
  
  /* Blackboard Accent Colors */
  --chalk-blue: #60A5FA;           /* Variable definitions / Primary logic */
  --chalk-violet: #A78BFA;         /* Formula operators / Highlights */
  --chalk-emerald: #34D399;        /* Verified intuitions / Correct proofs */
  --chalk-amber: #FBBF24;          /* Attention points / Active steps */
  --chalk-rose: #FB7185;           /* Errors / Constraints / Paradoxes */
  
  /* Borders */
  --border-canvas-subtle: rgba(255, 255, 255, 0.08);
  --border-canvas-strong: rgba(255, 255, 255, 0.16);
  --border-canvas-glow: rgba(96, 165, 250, 0.4);
}
```

---

## 3. Typography Scale & Font Pairings

* **Headings & Display**: `Plus Jakarta Sans` or `Inter Display` (Font weights: 600, 700, 800)
  * Clean, geometric curves with distinct human touches in the letterforms.
* **Body & UI**: `Inter` (Font weights: 400, 500)
  * Supreme legibility at all font sizes, high x-height, and neutral editorial tone.
* **Equations, Code & Technical Annotations**: `JetBrains Mono` & `KaTeX Fonts`
  * Balanced character width, crystal-clear punctuation, and mathematical glyph fidelity.

### Type Scale
| Token | Font Size | Line Height | Weight | Tracking | Primary Usage |
|---|---|---|---|---|---|
| `display-2xl` | 48px (3rem) | 1.1 | 800 | -0.03em | Marketing Hero Headline |
| `display-xl` | 36px (2.25rem) | 1.2 | 700 | -0.025em | Section Headings / Feature Titles |
| `display-lg` | 28px (1.75rem) | 1.25 | 600 | -0.02em | Modal / Sub-section Headers |
| `title-md` | 20px (1.25rem) | 1.35 | 600 | -0.01em | Blackboard Lesson Title / Card Headers |
| `body-lg` | 17px (1.06rem) | 1.6 | 400 | -0.005em | Editorial Intro Paragraphs |
| `body-md` | 14px (0.875rem) | 1.5 | 400 | 0 | Standard UI, Tutor Explanations |
| `body-sm` | 12px (0.75rem) | 1.4 | 500 | +0.01em | Tags, Metadata, Secondary Labels |
| `code-mono` | 13px (0.8125rem) | 1.5 | 400 | 0 | Mathematical terms, Code Snippets |

---

## 4. Spacing, Radii & Grid System

* **Base Unit**: `4px`
* **Spacing Scale**:
  * `xs`: 4px | `sm`: 8px | `md`: 12px | `base`: 16px | `lg`: 24px | `xl`: 32px | `2xl`: 48px | `3xl`: 64px | `4xl`: 96px
* **Border Radii**:
  * `radius-sm`: 6px (Badges, tags, toolbar controls)
  * `radius-md`: 10px (Buttons, input fields, dropdown menus)
  * `radius-lg`: 16px (Content cards, blackboard panels)
  * `radius-xl`: 24px (Hero canvas previews, featured modules)
  * `radius-full`: 9999px (Pills, user avatars)

---

## 5. Core Component Design Tokens

### A. Buttons (`<Button />`)
* **Primary**: `bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm active:scale-[0.98]`
* **Secondary**: `bg-surface-subtle text-text-primary hover:bg-surface-hover border border-border-light`
* **Blackboard Accent**: `bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30`
* **Ghost**: `text-text-secondary hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5`

### B. Blackboard Math & Concept Cards (`<BlackboardCard />`)
* Dark slate glassmorphism with tactile chalk-border (`bg-[#161D2F]/80 backdrop-blur-md border border-white/10 shadow-xl rounded-xl`).
* Color-coded left indicator representing concept type (Blue = Proof Step, Amber = Key Variable, Emerald = Intuition).
* KaTeX math blocks formatted with subtle contrast backgrounds and copy-math triggers.

### C. Stepper & Timeline (`<StepController />`)
* Interactive progression bar at the bottom of `/app/board`:
  * Step counter pill (`Step 2 of 5`).
  * Scrubber track with numbered milestone pips.
  * Controls: Rewind, Step Back, Play/Pause, Step Forward, Speed (0.5x, 1x, 2x).

---

## 6. Motion & Animation Principles

* **Restraint Over Spectacle**: Animations must serve a pedagogical purpose (revealing a derivation step, zooming to an equation component, or transitioning state). Never use gratuitous spinning logos or chaotic background particles.
* **Timing & Curves**:
  * Micro-interactions (hover, active button, tooltips): `150ms cubic-bezier(0.16, 1, 0.3, 1)`
  * Panel transitions & drawer slides: `300ms cubic-bezier(0.16, 1, 0.3, 1)`
  * Blackboard Step Reveal (KaTeX terms, diagram drawing): `400ms ease-out` with staggered delays (`staggerChildren: 0.1s`).
* **Reduced Motion Compliance**:
  * Every animation respects `@media (prefers-reduced-motion: reduce)` by gracefully disabling layout transforms and defaulting to instant opacity fades.

---

## 7. Accessibility (A11y) Standards

* **Contrast Compliance**: Strict adherence to WCAG 2.1 AA standards (minimum 4.5:1 for body text, 3:1 for large display headings).
* **Keyboard Navigation**:
  * Distinct, visible focus rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`).
  * Logical tab indexing across the Blackboard toolbar, canvas elements, and tutor panels.
* **Screen Reader Optimization**:
  * All mathematical KaTeX equations include clean fallback `aria-label`s expressing the spoken mathematical formula (e.g., `aria-label="f of x equals x squared"`).


---

## 8. Live-Action Scroll Dynamics & Interactive Choreography

Unfold incorporates high-impact, scroll-linked pedagogical animations inspired by `design-taste-frontend` and `bencium-impact-designer`:

### A. The Scroll-Unfolding Sticky Blackboard (Homepage Hero → Canvas Transition)
* **Mechanic**: As the user scrolls past the Hero headline, the central blackboard card pins to the viewport (`position: sticky; top: 10%`).
* **Scroll-Linked Phase 1 (0% → 30% scroll)**:
  * A raw, static LaTeX equation appears on paper.
  * Vector lines begin sketching outward in hand-drawn SVG paths, simulating live chalk drawing (`stroke-dasharray` / `stroke-dashoffset` interpolation).
* **Scroll-Linked Phase 2 (30% → 70% scroll)**:
  * The blackboard expands into a dual-column interactive workbench.
  * Node 1, Node 2, and Node 3 pop sequentially into view with subtle spring physics (`framer-motion` scale: `[0.8, 1]`, opacity: `[0, 1]`).
  * A 2D loss landscape contour plot dynamically rotates in 3D perspective as the learner scrolls down.
* **Scroll-Linked Phase 3 (70% → 100% scroll)**:
  * Socratic checkpoints slide in from the right edge with a gentle magnetic snapping effect.
  * The stepper scrubber automatically progresses from Step 1 to Step 3, demonstrating how Unfold paces learning.

### B. Interactive Formula Scrubber & Cursor Proximity
* **Formula Term Hover**: Moving the mouse over mathematical symbols (e.g., $W_Q, W_K, \sigma$) highlights the corresponding tensor matrix on the blackboard canvas with a glowing cobalt aura (`box-shadow: 0 0 20px rgba(56, 189, 248, 0.4)`).
* **Live Frequency / Parameter Sliders**: Real-time canvas redraws reacting at 60fps to user drags or scroll milestones.

### C. Live Screen Capture Peel & Reveal
* **Mechanic**: In the "Teach me what's on my screen" section, as the user scrolls, a simulated browser/PDF window slides into view.
* An intelligent laser-scan line sweeps downward across the paper, leaving behind glowing, interactive OCR bounding boxes and extracted formula chips in real time.
