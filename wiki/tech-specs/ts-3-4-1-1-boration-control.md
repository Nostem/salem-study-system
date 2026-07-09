---
title: "TS 3/4.1.1 — Boration Control"
category: tech-specs
status: draft
aliases:
  - shutdown margin
  - SDM
  - MTC
  - minimum temperature for criticality
  - boration control
---

<div class="ts-source-pdfs">
<strong>Source PDFs:</strong> <a href="/salem-study-system/ts-pdfs/ts-3-1.pdf" target="_blank">View TS 3.1 PDF (Full Section)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-1.pdf" target="_blank">View Bases 3.1 PDF</a>
</div>

# TS 3/4.1.1 — Boration Control

## Shutdown Margin — Tavg > 200°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.1.1</div>
The SHUTDOWN MARGIN shall be greater than or equal to <span class="hi">1.3% delta k/k</span>.
</div>

**Applicability:** Modes 1, 2*, 3, and 4

**Action:**

With the SHUTDOWN MARGIN less than <span class="val-trip">1.3% delta k/k</span>, immediately initiate and continue boration at ≥ <span class="val-normal">33 gpm</span> of a solution containing ≥ <span class="val-normal">6560 ppm boron</span> or equivalent until the required SHUTDOWN MARGIN is restored.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.1.1.1.1.a | <span class="hi-exam">Determine SDM ≥ 1.3% delta k/k after inoperable rod detected</span>. If rod is immovable or untrippable, increase required SDM by at least the withdrawn worth of that rod. | <span class="hi-exam">Within 1 hr</span>, then every 12 hrs while inoperable |
| 4.1.1.1.1.b | Verify control banks within COLR limits (Mode 1, 2 with keff ≥ 1.0) | Per SFCP |
| 4.1.1.1.1.c | Verify predicted critical rod position within COLR limits (Mode 2, keff < 1.0) | Within 4 hrs prior to criticality |
| 4.1.1.1.1.d | Consider SDM factors with control banks at max insertion limit | Prior to initial >5% RTP after each fuel loading |
| 4.1.1.1.1.e | Consider: boron concentration, rod position, Tavg, fuel burnup, xenon, samarium | Per SFCP (Modes 3, 4) |
| 4.1.1.1.2 | Compare overall core reactivity balance to predicted values within ±1% delta k/k. Normalize predicted values prior to 60 EFPD after fuel loading. | Per SFCP |

*\*See Special Test Exception 3.10.1 | Amendment No. 282*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.1.1 Shutdown Margin (Tavg > 200°F)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.1.1</div>

A sufficient SHUTDOWN MARGIN ensures that: (1) the reactor can be made subcritical from all operating conditions, (2) reactivity transients from postulated accidents are controllable within acceptable limits, and (3) the reactor is maintained sufficiently subcritical to preclude inadvertent criticality in the shutdown condition.

SDM requirements vary throughout core life as a function of fuel depletion, RCS boron concentration, and Tavg. <span class="hi-exam">The most restrictive condition occurs at EOL, with Tavg at no-load operating temperature, associated with a postulated steam line break accident and resulting uncontrolled RCS cooldown. In the analysis of this accident, a minimum SHUTDOWN MARGIN of 1.3% Δk/k is initially required to control the reactivity transient.</span> The requirement is consistent with FSAR safety analysis assumptions.

<span class="hi-exam">The ±1% Δk/k core reactivity balance limit is based on engineering judgment.</span> A 1% deviation from predicted is larger than expected for normal operation and should be evaluated. Since deviations are normally detected by comparing predicted and measured steady state RCS critical boron concentrations, a 1% Δk/k difference would correspond to approximately <span class="hi">100 ppm</span> boron concentration difference — well within the uncertainty limits for boron concentration sample analysis, so spurious violations are unlikely.

Core reactivity is verified by periodic comparisons of measured and predicted RCS boron concentrations, with other core conditions fixed or stable (control rod position, moderator temperature, fuel temperature, fuel depletion, xenon, and samarium concentration). The surveillance frequency is controlled under the Surveillance Frequency Control Program.

