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
<div class="callout-label">Exam — 2016 Q85</div>
LOSC-2 CAS: <span class="hi-exam">upon a pressure rise in any SG except when performing SI termination in Steps 8-20, GO TO EOP-LOSC-1</span>. After Step 20 (SI termination complete, PZR level being maintained stable), an SG pressure rise — e.g., 22 SG pressure rising during a MSLB at the Mixing Bottle with all MSLI attempts failed and 21-24MS167s open, AFW flow 1.0E4 lbm/hr to each SG — directs immediate transition to EOP-LOSC-1 because <span class="hi-exam">one SG is now available for subsequent recovery actions</span>. <span class="hi-trap">Trap: the LOSC-2 CAS does NOT defer the transition until the remaining SGs fully depressurize, and the basis is the availability of a nonfaulted SG (LOSC-1 Basis Document, page 7: "Any cooldown operations that are performed as subsequent recovery actions will require at least one nonfaulted SG"), not RCP-stop criteria.</span>
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
<div class="callout-label">Scenario — 2016 #3</div>
Entered from EOP-LOSC-1 with <span class="hi-exam">all SGs faulted</span> and MSLI failure (21 SG steam leak inside containment, all four MSIVs failed to shut on auto/manual MSLI). RCS cooldown rate &gt;100°F/hr drives <span class="hi-exam">CT#2 (CT-33)</span>: PO reduces AFW flow to each SG to <span class="hi-exam">no less than 1.0E4 lbm/hr</span> to minimize the cooldown rate. STA RED path on Heat Sink → CRS transitions briefly to EOP-FRHS-1, verifies operator action was the cause and returns to LOSC-2. Local operators successfully shut <span class="hi-exam">23MS167</span>; pressure rise in 23 SG triggers the LOSC-2 CAS to <span class="hi-exam">transition to EOP-LOSC-1</span> (one SG no longer faulted; available for subsequent recovery actions).
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[500KV]]
- Related EOPs: [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam questions: [[2016 Q4]], [[2016 Q85]], [[2018 Q66]], [[2019 Q66]], [[2023 Q7]]
- Related scenarios: [[2016 Scenario 3]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
