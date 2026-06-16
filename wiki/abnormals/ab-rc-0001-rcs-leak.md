---
title: "AB.RC-0001 — Reactor Coolant System Leak"
category: abnormals
status: draft
aliases:
  - AB.RC-0001
  - RCS leak
---

# AB.RC-0001 — Reactor Coolant System Leak

## Purpose

Provides operator actions for identifying, characterizing, and mitigating a leak in the Reactor Coolant System.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q3</div>
CV71 backpressure control valve is used to adjust the split between charging flow and seal injection flow to stabilize pressurizer level.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q97</div>
CVCS leak from 2CV6 (Letdown Relief Valve) at 12 gpm: per AB.RC-0001 bases, a <span class="hi-exam">CVCS system leak that can be isolated does NOT require entry into TS 3.4.7.2 and does NOT require an Emergency Declaration (UE EAL SU5.1)</span>. The CVCS is an auxiliary system, not part of the RCS pressure boundary. Once letdown is isolated and leakage stops, TS 3.4.7.2 remains MET.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Event 4: <span class="hi-exam">20 gpm RCS leak inside containment</span>. RO reports 2R11A containment radiation monitor rising, PZR level lowering. CRS enters AB.RC-0001. RO adjusts charging flow to stabilize PZR level, determines leak rate. CRS enters <span class="hi-exam">TS 3.4.7.2.b Action b</span> (reduce leakage within 4 hours or be in Hot Standby). Event 5: leak worsens to 350 gpm — RO reports leak exceeds makeup capability. CRS implements <span class="hi-exam">Att 1 CAS: trip the reactor and actuate SI</span>. LBLOCA follows reactor trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q6</div>
AB.RC-0001 can be entered for any indication of an RCS leak, but <span class="hi-trap">in Mode 4 with uncontrolled PZR level reduction, the procedure directs transfer to AB.LOCA-0001 (Shutdown LOCA)</span>. AB.RC-0001 actions for stopping the RHR pump and closing 21SJ49 (RHR Discharge to Cold Legs) are for Modes 1-3 RHR suction isolation, not Mode 4.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Event 5: RCS leak with rapidly lowering PZR level and pressure. OHA E-28 PZR HTR ON PRESS LO, console alarms PZR LEVEL LO and CONT PRESS HI. CRS enters AB.RC-0001, initiates CAS — directs <span class="hi-exam">Trip Rx, Confirm Rx Trip, Initiate SI</span>. Immediately after trip, leak escalates to LBLOCA with auto SI failure.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
35 gpm RCS leak inside containment at 40% power. 2R11A containment radiation rising, PZR level lowering, OHA C-2 CNTMT SUMP PMP START. CRS enters AB.RC-0001 and AB.RAD-0001. RO transfers to <span class="hi-exam">centrifugal charging pump</span> IAW Step 3.14, raises charging flow. PO reduces letdown to minimum: opens <span class="hi-exam">2CV3</span>, maintains letdown pressure ~300 psig with <span class="hi-exam">2CV18</span> in manual, closes 75 gpm orifice, returns 2CV18 to auto. RO estimates leak rate; CRS initiates S2.OP-ST.RC-0008. CRS enters TSAS <span class="hi-exam">3.4.7.2.b Action b (4 hr LCO)</span> and <span class="hi-exam">3.6.1.4 (1 hr LCO)</span> for containment pressure. Leak exceeds TS limits → orderly unit shutdown. Att 1 CAS later when leak worsens to LBLOCA: <span class="hi-exam">trip reactor, confirm trip, initiate SI</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q100</div>
<span class="hi-exam">In MODE 3 below 1000 psig with accumulators isolated</span>, an unidentified RCS leak that can be characterized by a small charging-flow step is more efficiently handled by entering AB.LOCA-0001 directly, rather than entering AB.RC-0001 first. AB.RC-0001 is "technically acceptable" but its early questions establish MODE 3 with accumulators isolated, which has already been satisfied by IOP-6 step 5.1.31 (accumulators are isolated when pressure lowers to &lt;1000 psig during the cooldown). <span class="hi-trap">Trap: an "RCS leak that can be matched by normal charging makeup capacity" with an obvious symptom does NOT require waiting to first determine whether leakrate exceeds makeup capacity before transferring to AB.LOCA — direct entry to AB.LOCA-0001 is the more efficient path under these MODE 3 / accumulators-isolated conditions.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
<span class="hi-exam">20 gpm RCS leak</span> inside containment at 100% power. Symptoms: charging flow rising (with MFC in auto), PZR level lowering slowly, 2R11A containment radiation monitor rising, OHA C-2 CNTMT SUMP PMP START unexpected. AB.RC-0001 mitigation sequence: <span class="hi-exam">Step 3.14 — swap to a centrifugal charging pump and raise charging flow to stabilize PZR level</span>; PO reduces letdown to minimum (opens <span class="hi-exam">2CV3</span>, maintains letdown pressure ~300 psig with 2CV18 in manual, closes the open 75 gpm orifice, returns 2CV18 to auto); RO stabilizes PZR level and estimates leak rate; CRS initiates <span class="hi-exam">S2.OP-ST.RC-0008, RCS Water Inventory Balance</span>; CFCU alignment per Rad Pro recommendation (typically 2 in Low Speed and 2 in High Speed); CRS initiates leak isolation per Attachment 2. CRS evaluates <span class="hi-exam">TSAS 3.4.7.2.b Action b for RCS leakage</span> and <span class="hi-exam">TS 3.6.1.4 if containment pressure has reached 0.3 psig</span>. Operations Director directs <span class="hi-exam">30%/hr load reduction to 20%</span> in preparation for taking the unit offline. CRS may enter AB.LOAD-0001 to perform the power reduction. <span class="hi-trap">When the leak escalates to 150 gpm during the downpower, PZR level cannot be maintained &gt;17% — the crew takes the CAS action to manually trip the reactor and initiate SI.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
<span class="hi-exam">20 gpm RCS leak</span> inside containment at ~68% power (Event 3), following a Power Range NI channel failure. Symptoms: charging flow rising and PZR level lowering slowly, 2R11A containment radiation monitor reading rising, unexpected OHA C-2 CNTMT SUMP PMP START. CRS enters AB.RC-0001 and directs implementation of CAS; also enters AB.RAD-0001 after OHA A-6. Mitigation: RO swaps to a <span class="hi-exam">centrifugal charging pump IAW Step 3.14</span> and raises charging flow to stabilize PZR level; PO swaps to the <span class="hi-exam">45 gpm letdown orifice</span>; RO estimates leak rate; CRS initiates <span class="hi-exam">S2.OP-ST.RC-0008, Reactor Coolant Water Inventory Balance</span>; per Rad Pro, PO places 2 CFCUs in Low Speed and 2 in High Speed; CRS initiates leak isolation IAW Attachment 2 and enters <span class="hi-exam">TSAS 3.4.7.2.b</span>. <span class="hi-trap">The leak then escalates to a catastrophic RCS loop 22 failure (LBLOCA) — the crew trips the reactor and manually initiates SI when auto SI fails.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q11</div>
While responding to an RCS leak at 40% power with no automatic or manual trip, an ATWT is present (manual Rx trip required) when <span class="hi-exam">PZR pressure is 1860 psig and lowering</span> — the <span class="val-trip">low PZR pressure auto reactor trip setpoint is 1865 psig</span> has been exceeded without a trip. <span class="hi-trap">25°F loop D/T is the normal value at 40% power; a turbine trip does NOT cause a Rx trip below P-9 (49%); the 17% PZR level threshold is heater isolation, not Rx trip.</span>
</div>

## Connections

- Related systems: [[CVCS]], [[RCS]], [[RPS/SSPS]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]], [[S2.OP-SO.RC-0004 — Identifying and Measuring Leakage]]
- Related exam questions: [[2014 Q11]], [[2016 Q100]], [[2018 Q52]], [[2020 Q6]], [[2023 Q3]], [[2023 Q97]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2018 Scenario 2]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]], [[2015 Scenario 1]]
- Related exam: [[2014 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
