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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q61</div>
ECAC manual start criteria per Step 3.10: start 2 ECAC when <span class="hi-exam">2A Control Air Header &le; <span class="val-alarm">88 psig</span></span>. With headers trending down (99→88→79→72 psig on 2A, 103→93→85→79 psig on 2B), earliest ECAC start is when 2A first hits 88 psig. CAS reactor trip criteria: <span class="hi-exam">BOTH 2A and 2B Control Air Headers indicate &lt; <span class="val-trip">80 psig</span></span> — earliest trip is when 2B (the last header to drop) falls below 80 psig. <span class="hi-trap">Trap: 100 psig is the threshold for starting the remaining Station Air Compressor (Step 3.7), not the ECAC. Also, the reactor trip requires BOTH headers below 80 psig — not just ONE header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q61</div>
ECAC manual start criteria: crews will MANUALLY start the 1 ECAC and 2 ECAC when the 1A/1B/2A/2B Control Air Headers lower to a MAXIMUM of <span class="hi-exam val-alarm">88 psig</span>. <span class="hi-trap">100 psig is the threshold at which the remaining Station Air Compressor is started — not the ECAC manual start threshold.</span> Ensuring proper operation of the BF19s (Main Feedwater Control Valves) is <span class="hi-exam">NOT</span> a reason for starting the ECACs — <span class="hi-trap">check valves in the CA system prevent the ECACs from supplying the BF19s</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q93</div>
AB.CA-0001 CAS reactor trip criteria (SRO question): when <span class="hi-exam">BOTH Control Air Headers indicate less than <span class="val-trip">80 psig</span></span> (1A at 79 psig, 1B at 77 psig), the crew's next action is to <span class="hi-exam">TRIP the Reactor</span> and perform EOP-TRIP-1 CONCURRENTLY with <span class="hi-exam">AB.CA-0001 Attachment 12 (LOCAL CONTROL OF SG PRESSURE AND LEVEL)</span>. <span class="hi-trap">Trap: Attachment 5 (Excess Flow Check Valves) only applies when at least one header is GREATER than 80 psig (Step 3.17). Attachment 6 (Abnormal Cooling Water Lineups) is not required unless cooling water to air compressors was lost. A controlled shutdown per IO.ZZ-0004 is NOT appropriate when BOTH headers are below 80 psig.</span>
</div>

### PZR Level and RCS Cooldown Requirement

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q80</div>
Per S2.OP-AB.CA-0001: any time Pressurizer Level approaches a MINIMUM of <span class="hi-exam"><span class="val-alarm">90%</span></span>, the crew is required to commence an <span class="hi-exam">RCS Cooldown to 350 &deg;F using guidance contained in S2.OP-AB.CA-0001 itself</span> (NOT S2.OP-IO.ZZ-0006). <span class="hi-trap">Trap: 70% is the PZR LEVEL HI Bezel Alarm, not the cooldown trigger. The cooldown threshold is 90%. Also, the cooldown is directed by AB.CA-0001, not the IOP for Hot Standby to Cold Shutdown.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q93</div>
Number 1 ECAC provides air to 1B and 2B CA Headers ONLY due to <span class="hi-exam">check valves between Unit 1 Control Air and Station Air</span>. Per S1.OP-AB.CA-0001, Attachment 12 ("Local Control Of SG Pressure and Level") is directed when <span class="hi-exam">BOTH 1A and 1B Control Air Headers indicate less than <span class="val-trip">80 psig</span></span>. <span class="hi-trap">Trap: the criterion is BOTH headers, not EITHER header, below 80 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q90</div>
BF19 (SG FW CONT V) valve failure position on loss of control air: <span class="hi-exam">BF19s fail CLOSED</span>. SG levels are expected to <span class="hi-exam">LOWER</span> until local control of BF19s can be established. If the crew manually trips the reactor because SG levels cannot be maintained, the crew performs <span class="hi-exam">2-EOP-TRIP-1 AND S2.OP-AB.CA-0001 concurrently</span> (CAS directs concurrent performance). <span class="hi-trap">Trap: some ABs (e.g., AB.COND-0001) direct performing EOP-TRIP-1 ONLY after a reactor trip. AB.CA-0001 specifically directs concurrent performance — do not assume all ABs have the same CAS.</span>
</div>

## Connections

- Related systems: [[AFW]], [[Service Water]], [[CCW]], [[RHR]], [[Containment]], [[CVCS]], [[Pressurizer & PRT]], [[Feed & Condensate]], [[Control Air]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related exam questions: [[2018 Q26]], [[2018 Q61]], [[2018 Q90]], [[2018 Q93]], [[2019 Q61]], [[2019 Q80]], [[2019 Q93]], [[2020 Q15]], [[2020 Q45]], [[2022 Q88]], [[2023 Q43]], [[2023 Q44]], [[2023 Q51]]
- Related JPMs: [[2020 JPM IP-j]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
