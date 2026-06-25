# Wetplate Hub — Strategy & Vision

> How a website becomes the *starting point* the wet plate collodion community
> wants to be on — instead of yet another silo.

## The problem

Knowledge about wet plate collodion photography already exists in abundance — but
it is **scattered and fragile**:

- Aging forums (collodion.com, Photrio/APUG threads) with decades of hard-won answers.
- YouTube channels and one-off tutorial videos.
- Instagram and Facebook groups where work and Q&A disappear down the timeline.
- Personal blogs, out-of-print books, and supplier knowledge bases.

Building *another* site that re-hosts its own tutorials just adds a new silo. People
already have bookmarks. They won't switch to "one more website." A new home only wins
if it makes everything that already exists **easier to find, connected, and lasting**.

## Positioning: be the connective layer, not a content silo

Wetplate Hub's job is not to own the best content — it is to be the **map and the
junction** for all of it. The thesis in one line:

> **Index + citations + claimable identity + open data + preservation.**

Be the place that makes every other resource discoverable, linked, credited, and
permanent. That is infrastructure — and infrastructure is what a community organizes
around.

## The five pillars

### 1. Aggregate, don't rebuild
- A curated, searchable **resource index** that points *outward* to the canonical
  forum threads, videos, suppliers (by region), books, and blogs.
- Generous outbound linking; the goal is "start here, then go to the source."
- Community rating/curation so the best resource for each topic rises to the top.
- *In the mockup:* `resources.html`.

### 2. Canonical knowledge, with provenance
- A community-editable knowledge base — glossary, chemistry formulas, defect
  troubleshooting — where **every entry cites its source** and links to the original
  discussion.
- "Last reviewed by" and revision history build trust and credit the originators
  instead of cannibalizing them.
- *In the mockup:* `knowledge.html`.

### 3. Claimable identity for photographers
- Profiles that **aggregate a photographer's existing presence** (Instagram, YouTube,
  personal site) into one canonical "home."
- "Claim this profile" turns the directory into the authoritative *who's who* — and
  gives artists a real reason to want to be listed: it becomes their calling card.
- *In the mockup:* `profile.html`, linked from `directory.html`.

### 4. One community feed + aggregated events
- A single activity timeline that **pulls in** members' posts from Instagram/YouTube/
  blogs/forum, each item badged with its source ("via …").
- An aggregated events/workshops calendar, today spread across supplier sites and
  loose posts.
- *In the mockup:* `feed.html`.

### 5. Open & interoperable
- Open, structured data (formulas, suppliers, events, profiles) with export, an API,
  and RSS — so others can build on it rather than being locked in.
- Open-source and community-editable, Wikipedia-style. People invest in what they
  *own* and can extend.

## Why people will *want* to be on it

Network effects, not lock-in:

- **The profile is a calling card.** Being in the canonical directory has real value,
  so artists claim and maintain their listing.
- **Contribution earns credit.** Citations, authorship, and "reviewed by" surface the
  people who share knowledge.
- **Ownership.** Open data and an editable knowledge base make it the community's
  project, not a company's product.
- **It saves you time.** When the hub is where everything is indexed and cross-linked,
  it becomes the rational first click — and the default starting point.

## Phasing

- **Phase 1 — Low barrier:** resource index + claimable profiles. Immediate utility
  with little content to author; mostly curation and linking.
- **Phase 2 — Depth:** knowledge base with citations + the aggregated community feed
  and events calendar.
- **Phase 3 — Infrastructure:** open API/export, and consented archiving of at-risk
  content (dying forums, out-of-print PDFs) — which makes the hub irreplaceable.

## Where to see it

This repository contains a static, clickable mockup demonstrating each pillar:

| Pillar | Page |
|--------|------|
| Aggregate, don't rebuild | `resources.html` |
| Canonical knowledge + provenance | `knowledge.html` |
| Claimable identity | `profile.html` (via `directory.html`) |
| Community feed + events | `feed.html` |

See `README.md` for how to view the mockup.
