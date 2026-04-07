---
title: "TS 3/4.3 — Instrumentation"
category: tech-specs
status: draft
aliases:
  - instrumentation tech specs
  - RTS instrumentation
  - ESF instrumentation
  - monitoring instrumentation
---

# TS 3/4.3 — Instrumentation

This section covers Reactor Trip System instrumentation, ESF Actuation System instrumentation, and monitoring instrumentation. Due to the extensive setpoint tables (61 pages), this article covers the key LCOs and exam-relevant content. See the linked PDFs for complete Table 3.3-1 (RTS), Table 3.3-2 (ESFAS), and associated setpoint tables.

## 3/4.3.1 — Reactor Trip System Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.1.1</div>
The Reactor Trip System instrumentation channels and interlocks shown in Table 3.3-1 shall be OPERABLE with RESPONSE TIMES as shown in Table 3.3-2.
</div>

**Applicability:** As shown for each functional unit in Table 3.3-1

**Key Actions (Table 3.3-1):**

| Condition | Required Action |
|-----------|----------------|
| Channels less than minimum required | Per ACTION statements in Table 3.3-1 (varies by function) |
| Typical single channel inoperable | Place in trip within specified time (usually 6 or 48 hours) |
| Multiple channels inoperable | More restrictive — may require immediate shutdown |

### Minimum Channels and Applicable Modes (Selected Functions)

| Function | Min Channels OPERABLE | Applicable Modes | Action if Inoperable |
|----------|----------------------|-------------------|---------------------|
| Power Range Neutron Flux (High) | 3 | 1, 2 | Place in trip within 6 hrs |
| Power Range Neutron Flux (Low) | 3 | 1, 2 | Place in trip within 6 hrs |
| Intermediate Range Neutron Flux | 1 | 1, 2 | Suspend startup/power increase |
| Source Range Neutron Flux | 1 | 3, 4, 5 | Suspend positive reactivity changes |
| Overtemperature Delta-T | 3 | 1, 2 | Place in trip within 6 hrs |
| Overpower Delta-T | 3 | 1, 2 | Place in trip within 6 hrs |
| Pressurizer Pressure — Low | 3 | 1, 2 | Place in trip within 6 hrs |
| Pressurizer Pressure — High | 3 | 1, 2 | Place in trip within 6 hrs |
| Pressurizer Water Level — High | 3 | 1 | Place in trip within 6 hrs |
| Loss of Flow (per loop) | 3 | 1 | Place in trip within 6 hrs |
| SG Water Level Lo-Lo | 3 per SG | 1, 2 | Place in trip within 6 hrs |
| Undervoltage — RCPs | 1/bus | 1 | Place in trip within 6 hrs |
| Underfrequency — RCPs | 1/bus | 1 | Place in trip within 6 hrs |
| Turbine Trip | 2 | 1 | Place in trip within 6 hrs |

*See Table 2.2-1 in [[TS 2.0 — Safety Limits and LSSS]] for trip setpoint values.*

## 3/4.3.2 — ESF Actuation System Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.2.1</div>
The ESF Actuation System instrumentation channels and interlocks shown in Table 3.3-3 shall be OPERABLE with RESPONSE TIMES as shown in Table 3.3-5.
</div>

**Applicability:** As shown for each functional unit in Table 3.3-3

### ESF Actuation Functions and Setpoints (Selected)

| Function | Setpoint | Channels | Coincidence |
|----------|----------|----------|-------------|
| Safety Injection — Low PZR Pressure | <span class="val-trip">1765 psig</span> | 3 | 2/3 |
| Safety Injection — Hi Containment Pressure | <span class="val-trip">3.0 psig</span> | 3 | 2/3 |
| Containment Spray — Hi-Hi Containment Pressure | <span class="val-trip">18.0 psig</span> | 4 | 2/4 |
| Steam Line Isolation — Hi Steam Flow | See Table 3.3-4 | 2/line | 2/4 lines with Lo-Lo Tavg or Lo steam pressure |
| Steam Line Isolation — Hi-Hi Containment Pressure | <span class="val-trip">18.0 psig</span> | 4 | 2/4 |
| AFW — Lo-Lo SG Level (turbine-driven) | <span class="val-trip">14.0% NR</span> | 3/SG | 2/3 in any 2 SGs |
| AFW — Lo SG Level (motor-driven) | <span class="val-trip">25.0% NR</span> | 3/SG | 2/3 in any SG |
| Feedwater Isolation — Hi-Hi SG Level | <span class="val-trip">78.0% NR</span> | 3/SG | 2/3 |

<div class="callout callout-trap">
<div class="callout-label">SI vs Containment Spray Pressure Setpoints</div>
Safety Injection actuates on Hi containment pressure of <span class="val-trip">3.0 psig</span>. Containment Spray and Phase B isolation actuate on Hi-Hi containment pressure of <span class="val-trip">18.0 psig</span>. Don't confuse these — they are different setpoints with different coincidence logic (2/3 for SI vs 2/4 for spray).
</div>

## 3/4.3.3 — Monitoring Instrumentation

### Radiation Monitoring (3.3.3.1)

Radiation monitoring instrumentation includes area monitors, process monitors, and effluent monitors required for various modes of operation.

### Remote Shutdown Instrumentation (3.3.3.2)

Instrumentation required for hot shutdown from outside the control room.

### Accident Monitoring Instrumentation (3.3.3.3)

Post-accident monitoring instrumentation per Regulatory Guide 1.97 including RCS pressure, containment pressure, containment radiation level, and other Category 1 variables.

---

## Bases

### RTS Instrumentation (3/4.3.1)

<span class="hi-exam">The OPERABILITY of the RTS instrumentation ensures that: (1) the associated reactor trip action will be initiated when the parameter monitored by each channel reaches its setpoint, (2) the specified coincidence logic is maintained, and (3) sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance.</span>

The measurement and test equipment (M&TE) uncertainty used to determine the trip setpoints includes provisions for instrument drift, environmental effects, and calibration uncertainties.

### ESF Actuation Instrumentation (3/4.3.2)

The OPERABILITY of the ESFAS instrumentation ensures that: (1) the associated ESF action will be initiated when required, (2) the specified coincidence logic and actuation relay logic are maintained, and (3) sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance consistent with the ACTION requirements.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-3.pdf" target="_blank">View Tech Spec PDF (61 pages)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-3.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Instrumentation and Controls]], [[Emergency Core Cooling Systems]], [[Containment Systems]]
- Related tech specs: [[TS 2.0 — Safety Limits and LSSS]], [[TS 3/4.5 — ECCS]], [[TS 3/4.6 — Containment]]
