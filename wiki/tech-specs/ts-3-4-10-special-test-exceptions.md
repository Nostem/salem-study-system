---
title: "TS 3/4.10 — Special Test Exceptions"
category: tech-specs
status: draft
aliases:
  - special test exceptions
  - physics tests
  - no flow tests
---

# TS 3/4.10 — Special Test Exceptions

## 3/4.10.1 — Shutdown Margin

<div class="callout callout-important">
<div class="callout-label">LCO 3.10.1</div>
The SHUTDOWN MARGIN requirement of Spec 3.1.1.1 may be suspended for measurement of control rod worth and shutdown margin provided the reactivity equivalent to at least the <span class="hi">highest estimated control rod worth</span> is available for trip insertion from OPERABLE control rod(s).
</div>

**Applicability:** Mode 2

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Any rod not fully inserted AND less than required reactivity available for trip | Immediately borate at ≥33 gpm of ≥6560 ppm boron until SDM per 3.1.1.1 restored | Immediately |
| All rods inserted AND reactor subcritical by less than required reactivity | Immediately borate at ≥33 gpm of ≥6560 ppm boron until SDM per 3.1.1.1 restored | Immediately |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.10.1.1 | Determine position of each rod partially or fully withdrawn | Per SFCP |
| 4.10.1.2 | Demonstrate each rod not fully inserted capable of full insertion when tripped from ≥50% withdrawn position | Within 24 hrs prior to reducing SDM below 3.1.1.1 limits |

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.10.1 Shutdown Margin</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.10.1</div>

<span class="hi-exam">This special test exception provides that a minimum amount of control rod worth is immediately available for reactivity control when tests are performed for control rod worth measurement. This exception is required to permit the periodic verification of the actual versus predicted core reactivity condition occurring as a result of fuel burnup or fuel cycling operations.</span>

The exception maintains protection by requiring the reactivity equivalent to at least the highest estimated control rod worth to be available for trip insertion from OPERABLE rods — ensuring the reactor can be shut down even if the most reactive rod is stuck out during measurement. *(Amendment No. 282)*
</div>
</details>

---

## 3/4.10.2 — Group Height, Insertion and Power Distribution Limits

<div class="callout callout-important">
<div class="callout-label">LCO 3.10.2</div>
The group height, insertion and power distribution limits of Specs 3.1.3.1, 3.1.3.4, 3.1.3.5, 3.2.1, and 3.2.4 may be suspended during PHYSICS TESTS provided:<br>
a. THERMAL POWER ≤ <span class="hi">85% RTP</span><br>
b. Limits of Specs 3.2.2 (FQ) and 3.2.3 (F-delta-H) are maintained
</div>

**Applicability:** Mode 1

**Action:** With FQ or F-delta-H limits exceeded while other specs suspended, either: (a) reduce power to satisfy 3.2.2/3.2.3 actions, or (b) be in Hot Standby within 6 hours.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.10.2.1 | Verify power ≤85% RTP | Per SFCP during physics tests |
| 4.10.2.2.a | Perform SR 4.2.2.2 and 4.2.2.3 (FQ measurements) | Per SFCP during physics tests |
| 4.10.2.2.b | Perform SR 4.2.3.1 and 4.2.3.2 (F-delta-H measurements) | Per SFCP during physics tests |

*Note: A 100% RTP limit is permissible during Power Coefficient and Load Swing tests as part of Initial Startup Test Program, with specific conditions on axial offset, Bank D position, and test duration ≤2 hours each, completed before 3000 MWD/MTU.*

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.10.2 Group Height, Insertion and Power Distribution Limits</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.10.2</div>

<span class="hi-exam">This special test exception permits individual control rods to be positioned outside of their normal group heights and insertion limits during PHYSICS TESTS such as those required to: (1) measure control rod worth, and (2) determine the reactor stability index and damping factor under xenon oscillation conditions.</span>

