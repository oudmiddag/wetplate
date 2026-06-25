# Structured data — collodion wet plate ontology

This folder holds the **structured-data layer** of Wetplate Hub: a single,
machine-readable vocabulary for the wet plate collodion domain, plus the
artefacts generated from it. It implements Pillar 5 of the strategy
(*open & interoperable*) and feeds Pillar 2 (*canonical knowledge + provenance*).

## Files

| File | Role | Edited by |
|------|------|-----------|
| `collodion-wetplate-ontology.ttl` | **Source of truth.** OWL/Turtle ontology: classes, properties, individuals, with bilingual labels (`@en`/`@nl`), `skos:definition`s, CAS numbers, formulas, hazard notes and `rdfs:seeAlso` source links. | by hand |
| `ontology.jsonld` | Generated schema.org JSON-LD: a `DefinedTermSet` (glossary) + a `HowTo` (the process, steps ordered via `precedes`). | generated |
| `glossary.generated.html` | Generated glossary fragment in the site's existing `.cat-list` markup. | generated |

`../knowledge.html` carries the same JSON-LD inline (between the
`ONTOLOGY:JSONLD` marker comments) so search engines get a `DefinedTermSet`
and `HowTo` for rich results.

## Build

Dependency-free — no `rdflib`, no npm, the site stays a static mockup:

```bash
python3 tools/build_from_ontology.py
```

Re-run after every edit to the `.ttl`. It re-emits `ontology.jsonld` and
`glossary.generated.html` and re-injects the JSON-LD into `knowledge.html`.
The generated files are committed so the site needs no build step to be served.

## What changed in v0.2

- **English labels + `skos:definition` on every term** (the site is English;
  `@nl` retained for a future Dutch edition).
- **Provenance**: `rdfs:seeAlso` links to canonical references and `hasCASNumber`
  on chemicals — aligning the data with the site's "cited, not invented" rule.
- **Modelling fixes**: `ProcessStep` is no longer a sub-class of `Process`
  (a step is *part of* a process, not a kind of it); added `isStepOf`/`follows`
  inverses; image types now use `hasSupport` instead of mis-using `usesMaterial`
  (whose domain is `Process`); populated the previously-empty `prevents`,
  formulas and hazard notes; added the `Oysters` defect and reconciled defect
  names with `knowledge.html` via `skos:altLabel` ("Comet trails", "Fogging").

## Where it plugs into the site

- **Glossary / knowledge base** — `glossary.generated.html` drops into
  `knowledge.html`.
- **Tutorial steps** — the ordered `HowTo` mirrors
  `tutorial-collodion-process.html`.
- **Tagging / connective layer** — the term `@id`s are stable IRIs to tag
  resources, gallery plates and forum threads against.
- **SEO** — the inline JSON-LD makes the knowledge base machine-readable.

---

## Advice on governance (strategy point 4)

The open question: the ontology is **editorial canon** (one curated source of
truth), while the knowledge base is meant to be **wiki-style, community-edited**.
Left unmanaged these two drift apart. Recommendation:

1. **One source of truth, by layer — don't duplicate.** Keep the `.ttl` as the
   canonical store for the *structured* facts that benefit from being typed and
   linked: terms, definitions, the process/step graph, chemical identity
   (CAS/formula), safety links, and the cross-link tags. Keep free-form,
   fast-moving prose (long troubleshooting write-ups, opinionated technique
   notes, regional supplier nuance) in the editable knowledge base. Each fact
   lives in exactly one place; the website composes both.

2. **Generate, never hand-edit downstream.** `knowledge.html`'s glossary and the
   JSON-LD are build outputs. Edits go into the `.ttl`; the script regenerates.
   This is already enforced by the "do not edit by hand" banners and the marker
   comments — wire `python3 tools/build_from_ontology.py` into CI so a PR that
   touches the `.ttl` but forgets to regenerate fails the check.

3. **Make contribution low-friction.** Practitioners won't write Turtle. Two
   workable paths:
   - *Short term:* contributions arrive as PRs or a simple form; a maintainer
     (or a small validation script) translates them into the `.ttl`. Authorship
     is captured with `dcterms:creator` / `dcterms:source` per term, so credit
     and "last reviewed by" — the site's trust signals — survive into the data.
   - *Longer term (Phase 3):* a thin editing UI writes the triples, with the
     `.ttl`/RDF as the export format and an API/SPARQL endpoint on top. The
     static mockup is deliberately not there yet; the ontology is the asset that
     makes that step cheap when it comes.

4. **Govern quality with provenance + review, not lock-down.** Every term should
   carry a source (`rdfs:seeAlso`/`dcterms:source`) and a reviewer; treat an
   unsourced term as a draft. Add SHACL/`*.sh` shape checks (or extend this
   build script) to fail validation when a term lacks a label, a definition or a
   source — the machine-checkable version of the editorial standard.

5. **Version and link, so others can build on it.** Bump `owl:versionInfo` per
   release, keep IRIs stable (they are the contract for anyone tagging against
   the hub), and prefer linking out to established authorities (Wikidata, Getty
   AAT, PubChem via CAS) over re-describing them — the connective-layer ethos,
   applied to data.

**One-line summary:** make the ontology the *typed spine* and the wiki the
*prose muscle*, keep every downstream view generated, and gate contributions on
provenance + review rather than on who can write RDF.
