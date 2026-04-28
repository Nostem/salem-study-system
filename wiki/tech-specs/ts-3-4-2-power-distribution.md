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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.2 General</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.2 General</div>

The specifications of this section provide assurance of fuel integrity during <span class="hi-exam">Condition I (Normal Operation) and Condition II (Incidents of Moderate Frequency) events</span> by:

- (a) Meeting the DNB Design Criteria during normal operation and short-term transients
- (b) Limiting fission gas release, fuel pellet temperature, and cladding mechanical properties to within assumed design criteria

In addition, <span class="hi-exam">limiting the peak linear power density during Condition I events provides assurance that the initial conditions assumed for the LOCA analyses are met and the <span class="hi">ECCS acceptance criteria limit of 2200°F</span> is not exceeded</span>.

**Hot channel factor definitions:**

- <span class="hi-exam">**FQ(Z)** — Heat Flux Hot Channel Factor: the maximum local heat flux on the surface of a fuel rod at core elevation Z divided by the average fuel rod heat flux, allowing for manufacturing tolerances on fuel pellets and rods</span>
- <span class="hi-exam">**F<sup>N</sup><sub>ΔH</sub>** — Nuclear Enthalpy Hot Channel Factor: the ratio of the integral of linear power along the rod with the highest integrated power to the average rod power</span>
- <span class="hi-exam">**Fxy(Z)** — Radial Peaking Factor: the ratio of peak power density to average power density in the horizontal plane at core elevation Z</span>

*(Amendment No. 197)*
</div>
</details>

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

AFD limits assure that the <span class="hi">FQ(Z) upper bound envelope</span> specified in the COLR times the normalized axial peaking factor is not exceeded during either normal operation or xenon redistribution following power changes.

**Target flux difference** is defined at equilibrium xenon conditions with part-length control rods withdrawn from the core. Full-length rods may be positioned within the core in accordance with their respective insertion limits and should be inserted near their normal position for steady-state operation at high power. The value obtained under these conditions divided by the fraction of RTP is the target flux difference at RTP for the associated burnup conditions. The target flux difference varies slowly with core burnup and is periodically updated to reflect burnup considerations.

**Penalty deviation system:** During rapid power reductions, control rod motion causes AFD to deviate outside the target band at reduced power levels. This deviation will not affect xenon redistribution sufficiently to change the peaking factor envelope on a subsequent return to RTP provided the time duration is limited:

- <span class="hi-exam">50–90% RTP: 1-hour penalty deviation limit cumulative during the previous 24 hours</span> for operation outside the target band but within COLR limits
- <span class="hi-exam">15–50% RTP: 2-hour actual time penalty</span> — deviations at these lower power levels are less significant

**Monitoring:** Provisions for monitoring AFD are derived from the plant nuclear instrumentation system through the AFD Monitor Alarm. <span class="hi-exam">A control room recorder continuously displays the auctioneered high flux difference and the target band limits as a function of power level.</span> An alarm is received any time the auctioneered high flux difference exceeds the target band limits. Time outside the target band is graphically presented on the strip chart.

**Target flux difference measurement:** Accomplished by measuring the power distribution when the core is at equilibrium xenon conditions, preferably at high power levels with the control banks nearly withdrawn. This measurement provides the equilibrium xenon axial power distribution from which the target value can be determined. Alternatively, linear interpolation between the most recent measurement and a predicted end-of-cycle value provides a reasonable update because AFD changes due to burnup tend toward 0% AFD.

*(Amendment No. 289)*
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

The limits on heat flux hot channel factor and RCS flow rate ensure that: (1) <span class="hi-exam">design limits on peak local power density and minimum DNBR are not exceeded</span>, and (2) <span class="hi-exam">in the event of a LOCA the peak fuel clad temperature will not exceed the <span class="hi">2200°F</span> ECCS acceptance criteria limit</span>.

FQ(Z) is measurable but will normally only be determined periodically as specified in SR 4.2.2. This periodic surveillance is sufficient to insure that limits are maintained provided:

- (a) Control rods in a single group move together with no individual rod insertion differing from the group demand position by more than the allowed rod misalignment
- (b) Control rod groups are sequenced with overlapping groups as described in Spec 3.1.3.5
- (c) The control rod insertion limits of Specs 3.1.3.4 and 3.1.3.5 are maintained
- (d) The axial power distribution, expressed in terms of AFD, is maintained within the limits

**FQ measurement uncertainties:** When an FQ measurement is taken, both experimental error and manufacturing tolerance must be allowed for:

- <span class="hi-exam"><span class="hi">5%</span> allowance for a full core map taken with the incore detector flux mapping system</span>
- <span class="hi-exam"><span class="hi">3%</span> allowance for manufacturing tolerance</span>
- For measurements obtained using the Power Distribution Monitoring System (PDMS), the appropriate measurement uncertainty is determined using the methodology contained in <span class="hi">WCAP-12472-P-A</span>. The cycle and plant uncertainty calculation information needed to support the PDMS calculation is contained in the COLR. The PDMS will automatically calculate and apply the correct measurement uncertainty, and apply a 3% allowance for manufacturing tolerance.

**Fxy(Z) evaluation:** The radial peaking factor Fxy(Z) is measured periodically to provide assurance that FQ(Z) remains within its limit. The Fxy limit for RTP (F<sup>RTP</sup><sub>xy</sub>) is provided in the COLR per Spec 6.9.1.9 and was determined from expected power control maneuvers over the full range of burnup conditions. Core plane regions applicable to an Fxy evaluation exclude the following (measured in percent of core height from bottom of fuel):

