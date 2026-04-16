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
<div class="callout-label">Exam — 2022 Q24</div>
Step 18, RCP START FOR TEMPORARY CORE COOLING: if CETs > <span class="hi-exam">1200°F</span> and at least one SG NR level > <span class="hi-exam">9%</span> (<span class="hi-exam">15%</span> adverse containment), start one RCP at a time for idle loops with SG NR > 9%. Loop around step 18 until CETs < 1200°F. <span class="hi-trap">If NO SG has NR > 9%: reset Phase A, open both CA330s, open both PZR PORVs and Rx Head Vents to reduce RCS pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q84</div>
In EOP-FRCC-1, SG depressurization is performed at <span class="hi-exam">maximum rate</span> (not 100 degrees F/hr). For RCP start at step 18 under <span class="hi-exam">adverse containment</span> (>= 4 psig), the required SG NR level is <span class="hi-exam">>= 15%</span>. <span class="hi-trap">Trap: if you use normal containment NR level criteria (9%) instead of adverse (15%), you would incorrectly calculate three RCPs available instead of one.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q24</div>
Core Cooling Red Path validation (no RCPs running, subcooling < 0°F): <span class="hi-exam">five (5) hottest CETs > 700°F AND RVLIS Full Range ≤ 39%</span>. <span class="hi-trap">RVLIS Upper Range is NOT applicable for core cooling status. Purple Path uses RVLIS Dynamic Range ≤ 44% (requires RCPs running). For CET-based inadequate core cooling (Red Path entry into FRCC-1), five CETs must be > 1200°F, not three.</span>
</div>

### Safeguards Valve Alignment (Step 3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q72</div>
FRCC-1 Step 3 Safeguards Valve Alignment with SECs in Mode 1: the crew <span class="hi-exam">WILL attempt to open BOTH BIT inlet valves (1SJ4 AND 1SJ5)</span> even if one is already open. FRCC-1 requires both valves open, not just one. <span class="hi-exam">11SW122 (SW to 11 CC HX) is NOT required to be closed in SEC Mode 1</span> — 11SW122 closure is required when SECs are in <span class="hi-trap">MODE 3 (SI + Blackout), not Mode 1 (SI only)</span>.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCPs]], [[Containment]], [[RVLIS]], [[ECCS]], [[Service Water]], [[CCW]]
- Related concepts: [[Containment]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam questions: [[2019 Q72]], [[2020 Q24]], [[2022 Q24]], [[2023 Q84]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
