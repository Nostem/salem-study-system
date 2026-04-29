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

| Function | Total Channels | Channels to Trip | Min OPERABLE | Applicable Modes | Action |
|----------|---------------|-----------------|--------------|-----------------|--------|
| Power Range Neutron Flux (High) | 4 | 2 | 3 | 1, 2 | 2 |
| Power Range Neutron Flux (Low) | 4 | 2 | 3 | 1, 2 | 2 |
| Power Range High Positive Rate | 4 | 2 | 3 | 1, 2 | 2 |
| Intermediate Range Neutron Flux | 2 | 1 | 2 | 1, 2 | 3 |
| Source Range Neutron Flux (Startup) | 2 | 1 | 2 | 2 | 4 |
| Source Range Neutron Flux (Shutdown, RTBs open) | 2 | 0 | 1 | 3, 4, 5 | 5 |
| Source Range Neutron Flux (Shutdown, RTBs closed) | 2 | 1 | 2 | 3*, 4*, 5* | 7 |
| Overtemperature Delta-T | 4 | 2 | 3 | 1, 2 | 6 |
| Overpower Delta-T | 4 | 2 | 3 | 1, 2 | 6 |
| Pressurizer Pressure — Low | 4 | 2 | 3 | 1, 2 | 6 |
| Pressurizer Pressure — High | 4 | 2 | 3 | 1, 2 | 6 |
| Pressurizer Water Level — High | 3 | 2 | 2 | 1, 2 | 6 |
| Loss of Flow — Single Loop (above P-8) | 3/loop | 2/loop | 2/loop | 1 | 6 |
| Loss of Flow — Two Loops (above P-7, below P-8) | 3/loop | 2/loop | 2/loop | 1 | 6 |
| SG Water Level Lo-Lo (per SG) | 3/SG | 2/SG | 2/SG | 1, 2 | 6 |
| Undervoltage — RCPs | 4 (1/bus) | 1/bus x 2 | 3 | 1 | 6 |
| Underfrequency — RCPs | 4 (1/bus) | 1/bus x 2 | 3 | 1 | 6 |
| Turbine Trip — Low Auto Stop Oil (above P-9) | 3 | 2 | 2 | 1 | 6 |
| Turbine Trip — Stop Valve Closure (above P-9) | 4 | 4 | 3 | 1 | 6 |
| Safety Injection Input from ESF | 2 | 1 | 2 | 1, 2 | 10 |
| Reactor Trip Breakers | 2 | 1 | 2 | 1, 2 | 1, 14 |
| Automatic Trip Logic | 2 | 1 | 2 | 1, 2 | 10 |

\* With the reactor trip system breakers closed and the control rod drive system capable of rod withdrawal.

### Action Statements (Table 3.3-1)

| Action | Requirement |
|--------|-------------|
| 1 | 1 less than min channels OPERABLE (RTB): restore within 24 hrs or HOT STANDBY in 6 hrs. May bypass 1 channel for 4 hrs for testing provided the other channel is OPERABLE. |
| 2 | 1 less than total channels: place inoperable channel in tripped condition within 72 hrs. Min channels must be met; may bypass for 12 hrs for testing. Either restrict power to ≤75% RTP and reduce PR NF trip setpoint to ≤85% RTP within 4 hrs, or monitor QPTR every 12 hrs. Verify QPTR consistent with normalized symmetric power distribution every 12 hrs above 75% RTP. |
| 3 | (a) 1 less than min channels: reduce power below P-10 or increase above P-6 within 24 hrs. (b) 2 less than min channels: immediately suspend positive reactivity additions and reduce power below P-6 within 2 hrs. |
| 4 | (a) 1 less than min channels: immediately suspend positive reactivity additions. (b) 2 less than min channels: immediately open reactor trip breakers. |
| 5 | 1 less than min channels: verify SHUTDOWN MARGIN per Spec 3.1.1.1 or 3.1.1.2 within 1 hr and every 12 hrs thereafter. |
| 6 | 1 less than total channels: place inoperable channel in tripped condition within 72 hrs. Min channels must be met; may bypass for 12 hrs for testing. |
| 7 | (a) 1 less than min channels: restore within 48 hrs or fully insert all rods and place CRDS incapable of rod withdrawal within next hour. (b) 2 less than min channels: immediately open reactor trip breakers. |
| 10 | 1 less than min channels OPERABLE: restore within 24 hrs or HOT STANDBY in 6 hrs. May bypass 1 channel for 4 hrs for testing provided the other channel is OPERABLE. |
| 11 | Less than min channels: may continue provided inoperable channel placed in tripped condition within 72 hrs. |
| 12 | 1 less than min channels (Manual Trip): restore within 48 hrs or HOT STANDBY in 6 hrs and/or open reactor trip breakers. |
| 13 | 1 less than min channels OPERABLE: restore within 48 hrs or open reactor trip breakers within next hour. |
| 14 | 1 diverse trip feature (UV or shunt trip) inoperable on RTB: restore within 48 hrs or declare breaker inoperable and HOT STANDBY in 6 hrs. Breaker shall not be bypassed while diverse trip feature is inoperable except for maintenance to restore. |

*(TS Table 3.3-1 Action Statements, Amendment Nos. 310, 316)*

