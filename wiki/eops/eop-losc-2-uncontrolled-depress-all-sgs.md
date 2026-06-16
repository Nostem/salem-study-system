---
title: "EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators"
category: eops
status: draft
aliases:
  - EOP-LOSC-2
  - uncontrolled depressurization all SGs
---

# EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators

## Purpose

Provides operator actions for responding to an uncontrolled depressurization of all steam generators, including restoration of pressurizer heater power.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q25</div>
RCP strategy in a LOSC (uncontrolled SG depressurization, e.g., MSLB at the mixing bottle with MSLI failed, RCS pressure ~1345 psig and slowly dropping, T-Colds dropping): RCPs are <span class="hi-exam">continued to be run, because the RCP pressure-dependent trip criteria are NOT used when a cooldown is in progress</span>. Per the LOSC-2 Basis Document (p. 12), the RCP pressure trip criteria are <span class="hi-exam">for RCP pump protection only</span>; the SBLOCA generic-issue concern (pumping coolant out the break then stopping RCPs leading to peak clad temps in excess of 2200&deg;F) does not apply to a LOSC. <span class="hi-trap">In a LOSC, maintaining <span class="hi-exam">forced flow</span> is more important. Traps: tripping RCPs to minimize RCS heat input or to prevent later two-phase flow is incorrect; the pressure-dependent trip criteria are not "only applicable during a LBLOCA."</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q85</div>
LOSC-2 CAS: <span class="hi-exam">upon a pressure rise in any SG except when performing SI termination in Steps 8-20, GO TO EOP-LOSC-1</span>. After Step 20 (SI termination complete, PZR level being maintained stable), an SG pressure rise — e.g., 22 SG pressure rising during a MSLB at the Mixing Bottle with all MSLI attempts failed and 21-24MS167s open, AFW flow 1.0E4 lbm/hr to each SG — directs immediate transition to EOP-LOSC-1 because <span class="hi-exam">one SG is now available for subsequent recovery actions</span>. <span class="hi-trap">Trap: the LOSC-2 CAS does NOT defer the transition until the remaining SGs fully depressurize, and the basis is the availability of a nonfaulted SG (LOSC-1 Basis Document, page 7: "Any cooldown operations that are performed as subsequent recovery actions will require at least one nonfaulted SG"), not RCP-stop criteria.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q78</div>
<span class="hi-trap">There is no direct transition into EOP-LOSC-2.</span> For a SBLOCA with one faulted SG already isolated, the crew does NOT transition directly to LOSC-2 — the entry path requires going through [[EOP-LOSC-1 — Loss of Secondary Coolant]] first (TRIP-1 → LOSC-1 → LOSC-2). With only one faulted SG that is already isolated and the other SGs reacting to cool ECCS injection (not faulted), the crew continues in [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]] rather than entering the LOSC series at all.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q84</div>
Same scenario/logic as 2016 Q85: MSLB at the Mixing Bottle, all MSLI attempts failed (21-24MS167s open), SI termination steps complete in LOSC-2 with PZR level stable, AFW 1.0E4 lbm/hr to each SG, then 22 SG pressure rises. The <span class="hi-exam">LOSC-2 CAS directs GO TO EOP-LOSC-1 on a pressure rise in any SG except during SI termination Steps 8-20</span>; the stem is after Step 20, so the crew transitions to EOP-LOSC-1 because <span class="hi-exam">one SG is now available for subsequent recovery actions</span> (LOSC-1 Basis Document page 7: "Any cooldown operations that are performed as subsequent recovery actions will require at least one nonfaulted SG"). <span class="hi-trap">Trap: the transition is NOT deferred until the remaining SGs fully depressurize, and the discriminator is the procedure transition — not an RCP-stop criterion.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q7</div>
Step 26 — restore normal power to PZR heaters or transfer to emergency backup. PZR heater Group 1 is normally powered from 2G bus, with emergency backup from 2C 460V vital bus. Group 2 is normally powered from 2E bus, with emergency backup from 2A 460V vital bus. The transfer is manual.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
CT#1 (CT-12) requires crew to manually actuate MSLI <span class="hi-exam">before a Red path to subcriticality or integrity CFST, or transition to EOP-LOSC-2</span>. Failure to close MSIVs when the main turbine fails to trip causes uncontrolled depressurization of all SGs — the entry condition for LOSC-2. In this scenario, the crew prevents entry to LOSC-2 by using Fast Close pushbuttons on 2CC2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q66</div>
Step 1 — 13 AFW Pump steam isolation: with <span class="hi-exam">1A 4KV VITAL BUS de-energized (11 AFW Pump lost) AND 12 AFW Pump will NOT start</span>, the 13 AFW Pump (TDAFW) is the ONLY source of AFW flow → steam will <span class="hi-exam">NOT be isolated</span> to 13 AFW Pump. Step 5 — AFW flow control: with RCS cooldown rate <span class="hi-exam">&gt; 100 &deg;F/HR (120 &deg;F/HR)</span>, reduce AFW flow to <span class="hi-exam">no less than <span class="val-normal">1.0E04 LB/HR</span> to each SG</span>. <span class="hi-trap">Key trap: 11 AFW is powered from 1A 4KV — must recognize that 1A 4KV loss takes out 11 AFW. If cooldown rate were &lt; 100 &deg;F/HR, the criterion changes to maintaining SG NR levels &lt; 33%.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q66</div>
Step 1 — 13 AFW Pump (TDAFW) steam isolation: if the 13 AFW Pump is <span class="hi-exam">NOT the only source of AFW flow</span> (i.e., at least one MDAFW pump is available), steam will be <span class="hi-exam">isolated to the 13 AFW Pump</span>. With 1C 4KV Vital Bus lost, 11 MDAFW Pump is NOT available but 12 MDAFW Pump IS — so steam IS isolated to 13 AFP. Step 5 — AFW flow control with RCS cooldown rate <span class="hi-exam">&gt; 100 &deg;F/HR</span>: reduce AFW flow to <span class="hi-exam">no less than <span class="val-normal">1.0E04 LB/HR</span> to each SG</span>. <span class="hi-trap">If cooldown rate were &lt; 100 &deg;F/HR, the criterion would be to maintain SG NR levels &lt; 33% instead.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
A steam leak in containment with <span class="hi-exam">MSLI failure (all MSIVs remain open)</span> drives the crew from EOP-LOSC-1 to LOSC-2 (uncontrolled depressurization of all SGs). RCS cooldown rate &gt; 100°F/hr supports <span class="hi-exam">CT#3 (CT-33): reduce AFW flow to no less than 1.0E4 lbm/hr to each SG</span> to minimize the cooldown, performed during FRCE-1 prior to exit. A single MSIV is later shut in the field; the resulting pressure rise in the associated SG triggers the LOSC-2 CAS to <span class="hi-exam">transition back to EOP-LOSC-1</span>, where the scenario terminates. See [[2014 Scenario 1]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
Entered from EOP-LOSC-1 with <span class="hi-exam">all SGs faulted</span> and MSLI failure (21 SG steam leak inside containment, all four MSIVs failed to shut on auto/manual MSLI). RCS cooldown rate &gt;100°F/hr drives <span class="hi-exam">CT#2 (CT-33)</span>: PO reduces AFW flow to each SG to <span class="hi-exam">no less than 1.0E4 lbm/hr</span> to minimize the cooldown rate. STA RED path on Heat Sink → CRS transitions briefly to EOP-FRHS-1, verifies operator action was the cause and returns to LOSC-2. Local operators successfully shut <span class="hi-exam">23MS167</span>; pressure rise in 23 SG triggers the LOSC-2 CAS to <span class="hi-exam">transition to EOP-LOSC-1</span> (one SG no longer faulted; available for subsequent recovery actions).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q45</div>
Completing the safeguards reset actions in LOSC-2 resets the SEC. <span class="hi-trap">After SEC reset, Containment Spray pumps will NOT auto-start on a subsequent Hi-Hi containment pressure (&gt;15 psig) until the SEC is actuated again</span> — neither CS pump starts and the CS valves do not reposition. See [[Containment Spray]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q85</div>
In LOSC-2 (Multiple Steam Generator Depressurization), <span class="hi-exam">Reset SGBD Sample Isolation (step 10) to allow sampling of the SGs and transition to the SGTR sorter if required</span> — if a SGTR were identified here, the CRS would transition to SGTR-1 rather than stay in LOSC-2. Discriminators tested: <span class="hi-exam">LOSC-2 step 5 maintains AFW flow no less than 1.9E4 lbm/hr to each SG</span> (per the answer key wording); the CAS that allows isolating AFW to any SG with NR level >9% applies <span class="hi-trap">only when the cooldown rate is &lt;100°F/hr</span> (not the 105°F/hr in the stem). RCPs are tripped &lt;1350 psi ONLY when a cooldown is NOT in progress.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q25</div>
For a MSLB at the Main Turbine inlet with all MSLI attempts failed and an uncontrolled RCS cooldown, once out of TRIP-1 the only action taken in LOSC-1 before going to LOSC-2 is attempting to close the MSLI valve. In LOSC-2 the required action is to <span class="hi-exam">reduce AFW to minimize cooldown while still keeping the SG tubes wet — maintaining &gt;1E4 lbm/hr to each S/G</span> to keep tubes from drying out. <span class="hi-trap">Traps: do NOT trip RCPs (pressure is still dropping) and do NOT stop both RHR pumps (pressure still dropping) — those reasons are valid but the actions are not directed here; and the BF22's are not closed.</span>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[500KV]], [[Steam Generator & Blowdown]], [[AFW]], [[Main Steam]], [[RCPs]], [[RHR]]
- Related EOPs: [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2015 Q25]], [[2016 Q4]], [[2016 Q85]], [[2018 Q66]], [[2019 Q66]], [[2023 Q7]], [[2015 Q45]], [[2014 Q85]], [[2012 Q25]], [[2012 Q78]], [[2012 Q84]]
- Related scenarios: [[2016 Scenario 3]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2014 Scenario 1]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
