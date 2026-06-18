# UFSAR System-Enrichment Ingestion Guide

This is the complete spec for enriching **ONE** Salem *system* wiki article
(`wiki/systems/<slug>.md`) with UFSAR-sourced engineering content. A subagent with
no other context must be able to enrich one article correctly from this guide alone.

Work from repo root `/Users/fredm/projects/salem-study-system` on branch
`ufsar-system-enrichment`. You are given exactly one `<slug>` to enrich. Do not touch
any other system article.

The governing quality rule for this project is absolute: **every value, setpoint, and
fact must be traceable to a source document — never fabricated, never guessed.** If you
cannot source a value, you do not write it; you record a gap (Section 6). When in doubt,
stop and flag to the human rather than invent.

---

## 1. Inputs

Gather these before writing anything. Read them in this order.

1. **The article to enrich:** `wiki/systems/<slug>.md`. Read it in full. Note its
   front-matter (`title`, `category`, `status`, `aliases`), its existing prose
   sections, and especially every existing `callout-exam` / `callout-jpm` /
   `callout-scenario` block and every `### sub-subsection` — these are PRESERVED
   verbatim (Section 5).

2. **The system-map row:** open `data/ufsar/system-map.json` and find the object whose
   `"slug"` equals your `<slug>`. It tells you:
   - `"mode"` — either `"ka_index"` (Section 3) or `"ufsar_structure"` (Section 4). This
     decides the entire section structure you build.
   - `"catalog_system"` — the NRC K/A catalog system number (e.g. `"008"` for CCW), or
     `null`.
   - `"ufsar_chapter"` / `"ufsar_section"` — where the system lives in the UFSAR, e.g.
     `"Chapter 9"` / `"9.2.2"`. A section value may carry a locating hint, e.g.
     `"9.2 (locate chilled-water subsection via the Ch 9 TOC)"`.
   - `"salem_na"` — if `true`, the system does not exist at Salem; do NOT enrich it,
     leave the article untouched, and report that back.

3. **The K/A index (only for `ka_index` mode):** `data/ufsar/ka-index/<slug>.md`. This is
   your topic checklist. It groups the system's active K/As into headed groups —
   Predict/Monitor Parameters (A1), Predict Impacts & Act (A2), Automatic Features &
   Setpoints (A3), Control-Room Operation (A4), Interconnections (K1), Power Supplies
   (K2), Effect of Loss on Other Systems (K3), Design Features & Interlocks (K4),
   Operating Concepts (K5), Effect of Conditions/Malfunctions (K6). Each bullet is a
   topic you must try to cover, e.g. `008 A3.05 — Automatic isolation valves in the
   CCWS`. Every topic is either answered from a source (you write it) or recorded as a
   gap (Section 6). **The index's header/preamble lines (the `# K/A index — ...` title and
   the `N active system K/As. Cover each topic...` instruction) are guidance to YOU — never
   copy them into the article body.**

