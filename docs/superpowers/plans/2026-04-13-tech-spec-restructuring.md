# Tech Spec Restructuring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure all 18 tech spec articles to place bases inline after each subsection (collapsible purple callout), move action statements adjacent to referencing tables, and fix TS 3/4.3 ESF formatting.

**Architecture:** Read the design spec at `docs/superpowers/specs/2026-04-13-tech-spec-restructuring-design.md` for the full template and rules. Each task restructures 1-5 articles following the same pattern. Phase 1 also adds CSS.

**Tech Stack:** Markdown, HTML callouts, CSS

**Spec:** `docs/superpowers/specs/2026-04-13-tech-spec-restructuring-design.md`

---

### Task 1: CSS + TS 3/4.3 Instrumentation (template article)

**Files:**
- Modify: `site/src/styles/global.css` (add callout-bases and esf-function classes)
- Modify: `wiki/tech-specs/ts-3-4-3-instrumentation.md` (restructure)

- [ ] **Step 1: Add CSS classes**

Add to `site/src/styles/global.css`:

```css
/* Bases callout — purple, collapsible */
.callout-bases { border-color: #a78bfa; background: rgba(167, 139, 250, 0.06); }
.callout-bases .callout-label { color: #a78bfa; }

/* ESF function heading emphasis */
.esf-function {
  font-size: 14px;
  font-weight: 700;
  color: #c8cdd5;
  border-left: 3px solid #a78bfa;
  padding-left: 10px;
  margin: 16px 0 8px;
}
```

- [ ] **Step 2: Read and restructure TS 3/4.3**

Read the full design spec at `docs/superpowers/specs/2026-04-13-tech-spec-restructuring-design.md`.

Read `wiki/tech-specs/ts-3-4-3-instrumentation.md` completely. Then restructure:

**a) ESF function headings:** Wrap each numbered ESF function heading (#### 1. Safety Injection through #### 9. Semiautomatic Transfer) in a div with class `esf-function`:

```html
<div class="esf-function">

#### 1. Safety Injection

</div>
```

**b) Action statements placement:**
- The Action Statements table (currently at ~line 182, defining Actions 13-23) moves to immediately after the ESF Channels and Actions table (Table 3.3-3, currently at ~line 156). The order becomes: ESF Channels table → ESF Interlocks table → Action Statements table.
- If Table 3.3-1 (RTS Channels) references actions from the actual TS that are not currently listed, add them after Table 3.3-1.

**c) Split bases inline:**
- The `## Bases` section (currently at ~line 228) has two subsections: RTS Instrumentation (3/4.3.1) and ESF Actuation Instrumentation (3/4.3.2).
- Move the RTS bases content to a collapsible block after section 3/4.3.1 (after the Minimum Channels table and any exam callouts).
- Move the ESF bases content to a collapsible block after section 3/4.3.2 (after the action statements and exam callouts).
- Section 3/4.3.3 (Monitoring Instrumentation) has no bases — don't add an empty block.
- Delete the now-empty `## Bases` section.

**d) Collapsible bases format:**

```html
<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.1 RTS Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.1</div>
[Bases content for RTS instrumentation]
</div>
</details>
```

- [ ] **Step 3: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add site/src/styles/global.css wiki/tech-specs/ts-3-4-3-instrumentation.md
git commit -m "refactor: restructure TS 3/4.3 — inline bases, action placement, ESF formatting

- Add callout-bases (purple) and esf-function CSS classes
- Move RTS and ESF bases inline as collapsible purple callouts
- Move action statements adjacent to ESF Channels table
- Apply .esf-function class to numbered ESF headings (1-9)
- Remove bottom ## Bases section

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: TS 3/4.4 — RCS

**Files:**
- Modify: `wiki/tech-specs/ts-3-4-4-rcs.md`

- [ ] **Step 1: Read and restructure TS 3/4.4**

Read the design spec at `docs/superpowers/specs/2026-04-13-tech-spec-restructuring-design.md`.

Read `wiki/tech-specs/ts-3-4-4-rcs.md` completely (319 lines, 11 subsections). The `## Bases` section (line ~214) has subsections for: RCS Loops (3/4.4.1), PORVs (3/4.4.5), RCS Leakage (3/4.4.7), Chemistry (3/4.4.8), Specific Activity (3/4.4.9), Pressure/Temperature Limits (3/4.4.10), RCS Vents (3/4.4.11).

For each bases subsection:
1. Identify the corresponding LCO subsection in the article
2. Read the bases content — extract the portions relevant to that specific subsection
3. Place a collapsible purple callout after the subsection's content (after actions, SRs, exam callouts)
4. Use exam callouts already in the article as guides for what bases facts matter

Subsections WITHOUT a corresponding bases entry (e.g., 3/4.4.2-3 Safety Valves, 3/4.4.4 Pressurizer, 3/4.4.6 SG Tubes) get no bases block.

Delete the `## Bases` section after distributing all content.

Also check: if any action tables reference action numbers that are defined elsewhere, move the definitions adjacent.

- [ ] **Step 2: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add wiki/tech-specs/ts-3-4-4-rcs.md
git commit -m "refactor: restructure TS 3/4.4 RCS — inline bases after each subsection

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: TS 3/4.1.1, 3/4.1.2, 3/4.1.3 — Boration Group

**Files:**
- Modify: `wiki/tech-specs/ts-3-4-1-1-boration-control.md`
- Modify: `wiki/tech-specs/ts-3-4-1-2-boration-systems.md`
- Modify: `wiki/tech-specs/ts-3-4-1-3-movable-control-assemblies.md`

