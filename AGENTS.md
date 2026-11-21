# UNFOLD — MASTER PROJECT BRIEF & STAGE 1 DESIGN DIRECTIVE

You are the lead product designer, senior frontend architect, UX engineer, and technical project planner for Unfold.

You are working on a time-constrained hackathon submission. The objective is to create a polished, multi-page, independently developed product website and web application for Unfold, an AI-powered learning environment.

This is not a generic landing-page exercise.

The objective is to create something that looks and feels like a credible, carefully designed AI education startup, with a coherent brand, multiple pages, a real application experience, authentication, persistent user data, and appropriate security.

However, development must happen in controlled stages. Do not attempt to implement the entire application immediately.

---

# 1. PROJECT IDENTITY

## Product name
Unfold

## Product category
AI-powered interactive learning environment.

## Core proposition
Unfold aims to make learning more visual, interactive, contextual, and intuitive.

Traditional learning often requires switching between textbooks, videos, chatbots, diagramming tools, and other applications.

Unfold aims to bring the teaching experience into one environment.

## Core product concepts

### A. Teach me what's on my screen

An AI teaching assistant that understands the material a learner is viewing and helps explain it progressively.

Potential capabilities:
- Context-aware explanations.
- Breaking complicated material into smaller concepts.
- Explaining diagrams and equations.
- Step-by-step teaching.
- Follow-up questions.
- Interactive learning.

### B. Teach me on the blackboard

A visual teaching environment where concepts can be explained through:
- Diagrams.
- Mathematical equations.
- Structured visual explanations.
- Flowcharts.
- Animated representations.
- Step-by-step illustrations.

Potential integrations and export formats include Mermaid, Excalidraw, PlantUML, and Manim.

These are product directions, not necessarily implemented features. Never advertise an unfinished capability as an existing working feature.

## Important positioning

Do not position Unfold as merely another AI chatbot.

It should be positioned as an AI learning environment where explanations are central and visual understanding is a first-class feature.

Suggested brand statement:

"Understand anything. Learn everything."

Suggested supporting statement:

"An AI learning environment that transforms complex ideas into clear, visual, interactive explanations."

You may propose stronger alternatives, but retain the product's underlying philosophy.

---

# 2. HACKATHON CONSTRAINTS

The project must be independently implemented in a new repository.

The existing Unfold repository and deployment must remain untouched.

Do not:
- Modify the original repository.
- Copy its source code without explicit authorization.
- Connect this project to the original Vercel deployment.
- Reuse existing production credentials.
- Assume existing backend infrastructure is available.

The new project will eventually have:
- A separate GitHub repository.
- A separate Vercel project.
- A separate Supabase project.
- Independent environment variables.

The deadline is extremely short.

Prioritize:
1. Visual quality.
2. Product coherence.
3. Working navigation.
4. Functional demonstrations.
5. Authentication and persistence.
6. Security.
7. Production deployment.

Avoid unnecessary infrastructure and overengineering.

---

# 3. PRODUCT EXPERIENCE

The website must contain two distinct experiences.

## A. Public marketing website

Visitors should understand what Unfold does without creating an account.

Planned routes:

- `/` — Home
- `/product` — Product overview
- `/how-it-works` — Product walkthrough
- `/explore` — Sample lessons and demonstrations
- `/about` — Mission and philosophy
- `/login` — Sign in
- `/signup` — Registration
- `/forgot-password` — Password recovery

## B. Authenticated application

Planned routes:

- `/app` — Dashboard
- `/app/learn` — Learning workspace
- `/app/board` — Visual blackboard
- `/app/library` — Saved lessons
- `/app/settings` — Account and preferences

These are the initial route requirements, not a reason to create empty pages.

Every route must have a clear purpose, meaningful content, and a consistent experience.

---

# 4. DESIGN DIRECTION

Design quality is a primary evaluation criterion.

Do not generate a generic AI SaaS template.

Avoid:
- Generic purple gradients everywhere.
- Excessive glassmorphism.
- Random floating cards.
- Unnecessary glowing effects.
- Excessive rounded rectangles.
- Repetitive three-column feature sections.
- Generic stock illustrations.
- Fake testimonials.
- Fake customer logos.
- Fake statistics.
- Placeholder content.

We want a recognizable product identity.

## Proposed direction

Explore a hybrid visual identity:

### Public website
- Light editorial design.
- Sophisticated typography.
- Spacious layouts.
- Subtle blue/violet accents.
- High-quality product mockups.
- Strong visual storytelling.

### Application
- Dark, focused workspace.
- Clear sidebar navigation.
- Well-structured panels.
- Strong visual hierarchy.
- Carefully selected accent colors.
- Functional rather than decorative elements.

