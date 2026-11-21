# Unfold — Complete Design Handoff Specification

## 1. Executive Summary & Design Reference
* **Stitch Project Reference**: `projects/10221216704448595757` ("Unfold - AI Learning Environment")
* **Design Philosophy**: High-credibility dual experience:
  * Public Marketing pages: Light editorial, crisp typography, generous whitespace, interactive previews.
  * Application pages: Deep-focus dark canvas (`#0A0D14`), precision controls, visual chalkboard diagrams, mathematical KaTeX fidelity.
* **Component Framework**: Tailwind CSS with custom semantic design tokens, Lucide React icons, and Framer Motion micro-interactions.

---

## 2. Screen-by-Screen Specifications

### SCREEN 1: Home Page (`/`)
* **Theme**: Light Editorial (`#FBFBFA` background)
* **Header / Navigation**:
  * Logo: Clean geometric lettermark with subtle unfolded corner motif.
  * Links: `Product`, `How It Works`, `Explore`, `About`.
  * Actions: `Sign In` (ghost text button), `Get Started Free` (primary royal blue button).
* **Hero Section**:
  * Eyebrow Badge: `"The Visual-First AI Learning Workspace"`.
  * Headline: `"Understand anything. Learn everything."` (font-extrabold, tracking-tight).
  * Subheadline: Clear value proposition contrasting against standard text chatbots.
  * Primary CTAs: `"Explore Live Lessons"` (links to `/explore`), `"Start Learning Free"` (links to `/signup`).
* **Hero Interactive Blackboard Preview**:
  * A dual-sided interactive card: Left side shows a raw calculus or neural network problem; Right side shows Unfold's live visual blackboard rendering with formula highlights and diagram geometry.
* **Feature Grid (The Dual Engine)**:
  * Card 1: *Teach me what's on my screen* (Visual OCR, step decomposition).
  * Card 2: *Teach me on the blackboard* (KaTeX formulas, hand-drawn diagrams, step animators).
* **Comparison Section**:
  * Side-by-side comparison table: Generic Chatbot vs. Textbook vs. Unfold.
* **Responsive Behavior**:
  * On mobile (<768px): Stacks the hero comparison vertically; hamburger navigation menu for links; sticky CTA at bottom.

---

### SCREEN 2: Product Page (`/product`)
* **Theme**: Light Editorial
* **Core Sections**:
  1. **Product Manifesto**: Deep explanation of why spatial and visual memory accelerates STEM comprehension.
  2. **The Rendering Pipeline**: Interactive schematic showing how user input turns into:
     * Structured LaTeX syntax rendered through KaTeX.
     * Architectural flowcharts rendered with Dagre/Rough.js.
     * Step-by-step playback engines.
  3. **Contextual Screen Intelligence**: Demonstration of OCR processing PDFs, code editors, and mathematical proofs.
  4. **Multi-Format Export**: One-click exports to Mermaid markdown, SVG diagram vector, and KaTeX source.

---

### SCREEN 3: How It Works Page (`/how-it-works`)
* **Theme**: Light Editorial
* **Core Sections**:
  1. **Interactive 3-Step Walkthrough**:
     * **Step 1: Point & Capture**: Select a region of your screen or upload a problem.
     * **Step 2: Pedagogical Decomposition**: Unfold identifies foundational principles, terms, and sequence.
     * **Step 3: Visual Blackboard Synthesis**: Step-by-step drawings and annotated formulas unfold on screen.
  2. **Interactive Simulation**: A slider allowing visitors to scrub between Step 1, Step 2, and Step 3 on an actual sample lesson.

---

### SCREEN 4: Explore Page (`/explore`)
* **Theme**: Light Editorial with dark embedded blackboard previews
* **Core Sections**:
  1. **Category Filter Tabs**: `All`, `Computer Science`, `Mathematics`, `Physics`, `Neuroscience`.
  2. **Lesson Card Grid** (3 columns on desktop, 1 on mobile):
     * *Card 1*: **Gradient Descent with Momentum** (Calculus & ML) - Interactive curve with oscillating velocity vector.
     * *Card 2*: **Raft Consensus Protocol** (Distributed Systems) - Node cluster showing Leader Election and Heartbeat timeout.
     * *Card 3*: **Fourier Transform Intuition** (Signal Processing) - Rotating epicycles decomposing square wave.
     * *Card 4*: **Transformer Self-Attention** (Deep Learning) - Scaled dot-product matrix multiplication visualizer.
  3. **Direct Interaction**: Clicking any card immediately opens an interactive blackboard modal or route allowing full step playback without signing in.

---

### SCREEN 5: Sign In Page (`/login`) & SCREEN 6: Sign Up Page (`/signup`)
* **Theme**: Split-screen design
  * **Left Side (Form)**: Clean, high-focus form with email/password input, Google OAuth button, "Remember me", password recovery link, and submit button.
  * **Right Side (Editorial Value Showcase)**: Rich slate background displaying an illuminated Blackboard card quote: *"Learning is not the accumulation of words; it is the building of mental models."*
* **Form States**:
  * Idle, Loading spinner, Error toast (e.g. invalid credentials), Success redirect.

---

