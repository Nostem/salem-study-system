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
<div class="callout-label">Exam — 2023 Q17</div>
Step 23 — during RCS depressurization, upper head voiding IS expected with no RCPs running. Monitor pressurizer level — rapidly rising PZR level indicates upper head voiding. Stop depressurization before the pressurizer goes solid.
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

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment Spray]], [[CFCUs]]
- Related exam questions: [[2022 Q80]], [[2023 Q17]]
- Related JPMs: [[2023 JPM SRO-A1.a]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
