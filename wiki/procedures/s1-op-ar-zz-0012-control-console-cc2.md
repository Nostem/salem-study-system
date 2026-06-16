---
title: "S1.OP-AR.ZZ-0012 — Control Console CC2"
category: procedures
status: draft
aliases:
  - S1.OP-AR.ZZ-0012
  - S1.OP-AR.ZZ-00012
  - Control Console CC2
---

# S1.OP-AR.ZZ-0012 — Control Console CC2

## Purpose

Unit 1 Control Console CC2 alarm response procedure, providing operator guidance for CC2 console annunciator alarms (the Unit 1 counterpart to the Unit 2 console alarm response procedure).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q36</div>
For a 1PR1 PORV that opens in automatic and cannot be shut, AB.PZR-0001 directs shutting the 1PR6 Block Valve. If the PORV is not isolated, the <span class="hi-exam">PRT rupture disk ruptures at <span class="val-trip">100 psig</span></span>. <span class="hi-exam"><span class="val-alarm">10 psig</span> is the PRT high-pressure ALARM setpoint</span> (not the rupture-disk setpoint). <span class="hi-trap">Trap: 10 psig is only the high-pressure alarm; rupture occurs at 100 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q31</div>
VCT Level Hi-Lo console alarm response: when rising VCT pressure (e.g., 35 psig) increases NPSH/discharge pressure with the Master Flow Controller in manual, <span class="hi-exam">charging flow rises</span> (letdown flow would LOWER due to increased VCT backpressure). The ARP for high VCT level directs <span class="hi-exam">ensure 1CV35 (VCT 3-WAY INLET valve) is directed to the CVCS HUT</span> — it should have tripped to full divert at 87% rising. <span class="hi-trap">Opening the VCT vent (1CV243) is NOT directed; the VCT high-pressure alarm occurs at 50 psig, at which point the vent would be open.</span>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[CVCS]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related exam questions: [[2014 Q36]], [[2012 Q31]]
- Related exam: [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
