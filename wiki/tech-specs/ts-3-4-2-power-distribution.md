---
title: "TS 3/4.2 — Power Distribution"
category: tech-specs
status: draft
aliases:
  - power distribution limits
  - FQ
  - F delta H
  - axial flux difference
  - AFD
  - QPTR
  - DNB parameters
---

# TS 3/4.2 — Power Distribution Limits

## 3/4.2.1 — Axial Flux Difference (AFD)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.1</div>
The indicated AXIAL FLUX DIFFERENCE shall be maintained within the target band about the target flux difference specified in the COLR.
</div>

**Applicability:** Mode 1 above 50% RTP

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| AFD outside target band, >90% RTP | Restore AFD to target band OR reduce power to <90% RTP | <span class="val-trip">15 minutes</span> |
| AFD outside target band, 50–90% RTP | Continue provided: (1) ≤1 hr penalty deviation cumulative in previous 24 hrs, AND (2) AFD within COLR limits. Otherwise reduce power to <50% RTP and reduce high flux trip to ≤55% RTP | <span class="val-alarm">30 min</span> to reduce power; 4 hrs to reduce trip setpoint |
| AFD outside target band, 15–50% RTP | ½ minute penalty per minute of operation outside band | Cumulative tracking |
| Power increase above 90% RTP | Not permitted unless AFD within target band and penalty deviation satisfied | — |
| Power increase above 50% RTP | Not permitted if penalty deviation >1 hr in previous 24 hrs | — |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.2.1.1.a | Monitor indicated AFD for each OPERABLE excore channel (AFD alarm OPERABLE) | Per SFCP |
| 4.2.1.1.b | Monitor and log AFD for each OPERABLE excore channel (AFD alarm inoperable) | Per SFCP (first 24 hrs), then per SFCP |
| 4.2.1.2 | AFD considered outside target band when ≥2 OPERABLE excore channels indicate outside band | — |
| 4.2.1.3 | Determine target flux difference by measurement | Per SFCP |
| 4.2.1.4 | Update target flux difference | Per SFCP |

*(Amendment No. 289)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2.1 Axial Flux Difference</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2.1</div>
The AFD target band limits power distribution peaking caused by xenon redistribution. The penalty deviation tracking system limits the time the core operates outside optimal conditions while providing operational flexibility. The AFD limits ensure fuel centerline melting does not occur and that the peak local power density during a LOCA remains below the ECCS acceptance criteria (peak clad temp <2200°F).
</div>
</details>

---

## 3/4.2.2 — Heat Flux Hot Channel Factor FQ(Z)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.2</div>
FQ(Z) shall be limited by:<br>
- For P > 0.5: FQ(Z) ≤ FQ<sup>RTP</sup> * K(Z) / P<br>
- For P ≤ 0.5: FQ(Z) ≤ FQ<sup>RTP</sup> * K(Z) / 0.5<br>
Where FQ<sup>RTP</sup> = FQ limit at RTP per COLR, P = fraction of RTP, K(Z) = normalized FQ(Z) vs core height per COLR.
</div>

**Applicability:** Mode 1

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| FQ(Z) exceeds limit | Reduce power ≥1% for each 1% FQ(Z) exceeds limit; reduce Power Range High Flux trip similarly | <span class="val-alarm">15 min</span> power reduction; 4 hrs trip setpoint reduction |
| Continued operation with reduced power | Reduce OP Delta-T trip ≥1% for each 1% FQ(Z) exceeds limit (done from Hot Standby) | Up to 72 hrs total |
| Before increasing power | Identify and correct cause; demonstrate FQ(Z) within limit by core power distribution measurement | Prior to power increase |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.2.2.2.a | Obtain power distribution map using movable incores (when ≤25% but >5% RTP, or when PDMS inoperable). Increase measured FQ by manufacturing and measurement uncertainties per COLR. | As required |
| 4.2.2.2.b | Use PDMS or movable incores when >25% RTP. Increase measured FQ by uncertainties per COLR. | As required |
| 4.2.2.2.c | Compare Fxy computed to Fxy<sup>RTP</sup> limits for appropriate core planes | After measurement |
| 4.2.2.2.d.1 | Remeasure Fxy if above Fxy<sup>RTP</sup> but below Fxy<sup>L</sup> | Within 24 hrs after exceeding by ≥20% RTP, or per SFCP |
| 4.2.2.2.d.2 | Remeasure Fxy if at or below Fxy<sup>RTP</sup> | Per SFCP |

