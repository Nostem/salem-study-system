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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q85</div>
RVLIS Train A power supply: <span class="hi-exam">2B Vital Instrument Bus powers the Train A Microprocessor Panel</span>. Loop 22 THOT also provides input to Train A RVLIS. Loss of 2B VIB makes <span class="hi-exam">only Train A inoperable — Train B is unaffected</span>. With Train B available, RVLIS is available and EOP-TRIP-6 (with RVLIS) applies for natural circulation rapid cooldown, not EOP-TRIP-5.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q25</div>
TRIP-6 Rapid Cooldown Step 10 minimum: <span class="hi-exam">RVLIS Full Range >= <span class="val-alarm">70%</span></span> (changed from 74% in Dec 2015 EOP revision). Purpose: <span class="hi-exam">limit steam entering the RCS hot legs</span> — preventing void migration to the top of the SG U-tubes that would disrupt the natural circulation flow circuit. <span class="hi-trap">Trap: 70% is NOT for "ensuring positive level indication of RCS" — it is specifically tied to keeping voids out of the SG U-tubes and preserving natural circulation.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q79</div>
During SGTR RCP-restart evaluation, with <span class="hi-exam">RVLIS upper range &lt;100%, PZR level and PZR-saturated conditions are required (along with RCS subcooling)</span> before restarting a RCP. See [[RCPs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q44</div>
On the Core Cooling CSF status tree, with CETs &lt;700°F (no superheat), <span class="hi-exam">RVLIS Full Range &lt;39% drives a Core Cooling PURPLE path</span>; RVLIS Full Range above that threshold (e.g., 74%) with CETs ~650°F is a <span class="hi-exam">YELLOW path</span>, not PURPLE. The superheat RED path is set by 5 or more CETs &gt;1200°F, independent of RVLIS. See [[Incores]], [[EOP-CFST-1 — Critical Safety Function Status Trees]].
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Pressurizer Level & Press Control]], [[115V AC]], [[Steam Generator & Blowdown]], [[Incores]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-TRIP-4 — Natural Circulation]], [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam questions: [[2016 Q25]], [[2019 Q47]], [[2019 Q85]], [[2020 Q16]], [[2020 Q24]], [[2020 Q84]], [[2022 Q84]], [[2015 Q79]], [[2014 Q25]], [[2014 Q26]], [[2012 Q15]], [[2012 Q24]], [[2012 Q44]], [[2012 Q83]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
