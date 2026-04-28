---
title: "EOP-LOCA-5 — Loss of Emergency Coolant Recirculation"
category: eops
status: draft
aliases:
  - EOP-LOCA-5
  - loss of emergency recirculation
---

# EOP-LOCA-5 — Loss of Emergency Coolant Recirculation

## Purpose

Provides operator actions when emergency coolant recirculation capability is lost, including RCS depressurization guidance and monitoring for upper head voiding.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q42</div>
Step 9 — Table C determines required number of containment spray pumps based on RWST level, containment pressure, and number of CFCUs operating. With <span class="hi-exam">RWST > 15.24 ft, containment pressure 18 psig, and 4 CFCUs operating → 0 CS pumps required</span>. <span class="hi-trap">Must correctly identify which bus is lost to calculate ECCS flow rate and RWST depletion. 2A Vital Bus lost = "A" bus loads lost (lower depletion rate, 4350 gpm). Assuming "B" bus loads lost gives incorrectly high depletion rate.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q17</div>
Step 23 — during RCS depressurization, upper head voiding IS expected with no RCPs running. Monitor pressurizer level — rapidly rising PZR level indicates upper head voiding. Stop depressurization before the pressurizer goes solid.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A1</div>
Step 19.2 minimum ECCS flow from Figure A: at <span class="hi-exam">50 minutes</span> post-trip (0550 - 0500 = 50 min), minimum flow is <span class="hi-exam">390 gpm (+/- 10 gpm)</span>. With 21 SI Pump at 420 gpm and 22 Charging Pump at 360 gpm: <span class="hi-exam">22 Charging pump CAN be stopped</span> (360 gpm alone &lt; 390 gpm minimum), but <span class="hi-exam">21 SI pump must remain</span> (420 gpm alone &gt; 390 gpm minimum). Contrast with 2023 SRO-A1.a where neither pump could be stopped.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A1.a</div>
Step 16.1 minimum ECCS flow from Figure 1: at <span class="hi-exam">100 minutes</span> post-trip, minimum flow is <span class="hi-exam">290 gpm (acceptable band 280-320 gpm)</span>. With 21 SI Pump at 160 gpm and 22 Charging Pump at 220 gpm, <span class="hi-exam">NONE can be stopped</span> — neither alone meets the 290 gpm minimum. Both must remain in service (combined 380 gpm).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q80</div>
Caution C3-1 in EOP-FRCE: if <span class="hi-exam">LOCA-5 is in effect, operation of containment spray pumps should be IAW LOCA-5</span> (not FRCE-1). LOCA-5 has less restrictive criteria allowing reduction of operating CS pumps based on RWST level and CFCUs to conserve RWST inventory. The CRS can transition to EOP-FRCE-1 for containment pressure concerns but follows LOCA-5 direction for CS pump operation. <span class="hi-trap">FRCE-1 establishes maximum available heat removal (more spray), which conflicts with LOCA-5 priority to conserve RWST inventory.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Entered from LOCA-1 when <span class="hi-exam">22 RHR pump trips — no RHR pumps available</span> (21 RHR C/T). CT#3 (CT-29) has four parts: <span class="hi-exam">(1) Stop CS pumps</span> — CRS determines no CS pumps required per Table C, RO resets Spray actuation, stops 21 and 22 CS pumps. <span class="hi-exam">(2) RWST makeup</span> — RO initiates makeup IAW S2.OP-SO.CVC-0006: places 2CV179 in Manual (full open), 2CV172 in Manual, starts 22 Primary Water pump, locally opens 2CV182 and 2CV184, starts 22 BA pump, adjusts BA flow &ge;20 gpm, adjusts 2CV179 to 50 gpm. <span class="hi-exam">(3) Reduce SI to one train</span> — stop all but one charging pump, run only one SI pump. <span class="hi-exam">(4) If RWST Lo-Lo alarm received, stop ALL pumps taking suction from RWST prior to cavitation.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Entered from LOCA-1 when <span class="hi-exam">22 RHR pump trips (overcurrent) — no RHR pumps available</span> (21 RHR C/T for motor bearing replacement). CT#3 (CT-29) in three parts: <span class="hi-exam">(1) Stop CS pumps</span> — CRS determines 0 CS pumps required per Table C (RWST ~14.2 ft, containment pressure ~17 psig, 4 CFCUs running), resets Spray actuation, stops 21 and 22 CS pumps. <span class="hi-exam">(2) RWST makeup</span> — initiates makeup IAW S2.OP-SO.CVC-0006 Section 5.8 (starts RWST heater pump, 22 Primary Water pump, locally opens 2CV182 and 2CV184, starts 22 BA pump, adjusts 2CV172 and 2CV179). <span class="hi-exam">(3) Reduce SI to one train</span> — stops all but one charging pump, runs only one SI pump. RCS cooldown at 100 F/hr using intact MS10s.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q65</div>
Step 24 — RCS depressurization with all RCPs stopped: normal spray NOT available → use <span class="hi-exam">a PZR PORV</span> to depressurize (not AUX SPRAY). Upper head voiding indication: <span class="hi-exam">PZR level rising from 10% to 45% in 30 seconds</span> = rapidly rising PZR level. <span class="hi-trap">AUX SPRAY maintains RCS inventory but is not the procedure-directed depressurization method. PORV depressurization loses inventory but is what EOP-LOCA-5 directs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q65</div>
Step 24 — RCS depressurization to minimize subcooling: with <span class="hi-exam">normal spray not available (all RCPs stopped)</span>, the crew depressurizes using <span class="hi-exam">a PZR PORV</span> (not AUX SPRAY). Upper head voiding indication: <span class="hi-exam">rapidly rising PZR level</span> (35% rise in 30 seconds in this example). <span class="hi-trap">Do not confuse AUX SPRAY (which maintains RCS inventory) with PORV depressurization (which loses inventory). With no RCPs running, normal spray is NOT available. Also: rapidly rising PZR level IS an indication of upper head voiding — the steam in the upper head collapses, pushing water into the PZR.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q15</div>
Step 6 Table B/C analysis with 2B 4KV Vital Bus de-energized: Table B determines NO TRAINS of Emergency Recirculation available (both SJ44 sump valves closed). Table C determines CS pumps required: with <span class="hi-exam">Containment Pressure = 19 psig, RWST Level = 10 feet, and only 3 CFCUs in slow speed (2B bus loss → 22 and 24 CFCUs unavailable) → 0 CS Pumps required</span>. Crew stops BOTH CS pumps per Step 9, then proceeds to Step 10 (add makeup to RWST). <span class="hi-trap">Correct CFCU count depends on knowing which CFCUs are powered from the 2B bus. With 2B lost: only 21 (A bus), 23 (C bus), and 25 (C bus) remain — 3 CFCUs total.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q17</div>
LOCA-5 mitigation strategies include: (1) Run all CFCUs in high speed, (2) Minimize SI flow, (3) Depressurize RCS to minimize subcooling, (4) Make up to RWST. <span class="hi-exam">During a DBA LBLOCA with loss of one EDG (2B EDG), only strategies 2 and 4 are applicable</span> because: <span class="hi-trap">22 and 24 CFCUs are powered from the 2B EDG bus and are NOT available</span> (eliminates strategy 1), and a DBA LOCA has already completely depressurized the RCS so <span class="hi-trap">no RCS subcooling exists to minimize</span> (eliminates strategy 3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q81</div>
RWST makeup procedure selection: IAW EOP-LOCA-5, crew adds makeup to RWST per <span class="hi-exam">S2.OP-SO.CVC-0006 Section 5.8 (Makeup to RWST Using CVCS Makeup System)</span> — NOT S2.OP-SO.SF-0001 Section 5.6 (Transferring Spent Fuel Pool Water to RWST). SG NR Level feed flow target depends on containment conditions: <span class="hi-exam">ADVERSE containment (≥ 4 psig): maintain total feed flow > 22E04 LB/HR until at least one SG NR Level > 15%</span>. <span class="hi-exam">NORMAL containment: > 9%</span>. At 12.0 psig containment pressure = adverse conditions apply. <span class="hi-trap">Trap: S2.OP-SO.SF-0001 Section 5.6 IS an approved RWST makeup procedure, but EOP-LOCA-5 specifically directs CVC-0006 Section 5.8.</span>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment Spray]], [[CFCUs]], [[EDGs]], [[RHR]]
- Related exam questions: [[2018 Q65]], [[2018 Q73]], [[2018 Q81]], [[2019 Q15]], [[2019 Q65]], [[2020 Q17]], [[2020 Q42]], [[2020 Q87]], [[2022 Q80]], [[2023 Q17]]
- Related JPMs: [[2019 JPM SRO-A1]], [[2023 JPM SRO-A1.a]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
