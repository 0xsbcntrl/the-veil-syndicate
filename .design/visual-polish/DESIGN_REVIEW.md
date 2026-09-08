# Design Review: Visual Polish — The Veil Syndicate

Reviewed against: `.design/visual-polish/DESIGN_BRIEF.md`
Philosophy: Editorial Secrecy — depth without glassmorphism, typography as authority
Date: 2026-09-08

## Screenshots Captured

| Screenshot | Breakpoint | Description |
| --- | --- | --- |
| `screenshots/review-homepage-desktop-1280.png` | Desktop (1280×800, full page 5291px) | Full page: glass header, hero, ticker, mechanism, dark band, vault, charter, signal, footer |
| `screenshots/review-homepage-tablet-768.png` | Tablet (768×1024, full page) | Stacked hero, collapsed grids, same gutter rules |
| `screenshots/review-homepage-mobile-375.png` | Mobile (375×812, full page 7325px) | Single-column layout, stacked CTAs, 2-column ticker |
| `screenshots/review-mobile-nav-open-390.png` | Mobile 390 (interactive state) | Open hamburger menu: dropdown with MECHANISM/CIPHERS/CHARTER/VAULT |
| `screenshots/review-vault-card-copy-state-mobile.png` | Mobile 390 (interactive state) | Vault card with Z badge, address, and button in "Copied" state |

> All stored in `.design/visual-polish/screenshots/`.

## Summary

The implementation delivers the brief's direction: Cormorant/Newsreader/Space Mono
renders correctly (confirmed in the render, not only in code), and the "private reserve"
editorial aesthetic is recognizable — the site reads like a gallery catalog rather than
a Web3 site. The largest finding in the review was structural rather than aesthetic:
the sections still used the old gutters (8vw/7vw) at smaller breakpoints while the
hero/ticker already used the unified formula — live measurement showed copy/ticker at
77px and kickers at 61px on tablet ("zigzag"). Fixed and re-verified during the review.

## Must Fix

_(none remaining — the only must-fix found in the review, section gutter misalignment
on tablet/mobile, was fixed in commit `51a42d9` and re-verified: all kickers and the
ticker now measure left = 77px at 768px)_

## Should Fix

1. **"Copy" button with a tight mobile touch target**: the contract button had
   `padding: 8px 10px` (≈ 34px tall) — below the recommended 44×44px. See
   `screenshots/review-vault-card-copy-state-mobile.png`. _Fix applied (commit
   `a91c0d1`): `padding: 14px 16px` at the ≤640px breakpoint — measured 77×45px,
   meeting the 44px criterion._ ✅

2. **"1 Issue" badge visible in screenshots**: the red overlay in the lower-left
   corner comes from the browser's QA extension, not the site. Confirmed as not a site
   issue (it does not exist in the DOM). No code action — documented only to avoid
   confusion in future reviews. ✅ (no action required)

## Could Improve

1. **Vault card shadow feels "disconnected" from the rest**: the stamped offset (14px
   solid) is the heaviest element on the page — intentional as a depth target from the
   brief, but on large screens its contrast with the flat charter/ticker is strong.
   _Suggestion applied (commit `b3f9f6f`): offset 14px → 12px and tone `#c6c2bb` →
   `#cfccc5` (one step lighter), via `--shadow-stamped`/`--color-border-soft` tokens._ ✅

2. **Hero lede density**: the hero paragraph was slightly tighter than the generous
   leading used in the other sections. _Suggestion applied: `.heroLede` `line-height`
   from 1.45 → 1.5._ ✅ See `screenshots/review-homepage-desktop-1280.png`.

3. **Vertical space between tablet sections**: large gaps between Ciphers → Vault →
   Charter (130px → 92px). Consistent with the original design, but the tablet could
   breathe less. _Suggestion: 92px → 84px at the 900px breakpoint if it feels empty._
   _(left as-is — the breathing room is part of the editorial language; revisit if it becomes distracting)_

## What Works Well

- **Typography**: all three families (Cormorant display, Newsreader body, Space Mono
  data) load and create a clear hierarchy — confirmed in the render, with no visible
  Georgia/Arial fallback. The violet italic in the headings is the right signature.
- **Gutter system**: one gutter formula (`max(10vw, cap)`) for header, hero, ticker,
  sections, and footer — exact edges (measured: 128/1152 at 1280px, 77px at 768px).
  The copy↔ticker↔section alignment requested was verified geometrically rather than
  by eye.
- **Subtle depth**: glass header, `--shadow-xs` on ticker/charter, engraved (`inset`)
  rank rows, and layered vault card — the page has dimension without becoming a glass
  dashboard, as requested by the brief.
- **Interactive states**: the mobile menu opens/closes with `shadow-md` and consistent
  mono labels; CopyButton switches to "Copied" with immediate feedback; focus is visible
  through `--shadow-focus`.
- **Contrast**: 16/16 color pairs meet WCAG AA after commit `84e4c3d` — the polish did
  not compromise accessibility.
- **Zero horizontal overflow** across all three breakpoints (measured:
  `scrollWidth ≤ innerWidth`).

## Screenshots Captured

Five screenshots saved in `.design/visual-polish/screenshots/` (listed in the table above).
Captured via CDP (`Page.captureScreenshot` with `captureBeyondViewport`) — Playwright
MCP was not available in this environment; the local browser session used device-metrics
emulation with dimension verification from the PNG header.
