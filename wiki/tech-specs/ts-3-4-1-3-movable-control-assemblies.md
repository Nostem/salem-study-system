---
title: "TS 3/4.1.3 — Movable Control Assemblies"
category: tech-specs
status: draft
aliases:
  - movable control assemblies
  - rod insertion limits
  - rod drop time
  - control rod operability
  - rod position indication
---

# TS 3/4.1.3 — Movable Control Assemblies

## Group Height (Rod Alignment)

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.1</div>
All full length rods shall be OPERABLE and positioned within:<br>
- <span class="hi">±18 steps</span> of group demand at ≤85% RTP<br>
- <span class="hi">±12 steps</span> of group demand at >85% RTP<br>
(within 1 hour after rod motion)
</div>

**Applicability:** Modes 1 and 2

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One or more rods immovable or untrippable | Verify SDM per 3.1.1.1; be in Hot Standby | SDM within 1 hr; Hot Standby within 6 hrs |
| >1 rod inoperable or misaligned beyond limits | Be in Hot Standby | Within 6 hrs |
| 1 rod misaligned beyond limits | Align remaining rods to within limits of the misaligned rod, maintaining insertion limits, OR declare rod inoperable and: | Within 1 hr |
| 1 rod declared inoperable (continued operation) | (a) Reevaluate accidents in Table 3.1-1 within 5 days, (b) verify SDM every 12 hrs, (c) verify FQ and F-delta-H within 72 hrs, (d) reduce power to ≤75% RTP within 1 hr and reduce high flux trip to ≤85% within 4 hrs | See individual times |

### Table 3.1-1 — Accidents Requiring Reevaluation for Inoperable Rod

- RCCA Insertion Characteristics
- RCCA Misalignment
- Loss of Reactor Coolant (ECCS actuation)
- Single RCCA Withdrawal at Full Power
- Large Break LOCA
- Major Secondary System Pipe Rupture
- Rod Ejection

*Amendment No. 311*

## Position Indication Systems

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.2.1</div>
Shutdown and control rod position indication (RPI) systems shall be OPERABLE, including analog rod position indicators and group demand counters.
</div>

**Applicability:** Modes 1 and 2

**Key Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Max 1 analog RPI per group inoperable | Determine rod position using PDMS or incore detectors | Every 8 hrs |
| ≥2 analog RPIs per group inoperable | Place rods in manual; verify positions per 8 hrs; restore to max 1 per group inoperable | Within 24 hrs, or Hot Standby in 6 hrs |
| Max 1 group demand indicator per bank inoperable | Verify all analog RPIs OPERABLE and max rod spread ≤18 steps (≤85% RTP) or ≤12 steps (>85% RTP) | Every 8 hrs |

*Amendment No. 311*

## Rod Drop Time

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.3</div>
Rod drop time from 230 steps withdrawn to dashpot entry shall be <span class="hi">≤2.7 seconds</span> from beginning of decay of stationary gripper coil voltage, with Tavg ≥ 541°F and all RCPs operating.
</div>

**Applicability:** Modes 1 and 2

**Action:** Restore drop time to within limit prior to proceeding to Mode 1 or 2. With 3 RCPs operating, restrict power to ≤76% RTP.

**Surveillance:** Measure rod drop time prior to reactor criticality: after each head removal, after maintenance affecting specific rods, and per SFCP.

## Shutdown Rod Insertion Limit

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.4</div>
All shutdown rods shall be <span class="hi">FULLY WITHDRAWN</span>.
</div>

**Applicability:** Modes 1 and 2 (with keff ≥ 1.0)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 shutdown bank ≤10 steps beyond fully withdrawn | Verify control banks within COLR limits; verify SDM | Within 1 hr; restore within 24 hrs or Hot Standby in 6 hrs |
| 1 shutdown rod not fully withdrawn (other reasons) | Fully withdraw OR declare inoperable per 3.1.3.1 | Within 1 hr |

*Amendment No. 311*

## Control Rod Insertion Limit

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.5</div>
Control banks shall be limited in physical insertion as specified in the <span class="hi">COLR</span>.
</div>

**Applicability:** Modes 1 and 2 (with keff ≥ 1.0)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Control bank A, B, or C ≤10 steps beyond COLR limit | Verify shutdown banks fully withdrawn; verify SDM | Within 1 hr; restore within 24 hrs or Hot Standby in 6 hrs |
| Control banks beyond limits (other reasons) | Restore within limits, OR reduce power to allowed fraction, OR be in Hot Standby | Within 2 hrs; or Hot Standby in 6 hrs |

*Amendment No. 311*

---

## Bases

The specifications ensure that: (1) acceptable power distribution limits are maintained, (2) minimum SHUTDOWN MARGIN is maintained, and (3) effects of rod misalignment on accident analyses are limited.

<span class="hi-exam">The maximum rod drop time of 2.7 seconds is consistent with the assumed rod drop time in the accident analyses.</span> Measurement with Tavg >541°F and all RCPs operating ensures representative insertion times during a reactor trip.

Misalignment of a rod requires measurement of peaking factors or a restriction in THERMAL POWER to provide assurance of fuel rod integrity during continued operation.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-1-3.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-1.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Reactor Core and Fuel]], [[Instrumentation and Controls]]
- Related concepts: [[Nuclear Design]], [[Reactivity and Reactor Control]]
