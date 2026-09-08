# Design Brief: Visual Polish — The Veil Syndicate

## Problem

The Veil Syndicate is a real-money crypto protocol asking visitors to trust a
novel mechanism — burn `$VSYNC` to activate a numbered Cipher, earn a weighted
share of ZEC reserves. The landing page is the only public surface for this
project. Its concept, structure, and copy are settled, but the **visual
execution doesn't match the seriousness of the product.** The design is decent
but flat: a single hard box-shadow, system fonts (Georgia, Arial, system
monospace), and surface treatments that read as a mockup rather than a
minted, premium artifact. For a "private reserve" asking for trust before
launch, that gap costs credibility.

## Solution

An audit-and-refine pass that lifts every section of the existing single-page
site one tier in visual polish — without touching the concept, structure, or
copy. Two levers, applied consistently across the whole page:

1. **Depth & dimension, subtle and tasteful.** Refined shadow systems,
   layered surfaces, slight glass blur on the header and vault card. The
   paper aesthetic stays dominant — this is depth added to paper, not paper
   replaced by glass. The vault card in particular should feel physically
   deep, like a sealed compartment rather than a printed rectangle.

2. **Refined typography.** Replace the system-font stack (Georgia / Arial /
   system monospace) with a deliberate type system loaded via `next/font`
   (Google Fonts, self-hosted, no layout shift). 2–3 typeface directions will
   be presented and chosen in the design-tokens phase. The serif identity
   stays — it fits the "private reserve / vault" mystique — but it becomes a
   proper typeface with a real scale, refined letter-spacing, and clear
   hierarchy.

The hand-written `globals.css` is refactored section-by-section into scoped
CSS modules as each section is polished. Visual improvement and structural
cleanup happen together.

## Experience Principles

1. **Depth without glassmorphism.** Shadows, layered surfaces, and subtle
   blur add physical credibility — but the paper aesthetic stays dominant.
   The visitor should feel a sealed vault, not a frosted dashboard.

2. **Typography as authority.** A proper typeface system replaces system
   fonts. Every heading, label, and metric is set with intent. The serif
   carries the mystique; the monospace carries the data; both are chosen, not
   defaulted.

3. **Polish is cumulative.** Every section gets the same lift — no section is
   left rough as a "later" while others shine. The page reads as one
   considered artifact, not a polished hero bolted to a draft body.

## Aesthetic Direction

- **Philosophy**: Editorial secrecy. A private reserve for a public chain.
  The visual language of sealed documents, minted ranks, and a vault behind a
  veil — refined to feel premium and serious, not theatrical.
- **Tone**: Mysterious and authoritative. The "secret society / private
  reserve" mystique stays; the execution makes it feel expensive and
  serious rather than like a mockup.
- **Reference points**: Premium crypto-native sites — ENS, Art Blocks,
  Foundation. Curated on-chain art and protocol pages that feel considered,
  typographically rich, and distinctly non-corporate.
- **Anti-references**:
  - Generic SaaS templates — no Inter font, no rounded cards, no
    purple-gradient hero, no "powered by" badges.
  - Cheap meme-coin sites — no neon, no rocket emojis, no hype energy, no
    countdown timers.
  - Corporate fintech — no Stripe/Robinhood-style blue, no friendly
    illustrations, no app-store screenshots.
  - Template AI-generated landing pages — no generic gradient meshes, no
    card grids, no stock layout.

## Existing Patterns

The codebase is a Next.js App Router project with TypeScript, Tailwind CSS
v4, and a full shadcn/ui component library installed but unused by the
landing page.

- **Typography (at audit time)**: Georgia (serif headings), Arial (body),
  system monospace (labels, ticker, code). All system fonts — replaced.
- **Colors (at audit time)**: `--ink: #16161d` · `--muted: #74727d` ·
  `--paper: #eeece7` · `--violet: #7b6b95` · `--violet-dark: #3d344d` ·
  `--night: #15131b` · `--line: #bdb9b3` · `--warm: #c58d49`
- **Spacing**: `5vw` / `10vw` horizontal gutters; `130px` / `92px` / `75px`
  section padding at desktop / tablet / mobile. `clamp()` for fluid hero
  type. *(Post-review: all gutters unified under `max(10vw, cap)`.)*
