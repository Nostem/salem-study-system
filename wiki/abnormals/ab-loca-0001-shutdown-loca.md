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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q100</div>
AB.LOCA-0001 progression for an unidentified RCS leak during a normal MODE 3 cooldown (RCS pressure 870 psig, Tcs 395°F, charging 79 gpm + 10 gpm step = 89 gpm with the 45 gpm orifice in service): <span class="hi-exam">the first thing to do in AB.LOCA is isolate letdown</span>. Isolating letdown removes 45 gpm from the required charging flow necessary to maintain PZR level stable, so step 3.3 (asking if PZR level can be maintained stable or rising) will be YES. Adequate subcooling is available, and with charging flow less than 100 gpm at step 3.13, GO TO Section 4.0. <span class="hi-trap">Trap: while it is technically acceptable to enter AB.RC-0001 (RCS Leak) first, that procedure asks questions and establishes that you are in MODE 3 with accumulators isolated — which they will be since accumulator isolation occurred when pressure lowered to &lt;1000 psig per IOP-6 step 5.1.31. The "re-align charging suction to RWST and isolate containment penetrations" actions are NOT step 3.x AB.LOCA actions.</span>
</div>

## Connections

- Related systems: [[RHR]], [[CVCS]], [[RCS]]
- Related procedures: [[AB.RHR-0001 — Loss of RHR]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related EOPs: [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]]
- Related exam questions: [[2016 Q100]], [[2019 Q78]], [[2020 Q6]], [[2020 Q85]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]]
