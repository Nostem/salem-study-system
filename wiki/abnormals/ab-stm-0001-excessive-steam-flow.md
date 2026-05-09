---
title: "AB.STM-0001 — Excessive Steam Flow"
category: abnormals
status: draft
aliases:
  - AB.STM-0001
---

# AB.STM-0001 — Excessive Steam Flow

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for responding to excessive/uncontrolled steam flow events, including failed-open atmospheric relief valves (MS10s), steam leaks, and other steam system malfunctions.

## Key Actions / Information

### Continuous Action Statement (CAS)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q43</div>
AB.STM-0001 CAS directs: (1) Trip the reactor, (2) Initiate Main Steam Line Isolation (MSLI). After MSLI, the CAS asks <span class="hi-exam">if the steam leak is isolated</span>. If the leak is NOT isolated (e.g., MS10 failed open — MSLI closes MSIVs but does not affect MS10 valves downstream), then <span class="hi-exam">initiate a manual Safety Injection</span>. <span class="hi-trap">An MS10 failed open is NOT isolated by MSLI — the MS10 is downstream of the MSIV, so the steam leak continues even after MSLI actuation.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q74</div>
After AB.STM-0001 directs a reactor trip (e.g., extraction steam line rupture with Rx trip and MSLI performed, steam leak isolated, no SI required), the AOP is exited and EOP-TRIP-1 is entered. Per OP-AA-101-111-1003 Step 4.4.1, after EOP performance, <span class="hi-exam">AB.STM-0001 entry conditions must be re-evaluated</span> — if still met, the <span class="hi-exam">AOP is re-entered from the beginning</span> (not from where it was left).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
<span class="hi-exam">21 SG steam leak inside containment</span> at low power. Entry cues: OHA <span class="hi-exam">C-38 CFCU LK DET HI</span> followed by <span class="hi-exam">C-30 CFCU LK DET HI-HI</span>; containment pressure rising; Tavg slowly lowering; rising steam flows on all loops; steam dump demand lowering. Crew enters AB.STM-0001, directs monitoring of AB.STM CAS, notifies Emergency Services. CAS directs <span class="hi-exam">Rx trip</span> and <span class="hi-exam">MSLI to isolate the leak</span> — when both auto and manual MSLI fail to shut any MSIV (steam leak NOT isolated), CAS directs <span class="hi-exam">manual Safety Injection</span>. Local operators are dispatched to place valves from Table D in safeguards position (locally close MSIVs).
</div>

## Connections

- Related systems: [[Main Steam]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related exam questions: [[2016 Q74]], [[2020 Q43]]
- Related scenarios: [[2016 Scenario 3]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Operating Exam]]
