---
title: "TS 3/4.3 — Instrumentation"
category: tech-specs
status: draft
aliases:
  - instrumentation tech specs
  - RTS instrumentation
  - ESF instrumentation
  - monitoring instrumentation
  - Table 3.3-4
---

# TS 3/4.3 — Instrumentation

## 3/4.3.1 — Reactor Trip System Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.1.1</div>
The Reactor Trip System instrumentation channels and interlocks shown in Table 3.3-1 shall be OPERABLE with RESPONSE TIMES as shown in Table 3.3-2.
</div>

**Applicability:** As shown for each functional unit in Table 3.3-1

### Reactor Trip Setpoints (Table 2.2-1)

| # | Functional Unit | Trip Setpoint | Allowable Value |
|---|----------------|---------------|-----------------|
| 1 | Manual Reactor Trip | N/A | N/A |
| 2 | Power Range Neutron Flux (Low) | ≤<span class="val-trip">25%</span> RTP | ≤26% RTP |
| 2 | Power Range Neutron Flux (High) | ≤<span class="val-trip">109%</span> RTP | ≤110% RTP |
| 3 | Power Range High Positive Rate | ≤<span class="val-trip">5%</span> RTP (τ ≥ 2 sec) | ≤5.5% RTP |
| 5 | Intermediate Range Neutron Flux | ≤<span class="val-trip">25%</span> RTP | ≤38.5% RTP |
| 6 | Source Range Neutron Flux | ≤<span class="val-trip">10⁵ cps</span> | ≤1.44 x 10⁵ cps |
| 7 | Overtemperature Delta-T | See Note 1 | See Note 3 |
| 8 | Overpower Delta-T | See Note 2 | See Note 4 |
| 9 | Pressurizer Pressure — Low | ≥<span class="val-trip">1865 psig</span> | ≥1855 psig |
| 10 | Pressurizer Pressure — High | ≤<span class="val-trip">2385 psig</span> | ≤2395 psig |
| 11 | Pressurizer Water Level — High | ≤<span class="val-trip">92%</span> of instrument span | ≤93% |
| 12 | Loss of Flow | ≥<span class="val-trip">90%</span> of design flow per loop* | ≥89% |
| 13 | SG Water Level — Low-Low | ≥<span class="val-trip">14.0%</span> NR span | ≥13.0% NR span |
| 15 | Undervoltage — RCPs | ≥<span class="val-trip">2900 volts</span> each bus | ≥2850 volts |
| 16 | Underfrequency — RCPs | ≥<span class="val-trip">56.5 Hz</span> each bus | ≥56.4 Hz |
| 17A | Turbine Trip — Low Auto Stop Oil | ≥<span class="val-trip">45 psig</span> | ≥45 psig |
| 17B | Turbine Trip — Stop Valve Closure | ≤<span class="val-trip">15%</span> off full open | ≤15% |

*Design flow is 82500 gpm per loop. (TS Table 2.2-1, Amendment No. 310)*

### Minimum Channels OPERABLE (Table 3.3-1, Selected Functions)

| Function | Total Channels | Channels to Trip | Min OPERABLE | Applicable Modes |
|----------|---------------|-----------------|--------------|-----------------|
| Power Range Neutron Flux (High) | 4 | 2 | 3 | 1, 2 |
| Power Range Neutron Flux (Low) | 4 | 2 | 3 | 1, 2 |
| Intermediate Range Neutron Flux | 2 | 1 | 1 | 1, 2 |
| Source Range Neutron Flux | 2 | 1 | 1 | 3, 4, 5 |
| Overtemperature Delta-T | 4 | 2 | 3 | 1, 2 |
| Overpower Delta-T | 4 | 2 | 3 | 1, 2 |
| Pressurizer Pressure — Low | 4 | 2 | 3 | 1, 2 |
| Pressurizer Pressure — High | 4 | 2 | 3 | 1, 2 |
| Pressurizer Water Level — High | 3 | 2 | 2 | 1 |
| Loss of Flow (per loop) | 3/loop | 2/loop | 2/loop | 1 |
| SG Water Level Lo-Lo (per SG) | 3/SG | 2/SG | 2/SG | 1, 2 |
| Undervoltage — RCPs | 1/bus | 1/bus x 2 | 1/bus x 2 | 1 |
| Underfrequency — RCPs | 1/bus | 1/bus x 2 | 1/bus x 2 | 1 |
| Turbine Trip (Auto Stop Oil) | 3 | 2 | 2 | 1 |

---

## 3/4.3.2 — ESF Actuation System Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.2.1</div>
The ESFAS instrumentation channels and interlocks shown in Table 3.3-3 shall be OPERABLE with their trip setpoints set consistent with the values shown in Table 3.3-4.
</div>