- [ ] **Step 1: Read and restructure all three articles**

Read the design spec. For each article:

1. Read the full article and the `## Bases` section
2. Split bases by subsection — extract relevant portions for each LCO
3. Place collapsible purple callout after each subsection
4. Move action definitions adjacent to referencing tables if separated
5. Delete `## Bases` section

**TS 3/4.1.1 (Boration Control):** Bases at ~line 115 cover Shutdown Margin and MTC. Split between the SDM subsections and the MTC subsection.

**TS 3/4.1.2 (Boration Systems):** Bases at ~line 104. Split between Flow Paths, Charging Pumps, and Borated Water Sources.

**TS 3/4.1.3 (Movable Control Assemblies):** Bases at ~line 118 cover Group Height, Alignment, and Position Indication. Split accordingly.

- [ ] **Step 2: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add wiki/tech-specs/ts-3-4-1-*.md
git commit -m "refactor: restructure TS 3/4.1.x Boration — inline bases after each subsection

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: TS 3/4.5, 3/4.6, 3/4.7 — ECCS, Containment, Plant Systems

**Files:**
- Modify: `wiki/tech-specs/ts-3-4-5-eccs.md`
- Modify: `wiki/tech-specs/ts-3-4-6-containment.md`
- Modify: `wiki/tech-specs/ts-3-4-7-plant-systems.md`

- [ ] **Step 1: Read and restructure all three articles**

Read the design spec. Same pattern as Tasks 2-3:

**TS 3/4.5 (ECCS):** Bases at ~line 146 cover Accumulators, ECCS Subsystems, and RWST. Split between those subsections.

**TS 3/4.6 (Containment):** Bases at ~line 178 cover Integrity, Spray, and Fan Coolers. Split between subsections.

**TS 3/4.7 (Plant Systems):** Bases at ~line 232 cover MSSVs, AFW, CCW, Service Water, and others. This is the widest bases section — split carefully by subsection.

- [ ] **Step 2: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add wiki/tech-specs/ts-3-4-5-eccs.md wiki/tech-specs/ts-3-4-6-containment.md wiki/tech-specs/ts-3-4-7-plant-systems.md
git commit -m "refactor: restructure TS 3/4.5-7 ECCS/Containment/Plant Systems — inline bases

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: TS 3/4.2, 3/4.8, 3/4.9, 3/4.10, 3/4.11

**Files:**
- Modify: `wiki/tech-specs/ts-3-4-2-power-distribution.md`
- Modify: `wiki/tech-specs/ts-3-4-8-electrical.md`
- Modify: `wiki/tech-specs/ts-3-4-9-refueling.md`
- Modify: `wiki/tech-specs/ts-3-4-10-special-test-exceptions.md`
- Modify: `wiki/tech-specs/ts-3-4-11-radioactive-effluents.md`

- [ ] **Step 1: Read and restructure all five articles**

Same pattern. These are smaller/simpler articles.

**TS 3/4.2 (Power Distribution):** Bases at ~line 200. Split between AFD, FQ, F-delta-H, QPTR, DNB.

**TS 3/4.8 (Electrical):** Bases at ~line 101. Split between AC Sources and DC Sources.

**TS 3/4.9 (Refueling):** Bases at ~line 182. Split between Boron, Source Range, Containment, RHR, Water Level, Storage Pool.

**TS 3/4.10 (Special Test Exceptions):** Bases at ~line 127. Split between SDM, Group Height, Physics Tests.

**TS 3/4.11 (Radioactive Effluents):** Bases at ~line 80. Split between Liquid Holdup and Explosive Gas.

- [ ] **Step 2: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add wiki/tech-specs/ts-3-4-2-power-distribution.md wiki/tech-specs/ts-3-4-8-electrical.md wiki/tech-specs/ts-3-4-9-refueling.md wiki/tech-specs/ts-3-4-10-special-test-exceptions.md wiki/tech-specs/ts-3-4-11-radioactive-effluents.md
git commit -m "refactor: restructure TS 3/4.2, 3/4.8-11 — inline bases

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: TS 1.0, 2.0, 3/4.0, 6.0 — Definitions, Safety Limits, Applicability, Admin

**Files:**
- Modify: `wiki/tech-specs/ts-1-0-definitions.md`
- Modify: `wiki/tech-specs/ts-2-0-safety-limits.md`
- Modify: `wiki/tech-specs/ts-3-4-0-applicability.md`
- Modify: `wiki/tech-specs/ts-6-0-admin-controls.md`

- [ ] **Step 1: Read and restructure all four articles**

These have minimal bases sections. Same pattern — move inline as collapsible purple callout, delete `## Bases`.

**TS 1.0 (Definitions):** Bases at ~line 78. Brief — place after the definitions section.

**TS 2.0 (Safety Limits):** Bases at ~line 86. Split between Safety Limits and LSSS subsections.

**TS 3/4.0 (Applicability):** Bases at ~line 78. Place after the applicability LCOs.

**TS 6.0 (Admin Controls):** Bases at ~line 152. Very brief — place after the last admin subsection.

- [ ] **Step 2: Build check**

```bash
cd site && npm run build
```

- [ ] **Step 3: Commit and push**

```bash
git add wiki/tech-specs/ts-1-0-definitions.md wiki/tech-specs/ts-2-0-safety-limits.md wiki/tech-specs/ts-3-4-0-applicability.md wiki/tech-specs/ts-6-0-admin-controls.md
git commit -m "refactor: restructure TS 1.0, 2.0, 3/4.0, 6.0 — inline bases

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push
```
