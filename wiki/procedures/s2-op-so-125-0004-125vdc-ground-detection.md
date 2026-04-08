---
title: "S2.OP-SO.125-0004 — 125VDC Ground Detection"
category: procedures
status: draft
aliases:
  - S2.OP-SO.125-0004
  - 125VDC Ground Detection
---

# S2.OP-SO.125-0004 — 125VDC Ground Detection

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for detecting and isolating grounds on the 125VDC electrical distribution system on Salem Unit 2.

## Key Information

### Ground Detection Criteria
| Indication | Meaning |
|------------|---------|
| Resistance ≤ 50K ohms | Ground IS detected |
| Resistance > 50K ohms | Normal — no ground present |

### Isolation Method
- Open breakers on the bus ONE AT A TIME
- Evaluate ground readings after each breaker is opened
- Leave breaker open if ground clears (resistance rises above 50K ohms)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q46</div>
A 125VDC bus ground ohmmeter reading of 40K ohms indicates a ground IS detected (<span class="hi-exam">less than 50K ohms threshold</span>). Per S2.OP-SO.125-0004, breakers are <span class="hi-exam">opened one at a time</span> until resistance indicates greater than 50K ohms.
</div>

## Connections

- Related systems: [[DC Power]]
- Related exam questions: [[2023 Q46]]
- Related exam: [[2023 NRC Written Exam]]
