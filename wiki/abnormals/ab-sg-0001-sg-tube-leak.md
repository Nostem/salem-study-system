---
title: "AB.SG-0001 — Steam Generator Tube Leak"
category: abnormals
status: draft
aliases:
  - AB.SG-0001
  - SG tube leak
---

# AB.SG-0001 — Steam Generator Tube Leak

## Purpose
Provides operator actions for responding to a confirmed or suspected steam generator tube leak, including classification of leak severity by action level and required shutdown actions based on leak rate and rate of change.

## Entry Conditions
- Confirmed or suspected primary-to-secondary tube leak on any SG
- Entered based on chemistry sample results, radiation monitor trends, or condenser air ejector monitor alarms

## Key Actions

### Action Levels (Attachment 1 — Continuous Action Summary)
Action levels are based on SG leak rate (gpd) and rate of change (gpd/hr):

| Action Level | Criteria | Required Action |
|---|---|---|
| 1 | Leak rate thresholds met | Be in MODE 3 within 24 hours |
| 2 | Intermediate leak rate criteria | Intermediate shutdown actions |
| 3 (rate of change) | Leak rate >= 75 gpd AND rate of change >= 30 gpd/hr | Reduce power to <= 50% within 1 hour AND be in MODE 3 in following 2 hours |
| 3 (high rate) | Leak rate >= 150 gpd | Be in MODE 3 within 6 hours |
| Emergency | SI criteria met | Trip the reactor and actuate Safety Injection |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q81</div>
SG tube leak action levels are based on <span class="hi-exam">both leak rate AND rate of change</span>. At Action Level 3 with leak rate <span class="hi-exam">>= 75 gpd</span> and rate of change <span class="hi-exam">>= 30 gpd/hr</span>, the required action is to reduce power to <= 50% in 1 hour and be in MODE 3 in the following 2 hours. <span class="hi-trap">Trap: a leak rate of 125 gpd with a 30 gpd/hr trend meets Action Level 3 (rate of change criterion), NOT the 150 gpd threshold for the 6-hour shutdown.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q10</div>
A note under the AB.SG-0001 entry conditions states that the <span class="hi-exam">R19 SGBD radiation monitors are NOT accurate immediately following a unit trip</span> and should not be used as the sole basis for entering the procedure. On a Rx trip with OHA A-6 RMS HI RAD and 2R19C (23 SG Blowdown) in alarm, the correct response is to <span class="hi-exam">enter AB.RAD-0001 (Abnormal Radiation) to verify the alarm (Step 3.2) while continuing in EOP-TRIP-2</span>. <span class="hi-trap">A manual SI is NOT warranted on a 2R19 alarm alone without corroborating indications.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q11</div>
Boration for a <span class="hi-exam">single stuck rod is NOT performed in the EOP series (TRIP-2)</span> — it is performed in AB.SG-0001. After tripping the turbine and the reactor at 20% power (Step 3.28) during a tube-leak shutdown, the crew transitions to EOP-TRIP-2; with no SDM diagnostic step driving a transition to SGTR-1, <span class="hi-exam">AB.SG-0001 is re-entered at Step 3.27 after exiting the TRIP series</span>, and <span class="hi-exam">Step 3.28 directs a rapid boration of 35 minutes per stuck rod</span> to meet SDM for the initial cooldown to 500&deg;F. The rapid boration is initiated <span class="hi-exam">before any depressurization begins (Step 3.29)</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
23 SG tube leak (25-30 gpm). Entry cue: RMS alarms 2R15, 2R19C (23 SG B/D Rad Monitor), 2R53C (MS Line Rad Monitor) with PZR level lowering. Key actions: transfer to centrifugal charging pump IAW step 3.5 to stabilize PZR level. CRS evaluates <span class="hi-exam">TS 3.4.7.2.c action a — be in Hot Standby within 6 hours</span>. Continuous Action Summary: if leak exceeds makeup capability → trip reactor and actuate SI. In this scenario, the leak worsens to a 650 gpm tube rupture, triggering the CAS trip criteria.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
21 SG tube rupture during EOP-TRIP-2. Diagnostic indications: <span class="hi-exam">RCS pressure and PZR level lowering, OHA A-6 alarm, 2R15 condenser off-gas rad monitor in alarm</span>, 21 SG NR levels rising. CRS enters AB.SG-0001, implements CAS — leak exceeds makeup capability → manually initiate SI, return to EOP-TRIP-1. Eventually transition to EOP-SGTR-1 when 21 SG NR level identified as rising in an uncontrolled manner.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q69</div>
Step 3.37.B subcooling calculation with subcooling monitor NOT functional: convert <span class="hi-exam">psig to PSIA (add 15)</span>, then use steam tables to find TSAT. Subcooling = TSAT - <span class="hi-exam">Hottest CET</span> (not TAVG). Example: 1200 psig → 1215 PSIA → TSAT &asymp; 569 &deg;F. Hottest CET = 540 &deg;F. Subcooling = 569 - 540 = <span class="hi-exam">29 &deg;F</span>. <span class="hi-trap">Two common errors: (1) subtracting 15 instead of adding (entering steam tables at 1185 PSIA → TSAT &asymp; 565 &deg;F), and (2) using TAVG instead of Hottest CET for the subcooling calculation.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A5</div>
SGTR event with stuck-open MSIV: crew responds to valid SG tube leak on 23 SG, implements CAS to trip reactor and initiate SI, enters 2-EOP-SGTR-1. <span class="hi-exam">23 MS167 fails to close from control room</span>. After isolating the other three MSIVs, loud roaring noise heard — <span class="hi-exam">23 SG pressure 850 psig and lowering rapidly, steam flows 12% and rising</span>. This creates an uncontrolled release path (RCS through ruptured tube through open MSIV to atmosphere) = <span class="hi-exam">Site Area Emergency classification</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q14</div>
Earliest control room indication of an SG tube leak at 100% power is the <span class="hi-exam">R53 Main Steamline N-16 monitor</span> (per Radiation Monitoring Lesson Plan NOS05RMS000-17). Order of indication speed: <span class="hi-exam">R53 (N-16, very sensitive) → R46 (Main Steamline high range, no low-level alarm) → R19 (SGBD, has flow lag) → R15 (Condenser Air Ejector, samples downstream of R53)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q15</div>
Step 3.31: set the affected MS10 (MS PWR RELIEF Vlv) setpoint to <span class="hi-exam"><span class="val-alarm">1045 psig</span></span> by depressing button <span class="hi-exam">A</span> on the controller. <span class="hi-trap">Trap: button B raises the manual output to open the valve more — it does NOT change the controller setpoint. 1070 psig is the MS15 (MSSV) lift setpoint, not the AB.SG-0001 MS10 adjusted setpoint.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q68</div>
Step 3.7 — PZR level control during SG tube leak: <span class="hi-exam">reduce letdown to minimum by ONLY placing 2CV3 (45 gpm ORIFICE) in service</span> — do NOT isolate letdown entirely. Step 3.11 — if PZR level cannot be maintained and the reactor has been tripped: <span class="hi-exam">initiate a Safety Injection PRIOR to transitioning to 2-EOP-TRIP-1</span>. <span class="hi-trap">Trap: isolating letdown would provide more margin for PZR level but is NOT what the procedure directs — it directs reducing to minimum (45 gpm orifice only). Also, SI is initiated before going to TRIP-1, not deferred until TRIP-1 Step 5.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
21 SG tube leak (50 gpm) entered DURING EOP-TRIP-2 after Rx trip. Tube leak detection challenge: <span class="hi-exam">R19 SGBD Rad monitors are O/S due to AFW pump auto-start isolating blowdown; R53 N-16 rad monitors are ineffective with the reactor shut down</span> — only <span class="hi-exam">2R15 Condenser Air Ejector monitor</span> provides a rising indication (OHA A-6 RMS HI RAD OR TRBL). Crew may use S2.OP-SO.SS-0001 section 5.2 to re-open the SS94 sample valves to use the 2R19 monitors. CRS initiates AB.SG-0001 in parallel with EOP-TRIP-2; chemistry confirms elevated activity in 21 SG. PO sets <span class="hi-exam">21MS10 setpoint to 1045 psig</span>, closes 21MS7, 21MS18, 21GB4. CRS dispatches operator to shut 21MS45. (Note: 22/23 RCP trips on the prior loss of 2E bus elevate their SG NR levels and complicate identification — affected SG identification may not be made until SS94s are re-opened to use 2R19 monitors.) Tube then ruptures (escalates to 400 gpm) — exit AB.SG-0001 to manual SI and EOP-TRIP-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak at 89.4% power (initially MALF severity 5; severity 650 to escalate to rupture). Entry cue: OHA A-6 with <span class="hi-exam">2R53A 21 Main Steamline N-16 monitor &gt;1000 gpd</span>; reflash on <span class="hi-exam">2R15 Condenser Air Ejector monitor</span>; later <span class="hi-exam">2R19A in warning/alarm</span> with SGBD isolation on high radiation. CRS enters AB.SG-0001 and AB.RAD-0001 in parallel; directs initiation of AB.SG CAS. Affected SG isolation per procedure: PO sets <span class="hi-exam">21MS10 to 1045 psig</span>, ensures 21GB4, 21MS18, and 21MS7 shut; CRS dispatches operator to shut 21MS45 steam supply to 23 AFW pump (rendering 23 AFW inoperable — LCO 3.7.1.2 entered). CRS evaluates leak rate: 21 SG &gt;150 gpd primary-to-secondary leakage triggers <span class="hi-exam">TS 3.4.7.2.c Action Level 3 — &lt;50% in 1 hour and Hot Standby in 6 hours</span>. Leak escalates to rupture; RO trips Rx and initiates SI based on uncontrolled rise in 21 SG NR/WR level — exit AB.SG-0001 to EOP-TRIP-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #4</div>
A <span class="hi-exam">90 gpd SGTL ramps in on 23 SG</span> (entry cue OHA A-6 RMS HI RAD/TRBL, 2R53C then 2R19C/2R15 rising). The crew enters AB.SG-0001, quantifies the leak, and minimizes contamination spread (raise 23MS10 setpoint, close 23GB4/23MS7/23MS18, re-align SG blowdown and MS sampling to the Waste System). The leak meets <span class="hi-exam">CAS Action Level 3 (leak rate &ge; 75 gpd AND rate of change &ge; 30 gpd/hr)</span>, requiring power <span class="hi-exam">&lt;50% within 1 hour</span> and entry of TSAS 3.4.7.2.c; TS 3.4.7.2 applies once leakage exceeds 150 gpd. The leak then escalates to a tube rupture, driving the reactor trip and SI.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]], [[Main Steam]], [[Radiation Monitoring]], [[Control Rod Drive]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[S2.OP-SO.CVC-0008 — Rapid Boration]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam questions: [[2015 Q10]], [[2015 Q11]], [[2016 Q14]], [[2016 Q79]], [[2018 Q15]], [[2018 Q68]], [[2019 Q69]], [[2023 Q81]]
- Related JPMs: [[2019 JPM SRO-A5]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 8]], [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2014 NRC Operating Exam]]
