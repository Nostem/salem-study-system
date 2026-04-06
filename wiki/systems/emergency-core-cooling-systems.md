---
title: Emergency Core Cooling Systems
category: systems
status: draft
aliases:
  - ECCS
  - safety injection
  - SI
---

# Emergency Core Cooling Systems

## Function

The ECCS provides borated water to cool the reactor core in the event of a loss-of-coolant accident (LOCA). It injects borated water into the RCS to: (1) terminate any reactivity increase, (2) provide initial core cooling and reflooding, and (3) replenish coolant lost from the primary system. The boron in the injected water combined with control rods ensures shutdown reactivity. (UFSAR 6.1, 6.3)

## Safety Injection Actuation Signals

| Signal | Coincidence | Source |
|--------|------------|--------|
| Low Pressurizer Pressure | 2/3 | UFSAR 6.3.2 |
| High Containment Pressure (Hi) | 2/3 | UFSAR 6.3.2 |
| High Steam Line Differential Pressure | 2/3 (between any two SGs) | UFSAR 6.3.2 |
| High Steam Line Flow | 1/2 per line in 2/4 lines, AND (Low-Low Tavg 2/4 OR Low Steam Line Pressure 2/4) | UFSAR 6.3.2 |
| Manual | 1/2 | UFSAR 6.3.2 |

The SI signal initiates: reactor trip, diesel generator start, safeguards sequence, and Phase A containment isolation. (UFSAR 6.3.2)

## ECCS Components

### Accumulators (Passive — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 4 (one per cold leg) | UFSAR T6.3-2 |
| Type | Stainless steel clad/carbon steel | UFSAR T6.3-2 |
| Design Pressure | 700 psig | UFSAR T6.3-2 |
| Design Temperature | 300°F | UFSAR T6.3-2 |
| Normal Operating Pressure | 650 psig | UFSAR T6.3-2 |
| Minimum Operating Pressure | 595.5 psig | UFSAR T6.3-2 |
| Total Volume | 1350 ft³ | UFSAR T6.3-2 |
| Minimum Operating Water Volume | 831.9 ft³ | UFSAR T6.3-2 |
| N₂ Gas Volume | 500 ft³ | UFSAR T6.3-2 |
| Boron Concentration (nominal/min) | 2000 / 1900 ppm | UFSAR T6.3-2 |
| Code | ASME III Class C | UFSAR T6.3-2 |

Isolated from RCS by two check valves in series. Inject when RCS pressure falls below accumulator pressure. For a large LOCA, accumulators begin injecting ~10 seconds after the break. (UFSAR 6.3.2.2)

### Centrifugal Charging Pumps (High Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Horizontal multi-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 2800 psig | UFSAR T6.3-5 |
| Design Temperature | 300°F | UFSAR T6.3-5 |
| Design Flow Rate | 150 gpm | UFSAR T6.3-5 |
| Design Head | 5800 ft | UFSAR T6.3-5 |
| Max Flow Rate | 560 gpm | UFSAR T6.3-5 |
| Head at Max Flow | 1300 ft | UFSAR T6.3-5 |
| <span class="hi"><span class="hi"><span class="hi">Shutoff Discharge Pressure</span></span></span> | <span class="hi">2670 psig</span> | UFSAR T6.3-5 |
| Motor HP | 600 | UFSAR T6.3-5 |
| Material | Stainless steel | UFSAR T6.3-5 |

### Safety Injection Pumps (Intermediate Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Horizontal multi-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 1700 psig | UFSAR T6.3-5 |
| Design Temperature | 300°F | UFSAR T6.3-5 |
| Design Flow Rate | 425 gpm | UFSAR T6.3-5 |
| Design Head | 2500 ft | UFSAR T6.3-5 |
| Max Flow Rate | 675 gpm | UFSAR T6.3-5 |
| Head at Max Flow | 1500 ft | UFSAR T6.3-5 |
| Shutoff Discharge Pressure | <span class="hi">1520 psig</span> | UFSAR T6.3-5 |
| Motor HP | 400 | UFSAR T6.3-5 |
| Material | Stainless steel | UFSAR T6.3-5 |

