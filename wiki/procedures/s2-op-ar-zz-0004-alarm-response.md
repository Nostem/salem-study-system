---
title: "S2.OP-AR.ZZ-0004 — Alarm Response Procedure"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0004
  - alarm response
---

# S2.OP-AR.ZZ-0004 — Alarm Response Procedure

## Purpose

Alarm response procedure providing operator guidance for responding to control room annunciator alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q1</div>
OHA D-28 RCP BKR OPEN/FLO LO — if RCS flow degradation exists, trip the reactor, stop the RCP, and enter EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q30</div>
OHA Window D <span class="hi-exam">D20-23 (RCP BRG CLG WTR FLO LO)</span> annunciates on low RCP bearing cooling water flow. With 21 CCW pump out of service, a 2C 4KV vital bus lockout (which de-powers the 23 CCW pump) results in loss of CCW flow to the RCP bearings → D20-23 alarms → ALWAYS requires entry into <span class="hi-exam">AB.RCP-0001</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-g</div>
OHA Window D (D20-D23, 21/22/23/24 RCP BRG CLG WTR FLO LO) on a CCW pump trip: there are no automatic actions associated with these alarms; CHECK OPEN the RCP CC valves (2CC117, 2CC118, 2CC136, 2CC187) and MONITOR 21-24 RCP Motor Bearing temperatures (T0413A, T0414A, T0415A, T0416A). <span class="hi-exam">IF RCP Motor Bearing Temperature reaches 175°F, OR CCW flow can NOT be established within 5 minutes AND temps are trending up, THEN GO TO S2.OP-AB.RCP-0001</span>. IF CC Console alarms header pressure low, THEN INITIATE S2.OP-AB.CC-0001. See [[CCW]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q35</div>
Window D alarms during a LOCA: <span class="hi-exam">D-41 (BIT DISCH PRESS HI) setpoint is <span class="val-alarm">2610 psig</span></span> — UNEXPECTED in a LOCA because charging-pump discharge pressure would be well below that (it sits just above the LOCA-depressed RCS pressure). <span class="hi-exam">D-48 (SUBCLG CH B MARGIN LO) alarms at 10°F margin to saturation</span> and IS expected — the LOCA will lose subcooling.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q4</div>
OHA Window D <span class="hi-exam">D-29, 22 RCP BKR OPEN/FLO LO</span> with all 22 loop RC flows at 85% and dropping, the red START bezel for 22 RCP still illuminated, and no Rx trip (30% power) indicates a <span class="hi-exam">sheared RCP shaft</span> — a shaft shear drops loop flow while the breaker stays closed (bezel lit). <span class="hi-trap">A seized shaft would trip the supply breaker on overcurrent (breaker would NOT show closed).</span> <span class="hi-trap">At 30% power (between P-10 at 10% and P-8 at 36%), a single-loop low flow does NOT cause a Rx trip — the low-flow trip is 2/4 coincidence, so this is not an ATWT.</span>
</div>

## Connections

- Related systems: [[RCPs]], [[CCW]], [[ECCS]], [[RPS/SSPS]], [[Annunciators]]
- Related procedures: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[AB.RCP-0001 — RCP Abnormality]]
- Related exam questions: [[2023 Q1]], [[2014 Q30]], [[2014 Q35]], [[2012 Q4]]
- Related JPMs: [[2015 JPM Sim-g]]
- Related exam: [[2023 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