<div class="callout callout-trap">
<div class="callout-label">Action 2 vs Action 6 — Power Range vs Other RTS Functions</div>
Action 2 applies only to Power Range Neutron Flux channels and includes <span class="hi-exam">additional requirements</span> beyond placing the channel in trip: either restrict power to ≤75% RTP with a reduced trip setpoint, or monitor QPTR every 12 hours. Action 6 applies to most other RTS functions (OT Delta-T, OP Delta-T, pressurizer, loss of flow, SG level, undervoltage, underfrequency, turbine trip) and only requires placing the inoperable channel in the tripped condition within 72 hours. <span class="hi-trap">Trap: Action 2 and Action 6 both allow 72 hours to trip the channel, but Action 2 has the power restriction / QPTR monitoring requirement that Action 6 does not.</span>
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.1 RTS Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.1</div>

**OPERABILITY Requirements**

The OPERABILITY of the protective instrumentation systems and interlocks ensures that: (1) the associated reactor trip will be initiated when the parameter monitored by each channel or combination thereof exceeds its setpoint, (2) the specified coincidence logic and sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance consistent with maintaining an appropriate level of reliability, and (3) sufficient system functional capability is available from diverse parameters. <span class="hi-exam">The integrated operation of each of these systems is consistent with the assumptions used in the accident analyses.</span>

**Trip Setpoint Methodology**

<span class="hi-exam">Trip Setpoints are the nominal values at which the bistables are set. Any bistable is considered properly adjusted when the "as-left" value is within the band for CHANNEL CALIBRATION accuracy (rack calibration + comparator setting accuracy).</span> The Trip Setpoints are based on the analytical limits stated in the UFSAR. To allow for calibration tolerances, instrumentation uncertainties, instrument drift, and severe environment errors for RPS channels that must function in harsh environments as defined by <span class="hi">10 CFR 50.49</span>, the Trip Setpoints and Allowable Values are conservatively adjusted with respect to the analytical limits. <span class="hi-exam">The methodology is consistent with ISA-S67.04-1982, endorsed via NRC Regulatory Guide 1.105, Rev. 2.</span>

The actual nominal Trip Setpoint entered into the bistable is more conservative than the Allowable Value to account for changes in random measurement errors detectable by a CHANNEL FUNCTIONAL TEST (e.g., drift during the surveillance interval). <span class="hi-exam">If the measured setpoint does not exceed the Allowable Value, the bistable is considered OPERABLE.</span> All known uncertainties are factored into each Trip Setpoint determination.

**TSTF-493 Footnotes (Table 4.3-1, Functional Units 5 and 6)**

The as-found tolerance is calculated using <span class="hi-exam">square root sum of the squares (SRSS)</span> combination of rack calibration accuracy, rack M&TE accuracy, rack comparator setting accuracy, and rack drift. The as-left tolerance uses the same SRSS method but excludes drift. If the as-found setting is outside its tolerance but conservative with respect to the Allowable Value, a channel performance evaluation is required before returning to service. <span class="hi-exam">If the as-left setting cannot be returned to within tolerance of the nominal Trip Setpoint, the channel shall be declared inoperable.</span>

**Surveillance and Testing**

Surveillance and maintenance outage times are determined per <span class="hi">WCAP-10271</span> and supplements. <span class="hi">WCAP-14333-P-A, Rev. 1</span> and <span class="hi">WCAP-15376-P-A, Rev. 1</span> provide the risk-informed basis for increased completion times, bypass test times, and surveillance test intervals for RTS and ESFAS.

<span class="hi-exam">Channel testing in a bypassed condition shall be performed without lifting leads or jumpering bistables.</span> For Power Range Neutron Flux CHANNEL CALIBRATION in Modes 1 and 2 (Note 17), the SSPS input relays are excluded when the installed bypass test capability is used, to reduce the potential for inadvertent reactor trip. The SSPS input relays must be included at least once every <span class="hi">18 months</span>. The same exclusion applies to CHANNEL FUNCTIONAL TEST for Power Range Neutron Flux and High Positive Rate (Note 18).

**Response Time Verification**

Response time verification provides assurance that reactor trip actuation is completed within the time assumed in the safety analysis. <span class="hi-exam">Response time acceptance criteria have been relocated to UFSAR Section 7.2 tables and 7.3 tables.</span> Response time may be verified by actual response time tests (sequential, overlapping, or total channel measurements) or by summation of allocated sensor response times with actual tests on the remainder of the channel. <span class="hi">WCAP-13632-P-A, Rev. 2</span> provides the basis for using allocated sensor response times for specific sensors. The allocation must be verified prior to placing a component in service and re-verified after maintenance that may adversely affect response time.

**Intermediate Range Neutron Flux Trip**

<span class="hi-exam">The IR trip provides protection against uncontrolled RCCA bank rod withdrawal from a subcritical condition during startup, providing redundant protection to the Power Range Neutron Flux Low Setting trip.</span> In Mode 1 below P-10 and in Mode 2 above P-6, the IR trip must be OPERABLE. Above P-10, the PR High Setpoint provides protection. Below P-6 in Mode 2, the Source Range trip provides protection. In Modes 3, 4, or 5, the IR trip is not required because control rods must be fully inserted and only shutdown rods may be withdrawn.

Action times: one inoperable IR channel allows <span class="hi">24 hours</span> for a slow, controlled power adjustment above P-10 or below P-6. <span class="hi-exam">If both IR channels are inoperable between P-6 and P-10, immediately suspend positive reactivity additions and reduce power below P-6 within 2 hours.</span>

**Source Range Neutron Flux Trip**