- <span class="hi-exam">(a) Lower core region: 0% to 8% inclusive</span>
- <span class="hi-exam">(b) Upper core region: 92% to 100% inclusive</span>
- <span class="hi-exam">(c) Grid plane regions: ±2% inclusive</span>
- <span class="hi-exam">(d) Core plane regions within ±2% of core height (±2.88 inches) about the bank demand position of bank D control rods</span>

*(Amendment No. 218, TSBC S2015-072)*
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

The limits on nuclear enthalpy hot channel factor ensure that design limits on minimum DNBR are not exceeded. Like FQ, F<sup>N</sup><sub>ΔH</sub> is measurable but normally only determined periodically per SR 4.2.3, subject to the same four periodic surveillance conditions (rod alignment, group sequencing, insertion limits, and AFD limits).

**Power-dependent relaxation:** The relaxation in F<sup>N</sup><sub>ΔH</sub> as a function of THERMAL POWER allows changes in the radial power shape for all permissible rod insertion limits. F<sup>N</sup><sub>ΔH</sub> will be maintained within its limits provided the four surveillance conditions are maintained.

**F<sup>N</sup><sub>ΔH</sub> measurement uncertainty:** The specified limit contains an <span class="hi-exam"><span class="hi">8% allowance</span> for uncertainties</span>, which means normal operation will result in F<sup>M</sup><sub>ΔH</sub> ≤ F<sup>RTP</sup><sub>ΔH</sub>, where F<sup>RTP</sup><sub>ΔH</sub> is the limit at RTP specified in the COLR. The 8% allowance is based on:

- <span class="hi-exam">(a) Abnormal perturbations in the radial power shape (e.g., rod misalignment) affect F<sup>N</sup><sub>ΔH</sub> more directly than FQ</span>
- <span class="hi-exam">(b) Although rod movement has a direct influence upon limiting FQ to within its limit, such control is not readily available to limit F<sup>N</sup><sub>ΔH</sub></span>
- (c) Errors in prediction for control power shape detected during startup physics testing can be compensated for in FQ by restricting axial flux distributions; this compensation for F<sup>N</sup><sub>ΔH</sub> is less rapidly available

For measurements obtained using PDMS, the appropriate measurement uncertainty is determined using the methodology contained in <span class="hi">WCAP-12472-P-A</span>. The cycle and plant specific uncertainty information is contained in the COLR. The PDMS will automatically calculate and apply the correct measurement uncertainty to the measured F<sup>N</sup><sub>ΔH</sub>. When using the incore detection system, the experimental error is obtained from the COLR.

*(Amendment No. 218)*
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

The QPTR limit assures that the radial power distribution satisfies the design values used in the power capability analysis. Radial power distribution measurements are made during startup testing and periodically during power operation.

<span class="hi-exam">The limit of <span class="hi">1.02</span> at which corrective action is required provides DNB and linear heat generation rate protection with x-y plane power tilts.</span> <span class="hi-exam">A limiting tilt of <span class="hi">1.025</span> can be tolerated before the margin for uncertainty in FQ is depleted.</span> The limit of 1.02 was selected to provide an allowance for the uncertainty associated with the indicated power tilt.

<span class="hi-exam">The <span class="hi">2-hour</span> time allowance for operation with a tilt condition >1.02 but <1.09 is provided to allow identification and correction of a dropped or misaligned rod.</span> In the event such action does not correct the tilt, <span class="hi-exam">the margin for uncertainty on FQ is reinstated by reducing the power by <span class="hi">3% from RTP for each percent of tilt in excess of 1.0</span></span>.

*(TSBC S2015-072)*
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

<span class="hi-exam">The limits on DNB related parameters assure that each parameter is maintained within the normal steady-state envelope of operation assumed in the transient and accident analyses.</span> The limits are consistent with the initial FSAR assumptions and have been <span class="hi-exam">analytically demonstrated adequate to maintain a minimum DNBR of the design DNBR value throughout each analyzed transient</span>.

The Surveillance Frequency is based on operating experience, equipment reliability, and plant risk and is controlled under the Surveillance Frequency Control Program.

*(Amendment No. 282)*
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-2.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-2.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Manual QPTR surveillance following dropped rod 2D4: calculated QPTR for N42 quadrant upper = <span class="hi-exam">1.041</span>, lower = <span class="hi-exam">1.032</span>, both exceeding the <span class="hi-exam">1.02 limit</span>. Surveillance marked UNSAT, TS LCO 3.2.4 NOT met. QPTR >1.02 but <1.09 → Action a applies: calculate QPTR hourly, restore within <span class="hi-exam">2 hours</span> or reduce power.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q97</div>
LCO 3.2.1 (AFD) action when NOT met at 95% power: reduce power to less than <span class="hi-exam">90% RTP within 15 minutes</span>. Once between 90-50%, reduce to <50% in the next <span class="hi-exam">30 minutes</span>. LCO 3.2.1 power reduction protects the <span class="hi-exam">F<sub>Q</sub>(Z) (Heat Flux Hot Channel Factor)</span> limit in the COLR. <span class="hi-trap">Trap: Radial Peaking Factor (F<sub>XY</sub>) is protected by a different LCO (3.2.3). The three Power Distribution LCOs protect three different hot channel factors: 3.2.1 → F<sub>Q</sub>(Z), 3.2.2 → F<sup>N</sup><sub>ΔH</sub>, 3.2.3 → Radial Peaking Factor.</span>
</div>

## Connections

- Related concepts: [[Rx Vessel & Internals]], [[RCS]]
- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]], [[Control Rod Drive]]
- Related exam questions: [[2018 Q97]], [[2020 Q20]]
- Related JPMs: [[2022 JPM RO-A3]]
- Related exam: [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]]
