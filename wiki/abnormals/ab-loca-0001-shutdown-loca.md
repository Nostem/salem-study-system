---
title: "AB.LOCA-0001 — Shutdown LOCA"
category: abnormals
status: draft
aliases:
  - AB.LOCA-0001
  - shutdown LOCA
---

# AB.LOCA-0001 — Shutdown LOCA

## Purpose

Provides operator actions for responding to a Loss of Coolant Accident during shutdown conditions (Mode 4). Entered on any uncontrolled reduction in Pressurizer Level in Mode 4.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q6</div>
Entry conditions: <span class="hi-exam">any uncontrolled reduction in Pressurizer Level in Mode 4</span>. First step initiates Attachment 1, Continuous Action Summary (CAS). CAS directs: if PZR Level is <span class="hi-exam">&lt;11%</span>, then <span class="hi-exam">stop the operating RHR Pump aligned for Shutdown Cooling and Close 2RH1 and 2RH2 (RHR Common Suction)</span>. <span class="hi-trap">AB.RHR-0001 and AB.RC-0001 both redirect to AB.LOCA-0001 when in Mode 4 with uncontrolled level reduction. AB.RHR-0001 actions (isolate letdown, start SI/charging) are for Modes 5 or 6. AB.RC-0001 actions (stop RHR pump, close 21SJ49) are for Modes 1-3.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q85</div>
AB.LOCA-0001 applicability: used during <span class="hi-exam">MODE 4</span> or <span class="hi-exam">MODE 3 with the accumulators isolated</span>. <span class="hi-trap">A LOCA in MODE 3 at normal operating pressure (2235 psig) with accumulators NOT isolated enters the EOP network (EOP-TRIP-1), not AB.LOCA-0001.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q78</div>
AB.LOCA-0001 is entered from AB.RHR-0001 CAS when in <span class="hi-exam">MODE 4 with RCS inventory loss</span> (lowering PZR level and rising containment particulate monitor). The CAS directs IMMEDIATELY GO TO AB.LOCA-0001.
</div>

## Connections

- Related systems: [[RHR]]
- Related procedures: [[AB.RHR-0001 — Loss of RHR]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related EOPs: [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]]
- Related exam questions: [[2019 Q78]], [[2020 Q6]], [[2020 Q85]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]]
