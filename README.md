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
| `tutorials.html` | Tutorials — an **index of the community's videos**, searchable by transcript (we link out, don't re-host) |
| `tutorial-collodion-process.html` | Flagship video tutorial — player, chapters, step-by-step guide, materials, safety, **searchable transcript** & sources |
| `knowledge.html` | Knowledge base — glossary, formulas and troubleshooting, each entry **cited**; community-edit & export affordances |
| `gallery.html` | Community gallery — grid of member plates with filters |
| `feed.html` | Community feed & events — one timeline **aggregated** from across the web, with RSS/JSON feeds |
| `directory.html` | Directory & events — photographer search, links to claimable profiles |
| `profile.html` | Claimable photographer profile — aggregates a member's whole presence |
| `resources.html` | Resource index — curated, outbound links to forums, videos, suppliers, books |
| `compare.html` | Supplier price comparison — staples table + full per-supplier catalogue, with export/API/RSS affordances |
| `about.html` | About — mission and how to take part |

> We deliberately **do not host a discussion forum**: that would compete with the very
> communities (Photrio, Reddit, etc.) the hub exists to point toward. Forum content is
> *aggregated* into the feed and *indexed* in resources instead.

### How the pages map to the strategy

| Pillar | Page(s) |
|--------|---------|
| Aggregate, don't rebuild | `resources.html`, `compare.html` (suppliers), `tutorials.html` (transcript-indexed videos) |
| Canonical knowledge + provenance | `knowledge.html` |
| Claimable identity | `profile.html` (via `directory.html`) |
| Community feed + events | `feed.html` |
| Open & interoperable | export / API / RSS affordances on `resources`, `compare`, `feed`, `knowledge`; transcripts as structured data |

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
index.html, tutorials.html, tutorial-collodion-process.html, knowledge.html,
gallery.html, feed.html, directory.html, profile.html, resources.html,
compare.html, about.html
STRATEGY.md              — vision: how the hub becomes the community's starting point
assets/css/styles.css    — shared styling and design tokens
assets/js/main.js        — mobile nav toggle, filter-chip demo, live text filter (transcript & video search)
assets/img/              — for future real assets (placeholders are CSS-generated)
```
