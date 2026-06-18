---
title: "S2.OP-AR.ZZ-0012 — Console Alarm Response"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0012
  - Console Alarm Response
---

# S2.OP-AR.ZZ-0012 — Console Alarm Response

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides alarm response guidance for console alarms on Salem Unit 2, including the URGENT FAILURE alarm for the rod control system.

## Key Alarms

### URGENT FAILURE
- All rod motion is inhibited in BOTH Manual and Automatic
- Rods are held in position by the stationary gripper coil energized at reduced current
- Moveable gripper coil is de-energized

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q55</div>
Per S2.OP-AR.ZZ-0012, an <span class="hi-exam">Urgent Failure alarm prevents all rod motion in Manual or Automatic</span>. Rods are held in position by the stationary gripper coil energized at reduced current. Moveable gripper coil is de-energized.
</div>

### LOSS OF TRIPPING CAPABILITY (Bezel 4-17)
- Indicates loss of power to the shunt trip coil for the affected RTB
- Shunt coil is energized to trip — without power it cannot initiate a trip
- UV (undervoltage) coil is de-energized to trip — it remains functional
- 2CC2 RTB pushbuttons ONLY energize the shunt trip coil — they are non-functional when shunt coil power is lost

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q38</div>
"LOSS OF TRIPPING CAPABILITY" alarm on RTB "A": the <span class="hi-exam">shunt trip coil will NOT be capable of opening RTB "A"</span> because the alarm indicates loss of power to the shunt coil. <span class="hi-exam">UV trip coil remains functional</span> (it de-energizes to trip). <span class="hi-trap">2CC2 pushbuttons ONLY energize the shunt coil — with shunt coil power lost, they cannot trip the RTB.</span>
</div>

### PRT VENT VALVE (2PR15) INTERLOCK

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q34</div>
Page 51-52 — PRT vent valve interlock: <span class="hi-exam">2PR15 (PRT Vent Valve) is interlocked to receive a SHUT signal at <span class="val-alarm">10 psig</span> in PRT</span>. The PRT <span class="hi-exam">Rupture Diaphragm actuates at <span class="val-trip">100 psig</span></span> in the PRT (separate from the 2PR15 interlock setpoint). (Source: this procedure rev 39)
</div>

### PRIMARY WATER FLOW DEVIATION

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q31</div>
Primary Water Flow Deviation Alarm setpoint: <span class="hi-exam"><span class="val-alarm">&plusmn;5.0 gpm</span></span> above the setpoint. <span class="hi-trap">Boric Acid Flow Deviation alarm setpoint is &plusmn;0.8 gpm — common distractor.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q3</div>
Primary Water Flow Deviation Alarm setpoint: <span class="hi-exam"><span class="val-alarm">&plusmn;5.0 gpm</span></span> above the setpoint. <span class="hi-trap">Boric Acid Flow Deviation alarm setpoint is &plusmn;0.8 gpm — do not confuse the two deviation alarm setpoints.</span>
</div>

### VCT LEVEL HI-LO

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-b</div>
For the console <span class="hi-exam">VCT Level Hi-Lo</span> alarm: Automatic Action 2.1 (Hi) — if 2CV35 is in auto, a high level removes normal level control and <span class="hi-exam">shifts 2CV35 fully to the HUT</span>. Operator Actions 3.x: MONITOR VCT level on LI-112; if level is actually low, INITIATE makeup IAW S2.OP-SO.CVC-0006 and ensure 2CV35 lined up to VCT; if high, ensure 2CV35 directed to HUT; and <span class="hi-exam">IF a VCT level channel has failed, THEN INITIATE S2.OP-AB.CVC-0001, Loss of Charging</span>. See [[AB.CVC-0001 — Loss of Charging]].
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Rx Vessel & Internals]], [[CVCS]], [[Pressurizer]]
- Related exam questions: [[2016 Q34]], [[2018 Q31]], [[2019 Q3]], [[2023 Q55]], [[2020 Q38]]
- Related JPMs: [[2015 JPM Sim-b]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2020 NRC Written Exam]], [[2015 NRC Operating Exam]]
