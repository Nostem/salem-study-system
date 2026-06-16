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
<div class="callout-label">Exam — 2015 Q24</div>
Continuous Action Step (Step 6.1): if <span class="hi-exam">any train of emergency recirculation capability is restored</span> (e.g., power restored to a previously lost RHR pump), Step 6.1 directs the crew to evaluate train status and <span class="hi-exam">return to the procedure and step previously in effect</span> (here, EOP-LOCA-1), consistent with the EOP organization. The purpose of LOCA-5 is <span class="hi-exam">mitigation and recovery of recirculation capability</span>. <span class="hi-trap">Traps: do NOT continue the LOCA-5 cooldown waiting on the RWST LO alarm (cooldown in LOCA-5 is not required once recirc is restored), and do NOT transition directly to EOP-LOCA-3 — a transfer to Cold Leg Recirculation is not initiated until RWST level is evaluated back in LOCA-1.</span>
</div>

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q26</div>
Step 9 / Table C — required CS pumps based on RWST level, containment pressure, and number of low-speed CFCUs. With a LBLOCA, 2C 4KV vital bus locked out (22 CS pump deenergized), 22 and 24 CFCUs failed to start, and containment pressure 18 psig: at the LOCA-3 entry, RWST is <span class="hi-exam">15.2 ft</span> and depletes at <span class="hi-exam">~13000 gpm</span> (2 RHR, 1 charging, 1 SI, 1 CS pump running). It takes over 9 minutes to drain below 1 ft, so 7 minutes after the RWST Lo alarm Table C indicates <span class="hi-exam">ONE CS pump required</span>; with 22 CS pump unpowered, <span class="hi-exam">21 CS pump only</span> runs. <span class="hi-trap">BOTH is the answer for RWST level 1–15.2 ft if containment pressure >47 psig OR no CFCUs running. NEITHER is the answer if RWST &lt;1 ft (drain-down miscalculation).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q84</div>
LOCA-5 entered at step 11 of 1-EOP-LOCA-1 (RWST level &gt;15.2 ft) with both RHR pumps stopped and unable to be started: just prior to initiating cooldown, with RWST LO alarm received, CONT SUMP CH A/B LEVEL &gt;62% lights lit, and RCS subcooling &lt;0&deg;F, the CRS shall <span class="hi-exam">remain in LOCA-5 and initiate a RCS cooldown at less than the Tech Spec limit (&lt;100&deg;F/hr)</span> — the TS RCS cooldown limit prevents an unwanted Thermal Shock condition while CFSTs are still in effect in LOCA-5. <span class="hi-trap">Trap A: makeup is to the RWST (directed at step 10), NOT to the VCT. Traps C/D: there is NO LOCA-3 CAS in LOCA-5 — restoring any train of recirc is the concern with no RHR pumps; transfer to CL recirc will occur only after a RHR pump has been restored.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q73</div>
EOP-LOCA-5 entry conditions — five entry paths: <span class="hi-exam">(1) LOCA-1 step 16 with no RHR pump and associated SJ44 available; (2) LOCA-3 step 2, Containment sump level &lt;62%; (3) LOCA-4 step 5, no RHR pumps running; (4) LOCA-6 step 6.2 with RH1, 2, 26 shut, 21 and 22 RH19 shut, 21 and 22 SJ49s shut and RCS pressure not rising; (5) loop from LOCA-5 step 28 when RWST level is still above LO-LO (1.2 ft) setpoint</span>. The correct condition pairs <span class="hi-exam">RWST LOW LEVEL alarm with sump level &lt;62%</span> (sump should be rising as RWST is lowering). <span class="hi-trap">Trap: RWST LO-LO entry conditions for stopping ECCS pumps reflects expected behavior during CL recirc with one CS pump still drawing from RWST — it is NOT a LOCA-5 entry. LOCA-6 stopping both RHR pumps does not warrant LOCA-5 entry because LOCA-5 only requires RHR pumps to be available, not in service. LOCA-4 has no provision to check for hot leg recirc flow path blockage.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
With both RHR pumps cavitating during cold leg recirculation transfer, an operator may initially go to EOP-LOCA-5; however, <span class="hi-exam">Step 1 of LOCA-5 directs performance of EOP-APPX-7</span> (Containment Sump Blockage). LOCA-5 is the wrong terminus when sump blockage is causing the cavitation — APPX-7 is.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q82</div>
EOP-LOCA-6 transitions to EOP-LOCA-5 when the LOCA-outside-containment break is unisolable; LOCA-5 actions: <span class="hi-exam">add makeup to the RWST, initiate a cooldown, and minimize injection flow</span>. See [[EOP-LOCA-6 — LOCA Outside Containment]], [[ECCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q27</div>
Containment Spray pump operation in LOCA-5 uses a <span class="hi-exam">less restrictive criteria than FRCE-1</span> — permitting reduced spray-pump operation depending on RWST level, containment pressure, and number of CFCUs operating. This is because recirculation flow to the RCS is not available, so it is very important to <span class="hi-exam">conserve RWST water</span> by stopping containment spray pumps when possible. Even after entering FRCE-1 on the PURPLE path (containment pressure &gt; 15 psig), FRCE-1 step 3.1 yes-path directs the <span class="hi-exam">CS pumps to be operated IAW LOCA-5</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q89</div>
The LOCA-3 CAS directs <span class="hi-exam">LOCA-5 only if emergency recirculation cannot be established/maintained for a reason OTHER than containment sump blockage</span>. When the loss of recirculation flow IS caused by containment sump blockage, the correct transition is to [[EOP-APPX-7 — Containment Sump Blockage]], NOT LOCA-5. <span class="hi-trap">Selecting LOCA-5 for a sump-blockage cavitation event is a trap.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q24</div>
After transitioning from LOCA-1 to LOCA-5, ECCS is reduced at <span class="hi-exam">Step 14</span> (charging pumps to ONE centrifugal, SI pumps to ONE), then at <span class="hi-exam">Step 19</span> — with RCPs secured and &lt;50°F subcooling — <span class="hi-exam">Figure A</span> is used to determine the minimum ECCS flow required vs. time after trip. At <span class="hi-exam">6 hours (360 min) after trip the required flow is ~225 gpm (less than 250 gpm)</span>. Because a single charging pump (with charging flow unchanged per the stem) is insufficient, while a single SI pump supplies 250 gpm, the correct minimum lineup is <span class="hi-exam">ONE SI pump only</span>. (A 1500 gpm LOCA depletes the RWST in ~2.3 hours, so the transfer to CL Recirc has already occurred.)
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment Spray]], [[CFCUs]], [[EDGs]], [[RHR]], [[CVCS]], [[RVLIS]]
- Related EOPs: [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam questions: [[2015 Q24]], [[2016 Q26]], [[2016 Q73]], [[2016 Q84]], [[2018 Q65]], [[2018 Q73]], [[2018 Q81]], [[2019 Q15]], [[2019 Q65]], [[2020 Q17]], [[2020 Q42]], [[2020 Q87]], [[2022 Q80]], [[2023 Q17]], [[2015 Q82]], [[2014 Q27]], [[2014 Q84]], [[2014 Q89]], [[2012 Q24]]
- Related JPMs: [[2019 JPM SRO-A1]], [[2023 JPM SRO-A1.a]], [[2016 JPM Sim-b]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
