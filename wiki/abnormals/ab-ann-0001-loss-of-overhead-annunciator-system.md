---
title: "AB.ANN-0001 — Loss of Overhead Annunciator System"
category: abnormals
status: draft
aliases:
  - AB.ANN-0001
  - S2.OP-AB.ANN-0001
  - Loss of Overhead Annunciator System
---

# AB.ANN-0001 — Loss of Overhead Annunciator System

> DRAFT — Reconstructed from exam materials

## Purpose

Provides operator response actions for partial or complete loss of the Overhead Annunciator (OHA) system, including alarm functionality verification and compensatory monitoring requirements.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q75</div>
With a complete and total loss of ALL Overhead Annunciators that cannot be restored within 15 minutes, the directed control room response is to <span class="hi-exam">initiate continuous control console walkdown</span> (and P-250, etc.). <span class="hi-trap">Tripping the reactor or initiating a power reduction is NOT warranted unless overriding plant status would direct it, not just from the annunciator problem.</span> <span class="hi-trap">The alternate alarm check (cycling a RPS or SSPS cabinet door every 15 minutes) is used to verify status when SOME functionality is present — it is NOT performed for a TOTAL loss of OHAs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q99</div>
The S5 (loss of annunciators) EAL is met when the loss is <span class="hi-exam">≥15 minutes</span>. AB.ANN-0001 first attempts to restore OHA functionality (swapping to the backup SER); <span class="hi-exam">when neither SER is confirmed in command (T+14), an Alert is declared</span> (a significant transient such as an Rx trip during the loss raises the classification from Unusual Event to Alert). See [[Annunciators]], [[EP-SA-111-101 — Emergency Classification and ICMF]].
</div>

## Connections

- Related systems: [[Annunciators]]
- Related exam questions: [[2016 Q75]], [[2015 Q99]]
- Related exam: [[2016 NRC Written Exam]], [[2015 NRC Written Exam]]
