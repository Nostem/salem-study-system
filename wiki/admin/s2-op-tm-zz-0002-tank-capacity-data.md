---
title: "S2.OP-TM.ZZ-0002 — Tank Capacity Data"
category: procedures
status: draft
aliases:
  - S2.OP-TM.ZZ-0002
  - tank capacity data
  - Tanks Curve RWST
---

# S2.OP-TM.ZZ-0002 — Tank Capacity Data

## Purpose

Technical manual providing tank level-to-volume conversion curves for Salem Unit 2 tanks, including Boric Acid Storage Tanks (BASTs). Used for calculating boration volumes and tank level changes during EOP implementation.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A2</div>
BAST tank level curve (page 6 of 34) converts between percent level and gallons. Key reference points used for rapid boration calculations: <span class="hi-exam">94% = 7400 gal, 76% = 6000 gal, 67% = 5300 gal, 49% = 3900 gal</span>. Readability error of +/- 1% per conversion (percent-to-gallons or gallons-to-percent) results in +/- 2% total acceptance band for final BAST level determinations.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A2</div>
BAST tank level curve (page 6 of 34): <span class="hi-exam">70% = 5500 gal, 43% = 3400 gal</span>. After rapid boration of 2100 gal per tank (4200 total / 2 BASTs): start 70% (5500 gal) minus 2100 gal = 3400 gal = 43% (+/-2%). The +/-2% acceptance band accounts for readability error of +/-1% on each percent-to-gallons and gallons-to-percent conversion.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q26</div>
RWST tanks curve — used with EOP-LOCA-5 Step 9 / Table C to convert elapsed time after the RWST Lo Level alarm into RWST level. Example: LBLOCA on Unit 2 with 2C 4KV vital bus deenergized — RWST drains at <span class="hi-exam">~13000 gpm</span> (2 RHR, 1 charging, 1 SI, 1 CS pump running). From <span class="hi-exam">RWST level 15.2 ft</span> at the Lo alarm, it takes <span class="hi-exam">over 9 minutes</span> to deplete to <span class="hi-exam">below 1 ft</span>. At 7 minutes after the Lo alarm, RWST level remains between 1 and 15.2 ft → Table C with <span class="hi-exam">18 psig containment, only 21/23/25 CFCUs running (3 CFCUs), and RWST 1–15.2 ft</span> indicates ONE CS pump required.
</div>

## Connections

- Related systems: [[CVCS]], [[Containment Spray]], [[ECCS]], [[CFCUs]]
- Related EOPs: [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related JPMs: [[2022 JPM RO-A2]], [[2022 JPM SRO-A2]]
- Related exam questions: [[2016 Q26]]
- Related exam: [[2016 NRC Written Exam]], [[2022 NRC Operating Exam]]