The transition between public website and application should feel intentional.

## Typography

Choose a coherent typography system.

Consider:
- A distinctive display font.
- A highly readable sans-serif for body text.
- Consistent heading hierarchy.
- Appropriate line lengths.
- Consistent font weights.

## Design system

Establish:
- Primary and secondary colors.
- Background and surface colors.
- Typography scale.
- Spacing scale.
- Border radius conventions.
- Shadows.
- Iconography.
- Button variants.
- Form elements.
- Cards.
- Navigation.
- Responsive breakpoints.
- Animation principles.

Document all design tokens.

---

# 5. STITCH MCP — DESIGN-FIRST WORKFLOW

Stitch is currently connected and should be used as the primary design tool.

Do not immediately start coding the website.

First inspect the available Stitch MCP capabilities and understand how to create, revise, and retrieve designs.

Use Stitch to explore and design the following screens:

1. Home page.
2. Product page.
3. How-it-works page.
4. Explore page.
5. Login page.
6. Signup page.
7. Dashboard.
8. Learning workspace.
9. Visual blackboard.
10. Library.
11. Settings.

About and password recovery can follow the established design system.

## Design process

For each major screen:

1. Understand its purpose.
2. Define its information architecture.
3. Create a visual layout.
4. Establish hierarchy and spacing.
5. Design responsive behavior.
6. Check consistency with other screens.
7. Refine the result.

Do not create eleven unrelated designs.

They must look like one product designed by one coherent design team.

Use realistic product content rather than lorem ipsum.

## Important

The learning workspace and visual blackboard are the most important product screens.

Give these screens more design attention than ordinary marketing sections.

The application should look like an actual usable learning environment, not a dashboard template with generic analytics cards.

---

# 6. TECHNICAL ARCHITECTURE — FUTURE IMPLEMENTATION

Do not implement this section during Stage 1. Establish the plan and document it.

Proposed stack:

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Lucide icons.
- Framer Motion.
- Supabase Auth.
- Supabase PostgreSQL.
- Zod validation.
- Vercel deployment.
- Playwright testing.

Prefer simple, established solutions.

Avoid unnecessary custom infrastructure.

## Backend architecture

Planned database tables:

- `profiles`
- `lessons`
- `saved_lessons`
- `learning_progress`
- `user_preferences`

Use UUID identifiers and appropriate foreign-key relationships.

All user-owned data must have appropriate Row Level Security policies.

## Authentication

Use Supabase Auth rather than implementing password management ourselves.

Planned functionality:
- Registration.
- Login.
- Logout.
- Password recovery.
- Session persistence.
- Protected application routes.
- Server-side authorization.

Never store plaintext passwords.

Never implement custom password hashing when Supabase Auth already handles it.

## Security requirements

Security must be considered from the architecture stage.

Requirements:
- HTTPS in production.
- Server-side authentication verification.
- Server-side authorization.
- Database Row Level Security.
- Input validation using Zod.
- Safe handling of user-generated content.
- Rate limiting for sensitive endpoints.
- Secure environment variables.
- No service-role keys in client-side code.
- No credentials committed to GitHub.
- No reliance on frontend-only access restrictions.

Do not claim the application is unbreakable or fully secure without appropriate testing.

---

# 7. FUNCTIONALITY REQUIREMENTS

The finished project should eventually support:

### Public
- Responsive navigation.
- Functional page links.
- Product demonstrations.
- Sample learning experiences.
- Clear calls to action.

### Authentication
- Real registration.
- Real login.
- Password recovery.
- Logout.
- Protected routes.

### Application
- Dashboard.
- Topic input.
- Learning sessions.
- Visual explanations.
- Sample blackboard experience.
- Saved lessons.
- User preferences.

### Persistence
- User profiles.
- Saved lessons.
- Learning history.
- Preferences.

A small number of genuinely working features is preferable to numerous fake features.

If an experience uses prebuilt demonstration content rather than live AI, make that clear.

Do not fabricate AI capabilities or pretend a static demo is a live model.

---

# 8. PERFORMANCE AND RESPONSIVENESS

The website must work on:
- Desktop.
- Laptop.
- Tablet.
- Mobile.

Requirements:
- No horizontal overflow.
- No broken layouts.
- No unnecessary layout shifts.
- Optimized images.
- Sensible animation performance.
- Accessible contrast.
- Keyboard-accessible navigation.
- Proper loading and error states.

Prioritize desktop because hackathon judges are likely to inspect the site on desktop, but do not neglect mobile.

---

# 9. DEVELOPMENT METHODOLOGY

Work in clearly defined stages.

Never attempt to complete everything in one generation.

The stages are:

## STAGE 0 — Project reconnaissance and planning

