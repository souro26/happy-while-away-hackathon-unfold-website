# Unfold — Route Architecture & Specifications

## 1. Overview & Information Architecture
The Unfold web platform is divided into two distinct experiences:
1. **Public Marketing Website**: Editorial, spacious, light-themed, high information-density, zero login required.
2. **Authenticated Application**: High-focus, dark-themed, sidebar-driven visual learning workspace.

---

## 2. Complete Route Directory

| Route | Type | Auth Required | Purpose & Description |
|---|---|---|---|
| `/` | Public | No | **Homepage**: Hero statement, visual comparison demo, core mode highlights, sample showcase, call-to-action. |
| `/product` | Public | No | **Product Overview**: Deep dive into the philosophy, dual teaching modes, blackboard engine, and comparison matrix. |
| `/how-it-works` | Public | No | **Interactive Walkthrough**: Step-by-step breakdown of vision capture, concept decomposition, and blackboard synthesis. |
| `/explore` | Public | No | **Sample Lessons**: Curated interactive lessons with real blackboard visualizations runnable in-browser. |
| `/about` | Public | No | **Mission & Vision**: The philosophy of visual-first AI learning, why traditional LLM chat fails education. |
| `/login` | Auth | Public only (redirects to `/app` if auth) | **Sign In**: Email/password, OAuth providers, session persistence. |
| `/signup` | Auth | Public only (redirects to `/app` if auth) | **Registration**: Account creation with clear value proposition sidebar. |
| `/forgot-password`| Auth | Public only | **Password Recovery**: Secure password reset flow via Supabase Auth email triggers. |
| `/app` | App | Yes (Protected) | **Dashboard**: Overview of recent lessons, quick-start prompt bar, streak/progress cards, recommended topics. |
| `/app/learn` | App | Yes (Protected) | **Learning Workspace ("Screen Teach")**: Upload/capture input, OCR preview, step-by-step progressive tutor pane. |
| `/app/board` | App | Yes (Protected) | **Visual Blackboard ("Blackboard Mode")**: Fullscreen interactive blackboard, KaTeX renderer, diagram builder, timeline stepper. |
| `/app/library` | App | Yes (Protected) | **Saved Lessons**: Searchable, filterable archive of past learning sessions, tags, and notes. |
| `/app/settings` | App | Yes (Protected) | **Settings & Preferences**: User profile, AI model/provider preferences, blackboard display style, export defaults. |

---

## 3. Detailed Route Specifications

### A. Public Routes

#### 1. Home (`/`)
* **Purpose**: Establish immediate credibility, state the core value proposition, and provide visual proof of superiority over text-only chatbots.
* **Sections**:
  1. **Global Navigation Bar**: Unfold logo, links (`Product`, `How It Works`, `Explore`, `About`), Sign In button, "Try Unfold Free" CTA.
  2. **Hero Section**:
     * Eyebrow: *"The Next-Generation AI Learning Workspace"*
     * Headline: *"Understand anything. Learn everything."*
     * Subheadline: *"Traditional learning is scattered across textbooks, videos, and generic chatbots. Unfold brings your learning onto an intelligent, visual teaching canvas."*
     * CTAs: *"Explore Sample Lessons"* (secondary) and *"Start Learning"* (primary).
  3. **Interactive Hero Canvas Preview**: Interactive split view showing a dense multivariable calculus problem transforming into an annotated, step-by-step visual blackboard.
  4. **The Dual-Engine Paradigm**:
     * Card 1: *Teach me what's on my screen* (Vision + OCR + Progressive breakdown).
     * Card 2: *Teach me on the blackboard* (KaTeX proofs + Hand-drawn diagrams + Step animators).
  5. **Curated Showcase Preview**: 3 interactive sample cards (Physics, Computer Science, Biology).
  6. **Comparison Matrix**: Unfold vs. Static Textbooks vs. Conversational Chatbots.
  7. **Footer**: Navigation links, open-source acknowledgments, copyright.