4. **The UFSAR chapter PDF.** Look up the chapter named in your system-map row in
   `data/ufsar/chapter-index.json`; that file maps each chapter title to its PDF
   filename under `raw/ufsar/` (gitignored) and its page span. For Chapter 9 the entry is
   `{"title": "Chapter 9", "start_page": 1585, "end_page": 1828, "pdf": "ch-chapter-9.pdf"}`.
   The PDF path is `raw/ufsar/ch-chapter-9.pdf`.
   - **Locate your section, then read only its pages.** First Read the chapter PDF's
     first few pages with the Read tool's `pages:` argument (e.g. `pages: "1-6"`) to get
     the chapter's own table of contents, which lists each subsection (e.g. `9.2.2
     Component Cooling Water System`) against an in-chapter page number. Map that to the
     PDF page range and Read just those pages (e.g. `pages: "40-58"`). The chapter PDFs
     are large; never read a whole chapter. Read at most ~20 pages per Read call.
   - If pdfplumber-style text garbles a figure or table value, read that page as an
     IMAGE (the Read tool renders PDF pages visually) to resolve it. Never transcribe a
     value you cannot read clearly; record it as a gap instead.

5. **Tech Spec articles:** `wiki/tech-specs/`. Files are slugged `ts-3-4-7-plant-systems.md`,
   `ts-3-4-4-rcs.md`, etc. Use these for LCOs, action statements, surveillance
   requirements, and amendment numbers. CCW, for example, is governed by
   `[[TS 3/4.7 — Plant Systems]]` (TS 3.7.3).

6. **Existing exam callouts already in the article** — the `callout-exam` / `-jpm` /
   `-scenario` blocks. These are a *source* (lowest priority, Section 2) AND content you
   must preserve (Section 5). Read them; they often already state the exact setpoint or
   automatic action a K/A topic asks for.

---

## 2. Sourcing priority & citation format

**Priority order** (use the highest-priority source that answers the topic; cite that
one):

1. **UFSAR section** — the primary engineering source. Cite the section or table.
2. **Tech Specs** — for LCOs, setpoints, action/completion times, surveillances. Always
   include the amendment number when the value is amendment-controlled.
3. **Vendor / system descriptions** — Salem System Operating procedures (`S2.OP-SO.*`),
   Abnormal procedures (`AB.*`), vendor manuals referenced in the UFSAR.
4. **Existing exam-bank callouts** — the question/JPM/scenario blocks already in the
   article. Lowest priority because they are reconstructed from exam materials, but they
   are valid and often very specific.

**Every value you write carries an inline citation** in parentheses immediately after the
fact. Examples, drawn from the real articles:

- `(UFSAR §9.2.2)` — a UFSAR subsection.
- `(UFSAR Table 9.2-1)` — a UFSAR table.
- `(UFSAR Figure 9.2-1)` — a UFSAR figure.
- `(TS 3/4.7.3, Amend NNN)` — a Tech Spec value with its amendment — use the actual amendment number from the TS article, never a guessed one.
- `(see Exam — 2014 Q31)` — a fact taken from an existing exam callout; point at the
  exam label that already appears in the article.

**Hard rules:**

- **NEVER fabricate.** No estimated, "typical PWR", or inferred values. If the UFSAR says
  a pump is rated for flow but you cannot read the number, write the qualitative fact and
  record the number as a gap — do not invent a number.
- **No commas in numbers.** Write `2485`, not `2,485`. Write `1750 gpm`, not `1,750 gpm`.
- **If two sources disagree** on a value (e.g. UFSAR says one setpoint, a callout says
  another), **STOP and flag it to the human** in your final report with both values and
  both citations. Do NOT silently pick one. Do NOT average them.

---

## 3. `ka_index` mode — section structure

When the system-map row says `"mode": "ka_index"`, build/extend the article body in
**exactly this order**. Each subsection covers the topics from its matching K/A-index
group(s). Pull the engineering content from the UFSAR section first, then TS, then system
descriptions, then existing callouts (Section 2 priority).

```
## Function & Design Basis      ← UFSAR function/design-basis prose (the system's purpose, safety function, design bases)
## Key Components                ← component list with function & location
## Power Supplies                ← K2 group (pump/valve power, swing-bus, EDG loading)
## Automatic Features & Setpoints ← A3 group (auto isolations, ESFAS actions, setpoints)
## Design Features & Interlocks  ← K4 group (interlocks, standby feature, surge tank design)
## Interconnections & Loads      ← K1 / K3 groups (SWS, loads cooled, effect-of-loss)
## Effects of Loss / Malfunction ← K6 group (loss of pump, instrument failures)
## Control-Room Operation        ← A4 group (indications, controls, fill/drain, startup)
```

Then keep the **existing tail** in this order, in whatever form it already exists in the
article (do not invent these if absent, but never delete them if present):

```
## Tech Spec LCOs
## Related EOPs
## Exam History
## Connections
```

Rules for `ka_index` mode:

- **Omit a subsection entirely** if it has neither K/A-index topics *nor* UFSAR content to
  fill it. Do not emit an empty heading. (Example: a system with no interlocks and no K4
  topics gets no `## Design Features & Interlocks` heading.)
- The A1 (Predict/Monitor Parameters) and A2 (Predict Impacts & Act) groups are usually
  *behavioral* — fold their content into the most relevant structural subsection (A1
  parameters into `## Automatic Features & Setpoints` or `## Control-Room Operation`; A2
  malfunction responses into `## Effects of Loss / Malfunction`) rather than minting a
  separate heading. K5 (Operating Concepts: chemistry, gas accumulation) folds into
  `## Design Features & Interlocks` or `## Function & Design Basis`.