In Mode 2 below P-6, two OPERABLE SR channels ensure no single random failure disables the trip. <span class="hi-exam">If one SR channel is inoperable in Mode 2, immediately suspend positive reactivity additions.</span> If both SR channels are inoperable, the RTBs must be immediately opened. In Modes 3, 4, and 5 with RTBs closed and CRDS capable of rod withdrawal, one inoperable SR channel requires restoration within <span class="hi">48 hours</span> or all rods fully inserted and CRDS incapable of rod withdrawal within the next hour. <span class="hi-exam">If both SR channels are inoperable, RTBs must be immediately opened.</span> With RTBs open and CRDS incapable of rod withdrawal, the SR channels provide flux monitoring only.

*(TS Bases B 3/4 3-1 through B 3/4 3-1c, Amendment Nos. 294, 306, 316, 321)*
</div>
</details>

---

## 3/4.3.2 — ESF Actuation System Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.2.1</div>
The ESFAS instrumentation channels and interlocks shown in Table 3.3-3 shall be OPERABLE with their trip setpoints set consistent with the values shown in Table 3.3-4.
</div>

### ESF Actuation Setpoints (Table 3.3-4) — Complete

<div class="esf-function">

#### 1. Safety Injection

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual Initiation | N/A | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High | ≥<span class="val-trip">4.0 psig</span> | ≥4.5 psig | TS T3.3-4 |
| Pressurizer Pressure — Low | ≤<span class="val-trip">1765 psig</span> | ≤1755 psig | TS T3.3-4 |
| Differential Pressure Between Steam Lines — High | ≥<span class="val-trip">100 psi</span> | ≥112 psi | TS T3.3-4 |
| Steam Flow High (2 lines) coincident with Tavg Lo-Lo | ≥40% steam flow function; Tavg ≤<span class="val-trip">543°F</span> | ≥44% function; Tavg ≤541°F | TS T3.3-4 |
| Steam Flow High coincident with Steam Line Pressure Low | ≤<span class="val-trip">600 psig</span> steam line pressure | ≤579 psig | TS T3.3-4 |

<div class="esf-function">

#### 2. Containment Spray

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual Initiation | N/A | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High-High | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |

<div class="esf-function">

#### 3. Containment Isolation

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Phase A — Manual | N/A | N/A | TS T3.3-4 |
| Phase A — From Safety Injection | N/A (auto on SI) | N/A | TS T3.3-4 |
| Phase B — Manual | N/A | N/A | TS T3.3-4 |
| Phase B — Containment Pressure Hi-Hi | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |
| Containment Ventilation Isolation — Manual | N/A | N/A | TS T3.3-4 |
| Containment Ventilation Isolation — Gaseous Radioactivity High | Per Table 3.3-6 | Per Table 3.3-6 | TS T3.3-4 |

<div class="esf-function">

#### 4. Steam Line Isolation

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Manual | N/A (1/steam line) | N/A | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| Containment Pressure — High-High | ≤<span class="val-trip">15.0 psig</span> | ≤16.0 psig | TS T3.3-4 |
| Steam Flow High (2 lines) coincident with Tavg Lo-Lo | ≥40% steam flow function; Tavg ≤<span class="val-trip">543°F</span> | ≥44% function; Tavg ≤541°F | TS T3.3-4 |
| Steam Flow High coincident with Steam Line Pressure Low | ≤<span class="val-trip">600 psig</span> steam line pressure | ≤579 psig | TS T3.3-4 |

<div class="esf-function">

#### 5. Turbine Trip and Feedwater Isolation

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Safety Injection | Per Function 1 above | Per Function 1 | TS T3.3-4 |
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| SG Water Level — High-High | ≤<span class="val-trip">67%</span> NR span (each SG) | ≤68% NR span | TS T3.3-4 |

<div class="esf-function">

#### 6. Safeguards Equipment Control System (SEC)

</div>

See Functions 1 and 7 for all initiation functions.

<div class="esf-function">

#### 7. Undervoltage — Vital Bus

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Loss of Voltage | ≥<span class="val-trip">65%</span> of bus voltage | ≥70% of bus voltage | TS T3.3-4 |
| Sustained Degraded Voltage | ≥<span class="val-trip">94%</span> of bus voltage for ≤15 sec | ≥94.6% for <13 sec | TS T3.3-4 |

<div class="esf-function">

#### 8. Auxiliary Feedwater

</div>

| Functional Unit | Trip Setpoint | Allowable Value | Source |
|----------------|---------------|-----------------|--------|
| Automatic Actuation Logic | N/A | N/A | TS T3.3-4 |
| SG Water Level — Lo-Lo | ≥<span class="val-trip">14.0%</span> NR span (each SG) | ≥13.0% NR span | TS T3.3-4 |
| Undervoltage — RCP | ≥<span class="val-trip">70%</span> RCP bus voltage | ≥65% RCP bus voltage | TS T3.3-4 |
| Safety Injection | See Function 1 | See Function 1 | TS T3.3-4 |
| Trip of Main Feedwater Pump | N/A | N/A | TS T3.3-4 |
| Station Blackout | See Functions 6 and 7 | See Functions 6 and 7 | TS T3.3-4 |

<div class="esf-function">

#### 9. Semiautomatic Transfer to Recirculation

