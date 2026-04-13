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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q55</div>
Per S2.OP-AR.ZZ-0012, an <span class="hi-exam">Urgent Failure alarm prevents all rod motion in Manual or Automatic</span>. Rods are held in position by the stationary gripper coil energized at reduced current. Moveable gripper coil is de-energized.
</div>

### LOSS OF TRIPPING CAPABILITY (Bezel 4-17)
- Indicates loss of power to the shunt trip coil for the affected RTB
- Shunt coil is energized to trip — without power it cannot initiate a trip
- UV (undervoltage) coil is de-energized to trip — it remains functional
- 2CC2 RTB pushbuttons ONLY energize the shunt trip coil — they are non-functional when shunt coil power is lost

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q38</div>
"LOSS OF TRIPPING CAPABILITY" alarm on RTB "A": the <span class="hi-exam">shunt trip coil will NOT be capable of opening RTB "A"</span> because the alarm indicates loss of power to the shunt coil. <span class="hi-exam">UV trip coil remains functional</span> (it de-energizes to trip). <span class="hi-trap">2CC2 pushbuttons ONLY energize the shunt coil — with shunt coil power lost, they cannot trip the RTB.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Rx Vessel & Internals]]
- Related exam questions: [[2023 Q55]], [[2020 Q38]]
- Related exam: [[2023 NRC Written Exam]], [[2020 NRC Written Exam]]
