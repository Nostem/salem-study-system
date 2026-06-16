---
title: "EOP-LOSC-1 — Loss of Secondary Coolant"
category: eops
status: draft
aliases:
  - EOP-LOSC-1
---

# EOP-LOSC-1 — Loss of Secondary Coolant

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q25</div>
For a MSLB with MSLI failed (all MS167s open) and all SGs depressurizing, the crew transitions <span class="hi-exam">out of LOSC-1 into [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]</span>. RCP strategy after that transition: with a cooldown in progress, the <span class="hi-exam">RCP pressure-dependent trip criteria are NOT used</span> (they are for pump protection only) and RCPs continue to run to maintain forced flow. See [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]] and [[RCPs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
Referenced as 2-LOSC-1 for design bases MSLB + LOOP event. Containment cooling design bases configuration requires <span class="hi-exam">3 CFCUs and 1 CS pump</span>. With 2C 4KV Vital Bus lost and 21 CFCU failed independently, design bases are NOT met (only 22 &amp; 24 CFCUs and 21 CS pump available).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q85</div>
Entry from LOSC-2 via the LOSC-2 CAS: <span class="hi-exam">upon an SG pressure rise (e.g., 22 SG pressure rising during a MSLB at the Mixing Bottle with all MSLI attempts failed) after Step 20 of LOSC-2, GO TO EOP-LOSC-1</span>. Basis (LOSC-1 Basis Document, page 7): <span class="hi-exam">"Any cooldown operations that are performed as subsequent recovery actions will require at least one nonfaulted SG."</span> The pressure rise indicates an available nonfaulted SG, so LOSC-1 becomes the procedure of record.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q16</div>
For a single main steam line rupture (e.g., upstream of 24MS167), after MSLI and feed isolation the cooldown of the RCS comes from steam blowing out the broken steamline. Because <span class="hi-exam">break flow is a function of faulted SG pressure</span>, as the faulted SG depressurizes the cooldown rate <span class="hi-exam">lowers continuously</span> over time — it does NOT remain constant until the SG blows dry. <span class="hi-trap">Initiating AFW to the ruptured SG to keep tubes wet is an EOP-LOSC-2 action that is only performed if ALL SGs are faulted; for a single faulted SG, AFW is left isolated.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q65</div>
LOSC-1 step sequence for reopening 21-24 SS94 (SG B/D Sample Valves) after a single faulted SG event: <span class="hi-exam">SI is NOT reset in TRIP-1 or LOSC-1</span>. The SGBD sample isolation reset is performed in <span class="hi-exam">LOSC-1 step 6.1</span> in order to open the SS94s. <span class="hi-exam">The step PRIOR to that is RESET PHASE A</span> — Phase A must be reset before SS94s can be opened. The blowdown isolation bypass <span class="hi-exam">only bypasses the lo-lo level input into the AFW auto-start circuit</span> (which closes the SS94s) and does NOT defeat Phase A. <span class="hi-trap">Trap: with SGBD sample isolation bypass already reset, the remaining gate on SS94 reopening is Phase A — if either Train A or Train B Phase A reset PB failed to reset, the SS94s remain closed.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
Entered from EOP-TRIP-1 on <span class="hi-exam">21 SG pressure dropping in uncontrolled manner</span> (feedwater line break inside containment). MSLI previously initiated. PO closes/verifies closed: <span class="hi-exam">21BF13, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4</span> to isolate faulted 21 SG <span class="hi-exam">(CT-17 Part 2)</span>. Trips and stops 23 AFW pump. Dispatches operator to close 21MS45. PO reports 21 SG is faulted, other SGs NOT depressurizing. RCS temperature rising — PO adjusts MS10s to stabilize. Transition to <span class="hi-exam">EOP-TRIP-3</span> when RCS subcooling &gt;0 F, PZR level &gt;11%, RCS pressure stable/rising.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
Entered from EOP-TRIP-1 with <span class="hi-exam">all SGs faulted</span> and MSLI failure: PO reports all SG pressures dropping in uncontrolled manner or completely depressurized. With ALL SGs faulted, AFW flow is NOT isolated to any SG. CRS subsequently transitions to <span class="hi-exam">EOP-LOSC-2</span> for multiple-SG depressurization. After local operators successfully shut <span class="hi-exam">23MS167</span>, pressure rise in 23 SG drives CRS to transition <span class="hi-exam">back to LOSC-1</span> (one SG no longer faulted). Scenario terminates on transition back to LOSC-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
Entered from EOP-TRIP-1 on a steam leak in containment with <span class="hi-exam">MSLI failure (all MSIVs remain open)</span> and all SG pressures dropping uncontrollably; CRS then transitions to <span class="hi-exam">EOP-LOSC-2</span> for the multiple-SG depressurization. A single MSIV is later shut in the field; the resulting pressure rise in the associated SG drives the LOSC-2 CAS to <span class="hi-exam">transition back to LOSC-1</span> (one SG no longer faulted, available for subsequent recovery actions). Scenario terminates on return to LOSC-1. See [[2014 Scenario 1]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q85</div>
LOSC-1 distractors for an uncontrolled all-SG depressurization (>100°F/hr cooldown): <span class="hi-trap">RCPs are tripped in LOSC-1 only when RCS pressure is &lt;1350 psi AND a cooldown is NOT in progress</span> — so tripping all RCPs (or tripping 23 AFW pump to isolate steam flow paths) is NOT the directed subsequent action here. The action that must be performed is resetting SGBD Sample Isolation in LOSC-2.
</div>

## Connections

- Related systems: [[CFCUs]], [[Containment Spray]], [[Main Steam]], [[Feed & Condensate]], [[AFW]], [[Steam Generator & Blowdown]], [[RCPs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-3 — SI Termination]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related exam questions: [[2015 Q25]], [[2016 Q4]], [[2016 Q16]], [[2016 Q65]], [[2016 Q85]], [[2020 Q9]], [[2014 Q85]], [[2012 Q25]]
- Related scenarios: [[2016 Scenario 3]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2014 Scenario 1]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
