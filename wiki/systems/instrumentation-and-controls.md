---
title: Instrumentation and Controls
category: systems
status: draft
aliases:
  - I&C
  - reactor trip system
  - RTS
  - ESFAS
---

# Instrumentation and Controls

## Function

Instrumentation and Control Systems provide the reactor operator with information and control capability to operate the station safely and efficiently. Safety-related logic circuitry and actuators execute equipment actions without operator action when safety functions are involved. Salem's Protection and ESF Actuation Systems are functionally identical to those in the D.C. Cook Plant. (UFSAR 7.1)

## Reactor Trip Functions

| # | Trip Function | Coincidence | Interlocks | Source |
|---|-------------|------------|------------|--------|
| 1 | Manual | 1/2 | None | UFSAR T7.2-1 |
| 2 | High Neutron Flux (Power Range) | 2/4 | Low setpoint interlocked with P-10 | UFSAR T7.2-1 |
| 3 | Overtemperature Delta-T | 2/4 | None | UFSAR T7.2-1 |
| 4 | Overpower Delta-T | 2/4 | None | UFSAR T7.2-1 |
| 5 | Low Pressurizer Pressure | 2/4 | Interlocked with P-7 | UFSAR T7.2-1 |
| 6 | High Pressurizer Pressure | 2/4 | None | UFSAR T7.2-1 |
| 7 | High Pressurizer Water Level | 2/3 | Interlocked with P-7 | UFSAR T7.2-1 |
| 8 | Low Reactor Coolant Flow | 2/3 per loop | Interlocked with P-7 and P-8 | UFSAR T7.2-1 |
| 9A | RCP Undervoltage | 1/2 taken twice | Interlocked with P-7 | UFSAR T7.2-1 |
| 9B | RCP Underfrequency | 1/2 taken twice | Interlocked with P-7 | UFSAR T7.2-1 |
| 9C | RCP Breaker Open | — | Interlocked with P-7 | UFSAR T7.2-1 |
| 10 | Safety Injection Signal | See SI actuation | — | UFSAR T7.2-1 |
| 11 | Turbine-Generator Trip | 2/3 low auto stop oil pressure | Interlocked with P-9 | UFSAR T7.2-1 |
| 14 | Source Range Neutron Flux | 1/2 | Manual block by P-6, interlocked with P-10 | UFSAR T7.2-1 |
| 15 | High Positive Flux Rate | 2/4 | None | UFSAR T7.2-1 |

Note: Negative Flux Rate Trip has been removed per NRC License Amendment 278-261. (UFSAR T7.2-1)

## Key Permissive Interlocks

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| P-4 | Reactor trip | Actuates turbine trip; closes main FW valves on low Tavg | UFSAR T7.2-2 |
| P-6 | 1/2 intermediate range above setpoint | Allows manual block of source range trip | UFSAR T7.2-2 |
| P-7 | 3/4 power range below setpoint (P-10) AND 2/2 turbine pressure below setpoint (P-13) | Blocks trips on: low flow (>1 loop), UV, UF, low PZR pressure, high PZR level | UFSAR T7.2-2 |
| P-8 | 3/4 power range below setpoint | Blocks trip on low flow in a single loop | UFSAR T7.2-2 |
| P-9 | 2/4 power range above setpoint | Prevents/defeats block of turbine trip reactor trip (≥50% rated thermal power) | UFSAR T7.2-2 |
| P-10 | 2/4 power range above setpoint | Allows block of power range low setpoint trip; blocks source range trip | UFSAR T7.2-2 |
| P-11 | 2/3 PZR pressure below setpoint | Allows manual block of SI on low PZR pressure | UFSAR T7.2-2 |
| P-12 | 2/4 Tavg below setpoint | Actuates SI/steamline isolation on high steam flow; blocks steam dump | UFSAR T7.2-2 |
| P-13 | 2/2 turbine steamline inlet pressure below setpoint | Input to P-7 | UFSAR T7.2-2 |
| P-14 | 2/3 Hi-Hi SG level above setpoint (any SG) | Trips all FW pumps, isolates feedwater, trips turbine | UFSAR T7.2-2 |

## Rod Control Interlocks (Rod Stops)

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| C-1 | 1/2 intermediate range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-2 | 1/4 power range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-3 | 2/4 OT Delta-T above setpoint | Blocks rod withdrawal; actuates turbine runback | UFSAR T7.2-2 |
| C-4 | 2/4 OP Delta-T above setpoint | Blocks rod withdrawal; starts turbine runback | UFSAR T7.2-2 |
| C-5 | 1/1 turbine pressure below setpoint | Blocks automatic rod withdrawal | UFSAR T7.2-2 |

