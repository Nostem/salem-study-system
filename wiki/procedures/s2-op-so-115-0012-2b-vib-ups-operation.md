---
title: "S2.OP-SO.115-0012 — 2B Vital Instrument Bus UPS System Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.115-0012
  - SO.115-0012
  - 2B Vital Instrument Bus UPS System Operation
---

# S2.OP-SO.115-0012 — 2B Vital Instrument Bus UPS System Operation

## Purpose

Provides operating instructions for the 2B Vital Instrument Bus (VIB) Uninterruptible Power Supply (UPS), including static switch transfers between the Normal (inverter) and Alternate (AC line regulator) sources, manual bypass operations, and restoration to the normal lineup.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q14</div>
With the 2B VIB UPS Static Switch in <span class="hi-exam">Bypass to Alternate</span>, the VIB is powered from the <span class="hi-exam">AC Line Regulator (Alternate source)</span> — NOT the inverter. The static switch is transferred from Normal to Alternate by placing the Test Transfer switch to ALT (Section 5.4); the Manual Bypass Switch in Bypass to Alternate positions contacts <span class="hi-exam">B1, B2, B4 closed and B3, B5 open</span>. If the breaker from the 2B 230VAC bus to the 2B VIB AC Line Regulator opens, the <span class="hi-exam">2B VIB deenergizes</span> — automatic transfer is NOT available because the static switch is not in Normal, and the inverter output cannot reach the bus with B3 and B5 open. <span class="hi-trap">Restoration requires MANUAL action: place the Static Switch in <span class="hi-exam">Normal</span> and the Test Transfer switch to N (Normal) per Sections 5.7.3 and 5.7.4 — NOT Isolate (Alternate).</span>
</div>

## Connections

- Related systems: [[115V AC]], [[DC Power]]
- Related abnormals: [[AB.115-0002 — Loss of 2B 115V Vital Instrument Bus]]
- Related exam questions: [[2015 Q14]]
- Related exam: [[2015 NRC Written Exam]]
