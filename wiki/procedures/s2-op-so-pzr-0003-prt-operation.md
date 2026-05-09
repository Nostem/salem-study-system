---
title: "S2.OP-SO.PZR-0003 — PRT Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.PZR-0003
  - S2.OP-SO.PZR-0003 — PRT Operations
  - PRT operation
---

# S2.OP-SO.PZR-0003 — PRT Operation

## Purpose
System operating procedure for Pressurizer Relief Tank level control and operation.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q32</div>
To drain PRT: open 2PR14 → automatically opens 2WL12 → starts RCDT pump (defeats low level cutoff). RCDT pumps can discharge to: (1) RWST, (2) CVCS Hold-Up Tanks, or (3) Waste Hold-Up Tanks.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q34</div>
PRT drain limitation: <span class="hi-exam">2PR15 cannot open if PRT pressure is ≥10 psig</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q6</div>
PRT Cooling (Section 5.3): cooling is accomplished by a <span class="hi-exam">manual-only feed and bleed</span> — feed via 2WR82 (Primary Water), bleed via 2PR14 (PRT drain). Operation of WR82 and PR14 can only be performed manually. During PRT cooling, the PRT is drained directly to the <span class="hi-exam">RCDT pump suction header</span> (NOT into the RCDT tank itself). <span class="hi-trap">There is NO automatic PRT cooling function.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q6</div>
Section 5.3, "Reducing PRT Temperature by Feed and Bleed": PRT liquid is pumped to the <span class="hi-exam">HUT (Hold-Up Tank) using an RCDT Pump</span>. The source of PRT temperature rise at power is <span class="hi-exam">Reactor Head Vent leakage</span> (head vents drain to the PRT). <span class="hi-trap">Reactor Flange Leakoff goes to the RCDT, not the PRT. The PRT drain is physically connected to the RCDT but a check valve prevents pumping to the RCDT — PRT liquid goes to the HUT.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-f</div>
<strong>Section 5.1 — Adjust PRT level using Primary Water:</strong> required when 2PR1 is leaking and PRT level/pressure are out of band. Step sequence: (5.1.1.A) IF required, START 21 or 22 Primary Water Pump; (5.1.1.B) OPEN 2WR80, CONT PRI WATER STOP; (5.1.1.C) OPEN 2WR82, PRT WATER SUPPLY; <span class="hi-exam">(5.1.1.D) IF PRT pressure approaches 10 psig, THEN OPEN 2PR15 (VENT) to maintain PRT pressure &gt;3 psig and ≤10 psig</span>; (5.1.1.E) When PRT level rises to between 59% and 86%: CLOSE 2WR80, CLOSE 2WR82, ENSURE 2PR15 closed, then STOP running Primary Water Pump if not required for other reasons. <span class="hi-trap">If the PRT Hi Pressure alarm is received, it locks out 2PR15 from opening — pressure cannot be reduced. The 3 psig lower bound maintains a positive nitrogen overpressure on the tank to prevent oxygen ingress.</span> The procedure note explicitly permits performing the pressure-reduction step BEFORE raising level if pressure is already close to maximum.
</div>

## Connections
- Related systems: [[Pressurizer & PRT]]
- Related exam questions: [[2018 Q6]], [[2019 Q6]], [[2022 Q34]], [[2023 Q32]]
- Related JPMs: [[2016 JPM Sim-f]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2016 NRC Operating Exam]]
