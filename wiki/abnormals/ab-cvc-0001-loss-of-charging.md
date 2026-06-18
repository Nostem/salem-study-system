---
title: "AB.CVC-0001 — Loss of Charging"
category: abnormals
status: draft
aliases:
  - AB.CVC-0001
---

# AB.CVC-0001 — Loss of Charging

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

**Exam & operating coverage:**

### PZR Level Channel Failures

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q38</div>
When responding to a controlling PZR level channel failed low: an automatic letdown isolation occurs and <span class="hi-exam">a control channel failing low (or a level alarm) deenergizes all PZR heaters</span>; the PZR low-level cutoff (17%) keeps backup heaters OFF. See [[Pressurizer Level & Press Control]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q40</div>
When AB.CVC-0001 directs taking the Charging Master Flow Controller to Manual for a PZR level channel failed low, <span class="hi-trap">the MFC must NOT be returned to auto until PZR level is restored to program</span> — doing so forces charging flow low and can cause letdown-line flashing (inadequate regenerative-HX cooling below ~60 gpm). See [[Pressurizer Level & Press Control]], [[CVCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q7</div>
Returning the Master Flow Controller (MFC) to auto PRIOR to returning PZR level to program (after a controlling PZR level channel failed low and MFC was placed in manual): with a CCP in service, the failed-low channel had caused charging flow to RISE; with MFC in manual, actual PZR level is now substantially higher than program. Returning MFC to auto with actual level above program will <span class="hi-exam">force charging flow to LOWER</span>. If charging flow lowers below ~<span class="val-alarm">60 gpm</span>, <span class="hi-exam">inadequate cooling of letdown flow occurs in the regenerative heat exchanger and letdown line flashing could occur</span>. <span class="hi-trap">2CC71 (Letdown HX CC Cont Valve) normally only ~10% open with plenty of room to open, so demin isolation on high inlet temp would NOT occur. VCT auto makeup and exceeding TS seal injection limits require RISING charging flow — the wrong direction.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #4</div>
The Charging Master Flow Controller (MFC) auto setpoint <span class="hi-exam">fails low (ramps to 0% demand over ~5 minutes)</span>, lowering charging flow with PZR level. The crew enters AB.CVC-0001: take the MFC to manual (output stabilizes but cannot be raised), then place 23 charging pump speed controller in manual and restore charging flow to program. A coincident <span class="hi-exam">non-controlling PZR level Channel III failure low is silent</span> — no audible alarm and no letdown isolation, because control/alarm functions come off the selected channels (LC460D, LC459F). CRS removes Channel III from service and enters <span class="hi-exam">TSAS 3.3.1.1 action 6</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
Controlling PZR Level Channel I fails low at 100% power — letdown isolates and Master Flow Controller raises charging flow. Crew takes manual control of MFC, returns PZR level to program, selects operable channel for Control/Alarm/Recorders. Letdown restoration sequence: ensure <span class="hi-exam">2CV7</span> open; place <span class="hi-exam">2CV18</span> in manual and close/open until close PB extinguishes; open <span class="hi-exam">2CV2 and 2CV277</span> then place both in auto; verify charging flow ~<span class="val-normal">85-90 gpm</span>; open a 75 gpm orifice while adjusting 2CV18 to control letdown pressure ~300 psig; place 2CV18 in auto. CRS enters <span class="hi-exam">TS LCO 3.3.1.1 Action 6</span>. OHA E-20 PZR HTR ON LVL HI is expected to annunciate due to no letdown with charging flow established.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
Charging Master Flow Controller fails (severity 26) during a 5%/min downpower to 85%. Diagnostic indications: <span class="hi-exam">low seal injection flow alarms on all RCPs</span>; charging flow lower than expected (<span class="hi-exam">~75 gpm vs ~87 gpm</span>); no PZR level or VCT level channel failure; no charging system leak; charging pump running with no cavitation. CRS enters AB.CVC-0001. Initial RO action: use Alarm Response Procedure to adjust 2CV71 to restore seal injection above the alarm setpoint (does NOT restore normal charging flow). Crew transitions to Att. 2 — RO takes <span class="hi-exam">manual control of 23 charging pump</span> and adjusts speed to maintain PZR level on program. RO announces auto rod motion when it occurs. Goal: maintain PZR level stable or rising while diagnosing.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
PZR Level Channel 1 fails low — letdown isolates. RO takes manual control of charging flow, selects operable channel, energizes PZR heaters. Restores letdown: opens 2CV7, 2CV18 in Manual, opens 2CV2 and 2CV277 in Auto, ensures charging flow ~85-90 gpm.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
PZR Level Channel I fails high. Charging flow lowers automatically. RO places Master Flow Control in Manual and raises charging flow to restore PZR level to program. CRS enters AB.CVC-0001. RO selects operable <span class="hi-exam">Channel 3 for control</span> and operable Channel 2 or 3 for recorder. CRS evaluates <span class="hi-exam">TS 3.3.1.1 action 6 (72 hours to place channel in tripped condition)</span>.
</div>

### VCT Level Channel Failures

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-b</div>
Entered for a <span class="hi-exam">failure of a VCT level channel</span> (2LT-112 fails high). Attachment 1 (Continuous Action Summary) is initiated, then the diagnostic path runs: charging pump running (3.2) → no cavitation (3.16) → no PZR level channel failure (3.54) → <span class="hi-exam">VCT level instrument 2LT-112 failed high (3.63)</span>. Step 3.64 (critical): <span class="hi-exam">TAKE MANUAL control of 2CV35, VCT 3 WAY INLET V, and position it to the VCT</span> (the high-failing channel had auto-shifted 2CV35 to the HUT). Step 3.66 then initiates manual makeup to the VCT IAW S2.OP-SO.CVC-0006. See [[S2.OP-SO.CVC-0006 — Boron Concentration Control]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-b</div>
Entered due to VCT level channel <span class="hi-exam">2LT112 failing high</span> at 100% power, MOL. CRS directs manual makeup of VCT to 53% per S2.OP-SO.CVC-0006 Section 5.2. VCT level monitored via <span class="hi-exam">2LT114 on Plant Computer</span> (P250 on 2CC1). RCS boron 900 ppm, BAST 6700 ppm.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Entered due to VCT level channel <span class="hi-exam">2LT112 failing high</span>. CRS directs manual makeup to VCT per S2.OP-SO.CVC-0006 Section 5.2 to restore VCT level to 53%. VCT level monitored via <span class="hi-exam">2LT114 on Plant Computer</span> (2LT112 unreliable due to failure).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
VCT level channel 2LT-114 fails high — 2CV35 diverts to CVCS HUT, VCT level lowers. RO takes manual control of 2CV35 and positions to VCT. CRS directs maintaining VCT level by cycling 2CV35 or initiating manual makeup IAW S2.OP-SO.CVC-0006.
</div>

### Charging Pump Trips & Loss of All Charging

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q5</div>
At 100% power with the <span class="hi-exam">13 (Positive Displacement) charging pump in service (powered from the 1A 460V bus)</span> and normal letdown in service, deenergizing the 1A 460/230V bus stops the 13 charging pump. <span class="hi-exam">The 13 charging pump breaker does NOT have a UV trip</span>, so the auto-close interlock for the 3 letdown orifice isolation valves (which requires all 3 charging pump breakers open) is NOT satisfied — <span class="hi-exam">letdown stays in service at 75 gpm</span>. With letdown removing inventory and no charging, <span class="hi-exam">PZR level lowers at ~1% per minute</span>, and <span class="hi-exam">VCT level RISES at ~4% per minute</span> (20 gal/% VCT rule, letdown still entering VCT, no charging pump drawing from VCT). <span class="hi-trap">The two centrifugal charging pumps (11, 12) are powered from the B and C 4KV buses, not the 1A 460V bus.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q30</div>
With all charging lost (all 3 charging pump breakers open): <span class="hi-exam">letdown orifice isolation valves auto-shut (letdown flow zero), and VCT level RISES because seal return continues to the VCT while no charging pump draws from it</span>. RCP seal cooling is maintained by <span class="hi-exam">flow from the RCS past the Thermal Barrier heat exchanger</span>, allowing time to restore charging. Cross-unit option: 13 (Unit 1) charging pump aligned to supply Unit 2 charging header would require a <span class="hi-exam">Unit 2 shutdown (not Unit 1)</span> due to higher-borated Unit 1 RWST water being added to Unit 2 RCS. <span class="hi-trap">A reactor trip is directed only if BOTH seal injection AND Thermal Barrier flow are lost (see AB.RCP-0001).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q6</div>
After a charging pump trips, AB.CVC-0001 directs (prior to starting a charging pump) <span class="hi-exam">check RCP seal inlet temperature &lt;<span class="val-trip">225°F</span> OR seal injection isolated</span> — to prevent thermal shock/seal-and-shaft damage when CVCS flow is restored to hot seals. The basis uses <span class="hi-exam">EOP-LOPA-1 as guidance</span> (in LOPA, CCW is also lost and seals have heated up, so seals are isolated). <span class="hi-trap">VCT pressure is automatically maintained 15-25 psig and is not checked; 2CV55 is shut to prevent excessive flow (it is normally full open at power); 2CV71 is not adjusted until after the pump is started.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q5</div>
When the in-service charging pump trips, <span class="hi-exam">letdown automatically isolates with all charging pump breakers open</span>. If a standby charging pump can only be placed in service with <span class="hi-exam">suction aligned to the RWST</span> (rather than the VCT, per step 3.7), the note before that step directs that a <span class="hi-exam">unit shutdown is required because of borating the RCS from the RWST</span>. (Restoring letdown or placing Excess Letdown in service addresses VCT level but is not the AB.CVC-0001 direction for this condition.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q77</div>
After a single charging pump trip (breaker malfunction) with 23 charging pump placed in service, only <span class="hi-exam">TS 3.5.2.a (ECCS) is entered</span> in Modes 1-3 — restore within 72 hours or Hot Shutdown within the next 12 hours. See [[CVCS]], [[ECCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q77</div>
Loss of one charging pump (21 CHP trips, 23 CHP started): <span class="hi-exam">TS 3.1.2.2 (Boration Flow Paths) still met — two boration flow paths remain</span>. <span class="hi-exam">TS 3.1.2.4 (Charging Pumps) still met — 23 Charging Pump counts for reactivity addition capability</span> (two pumps still operable: 22 and 23). <span class="hi-exam">TS 3.5.2 (ECCS) is the only applicable entry — one ECCS subsystem inoperable</span> (21 CHP is the high-head ECCS component for that train). 72 hours to restore, then Hot Shutdown within 12 hours (total 84 hours to MODE 4). <span class="hi-trap">The 23 Charging Pump (positive displacement) counts toward the reactivity TS (3.1.2.4) but is NOT an ECCS high-head pump.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q91</div>
With <span class="hi-exam">no Unit 2 Charging Pumps available</span> (22 CV Pump lost on 2C bus fault, 23 CV Pump tagged, 21 CV Pump tripped on overcurrent), step 3.50 directs: <span class="hi-exam">"COORDINATE with Unit 1 to place 13 Charging Pump in service using U/1 RWST."</span> <span class="hi-trap">Trap: the procedure does NOT direct tripping the reactor and initiating SI (that action is for PZR level uncontrolled). A bus differential fault prevents 2C EDG from re-energizing the bus, so 22 CV Pump cannot be recovered via AB.4KV-0003.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q6</div>
Per step 3.109, if MFC malfunction: take manual control of 2CV55 or 23 Charging Pump. <span class="hi-trap">With 23 Charging Pump in service, 2CV55 has no effect on charging flow</span> — must take manual control of <span class="hi-exam">23 Charging Pump Speed Controller</span>. 23 Charging Pump low speed stop maintains minimum <span class="hi-exam">47 gpm</span> for RCP seal injection.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A3</div>
12 Charging pump trips at 0700 while 1B EDG is CIT. Crew enters S1.OP-AB.CVC-0001, starts 13 Charging pump, restores letdown and PZR level. The CRS must then evaluate TS impact: <span class="hi-exam">TS 3.5.2.a action a (72 hours)</span> for the inoperable ECCS subsystem (12 Charging pump), AND <span class="hi-exam">TS 3.8.1.1 action b.2 (4 hours)</span> because the 12 Charging pump is a redundant required feature of the CIT 1B EDG.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
23 Charging pump trip with letdown isolation failure: 2CV4 (orifice isolation valve) <span class="hi-exam">fails 40% open</span> when the letdown orifice automatic isolation signal occurs (all 3 charging pump breakers open). RO confirms 2CV4 NOT full closed. CRS enters AB.CVC-0001. RO directed to manually shut 2CV4 — <span class="hi-exam">will NOT shut</span>. CRS directs RO to isolate letdown by shutting <span class="hi-exam">2CV2 and 2CV277</span> (per Step 3.5, may be performed earlier). RO verifies all RCP seal inlet temps &lt;225°F, closes 2CV55, starts 21 or 22 charging pump and throttles 2CV55 to obtain desired flow, maintains <span class="hi-exam">6-12 gpm seal injection per RCP with maximum 40 gpm total</span>. Crew determines normal letdown is NOT available due to failed CIV 2CV4. CRS enters <span class="hi-exam">TSAS 3.6.3 Action 1 (INOPERABLE Containment Isolation Valve)</span>. (Note: There is no direction in AB.CVC-1 to place Excess Letdown in service; if directed, the crew uses S2.OP-SO.CVC-0003.)
</div>

### Charging Line Leaks & Diagnostics

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q52</div>
Charging line leak diagnosis: <span class="hi-exam">seal injection flow lowering + PZR level lowering + 2R41 (Plant Radiation Monitor) rising + letdown line flashing</span> = leak on the CVCS <span class="hi-exam">charging</span> line. A <span class="hi-exam">charging line leak IS an entry condition</span> for AB.CVC-0001. <span class="hi-trap">Trap: letdown line leak shows similar symptoms (PZR level lowering, radiation rising) but would NOT cause seal injection to lower or letdown line flashing. Letdown line leak is NOT an entry condition for AB.CVC-0001.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q69</div>
<span class="hi-trap">Trap: AB.CVC-0001 (Loss of Charging) does NOT apply to an unexpected 2CV35 (VCT 3 Way Inlet Valve) swap when Excess Letdown is in service — excess letdown does not flow through 2CV35, so the swap does not affect RCS letdown and AB.CVC-0001 will not address the valve movement.</span> The correct first action is to stop work (OOPS) per HU-AA-101, not to enter AB.CVC-0001.
</div>

## Connections

- Related systems: [[CVCS]], [[EDGs]], [[RCPs]], [[460/230V AC]], [[Pressurizer Level & Press Control]]
- Related exam questions: [[2014 Q6]], [[2015 Q5]], [[2016 Q7]], [[2018 Q52]], [[2020 Q77]], [[2020 Q91]], [[2022 Q6]], [[2015 Q38]], [[2015 Q40]], [[2015 Q77]], [[2012 Q5]], [[2012 Q30]], [[2012 Q69]]
- Related JPMs: [[2018 JPM Sim-b]], [[2019 JPM SRO-A3]], [[2022 JPM Sim-b]], [[2015 JPM Sim-b]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 8]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2012 NRC Written Exam]]
