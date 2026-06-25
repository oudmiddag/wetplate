# Wetplate Hub — website mockup

A static, clickable mockup for **Wetplate Hub**: a proposed global, community-run
hub for wet plate collodion photography (tintypes & ambrotypes).

This is a **design mockup** for review — no backend, no build step, no external
dependencies. All placeholder imagery is generated with CSS so the site renders
fully offline.

The hub's distinguishing idea is to be a **connective layer**, not another silo: it
indexes, links, credits and preserves the knowledge that already exists across the
community. See [`STRATEGY.md`](STRATEGY.md) for the full vision and the five pillars.

## Pages

| File | Section |
|------|---------|
| `index.html` | Home — hero, the "we connect everything" overview, featured plates, join CTA |
| `tutorials.html` | Tutorials & technique — guides, filters, the collodion process |
| `tutorial-collodion-process.html` | Full video tutorial — video player, chapters, step-by-step guide, materials, safety, transcript & sources |
| `knowledge.html` | Knowledge base — glossary, formulas and troubleshooting, each entry **cited** |
| `gallery.html` | Community gallery — grid of member plates with filters |
| `feed.html` | Community feed & events — one timeline **aggregated** from across the web |
| `forum.html` | Discussion forum — categories and recent topics |
| `directory.html` | Directory & events — photographer search, links to claimable profiles |
| `profile.html` | Claimable photographer profile — aggregates a member's whole presence |
| `resources.html` | Resource index — curated, outbound links to forums, videos, suppliers, books |
| `about.html` | About — mission and how to take part |

### How the pages map to the strategy

| Pillar | Page |
|--------|------|
| Aggregate, don't rebuild | `resources.html` |
| Canonical knowledge + provenance | `knowledge.html` |
| Claimable identity | `profile.html` (via `directory.html`) |
| Community feed + events | `feed.html` |

## How to view

Open `index.html` in any modern browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Design

- **Style:** modern & clean — light palette, generous whitespace, system sans-serif,
  one warm accent (a nod to collodion chemistry).
- **Language:** English (international audience).
- **Structure:** shared header/footer across all pages; responsive with a mobile nav.

## Files

```
index.html, tutorials.html, knowledge.html, gallery.html, feed.html,
forum.html, directory.html, profile.html, resources.html, about.html
STRATEGY.md              — vision: how the hub becomes the community's starting point
assets/css/styles.css    — shared styling and design tokens
assets/js/main.js        — mobile nav toggle + filter chip demo
assets/img/              — for future real assets (placeholders are CSS-generated)
```