- **Components**: 60+ shadcn/ui components in `components/ui/` — available
  but the landing page uses none of them. The page is a single `'use client'`
  component with inline JSX and hand-written CSS classes.
- **CSS**: All styles in one ~950-line `app/globals.css`. Refactor target:
  scoped CSS modules per section as each is polished.
- **Assets**: `public/veil-vault.png` (pixel-art vault hero image),
  `public/veil-cipher.gif`, `public/favicon.svg`. Grain texture via inline
  SVG data URI.
- **Fonts**: None loaded at audit time. Body uses Arial. No `next/font`.

## Component Inventory

| Component | Status | Notes |
| --------- | ------ | ----- |
| Site header (wordmark, nav, chain tag, CTA) | Modify | Glass blur; refined with new type system |
| Hero (copy, CTAs, vault art, orbits, footnote) | Modify | Refined type, layered depth, art fills column |
| Status ticker | Modify | Space Mono data, refined dividers, subtle lift |
| Mechanism flow (4 steps + arrows) | Modify | Refined type, active step lifts |
| Cipher rank table (5 levels) | Modify | Engraved feel via inset shadows, dark band |
| Vault card | Modify | Primary depth target — layered shadows, sealed feel |
| Charter (6 articles grid) | Modify | Refined type and dividers, subtle lift |
| Signal / follow section | Modify | Accent-soft edge, inset depth on violet-dark |
| CopyButton | Modify | Refined mono, touch target, focus ring |
| Font loader (`next/font` setup) | New | Cormorant + Newsreader + Space Mono via `next/font` |
| CSS modules (per section) | New | `app/_*.module.css` scoped styles |

## Key Interactions

The page is largely static — scroll-based single-page navigation with anchor
links. The only interactive elements are:

- **Mobile nav toggle**: hamburger opens/closes the nav links overlay. Must
  remain keyboard-accessible with a visible focus state.
- **CopyButton**: copies the placeholder contract address, shows "Copied"
  for 1.6s. Keyboard-accessible; touch target ≥ 44px on mobile.
- **Anchor-link navigation**: smooth scroll to sections. Respects
  `prefers-reduced-motion`.
- **Hover states**: buttons lift, nav links shift to violet. Refined with
  the depth system and motion tokens.

No new interactions are introduced. This is a visual polish pass.

## Responsive Behavior

- **Desktop (>900px)**: Two-column hero, 5-column ticker, multi-column grids.
  Pixel-perfect; content width caps at `--page-content-max` (1192px) above
  ~1440px viewports.
- **Tablet (≤900px)**: Hero stacks (copy, art, ticker share one left edge),
  ticker 2-col (5th spans), grids collapse, flow 2-col, arrows hide.
- **Mobile (≤640px)**: Hamburger nav, CTAs stack full-width with shared left
  edge, cipher table hides CAP column, article grid single column, vault
  metrics 2-col (3rd spans), footer stacks.

Mobile-first is the build priority, but desktop must be pixel-perfect. Both
are primary targets.

## Accessibility Requirements

- **Contrast**: WCAG AA across all text (4.5:1 normal, 3:0 large). Verified
  programmatically — 16/16 color pairs pass after the a11y pass.
- **Keyboard navigation**: nav toggle, copy button, anchor links operable
  with visible `--shadow-focus` focus rings.
- **Reduced motion**: `prefers-reduced-motion` disables smooth scroll and
  transitions. No new motion added.
- **Semantic HTML**: main/header/nav/section/article/figure/footer preserved
  through the module refactor. Grain `aria-hidden`; art has descriptive alt.
- **Touch targets**: ≥44×44px on mobile (CopyButton verified at 77×45px).

## Out of Scope

- **Content rewrite.** The copy stays, including the metaphor-heavy language.
- **New pages or sections.** Single-page structure stays.
- **Placeholder data replacement.** TBD costs, `0x0000…c0de`, dashed metrics
  are intentional pre-launch placeholders.
- **New interactions or animations.** No scroll reveals, no animated counters.
- **Backend or data integration.** No live data, no wallet connection.
- **shadcn/ui adoption.** The installed components stay out of the landing
  page; only its styling is refined.
- **Dark mode.** The site is intentionally light/paper; the dark band serves
  as the dark surface. A full `prefers-color-scheme` mode is out of scope.