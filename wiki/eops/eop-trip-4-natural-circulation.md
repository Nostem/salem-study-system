---
title: "EOP-TRIP-4 — Natural Circulation"
category: eops
status: draft
aliases:
  - EOP-TRIP-4
  - natural circulation
---

# EOP-TRIP-4 — Natural Circulation

## Purpose
Provides guidance for plant cooldown using natural circulation when forced RCS flow is unavailable.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q26</div>
<span class="hi-exam">RCP restart priority order: 23, 21+22 or 21+24, 21</span> (to provide normal PZR spray). Single pump operation preferred in the loop providing best spray. Primary reason for starting RCPs: <span class="hi-exam">forced convection permits faster cooldown with less potential for upper head voiding.</span> Note N1-1 allows two RCPs for better spray if 23 unavailable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q71</div>
Borating during natural circulation cooldown to Cold Shutdown: <span class="hi-exam">more time is required for complete boron mixing</span> due to significantly lower RCS flow rate without RCPs. Once mixing is complete, the reactivity effect per ppm boron change is <span class="hi-exam">equal to</span> what it would be during forced circulation. The key distinction is mixing time, not reactivity worth.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS (foldout page): if subcooling is <span class="hi-exam">0 degrees F OR PZR level cannot be maintained > 4%</span>, then <span class="hi-exam">actuate SI and go to EOP-TRIP-1</span>. With 2CV55 and 2CV71 fully open and PZR level at 10% and lowering, PZR level cannot be maintained — actuate SI. <span class="hi-trap">Trap: PZR heaters will NOT energize with level < 17%; aligning charging to RWST/BIT and going to EOP-LOCA-1 is plausible but TRIP-4 does not direct entry into LOCA-1.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q85</div>
EOP-TRIP-4 rapid cooldown transition: if <span class="hi-exam">RVLIS is available</span>, crew transitions to <span class="hi-exam">EOP-TRIP-6 (NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS)</span> when required RCS cooldown rate exceeds <span class="hi-exam">25 &deg;F/hr</span>. Key RVLIS power supply detail: <span class="hi-exam">Loop 22 THOT provides input to Train A RVLIS. 2B Vital Instrument Bus powers RVLIS Train A Microprocessor Panel.</span> Loss of 2B VIB makes Train A RVLIS inoperable, but <span class="hi-exam">Train B is unaffected</span> — therefore RVLIS is still available and TRIP-6 (with RVLIS) applies. <span class="hi-trap">Trap: Loop 22 THOT failed low does NOT affect Train B RVLIS, and 2B VIB loss affects only Train A RVLIS microprocessor — not Train B. Both failures affect the same train.</span>
</div>

## Connections
- Related systems: [[RCS]], [[RCPs]], [[Pressurizer & PRT]], [[ECCS]], [[CVCS]], [[RVLIS]], [[115V AC]]
- Related EOPs: [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related exam questions: [[2019 Q85]], [[2023 Q26]], [[2023 Q71]], [[2023 Q87]]
- Related exam: [[2019 NRC Written Exam]], [[2023 NRC Written Exam]]
