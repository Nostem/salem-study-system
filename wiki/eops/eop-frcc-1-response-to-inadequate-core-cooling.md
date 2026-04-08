---
title: "EOP-FRCC-1 — Response to Inadequate Core Cooling"
category: eops
status: draft
aliases:
  - EOP-FRCC-1
  - inadequate core cooling
---

# EOP-FRCC-1 — Response to Inadequate Core Cooling

## Purpose
Provides operator actions to restore core cooling when core exit thermocouples (CETs) indicate inadequate core cooling conditions. This is a Critical Safety Function Restoration Procedure (CSFRP) for Core Cooling — Red path.

## Entry Conditions
- Entered from EOP-CFST-1 when Core Cooling CSF status tree indicates RED path (CETs > 1200 degrees F)

## Key Actions

### SG Depressurization (Step 11)
- Depressurize intact SGs using steam dumps or MS10s at **maximum rate** while attempting to avoid a Main Steam Isolation
- Purpose: reduce RCS pressure to allow accumulator injection

### RCP Start for Temporary Core Cooling (Step 18)
- If CETs remain above 1200 degrees F, determine how many RCPs can be started
- SG NR level requirement depends on containment conditions:
  - Normal containment: >= 9% NR level
  - Adverse containment (>= 4 psig): >= 15% NR level
- Start RCPs only in loops with SGs meeting the NR level requirement

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q84</div>
In EOP-FRCC-1, SG depressurization is performed at <span class="hi-exam">maximum rate</span> (not 100 degrees F/hr). For RCP start at step 18 under <span class="hi-exam">adverse containment</span> (>= 4 psig), the required SG NR level is <span class="hi-exam">>= 15%</span>. <span class="hi-trap">Trap: if you use normal containment NR level criteria (9%) instead of adverse (15%), you would incorrectly calculate three RCPs available instead of one.</span>
</div>

## Connections

- Related systems: [[Steam Generators]], [[Reactor Coolant Pumps]], [[Containment Systems]]
- Related concepts: [[Adverse Containment]]
- Related exam questions: [[2023 Q84]]
- Related exam: [[2023 NRC Written Exam]]
