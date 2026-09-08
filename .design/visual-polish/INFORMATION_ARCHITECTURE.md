# Information Architecture: The Veil Syndicate

## Site Map

A single-page site. All content lives on one route, navigated via anchor links.

- Home `/`
  - `#top` — Hero (first viewport)
  - Status Ticker (immediately below hero, no anchor — not in nav)
  - `#mechanism` — Mechanism (4-step flow)
  - `#ciphers` — Ciphers (rank table, dark band)
  - `#vault` — Vault (card)
  - `#charter` — Charter (6 articles)
  - Signal / Follow (Twitter CTA, no anchor — not in nav)
  - Footer

## Navigation Model

- **Primary navigation**: Header bar, 4 anchor links — Mechanism, Ciphers,
  Charter, Vault. Order is intentional and does not need to match page scroll
  order; the nav is a curated set of destinations, not a table of contents.
- **Secondary navigation**: None. The page is linear.
- **Utility navigation**: One CTA button in the header — "Enter the vault" —
  links to `#ciphers`.
- **Mobile navigation**: Hamburger toggle (≤640px). Tapping reveals the nav
  links as a vertical dropdown overlay. The CTA button hides on mobile; the
  chain tag hides on tablet and below.

## Content Hierarchy

### Hero (first viewport)
1. Wordmark + nav — identity and orientation
2. Headline ("The asset behind the veil") — the value proposition
3. Sub-headline — one-sentence mechanism summary
4. CTAs — "Read the mechanism" (primary), "Read the charter" (text link)
5. Hero art — vault image with orbit rings
6. Footnote — ZEC privacy disclaimer

### Status Ticker
Five equal cells: Network, Chain ID, Ciphers total, Reserve Asset, Status.
Pure status display, no interaction.

### Mechanism (`#mechanism`)
Section kicker ("THE MACHINE") → heading ("What happens under the cloth") →
intro text (2 paragraphs) → 4-step flow (Acquire → Activate → Accumulate →
Redeem). Step 02 (Activate) marked active.

### Ciphers (`#ciphers`)
Dark band: kicker → heading ("Rank is weight. Weight is memory.") →
weighted-share explanation → rank table (Cipher, Nullifier, Shadow,
Syndicate, Sovereign × Rank/Weight/Upgrade/Cap; Sovereign highlighted) →
transfer note.

### Vault (`#vault`)
Kicker → heading ("Nothing leaves without a window.") → accounting
explanation → vault card (placeholder data: CIPHER #0000, SEALED, dashed
metrics, 0x0000…c0de, CopyButton) → cipher note.

### Charter (`#charter`)
Kicker → heading ("Six articles. No fog.") → rules explanation → 6-article
grid (The Cipher, The Veil, The Press, The Cage, The Window, The Boundary).

### Signal / Follow
Eyebrow ("Before the first light") → heading ("Watch the veil.") → Twitter
prompt → follow card (PUBLIC SIGNAL label, button, note).

### Footer
Wordmark · "Designed for Robinhood Chain · 2026" · quick links.

## User Flows

### Flow 1: First-time visitor
Land on hero → ticker glance → mechanism 4-step flow → rank table → vault
card → charter skim → "Follow on Twitter" (external).

### Flow 2: Returning visitor
Land → ticker status check ("Forging the vault") → rank table for changes →
optional "Enter the vault" jump to `#ciphers`.

### Flow 3: Mobile visitor
Land (single column) → hamburger nav → jump to section → scroll → follow CTA.

## Naming Conventions

| Concept | Label in UI | Notes |
|---------|-------------|-------|
| The token | `$VSYNC` | Always with `$`, violet, monospace. |
| The NFT | `Cipher` | Capitalized in prose. |
| The reserve | `ZEC` | Always uppercase. |
| The chain | `Robinhood Chain` / `RH CHAIN / 4663` | Full name in prose, tag form in header. |
| A cipher's level | Rank name (Cipher…Sovereign) | Never "tier"/"level". |
| The mechanism | Mechanism | Never "protocol"/"system" in nav. |
| The rules | Charter | Never "terms"/"rules" in nav. |
| The product card | Vault | Never "card"/"dashboard" in nav. |
| Activation | Activate / Burn | "Burn $VSYNC to activate." Never "mint". |
| Redemption | Redeem / Burn the Cipher | Never "sell"/"withdraw". |
| Status | "Forging the vault" | Never "coming soon". |

## Component Reuse Map

| Component | Used on | Behavior differences |
|-----------|---------|---------------------|
| Wordmark | Header, Footer | Same markup, different color context |
| TokenSymbol (`$VSYNC`) | Hero lede, mechanism, ciphers, vault note | Inline violet mono span |
| Status dot | Header chain tag, Ticker status cell | Same green dot + glow |
| Button (primary) | Hero CTA, Signal follow CTA | Dark fill on paper; same on violet-dark |
| Button (small) | Header "Enter the vault" | Smaller padding variant |
| Text link | Hero "Read the charter" | Mono underline |
| Section kicker | All sections except hero/ticker | Mono label; light variant on dark band |
| Eyebrow | Hero, Signal section | Kicker variant with flanking rules |

## Content Growth Plan

None. Fixed single-page site until post-launch redesign. The rank table will
receive real values as a data swap, not a structural change.

## URL Strategy

- Single route `/`; no sub-routes, dynamic segments, or query parameters.
- Anchors: `#top`, `#mechanism`, `#ciphers`, `#vault`, `#charter`.
- External: Twitter profile only, `target="_blank" rel="noreferrer"`.