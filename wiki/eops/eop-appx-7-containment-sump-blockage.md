---
title: "EOP-APPX-7 — Containment Sump Blockage"
category: eops
status: draft
aliases:
  - EOP-APPX-7
  - APPX-7
---

# EOP-APPX-7 — Containment Sump Blockage

## Purpose

Provides guidance for responding to containment sump blockage during a LOCA when attempts to establish containment sump recirculation have failed.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q89</div>
On entry to APPX-7 from LOCA-3 for containment sump blockage causing pump cavitation, the crew <span class="hi-exam">stops all operating Charging, SI, and RHR pumps</span> taking suction from the blocked sump (any pump fed from an RHR pump is stopped before stopping the RHR pump). The correct transition is to <span class="hi-exam">APPX-7, NOT [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]</span> — LOCA-5 applies only when emergency recirculation is lost for a reason <span class="hi-trap">OTHER than containment sump blockage</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q88</div>
Transition to APPX-7 from LOCA-3: <span class="hi-exam">erratic flow and pressure on both trains of ECCS pumps after alignment to containment sump = cavitation = sump blockage indication</span>. Per LOCA-3 CAS, crew IMMEDIATELY transitions to APPX-7. <span class="hi-trap">LOCA-5 is the wrong procedure — it applies only when recirculation is lost for reasons NOT related to sump blockage.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q87</div>
Transition to APPX-7 vs LOCA-5 during cold leg recirculation transfer: <span class="hi-exam">cavitation indications (oscillating RHR pump amps, flows, and discharge pressures) after sump valves are open indicate containment sump blockage → enter EOP-APPX-7</span>. EOP-LOCA-5 would be entered instead only if loss of recirculation was due to <span class="hi-exam">mechanical or electrical component failures</span> (not sump blockage). Minimum ECCS flow from Figure A (same figure in both LOCA-5 and APPX-7): at <span class="hi-exam">T+16 minutes post-trip, minimum ECCS flow is approximately <span class="val-normal">550 gpm</span></span>. <span class="hi-trap">Trap: the Figure A x-axis is a LOG scale — incorrectly reading 16 minutes gives 500 gpm, which is the wrong answer.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q04</div>
Step 43, MAINTAINING RCS HEAT REMOVAL: when all RCPs are stopped and sump recirculation has failed, the crew dumps steam from intact SGs to <span class="hi-exam">promote Core Reflux Cooling</span>. Reflux cooling is the mechanism by which steam generated in the RCS enters SG tubes and is condensed by cold water on the SG secondary side — this liquid remains in the primary system and promotes cooling. It is especially important to keep the secondary system adequately full of water.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
LBLOCA in cold leg recirculation when both RHR pumps cavitate and ALL ECCS pumps fed from RHR also cavitate — entry into APPX-7 from the LOCA-3 Continuous Action Summary. <span class="hi-exam">Pump-stopping order is pass/fail</span>: per the APPX-7 Caution, any pump receiving suction from an RHR pump must be stopped <strong>before</strong> stopping the RHR pump. Step 1.a RNO sequence: ensure 21/22 RH29 in AUTO → <span class="hi-exam">stop 21/22 Charging and 21/22 SI pumps</span> → close 21/22 CS36 if cavitation continues → CLOSE affected SJ49(s) (RHR to Cold Leg) after removing lockouts → STOP affected RHR pump(s) only as the LAST resort. Step 3: stop ALL Containment Spray pumps. Step 5.b: <span class="hi-exam">restart ONE RHR pump</span> with suction aligned to containment sump (via 21/22 SJ44). Step 6: <span class="hi-exam">start ONLY ONE Charging or SI pump</span> in recirculation alignment (one of four available; preferably a charging pump, but any one of the four is SAT). RWST level &gt;1.2 ft is the CAS prerequisite to remain in this recirculation flow path.
</div>

## Connections

- Related systems: [[ECCS]], [[Steam Generator & Blowdown]], [[Containment Spray]], [[RHR]], [[CFCUs]]
- Related EOPs: [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam questions: [[2019 Q88]], [[2020 Q87]], [[2022 Q04]], [[2014 Q89]]
- Related JPMs: [[2016 JPM Sim-b]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2014 NRC Written Exam]]
