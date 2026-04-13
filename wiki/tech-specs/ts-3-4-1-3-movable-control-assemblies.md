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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.3 Movable Control Assemblies (General)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.3 General</div>

The specifications of this section ensure that: (1) acceptable power distribution limits are maintained, (2) the minimum SHUTDOWN MARGIN is maintained, and (3) the potential effects of rod misalignment on associated accident analyses are limited. OPERABILITY of the control rod position indicators is required to determine control rod positions and thereby ensure compliance with the control rod alignment and insertion limits.

<span class="hi-exam">OPERABLE condition for the analog rod position indicators is defined as being capable of indicating rod position to within the allowed rod misalignment relative to the bank demand position for a range of positions:</span>
- Shutdown Banks and Control Bank A: between <span class="hi">0 and 30 steps withdrawn</span> inclusive, and between <span class="hi">200 and 230 steps withdrawn</span> inclusive (verifying fully withdrawn or fully inserted, the normal operating modes for these banks)
- Control Bank B: between <span class="hi">0 and 30 steps</span> withdrawn inclusive, and between <span class="hi">160 and 230 steps</span> withdrawn inclusive
- Control Banks C and D: between <span class="hi">0 and 230 steps</span> withdrawn

Comparison of the group demand counters to the bank insertion limits with verification of rod position via analog RPIs (after thermal soak after rod motion) is sufficient verification that the control rods are above the insertion limits. <span class="hi-exam">The full out position will be specified in the reload analysis for the cycle and will be administratively controlled within the band established by FULLY WITHDRAWN — this is allowable to minimize RCCA wear, consistent with Information Notice 87-19 and RCCA examinations conducted during Salem Unit 2 Spring 2008 outage (2R16) by AREVA NP (refer to LAR S09-01).</span>

</div>
</details>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.3.1 Group Height (Rod Alignment)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.3.1</div>

<span class="hi-exam">The ACTION statements which permit limited variation from the basic requirements are accompanied by additional restrictions that ensure the original criteria are met. Misalignment of a rod requires measurement of peaking factors or a restriction in THERMAL POWER — either provides assurance of fuel rod integrity during continued operation.</span> The reactivity worth of a misaligned rod is limited for the remainder of the fuel cycle to prevent exceeding the assumption used in the accident analysis.

Control rod positions and OPERABILITY of the rod position indicators are required to be verified per the Surveillance Frequency Control Program, with more frequent verifications required if an automatic monitoring channel is inoperable. The Surveillance Frequency is based on operating experience, equipment reliability, and plant risk.

</div>
</details>

---

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q56</div>
TS 3.1.3.2.1.b bases states: <span class="hi-exam">"either the control console group 1 demand step counter or the plant computer 'bank step' display is sufficient to comply with this specification for group 1 rod position."</span> Only Group 1 demand steps input into the Plant Computer — Group 2 demand position is NOT available on the Plant Computer. When a group demand step counter fails, the Plant Computer can satisfy the channel check surveillance for <span class="hi-trap">Group 1 only</span>.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.3.2.1 Position Indication Systems</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.3.2.1</div>

<span class="hi-exam">The terms "Shutdown Rod Position Indicator," "Analog Rod Position Indicator," "Control Rod Position Indicator," and "Rod Position Indicator" are all used in these bases and all refer to indication driven by the output of the Analog Rod Position Indication (ARPI) system.</span>

One method for determining rod position is the indicators on the control console. An alternate method is the plant computer. <span class="hi-exam">Either the control console indicator or plant computer is sufficient to comply with this specification.</span> The plant computer receives the same ARPI input as the control console indicators and provides equivalent or better resolution. The plant computer provides a digital readout of rod position, eliminating interpolation and parallax errors inherent to analog scales.

Rod demand position is indicated on both the control console and plant computer. The rod demand position is a digital signal (a pulse generated each time the Rod Control System demands a step change). These pulses are "counted" and displayed by the control console group demand step counters. <span class="hi-exam">There are two group demand step counters for each bank of rods, with the exception of shutdown banks C and D.</span>

<span class="hi-exam">Only the group 1 demand position of each rod bank is displayed on the plant computer — only the group 1 pulses are routed to the plant computer.</span> The group 1 demand position on the plant computer is labeled "Cont Bank A Steps" or "S/D Bank A Steps" etc. with no reference to group 1 or group 2. As the plant computer receives the same demand pulses as the control console group demand step counters, the plant computer "bank step" display provides an alternate method of determining group 1 rod demand position.

<span class="hi-exam">Either the control console group 1 demand step counter or the plant computer "bank step" display is sufficient to comply with this specification for group 1 rod demand position. Only the control console group 2 demand counter can be used to comply with the specification for group 2 rod demand.</span>

</div>
</details>

---

## Rod Drop Time

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.3.3</div>
Rod drop time from 230 steps withdrawn to dashpot entry shall be <span class="hi">≤2.7 seconds</span> from beginning of decay of stationary gripper coil voltage, with Tavg ≥ 541°F and all RCPs operating.
</div>

**Applicability:** Modes 1 and 2

**Action:** Restore drop time to within limit prior to proceeding to Mode 1 or 2. With 3 RCPs operating, restrict power to ≤76% RTP.

**Surveillance:** Measure rod drop time prior to reactor criticality: after each head removal, after maintenance affecting specific rods, and per SFCP.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.3.3 Rod Drop Time</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.3.3</div>

<span class="hi-exam">The maximum rod drop time restriction of ≤2.7 seconds is consistent with the assumed rod drop time used in the accident analyses.</span> <span class="hi-exam">Measurement with Tavg >541°F and with all reactor coolant pumps operating ensures that the measured drop times will be representative of insertion times experienced during a reactor trip at operating conditions.</span>

</div>
</details>

---

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

---

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

<a href="/salem-study-system/ts-pdfs/ts-3-4-1-3.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-1.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q20</div>
TS 3.1.3.1 action for more than one rod misaligned: <span class="hi-exam">be in Hot Standby within 6 hours</span>. AB.ROD-0001 implements this TS action. <span class="hi-trap">If only ONE rod is misaligned, the action is different — reduce power to &le;75% RTP within 1 hour (action c.3.d). Do not confuse the 1-rod and >1-rod actions.</span>
</div>

## Connections

- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]], [[Control Rod Drive]]
- Related exam questions: [[2020 Q20]], [[2023 Q56]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