*(Amendment No. 289)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2.2 Heat Flux Hot Channel Factor FQ(Z)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2.2</div>
FQ limits are established in the COLR based on the reload-specific core design and safety analysis. The FQ(Z) limit ensures that the DNB design criterion is met during normal operation and AOOs, and that the peak local power density during a LOCA remains below the ECCS acceptance criteria (peak clad temp <2200°F). The manufacturing and measurement uncertainties applied to measured FQ values account for instrumentation and fabrication tolerances.
</div>
</details>

---

## 3/4.2.3 — Nuclear Enthalpy Rise Hot Channel Factor F-delta-H

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.3</div>
F-delta-H shall be limited by:<br>
F<sub>N</sub><sup>ΔH</sup> ≤ F<sup>RTP</sup><sub>ΔH</sub> [1.0 + P<sub>FΔH</sub> (1.0 - P)]<br>
Where F<sup>RTP</sup><sub>ΔH</sub> = limit at RTP per COLR, P<sub>FΔH</sub> = power factor multiplier per COLR, P = fraction of RTP.
</div>

**Applicability:** Mode 1

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| F-delta-H exceeds limit | (a) Reduce power to <50% RTP; reduce high flux trip to ≤55% RTP | <span class="val-trip">2 hrs</span> power; 4 hrs trip setpoint |
| Continued | (b) Demonstrate F-delta-H within limit by core power distribution measurement | <span class="val-alarm">24 hrs</span> after exceeding, or reduce to <5% RTP in 2 hrs |
| Before increasing power | (c) Identify and correct cause. Demonstrate F-delta-H within limit at 50% RTP, 75% RTP, and within 24 hrs after ≥95% RTP | Prior to power increase |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.2.3.1.a | Obtain core power distribution measurement | Prior to >75% RTP after each fuel loading |
| 4.2.3.1.b | Obtain core power distribution measurement | Per SFCP |
| 4.2.3.2 | Increase measured F-delta-H by applicable uncertainties per COLR | After each measurement |

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2.3 Nuclear Enthalpy Rise Hot Channel Factor F-delta-H</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2.3</div>
F-delta-H limits are established in the COLR based on the reload-specific core design and safety analysis. The F-delta-H limit ensures that the DNB design criterion is met during normal operation and AOOs. The power-dependent formula [1.0 + P<sub>FΔH</sub>(1.0 - P)] allows a higher F-delta-H at reduced power levels because the coolant enthalpy rise is less at lower power, providing additional DNB margin.
</div>
</details>

---

## 3/4.2.4 — Quadrant Power Tilt Ratio (QPTR)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.4</div>
The QUADRANT POWER TILT RATIO shall not exceed <span class="hi">1.02</span>.
</div>

**Applicability:** Mode 1 above 50% RTP

**Actions:**

### Action a: QPTR >1.02 but ≤1.09

| Step | Required Action | Completion Time |
|------|----------------|-----------------|
| a.1 | Calculate QPTR at least once per hour until restored or power <50% RTP | Hourly |
| a.2 | Either restore QPTR to ≤1.02, OR reduce power ≥3% from RTP for each 1% QPTR exceeds 1.0 and reduce high flux trip similarly | <span class="val-alarm">2 hrs</span>; trip setpoint in 4 hrs |
| a.3 | Verify QPTR within limit within 24 hrs, or reduce power <50% RTP and trip setpoint to ≤55% | <span class="val-alarm">24 hrs</span>, or 2 hrs + 4 hrs |
| a.3.b | Identify and correct cause. May increase above 50% if QPTR verified within limit hourly for 12 hrs or until verified at ≥95% RTP | Prior to power increase |

### Action b: QPTR >1.09 due to rod misalignment

| Step | Required Action | Completion Time |
|------|----------------|-----------------|
| b.1 | Calculate QPTR at least once per hour until restored or power <50% RTP | Hourly |
| b.2 | Reduce power ≥3% from RTP for each 1% QPTR exceeds 1.0 | <span class="val-trip">30 minutes</span> |
| b.3 | Verify QPTR within limit, or reduce power <50% RTP and trip setpoint to ≤55% | <span class="val-trip">2 hrs</span>, or 2 hrs + 4 hrs |
| b.4 | Identify and correct cause. May increase above 50% if QPTR verified within limit hourly for 12 hrs | Prior to power increase |