#### 2. Product (`/product`)
* **Purpose**: Thorough architectural explanation of Unfold's capabilities for educators, students, and engineers.
* **Sections**:
  1. **Core Philosophy**: Why text alone is inadequate for technical knowledge transfer.
  2. **The Visual Blackboard Engine**: Deep-dive into KaTeX mathematical rendering, Rough.js aesthetic schematics, and timeline progression.
  3. **Contextual Screen Vision**: How Unfold analyzes PDFs, code IDEs, and diagrams without requiring manual prompt crafting.
  4. **Export Formats**: Support for Mermaid.js, SVG, KaTeX source, and markdown summaries.

#### 3. How It Works (`/how-it-works`)
* **Purpose**: Concrete, 3-step operational walkthrough showing the exact mental model of using Unfold.
* **Sections**:
  1. **Step 1: Capture or Input**: Learner provides a problem, equation, or screenshot.
  2. **Step 2: Dissect & Sequence**: The AI agent deconstructs the prerequisites and core mechanisms.
  3. **Step 3: Synthesize on the Board**: Visual elements are drawn onto the blackboard in pedagogical order.

#### 4. Explore (`/explore`)
* **Purpose**: Self-serve public gallery of interactive lessons to showcase product capabilities immediately.
* **Filter Bar**: Topics (`All`, `Computer Science`, `Mathematics`, `Physics`, `Neuroscience`).
* **Interactive Lesson Cards**:
  * *Lesson 1*: The Geometric Intuition of Gradient Descent with Momentum.
  * *Lesson 2*: Raft Consensus Algorithm: Leader Election Visualized.
  * *Lesson 3*: Fourier Transform: Decomposing Sound Waves into Circles.
  * *Lesson 4*: Transformer Attention Mechanism: Query, Key, and Value Matrix Math.

#### 5. About (`/about`)
* **Purpose**: Grounding the mission, pedagogical research foundations, and team vision.

---

### B. Authenticated Routes (Protected by Middleware)

#### 1. Dashboard (`/app`)
* **Layout**: Collapsible sidebar, header with user avatar & streak counter, main content container.
* **Sections**:
  1. **Hero Input**: *"What do you want to unfold today?"* with dual mode toggles (Blackboard / Screen).
  2. **Quick Access**: Two prominent launch cards:
     * *Launch Blackboard* (Blank visual workspace).
     * *Capture / Upload Material* (Vision-assisted breakdown).
  3. **Continue Learning**: Carousel of recent active lessons with completion progress.
  4. **Curated Recommendations**: Suggested deep-dive topics based on user interest tags.

#### 2. Learning Workspace ("Screen Teach") (`/app/learn`)
* **Split-Pane Layout**:
  * **Left Pane (Material)**: Screen image uploader, OCR text extractor, source preview, term highlighter.
  * **Right Pane (Tutor & Steps)**: Progressive explanation cards with Socratic check-ins and action buttons (*"Explain this term"*, *"Show on blackboard"*).

#### 3. Visual Blackboard (`/app/board`)
* **Primary Interactive Screen**:
  * **Top Toolbar**: Lesson title, mode switcher, export button (SVG, Mermaid, Markdown), share button.
  * **Main Canvas**: Infinite or responsive dark canvas with grid dots, KaTeX math blocks, dynamic flowcharts, and rough-styled diagrams.
  * **Bottom Playback Bar**: Step slider, Previous Step, Next Step, Auto-play button, playback speed.
  * **Right Inspector Pane (Collapsible)**: Explanatory notes, formulas list, and follow-up query input.

#### 4. Library (`/app/library`)
* **Purpose**: Persistent collection of all user-generated lessons.
* **Controls**: Search bar, tag filter chips, sorting (Recent, Title, Subject), grid/list view toggle.
* **Cards**: Thumbnail preview of blackboard, title, last updated timestamp, tags, delete/export menu.

#### 5. Settings (`/app/settings`)
* **Tabs**:
  * **Profile**: Display name, avatar, bio, learning goals.
  * **Preferences**: Blackboard theme (Chalkboard Dark, Modern Slate, Minimalist Monochrome), diagram roughness (Precise vs. Hand-drawn), default export format.
  * **Account & Security**: Email update, password change, active sessions.

---

## 4. Navigation & Authentication Guard Rails
* **Unauthenticated User accessing `/app/*`**: Redirects to `/login?redirect=[encoded_path]`.
* **Authenticated User accessing `/login` or `/signup`**: Redirects automatically to `/app`.
* **Session Expiry**: Graceful toast notification with preserved draft state in `sessionStorage`.
