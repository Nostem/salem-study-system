---
title: "S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0002
  - Alarm B-2
---

# S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B

## Purpose

Provides alarm response procedures for Unit 2 Overhead Annunciator Window B alarms, including DC bus voltage, service water header pressures, and other B-panel alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q13</div>
OHA B-2, "2A 125 VDC CNTRL BUS VOLT LO": On loss of <span class="hi-exam">2A Vital 125 VDC Bus</span> (0 VDC on 2RP9), the only affected equipment from the listed malfunctions is <span class="hi-exam">2A EDG is NOT available for start</span>. #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are powered from other DC bus segments (250 VDC or 28 VDC), not the 2A 125 VDC bus.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q61</div>
OHA B-13 (21 SW HDR PRESS LO) and B-14 (22 SW HDR PRESS LO) — per S2.OP-AR.ZZ-0002 pages 28-29: <span class="hi-exam">alarm setpoint <span class="val-alarm">99.5 psig</span></span>; the <span class="hi-exam">standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span></span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
<span class="hi-exam">OHA B-13 / B-14 (low SW header pressures)</span> are the diagnostic alarms for a Loss of All SW. The ARP for B-13/B-14: (3.1) Verify header low pressure using OHAs 2PA5373 on 2CC1; (3.2) IF low pressure exists due to known system configuration, THEN go to S2.OP-SO.SW-0001 to adjust system pressure; (3.3) <span class="hi-exam">IF a valid low pressure condition exists, THEN go to S2.OP-AB.SW-0001, Loss of Service Water Header Pressure</span>. From AB.SW-0001 Step 3.8, with no SW header outage, the procedure routes to AB.SW-0005 for the loss-of-all-SW critical actions.
</div>

## Connections

- Related systems: [[DC Power]], [[EDGs]], [[Service Water]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]]
- Related exam questions: [[2016 Q61]], [[2020 Q13]]
- Related JPMs: [[2016 JPM Sim-e]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2016 NRC Operating Exam]]
