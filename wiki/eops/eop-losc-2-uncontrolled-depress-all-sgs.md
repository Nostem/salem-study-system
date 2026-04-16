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
<div class="callout-label">Exam — 2023 Q7</div>
Step 26 — restore normal power to PZR heaters or transfer to emergency backup. PZR heater Group 1 is normally powered from 2G bus, with emergency backup from 2C 460V vital bus. Group 2 is normally powered from 2E bus, with emergency backup from 2A 460V vital bus. The transfer is manual.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
CT#1 (CT-12) requires crew to manually actuate MSLI <span class="hi-exam">before a Red path to subcriticality or integrity CFST, or transition to EOP-LOSC-2</span>. Failure to close MSIVs when the main turbine fails to trip causes uncontrolled depressurization of all SGs — the entry condition for LOSC-2. In this scenario, the crew prevents entry to LOSC-2 by using Fast Close pushbuttons on 2CC2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q66</div>
Step 1 — 13 AFW Pump (TDAFW) steam isolation: if the 13 AFW Pump is <span class="hi-exam">NOT the only source of AFW flow</span> (i.e., at least one MDAFW pump is available), steam will be <span class="hi-exam">isolated to the 13 AFW Pump</span>. With 1C 4KV Vital Bus lost, 11 MDAFW Pump is NOT available but 12 MDAFW Pump IS — so steam IS isolated to 13 AFP. Step 5 — AFW flow control with RCS cooldown rate <span class="hi-exam">&gt; 100 &deg;F/HR</span>: reduce AFW flow to <span class="hi-exam">no less than <span class="val-normal">1.0E04 LB/HR</span> to each SG</span>. <span class="hi-trap">If cooldown rate were &lt; 100 &deg;F/HR, the criterion would be to maintain SG NR levels &lt; 33% instead.</span>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[500KV]]
- Related exam questions: [[2019 Q66]], [[2023 Q7]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
