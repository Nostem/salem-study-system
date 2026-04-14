---
title: RVLIS
category: systems
status: draft
aliases:
  - reactor vessel level indication system
---

# RVLIS

## Function

Reactor Vessel Level Indication System provides indication of reactor vessel water level during post-accident conditions.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q84</div>
RVLIS Train B requires <span class="hi-exam">2PT-405 (Wide Range RCS Pressure)</span> as an input. If 2PT-405 fails AND Train A is out of service for maintenance, <span class="hi-exam">both trains of RVLIS are unavailable</span> → enter EOP-TRIP-6 (Natural Circulation Cooldown without RVLIS) instead of EOP-TRIP-5 (with RVLIS). In EOP-TRIP-6, maximum RCS cooldown rate is <span class="hi-exam">50F/hr when T-Hots >500F</span>, increasing to <span class="hi-exam">100F/hr when T-Hots <450F</span>. <span class="hi-trap">100F/hr is only allowed below 450F T-Hot — at 540F T-Hot, the maximum is 50F/hr.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q16</div>
<span class="hi-trap">Dynamic range RVLIS would NOT be valid during a small break LOCA</span> because RCPs would have been stopped IAW CAS at &lt; <span class="val-trip">1350 psig</span>. Dynamic range requires RCPs running; with RCPs stopped, only full range RVLIS is available.
</div>

## RVLIS Ranges and CFST Thresholds

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q24</div>
Core Cooling Red Path (no RCPs running): requires <span class="hi-exam">five (5) hottest CETs > 700°F AND RVLIS Full Range ≤ <span class="val-trip">39%</span></span>. <span class="hi-trap">RVLIS Upper Range is NOT applicable for core cooling status — it only provides indication from the hot leg piping connection to the top of the reactor vessel.</span> Purple Path (degraded core cooling with RCPs running): <span class="hi-exam">RVLIS Dynamic Range ≤ <span class="val-alarm">44%</span></span>. CET-based inadequate core cooling Red Path: <span class="hi-exam">five (5) CETs > <span class="val-trip">1200°F</span></span> (not three).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q84</div>
Natural circulation rapid cooldown rate limits depend on RVLIS availability: <span class="hi-exam">with RVLIS: 100&deg;F/hr for the entire cooldown</span>. <span class="hi-exam">Without RVLIS: initial cooldown to 500&deg;F limited to &lt; 50&deg;F/hr, then &lt; 100&deg;F/hr afterwards</span>. RVLIS availability determines which EOP is used for rapid cooldown.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q47</div>
<span class="hi-exam">2PT-403 (RCS Narrow Range Pressure) and 2PT-405 (RCS Wide Range Pressure) provide input to both the Pressurizer Overpressure Protection System (POPS) and to the RVLIS Electronics Cabinets.</span> Both 2PT-403 and 2PT-405 are credited as accident monitoring instrumentation per LCO 3.3.3.7. <span class="hi-trap">Trap: POPS is not their only function — they also feed RVLIS. Loss of 2PT-405 affects RVLIS Train B availability (confirmed by 2022 Q84).</span>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Pressurizer Level & Press Control]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam questions: [[2019 Q47]], [[2020 Q16]], [[2020 Q24]], [[2020 Q84]], [[2022 Q84]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