Note: Automatic rod withdrawal is disabled at Salem. (UFSAR T7.2-2)

## ESF Actuation Signals

| Signal | Designation | Actuation | Actions | Source |
|--------|-----------|-----------|---------|--------|
| Safety Injection | "S" | Low PZR pressure (2/3), OR Hi containment pressure (2/3), OR Hi steamline differential pressure (2/3), OR Hi steam flow (2/4 lines) AND (Lo-Lo Tavg 2/4 OR Lo steam line pressure 2/4), OR Manual (1/2) | Actuates SI, reactor trip, diesel start, Phase A containment isolation | UFSAR T7.2-1 |
| Phase A Containment Isolation | "T" | Safety Injection signal | Isolates all non-essential process lines | UFSAR T7.2-1 |
| Containment Spray / Phase B Isolation | "P" | 2/4 Hi-Hi containment pressure, OR 2/2 manual | Actuates containment spray, steamline isolation, remaining isolation valves | UFSAR T7.2-1 |
| Main Steamline Isolation | — | Hi steam flow (2/4) AND (Lo-Lo Tavg 2/4 OR Lo steam pressure 2/4), OR Hi-Hi containment pressure (2/4), OR manual (1/1 per line) | Closes MSIVs | UFSAR T7.2-1 |

## Auxiliary Feedwater Actuation

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual | UFSAR T7.2-1 |
| Motor-Driven | 2/3 Lo-Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence; OR blackout sequence; OR manual | UFSAR T7.2-1 |

## Main Feedwater Isolation

Actuated by: SI signal, OR 2/3 Hi-Hi SG level, OR low auctioneered Tavg AND reactor trip. Closes main FW control valves (fast closure), bypass valves, and inlet stop valves. (UFSAR T7.2-1)

## Overtemperature Delta-T Trip

Protects the core against DNB. Continuously calculated setpoint per loop (2/4 coincidence):

Delta-T setpoint = K1 - K2*(Tavg) + K3*(P) - f(delta-phi)

Where K1 = setpoint bias, K2 = temperature effect on DNB, K3 = pressure effect on DNB, f(delta-phi) = axial flux difference penalty. Changes in f(delta-phi) can only decrease the setpoint. (UFSAR 7.2.2.5)

## Overpower Delta-T Trip

Protects against excessive power (fuel rod rating). Continuously calculated per loop (2/4 coincidence):

Delta-T setpoint = K4 - K5*(rate of change of Tavg) + K6*(Tavg - Tavg-setpoint) - f(delta-phi)

(UFSAR 7.2.2.5)

## AMSAC (ATWS Mitigation System Actuation Circuitry)

Diverse from the Reactor Protection System. Provides backup trip of turbine and actuation of AFW in the event the RPS fails to trip the reactor. Armed by P-20 (turbine steamline inlet pressure above setpoint). Actuates on low SG water level. Not safety-related but important for ATWS mitigation per 10CFR50.62. (UFSAR 7.8)

## POPS (Pressurizer Overpressure Protection System)

Provides low-temperature overpressure protection by enabling PORVs to open at a reduced setpoint when RCS temperature is low. Prevents exceeding Appendix G pressure-temperature limits during heatup, cooldown, and cold shutdown. (UFSAR 7.6.3)

## Reactor Trip Breakers

Two reactor trip breakers (52/RTA and 52/RTB) in series, each with a bypass breaker (52/BYA and 52/BYB). Trip signal deenergizes undervoltage coils and actuates shunt trip. If a bypass breaker is closed for testing and the other train's bypass breaker is also closed, both trip breakers and bypass breakers are automatically tripped by the General Warning Alarm. (UFSAR 7.2.2)

## Nuclear Instrumentation Ranges

- **Source Range:** Two channels, used during shutdown and startup
- **Intermediate Range:** Two channels, used during startup
- **Power Range:** Four channels, used during power operation (provides input to OT Delta-T, OP Delta-T, high flux trips, and rod control)
(UFSAR 7.2.1.2)

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Trip setpoints, response times, channel operability
- **TS 3/4.3.1** — Reactor Trip System Instrumentation
- **TS 3/4.3.2** — ESF Actuation System Instrumentation

## Connections

- Related systems: [[Reactor Coolant System]], [[Emergency Core Cooling Systems]], [[Containment Systems]], [[Auxiliary Feedwater]]
- Related concepts: [[Nuclear Design]], [[Reactivity and Reactor Control]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
