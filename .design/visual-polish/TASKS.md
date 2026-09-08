# Build Tasks: Visual Polish — The Veil Syndicate

Generated from: `.design/visual-polish/DESIGN_BRIEF.md`
Date: 2026-09-06

Philosophy: **Editorial Secrecy** — depth without glassmorphism, typography as
authority, polish is cumulative. Direction A type system (Cormorant +
Newsreader + Space Mono). Each task is a vertical slice: structure + styling +
verification in one commit. CSS refactored from globals.css into scoped
modules as each section is touched.

## Foundation

- [x] **Wire fonts and tokens**: Load Cormorant, Newsreader, and Space Mono
  via `next/font` in `app/layout.tsx`. Migrate tokens into `app/globals.css`,
  replacing legacy names with the semantic token system. _Commit: `345db13`_

- [x] **Extract shared CSS module for header/footer chrome**: Header + footer
  styles → `app/_chrome.module.css`; glass treatment on the header. _Commit:
  `47f7432`_

## Core UI

- [x] **Polish hero section**: `_hero.module.css`; Cormorant title, Newsreader
  body, Space Mono labels, layered art depth. _Commits: `f8d93ed`, `6d0d3de`,
  `3f261ba`, `7677e39`, `921bb81` (alignments + sizing iterations with the
  designer)_

- [x] **Polish status ticker**: `_ticker.module.css`; `!important` hack
  removed, `--shadow-xs` lift. _Commit: `23b5c2e`_

- [x] **Polish mechanism section**: `_mechanism.module.css`; active step
  lifts with `--shadow-sm` + violet border. _Commit: `0198551`_

- [x] **Polish cipher rank table (dark band)**: `_ciphers.module.css`;
  engraved rows via `--shadow-inset-sm`. _Commit: `a993363`_

- [x] **Polish vault card**: `_vault.module.css`; layered stamped + ambient
  shadows, sealed top edge, seal lift. _Commits: (module) + `588b4c4` kicker
  fix after Next.js migration_

- [x] **Polish charter section**: `_charter.module.css`; refined dividers,
  `--shadow-xs` grid lift. _Commit: `f840dca`_

- [x] **Polish signal/follow section**: `_signal.module.css`; accent-soft
  edge + inset depth on the violet-dark panel. _Commit: `e74c77a`_

- [x] **Refine CopyButton**: `_copy-button.module.css`; hover lift, focus
  ring, motion tokens. _Commit: `8df8c59`_

## Page-Width System (added mid-build with the designer)

- [x] **Cap page content width**: single `--page-content-max` (1192px);
  header, hero, ticker, sections, footer share one gutter formula
  (`max(10vw, cap)`). _Commits: `f230f32`, `dc6fec5`, `51a42d9`_

## Responsive & Polish

- [x] **Responsive verification pass**: live geometry checks at 1280 / 768 /
  390 — edges aligned (128/1152 and 77px), no horizontal overflow, mobile
  ticker gutter fixed. _Commit: `aebce28`_

- [x] **Accessibility pass**: contrast matrix 16/16 AA (6 pairs fixed, 2 new
  accent tokens), keyboard/focus/reduced-motion verified in browser.
  _Commit: `84e4c3d`_

## Review

- [x] **Design review**: `/design-review` executed — 5 screenshots captured,
  geometry-verified findings, refinement list produced. _Commit: `16b375e`_
  Refinements applied: _Commit: `332555c`_

## Status

**All tasks complete.** The flow closed with the design review and the
application of its should-fix/could-improve items.