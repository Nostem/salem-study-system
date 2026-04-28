---
title: Containment Spray
category: systems
status: draft
aliases:
  - containment spray system
  - spray additive
  - NaOH spray
---

# Containment Spray

## Function

Reduces containment pressure and removes iodine from the containment atmosphere by spraying chemically treated (NaOH) water following a LOCA or other DBA. (UFSAR 6.2.2.1)

## Actuation

- Actuated on Hi-Hi Containment Pressure ("P" signal, 2/4 at <span class="val-trip">15.0 psig</span>)
- Phase B containment isolation also actuates on the "P" signal
- **Containment Spray bistables are energized to actuate** (opposite of most ESF bistables)
(UFSAR T7.2-1, TS Table 3.3-4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q88</div>
CS Hi-Hi Containment Pressure bistables are <span class="hi-exam">energized to actuate</span>. Loss of a VIB leaves the associated bistable de-energized (cannot contribute to actuation) → <span class="hi-exam">logic goes from 2/4 to 2/3</span>. Per TS 3.3.2.1, the inoperable channel is placed in <span class="hi-exam">BYPASS (not tripped)</span> to prevent spurious CS actuation. <span class="hi-trap">Most ESF bistables are de-energized to trip → inoperable channels are placed in TRIPPED. Containment Spray is the opposite.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q14</div>
Resetting one train of Containment Spray (after AUTOMATIC actuation without a manual backup): <span class="hi-exam">depress bezel button B ONLY</span>. Key switches A and C are NOT required for reset when only an automatic actuation has occurred. <span class="hi-trap">Key switches A and C would be involved if a manual backup had been performed. Candidates confuse automatic-only reset (bezel button B) with reset following manual actuation.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q15</div>
EOP-LOCA-5 Table C CS pump determination with 2B 4KV bus de-energized: with Containment Pressure = 19 psig, RWST Level = 10 feet, and <span class="hi-exam">only 3 CFCUs running in slow speed (2B bus loss = 22 and 24 CFCUs unavailable)</span>, Table C shows <span class="hi-exam">0 CS pumps required</span>. Crew stops BOTH CS pumps. <span class="hi-trap">Must correctly count available CFCUs to enter Table C — the number of CFCUs running directly determines whether 0, 1, or 2 CS pumps are required.</span>
</div>

## Operation

### Injection Phase
- Spray pumps take suction from RWST
- NaOH from spray additive tank mixed with spray flow via eductors
- Spray into containment atmosphere

### Recirculation Phase
- Spray pumps realigned to containment sump via RHR heat exchangers
- Cooled recirculated water sprayed into containment

## Spray Nozzles

- Hollow-cone pressure nozzle design, no internal parts subject to clogging
- 3/8-inch diameter orifice, stainless steel
- Sauter mean drop size < 1000 microns at design conditions
- Four 360-degree ring headers at two elevations
- Screened through 1/12-inch (2.1 mm) holes during recirculation
(UFSAR 6.2.2.1)

## Spray Additive System

| Parameter | Value | Source |
|-----------|-------|--------|
| Spray Additive Tank Volume | 2568–4000 gallons | TS 3.6.2.2 |
| NaOH Concentration | 30–32% by weight | TS 3.6.2.2 |
| Eductor Flow | 35 ±3.5 gpm to each spray system | TS SR 4.6.2.2 |
| Spray Pump Differential Pressure | ≥204 psid | TS SR 4.6.2.1 |

## Key Design Points

- Two independent containment spray systems
- NaOH additive maintains post-LOCA sump pH between 7.0 and 10.0
- pH control minimizes iodine re-evolution and chloride stress corrosion cracking

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q40</div>
CS pump power supplies: <span class="hi-exam">21 CS pump on A 4KV Vital Bus, 22 CS pump on C 4KV Vital Bus</span>. A failed 2B SEC does NOT affect either CS pump. With SECs NOT reset after initial SI sequence, the CS pump start contact remains re-closed — <span class="hi-exam">CS pumps WILL auto-start on Hi-Hi containment pressure signal</span> even after the initial SI sequence completes.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q42</div>
21 CS Pump powered from <span class="hi-exam">2A 4KV Vital Bus</span>, 22 CS Pump from <span class="hi-exam">2C 4KV Vital Bus</span>. With 2C bus de-energized, only 21 CS Pump is available. To manually start: must <span class="hi-exam">block and reset the associated SEC first</span>, then use the <span class="hi-exam">keyswitch</span> to start the CS pump. <span class="hi-trap">The start pushbutton alone will NOT start the CS pump when SECs have actuated — SEC sequences override manual pushbutton control. Must block/reset SEC and use keyswitch.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.1 (Spray System), TS 3.6.2.2 (Spray Additive)
- 1 spray system inoperable: 72 hours, then 48 more hours, or Cold Shutdown

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q77</div>
EOP-LOCA-1 Step 7.4 (stop CS pumps when containment pressure below 13 psig) is a <span class="hi-exam">continuous action step</span>. Per OP-SA-108-101-2002: continuous action steps are <span class="hi-exam">NOT performed during a Red or Purple path FRP</span>. Even if conditions to stop CS pumps are met, the crew must transition to the FRP and not perform Step 7.4.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q80</div>
EOP-LOCA-5 vs EOP-FRCE-1 containment spray operation: per EOP-FRCE Caution C3-1, <span class="hi-exam">if LOCA-5 is in effect, operation of containment spray pumps should be IAW LOCA-5</span> (not FRCE-1). LOCA-5 has <span class="hi-exam">less restrictive criteria allowing reduction of CS pump operation based on RWST level and CFCUs to conserve RWST inventory</span>. FRCE-1 establishes maximum available heat removal (more aggressive CS operation) which conflicts with LOCA-5 priority to conserve RWST inventory.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-f</div>
EOP-TRIP-1 Step 9 — manual CS/Phase B actuation during LBLOCA: containment pressure NOT < <span class="hi-exam">15 psig</span> → manually initiate Phase B and Spray using safeguards key switches on 2CC1. Alternate path: Phase B valves (<span class="hi-exam">2CC131, 2CC190</span>) fail to auto-close and NaOH valves (<span class="hi-exam">2CS16, 2CS17</span>) fail to auto-open on CS signal. Operator must verify Table B valve groups and manually reposition: close at least one 2CC131/2CC190 and open at least one 2CS16/2CS17.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q42</div>
EOP-LOCA-5 Table C determines required CS pumps: with <span class="hi-exam">RWST > 15.24 ft, containment pressure 18 psig, and 4 CFCUs operating → 0 CS pumps required</span>. Correct CFCU count depends on knowing CFCU power supplies — <span class="hi-trap">losing the 2A Vital Bus does NOT affect CFCU count (CFCUs are powered from 460V buses, not 4KV vital buses directly). Candidates must know CFCU vs CS pump power supply mapping.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
Confirms CS pump power supplies during MSLB + LOOP with 2C 4KV Vital Bus lost: <span class="hi-exam">21 CS Pump (A bus) is available, 22 CS Pump (C bus) is NOT available</span>. Containment cooling design bases: 3 CFCUs + 1 CS pump. With C bus lost, only 21 CS Pump available.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q88</div>
During cold leg recirculation, <span class="hi-exam">Containment Spray pumps take suction from the outlet of the RHR HXs</span>. Therefore, the <span class="hi-exam">RHR pumps (not SI pumps) provide the D/P to drive Containment Spray</span> during recirculation mode. <span class="hi-trap">SI pumps are plausible but incorrect — CS alignment in recirculation is via the RHR system.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-e</div>
EOP-TRIP-1 Step 11: manual CS/Phase B actuation during LBLOCA with containment pressure NOT &lt; <span class="hi-exam">15 psig</span>. Use safeguards key switches on 2CC1. <span class="hi-exam">Alternate path: auto CS and Phase B signals fail</span>. Phase B valves <span class="hi-exam">2CC131 and 2CC190 (CCW containment isolation)</span> remain open and NaOH discharge valves <span class="hi-exam">2CS16 and 2CS17</span> remain closed. Step 11.4 Table D check reveals valves not in safeguards positions — operator manually repositions (close 2CC131/2CC190, open 2CS16/2CS17). NaOH valves provide sodium hydroxide to containment spray for iodine scrubbing and pH control.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q13</div>
<span class="hi-exam">NaOH (Sodium Hydroxide)</span> is added to Containment Spray flow to remove <span class="hi-exam">elemental iodine</span> from the containment atmosphere AND to <span class="hi-exam">prevent corrosion of containment components</span>. <span class="hi-trap">Trap: Hydrazine is added to the RCS to scavenge oxygen — it is NOT added to Containment Spray flow. NaOH serves a dual purpose (iodine removal AND corrosion prevention), not just iodine removal alone.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q14</div>
Confirms CS pump power supplies and spray actuation setpoint during LOCA + LOOP with 2C 4KV Vital Bus faulted: Containment Spray actuation at <span class="hi-exam"><span class="val-trip">15 psig</span></span>. With 2C bus de-energized, ONLY <span class="hi-exam">21 CS Pump (2A bus) is running</span>. 22 CS Pump (2C bus) is not available. Same power supply mapping tested on 2020 Q9, 2022 Q42, and 2023 Q40.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q88</div>
TS 3.6.2.1 application with BOTH trains of Containment Spray INOPERABLE: LCO 3.6.2.1 has NO action for both trains inoperable → <span class="hi-exam">LCO 3.0.3 applies</span>. When ONE train is restored, LCO 3.0.3 exits and the single-inoperable-train action of LCO 3.6.2.1 begins: <span class="hi-exam">restore within 72 hours or be in HOT STANDBY within the next 6 hours</span>. Key timing: the 72-hour clock starts from when the LCO was first NOT met (08:00 on June 12th), not from when one train was restored (10:00). Total: <span class="hi-exam">72 + 6 = 78 hours from 08:00 on June 12th = 14:00 on June 15th</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A5</div>
Emergency classification with degraded containment cooling: Containment pressure 35 psi, <span class="hi-exam">21 CS pump failed to start (only 22 CS pump running)</span>. Combined with < 3 CFCUs in low speed → meets <span class="hi-exam">CB8.P (containment barrier potential loss, 2 pts)</span> for fission product barrier assessment. This is a POTENTIAL loss, not a LOSS — containment barrier is degraded but not breached. Combined with RB2.L (5 pts) = <span class="hi-exam">7 points total = SAE</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
Both CS pumps start on Phase B actuation (containment pressure >15 psig) during LBLOCA. During EOP-LOCA-3 cold leg recirculation transfer, <span class="hi-exam">stop 22 CS pump within ~5.5 minutes</span> of RWST lo level alarm (CT#2 Part 2). Only one CS pump remains running during recirculation alignment.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2018 Q13]], [[2018 Q14]], [[2018 Q88]], [[2019 Q11]], [[2019 Q14]], [[2019 Q15]], [[2019 Q88]], [[2020 Q9]], [[2020 Q42]], [[2020 Q88]], [[2023 Q40]], [[2023 Q77]], [[2022 Q42]], [[2022 Q80]]
- Related JPMs: [[2018 JPM SRO-A5]], [[2022 JPM Sim-f]], [[2020 JPM Sim-e]]
- Related scenarios: [[2018 Scenario 2]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
