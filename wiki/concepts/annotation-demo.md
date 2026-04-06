---
title: Annotation Demo
category: concepts
status: draft
aliases: []
---

# Annotation Demo

This page demonstrates the highlighting and annotation options available for marking up important study material.

## Option A — Inline Highlights

Use `<span class="hi">` tags to highlight text inline. Three flavors:

### General Highlight (hi)

Use for important facts you want to stand out during study.

The reactor core contains <span class="hi">193 fuel assemblies</span> in a <span class="hi">17x17 rod array</span> with <span class="hi">264 fuel rods per assembly</span>.

The design basis minimum shutdown margin is <span class="hi">1.3 %delta-rho</span>.

### Exam Highlight (hi-exam)

Use for facts you've seen tested on NRC exams or that are high-yield for the licensing exam.

Accumulators begin injecting <span class="hi-exam">approximately 10 seconds after a large LOCA break</span>. The active ECCS pumps have a time delay of <span class="hi-exam">approximately 25 seconds</span>.

Safety injection pump discharge is limited to <span class="hi-exam">less than 1500 psig</span> to prevent lifting RCS safety valves.

### Trap Highlight (hi-trap)

Use for common exam traps, trick question territory, or easy-to-confuse facts.

The PORVs lift at <span class="hi-trap">2335 psig</span> and the High Pressure Trip is at <span class="hi-trap">2385 psig</span> — don't confuse these two values (only 50 psi apart).

Unit 1 steam generators are <span class="hi-trap">Model F with 5626 U-tubes</span> while Unit 2 has <span class="hi-trap">Model 61/19T with 5048 U-tubes</span> — exam questions may ask about a specific unit.

## Option B — Inline Highlights in Tables

The highlights work inside table cells too:

| Parameter | Value | Notes |
|-----------|-------|-------|
| Accumulator Pressure | <span class="hi-exam">650 psig nominal</span> | Frequently tested |
| RWST Min Volume | <span class="hi">364500 gal</span> | Basis for refueling canal fill |
| Hot Leg Recirc (Unit 1) | <span class="hi-trap">14.0 hours</span> | Different from Unit 2! |
| Hot Leg Recirc (Unit 2) | <span class="hi-trap">6.5 hours</span> | Different from Unit 1! |
| RHR Pumps Deliver at | <span class="hi-exam">~170 psig RCS</span> | Low head injection |

## Option C — Callout Blocks

Use for longer notes, exam references, or warnings. These are block-level callouts.

### Exam Callout

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q23, 2022 Q47</div>
Which ECCS component is the first to inject during a large-break LOCA? Answer: Accumulators (~10 sec), because they are passive and require no signal — only RCS pressure dropping below accumulator pressure.
</div>

### Important Callout

<div class="callout callout-important">
<div class="callout-label">Important</div>
During the injection phase, all ECCS pumps take suction from the RWST. Changeover to recirculation requires operator action to realign RHR pump suction from the RWST to the containment sump.
</div>

### Trap Callout

<div class="callout callout-trap">
<div class="callout-label">Exam Trap</div>
The BIT (Boron Injection Tank) exists only on Unit 2. The diluted boric acid in the BIT is NOT credited for accident mitigation. Exam questions about the BIT may try to apply it to Unit 1 or credit its boron concentration.
</div>

## Option D — Combined Usage

You can combine inline highlights with callout blocks for maximum clarity:

The SI actuation signal initiates: <span class="hi">reactor trip</span>, <span class="hi">diesel generator start</span>, <span class="hi">safeguards sequence</span>, and <span class="hi">Phase A containment isolation</span>.

<div class="callout callout-exam">
<div class="callout-label">Exam — Multiple Years</div>
Know all 5 SI actuation signals and their coincidence logic. This is tested almost every exam cycle. The <span class="hi-trap">manual signal requires 1 of 2 switches</span> — not both.
</div>

## Syntax Quick Reference

**Inline highlights** — type directly in markdown:
- `<span class="hi">important fact</span>` — blue highlight
- `<span class="hi-exam">tested on exams</span>` — amber/gold highlight
- `<span class="hi-trap">easy to confuse</span>` — red highlight

**Callout blocks** — type directly in markdown:
```
<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q15</div>
Your note here about what was tested and the answer.
</div>
```

Callout types: `callout-exam` (amber), `callout-important` (blue), `callout-trap` (red)
