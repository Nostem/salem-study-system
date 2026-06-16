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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q22</div>
EOP-LOCA-6 closes/checks closed the following valves to isolate a LOCA outside containment: <span class="hi-exam">2RH1 OR 2RH2, 21 and 22RH19s, 2RH26, and 21 and 22SJ49s</span>. Per drawing 205332-S/MP, any leak located between the RH1/2 valves and the SJ49 valves WILL be isolated with these valves closed. <span class="hi-trap">The one location NOT isolated by LOCA-6 is the <span class="hi-trap">downstream / outlet side of the SJ49 valves</span> (e.g., the valve outlet flange on 21SJ49, RHR DISCH TO COLD LEGS) — that section connects directly to the RCS cold leg and cannot be isolated from the RCS by closing the LOCA-6 valves.</span> A leak on the SJ49 <span class="hi-exam">inlet</span> flange, or between RH2/RH26/RH4 (the common/pump suction side), IS isolated.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #1</div>
RHR intersystem RCS leak on 22 RHR Heat Exchanger during EOP-TRIP-2. Crew recognizes LOCA outside containment from <span class="hi-exam">2R41D Plant Vent radiation monitor in alarm</span>, 22 RHR sump pump starts/overflow, and lowering PZR level/pressure. In LOCA-6, crew isolates leak by closing <span class="hi-exam">22SJ49</span> (Cold Leg Injection isolation for 22 RHR). RCS pressure confirmed rising after isolation. <span class="hi-exam">CT-32: Isolate LOCA outside containment before transition out of EOP-LOCA-6.</span> After isolation, crew transitions to EOP-LOCA-1 and determines SI termination criteria met.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q63</div>
Step 2 — RHR discharge cross-connect isolation: the crew <span class="hi-exam">WILL close 11RH19 and 12RH19 (RHR Discharge X-CONN Valves)</span> to separate the 11 and 12 RHR discharge lines, enhancing leak isolation diagnostics. Successful leak isolation is confirmed by monitoring <span class="hi-exam">rising RCS Pressure</span> (not PZR level). <span class="hi-trap">Trap: PZR level would also rise after successful isolation (ECCS filling the RCS), but LOCA-6 specifically monitors RCS pressure as the success indicator.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q22</div>
After closing <span class="hi-exam">21SJ49 Cold Leg Isolation Valve</span> to attempt leak isolation: successful isolation is indicated by <span class="hi-exam">RCS pressure rising</span> (not stable). The next required action is to <span class="hi-exam">stop 21 RHR pump</span> because the RHR system is split and there is <span class="hi-exam">no discharge path</span> on that train. <span class="hi-trap">Traps: (1) 21SJ49 is left CLOSED after successful isolation — not re-opened. (2) 21RH19 RHR Discharge X-CONN was already closed at Step 2; it is not the next action. (3) Stopping the OPPOSITE-loop RHR pump (22 RHR) is incorrect — it is the affected loop's pump (21 RHR) that must be stopped because its discharge path is now closed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q82</div>
On an <span class="hi-exam">unisolable break, EOP-LOCA-6 transitions to EOP-LOCA-5 (Loss of Emergency Coolant Recirculation)</span> — there the crew adds makeup to the RWST, initiates a cooldown, and minimizes injection flow. (LOCA-1 would be the transition only if the break were isolated.) See [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]], [[ECCS]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #4</div>
LOCA outside containment on 22 RHR pump piping (cold-leg injection check-valve failures) diagnosed during EOP-TRIP-2, with <span class="hi-exam">2R41D radiation monitor in alarm</span>, 22 RHR sump pump running (OHA C-34 22 RHR SUMP OVRFLO), and PZR level that cannot be held. After a manual SI and return to TRIP-1, CRS transitions to LOCA-6. The crew isolates the 22 RHR-loop leakage path — closes 2RH1/2RH2, 21RH19 and 22RH19, confirms 2RH26 shut, and cycles 21SJ49 / shuts 22SJ49 — completing <span class="hi-exam">CT-32: Isolate LOCA outside containment before transition out of LOCA-6</span>, then transitions to [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]. See [[2015 Scenario 4]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q84</div>
When EOP-LOCA-6 actions <span class="hi-exam">fail to isolate the break (unisolable break), the transition is to EOP-LOCA-5</span>, where the directed actions are to <span class="hi-exam">add makeup to the RWST, initiate a cooldown, and minimize injection flow</span>. <span class="hi-trap">EOP-LOCA-1 is the transition only if the break IS isolated.</span> The SRO must know the LOCA-6 actions to identify the correct downstream procedure and the actions performed there.
</div>

## Connections

- Related systems: [[ECCS]], [[RCS]], [[RVLIS]], [[RHR]], [[Radiation Monitoring]]
- Related EOPs: [[EOP-TRIP-3 — SI Termination]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2015 Q22]], [[2016 Q22]], [[2016 Q73]], [[2018 Q63]], [[2019 Q63]], [[2019 Q81]], [[2020 Q16]], [[2020 Q25]], [[2022 Q18]], [[2023 Q16]], [[2015 Q82]], [[2014 Q84]], [[2014 Q89]]
- Related scenarios: [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2015 Scenario 4]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]]
