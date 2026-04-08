---
title: Auxiliary Feedwater
category: systems
status: draft
aliases:
  - AFW
  - auxiliary feedwater system
---

# Auxiliary Feedwater

## Function

Provides feedwater to steam generators when the main feedwater system is unavailable. Ensures decay heat removal via the steam generators following reactor trip, loss of main feedwater, or loss of offsite power. Safety-related. (UFSAR 10.4.9)

## Pumps

| Parameter | Motor-Driven (2) | Turbine-Driven (1) |
|-----------|------------------|---------------------|
| Number | 2 | 1 |
| Power Source | Vital buses (EDG-backed) | Main steam (no AC required) |
| SG Supply | Each can supply 2 SGs | Can supply all 4 SGs |
| DC Control Power | Vital DC | Vital DC |

## Actuation Signals

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual (local and remote) | UFSAR T7.2-1 |
| Motor-Driven | 2/3 Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence signal; OR blackout sequence signal; OR manual (local and remote) | UFSAR T7.2-1 |

## Water Sources

- **Primary:** Condensate storage tank
- **Backup:** Service water system (safety-related, unlimited supply from Delaware River)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q41</div>
23 AFW Turbine-Driven pump governor maintains <span class="hi-exam">constant turbine speed</span> as SG pressure lowers (designed to operate with SG pressures as low as 100 psig). As SG pressure decreases, the differential pressure across the feedpump discharge and the SG increases, so <span class="hi-exam">AFW flow RISES even though turbine speed remains constant</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
Instrument air supply line rupture to <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) causes the valve to fail OPEN</span>. This starts the 23 AFW pump, injecting cold feedwater into the SGs at power. <span class="hi-exam">Reactor power increases above 100% RTP</span> due to cooler feedwater (positive MTC). The digital FW system automatically adjusts MFW Reg Valves — no manual FW control needed. Operator should reduce reactor power per S2.OP-IO.ZZ-0004 (Power Operation). Maximum power level: 3459 MWt (100% RTP).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q44</div>
<span class="hi-exam">2DR6 (AFW Tank Makeup Valve) fails OPEN on loss of air</span>. This causes the AFW storage tank level to rise and potentially overflow. Per S2.OP-AB.CA-0001, Attachment 2, the <span class="hi-exam">2DR6 can be manually operated from the field</span> to control tank level.
</div>

## Key Design Points

- Turbine-driven pump is available during station blackout (no AC power required)
- Motor-driven pumps auto-start on lower SG level setpoint than turbine-driven pump
- Turbine-driven pump requires steam pressure >680 psig for IST testing

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.2 requires three independent AFW pumps OPERABLE in Modes 1, 2, and 3
- 1 pump inoperable: 72 hours to restore
- 2 pumps inoperable: Hot Standby in 6 hours
- 3 pumps inoperable: immediately restore at least one

## Connections

- Related systems: [[Steam Generators]], [[Main Steam and Feedwater]], [[Service Water]], [[Electrical Power Systems]]
- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]]
- Related exam questions: [[2023 Q41]], [[2023 Q43]], [[2023 Q44]]
- Related exam: [[2023 NRC Written Exam]]
