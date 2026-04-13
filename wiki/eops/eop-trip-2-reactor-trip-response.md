---
title: "EOP-TRIP-2 — Reactor Trip Response"
category: eops
status: draft
aliases:
  - EOP-TRIP-2
  - reactor trip response
---

# EOP-TRIP-2 — Reactor Trip Response

## Purpose

Provides post-trip response actions following a reactor trip without safety injection, including emergency boration procedures.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q19</div>
Step 4 — rapid boration via BAT pump and CV175. Adequate flow is 36 gpm. If flow is inadequate, stop BAT pump and realign charging suction to RWST.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q21</div>
Control Rod Insertion step — if 2CV175 (RAPID BORATE STOP VALVE) fails to open, EOP-TRIP-2 directs: <span class="hi-exam">OPEN RWST to CHARGING SUCTION VALVES 2SJ1 and 2SJ2, then CLOSE VCT to CHARGING SUCTION VALVES 2CV40 and 2CV41</span> to establish rapid boration from the RWST. <span class="hi-trap">Alternate paths via 2CV174 (Blender Bypass), 2CV172/2CV185 (normal boration), or 2CV172/2CV181 (blender to VCT) are in S2.OP-SO.CVC-0008 (Rapid Boration) but are NOT directed in TRIP-2.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A2</div>
Step 4 — Control Rod Insertion boration: for stuck control rods, rapid boration time = <span class="hi-exam">35 minutes per stuck rod</span>. Three stuck rods from Control Bank Delta = 35 x 3 = <span class="hi-exam">105 minutes</span> total rapid boration at 40 GPM. Total volume injected = 105 min x 40 GPM = <span class="hi-exam">4200 gallons</span>. Use S2.OP-TM.ZZ-0002 tank capacity curves to convert BAST levels between percent and gallons for determining final tank levels.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A2</div>
Step 4 boration for 3 stuck Control Bank Delta rods: <span class="hi-exam">35 min x 3 = 105 minutes</span> at 40 GPM = 4200 gallons total. Both BASTs start at 70% (5500 gal each). Each lowers by 2100 gal to 3400 gal = <span class="hi-exam">43% per tank</span>. Post-boration TS evaluation: with RWST at 2350 ppm and BAST at 6650 ppm, TS 3.1.2.6 Figure 3.1-2 requires > 96.5% combined BAST level. At 86% combined (43% + 43%), <span class="hi-exam">LCO 3.1.2.6.a.1 is NOT met — restore within 72 hours or Hot Standby in 6 hours</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q11</div>
Step 15 directs selectively energizing PZR backup heaters from the vital bus during a LOOP. Per S2.OP-SO.PZR-0010, aligning PZR heaters adds approximately 210 KW to bus load and the maximum DG load at the 2000 hr rating is 2750 KW.
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]], [[EDGs]], [[Pressurizer & PRT]]
- Related procedures: [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]], [[S2.OP-SO.CVC-0008 — Rapid Boration]]
- Related exam questions: [[2020 Q11]], [[2020 Q21]], [[2023 Q19]]
- Related JPMs: [[2022 JPM RO-A2]], [[2022 JPM SRO-A2]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]]