### ESF Actuation Setpoints (Table 3.3-4) — Complete

#### 1. Safety Injection

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual Initiation | N/A | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High | ≥<span class="val-trip">4.0 psig</span> | ≥4.5 psig | TS T3.3-4 |
| Pressurizer Pressure — Low | ≤<span class="val-trip">1765 psig</span> | ≤1755 psig | TS T3.3-4 |
| Differential Pressure Between Steam Lines — High | ≥<span class="val-trip">100 psi</span> | ≥112 psi | TS T3.3-4 |
| Steam Flow High (2 lines) coincident with Tavg Lo-Lo | ≥40% steam flow function; Tavg ≤<span class="val-trip">543°F</span> | ≥44% function; Tavg ≤541°F | TS T3.3-4 |
| Steam Flow High coincident with Steam Line Pressure Low | ≤<span class="val-trip">600 psig</span> steam line pressure | ≤579 psig | TS T3.3-4 |

#### 2. Containment Spray

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual Initiation | N/A | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High-High | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |

#### 3. Containment Isolation

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Phase A — Manual | N/A | N/A | TS T3.3-4 |
| Phase A — From Safety Injection | N/A (auto on SI) | N/A | TS T3.3-4 |
| Phase B — Manual | N/A | N/A | TS T3.3-4 |
| Phase B — Containment Pressure Hi-Hi | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |
| Containment Ventilation Isolation — Manual | N/A | N/A | TS T3.3-4 |
| Containment Ventilation Isolation — Gaseous Radioactivity High | Per Table 3.3-6 | Per Table 3.3-6 | TS T3.3-4 |

#### 4. Steam Line Isolation

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual | N/A (1/steam line) | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High-High | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |
| Steam Flow High (2 lines) coincident with Tavg Lo-Lo | ≥40% steam flow function; Tavg ≤<span class="val-trip">543°F</span> | ≥44% function; Tavg ≤541°F | TS T3.3-4 |
| Steam Flow High coincident with Steam Line Pressure Low | ≤<span class="val-trip">600 psig</span> steam line pressure | ≤579 psig | TS T3.3-4 |

#### 5. Turbine Trip and Feedwater Isolation

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Safety Injection | Per Function 1 above | Per Function 1 | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| SG Water Level — High-High | ≤<span class="val-trip">67%</span> NR span (each SG) | ≤68% NR span | TS T3.3-4 |

#### 6. Safeguards Equipment Control System (SEC)

See Functions 1 and 7 for all initiation functions.

#### 7. Undervoltage — Vital Bus

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Loss of Voltage | ≥<span class="val-trip">65%</span> of bus voltage | ≥70% of bus voltage | TS T3.3-4 |
| Sustained Degraded Voltage | ≥<span class="val-trip">94%</span> of bus voltage for ≤15 sec | ≥94.6% for <13 sec | TS T3.3-4 |

#### 8. Auxiliary Feedwater

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| SG Water Level — Lo-Lo | ≥<span class="val-trip">14.0%</span> NR span (each SG) | ≥13.0% NR span | TS T3.3-4 |
| Undervoltage — RCP | ≥<span class="val-trip">70%</span> RCP bus voltage | ≥65% RCP bus voltage | TS T3.3-4 |
| Safety Injection | See Function 1 | See Function 1 | TS T3.3-4 |
| Trip of Main Feedwater Pump | N/A | N/A | TS T3.3-4 |
| Station Blackout | See Functions 6 and 7 | See Functions 6 and 7 | TS T3.3-4 |

#### 9. Semiautomatic Transfer to Recirculation

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| RWST Level — Low | <span class="val-trip">15.25 ft</span> above instrument taps | 15.25 ±1 ft above taps | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |

### ESF Channels and Actions (Table 3.3-3, Selected)

| Function | Total Channels | To Trip | Min OPERABLE | Modes | Action |
|----------|---------------|---------|--------------|-------|--------|
| SI — Manual | 2 | 1 | 2 | 1,2,3,4 | 18 |
| SI — Containment Pressure Hi | 3 | 2 | 2 | 1,2,3 | 19 |
| SI — PZR Pressure Low | 3 | 2 | 2 | 1,2,3 | 19 |
| SI — Differential Steam Pressure Hi | 3/line | 2/line | 2/line | 1,2,3 | 19 |
| Containment Spray — Hi-Hi Pressure | 4 | 2 | 3 | 1,2,3 | 16 |
| Phase B Isolation — Hi-Hi Pressure | 4 | 2 | 3 | 1,2,3,4 | 16 |
| Steam Line Isolation — Hi-Hi Pressure | 4 | 2 | 3 | 1,2,3 | 16 |
| Turbine Trip/FW Isolation — Hi-Hi SG Level | 3/loop | 2/loop | 2/loop | 1,2,3 | 19 |
| AFW — Lo-Lo SG Level (motor-driven) | 3/SG | 2/SG (any SG) | 2/SG | 1,2,3 | 19 |
| AFW — Lo-Lo SG Level (turbine-driven) | 3/SG | 2/SG (any 2 SGs) | 2/SG | 1,2,3 | 19 |
| RWST Level Low | 4 | 2 | 3 | 1,2,3 | 16 |

