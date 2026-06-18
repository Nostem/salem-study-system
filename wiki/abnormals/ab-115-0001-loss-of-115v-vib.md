---
title: "AB.115-0001 — Loss of 115V Vital Instrument Bus"
category: abnormals
status: draft
aliases:
  - AB.115-0001
  - S2.OP-AB.115-0001
  - S2.OP-AB.115-0001 — Loss of 2A 115V Vital Instrument Bus
---

# AB.115-0001 — Loss of 115V Vital Instrument Bus

## Purpose

Provides operator actions for responding to a loss of a 115V Vital Instrument Bus, including identification of affected components and required valve repositioning.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q17</div>
Effect of each 115VAC vital bus loss on rod control (each bus deenergizes its channel PRNI bistable energized for High Rx Power, which is a rod block — so each loss prevents auto and manual rod WITHDRAWAL):
<ul>
<li><span class="hi-exam">2A:</span> loss of PT-505 (Turbine Steamline inlet pressure) drives rods IN in auto at maximum rate; rods are placed in manual and remain available.</li>
<li><span class="hi-exam">2B / 2C:</span> no auto rod movement; manual rod control remains available.</li>
<li><span class="hi-exam">2D:</span> unique loss that affects rod control speed and direction — rods remain "as is" with no ability to move them via the Rod Control System (power reduction must use boration).</li>
</ul>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q20</div>
Loss of 2A 115VAC VIB AFW impact: <span class="hi-exam">23AF21 and 24AF21 fail closed due to pressure override</span> as power is lost to the AFW pump discharge pressure transmitter (and power is also lost to the valve controllers). Per Step 13 of AB.115-0001, an <span class="hi-exam">NEO is dispatched to locally throttle 23AF21 and 24AF21</span>. <span class="hi-trap">Common traps: (a) believing the AF21s fail OPEN — they fail CLOSED on loss of pressure transmitter (runout protection acts the same as on a tripped pump); (b) believing PRESSURE OVERRIDE DEFEAT can recover control room operation — power is also lost to the valve controllers, so DEFEAT cannot help; (c) 21 AFW Pump only auto-starts on SEC actuation (which requires SI) — with no SI in the stem, manual start of 21 AFW is not required.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q12</div>
On loss of 2A VIB: LT-112 (VCT Level) loses indication and alarms, PI-139 (VCT Pressure) loses indication, and VCT makeup is unavailable. After restoring letdown with 2CV35 in MANUAL FLOW TO VCT: <span class="hi-exam">LT-114 is only available in the control room via the plant computer</span> (not the control console). VCT overpressure protection is provided by <span class="hi-exam">2CV241, VCT relief valve (75 psig setpoint), relieving to CVCS HUT</span>. With LT-112 controller in manual, LT-114 auto function is overridden and will NOT automatically divert 2CV35.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q31</div>
RHR valve failure modes on loss of VIB: <span class="hi-exam">21RH18 fails open (2A VIB)</span>, <span class="hi-exam">2RH20 fails open (2D VIB)</span>.
</div>

## Connections

- Related systems: [[RHR]], [[115V AC]], [[CVCS]], [[AFW]], [[Control Rod Drive]], [[Excore NIs]]
- Related exam questions: [[2016 Q20]], [[2020 Q12]], [[2022 Q31]], [[2014 Q17]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2014 NRC Written Exam]]
