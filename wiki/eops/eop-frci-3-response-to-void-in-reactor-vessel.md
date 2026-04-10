---
title: "EOP-FRCI-3 — Response to Void in Reactor Vessel"
category: eops
status: draft
aliases:
  - EOP-FRCI-3
  - response to void in reactor vessel
---

# EOP-FRCI-3 — Response to Void in Reactor Vessel

## Purpose

Provides guidance for responding to a void (steam bubble) in the reactor vessel upper head, entered when CFST indicates a YELLOW path on Coolant Inventory. Directs actions to vent hydrogen from the RCS while maintaining containment hydrogen concentration below the flammability limit.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A1</div>
Attachment 1 determines maximum venting time to prevent exceeding <span class="hi-exam">3.0% containment hydrogen concentration limit</span>. Calculation steps: (1) convert containment temperature to absolute (add 460), (2) calculate Tfact = 492/Tabs, (3) calculate air volume at STP = 2.62E06 x Tfact, (4) calculate max vent volume M = (3.0% - H) x V / 100%, (5) read hydrogen flow rate from Figure 1 at RCS pressure, (6) Tv = M/F. Given 140F containment, 2.3% H2, 1600 psig RCS: max vent time = <span class="hi-exam">4.5 minutes</span> (4.2-4.7 acceptable band).
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related JPMs: [[2022 JPM RO-A1]]
- Related exam: [[2022 NRC Operating Exam]]