- Within each subsection, lead with the sourced engineering prose, then nest any PRESERVED
  callouts that belong to that topic underneath it (Section 5). The real CCW article
  (`wiki/systems/component-cooling-water.md`) is the model: a `### sub-subsection` heading
  (e.g. `### Containment Isolation Valves (CC113, CC215, CC131, CC190)`) followed by the
  exam callouts for that topic.

---

## 4. `ufsar_structure` mode

When the system-map row says `"mode": "ufsar_structure"`, there is **no K/A index**
(`catalog_system` is `null` or there is no `ka-index/<slug>.md`). Instead, port the
UFSAR section's own structure into the article. UFSAR system writeups follow a standard
shape: *function / design bases / system description (components) / operation / safety
evaluation*. Map that into:

```
## Function & Design Basis   ← UFSAR function + design-bases paragraphs
## Key Components             ← UFSAR system-description components (function, location)
## Operation                 ← UFSAR normal/abnormal operation + safety evaluation
```

Then keep the existing tail (`## Tech Spec LCOs`, `## Related EOPs`, `## Exam History`,
`## Connections`) exactly as in Section 3 — keep what exists, do not fabricate.

Same citation rules as Section 2 apply (UFSAR § first, no commas, never fabricate, flag
disagreements). Same preserve-existing-content rules as Section 5 apply: any callouts
already in the article move under the most relevant of these three subsections.

For Chill Water specifically (`wiki/systems/chill-water.md`, `ufsar_structure`, Chapter 9
§9.2, "locate chilled-water subsection via the Ch 9 TOC"): the existing article has three
sections — `## Function`, `## Key Actions / Information` (which contains the three JPM
callouts about non-essential heat-load isolation), and `## Connections`. Build
`## Function & Design Basis` + `## Key Components` + `## Operation` from the UFSAR
chilled-water subsection, move the three existing JPM callouts under `## Operation`
(they are about operating the system under both-chillers-tripped conditions), and REMOVE
the now-empty `## Key Actions / Information` heading — do not leave a dangling empty
section. Do not reword the callouts.

---

## 5. Preserve existing content (issue #70 pattern)

The article already contains exam/JPM/scenario callouts that were ingested from NRC exam
packages. They are authoritative study content and **must survive enrichment unchanged.**

- **Move, never rewrite, never delete.** Each existing
  `<div class="callout callout-exam">` / `callout-jpm` / `callout-scenario` block is
  MOVED verbatim — every word, every `<span>`, every wikilink — under the new subsection
  whose topic it matches. Do not reword the prose. Do not "modernize" a value. Do not drop
  a trap note. The `<div class="callout-label">Exam — 2014 Q31</div>` line stays exactly
  as written.
- **Match callouts to subsections by topic.** A callout about automatic isolation valves
  goes under `## Automatic Features & Setpoints`; a callout about a CCW pump trip / loss
  of CCW goes under `## Effects of Loss / Malfunction`; a Tech Spec callout stays with
  `## Tech Spec LCOs`. When several callouts share a topic, group them under a
  `### sub-subsection` heading exactly as the CCW article does (e.g. `### Surge Tank & Vent
  Valve (2CC149)`, `### RCP Protection on Loss of CCW`).
- **Preserve all existing `### sub-subsections`.** If the article already organizes
  callouts under sub-subsection headings, keep those headings and their groupings; just
  relocate the whole sub-subsection under the correct new `##` parent.
- **Preserve the `## Connections` block** and its `[[wikilinks]]` list intact. You will
  ADD new cross-links there (Section 8), but never remove existing ones.
- After moving callouts, **every callout that was in the article before must still be in
  the article after.** Count them before and after as a check.

---

## 6. Gaps

A K/A-index topic (or, in `ufsar_structure` mode, a structural element the UFSAR section
clearly should cover) that is answered by **none** of the four sources is a gap. You do not
invent an answer — you record it.

- Append one bullet per unanswered topic to `data/ufsar/gaps/<slug>.md` (create the
  `data/ufsar/gaps/` directory and the `<slug>.md` file if they do not already exist; one
  file per system).