### ESF Interlocks

| Designation | Condition | Setpoint | Function |
|------------|-----------|----------|----------|
| P-11 | 2/3 PZR pressure channels | ≥1925 psig | Prevents/defeats manual block of SI on low PZR pressure |
| P-12 (increasing Tavg) | 3/4 Tavg channels | 543°F (AV ≤545°F) | Prevents/defeats manual block of SI on high steam flow. Causes steam line isolation on high steam flow. Affects steam dump blocks. |
| P-12 (decreasing Tavg) | 2/4 Tavg channels | 543°F (AV ≥541°F) | Allows manual block of SI on high steam flow and low steam line pressure |

*(TS Table 3.3-3, Amendment No. 310)*

### Action Statements (Table 3.3-3)

| Action | Requirement |
|--------|-------------|
| 13 | 1 channel inoperable: restore within 24 hrs or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs. May bypass 1 channel for 4 hrs for testing. |
| 14 | 1 channel inoperable: may proceed until next CFT, provided inoperable channel placed in trip within 72 hrs |
| 16 | 1 channel inoperable: may proceed, place in bypass. May bypass 1 additional for 12 hrs testing. |
| 17 | Less than min channels: may continue provided containment purge/exhaust valves maintained closed |
| 18 | 1 channel inoperable: restore within 48 hrs or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| 19 | 1 channel inoperable: place in trip within 72 hrs. May bypass for 12 hrs for testing of other channels. |
| 20 | 1 channel inoperable: restore within 24 hrs or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs. May bypass 1 for 4 hrs testing. |
| 21 | 1 less than min channels: restore within 72 hrs |
| 23 | 1 channel inoperable: restore within 48 hrs or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |

<div class="callout callout-trap">
<div class="callout-label">SI vs Containment Spray Pressure Setpoints</div>
Safety Injection actuates on Hi containment pressure of <span class="val-trip">4.0 psig</span> (2/3 coincidence). Containment Spray and Phase B isolation actuate on Hi-Hi containment pressure of <span class="val-trip">15.0 psig</span> (2/4 coincidence). Steam Line Isolation also actuates on <span class="val-trip">15.0 psig</span> Hi-Hi (2/4). These are different setpoints with different coincidence logic.
</div>

<div class="callout callout-trap">
<div class="callout-label">Motor-Driven vs Turbine-Driven AFW Actuation</div>
Motor-driven AFW pumps start on Lo-Lo level in ANY 1 steam generator (2/3 per SG). Turbine-driven AFW pump starts on Lo-Lo level in ANY 2 steam generators (2/3 per SG in 2 SGs). The turbine-driven pump requires a more severe condition (2 SGs affected) before starting.
</div>

---

## 3/4.3.3 — Monitoring Instrumentation

### Radiation Monitoring (3.3.3.1)

Radiation monitoring instrumentation includes area monitors, process monitors, and effluent monitors required for various modes of operation.

### Remote Shutdown Instrumentation (3.3.3.2)

Instrumentation required for hot shutdown from outside the control room.

### Accident Monitoring Instrumentation (3.3.3.3)

Post-accident monitoring instrumentation per Regulatory Guide 1.97 including RCS pressure, containment pressure, containment radiation level, and other Category 1 variables.

### Power Distribution Monitoring System (3.3.3.5)

Monitors core power distribution for verification of FQ and F-delta-H limits.

---

## Bases

### RTS Instrumentation (3/4.3.1)

The OPERABILITY of the RTS instrumentation ensures that: (1) the associated reactor trip action will be initiated when the parameter monitored by each channel reaches its setpoint, (2) the specified coincidence logic is maintained, and (3) sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance.

### ESF Actuation Instrumentation (3/4.3.2)

The OPERABILITY of the ESFAS instrumentation ensures that: (1) the associated ESF action will be initiated when required, (2) the specified coincidence logic and actuation relay logic are maintained, and (3) sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance consistent with the ACTION requirements.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-3.pdf" target="_blank">View Tech Spec PDF (61 pages — full tables)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-3.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Containment]], [[Containment Spray]], [[AFW]]
- Related exam questions: [[2023 Q82]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