### Action c: QPTR >1.09 due to causes other than rod misalignment

| Step | Required Action | Completion Time |
|------|----------------|-----------------|
| c.1 | Calculate QPTR at least once per hour until restored or power <50% RTP | Hourly |
| c.2 | Reduce power to <50% RTP; reduce high flux trip to ≤55% RTP | <span class="val-trip">2 hrs</span>; 4 hrs |
| c.3 | Identify and correct cause. May increase above 50% if QPTR verified within limit hourly for 12 hrs | Prior to power increase |

<div class="callout callout-trap">
<div class="callout-label">QPTR Action Differences</div>
Action b (rod misalignment, QPTR >1.09) requires power reduction within <span class="val-trip">30 minutes</span> — faster than Action a (2 hours) or Action c (2 hours). This is because a misaligned rod is a known, identified cause that should be addressed quickly. Action c (>1.09, other causes) requires power reduction to <50% RTP because the cause is unknown and potentially more limiting.
</div>

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.2.4.1.a | Calculate QPTR above 50% RTP (alarm OPERABLE) | Per SFCP |
| 4.2.4.1.b | Calculate QPTR during steady-state (alarm inoperable) | Per SFCP |
| 4.2.4.2 | Confirm normalized symmetric power distribution with one Power Range channel inoperable, above 75% RTP | Per SFCP |

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2.4 Quadrant Power Tilt Ratio (QPTR)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2.4</div>
The QPTR limit of 1.02 ensures the core power distribution remains consistent with the assumptions used in the safety analyses. The different action times for QPTR >1.09 reflect the severity and identifiability of the cause — rod misalignment is a known cause with a faster required response (30 minutes), while unknown causes require more conservative action (power reduction to <50% RTP) because the extent of the peaking and its impact on safety limits cannot be readily bounded.
</div>
</details>

---

## 3/4.2.5 — DNB Parameters

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.5</div>
The following DNB parameters shall be maintained within the limits of Table 3.2-1:<br>
a. RCS Tavg<br>
b. Pressurizer Pressure<br>
c. RCS Total Flow Rate
</div>

**Applicability:** Mode 1

**Table 3.2-1 — DNB Parameters (4 loops in operation):**

| Parameter | Limit | Source |
|-----------|-------|--------|
| RCS Tavg | ≤<span class="val-normal">582.9°F</span> | TS T3.2-1 |
| Pressurizer Pressure | ≥<span class="val-normal">2200 psia</span> | TS T3.2-1 |
| RCS Total Flow Rate | ≥<span class="val-normal">341000 gpm</span> | TS T3.2-1 |

*Tavg limit not applicable during power ramp >5% RTP/min or power step >10% RTP. Flow rate includes 2.4% flow uncertainty plus 0.1% measurement uncertainty due to FW venturi fouling. (Amendment No. 197)*

**Action:** With any parameter exceeding its limit, restore within <span class="val-alarm">2 hours</span> or reduce power to <5% RTP within 4 hours.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.2.5.1 | Verify each parameter within limits | Per SFCP |
| 4.2.5.2 | Determine RCS total flow rate by precision heat balance ≥90% RTP, within 24 hrs after steady state | Per SFCP |

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2.5 DNB Parameters</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2.5</div>
The DNB parameter limits ensure that the DNB design criterion is met during normal operation and AOOs. RCS Tavg, pressurizer pressure, and total flow rate are the primary variables that determine the margin to DNB. Maintaining these parameters within limits ensures that the minimum DNBR assumed in the safety analyses is preserved. The precision heat balance surveillance provides a more accurate determination of flow rate than the installed flow instrumentation.
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-2.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-2.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Manual QPTR surveillance following dropped rod 2D4: calculated QPTR for N42 quadrant upper = <span class="hi-exam">1.041</span>, lower = <span class="hi-exam">1.032</span>, both exceeding the <span class="hi-exam">1.02 limit</span>. Surveillance marked UNSAT, TS LCO 3.2.4 NOT met. QPTR >1.02 but <1.09 → Action a applies: calculate QPTR hourly, restore within <span class="hi-exam">2 hours</span> or reduce power.
</div>

## Connections

- Related concepts: [[Rx Vessel & Internals]], [[RCS]]
- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]]
- Related JPMs: [[2022 JPM RO-A3]]
- Related exam: [[2022 NRC Operating Exam]]