- Bullet format: `K/A — topic — what was checked`. Example:

  ```
  - 008 A3.06 — Typical CCW pump operating conditions (vibration, sound, motor current) — checked UFSAR §9.2.2, TS 3/4.7.3, S2.OP-SO.CC procedures, existing callouts; no sourced value found
  ```

- A gap is a normal, expected outcome — many K/A topics (alarm sound levels, exact
  instrument sensor lists) are simply not in the UFSAR. Recording the gap honestly is
  correct; writing a fabricated value to "cover" the topic is a quality failure.

---

## 7. CSS classes

Reuse the project's existing classes — do not introduce new ones. The CCW article
(`wiki/systems/component-cooling-water.md`) is the canonical example of all of them in use.

**Value emphasis spans** (use inside prose and tables for setpoints):

- `<span class="val-trip">175°F</span>` — a TRIP / protective-action setpoint (red).
- `<span class="val-alarm">70 psig</span>` — an ALARM setpoint (amber).
- `<span class="val-normal">2 CCW pumps running</span>` — a normal operating value (green).

**Text-emphasis spans** (use to mark up exam-relevant facts and traps):

- `<span class="hi">surge tank</span>` — general highlight.
- `<span class="hi-exam">2CC215 and 2CC113 receive a Phase A close signal</span>` — the exam-relevant fact.
- `<span class="hi-trap">145 gpm is the lo flow alarm, not the auto-closure setpoint</span>` — the trap / common misconception.

**Callout blocks** (the preserved exam content from Section 5). Each is a `<div>` opened
with the class, a `<div class="callout-label">` line, the prose, and a closing `</div>`:

- `callout-exam` with label `Exam — 2014 Q31`
- `callout-jpm` with label `JPM — 2014 Sim-h`
- `callout-scenario` with label `Scenario — 2012 #1`

See `wiki/systems/component-cooling-water.md` lines 33-36 for a complete copy-ready block.

You generally will not author new callouts (those come from exam ingestion); you preserve
existing ones. New UFSAR-sourced prose uses the value/text spans where a setpoint or a
known exam fact appears. Open `wiki/systems/component-cooling-water.md` and copy the exact
markup pattern.

---

## 8. Per-system verification checklist

Run all of these from repo root before reporting done. The article is not finished until
every check passes.

1. **Every new value has an inline citation.** Re-read each sentence you added; each
   setpoint, flow, temperature, LCO, and component fact ends in a citation of the form
   `(UFSAR §9.2.2)`, `(TS 3/4.7.3, Amend NNN)`, or `(see Exam — 2014 Q31)`. No uncited
   value ships.

2. **No tool-tag artifacts** left behind by editing:

   ```bash
   grep -rlE "</content>|</invoke>" wiki/systems/<slug>.md
   ```

   Must print nothing (empty result).

3. **Wikilinks resolve:**

   ```bash
   python3 scripts/check-wikilinks.py
   ```

   Must report clean (no broken links). Fix any link you introduced that does not resolve.

4. **New cross-links are bidirectional.** For every NEW `[[Target]]` wikilink you added to
   this article (e.g. a new `[[CVCS]]` reference under `## Interconnections & Loads`), open
   the target article and confirm it links back to this system. If it does not, add the
   back-link in the target's `## Connections` block. Do not add same-category links that the
   project forbids: no system→system, TS→TS, or concept→concept links except where an
   existing pattern already does so (the CCW article links to `[[CVCS]]` only from within
   callouts that were ingested that way — match existing precedent, do not add new
   system→system links in your own prose).

5. **Site builds clean:**

   ```bash
   cd site && npm run build
   ```

   Must complete with no errors. A malformed `<div>` callout or unescaped character will
   fail the Astro build — fix it.

6. **Article still renders.** Confirm no broken HTML: every `<div class="callout callout-exam">` you
   moved has its matching closing `</div>`, every `<span>` is closed, and front-matter is
   intact. The build in step 5 catches most of this; a quick visual re-read of the moved
   callouts confirms the rest.

When all six pass, report: the slug enriched, the mode used, which subsections you built,
how many callouts were preserved (before/after count), how many gaps you appended to
`data/ufsar/gaps/<slug>.md`, and any source disagreements you flagged for the human.
