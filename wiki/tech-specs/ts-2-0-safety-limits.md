---
title: "TS 2.0 — Safety Limits and LSSS"
category: tech-specs
status: draft
aliases:
  - safety limits
  - LSSS
  - reactor trip setpoints
  - trip setpoint table
---

# TS 2.0 — Safety Limits and Limiting Safety System Settings

## 2.1 Safety Limits

### Reactor Core (2.1.1)

<div class="callout callout-important">
<div class="callout-label">Safety Limit 2.1.1</div>
The combination of THERMAL POWER, pressurizer pressure, and the highest operating loop coolant temperature (Tavg) shall not exceed the limits shown in Figure 2.1-1 for 4-loop operation.
</div>

**Applicability:** Modes 1 and 2

**Action:** If exceeded, be in Hot Standby within <span class="val-trip">1 hour</span>.

### RCS Pressure (2.1.2)

<div class="callout callout-important">
<div class="callout-label">Safety Limit 2.1.2</div>
RCS pressure shall not exceed <span class="hi">2735 psig</span>.
</div>

**Applicability:** Modes 1, 2, 3, 4, and 5

**Actions:**
- Modes 1 and 2: Be in Hot Standby with RCS pressure within limit within <span class="val-trip">1 hour</span>
- Modes 3, 4, and 5: Reduce RCS pressure to within limit within <span class="val-trip">5 minutes</span>

## 2.2 Reactor Trip System Instrumentation Setpoints (Table 2.2-1)

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
| 12 | Loss of Flow | ≥<span class="val-trip">90%</span> of design flow per loop | ≥89% |
| 13 | SG Water Level — Low-Low | ≥<span class="val-trip">14.0%</span> NR span | ≥13.0% NR span |
| 15 | Undervoltage — RCPs | ≥<span class="val-trip">2900 volts</span> each bus | ≥2850 volts |
| 16 | Underfrequency — RCPs | ≥<span class="val-trip">56.5 Hz</span> each bus | ≥56.4 Hz |
| 17A | Turbine Trip — Low Auto Stop Oil | ≥<span class="val-trip">45 psig</span> | ≥45 psig |
| 17B | Turbine Trip — Stop Valve Closure | ≤<span class="val-trip">15%</span> off full open | ≤15% |

*Design flow is 82500 gpm per loop.*

### OT Delta-T Trip Setpoint (Note 1)

K1 = <span class="hi">1.22</span>, K2 = 0.02037, K3 = 0.001020

T' (reference Tavg at RTP) = <span class="hi">≤577.9°F</span>

P' (indicated RCS nominal operating pressure) = <span class="hi">2235 psig</span>

Lead-lag time constants: τ1 = 30 sec ±10%, τ2 = 4 sec ±10%

f1(delta-I) deadband: -33% to +11%. Beyond deadband: -2.34%/% (negative) and -2.37%/% (positive).

### OP Delta-T Trip Setpoint (Note 2)

K4 = <span class="hi">1.09</span>, K5 = 0.02/°F (increasing Tavg), K6 = 0.00149/°F (T > T")

Rate-lag time constant: τ3 = 10 sec ±10%

f2(delta-I) = 0 for all delta-I

---

## Bases

### Safety Limits

<span class="hi-exam">The reactor core safety limit prevents overheating of the fuel cladding and possible perforation that would release fission products to the reactor coolant.</span> The limit is defined by the DNB design criterion — the combination of power, pressure, and temperature that ensures adequate heat transfer from the fuel cladding to the coolant.

The RCS pressure safety limit of 2735 psig (110% of design pressure of 2485 psig) protects the integrity of the RCS pressure boundary.

### Trip Setpoints

Trip setpoints are set conservatively with respect to the analytical limits used in the FSAR accident analyses. The margin between the trip setpoint and the analytical limit accounts for instrument uncertainties, response times, and environmental effects.

---

<a href="/salem-study-system/ts-pdfs/ts-2-0.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-2.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Instrumentation and Controls]], [[Reactor Coolant System]]
- Related concepts: [[Nuclear Design]], [[Thermal-Hydraulic Design]], [[Accident Analysis]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
