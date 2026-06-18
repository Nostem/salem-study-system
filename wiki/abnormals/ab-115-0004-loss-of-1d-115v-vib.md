---
title: "AB.115-0004 — Loss of 1D 115V Vital Instrument Bus"
category: abnormals
status: draft
aliases:
  - AB.115-0004
  - S1.OP-AB.115-0004
  - S1.OP-AB.115-0004 — Loss of 1D 115V Vital Instrument Bus
---

# AB.115-0004 — Loss of 1D 115V Vital Instrument Bus

## Purpose

Provides operator actions for a loss of the 1D 115V Vital Instrument Bus, including assessment of the instruments and channels powered by 1D VIB and required RPS/NIS channel actions. 1D 115V VIB powers Power Range NIS Channel IV (PRNI CH IV).

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q13</div>
With Unit 1 in MODE 2 at 4% power, a loss of 1D 115V Vital Instrument Bus (inverter output breaker trip) causes the <span class="hi-exam">Yellow High Flux PRNI CH IV lamp to illuminate on Reactor Status Panel 1RP4 for BOTH the High Power and Low Power High Flux trip bistables</span> (one minute after the loss, with no operator action). <span class="hi-trap">No Reactor Trip results — the loss of one VIB / one NIS channel gives no trip demand (the High Flux trip is 2/4 coincidence).</span> <span class="hi-trap">The Over Power Rod Stop Manual Bypass for CH IV is NOT automatic — it must be manually aligned. The "H" bus RCP UV lamp is associated with the "G" 4KV RCP group bus (group buses H, E, F, G feed 11, 12, 13, 14 RCPs), not the loss of D VIB.</span>
</div>

## Connections

- Related systems: [[115V AC]], [[Excore NIs]], [[RPS/SSPS]], [[Control Rod Drive]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam questions: [[2012 Q13]]
- Related exam: [[2012 NRC Written Exam]]
