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

### Secondary Heat Sink Verification PRIOR to SG Depressurization for Accumulator Injection (Step 13)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q18</div>
Before initiating the SG Depressurization to inject the ECCS accumulators, FRCC-1 (Step 13) verifies an adequate <span class="hi-exam">secondary heat sink</span>. The required criterion is <span class="hi-exam">SG NR level in at least one SG &gt; 9% OR total AFW flow &gt; <span class="val-normal">22E4 lbm/hr</span></span> (the two conditions are an <span class="hi-trap">OR</span>, not AND). With containment pressure at 2 psig (below the <span class="hi-exam">4 psig adverse-containment threshold</span>), the normal <span class="hi-exam">9%</span> NR level value applies — the <span class="hi-trap">15% adverse value is NOT used unless containment pressure is &ge; 4 psig</span>. If SG NR level is &gt; 9% in at least one SG, the step asking whether AFW flow &gt; 22E4 lbm/hr is bypassed; if SG NR level is &lt; 9%, then 22E4 lbm/hr AFW flow satisfies the heat-sink criterion.
</div>

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

### RCP Restart and PORV Operation (Step 25)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q21</div>
At <span class="hi-exam">Step 25</span>, RCPs are started if CETs are still <span class="hi-exam">> 1200°F</span> to clear water in the RCS intermediate leg and permit circulation of hot gases from the overheated core through the steam generators. If RCP restart is <span class="hi-exam">not effective</span> in decreasing CET temperature below 1200°F, at <span class="hi-exam">Step 25.3 BOTH PZR PORVs are opened</span> to help reduce RCS pressure and allow ECCS injection. <span class="hi-trap">Trap: not "shut both" or "open only one" — both PORVs are opened together.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q15</div>
The criteria to <span class="hi-exam">stop the last running RCP</span> in FRCC-1 (at <span class="hi-exam">Step 29</span>) is that at least <span class="hi-exam">two RCS Thots have lowered to &lt;350°F</span> — indicating the core is cool and RCP forced circulation is no longer required. Accumulators are isolated just before this at Step 28.1 (after intermittent RHR flow is verified). To exit FRCC-1 to LOCA-1 (Step 31), <span class="hi-exam">RVLIS must be &gt;57%</span> combined with at least 2 RCS Thots &lt;350°F and all RCPs already stopped. <span class="hi-trap">Trap: loss of SG NR level (&lt;9%) is the only thing that PREVENTS an RCP start (creep failure of hot SG tubes) but loss of SGNR level does NOT require stopping the RCPs; there is no RCP seal D/P stop criterion in FRCC-1.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q44</div>
<span class="hi-exam">5 or more CETs &gt; 1200°F is the Core Cooling RED path entry into FRCC-1</span> (Response to Inadequate Core Cooling) — this CET temperature indicates most liquid inventory has already been removed from the RCS and core decay heat is superheating steam in the core. See [[Incores]].
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCPs]], [[Containment]], [[RVLIS]], [[ECCS]], [[AFW]], [[Service Water]], [[CCW]], [[Pressurizer]], [[Incores]]
- Related concepts: [[Containment]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2015 Q18]], [[2016 Q21]], [[2019 Q72]], [[2020 Q24]], [[2022 Q24]], [[2023 Q84]], [[2012 Q15]], [[2012 Q44]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2012 NRC Written Exam]]