</div>

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q88</div>
TS 3.3.2.1 Action 16 applies to Hi-Hi Containment Pressure channels (CS, Phase B, steamline isolation): inoperable channel is placed in <span class="hi-exam">BYPASS (not tripped)</span>. This is because Containment Spray bistables are <span class="hi-exam">energized to actuate</span> — placing an inoperable channel in the tripped condition would move it closer to actuation, increasing the risk of spurious Containment Spray. <span class="hi-trap">Contrast with Action 19 (most other ESF functions): inoperable channels are placed in TRIP because those bistables are de-energized to trip.</span>
</div>

<div class="callout callout-trap">
<div class="callout-label">SI vs Containment Spray Pressure Setpoints</div>
Safety Injection actuates on Hi containment pressure of <span class="val-trip">4.0 psig</span> (2/3 coincidence). Containment Spray and Phase B isolation actuate on Hi-Hi containment pressure of <span class="val-trip">15.0 psig</span> (2/4 coincidence). Steam Line Isolation also actuates on <span class="val-trip">15.0 psig</span> Hi-Hi (2/4). These are different setpoints with different coincidence logic.
</div>

<div class="callout callout-trap">
<div class="callout-label">Motor-Driven vs Turbine-Driven AFW Actuation</div>
Motor-driven AFW pumps start on Lo-Lo level in ANY 1 steam generator (2/3 per SG). Turbine-driven AFW pump starts on Lo-Lo level in ANY 2 steam generators (2/3 per SG in 2 SGs). The turbine-driven pump requires a more severe condition (2 SGs affected) before starting.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.2 ESF Actuation Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.2</div>

**OPERABILITY Requirements**

The OPERABILITY of the ESFAS instrumentation ensures that: (1) the associated ESF action and/or reactor trip will be initiated when the parameter monitored by each channel or combination thereof exceeds its setpoint, (2) the specified coincidence logic and sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance consistent with maintaining an appropriate level of reliability, and (3) sufficient system functional capability is available from diverse parameters. <span class="hi-exam">The OPERABILITY of these systems is required to provide the overall reliability, redundancy, and diversity assumed available in the facility design for protection and mitigation of accident and transient conditions.</span>

**Coincidence Logic Rationale**

The different coincidence logic requirements reflect a graded safety approach: Safety Injection actuates on <span class="hi">2/3</span> containment pressure Hi channels at <span class="hi">4.0 psig</span>, while containment spray and Phase B isolation require <span class="hi">2/4</span> containment pressure Hi-Hi channels at <span class="hi">15.0 psig</span>. <span class="hi-exam">The lower threshold and less restrictive coincidence for SI ensures early protective action, while the higher threshold and more restrictive coincidence for spray and Phase B prevents inadvertent actuation of more severe (and potentially damaging) functions.</span>

**Setpoint Methodology**

The Trip Setpoints and Allowable Values incorporate all known uncertainties applicable to each channel, determined using the same ISA-S67.04-1982 methodology as the RTS. The actual nominal Trip Setpoint is more conservative than the Allowable Value to account for random measurement errors detectable by CHANNEL FUNCTIONAL TEST. <span class="hi-exam">Setpoints in accordance with the Allowable Value ensure the safety analyses demonstrating safety limits are not violated remain valid, provided the unit is operated within the LCOs at the onset of any design basis event.</span>

**Surveillance and Testing**

The surveillance requirements are sufficient to demonstrate overall system functional capability comparable to original design standards. <span class="hi-exam">Surveillance and outage times are based on WCAP-10271 and supplements; completion times and bypass test times were increased per WCAP-14333-P-A, Rev. 1 and WCAP-15376-P-A, Rev. 1 using probabilistic risk analysis.</span> Out of service times maintain an appropriate level of reliability.

**Response Time Verification**

Response time verification ensures the ESF actuation associated with each channel is completed within the time assumed in the safety analysis. The same methods as RTS apply: actual tests (sequential, overlapping, or total channel), or summation of allocated sensor response times with actual tests on the remainder. <span class="hi-exam">The Note 8 response times for feedwater isolation are based on WCAP-16503, Rev. 3 — SGFP trip and FIV closure are credited in containment analyses for LOCA and MSLB in case an FRV fails open.</span>

*(TS Bases B 3/4 3-1 through B 3/4 3-1a, Amendment Nos. 294, 306)*
</div>
</details>

---

## 3/4.3.3 — Monitoring Instrumentation

### Radiation Monitoring Instrumentation (3.3.3.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.3.1</div>
The radiation monitoring instrumentation channels shown in Table 3.3-6 shall be OPERABLE with their alarm/trip setpoints within the specified limits.
</div>

**Applicability:** As shown in Table 3.3-6

**Actions:**
- a. Setpoint exceeding Table 3.3-6 value → adjust within <span class="hi">4 hours</span> or declare inoperable
- b. One or more channels inoperable → take ACTION shown in Table 3.3-6
- c. Specification 3.0.3 is not applicable

**SR 4.3.3.1:** CHANNEL CHECK, SOURCE CHECK, CHANNEL CALIBRATION, and CHANNEL FUNCTIONAL TEST per Surveillance Frequency Control Program

#### Radiation Monitoring Channels (Table 3.3-6)

**1. Area Monitors**

| Instrument | Min Channels | Applicable Modes | Alarm/Trip Setpoint | Measurement Range | Action |
|-----------|-------------|-----------------|--------------------|--------------------|--------|
| Fuel Storage Area | 1 | * | ≤<span class="val-alarm">15 mR/hr</span> | 10⁻¹–10⁴ mR/hr | 23 |

\* With fuel in the storage pool or building.

**2. Process Monitors**

