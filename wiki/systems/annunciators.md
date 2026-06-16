---
title: Annunciators
category: systems
status: draft
aliases:
  - OHA
  - overhead annunciators
  - auxiliary annunciators
---

# Annunciators

## Function

Overhead and auxiliary annunciator systems provide alarm indication for plant parameter deviations requiring operator attention.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q66</div>
Annunciator window marking per OP-AA-102-103-1001 (Operator Burdens Program): <span class="hi-exam">single strand of red tape diagonally = one or more inputs inoperable</span> (reflash still works). <span class="hi-exam">Two pieces of red tape in an "X" = entire window inoperable</span>. <span class="hi-trap">Red tape is NOT used to identify maintenance testing in progress.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q66</div>
A <span class="hi-exam">single piece of red tape diagonally across an OHA window means at least one (but not all) inputs are disabled</span> — the alarm "may not be a reliable source of information." The window can <span class="hi-exam">still alarm from an operable input</span>. The <span class="hi-exam">reflash capability is NOT defeated</span> — if a second valid input comes in with one already in, reflash will cause the alarm to annunciate. <span class="hi-trap">Trap: single tape does NOT mean the alarm is fully inoperable (that requires an "X"), does NOT mean reflash is defeated, and does NOT mean full functionality is present (the tape signifies something IS wrong).</span>
</div>

## Power Supplies

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q56</div>
<span class="hi-exam">Annunciators are listed as a load supplied by the 28 VDC Control Power System</span>, but <span class="hi-exam">115 VAC power is supplied to alarm panel functions</span>. Therefore, loss of the 1A 28 VDC bus does NOT defeat alarm annunciation (e.g., OHA G-6, 11 SGFP TRBL still annunciates) — overhead annunciator panel functions remain energized via 115 VAC. <span class="hi-trap">Trap: Annunciators appear on the 28 VDC load list, but the alarm panel functions themselves are 115 VAC-powered. Loss of 28 VDC alone will not stop OHA windows from coming in.</span>
</div>

## Loss of All OHA Response

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q75</div>
Per S2.OP-AB.ANN-0001 (Loss of Overhead Annunciator System), if a complete and total loss of ALL OHAs occurs and cannot be restored within 15 minutes, the directed control room response is to <span class="hi-exam">initiate continuous control console walkdown</span> (and P-250, etc.). <span class="hi-trap">Trap: tripping the reactor or initiating a power reduction is NOT warranted unless overriding plant status would direct it, not just from the annunciator problem. The alternate alarm check (cycling RPS/SSPS cabinet door every 15 minutes) is for verifying status when SOME functionality is present — NOT for total loss of OHAs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q28</div>
<span class="hi-exam">OHA E-48 ROD BOTTOM</span> illuminates when all rod banks are on bottom and, during a reactor startup, clears once Control Bank A is withdrawn past 20 steps (Control Banks B/C/D bypassed below 35 steps). See [[Control Rod Drive]] and [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
The sequential SW header alarms <span class="hi-exam">B-13 (21 SW HDR), B-14 (22 SW HDR), B-15 (TURB AREA SW HDR), then B-48 (SW VLV RM FLOODED)</span> localize a SW leak — the B-48 flooding alarm points to a single CFCU supply line (78' Mech Pen Area), handled by AB.SW-0001. See [[Service Water]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q99</div>
On a loss of all overhead annunciators (AB.ANN-0001): the <span class="hi-exam">S5 EAL requires the loss to be ≥15 minutes</span> to declare. Even with a significant transient (Rx trip at T+5), declaration waits — AB.ANN actions (e.g., swapping to the backup SER) may restore functionality. <span class="hi-exam">When neither SER is in command at T+14, an Alert is declared</span>. See [[AB.ANN-0001 — Loss of Overhead Annunciator System]], [[EP-SA-111-101 — Emergency Classification and ICMF]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q2</div>
The OHA "F" windows (reactor-trip first-out) have <span class="hi-exam">dual red/white backlights</span>; the first signal to reach the RPS is locked in <span class="hi-exam">RED</span> and can only be reset with a keyswitch and SM permission. <span class="hi-trap">The RED box indicates the first TRIP signal — NOT the first AUTO TRIP signal.</span> When a manual and an auto trip may have raced, the <span class="hi-exam">Sequence of Events Recorder (2CC1) must be reviewed</span> to determine first-out and whether an ATWT occurred.
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[OP-AA-102-103-1001 — Operator Burdens Program]], [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[S2.OP-AR.ZZ-0004]], [[S1.OP-AR.ZZ-0007]]
- Related abnormals: [[AB.ANN-0001 — Loss of Overhead Annunciator System]], [[AB.ROD-0002 — Dropped Rod]], [[AB.CN-0001 — Condensate System Abnormality]]
- Related exam questions: [[2014 Q2]], [[2016 Q56]], [[2016 Q66]], [[2016 Q75]], [[2020 Q66]], [[2015 Q28]], [[2015 Q80]], [[2015 Q99]], [[2012 Q1]], [[2012 Q4]], [[2012 Q10]]
- Related exams: [[2014 NRC Written Exam]], [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
