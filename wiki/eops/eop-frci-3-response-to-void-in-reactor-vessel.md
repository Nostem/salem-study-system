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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 RO-A1</div>
Same Attachment 1 calculation as 2022 but with different revision formula and input values. Rev 30 uses <span class="hi-exam">V = 1.28E09 / Tabs</span> (versus Rev 40 which uses V = 2.62E06 x Tfact). Given 140 F containment, <span class="hi-exam">1.8% H2</span>, <span class="hi-exam">1200 psig</span> RCS: Tabs = 600 R, V = 2.13E06 ft3, M = 25560 ft3, flow rate from Figure 1 = <span class="hi-exam">2500 cfm</span>, max vent time = <span class="hi-exam">10.2 minutes</span> (9.2 - 11.2 acceptable band). The wider acceptable band reflects rounding variations across intermediate steps.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q76</div>
Step 2 — transition check: if <span class="hi-exam">BOTH SI Pumps are running</span> (Safety Injection has occurred), then the crew will <span class="hi-exam">immediately return to procedure in effect</span> (e.g., EOP-LOCA-1). During a PZR Vapor Space LOCA, PZR level is <span class="hi-exam">NOT a valid indication of RCS inventory</span>. <span class="hi-trap">Trap: during all other LOCAs, PZR level IS a valid indication of RCS inventory. The PZR Vapor Space LOCA is unique because the break IS in the pressurizer — level indication is unreliable. Also: Step 3 (establish normal charging) is NOT reached when both SI pumps are running because Step 2 directs return to procedure in effect first.</span>
</div>

## Connections

- Related systems: [[RCS]], [[Containment]], [[Pressurizer & PRT]], [[ECCS]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam questions: [[2018 Q76]]
- Related JPMs: [[2019 JPM RO-A1]], [[2022 JPM RO-A1]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2022 NRC Operating Exam]]
