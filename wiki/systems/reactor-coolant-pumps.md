---
title: RCPs
category: systems
status: draft
aliases:
  - RCPs
  - RCP
  - Reactor Coolant Pumps
---

# RCPs

## Function

Each reactor coolant loop contains a vertical, single-stage, mixed-flow pump with a controlled leakage seal assembly. The pumps circulate reactor coolant through the core, piping, and steam generators. (UFSAR 5.1, 5.5.1)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Number of Pumps | 4 | UFSAR T5.2-6 |
| Model | 93A | UFSAR T5.2-6 |
| Design/Operating Pressure | 2485 / 2235 psig | UFSAR T5.2-6 |
| Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-6 |
| Design Temperature (casing) | 650°F | UFSAR T5.2-6 |
| RPM at Nameplate Rating | 1180 | UFSAR T5.2-6 |
| Suction Temperature | 559°F | UFSAR T5.2-6 |
| Developed Head | 277 ft | UFSAR T5.2-6 |
| Capacity | 88500 gpm | UFSAR T5.2-6 |
| Seal Water Injection | 8 gpm | UFSAR T5.2-6 |
| Seal Water Return | 3 gpm | UFSAR T5.2-6 |
| Pump Discharge Nozzle ID | 27½ in | UFSAR T5.2-6 |
| Pump Suction Nozzle ID | 31 in | UFSAR T5.2-6 |
| Overall Unit Height | 25 ft 5¼ in | UFSAR T5.2-6 |
| Water Volume | 56 ft³ | UFSAR T5.2-6 |
| Pump-Motor Moment of Inertia | 82000 lb-ft² | UFSAR T5.2-6 |
| Pump Weight (dry) | 169200 lb | UFSAR T5.2-6 |

## Motor Data

| Parameter | Value | Source |
|-----------|-------|--------|
| Type | AC Induction, Single Speed, Air Cooled | UFSAR T5.2-6 |
| Voltage | 4160 V | UFSAR T5.2-6 |
| Phase | 3 | UFSAR T5.2-6 |
| Frequency | 60 Hz | UFSAR T5.2-6 |
| Power (nameplate) | 6000 HP | UFSAR T5.2-6 |
| Starting Current | 4800 amps | UFSAR T5.2-6 |
| Input (hot reactor coolant) | 4260 kW | UFSAR T5.2-6 |
| Input (cold reactor coolant) | 5690 kW | UFSAR T5.2-6 |
| Insulation | Class B Thermalastic Epoxy | UFSAR T5.2-6 |

## Design Features

- **Flow path:** Coolant drawn up through impeller, discharged through diffuser passages and out discharge nozzle
- **Maintenance:** Rotor-impeller can be removed without removing casing from piping
- **Materials:** All parts in contact with reactor coolant are austenitic stainless steel or equivalent corrosion-resistant materials
- **Controlled leakage seal assembly:** Three-stage seal with seal water injection from CVCS (8 gpm in, 3 gpm return)
- **Flywheel:** Provides coastdown flow during loss of power (moment of inertia 82000 lb-ft²)
- **Anti-reverse rotation device:** Prevents reverse rotation on loss of power
- (UFSAR 5.1, 5.5.1)

## RCP Seal System

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q28</div>
RCP #2 seal is a <span class="hi-exam">face rubbing seal</span> with a design leak-off of <span class="hi-exam">3 gph</span> to the RCP standpipe. Upon #1 seal failure, #2 seal converts from face rubbing to <span class="hi-exam">film riding seal</span> — acts as <span class="hi-exam">emergency backup only</span>. Not designed for sustained high flow/high temperature operation; <span class="hi-exam">RCP must be shut down</span> if #1 seal fails. <span class="hi-trap">100 cc/hr is #3 seal design leakage, not #2 seal. #1 seal is the film riding seal — do not confuse #1 and #2 seal types.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q10</div>
If ANY RCP seal inlet temperature is ≥ <span class="val-trip">225°F</span>, restoring seal injection flow is NOT permitted. Seal injection must be isolated before starting the charging pump. This prevents thermal shock and damage to the #1 seal from cold seal injection water contacting hot seal components.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
RCP thermal barrier rupture indications: (1) CCW radiation monitors (R17 A/B) in warning — RCS leaking into CCW, (2) CCW surge tank level rising, (3) CC131 thermal barrier isolation valve goes CLOSED on high CCW flow. PZR level does NOT rise (RCS is leaking OUT). Charging flow does NOT lower.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q27</div>
Per AB.RCP-0001: loss of CCW to motor bearings — <span class="hi-exam">5 minutes to restore CCW or trip reactor and stop RCP</span>. Motor bearing temp limit: <span class="val-trip">175°F</span>. Additional trip criteria: motor winding temp ><span class="val-trip">302°F</span>, seal outlet ><span class="val-trip">190°F</span>, shaft vibration ><span class="val-trip">20 mils</span>, #1 seal leakoff <span class="val-trip">&lt;0.8 or ≥6 gpm</span>. <span class="hi-trap">165°F is the ARP limit that directs entry into AB.RCP-0001, NOT the trip limit (175°F).</span>
</div>

