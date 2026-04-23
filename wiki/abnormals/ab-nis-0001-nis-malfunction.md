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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
When a PR NI channel (2N41) fails high, AB.NIS-0001 <span class="hi-exam">REQUIRES placing the Rod Bank Selector Switch in MAN</span> prior to placing the channel in tripped condition. <span class="hi-trap">Trap: the overpower rod stop block is enabled when a PR channel fails high (stops all automatic and manual rod withdrawal). Candidates may conclude placing rods in Manual is unnecessary — but AB.NIS-0001 explicitly requires it.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
When P-6 is LIT, IR NIS channels should indicate approximately <span class="hi-exam">1E-5% power</span> (the SR/IR overlap region). If an IR channel reads 1E-8% power when P-6 is LIT, that channel is inoperable. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel takes into account the redundant capability afforded by the operable IR channel and its <span class="hi-exam">low probability of failure during this period</span>. <span class="hi-trap">Trap: the bases cite low probability of failure of the operable channel, NOT low probability of reactivity events.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q22</div>
AB.NIS-0001 directs removal of a failed IR channel (e.g. N35 failed high) from service IAW <span class="hi-exam">S2.OP-SO.RPS-0001, Nuclear Instrumentation Channel Trip / Restoration</span>. For IR channels, SO.RPS-0001 places the <span class="hi-exam">LEVEL TRIP switch in bypass</span> (causing OHA E-29 to annunciate). <span class="hi-trap">Do not confuse with PR channel removal — PR channels use control power fuse removal and POWER MISMATCH BYPASS switch.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-f</div>
PR channel 2N41 fails high. AB.NIS-0001 actions completed (rod control to Manual). The JPM then tests removal of the failed PR channel from service per S2.OP-SO.RPS-0001. PR channel removal requires <span class="hi-exam">five switch manipulations at NI Rack No. 81</span>: Detector Current Comparator (upper and lower), Power Mismatch Bypass, Rod Stop Bypass, and Comparator Channel Defeat. OHAs that clear: <span class="hi-exam">E-31 (PR OVRPWR ROD STOP) and E-39 (PR CH DEV)</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #4</div>
2N41 Power Range channel fails high at 88% power (Event 2). Rods stepping in with no runback in progress — RO places rod control in Manual. OHAs: <span class="hi-exam">E-15 PR HI RNG FLUX HI, E-31 PR OVRPWR ROD STOP, E-39 PR CH DEV, E-47 PR NEUT FLUX RATE HI</span>. CRS directs removal from service IAW S2.OP-SO.RPS-0001 — five switch manipulations at <span class="hi-exam">NI Rack No. 81</span>: Detector Current Comparator (upper/lower) to PRN41, Power Mismatch Bypass to BYPASS PR N41, Rod Stop Bypass to BYPASS PR N41, Comparator Channel Defeat to N41. CRS enters TSAS <span class="hi-exam">3.3.1.1 Actions 2 and 6 (6 hour LCO)</span>. RO withdraws rods to ARO after channel removed.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related procedures: [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]]
- Related exam questions: [[2019 Q30]], [[2023 Q82]], [[2020 Q22]]
- Related JPMs: [[2020 JPM Sim-f]]
- Related scenarios: [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]]
