---
title: "S2.OP-SO.CVC-0008 — Rapid Boration"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CVC-0008
  - SO.CVC-0008
  - rapid boration
---

# S2.OP-SO.CVC-0008 — Rapid Boration

## Purpose

Provides procedural guidance for establishing rapid boration flow to the RCS. Contains alternate boration flow paths beyond those directed in EOP-TRIP-2.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q21</div>
S2.OP-SO.CVC-0008 contains alternate rapid boration paths including: <span class="hi-exam">opening BLENDER BYP VALVE 2CV174 locally then opening BA FLOW CONTROL TO BLENDER 2CV172</span>, and the normal boration flowpath via <span class="hi-exam">2CV172 and 2CV185</span>. <span class="hi-trap">These alternate paths are in SO.CVC-0008 but are NOT directed by EOP-TRIP-2.</span> EOP-TRIP-2 directs: first attempt 2CV175 (Rapid Borate Stop Valve), and if that fails, realign charging suction to the RWST via 2SJ1 and 2SJ2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q91</div>
Per the ROD INSERT LIMIT LO-LO Alarm Response Procedure, S2.OP-SO.CVC-0008 (Rapid Boration) is the <span class="hi-exam">ONLY procedure allowed to restore Control Rods above the Rod Insertion Limit</span>. <span class="hi-trap">Raising turbine power to lower TAVG (causing rods to withdraw) is NOT permitted by the alarm response procedure — boration is the only corrective action.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q11</div>
For a single stuck rod after a Rx trip during a SG tube-leak shutdown, the rapid boration is directed by <span class="hi-exam">AB.SG-0001 Step 3.28 (35 minutes per stuck rod)</span> after exiting the TRIP series — NOT in the EOP series. The boration is initiated before any RCS depressurization begins (AB.SG-0001 Step 3.29).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q7</div>
If 2CV175 (Rapid Borate Stop Valve) will not open, rapid boration can still be established via the alternate path of <span class="hi-exam">opening 2CV174 (Blender Bypass) and 2CV172 (Boric Acid Flow to Blender)</span> — the flowpath from the BAT pumps through 2CV172 and 2CV174. <span class="hi-trap">Opening only the 2SJ1/2SJ2 RWST-to-charging stop valves is insufficient unless the 2CV40/2CV41 VCT outlet valves are also shut (otherwise RWST head is too low against ~20-30 psig VCT pressure to be drawn into charging suction).</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
Emergency boration is initiated during the Stator Water main turbine runback if OHA E-16 ROD INSERT LMT LO-LO annunciates: <span class="hi-exam">start a BAT pump in FAST, charging &gt; 75 gpm, BA flow &gt; 36 gpm</span>. Boration continues until <span class="hi-exam">rods are at least 2 steps above the RIL</span>, then it is secured. Entered from [[AB.LOAD-0001 — Rapid Load Reduction]].
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam questions: [[2014 Q7]], [[2015 Q11]], [[2018 Q91]], [[2020 Q21]]
- Related scenarios: [[2012 Scenario 1]]
- Related exam: [[2014 NRC Written Exam]], [[2015 NRC Written Exam]], [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2012 NRC Operating Exam]]