| Instrument | Min Channels | Applicable Modes | Alarm/Trip Setpoint | Measurement Range | Action |
|-----------|-------------|-----------------|--------------------|--------------------|--------|
| Containment Gaseous — Purge & PVR Isolation | 1# | 1, 2, 3, 4 & 5 | per ODCM Control 3.3.3.9 | 10¹–10⁶ cpm | 26 |
| Containment Gaseous — RCS Leakage Detection | 1 | 1, 2, 3 & 4 | N/A | 10¹–10⁶ cpm | 24 |
| Containment Air Particulate — RCS Leakage Detection | 1 | 1, 2, 3 & 4 | N/A | 10¹–10⁶ cpm | 24 |
| Noble Gas — Medium Range Plant Vent | 1 | 1, 2, 3 & 4 | ≤<span class="val-alarm">3.0×10⁻² μCi/cm³</span> (Alarm only) | 10⁻³–10¹ μCi/cm³ | 26 |
| Noble Gas — High Range Plant Vent | 1 | 1, 2, 3 & 4 | ≤<span class="val-alarm">1.0×10² μCi/cm³</span> (Alarm only) | 10⁻¹–10⁵ μCi/cm³ | 26 |
| Noble Gas — Condenser Exhaust | 1 | 1, 2, 3 & 4 | ≤<span class="val-alarm">7.12×10⁴ cpm</span> (Alarm only) | 1–10⁶ cpm | 26 |

\# Plant vent noble gas monitor may also function in this capacity when purge/PVR isolation valves are open.

**3. Control Room**

| Instrument | Min Channels | Applicable Modes | Alarm/Trip Setpoint | Measurement Range | Action |
|-----------|-------------|-----------------|--------------------|--------------------|--------|
| Air Intake — Radiation Level | 2/Intake## | ** | ≤<span class="val-alarm">2.48×10³ cpm</span> | 10¹–10⁷ cpm | 27, 28 |

\#\# Control Room air intakes shared between Unit 1 and 2.
\*\* ALL MODES and during movement of irradiated fuel assemblies and during CORE ALTERATIONS.

#### Radiation Monitoring Action Statements (Table 3.3-6)

| Action | Requirement |
|--------|-------------|
| 23 | Less than min channels: perform area surveys with portable monitoring at least once per 24 hours |
| 24 | Less than min channels: comply with ACTION requirements of Specification 3.4.7.1 |
| 26 | Less than min channels: initiate preplanned alternate method within 72 hours; restore within 7 days or submit Special Report within 14 days |
| 27 | One less than min channels: restore within 7 days or initiate CREACS in pressurization/recirculation mode. Suspend CORE ALTERATIONS and irradiated fuel movement during recirculation mode. |
| 28 | No channels OPERABLE in a CR air intake: immediately initiate CREACS in pressurization/recirculation mode. Suspend CORE ALTERATIONS and irradiated fuel movement during recirculation mode. |

*(Table 3.3-6, Amendment Nos. 245, 253, 278)*

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q96</div>
LCO 3.3.3.1 Table 3.3-6 application during Containment Vacuum Relief (SRO question): <span class="hi-exam">2R12A is the credited monitor</span> for both 2.a.1.a (Containment Gaseous Activity — Purge &amp; PVR Isolation) and 2.a.1.b (Containment Gaseous Activity — RCS Leak Detection). During a Containment Vacuum Relief, <span class="hi-exam">2R41 (Plant Vent Noble Gas) can also be used to meet 2.a.1.a requirements</span> (per TS Bases). With <span class="hi-exam">2R12A AND 2R41D both failed</span>: (1) 2.a.1.b requirement is NOT met → <span class="hi-exam">Action 24</span>, and (2) 2.a.1.a requirement is NOT met (2R12A failed, and 2R41D which was serving as alternate is also failed) → <span class="hi-exam">Action 26</span>. Both actions required. <span class="hi-trap">Trap: candidates may think redundant monitors (2R12B/C or 2R41A/B) satisfy the requirement, but each Table 3.3-6 line item has its own minimum channel requirements. Multiple R12 or R41 channels exist but serve different functions per the bases.</span>
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.3.1 Radiation Monitoring</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.3.1</div>

The OPERABILITY of the radiation monitoring channels ensures that: (1) radiation levels are continually measured in the areas served by the individual channels, and (2) the alarm or automatic action is initiated when the radiation level trip setpoint is exceeded.

<span class="hi-exam">For the postulated Fuel Handling Accident, revised dose calculations using 10 CFR 50.67 and Regulatory Guide 1.183 (Alternative Source Term) do not take credit for automatic containment purge isolation, allowing continuous monitoring of containment activity until containment closure is achieved.</span> If required, containment purge isolation can be initiated manually from the control room.

"Immediate action(s)" in accordance with LCO Action Statements means the required action should be pursued without delay and in a controlled manner.

*(TS Bases B 3/4 3-2, TSBC S2013-057 and Amendment No. 301)*
</div>
</details>

---

### Remote Shutdown Instrumentation (3.3.3.5)

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.3.5</div>
The remote shutdown monitoring instrumentation channels shown in Table 3.3-9 shall be OPERABLE with readouts displayed external to the control room.
</div>

**Applicability:** MODES 1, 2, and 3

**Action:** Restore inoperable channel within <span class="hi">7 days</span> or be in HOT SHUTDOWN within 12 hours.

