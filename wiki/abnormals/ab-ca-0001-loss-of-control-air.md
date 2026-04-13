---
title: "AB.CA-0001 — Loss of Control Air"
category: abnormals
status: draft
aliases:
  - AB.CA-0001
  - S2.OP-AB.CA-0001
  - Loss of Control Air
---

# AB.CA-0001 — Loss of Control Air

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for responding to a loss of control/instrument air on Salem Unit 2, including identification of affected equipment and manual operation of air-operated valves.

## Key Information

### Attachment 2 — Auxiliary Feedwater System Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21-24AF11 | FO | 23AFP Disch to 21-24SG | Yes |
| 21-24AF21 | FO | AFP to 21-24SG | Yes |
| 21-23AF52 | FC | AFP Suct XConn | Yes |
| 21-22AF40 | FO | 21-22AF Pump Recirc | Yes |
| 2MS53 | FHSS | 23AFP Turbine Governor | Yes |
| 2MS132 | FO | 23AFP Turbine Steam Inlet | - |
| 2DR6 | FO | Supply to AFW | Yes |

### Other Key Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21/22SW122 | FO | SW Inlet Control Valve to CCW HX | Yes |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
2MS132 (23 AFW Turbine Steam Inlet Valve) <span class="hi-exam">fails OPEN on loss of air</span>. This causes 23 AFW pump to start and inject cold feedwater into all SGs, raising reactor power above 100% RTP. Operator should reduce power per S2.OP-IO.ZZ-0004.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q44</div>
2DR6 (AFW Tank Makeup valve) <span class="hi-exam">fails OPEN on loss of air</span>. This causes AFWST level to rise and potentially overflow. Per Attachment 2, 2DR6 can be manually operated from the field to control tank level.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
21SW122 (SW Inlet Control Valve to CCW HX) <span class="hi-exam">fails OPEN on loss of air</span> (fails CLOSED on loss of 125VDC). When open, SW flow rises through CCW HX, lowering CCW temperature, which lowers RHR HX outlet temperature and raises cooldown rate. Can be manually operated per Attachment 2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q15</div>
ECAC starting criteria and CAS: if <span class="hi-exam">2B CA Header is &le; 88 psig</span>, notify Unit 1 NCO to start <span class="hi-exam">#1 ECAC</span> (#1 ECAC senses CA Header B). CAS: if <span class="hi-exam">BOTH CA headers lower to &lt; 80 psig, Trip the Reactor</span>. <span class="hi-trap">#2 ECAC senses CA Header A (not B). #1 ECAC senses CA Header B (not A). The ECAC number does NOT match the header letter. The CAS requires BOTH headers &lt; 80 psig, not EITHER.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q45</div>
BF19 (Main Feedwater Regulating Valves) on loss of all station air: <span class="hi-exam">BF19s start to close at <span class="val-alarm">80 psig</span> control air header pressure</span> (per AB.CA-0001 bases). CAS directs: monitor BF19s for closure and inability to control SG level, or less than <span class="val-trip">80 psig</span> control air header pressure → trip the reactor. <span class="hi-trap">85 psig is the ECAC auto-start setpoint, not the BF19 closure pressure.</span> BF19s receive air from Unit 1 via Lunkenheimer panels, but on total loss of all station air compressors, no Unit 1 CA available. <span class="hi-trap">ECACs cannot supply BF19 CA headers — a check valve isolates the turbine building headers from the ECAC supply.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q88</div>
On loss of all control air with letdown isolated: <span class="hi-exam">1CV55 fails OPEN and 1CV71 fails CLOSED</span>, resulting in higher charging flow and pressure to RCP seals, causing <span class="hi-exam">PZR level to RISE</span>. Two preferred actions: (1) locally control charging flow by adjusting <span class="hi-exam">1CV54, CENT CHG PUMP FLOW CONT VLV</span>, or (2) transfer to <span class="hi-exam">13 PDP</span> whose speed controller fails at the low speed stop, minimizing seal flow. <span class="hi-trap">PZR level rises (not lowers) because charging flow increases with letdown isolated and CV55 failed open.</span>
</div>

## Connections

- Related systems: [[AFW]], [[Service Water]], [[CCW]], [[RHR]], [[Containment]], [[CVCS]], [[Pressurizer & PRT]], [[Feed & Condensate]], [[Control Air]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related exam questions: [[2020 Q15]], [[2020 Q45]], [[2022 Q88]], [[2023 Q43]], [[2023 Q44]], [[2023 Q51]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
