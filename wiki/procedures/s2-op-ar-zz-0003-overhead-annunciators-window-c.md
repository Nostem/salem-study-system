---
title: "S2.OP-AR.ZZ-0003 — Overhead Annunciators Window C"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0003
  - Alarm C-window
---

# S2.OP-AR.ZZ-0003 — Overhead Annunciators Window C

## Purpose

Provides alarm response procedures for Unit 2 Overhead Annunciator Window C alarms, including CFCU airflow trouble and containment sump alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q35</div>
<span class="hi-exam">OHA C-12, "22 CFCU AIRFLO TRBL"</span> is EXPECTED whenever the CFCU is in slow speed, which it would be for SI initiation (the CFCUs shift to slow speed on a Safety Injection). <span class="hi-exam">OHA C-10, "CNTMT SUMP OVERFLO"</span> is EXPECTED during a LOCA, as the containment sump fills after the Phase A isolation and the leak fills up the sump. Both are normal, expected alarms during the EOP-network response to a LOCA.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q90</div>
<span class="hi-exam">OHA C-27, "SFP Lvl Hi," annunciates when Spent Fuel Pool level is 6" above normal</span> (Reference Section 32). With one SFP cooling pump failed and the pool heating up ~14 degrees, thermal expansion raises level past the 6" point, so this High Level OHA is the expected plant response.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q46</div>
OHA <span class="hi-exam">C-29, "24 CFCU WTRFLO TRBL,"</span> is NOT expected ~25 minutes after a LOCA with the CFCU running — it indicates a CFCU SW valve alignment problem with the unit running. Plausible because the CFCU <span class="hi-exam">Airflow Trouble alarm WILL be in alarm</span> (incorrect damper alignment for HIGH speed while the CFCU runs in LO speed following an accident). See [[CFCUs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q89</div>
<span class="hi-exam">OHA C-16, "PHASE B CNTMT ISOL ACT,"</span> requires 2/4 containment pressure channels to see 15 psig and is not expected during a single-channel sensor calibration (Channel IV). On a Phase B actuation the <span class="hi-exam">Phase B isolation valves shut AND the Containment Spray valves reposition (open)</span> — not the isolation valves shutting only. Per this ARP, with containment pressure &lt;15 psig, attempt to reset and open the Phase B isolation valves; if unsuccessful, GO TO S2.OP-AB.RCP-0001 based on the loss of CCW to the RCPs.
</div>

## Connections

- Related systems: [[CFCUs]], [[ECCS]], [[Containment Spray]], [[Reactor Coolant Pumps]]
- Related procedures: [[AB.RCP-0001 — RCP Abnormality]]
- Related exam questions: [[2014 Q35]], [[2014 Q90]], [[2012 Q46]], [[2012 Q89]]
- Related exam: [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