The compensating requirements — power ≤ 85% RTP and maintained FQ/F-delta-H limits — ensure adequate safety margins during testing even with group height, insertion, and power distribution specs suspended. *(Amendment No. 282)*
</div>
</details>

---

## 3/4.10.3 — Physics Tests

<div class="callout callout-important">
<div class="callout-label">LCO 3.10.3</div>
The limitations of Specs 3.1.1.3 (MTC), 3.1.1.4 (min temp for criticality), 3.1.3.1 (group height), 3.1.3.4 (shutdown rod insertion), and 3.1.3.5 (control rod insertion) may be suspended during PHYSICS TESTS provided:<br>
a. THERMAL POWER ≤ <span class="hi">5% RTP</span><br>
b. Intermediate and Power Range trip setpoints set ≤ <span class="hi">25% RTP</span><br>
c. RCS lowest operating loop Tavg ≥ <span class="hi">531°F</span>
</div>

**Applicability:** Mode 2

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Power >5% RTP | Immediately open reactor trip breakers | <span class="val-trip">Immediately</span> |
| Tavg <531°F | Restore within 15 minutes or be in Hot Standby within next 15 minutes | <span class="val-trip">15 minutes</span> |

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.10.3.1 | Verify power ≤5% RTP | Per SFCP during physics tests |
| 4.10.3.2 | CHANNEL FUNCTIONAL TEST on each Intermediate and Power Range channel | Prior to initiating physics tests |
| 4.10.3.3 | Verify Tavg ≥531°F | Per SFCP during physics tests |

<div class="callout callout-trap">
<div class="callout-label">531°F vs 541°F</div>
The minimum temperature for physics tests is <span class="hi">531°F</span> (TS 3.10.3), which is 10°F lower than the normal minimum temperature for criticality of <span class="hi">541°F</span> (TS 3.1.1.4). This relaxation allows low-power physics testing at a slightly lower temperature.
</div>

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.10.3 Physics Tests</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.10.3</div>

<span class="hi-exam">This special test exception permits PHYSICS TESTS to be performed at ≤ 5% of RATED THERMAL POWER with the RCS Tavg slightly lower than normally allowed, so that fundamental nuclear characteristics of the reactor core and related instrumentation can be verified. At times, it is necessary to operate outside normal TS restrictions to accurately measure certain characteristics.</span>

Example: to measure the moderator temperature coefficient (MTC) at BOL, it is necessary to position various control rods at heights not allowed by Specification 3.1.3.5, which may in turn cause RCS Tavg to fall slightly below the minimum temperature of Specification 3.1.1.4 (<span class="hi">541°F</span>). The special test exception allows Tavg as low as <span class="hi">531°F</span> during these low-power physics tests. *(Amendment No. 282)*
</div>
</details>

---

## 3/4.10.4 — No Flow Tests

<div class="callout callout-important">
<div class="callout-label">LCO 3.10.4</div>
The limitations of Spec 3.4.1.1 (all RCS loops in operation) may be suspended during startup and PHYSICS TESTS provided:<br>
a. THERMAL POWER does not exceed <span class="hi">P-7 Interlock Setpoint</span><br>
b. Intermediate and Power Range trip setpoints set ≤ <span class="hi">25% RTP</span>
</div>

**Applicability:** During operation below P-7 Interlock Setpoint

**Action:** With power greater than P-7, immediately open reactor trip breakers.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.10.4.1 | Verify power less than P-7 setpoint | Per SFCP during tests |
| 4.10.4.2 | CHANNEL FUNCTIONAL TEST on each Intermediate, Power Range channel, and P-7 Interlock | Prior to initiating tests |

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.10.4 No Flow Tests</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.10.4</div>

<span class="hi-exam">This special test exception permits reactor criticality under no flow conditions and is required to perform certain startup and PHYSICS TESTS while at low THERMAL POWER levels.</span>

Power is limited below the P-7 interlock setpoint to ensure automatic reactor trips on loss of flow remain available during these tests. *(Amendment No. 282)*
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-10.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-10.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]]
- Related concepts: [[Rx Vessel & Internals]]