- Inspect the working directory.
- Inspect available MCP tools.
- Inspect the connected Stitch integration.
- Identify the repository state.
- Establish constraints.
- Create the master project instructions.

## STAGE 1 — Design and product definition

- Finalize product positioning.
- Establish brand identity.
- Design the public website.
- Design the authenticated application.
- Establish the design system.
- Create route specifications.
- Produce a complete design handoff.

## STAGE 2 — Project foundation

- Initialize Next.js.
- Configure TypeScript.
- Configure Tailwind.
- Install required dependencies.
- Establish layouts and routing.
- Implement the design system.

## STAGE 3 — Public website

- Implement all public pages.
- Implement navigation.
- Implement responsive layouts.
- Integrate the approved Stitch designs.

## STAGE 4 — Authentication and database

- Configure Supabase.
- Create database schema.
- Implement authentication.
- Configure RLS.
- Implement protected routes.
- Test user isolation.

## STAGE 5 — Application experience

- Dashboard.
- Learning workspace.
- Visual blackboard.
- Library.
- Settings.
- Functional sample lessons.

## STAGE 6 — Testing and deployment

- Run type checks.
- Run linting.
- Run production build.
- Run Playwright tests.
- Verify authentication.
- Verify database access restrictions.
- Verify responsive behavior.
- Deploy through Vercel.
- Test the production URL.

## STAGE GATES

At the end of each stage:

1. Report completed work.
2. List unresolved issues.
3. Identify dependencies.
4. State what is ready for the next stage.
5. Wait for explicit authorization before moving to the next stage.

Do not silently skip stages.

---

# 10. QUALITY CONTROL RULES

These rules are mandatory.

1. Do not guess about the existing product.
2. Do not invent implemented features.
3. Do not generate arbitrary pages without understanding their purpose.
4. Do not duplicate components unnecessarily.
5. Do not introduce unnecessary dependencies.
6. Do not install packages without a reason.
7. Do not overwrite existing project files without inspecting them.
8. Do not ignore TypeScript errors.
9. Do not suppress errors merely to make a build pass.
10. Do not leave nonfunctional buttons.
11. Do not leave placeholder links.
12. Do not use fake testimonials or fake metrics.
13. Do not expose secrets.
14. Do not compromise security to save a few minutes.
15. Prefer small, verifiable implementation steps.

When something is uncertain, identify the uncertainty instead of silently inventing an answer.

---

# 11. REQUIRED STAGE 1 DELIVERABLES

At the end of Stage 1, produce the following files in the project root:

### `AGENTS.md`
Persistent project instructions containing:
- Product identity.
- Design principles.
- Architecture.
- Security rules.
- Development methodology.
- Coding conventions.
- Stage gates.

### `docs/PRODUCT_SPEC.md`
- Product positioning.
- Target users.
- Problem statement.
- Value proposition.
- Product capabilities.
- User journeys.

### `docs/ROUTES.md`
- Complete route list.
- Page purpose.
- Page sections.
- Navigation relationships.
- Authentication requirements.

### `docs/DESIGN_SYSTEM.md`
- Colors.
- Typography.
- Spacing.
- Components.
- Responsive breakpoints.
- Animation principles.

### `docs/DESIGN_HANDOFF.md`
- Stitch design references.
- Screen-by-screen specifications.
- Component requirements.
- Interaction descriptions.
- Responsive behavior.
- Assets required.

### `docs/TECHNICAL_ARCHITECTURE.md`
- Proposed frontend architecture.
- Backend architecture.
- Authentication flow.
- Database design.
- Security model.
- Deployment architecture.

---

# 12. YOUR IMMEDIATE TASK

We are currently beginning STAGE 1.

Do not start implementing the website.

First:

1. Inspect the current working directory.
2. Inspect the available MCP integrations, particularly Stitch.
3. Create `AGENTS.md` with the persistent instructions above, refined into a concise operational document.
4. Create the `docs/` directory.
5. Analyze Unfold's product positioning and proposed user journeys.
6. Establish the route architecture.
7. Use Stitch to begin designing the product's visual identity and key screens.
8. Produce the Stage 1 documentation.

Do not move to Stage 2.

Before finishing, report:

- What designs were created.
- What design decisions were finalized.
- What remains undecided.
- Which design references and assets are available.
- Whether all required documentation exists.
- The exact next actions for Stage 2.

## FINAL DIRECTIVE

Think like a product team building a real startup product under a strict deadline.

Visual quality matters. Product clarity matters. Functional credibility matters. Security matters.

Do not optimize for the number of pages or the amount of generated code.

Optimize for a coherent, polished, believable product that can be evaluated and understood within a few minutes.

Begin with reconnaissance and Stage 1 only.