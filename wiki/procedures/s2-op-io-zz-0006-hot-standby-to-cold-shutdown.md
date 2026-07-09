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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q80</div>
The <span class="hi-exam">PZR Cold Cal level channel (LI-462) is used when RCS temperature is <200°F</span>, as directed in IOP-6 during the cooldown to cold shutdown. Because it is a shutdown-only indication, <span class="hi-exam">LI-462 is NOT credited in TS 3.3.1.1 (Reactor Trip System Instrumentation) or TS 3.3.3.7 (Accident Monitoring)</span> — its failure at 100% power requires no Tech Spec entry. See [[TS 3.3 — Instrumentation]], [[SC.OP-DL.ZZ-0010 — Control Room Instrumentation and Alarms]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q88</div>
During an EOP-TRIP-4 Natural Circulation Cooldown, IOP-6 shutdown activities (including the accumulator isolation at &lt;1000 psig) may already be directed and continued. <span class="hi-trap">The 8-hour upper-head soak referenced in IOP-6 is required only if RCS pressure is &lt;1250 psig AND fewer than 2 CRDM vent fans are running</span> — so with both CRDM vent fans running, stopping the cooldown for an 8-hour soak is NOT required; the crew continues depressurizing in TRIP-4.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q95</div>
IOP-6 PZR hot/cold calibrated level (Exhibit 1, page 1 and page 2): with <span class="hi-exam">hot cal level 95% at 400°F, ACTUAL PZR level is ~66%</span>, which corresponds to a <span class="hi-exam">cold cal level of ~56-57%</span> at 400°F. After the cooldown rate has been reduced, IOP-6 directs operators to <span class="hi-exam">RAISE charging flow to establish 80% cold cal level</span>. <span class="hi-exam">Prior to the 80% requirement, the procedure requires 25-53% (steps 5.1.5 and 5.1.16)</span>. <span class="hi-trap">Trap: this is not a direct lookup — the changes in required cooldown rate, PZR level, and the hot-cal/cold-cal transition must all be accounted for. Salem had a 2008 PZR drain-down event tied to inadequate understanding of the hot-cal/cold-cal correlation.</span> See [[Pressurizer Level & Press Control]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q100</div>
IOP-6 <span class="hi-exam">step 5.1.31</span> isolates the ECCS accumulators when RCS pressure lowers to <span class="hi-exam">&lt;1000 psig</span> during the cooldown to Cold Shutdown. This means a MODE 3 cooldown at 870 psig will already have accumulators isolated — relevant for AB.LOCA-0001 entry decisions and for AB.RC-0001 questions about MODE/accumulator status.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q39</div>
During cooldown per IOP-6, the <span class="hi-exam">Low PZR Pressure SI and High Steam Flow SI signals are blocked</span> (P-11 enables SI block at < 1915 psig). However, the <span class="hi-exam">Containment High Pressure SI signal at 4 psig (2/3 channels) is NOT blocked</span> and remains active. If a rapid depressurization of all SGs occurs inside containment, the Containment High Pressure SI will actuate even though Low PZR Pressure SI is blocked.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q32</div>
Per IOP-6, when reducing RCS temperature below 350°F, the letdown line is realigned from the normal high-pressure letdown path to the low-pressure letdown path via CV18 (Low Pressure Letdown Control Valve).
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment]], [[RCS]], [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[SC.OP-DL.ZZ-0010 — Control Room Instrumentation and Alarms]]
- Related EOPs: [[EOP-TRIP-4 — Natural Circulation]]
- Related tech specs: [[TS 3.3 — Instrumentation]]
- Related exam questions: [[2016 Q100]], [[2020 Q39]], [[2022 Q32]], [[2014 Q88]], [[2014 Q95]], [[2012 Q80]], [[2012 Q91]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
