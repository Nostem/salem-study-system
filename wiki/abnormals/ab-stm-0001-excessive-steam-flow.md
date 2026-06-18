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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q91</div>
With a single steam dump (23TB40) failing full open in Mode 3, the crew enters AB.STM-0001 (Rx trip breakers shut). <span class="hi-exam">Steam dump valves are arranged by condenser, not by steamline</span> — 23TB40 discharges into the 23 condenser, so "23 Main Steamline flow/pressure" responses are wrong. The AB.STM action for a malfunctioning Steam Dump Valve is to <span class="hi-exam">depress the Train A and Train B Off &amp; Reset Bypass Tavg pushbuttons on 2CC3 (turn off both Trains of Steam Dumps)</span>. <span class="hi-trap">A Main Steamline Isolation is initiated only if a reactor trip is required due to power rising uncontrollably.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q76</div>
A small steam leak can produce symptoms similar to an unwanted boration (Tavg below program and rising, outward rod motion). <span class="hi-trap">The discriminator: for a steam leak, control rods would NOT be placed in manual</span>, whereas an inadvertent boration (AB.ROD-0003) requires placing rods in MANUAL and terminating the boration.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q51</div>
The AB.STM Continuous Action Summary (Step 1.1): any time reactor power is rising uncontrollably, <span class="hi-exam">trip the reactor, confirm, and initiate MSLI</span>. If the steam-leak source is isolated, go to TRIP-1; if not, initiate SI and go to TRIP-1. A power reduction (Step 3.8) applies only if EHC is causing the turbine to be the source. See [[Main Steam]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q74</div>
After AB.STM-0001 directs a reactor trip (e.g., extraction steam line rupture with Rx trip and MSLI performed, steam leak isolated, no SI required), the AOP is exited and EOP-TRIP-1 is entered. Per OP-AA-101-111-1003 Step 4.4.1, after EOP performance, <span class="hi-exam">AB.STM-0001 entry conditions must be re-evaluated</span> — if still met, the <span class="hi-exam">AOP is re-entered from the beginning</span> (not from where it was left).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q43</div>
AB.STM-0001 CAS directs: (1) Trip the reactor, (2) Initiate Main Steam Line Isolation (MSLI). After MSLI, the CAS asks <span class="hi-exam">if the steam leak is isolated</span>. If the leak is NOT isolated (e.g., MS10 failed open — MSLI closes MSIVs but does not affect MS10 valves downstream), then <span class="hi-exam">initiate a manual Safety Injection</span>. <span class="hi-trap">An MS10 failed open is NOT isolated by MSLI — the MS10 is downstream of the MSIV, so the steam leak continues even after MSLI actuation.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
Entered when the <span class="hi-exam">21 MS10 atmospheric steam dump fails ~33% open in auto</span>. The PO <span class="hi-exam">places 21 MS10 in manual and shuts it</span> (or raises the steam pressure setpoint so the valve responds and shuts).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
A steam dump failure drives 21–23 TB20 steam dumps fully open with no ability to shut or turn them off. The crew enters AB.STM-0001 for the excessive steam flow; the <span class="hi-exam">CAS of AB.STM-0001 directs a reactor trip and a Main Steam Line Isolation (MSLI)</span>. The MSLI fails to shut a single MSIV (23 MSIV remains open), so the affected SG continues to blow down — leading to a (failed) auto SI on steamline Delta-P and a manual SI by the crew.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #4</div>
<span class="hi-exam">Steam leak outside containment</span> at the 23 West Moisture Separator Reheater, at power. Crew enters AB.STM-0001 and directs the AB.STM CAS — initially a CRS-directed turbine load reduction (PO lowers load, RO borates to hold Tavg on program) while confirming no MSIV (MS10) or Main Steam Dump malfunction. As the leak worsens, the crew <span class="hi-exam">trips the reactor and initiates MSLI to isolate the leak</span>; with the source isolated and SI not required, transition to [[EOP-TRIP-1 — Reactor Trip or Safety Injection]] → [[EOP-TRIP-2 — Reactor Trip Response]]. See [[2015 Scenario 4]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
<span class="hi-exam">21 SG steam leak inside containment</span> at low power. Entry cues: OHA <span class="hi-exam">C-38 CFCU LK DET HI</span> followed by <span class="hi-exam">C-30 CFCU LK DET HI-HI</span>; containment pressure rising; Tavg slowly lowering; rising steam flows on all loops; steam dump demand lowering. Crew enters AB.STM-0001, directs monitoring of AB.STM CAS, notifies Emergency Services. CAS directs <span class="hi-exam">Rx trip</span> and <span class="hi-exam">MSLI to isolate the leak</span> — when both auto and manual MSLI fail to shut any MSIV (steam leak NOT isolated), CAS directs <span class="hi-exam">manual Safety Injection</span>. Local operators are dispatched to place valves from Table D in safeguards position (locally close MSIVs).
</div>

## Connections

- Related systems: [[Main Steam]], [[Steam Dumps]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related exam questions: [[2016 Q74]], [[2020 Q43]], [[2015 Q51]], [[2014 Q76]], [[2012 Q91]]
- Related scenarios: [[2012 Scenario 1]], [[2016 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Operating Exam]]
