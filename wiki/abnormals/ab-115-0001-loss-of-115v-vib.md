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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q31</div>
RHR valve failure modes on loss of VIB: <span class="hi-exam">21RH18 fails open (2A VIB)</span>, <span class="hi-exam">2RH20 fails open (2D VIB)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q12</div>
On loss of 2A VIB: LT-112 (VCT Level) loses indication and alarms, PI-139 (VCT Pressure) loses indication, and VCT makeup is unavailable. After restoring letdown with 2CV35 in MANUAL FLOW TO VCT: <span class="hi-exam">LT-114 is only available in the control room via the plant computer</span> (not the control console). VCT overpressure protection is provided by <span class="hi-exam">2CV241, VCT relief valve (75 psig setpoint), relieving to CVCS HUT</span>. With LT-112 controller in manual, LT-114 auto function is overridden and will NOT automatically divert 2CV35.
</div>

## Connections

- Related systems: [[RHR]], [[115V AC]], [[CVCS]]
- Related exam questions: [[2020 Q12]], [[2022 Q31]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
