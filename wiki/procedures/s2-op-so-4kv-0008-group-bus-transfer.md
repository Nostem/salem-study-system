---
title: "S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer"
category: procedures
status: draft
aliases:
  - S2.OP-SO.4KV-0008
  - group bus transfer
---

# S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer

## Purpose

Provides instructions for transferring 4KV Group Buses between Station Power Transformers (SPT) and Auxiliary Power Transformers (APT). Used during power ascension and normal operations.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-e</div>
Transfer 4KV Group Buses SPT to APT (Sections 5.1-5.4): ENSURE all 2 APT OHAs clear and APT voltage <span class="hi-exam">4.22 - 4.36KV</span>; reset the Auxiliary Power Unit Isolation Transfer (UIT) if tripped; press the Mimic Bus GROUP BUS INFEED breaker pushbutton → verify MIMIC BUS INTLK CLOSE SELECTION bezel illuminates → press CLOSE → verify SPT breaker (21 ESD / 21 FSD) OPEN, APT breaker (2AEGD / 2BFGD) CLOSED, bus voltage 4.22 - 4.36KV, bezel extinguished. <span class="hi-exam">Alternate path: 2BFGD fails to close so the 2F Group Bus de-energizes, tripping its RCPs and generating a Rx trip demand (OHA F-10, RC LO FLO OR RCP BKR OPEN, P-7); on ATWT, manually trip the reactor</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-g</div>
Same JPM as 2020 Sim-h (Bank JPM): 4KV Group Bus transfer from SPT to APT at 18% power / 160 MWe. P&L 3.3 key knowledge: OHA J-39 illuminates then clears on normal transfer. <span class="hi-exam">Alternate path: 2G Group Bus fails to transfer</span> → 24 RCP trips → OHA J-39 → J-38 → <span class="hi-exam">TRIP Reactor → EOP-TRIP-1</span>. Procedure Rev. 13 corrected a typographical error in P&L 3.3 (noted in revision history — examiner provided corrected copy, not simulator copy).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-h</div>
Transfer 4KV Group Buses from SPT to APT: verify APT voltage <span class="hi-exam">4.22 - 4.36KV</span> on 2CC3. P&L 3.3: <span class="hi-exam">OHA J-39 (GROUP BUS XFER FAIL) will illuminate then clear on bus transfer</span> (expected response). J-39 ARP is applicable when the alarm does NOT clear following bus transfer. For each bus: press Mimic Bus GROUP BUS INFEED breaker pushbutton → verify MIMIC BUS INTLK CLOSE SELECTION illuminates → press CLOSE pushbutton → verify supply breaker OPEN, feed breaker CLOSED, bus voltage 4.22-4.36KV. If 2G bus fails to transfer: <span class="hi-exam">24 RCP trips (powered from 2G bus)</span>. OHA J-38 and D-31 ARPs both direct: IF ANY RCP Trips, THEN TRIP Reactor and GO TO EOP-TRIP-1.
</div>

## Connections

- Related systems: [[4KV]]
- Related JPMs: [[2018 JPM Sim-g]], [[2020 JPM Sim-h]], [[2015 JPM Sim-e]]
- Related exam: [[2018 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]]
