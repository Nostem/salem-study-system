---
title: "AB.TRB-0001 — Main Turbine Abnormality"
category: abnormals
status: draft
aliases:
  - AB.TRB-0001
---

# AB.TRB-0001 — Main Turbine Abnormality

## Purpose

Provides guidance for responding to a turbine trip below P-9 (approximately 50% reactor power), including concurrent procedure actions and plant stabilization.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q92</div>
Per AB.COND-0001 CAS: when condenser backpressure exceeds the Attachment 4 limit and reactor power is <span class="hi-exam">below P-9</span>, the crew trips the <span class="hi-exam">Turbine</span> (not the Reactor) and performs <span class="hi-exam">AB.COND-0001 concurrently with AB.TRB-0001</span> (Turbine Trip Below P-9). <span class="hi-trap">Above P-9, the crew would trip the Reactor and transition to EOP-TRIP-1 — AB.TRB-0001 would NOT be entered.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-e</div>
With reactor power &lt;P-9 (40%), a Main Turbine trip is demanded (Auto Stop Oil low pressure, OHA G-4 then OHA F-32 DEHC Trip) but does NOT occur — 21 MS28 Turbine Stop Valve remains open. After manually tripping the turbine, AB.TRB-0001 step 3.2 has the operator VERIFY the turbine is tripped; step 3.3 determines all Turbine Stop Valves are NOT closed → step 3.7. <span class="hi-exam">Step 3.7: TRIP the Reactor and GO TO 2-EOP-TRIP-1.</span> <span class="hi-trap">Outside the EOP network, initiating a MSLI to trip the turbine BEFORE tripping the reactor is failure criteria — a premature MSLI renders the steam dumps inoperable and prematurely isolates the SGFPs, which with Rx power &gt;P-10 could challenge SG safeties.</span>
</div>

## Connections

- Related systems: [[Main Turbine]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2019 Q92]], [[2012 Q81]], [[2012 Q82]]
- Related JPMs: [[2012 JPM Sim-e]]
- Related exam: [[2019 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2012 NRC Operating Exam]]