<span class="hi-exam">The predicted reactivity values shall be adjusted (normalized) to correspond to actual core conditions prior to exceeding a fuel burnup of 60 Effective Full Power Days after each fuel loading.</span> This ensures the design predicted core reactivity has been benchmarked against actual core performance early in the cycle. 60 EFPD allows sufficient time for core conditions to reach steady state while preventing operation for a large fraction of the fuel cycle without a benchmark.

</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q91</div>
When control rods go below the Rod Insertion Limit (ROD INSERT LIMIT LO-LO alarm present), <span class="hi-exam">SR 4.1.1.1.b is NOT met</span> because control banks are NOT within the COLR limits. With the SR not met, <span class="hi-exam">LCO 3.1.1.1 is also NOT met</span>. <span class="hi-trap">Trap: the candidate may think LCO 3.1.1.1 is met until a SDM calculation confirms inadequate SDM. But SR 4.1.1.1.b requires verifying control banks are within COLR limits — if they are not, the SR is not met, which means the LCO is not met regardless of actual SDM value.</span> Per the ROD INSERT LIMIT LO-LO Alarm Response Procedure, the crew will perform <span class="hi-exam">S2.OP-SO.CVC-0008 (Rapid Boration) ONLY</span> to restore rods above the RIL. <span class="hi-trap">Raising turbine power is NOT permitted — it would lower TAVG causing automatic rod withdrawal, but the alarm response procedure does not allow this corrective action.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 IP-i</div>
SDM is restored by emergency boration when control rods remain stuck out after a trip. Locally borating the RCS (per AB.CR-0001 Att. 5, Step 10) injects boric acid by opening 1CV175 (Rapid Borate Stop Valve) and raising charging flow to <span class="hi-exam">75 gpm above existing total RCP seal injection flow</span> — the operator action that drives RCS boron concentration up to re-establish the SDM required by LCO 3.1.1.1 with rods not fully inserted.
</div>

---

## Shutdown Margin — Tavg ≤ 200°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.1.2</div>
The SHUTDOWN MARGIN shall be greater than or equal to <span class="hi">1.0% delta k/k</span>.
</div>

**Applicability:** Mode 5

**Action:**

With the SHUTDOWN MARGIN less than <span class="val-trip">1.0% delta k/k</span>, immediately initiate and continue boration at ≥ <span class="val-normal">33 gpm</span> of a solution containing ≥ <span class="val-normal">6560 ppm boron</span> or equivalent until the required SHUTDOWN MARGIN is restored.

*Amendment No. 282*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.1.2 Shutdown Margin (Tavg ≤ 200°F)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.1.2</div>

<span class="hi-exam">With Tavg ≤ 200°F, the reactivity transients resulting from a postulated steam line break cooldown are minimal, and a <span class="hi">1% Δk/k</span> shutdown margin provides adequate protection.</span> The lower SDM requirement reflects the reduced severity of reactivity excursions at cold conditions compared to the EOL condition that governs the 1.3% limit above 200°F.

</div>
</details>

---

## Moderator Temperature Coefficient

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.1.3</div>
The moderator temperature coefficient (MTC) shall be within the limits specified in the COLR. The maximum upper limit shall be <span class="hi">less positive than or equal to 0 delta k/k/°F</span>.
</div>

**Applicability:**
- BOL Limit: Modes 1 and 2* only
- EOL Limit: Modes 1, 2, and 3 only

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| MTC more positive than BOL limit in COLR | Establish and maintain control rod withdrawal limits sufficient to restore MTC. If not restored: | Within 24 hrs, or be in Hot Standby within 6 hrs |
| MTC more negative than EOL limit in COLR | Be in Hot Shutdown | Within 12 hrs |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.1.1.3.a | Measure MTC and compare to BOL limit in COLR | Prior to initial >5% RTP after each fuel loading |
| 4.1.1.3.b | Measure MTC at any power and compare to 300 ppm surveillance limit in COLR | Within 7 EFPD after reaching 300 ppm equilibrium boron |

If the 300 ppm comparison shows MTC more negative than the surveillance limit, remeasure and compare to EOL limit at least once per 14 EFPD for the remainder of the cycle.