**SR 4.3.3.5:** CHANNEL CHECK and CHANNEL CALIBRATION per Surveillance Frequency Control Program

#### Remote Shutdown Channels (Table 3.3-9)

| Instrument | Readout Location | Measurement Range | Min Channels OPERABLE |
|-----------|-----------------|-------------------|-----------------------|
| Pressurizer Pressure | Hot Shutdown Panel 213 | 1700–2500 psig | 1 |
| Pressurizer Level | Hot Shutdown Panel 213 | 0–100% | 1 |
| Steam Generator Pressure | Hot Shutdown Panel 213 | 0–1200 psig | 1/steam generator |
| Steam Generator Level | Hot Shutdown Panel 213 | 0–100% | 1/steam generator |

*(Table 3.3-9, Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.3.5 Remote Shutdown Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.3.5</div>

<span class="hi-exam">The OPERABILITY of the remote shutdown instrumentation ensures that sufficient capability is available to permit shutdown and maintenance of HOT STANDBY from locations outside the control room.</span> This capability is required in the event control room habitability is lost and is consistent with <span class="hi">General Design Criterion 19 of 10 CFR 50</span>.

*(TS Bases B 3/4 3-3, Amendment No. 301)*
</div>
</details>

---

### Accident Monitoring Instrumentation (3.3.3.7)

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.3.7</div>
The accident monitoring instrumentation channels shown in Table 3.3-11 shall be OPERABLE.
</div>

**Applicability:** MODES 1, 2, and 3

**Action:** As shown in Table 3.3-11. Separate Condition entry is allowed for each Function.

**SR 4.3.3.7:** CHANNEL CHECK, CHANNEL CALIBRATION, and CHANNEL FUNCTIONAL TEST per Surveillance Frequency Control Program unless otherwise noted in Table 4.3-11

#### Accident Monitoring Channels (Table 3.3-11)

| # | Instrument | Required Channels | Min Channels | Action |
|---|-----------|-------------------|-------------|--------|
| 1 | RCS Outlet Temp — T_HOT (Wide Range) | 2 | 1 | 1, 2 |
| 2 | RCS Inlet Temp — T_COLD (Wide Range) | 2 | 1 | 1, 2 |
| 3 | RCS Pressure (Wide Range) | 2 | 1 | 1, 2 |
| 4 | Pressurizer Water Level | 2 | 1 | 1, 2 |
| 5 | Steam Line Pressure | 2/SG | 1/SG | 1, 2 |
| 6 | SG Water Level (Narrow Range) | 2/SG | 1/SG | 1, 2 |
| 7 | SG Water Level (Wide Range) | 4 (1/SG) | 3 (1/SG) | 1, 2 |
| 8 | RWST Water Level | 2 | 1 | 1, 2 |
| 10 | Auxiliary Feedwater Flow Rate | 4 (1/SG) | 3 (1/SG) | 4, 6 |
| 16 | Containment Pressure — Wide Range | 2 | 1 | 7, 2 |
| 17 | Containment Water Level — Wide Range | 2 | 1 | 7, 2 |
| 18 | Core Exit Thermocouples | 4/core quadrant | 2/core quadrant | 1, 2 |
| 19 | Reactor Vessel Level Instrumentation System (RVLIS) | 2 | 1 | 8, 9 |
| 20 | Containment High Range Accident Radiation Monitor | 2 | 2 | 10 |
| 21 | Main Steamline Discharge (Safety Valves & Atmospheric Steam Dumps) Monitor | 1/MS Line | 1/MS Line | 10 |
| 22 | Wide Range Neutron Flux Monitors | 2 | 1 | 1, 2 |
| 23 | AFW Storage Tank (CST) Water Level | 2 | 1 | 1, 2 |
| 24 | Containment Isolation Valve Position Indication | 2 per penetration flow path (a)(b) | 1/valve (c) | 1, 2 |

(a) Not required for isolation valves whose associated penetration is isolated by at least one closed and deactivated valve, closed manual valve, blind flange, or check valve with flow secured.
(b) Only one position indication channel is required for penetration flow paths with only one installed control room indication channel.
(c) Action 2 not required for penetration flow paths with only one installed control room indication channel.

#### Accident Monitoring Action Statements (Table 3.3-11)

| Action | Requirement |
|--------|-------------|
| 1 | Less than Required channels: restore within <span class="hi">30 days</span> or submit special report per Spec 6.9.4 |
| 2 | Less than Minimum channels: restore within <span class="hi">7 days</span> or HOT STANDBY in 6 hrs + HOT SHUTDOWN in 6 hrs |
| 4 | One less than Required (AFW Flow): may proceed if OPERABLE SG Wide Range Level channel available as alternate for that SG; otherwise restore within 30 days or submit special report |
| 6 | Less than Minimum channels: restore within <span class="hi">7 days</span> or HOT STANDBY in 6 hrs + HOT SHUTDOWN in 6 hrs |
| 7 | One less than Required (Containment instruments): may proceed until next CHANNEL CALIBRATION (performed upon next entry into MODE 5, COLD SHUTDOWN) |
| 8 | One RVLIS channel inoperable: restore within <span class="hi">30 days</span> or submit special report per Spec 6.9.4 |
| 9 | Both RVLIS channels inoperable: restore one within <span class="hi">7 days</span> or submit special report per Spec 6.9.4 |
| 10 | Less than min channels: initiate preplanned alternate method within 72 hours; restore within 7 days or submit Special Report within 14 days |

#### Accident Monitoring Surveillance (Table 4.3-11)

| Instrument | Channel Check | Channel Calibration | Channel Functional Test |
|-----------|--------------|--------------------|-----------------------|
| Items 1–8 (RCS temps, pressure, PZR level, SG level/pressure, RWST level) | Per SFCP | Per SFCP | N.A. |
| AFW Flow Rate | S/U* | Per SFCP | N.A. |
| Containment Pressure/Water Level (Wide Range) | Per SFCP | Per SFCP | N.A. |
| Core Exit Thermocouples | Per SFCP | Per SFCP | N.A. |
| RVLIS | Per SFCP | Per SFCP | N.A. |
| Containment High Range Radiation Monitor | Per SFCP | Per SFCP | Per SFCP |
| Main Steamline Discharge Monitor | Per SFCP | Per SFCP | Per SFCP |
| Wide Range Neutron Flux Monitors | Per SFCP | Per SFCP | N.A. |
| AFW Storage Tank (CST) Level | Per SFCP | Per SFCP | N.A. |
| Containment Isolation Valve Position | Per SFCP | Per SFCP | N.A. |

\* AFW System is used on each startup and flow rate indication is verified at that time.

*(Table 3.3-11, Table 4.3-11, Amendment No. 301)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.3.7 Accident Monitoring Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.3.7</div>

<span class="hi-exam">The OPERABILITY of the accident monitoring instrumentation ensures that sufficient information is available on selected plant parameters to monitor and assess these variables following an accident.</span> This capability is consistent with the recommendations of <span class="hi">Regulatory Guide 1.97</span>, "Instrumentation for Light-Water-Cooled Nuclear Power Plants to Assess Plant Conditions During and Following an Accident" (December 1975) and <span class="hi">NUREG-0578</span>, "TMI-2 Lessons Learned Task Force Status Report and Short-Term Recommendations."

The Wide Range Neutron Flux Monitors are the Gamma-Metrics Post-Accident Neutron Monitors.

*(TS Bases B 3/4 3-3, Amendment No. 301)*
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q47</div>
Per LCO 3.3.3.7, <span class="hi-exam">2PT-403 (RCS Narrow Range Pressure) and 2PT-405 (RCS Wide Range Pressure) ARE credited as accident monitoring instrumentation</span>. They provide input to BOTH the Pressurizer Overpressure Protection System (POPS) <span class="hi-exam">and to the RVLIS Electronics Cabinets</span>. <span class="hi-trap">Trap: POPS is not their only function — they also feed RVLIS.</span>
</div>

---

### Radioactive Liquid Effluent Monitoring Instrumentation (3.3.3.8)

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.3.8</div>
The radioactive liquid effluent monitoring instrumentation channels shown in Table 3.3-12 shall be OPERABLE to ensure that the limits of ODCM Control 3.11.1.1 are not exceeded.
</div>

**Applicability:** At all times

**Actions:**
- b. Less than min channels → take ACTION in Table 3.3-12. Exert best efforts to return within 30 days.
- c. Specification 3.0.3 is not applicable.

**SR 4.3.3.8:** CHANNEL CHECK, SOURCE CHECK, CHANNEL CALIBRATION, and CHANNEL FUNCTIONAL TEST per Surveillance Frequency Control Program

#### Radioactive Liquid Effluent Channels (Table 3.3-12)

| Instrument | Min Channels OPERABLE | Action |
|-----------|----------------------|--------|
| Tank Level Indicating Devices — Temporary Outside Storage Tanks (as required) | 1 | 30 |

**Action 30:** Less than min channels: liquid additions may continue for up to <span class="hi">30 days</span> provided tank liquid level is estimated during all liquid additions.

**Surveillance (Table 4.3-12):** Channel Check daily during liquid additions to tank. If tank level indication not provided, verification by visual inspection. Channel Calibration per SFCP.

*(Table 3.3-12, Table 4.3-12, Amendment Nos. 215, 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.3.8 Radioactive Liquid Effluent Monitoring</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.3.8</div>

The purpose of tank level indicating devices is to assure the detection and control of leaks that, if not controlled, could potentially result in the transport of radioactive materials to unrestricted areas.

*(TS Bases B 3/4 3-3a, Amendment No. 323)*
</div>
</details>

---

### Power Distribution Monitoring System (3.3.3.14)

<div class="callout callout-important">
<div class="callout-label">LCO 3.3.3.14</div>
The Power Distribution Monitoring System (PDMS) shall be OPERABLE with: (a) minimum plant inputs per Table 3.3-14, (b) Core Exit Thermocouples meeting minimum coverage criteria, and (c) an installed PDMS calibration satisfying accuracy criteria.
</div>

**Applicability:** MODE 1, above <span class="hi">25% RTP</span>

**Action:** Correct the deficient operability condition, or declare PDMS inoperable and use incore movable detector system for required core power distribution measurements. Increase measured peaking factors using COLR values for PDMS inoperable condition. Specification 3.0.3 is not applicable.

**PDMS Operability Criteria:**

- **a. Plant Inputs** — minimum valid inputs per Table 3.3-14
- **b. Core Exit Thermocouples:**
  - At least <span class="hi">25%</span> operable T/C with at least 2 T/C per quadrant, AND
  - T/C pattern has coverage of all interior fuel assemblies within a chess knight's move from a responding calibrated T/C; OR
  - At least 25% operable T/C with at least 2 T/C per quadrant, AND installed PDMS calibration within last <span class="hi">31 EFPD</span>
  - T/C temperatures calibrated via cross-calibration with loop RTDs using T/C flow mixing factors
- **c. Installed Calibration:**
  - Initial calibration each cycle: ≥<span class="hi">75%</span> of incore movable detector thimbles at >25% RTP
  - Subsequent calibrations: ≥<span class="hi">50%</span> of incore movable detector thimbles
  - Minimum <span class="hi">2 detector thimbles per core quadrant</span>

#### PDMS Required Plant Inputs (Table 3.3-14)

| Plant Input | Available Inputs | Min Valid Inputs | Applicable Modes |
|------------|-----------------|-----------------|-----------------|
| Control Bank Position (a) | 4 | 4 | 1 (>25% RTP) |
| T_cold | 4 | 2 | 1 (>25% RTP) |
| Reactor Power Level (b) | 3 | 1 | 1 (>25% RTP) |
| NIS Power Range Excore Detector Section Signals (d) | 8 | 6 | 1 (>25% RTP) |

(a) From valid Demand Position or average of valid individual RCCA position indications for all RCCAs in the Control Bank.
(b) From secondary calorimetric, average NIS Power Range Detector Power, or average RCS Loop Delta-T.
(d) Upper and lower detector section signals per Power Range Channel; minimum 3 OPERABLE channels required.

**Surveillance Requirements:**
- **4.3.3.14.1:** Operability criteria verified prior to acceptance of PDMS core power distribution measurement results
- **4.3.3.14.2:** Calibration required per Surveillance Frequency Control Program when minimum T/C number and coverage criteria are satisfied

*(Table 3.3-14, Amendment Nos. 218, 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.3.3.14 Power Distribution Monitoring System (PDMS)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.3.3.14</div>

<span class="hi-exam">The PDMS provides continuous core power distribution measurement using a highly accurate 3-D nodal simulation of the current reactor power distribution.</span> The simulated distribution is continuously adjusted by nodal and thermocouple calibration factors derived from incore power distribution measurements using the incore movable detectors. Nodal calibration factors are updated in accordance with the Surveillance Frequency Control Program.

Between calibrations, the fidelity of the measured power distribution is maintained by adjusting the calibrated distribution using continuously input plant and core condition data. This data is cross-checked using redundant information.

**PDMS Operability Requirements — Four Categories:**

1. Assure an adequate number of operable critical sensors
2. Assure sufficiently accurate calibration of these sensors
3. Assure an adequate calibration database regarding the number of data sets
4. Assure the overall accuracy of the calibration

**Minimum Required Inputs:**

1. Control Bank Positions
2. At least <span class="hi">50%</span> of the cold leg temperatures
3. At least <span class="hi">75%</span> of the power range excore detector channel signals (top and bottom detector sections)
4. Reactor Power Level
5. A minimum number and distribution of operable core exit thermocouples
6. A minimum number and distribution of measured fuel assembly power distribution information from incore movable detectors

<span class="hi-exam">Thermocouple calibration is accomplished in two parts: (1) a sensor-specific correction to K-type thermocouple indications based on cross-calibration to average RCS temperature measured via RTDs under isothermal conditions, and (2) generation of thermocouple flow mixing factors that cause the radial power distribution measured via thermocouples to agree with the distribution from a full core flux map using incore movable detectors.</span> The PDMS uses NIS Power Range excore detectors for axial power distribution information, averaging data from the four detectors and eliminating bad data.

*(TS Bases B 3/4 3-4 through B 3/4 3-5, Amendment No. 282)*
</div>
</details>

<a href="/salem-study-system/ts-pdfs/ts-3-4-3.pdf" target="_blank">View Tech Spec PDF (61 pages — full tables)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-3.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q82</div>
LCO 3.3.1.1 action for PZR Level Channel failure: with 2LT-459 (Channel I PZR Level) failed high at 100% power, the channel must be placed in the <span class="hi-exam">tripped condition within 72 hours</span>. PZR Level — High is a 3-channel trip function (Table 3.3-1) with 2/3 coincidence. When the controlling channel fails high, 22 Backup Heaters <span class="hi-exam">automatically energize</span> due to the +5% level deviation (L_ACTUAL - L_REF).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q89</div>
LCO 3.3.3.1 (Radiation Monitoring Instrumentation) / Table 3.3-6 analysis: <span class="hi-exam">R12A is the credited monitor for BOTH Table 3.3-6 item 2.a.1.a (Containment Gaseous Activity — Purge & Pressure Vacuum Relief Isolation) AND 2.a.1.b (Containment Gaseous Activity — RCS Leak Detection)</span>. During containment vacuum relief operations, <span class="hi-exam">R41 (2R41A, B, D) can serve as alternate monitor for item 2.a.1.a only</span>. With R12A failed: LCO NOT met → <span class="hi-exam">Action 24 ONLY</span> (R41 satisfies 2.a.1.a, but nothing replaces R12A for 2.a.1.b → Action 24). <span class="hi-trap">Trap: candidates may think both Actions 24 AND 26 are required (forgetting R41 can substitute for 2.a.1.a during vacuum relief), or that LCO is met with R12A failed (it is not).</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Containment]], [[Containment Spray]], [[AFW]], [[RVLIS]], [[Radiation Monitoring]]
- Related exam questions: [[2018 Q82]], [[2018 Q89]], [[2019 Q47]], [[2019 Q96]], [[2020 Q88]], [[2020 Q90]], [[2023 Q82]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