- **Seal inlet temp limit:** <span class="val-trip">≥225°F</span> — do not restore seal injection (prevents #1 seal thermal shock damage)
- **Seal outlet temp limit:** <span class="val-trip">190°F</span> — monitored to prevent Safe Shutdown Seal actuation
- **CC131 Thermal Barrier Valve:** Closes automatically on high CCW flow to thermal barrier (indicates thermal barrier leak)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q26</div>
EOP-TRIP-4 RCP restart priority for PZR spray: <span class="hi-exam">23 RCP preferred (single pump for normal spray)</span>. If 23 unavailable: 21+22 or 21+24 (two pumps needed for spray via auxiliary spray line). Forced convection permits faster cooldown with less potential for upper head voiding. Single pump operation preferred over two.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q78</div>
RCP vibration abnormal response: with shaft vibration at <span class="hi-exam">16 mils (below 20 mil trip limit)</span> and motor flange vibration at <span class="hi-exam">3 mils (below 5 mil trip limit)</span>, the Attachment 1 trip criteria of AB.RCP-0001 are NOT exceeded. Per Step 3.10, the CRS/SM determines if a <span class="hi-exam">controlled Unit shutdown</span> is required — immediate RCP trip and reactor trip are not warranted. <span class="hi-trap">OHA D-36 directs entry into AB.RCP-0001 but does NOT direct tripping the reactor or stopping the RCP.</span>
</div>

## Loss of Offsite Power

On loss of offsite AC power, reactor coolant pumps are tripped. The flywheel moment of inertia (82000 lb-ft²) provides coastdown flow sufficient to prevent fuel damage. (UFSAR 5.5.1.3.13)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q1</div>
<span class="hi-exam">Low RC flow trip requires 2/3 channels ≤90% of design loop flow per loop.</span> Between P-7 (10%) and P-8 (36%), loss of flow on a single loop does NOT cause an automatic trip — Tech Specs do not allow 3-loop operation in Mode 1, so per S2.OP-AR.ZZ-0004, the operator must manually trip the reactor and stop the affected RCP.
</div>

## Loss of Component Cooling Water

Loss of CCW to the RCPs requires pump trip to protect the seals and thermal barrier. (UFSAR 5.5.1.3.14)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q86</div>
RCP #3 seal leak identification: <span class="hi-exam">STANDPIPE LEVEL-LO alarm</span> is the primary indicator of a #3 seal leak. Key diagnostic: #1 seal leakoff flow <span class="hi-exam">steady at 1.5 gpm</span> (normal — indicating intact #2 seal) while standpipe level is low. Action: <span class="hi-exam">make-up to the standpipe per ARP; power operation may continue</span>. AB.RCP-0001 does not direct actions for a #3 seal leak specifically. <span class="hi-trap">Trap: orderly shutdown and stop RCP within 8 hours is the action for a degraded #2 seal, not a #3 seal leak.</span>
</div>

## Seal Injection Flow Surveillance

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q91</div>
TS 3.5.4 limits total RCP seal injection flow to <span class="hi-exam">&le;40 gpm</span> (with charging header pressure &ge;2430 psig and 2CV55 fully open). Individual RCP seal injection flows totaling 40.5 gpm (e.g., 10 + 10.5 + 9.8 + 10.2) exceed the limit. Required action: <span class="hi-exam">adjust manual seal injection throttle valves within 4 hours</span>. <span class="hi-trap">Trap: this is NOT a charging pump operability issue (TS 3.5.2) -- it is a seal injection flow limit issue (TS 3.5.4). The TS 4.0.4 exemption allows up to 4 hours for adjustment, but this is NOT the same as "no TS action required."</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q76</div>
EOP-FRSM-1 (ATWS) RCP trip restriction: per Caution C1-1, <span class="hi-exam">RCPs should NOT be tripped when reactor power is >5%</span>. During an ATWS, RCP operation provides <span class="hi-exam">temporary core cooling under voided RCS conditions</span>. Even if RCP trip criteria are met (e.g. motor flange vibration >5 mils), the RCP should NOT be stopped while power exceeds 5%. <span class="hi-trap">Tripping an RCP during ATWS with power >5% could reduce heat removal and challenge fuel integrity — the ATWS caution takes precedence over normal RCP trip criteria.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q86</div>
RCP #1 seal failure identification: <span class="hi-exam">seal leak-off flow >=6 gpm indicates #1 seal failure</span>. Per AB.RCP-0001 Attachment 1: if #1 seal leak-off >=6 gpm, go to Attachment 2 (Stopping RCPs) → <span class="hi-exam">manual reactor trip, stop the affected RCP, then 3-5 minutes later close the associated CV104</span>. <span class="hi-trap">Orderly shutdown and stop RCP within 8 hours is the action for a degraded #2 seal (leak-off <0.8 gpm or slowly approaching 6 gpm at step 3.6) — NOT for a failed #1 seal.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.1]]** — Reactor Coolant Loops (minimum loops in operation by mode)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-d</div>
RCP standpipe low level alarm response (S2.OP-AR.ZZ-0011 Page 138): caused by <span class="hi-exam">low seal flow across #2 seal or excessive #3 seal flow</span>. Key check: if standpipe low AND seal leakoff flow alarm together → go to AB.RCP-0001. If standpipe low ONLY → fill: open <span class="hi-exam">2WR80 (PW to CONTMT STOP V)</span> on 2CC2, then <span class="hi-exam">21WR62 (Standpipe Supply Valve)</span> on 21 RCP bezel. When hi level alarm, close all and stop PW pump.
</div>

## Connections

- Related procedures: [[AB.RCP-0001 — RCP Abnormality]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]]
- Related exam questions: [[2023 Q1]], [[2023 Q4]], [[2023 Q10]], [[2023 Q26]], [[2023 Q27]], [[2023 Q78]], [[2023 Q86]], [[2023 Q91]], [[2022 Q28]], [[2022 Q76]], [[2022 Q86]]
- Related JPMs: [[2022 JPM Sim-d]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
