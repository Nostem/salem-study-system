---
title: "AB.RHR-0001 — Loss of RHR"
category: abnormals
status: draft
aliases:
  - AB.RHR-0001
  - loss of RHR
---

# AB.RHR-0001 — Loss of RHR

## Purpose
Provides guidance for response to a loss of Residual Heat Removal while in shutdown cooling.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q79</div>
Per OP-SA-108-106-1001 (Equipment Control and Large Motor Starting Criteria) step 4.2.2: during an <span class="hi-exam">emergency condition</span> (as determined by SM/CRS), if a breaker fails to close, the <span class="hi-exam">Shift Manager</span> can authorize <span class="hi-exam">one attempt at reclosure without an investigation</span> if that piece of equipment is essential for maintaining plant stability. No STA concurrence or Plant Manager authorization is required. This applies to 4KV breakers for safety-related pumps such as RHR pumps.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q78</div>
AB.RHR-0001 CAS procedure transitions based on MODE and inventory status: in <span class="hi-exam">MODE 4 with RCS inventory loss (PZR level lowering, containment particulate monitor rising)</span>, the CAS directs the crew to <span class="hi-exam">IMMEDIATELY GO TO AB.LOCA-0001 (Shutdown LOCA)</span>. <span class="hi-trap">Trap: Attachment 9 (SG Reflux Cooling) applies when all vital buses are lost. AB.RHR-0002 (Loss of RHR at Reduced Inventory) applies when RCS is aligned for operation &lt;101 ft elevation. Continuing in AB.RHR-0001 main body (start SI/Charging, control PZR level 5-50%) applies in MODE 5 or 6.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q6</div>
<span class="hi-trap">AB.RHR-0001 in Mode 4 directs per CAS to AB.LOCA-0001 (Shutdown LOCA)</span> for an uncontrolled reduction in PZR level. AB.RHR-0001 actions (isolate letdown, start SI and charging pumps, maintain PZR level 5-50%) apply to Modes 5 or 6 affecting RHR — NOT Mode 4.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-b</div>
Mode 5 with RCS depressurized/vented: 21 RHR Pump trips on electrical fault, <span class="hi-exam">22 RHR Pump trips shortly after starting (alternate path)</span>. Procedure path: 3.3 No (not reduced inventory) → 3.5 Yes (mechanical/electrical failure) → 3.50 Yes (heat sink available) → 3.51 Yes → 3.52 Attachment 3 (22 RHR trips) → re-enter → 3.7-3.25 (no RHR running) → 3.30-3.32 → <span class="hi-exam">Attachment 8, Cold Leg Injection</span> (core exit TCs &lt;200°F). Key valve lineup: <span class="hi-exam">open 2SJ1/2SJ2 (RWST to charging), close 2CV40/2CV41 (VCT to charging), open 2SJ4/2SJ5 and 2SJ12/2SJ13 (BIT), close 2CV68/2CV69 (charging discharge)</span>. Also isolates: stop RHR L/D Booster Pump, close 2CV8.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q86</div>
Heatup rate during loss of RHR: per AB.RHR-0001 Attachment 5 (Heatup Rate for Loss of RHR Cooling), <span class="hi-exam">2 days after shutdown (before offload) at 10% PZR Level, heatup rate is 5 &deg;F per minute</span>. With TAVG at 150 &deg;F, time to reach 200 &deg;F (MODE 4) = (200 - 150) / 5 = <span class="hi-exam">10 minutes</span>. EAL#CA4.1 criteria for ALERT with RCS intact: <span class="hi-exam">RCS must be &gt; 200 &deg;F for 60 minutes</span>. Earliest ALERT at 0810 (0700 + 10 min heatup + 60 min duration). <span class="hi-trap">Trap: using the wrong heatup curve (after offload = 3.4 &deg;F/min) gives incorrect time to 200 &deg;F. Must use before offload curve since the plant has only entered MODE 3 for a planned outage — no fuel has been offloaded.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q87</div>
AB.RHR-0001 CAS for loss of RCS inventory in <span class="hi-exam">MODE 5</span>: "IF AT ANY TIME a loss of RCS inventory occurs, THEN PERFORM one of the following: IF in Mode 5 OR 6, THEN <span class="hi-exam">START Safety Injection and Charging Pumps as required AND CONTROL Pressurizer level between 5% and 50% while maintaining RHR System in service</span>." Key CAS routing based on MODE:<br>
- <span class="hi-exam">Mode 4 with inventory loss → AB.LOCA-0001 (Shutdown LOCA)</span><br>
- <span class="hi-exam">Mode 5 or 6 with inventory loss → Start SI/Charging, control PZR level 5-50%</span><br>
- <span class="hi-exam">Complete loss of all vital buses (not BDBE) → Attachment 9 (SG Reflux Cooling)</span><br>
- <span class="hi-exam">RCS aligned for operation < 101 ft elevation → AB.RHR-0002</span>
</div>

## Connections

- Related systems: [[RHR]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[AB.CONT-0001 — Containment Closure]]
- Related admin: [[EP-SA-325 — Emergency Plan Implementing Procedures]]
- Related exam questions: [[2018 Q53]], [[2018 Q84]], [[2018 Q87]], [[2019 Q78]], [[2019 Q86]], [[2020 Q6]], [[2023 Q79]]
- Related JPMs: [[2020 JPM Sim-b]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]]