### SCREEN 7: Dashboard (`/app`)
* **Theme**: Dark Canvas (`#0A0D14` background, `#101522` panels)
* **Sidebar**:
  * Unfold logo, navigation items (`Dashboard`, `Learning Workspace`, `Visual Blackboard`, `Library`, `Settings`).
  * User profile footer with status and logout trigger.
* **Main Area**:
  * **Top Prompt Bar**: *"What do you want to unfold today?"* with mode pills (`Blackboard`, `Screen Teach`).
  * **Dual Action Cards**:
    * *Launch Blackboard*: Creates a fresh interactive blackboard session.
    * *Analyze Material*: Prompts for image upload or screen snippet.
  * **Recent Sessions Grid**: Cards displaying saved blackboard sessions, completion status, and tags.
  * **Streak & Progress Widget**: Micro-stats celebrating learning consistency.

---

### SCREEN 8: Learning Workspace ("Screen Teach") (`/app/learn`)
* **Theme**: Dark Canvas
* **Layout**: Split-pane IDE workspace:
  * **Left Pane (Source Material)**:
    * Image dropzone / screen snippet preview.
    * OCR highlighted regions.
    * Detected mathematical notation and terminology chips.
  * **Right Pane (Progressive Tutor)**:
    * Step-by-step breakdown cards.
    * Interactive Socratic checkpoint question: *"Does the momentum parameter $\beta$ accelerate or decelerate the gradient?"* with instant feedback buttons.
    * Action button: *"Open on Blackboard"* (transfers state to `/app/board`).

---

### SCREEN 9: Visual Blackboard (`/app/board`)
* **Theme**: Deep Obsidian Blackboard (`#0A0D14` with subtle grid pattern)
* **The Flagship Screen**:
  * **Top Bar**: Lesson title, mode badge, export options (Mermaid, SVG, KaTeX), share link, full-screen toggle.
  * **Canvas Area**:
    * Tactile mathematical formulas rendered in crisp chalk-white KaTeX.
    * Hand-drawn style geometric diagrams and state machines.
    * Active step highlight ring with glowing cobalt border.
  * **Bottom Timeline Stepper**:
    * Previous Step (`←`), Play/Pause (`Space`), Next Step (`→`).
    * Step scrubber bar with named milestone nodes.
    * Speed selector (`0.5x`, `1.0x`, `2.0x`).
  * **Collapsible Notes Drawer**:
    * Side notes explaining the deep intuition behind the current blackboard step.

---

### SCREEN 10: Library (`/app/library`)
* **Theme**: Dark Canvas
* **Layout**:
  * Search bar with instant fuzzy filtering.
  * Subject tags: `Math`, `Computer Science`, `Physics`, `Systems`, `All`.
  * View toggle: Grid view vs. Compact list view.
  * Actions per card: Open in Blackboard, Export, Rename, Delete.

---

### SCREEN 11: Settings (`/app/settings`)
* **Theme**: Dark Canvas
* **Sections**:
  * **Profile**: Name, email, avatar upload, learning focus.
  * **Blackboard Appearance**: Theme selector (`Chalkboard Dark`, `Deep Slate`, `Monochrome Paper`), diagram style slider (`Clean Vector` vs. `Chalk Sketch`).
  * **Data & Privacy**: Export all personal lessons, delete account.

---

## 3. Interaction & Micro-Interaction Guidelines

1. **Blackboard Stepper Controls**:
   * Pressing right arrow key (`ArrowRight`) smoothly advances to the next pedagogical step.
   * Elements from the previous step dim to 50% opacity, while newly introduced formulas animate into view with a subtle slide-up and fade.
2. **Formula Term Inspection**:
   * Hovering over a term in an equation (e.g. $v_t$ or $\alpha$) highlights the corresponding variable in the blackboard diagram.
3. **Responsive Breakpoints**:
   * Mobile (<768px): Dashboard collapses sidebar to bottom navigation bar; Blackboard stepper converts into mobile bottom drawer.
   * Tablet (768px - 1024px): Split panes become collapsible accordions.
   * Desktop (>1024px): Full multi-pane workspace with draggable splitters.

---

## 4. Required Production Assets & Libraries
* **Icons**: `lucide-react` (BookOpen, Compass, Layers, Sparkles, ArrowRight, Play, Pause, Download, Share2, Settings, User, Check, X).
* **Math Engine**: `katex` for formula rendering.
* **Canvas Aesthetics**: Custom SVG paths with chalk filters or Rough.js rendering.
* **Animations**: `framer-motion` for spring transitions and step orchestration.


---

## 5. Live-Action Interaction Specifications for Frontend Engineering

1. **Sticky Scroll Blackboard (`<StickyScrollBlackboard />`)**:
   * Uses Framer Motion's `useScroll` and `useTransform`.
   * Maps scroll offset `[0, 0.5, 1]` to blackboard rotation `[-3deg, 0deg, 0deg]`, scale `[0.92, 1, 1]`, and active step index `[0, 1, 2]`.
   * Chalk lines animated via SVG path length transitions.

2. **Laser Scan Vision Simulation (`<LaserScanDocument />`)**:
   * Vertical gradient line moving with CSS keyframe animation or scroll progress.
   * Elements under the scan line transition from grayscale paper to vibrant annotated tokens.

3. **Live Mathematical Sound / Haptic Cues (Optional subtle audio feedback)**:
   * Low-frequency subtle tactile pops when steps click into place.
