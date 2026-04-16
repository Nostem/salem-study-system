---
title: "EOP-LOCA-6 — LOCA Outside Containment"
category: eops
status: draft
aliases:
  - EOP-LOCA-6
  - LOCA outside containment
---

# EOP-LOCA-6 — LOCA Outside Containment

## Purpose

Provides operator actions for isolating a loss of coolant accident occurring outside the containment building.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q16</div>
Step 2 — close 2SJ135 Cold Leg Discharge Valve to isolate an SI pump cold leg leak. SI pump flow (not pressure) is the correct indicator when RCS pressure is above SI pump shutoff head (1520 psig). Note: SJ49 valves isolate RHR cold legs, not SI cold legs.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q18</div>
SJ49s (Cold Leg Isolation Valves) are <span class="hi-exam">normally open</span> and <span class="hi-trap">NOT closed by SI or Phase A signals</span>. To close: place affected SJ49 CMC switch on 2RP4 to <span class="hi-exam">VALVE OPERABLE</span> only (no Phase A reset needed). After valve closure, monitor <span class="hi-exam">RCS PRESSURE</span> (not PZR level) to determine if leak isolation was successful.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q16</div>
After performing individual flowpath isolations in LOCA-6, the procedure specifically asks <span class="hi-exam">"Is RCS Pressure Rising"</span> to verify successful leak isolation. Per the bases, if the break is isolated, a significant <span class="hi-exam">RCS pressure increase</span> will occur due to ECCS flow filling up the RCS with break flow stopped. <span class="hi-trap">Do not confuse with PZR level rising, RVLIS rising, or subcooling > 0F — those are NOT the specific check in LOCA-6.</span> Also note: dynamic range RVLIS would not be valid during a small break LOCA because RCPs would have been stopped IAW CAS at < 1350 psig.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q25</div>
LOCA outside containment recognition during SI termination (EOP-TRIP-3): key alarm indications include <span class="hi-exam">A-6 (RMS HI RAD OR TRBL) due to 2R41D (Plant Vent), C-34 (22 RHR SUMP OVRFLO), and A-41 (AUX ALM SYS PRINTER) due to 23 and 24 RHR sump pump starts</span>. Combined with PZR level off-scale low (unable to be recovered) and loss of subcooling, the crew recognizes the TRIP-3 CAS is not met → goes to EOP-LOCA-1 → transitions to <span class="hi-exam">EOP-LOCA-6</span>. <span class="hi-trap">No direct transition from TRIP-3 to LOCA-6 exists.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q63</div>
Leak isolation strategy: the crew is MOST concerned with the piping connecting the <span class="hi-exam">RHR System</span> to the RCS, since RHR piping is only rated to <span class="hi-exam">600 psig</span> (compared to RCS piping rated to 2500 psig). Successful leak isolation is confirmed by monitoring <span class="hi-exam">rising RCS pressure</span>. <span class="hi-trap">Do not confuse with Pressurizer level rising — LOCA-6 specifically monitors RCS pressure, not PZR level, as the determination of successful isolation.</span> <span class="hi-trap">SI piping is also outside containment but is higher rated than RHR piping, so RHR is the primary concern.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q81</div>
Transition from LOCA-6: if the crew is <span class="hi-exam">NOT successful in finding and isolating the leak</span>, the crew will transition to <span class="hi-exam">EOP-LOCA-5 (LOSS OF EMERGENCY RECIRCULATION)</span>. If the crew successfully isolates the leak, transition is to <span class="hi-trap">EOP-LOCA-1 (not LOCA-2 or AB.LOCA-0001)</span>.
</div>

## Connections

- Related systems: [[ECCS]], [[RCS]], [[RVLIS]], [[RHR]], [[Radiation Monitoring]]
- Related EOPs: [[EOP-TRIP-3 — SI Termination]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2019 Q63]], [[2019 Q81]], [[2020 Q16]], [[2020 Q25]], [[2022 Q18]], [[2023 Q16]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
