---
title: "S2.OP-SO.WG-0009 — Discharge of 22 Gas Decay Tank to Plant Vent"
category: procedures
status: draft
aliases:
  - S2.OP-SO.WG-0009
  - discharge 22 GDT
---

# S2.OP-SO.WG-0009 — Discharge of 22 Gas Decay Tank to Plant Vent

## Purpose

Provides the procedure for releasing the contents of 22 Waste Gas Decay Tank to the plant vent in a controlled manner, including valve alignment, 2WG41 latch-and-set sequence, release monitoring, and termination.

## Key Actions / Information

- Step 5.2.11: Preparations at Panel 104-2 — verify 22 GDT not in service and not selected for Standby, record initial pressure (PIS2037), perform 2WG41 latch-and-set sequence
- Step 5.2.11.D: Latch-and-set 2WG41 (GDT Vent Control Valve) — set Flow Bias to <0%, position selector switch to OPEN and release to AUTO, set Flow Bias to >=100%, verify lost CLOSED indication, reduce Flow Bias to <0%, verify CLOSED indication, position selector switch to CLOSE
- Step 5.2.11.F/G: Open 22WG31 (GDT Inlet Valve) and slowly open 22WG34 (GDT Stop to Plant Vent)
- Step 5.2.12: Commence release — position 2WG41 selector to OPEN/AUTO, slowly set Flow Bias to <=100%
- Step 5.2.13: Monitor during release — calculate average release rate every 10 minutes, record MET data, check for termination conditions (pressure downstream of 2WG38 >8.0 psig or 2WG41 closure)
- Terminate when 22 GDT pressure reaches 10 psig: reduce Flow Bias to <0%, close 2WG41-SWT, close 22WG34

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 IP-k</div>
22 GDT release per S2.OP-SO.WG-0009: same latch-and-set sequence as S2.OP-SO.WG-0008 (21 GDT). Key differences: discharge valves are <span class="hi-exam">22WG31 and 22WG34</span>, pressure instrument is <span class="hi-exam">PIS2037</span> (vs PIS1036 for 21 GDT). Release terminates at <span class="hi-exam">10 psig</span> tank pressure. 2WG38 downstream pressure >8.0 psig also requires termination. Monitoring during release includes calculating average release rate every <span class="hi-exam">10 minutes</span> and recording MET data.
</div>

## Connections

- Related systems: [[Waste Gas]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]]
- Related JPMs: [[2019 JPM IP-k]]
- Related exam: [[2019 NRC Operating Exam]]
