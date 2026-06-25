# Wetplate Hub — website mockup

A static, clickable mockup for **Wetplate Hub**: a proposed global, community-run
hub for wet plate collodion photography (tintypes & ambrotypes).

This is a **design mockup** for review — no backend, no build step, no external
dependencies. All placeholder imagery is generated with CSS so the site renders
fully offline.

## Pages

| File | Section |
|------|---------|
| `index.html` | Home — hero, section overview, featured plates, join CTA |
| `tutorials.html` | Tutorials & technique — guides, filters, the collodion process |
| `gallery.html` | Community gallery — grid of member plates with filters |
| `forum.html` | Discussion forum — categories and recent topics |
| `directory.html` | Directory & events — photographers, search, workshops |
| `about.html` | About — mission and how to take part |

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
index.html, tutorials.html, gallery.html, forum.html, directory.html, about.html
assets/css/styles.css   — shared styling and design tokens
assets/js/main.js        — mobile nav toggle + filter chip demo
assets/img/              — for future real assets (placeholders are CSS-generated)
```