*\*With keff ≥ 1.0 | See Special Test Exception 3.10.3 | Amendment No. 197*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.1.3 Moderator Temperature Coefficient</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.1.3</div>

The limitations on MTC are provided to ensure that the value of this coefficient remains within the limiting condition assumed in the accident and transient analyses. <span class="hi-exam">The MTC values of this specification are applicable to a specific set of plant conditions; accordingly, verification of MTC values at conditions other than those explicitly stated will require extrapolation to those conditions in order to permit an accurate comparison.</span>

<span class="hi-exam">The negative MTC value equivalent to the most positive moderator density coefficient (MDC) was obtained by incrementally correcting the MDC used in the FSAR analysis to normal operating conditions.</span> These corrections involved: (1) converting the MDC to its equivalent MTC based on the rate of change of moderator density with temperature at RATED THERMAL POWER conditions, and (2) subtracting from this value the largest differences in MTC observed between EOL (all rods withdrawn) RATED THERMAL POWER conditions and the most adverse conditions of moderator temperature and pressure, rod insertion, axial power skewing, and xenon concentration that can occur in normal operation. These corrections transformed the MDC value used in the FSAR analysis into the limiting EOL MTC value.

<span class="hi-exam">The 300 ppm surveillance limit MTC value represents a conservative value at a core condition of 300 ppm equilibrium boron concentration</span> that is obtained by correcting the limiting EOL MTC for burnup and boron concentration. The surveillance requirements for measurement of MTC at the beginning and near the end of the fuel cycle are adequate to confirm the MTC remains within its limits, since this coefficient changes slowly due principally to the reduction in RCS boron concentration associated with fuel burnup.

</div>
</details>

---

## Minimum Temperature for Criticality

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.1.4</div>
The RCS lowest operating loop temperature (Tavg) shall be greater than or equal to <span class="hi">541°F</span>.
</div>

**Applicability:** Modes 1 and 2 (with keff ≥ 1.0)

**Action:**

With Tavg less than <span class="val-trip">541°F</span>, restore Tavg within <span class="val-alarm">15 minutes</span> or be in Hot Standby within the next <span class="val-alarm">15 minutes</span>.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.1.1.4.a | Verify Tavg ≥ 541°F | Within 15 min prior to criticality |
| 4.1.1.4.b | Verify Tavg ≥ 541°F when critical and Tavg < 551°F with Tavg-Tref Deviation Alarm not reset | At least once per 30 min |

*See Special Test Exception 3.10.3*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.1.4 Minimum Temperature for Criticality</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.1.4</div>

<span class="hi-exam">The 541°F minimum ensures: (1) MTC is within its analyzed range, (2) protective instrumentation is within normal operating range, (3) P-12 interlock is above its setpoint, (4) pressurizer is capable of being OPERABLE with a steam bubble, and (5) reactor vessel is above its minimum RTNDT temperature.</span>

</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q91</div>
A stuck-open TB40 turbine bypass valve during a low-power startup cools the RCS until <span class="hi-exam">auctioneered high RCS Tavg falls below 541&deg;F</span> in Mode 2. TSAS 3.1.1.4 requires Tavg ≥ 541&deg;F; if not restored, the required action is <span class="hi-exam">restore Tavg to ≥541&deg;F within 15 minutes, or be in Hot Standby within the next 15 minutes (open the Rx Trip Breakers)</span>. The correct bases for the 541&deg;F minimum is that <span class="hi-exam">protective instrumentation is within its normal operating range</span> (one of the 5 listed bases). <span class="hi-trap">SDM margin / adequate shutdown margin is NOT one of the 5 bases for the minimum temperature for criticality; the PZR-pressure Tech Spec with a 1-hour restore / 4-hour power-reduction sequence is the wrong LCO and wrong time requirement.</span>
</div>



## Connections

- Related systems: [[Rx Vessel & Internals]], [[CVCS]], [[RCS]]
- Related exam questions: [[2018 Q91]], [[2014 Q91]]
- Related JPMs: [[2012 JPM RO-A1-1]], [[2012 JPM IP-i]]
- Related exam: [[2018 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Operating Exam]]
