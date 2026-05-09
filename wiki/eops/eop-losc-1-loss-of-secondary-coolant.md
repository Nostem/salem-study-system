---
title: "EOP-LOSC-1 — Loss of Secondary Coolant"
category: eops
status: draft
aliases:
  - EOP-LOSC-1
---

# EOP-LOSC-1 — Loss of Secondary Coolant

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
Referenced as 2-LOSC-1 for design bases MSLB + LOOP event. Containment cooling design bases configuration requires <span class="hi-exam">3 CFCUs and 1 CS pump</span>. With 2C 4KV Vital Bus lost and 21 CFCU failed independently, design bases are NOT met (only 22 &amp; 24 CFCUs and 21 CS pump available).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q16</div>
For a single main steam line rupture (e.g., upstream of 24MS167), after MSLI and feed isolation the cooldown of the RCS comes from steam blowing out the broken steamline. Because <span class="hi-exam">break flow is a function of faulted SG pressure</span>, as the faulted SG depressurizes the cooldown rate <span class="hi-exam">lowers continuously</span> over time — it does NOT remain constant until the SG blows dry. <span class="hi-trap">Initiating AFW to the ruptured SG to keep tubes wet is an EOP-LOSC-2 action that is only performed if ALL SGs are faulted; for a single faulted SG, AFW is left isolated.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
Entered from EOP-TRIP-1 on <span class="hi-exam">21 SG pressure dropping in uncontrolled manner</span> (feedwater line break inside containment). MSLI previously initiated. PO closes/verifies closed: <span class="hi-exam">21BF13, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4</span> to isolate faulted 21 SG <span class="hi-exam">(CT-17 Part 2)</span>. Trips and stops 23 AFW pump. Dispatches operator to close 21MS45. PO reports 21 SG is faulted, other SGs NOT depressurizing. RCS temperature rising — PO adjusts MS10s to stabilize. Transition to <span class="hi-exam">EOP-TRIP-3</span> when RCS subcooling &gt;0 F, PZR level &gt;11%, RCS pressure stable/rising.
</div>

## Connections

- Related systems: [[CFCUs]], [[Containment Spray]], [[Main Steam]], [[Feed & Condensate]], [[AFW]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-3 — SI Termination]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related exam questions: [[2016 Q16]], [[2020 Q9]]
- Related scenarios: [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]]
