---
title: "AB.NIS-0001 — Nuclear Instrumentation System Malfunction"
category: abnormals
status: draft
aliases:
  - AB.NIS-0001
  - NIS malfunction
---

# AB.NIS-0001 — Nuclear Instrumentation System Malfunction

## Purpose
Provides operator actions for responding to malfunctions of the Nuclear Instrumentation System (NIS), including source range (SR), intermediate range (IR), and power range (PR) channels.

## Entry Conditions
- NIS channel failure, erratic indication, or unexpected channel behavior
- Loss of one or more NIS channels

## Key Actions
- Identify the failed NIS channel and its impact on reactor protection
- Verify automatic compensatory actions (e.g., automatic SR block/unblock at P-6)
- Enter applicable TS action statements for inoperable channels
- Coordinate with I&C for troubleshooting and repair

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q76</div>
A PRNI failing low (e.g., 1N44) is a distractor for unwanted outward rod motion: it would cause only a <span class="hi-exam">short-duration rod withdrawal while the channel is failing</span>, and the <span class="hi-exam">Overpower Rod Block at 109% on 1/4 PRNI>109%</span> would prevent sustained rod withdrawal. AB.NIS-0001 (rods to manual, remove the failed channel) is the correct action for a genuine NI failure — but sustained outward rod motion with normal AFD points instead to an inadvertent RCS boration (AB.ROD-0003).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q89</div>
With one IRNI channel already removed (TSAS 3.3.1.1) and the <span class="hi-exam">second IRNI channel oscillating erratically at power</span>: enter AB.NIS-0001, remove the second channel — loss of the second IRNI channel enters TS 3.0.3, requiring actions within one hour to <span class="hi-exam">be in Hot Standby within the next 6 hours</span>. See [[Excore NIs]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q13</div>
1N35 IR channel fails high at 100% power. AB.NIS-0001 directs removal IAW S1.OP-SO.RPS-0001. When the PO places the <span class="hi-exam">1N35 LEVEL TRIP switch in BYPASS</span> in the rack area, <span class="hi-exam">OHA E-29 (SR &amp; IR TRIP BYP) annunciates</span> — this blocks the IR FLUX HI reactor trip and the IR HI FLUX ROD WDRWL STOP. <span class="hi-trap">Trap A (control power fuses) and trap D (POWER MISMATCH BYPASS) are PR-channel removal actions — IR channels do NOT use either. Trap B (instrument power fuses) is the next action AFTER the LEVEL TRIP bypass, not the cause of E-29.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
When a PR NI channel (2N41) fails high, AB.NIS-0001 <span class="hi-exam">REQUIRES placing the Rod Bank Selector Switch in MAN</span> prior to placing the channel in tripped condition. <span class="hi-trap">Trap: the overpower rod stop block is enabled when a PR channel fails high (stops all automatic and manual rod withdrawal). Candidates may conclude placing rods in Manual is unnecessary — but AB.NIS-0001 explicitly requires it.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q22</div>
AB.NIS-0001 directs removal of a failed IR channel (e.g. N35 failed high) from service IAW <span class="hi-exam">S2.OP-SO.RPS-0001, Nuclear Instrumentation Channel Trip / Restoration</span>. For IR channels, SO.RPS-0001 places the <span class="hi-exam">LEVEL TRIP switch in bypass</span> (causing OHA E-29 to annunciate). <span class="hi-trap">Do not confuse with PR channel removal — PR channels use control power fuse removal and POWER MISMATCH BYPASS switch.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
When P-6 is LIT, IR NIS channels should indicate approximately <span class="hi-exam">1E-5% power</span> (the SR/IR overlap region). If an IR channel reads 1E-8% power when P-6 is LIT, that channel is inoperable. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel takes into account the redundant capability afforded by the operable IR channel and its <span class="hi-exam">low probability of failure during this period</span>. <span class="hi-trap">Trap: the bases cite low probability of failure of the operable channel, NOT low probability of reactivity events.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-f</div>
PR channel 2N41 fails high. AB.NIS-0001 actions completed (rod control to Manual). The JPM then tests removal of the failed PR channel from service per S2.OP-SO.RPS-0001. PR channel removal requires <span class="hi-exam">five switch manipulations at NI Rack No. 81</span>: Detector Current Comparator (upper and lower), Power Mismatch Bypass, Rod Stop Bypass, and Comparator Channel Defeat. OHAs that clear: <span class="hi-exam">E-31 (PR OVRPWR ROD STOP) and E-39 (PR CH DEV)</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
Power Range NI Channel IV (2N44) fails high during a power ascension (Event 2). Control rods step in at 72 spm with no load reject in progress — RO places rod control in Manual (crew may enter AB.ROD-0003 first, then transitions here). CRS removes 2N44 from service IAW S2.OP-SO.RPS-0001: Detector Current Comparator UPPER and LOWER sections to PRN44 (CHANNEL DEFEAT lamps lit, <span class="hi-exam">OHA E-38 UPPER SECT DEV ABV 50% PWR and E-46 LOWER SECT DEV ABV 50% PWR clear</span>), POWER MISMATCH BYPASS to BYPASS PR N44, ROD STOP BYPASS to BYPASS PR N44 (<span class="hi-exam">OHA E-31 PR OVERPWR ROD STOP clears</span>), COMPARATOR CHANNEL DEFEAT to N44 (<span class="hi-exam">OHA E-39 PR CH DEV clears</span>); remainder requires I&amp;C support. <span class="hi-trap">Outward rod movement is unavailable until the Overpower Rod Stop is defeated — xenon burning out aids temperature control.</span> CRS enters TSAS <span class="hi-exam">3.3.1.1 Actions 2 and 6</span>, performs QPTR, requests flux map. See [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.ROD-0003 — Continuous Rod Motion]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #4</div>
2N41 Power Range channel fails high at 88% power (Event 2). Rods stepping in with no runback in progress — RO places rod control in Manual. OHAs: <span class="hi-exam">E-15 PR HI RNG FLUX HI, E-31 PR OVRPWR ROD STOP, E-39 PR CH DEV, E-47 PR NEUT FLUX RATE HI</span>. CRS directs removal from service IAW S2.OP-SO.RPS-0001 — five switch manipulations at <span class="hi-exam">NI Rack No. 81</span>: Detector Current Comparator (upper/lower) to PRN41, Power Mismatch Bypass to BYPASS PR N41, Rod Stop Bypass to BYPASS PR N41, Comparator Channel Defeat to N41. CRS enters TSAS <span class="hi-exam">3.3.1.1 Actions 2 and 6 (6 hour LCO)</span>. RO withdraws rods to ARO after channel removed.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]]
- Related tech specs: [[TS 3.3 — Instrumentation]]
- Related procedures: [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.ROD-0003 — Continuous Rod Motion]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam questions: [[2016 Q13]], [[2019 Q30]], [[2023 Q82]], [[2020 Q22]], [[2015 Q89]], [[2014 Q76]]
- Related JPMs: [[2020 JPM Sim-f]]
- Related scenarios: [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2015 Scenario 1]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]]
