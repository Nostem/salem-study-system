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

## Connections

- Related systems: [[RCS]], [[ECCS]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]]
- Related exam questions: [[2020 Q16]], [[2020 Q24]], [[2022 Q84]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
