---
title: "S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent"
category: procedures
status: draft
aliases:
  - S2.OP-SO.WG-0008
  - waste gas release
  - gas decay tank release
---

# S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent

## Purpose

Provides instructions for releasing radioactive waste gas from 21 Waste Gas Decay Tank (WGDT) through the plant vent system, including the latch-and-set sequence, release initiation, and termination.

## Key Actions / Information

### Latch-and-Set Sequence (Step 5.2.11.D)
1. Turn 2WG41 Flow Bias fully CCW until indicator <0%
2. Position 2WG41 Selector Switch to OPEN, release to AUTO (spring return)
3. Turn Flow Bias CW until indicator >=100%
4. Verify with CR that 2WG41 has lost CLOSED indication and audible alarm received
5. Turn Flow Bias fully CCW until indicator <0%
6. Verify with CR that 2WG41 has CLOSED indication
7. Position 2WG41 Selector Switch to CLOSE

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 IP-k</div>
Aligning a Gas Decay Tank for HOLDUP (in preparation for sampling and release): perform the <span class="hi-exam">Attachment 1, Section 1.0 valve lineup</span> for the tank being placed in holdup and hang a <span class="hi-exam">Red Blocking Tag on 21WG31 (GDT INLET VALVE)</span> in the CLOSED position. The CRS Tagging Request specifies the tag is released only IAW this procedure, isolating the tank so it receives no additional waste gas while it is sampled and released.
</div>

### Release (Step 5.2.12)
- Position 2WG41 Selector Switch to OPEN, release to AUTO
- Slowly set Flow Bias to <=100% (max release rate 32 SCFM)

### Termination (Step 5.2.14 — at 10 psig)
- Turn Flow Bias fully CCW until <0%
- Place 2WG41-SWT in CLOSE, ensure 2WG41 CLOSED
- Close 21WG34

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q82</div>
<span class="hi-exam">Auxiliary Building pressure turning positive requires terminating the gas decay tank release</span> (P&amp;L 3.9 / TS 3.7.7 action e — restore negative Aux Building pressure or suspend all radioactive gaseous releases via the Aux Building immediately), because a positive Aux Building could result in an unmonitored release. <span class="hi-trap">Discriminators: the WG38 (Gas Decay Tank Vent Pressure Control Valve) keeps downstream pressure &lt;8.0 psig, which is what maintains the release rate &lt;32 scfm (so 7.5 psig is acceptable, NOT a termination condition); aligning another GDT to holdup isolates that tank from the release path; a tank-to-tank waste gas transfer would be an unapproved release but for a different reason.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-k</div>
Waste gas release sequence: the <span class="hi-exam">latch-and-set (step 5.2.11.D) must be performed before the actual release</span> — set Flow Bias to <0% before opening, then bring to 100% to verify full stroke, then back to <0% and close. For the release: max flow rate is <span class="hi-exam">32 SCFM</span> (Flow Bias <=100%). Terminate at <span class="hi-exam">10 psig</span> tank pressure by reducing Flow Bias to <0%, closing 2WG41-SWT, and closing 21WG34.
</div>

## Connections

- Related systems: [[Waste Gas]]
- Related tech specs: [[TS 3.7 — Plant Systems]]
- Related exam questions: [[2014 Q82]]
- Related JPMs: [[2023 JPM IP-k]], [[2015 JPM IP-k]]
- Related exam: [[2023 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]]
