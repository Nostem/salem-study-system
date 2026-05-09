---
title: "S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown"
category: procedures
status: draft
aliases:
  - S2.OP-IO.ZZ-0006
  - IOP-6
  - Hot Standby to Cold Shutdown
---

# S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown

> DRAFT — Reconstructed from exam materials

## Purpose

Provides the procedure for transitioning Unit 2 from Hot Standby (Mode 3) to Cold Shutdown (Mode 5), including cooldown, depressurization, and equipment realignment steps.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q39</div>
During cooldown per IOP-6, the <span class="hi-exam">Low PZR Pressure SI and High Steam Flow SI signals are blocked</span> (P-11 enables SI block at < 1915 psig). However, the <span class="hi-exam">Containment High Pressure SI signal at 4 psig (2/3 channels) is NOT blocked</span> and remains active. If a rapid depressurization of all SGs occurs inside containment, the Containment High Pressure SI will actuate even though Low PZR Pressure SI is blocked.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q32</div>
Per IOP-6, when reducing RCS temperature below 350°F, the letdown line is realigned from the normal high-pressure letdown path to the low-pressure letdown path via CV18 (Low Pressure Letdown Control Valve).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q100</div>
IOP-6 <span class="hi-exam">step 5.1.31</span> isolates the ECCS accumulators when RCS pressure lowers to <span class="hi-exam">&lt;1000 psig</span> during the cooldown to Cold Shutdown. This means a MODE 3 cooldown at 870 psig will already have accumulators isolated — relevant for AB.LOCA-0001 entry decisions and for AB.RC-0001 questions about MODE/accumulator status.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment]], [[RCS]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related exam questions: [[2016 Q100]], [[2020 Q39]], [[2022 Q32]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
