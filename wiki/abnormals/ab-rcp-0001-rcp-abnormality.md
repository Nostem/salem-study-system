---
title: "AB.RCP-0001 — RCP Abnormality"
category: abnormals
status: draft
aliases:
  - AB.RCP-0001
  - RCP abnormality
---

# AB.RCP-0001 — RCP Abnormality

## Purpose
Provides guidance for response to reactor coolant pump abnormal conditions.

## Continuous Action Summary (Attachment 1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q27</div>
Trip reactor and stop affected RCP if ANY of the following validated conditions exist:<br>
- CCW flow lost to ALL RCPs AND not restored within <span class="val-trip">5 minutes</span><br>
- RCP Seal Injection AND Thermal Barrier CCW lost concurrently (secure within <span class="val-trip">2 minutes</span>)<br>
- Shaft vibration > <span class="val-trip">20 mils</span> or motor flange vibration > <span class="val-trip">5 mils</span><br>
- Motor bearing temperature > <span class="val-trip">175°F</span><br>
- Motor winding temperature > <span class="val-trip">302°F</span> (Modes 1-5)<br>
- Seal water outlet temperature > <span class="val-trip">190°F</span><br>
- #1 Seal leakoff < 0.8 gpm AND reverses to ≥ 6.0 gpm<br>
- #1 Seal leakoff < 0.8 gpm with rising pump bearing/seal inlet temps<br>
- #1 Seal leakoff ≥ 6 gpm
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q78</div>
If vibration parameters are below Attachment 1 trip criteria (shaft <span class="val-trip">20 mils</span>, motor flange <span class="val-trip">5 mils</span>), do NOT immediately trip the RCP. Per Step 3.10, the <span class="hi-exam">CRS/SM determines if a controlled Unit shutdown is required</span> to remove the affected RCP from service. Example: shaft vibration at 16 mils and motor flange at 3 mils — both below trip limits, so prepare for controlled shutdown rather than immediate trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q86</div>
A <span class="hi-exam">#3 seal leak</span> is indicated by STANDPIPE LEVEL-LO alarm with #1 seal leakoff steady at 1.5 gpm (normal, indicating intact #2 seal). Action: <span class="hi-exam">make-up to the standpipe per the ARP; power operation may continue</span>. AB.RCP-0001 does not provide specific direction for a #3 seal leak. <span class="hi-trap">Trap: the orderly shutdown and stop RCP within 8 hours action applies to a degraded #2 seal, not a #3 seal leak.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q5</div>
Loss of CCW thermal barrier: if <span class="hi-exam">1CC190 closes (common return), ALL RCP thermal barriers lose CCW</span>. RCPs may continue running if charging flow is maintained. <span class="hi-trap">Trip RCP within 2 minutes only if BOTH CCW and charging are lost.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q86</div>
Attachment 1: #1 seal leak-off flow <span class="hi-exam">>= 6 gpm</span> indicates a <span class="hi-exam">#1 seal failure</span> — go to Attachment 2 (Stopping RCPs). Attachment 2 directs: <span class="hi-exam">manual reactor trip, stop affected RCP, then 3-5 minutes after stopping close the CV104 valve</span>, then go to EOP-TRIP-1. <span class="hi-trap">High seal leak-off indicates #1 seal failure (not #2). An orderly shutdown within 8 hours applies to a degraded #2 seal (leak-off < 0.8 gpm or slowly approaching 6 gpm), NOT a failed #1 seal at >= 6 gpm.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
23 RCP motor bearing oil level low. Motor bearing temperatures rising above <span class="hi-exam">175 degF</span> trip criterion and vibrations > <span class="hi-exam">5 mils</span> per AB.RCP-0001. CRS directs reactor trip and stop 23 RCP IAW Attachment 2. This initiates entry into EOP-TRIP-1 where the main turbine then fails to trip.
</div>

## Connections
- Related systems: [[RCPs]], [[CCW]], [[CVCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2022 Q5]], [[2022 Q86]], [[2023 Q27]], [[2023 Q78]], [[2023 Q86]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
