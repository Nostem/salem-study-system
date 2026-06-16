---
title: "S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G"
category: procedures
status: draft
aliases:
  - S1.OP-AR.ZZ-0007
  - S2.OP-AR.ZZ-0007
---

# S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G

## Purpose

Alarm response procedure for overhead annunciator panel Window G, which includes steam generator narrow-range level deviation / feedwater control alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q50</div>
SG narrow-range level is programmed from 33–44% up to 100% power. With one NR level channel already in calibration (bistables tripped), a <span class="hi-exam">second NR level channel failing to 30% swaps the 11BF19 and 11BF40 feed reg/bypass valves (only) to manual — the SGFPs do NOT swap</span>. During a continuing downpower the manual valve demand is then higher than required, so <span class="hi-exam">11 SG level rises higher than program</span> (overfeed).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q10</div>
On a 21 SGFP trip (no Rx trip, polisher in service), two Window G alarms are EXPECTED to lock in within 2 minutes: <span class="hi-exam">OHA G-3 EHC SYS TRBL</span> (G-3 receives input from the EHC Control and Status computer, which has a Loss of Feed Pump Runback alarm in) and <span class="hi-exam">OHA G-44 COND POL TRBL</span> (the CN108 Polisher Bypass valves auto-open on a SGFP trip while CN109 is open with the polisher in service). See [[Feed & Condensate]], [[AB.CN-0001 — Condensate System Abnormality]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-e</div>
<span class="hi-exam">OHA G-4 TURB AUTO STOP OIL PRESS LO</span> response: one of three Auto Stop Oil Pressure channels reading <span class="hi-exam">≤50 psig</span> causes the alarm, and <span class="hi-exam">2 of 3 channels in alarm trips the Main Turbine</span>. Confirm by verifying 2RP4 AST Oil Press Low status light indications. The ARP directs: IF a Turbine Trip occurs THEN, IF ≥P-9 (49% power) GO TO 2-EOP-TRIP-1, and IF &lt;P-9 GO TO S2.OP-AB.TRB-0001, Turbine Trip Below P-9. <span class="hi-trap">In this JPM the demanded turbine trip does not occur (21 MS28 Stop Valve remains open), so the operator must manually trip the Main Turbine.</span>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[Feed & Condensate]], [[Annunciators]], [[Main Turbine]]
- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]]
- Related exam questions: [[2015 Q50]], [[2012 Q10]], [[2012 Q52]]
- Related JPMs: [[2012 JPM Sim-e]]
- Related exam: [[2015 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