SI pump discharge is limited to <1500 psig to prevent lifting RCS safety valves. (UFSAR 6.3.2)

### Residual Heat Removal Pumps (Low Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Vertical single-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 600 psig | UFSAR T6.3-5 |
| Design Temperature | 400°F | UFSAR T6.3-5 |
| Design Flow Rate | 3000 gpm | UFSAR T6.3-5 |
| Design Head | 350 ft | UFSAR T6.3-5 |
| Max Flow Rate | 4500 gpm | UFSAR T6.3-5 |
| Shutoff Discharge Pressure | <span class="hi">170 psig</span> | UFSAR T6.3-5 |
| Motor HP | 400 | UFSAR T6.3-5 |

RHR pumps deliver when RCS depressurizes to ~170 psig. Inject via accumulator discharge lines to cold legs. (UFSAR 6.3.2)

### Refueling Water Storage Tank (RWST)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 1 | UFSAR T6.3-4 |
| <span class="hi">Tank Capacity</span> | <span class="hi">400000 gal</span> | UFSAR T6.3-4 |
| Minimum Volume | 364500 gal | UFSAR T6.3-4 |
| Operating Pressure | Atmospheric | UFSAR T6.3-4 |
| Operating Temperature | 40–100°F | UFSAR T6.3-4 |
| Design Temperature | 120°F | UFSAR T6.3-4 |
| Outside Diameter | ~38 ft | UFSAR T6.3-4 |
| Height (straight side) | 48 ft | UFSAR T6.3-4 |
| Material | ASTM A-240 Type 304L SS | UFSAR T6.3-4 |
| Boron Concentration (nom/min/max) | 2400 / 2300 / 2500 ppm | UFSAR T6.3-4 |
| Seismic Classification | Class I | UFSAR 6.3.2 |

Provides suction source for all ECCS pumps during injection phase. Minimum volume based on refueling canal fill requirement. (UFSAR 6.3.2)

## ECCS Operation Phases

### Injection Phase
1. SI signal actuates all ECCS pumps and opens injection valves
2. All pumps take suction from RWST
3. Accumulators inject passively when RCS pressure < accumulator pressure (~650 psig)
4. Charging pumps inject at high RCS pressures (highest head)
5. SI pumps inject when RCS < ~1500 psig
6. RHR pumps inject when RCS < ~170 psig
7. Time delay: ~25 seconds for active pumps to deliver flow

### Changeover to Recirculation Phase
1. Containment sump level shows adequate submergence of sump strainer
2. RWST level low alarm alerts operator
3. Operator initiates switchover to cold leg recirculation
4. RHR pumps realigned from RWST to containment sump
5. SI and charging pumps take suction from RHR pump discharge (piggyback)

### Hot Leg Recirculation
Initiated at ~14.0 hours (Unit 1) or ~6.5 hours (Unit 2) after switchover to cold leg recirculation to assure termination of boiling. Minimum one SI pump aligned for hot leg recirculation flow. (UFSAR 6.3.2)

## Single Failure Criteria

- During injection phase: tolerant of any single active failure
- During recirculation phase: tolerant of one active or one passive failure (but not in addition to an injection phase failure)
- All active ECCS components located outside containment in Auxiliary Building
(UFSAR 6.1.1.4, 6.3.2)

## Tech Spec LCOs

- **[[TS 3/4.5 — ECCS]]** — ECCS subsystem operability
- **TS 3/4.5.1** — Accumulators (Modes 1, 2, 3 with pressurizer pressure ≥1000 psig)
- **TS 3/4.5.2** — ECCS Subsystems (Tavg ≥350°F)
- **TS 3/4.5.3** — ECCS Subsystems (Tavg <350°F)
- **TS 3/4.5.4** — RWST

## Connections

- Related systems: [[Reactor Coolant System]], [[Residual Heat Removal]], [[Chemical and Volume Control System]], [[Containment Systems]]
- Related tech specs: [[TS 3/4.5 — ECCS]], [[TS 3/4.3 — Instrumentation]]
- Related EOPs: [[EOP-LOCA Series]]
