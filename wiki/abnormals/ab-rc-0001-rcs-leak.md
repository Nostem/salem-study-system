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

## Connections

- Related systems: [[CVCS]], [[RCS]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]]
- Related exam questions: [[2020 Q6]], [[2023 Q3]], [[2023 Q97]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
