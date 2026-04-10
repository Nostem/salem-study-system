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
(UFSAR T7.2-1, TS Table 3.3-4)

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

## Connections

- Related exam questions: [[2023 Q40]], [[2023 Q77]], [[2022 Q42]], [[2022 Q80]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]]
