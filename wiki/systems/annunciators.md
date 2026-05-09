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

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[OP-AA-102-103-1001 — Operator Burdens Program]]
- Related abnormals: [[AB.ANN-0001 — Loss of Overhead Annunciator System]]
- Related exam questions: [[2016 Q56]], [[2016 Q66]], [[2016 Q75]], [[2020 Q66]]
- Related exams: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]]
