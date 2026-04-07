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

---

## Bases

### Shutdown Margin (3/4.10.1)

This special test exception provides that a minimum amount of reactivity equivalent to the highest estimated control rod worth is available for trip insertion during rod worth and shutdown margin measurements. This ensures the reactor can be shut down even with the most reactive rod stuck out during these tests.

### Physics Tests (3/4.10.2 and 3/4.10.3)

The special test exceptions permit reactor physics tests to verify core nuclear parameters (MTC, rod worth, boron worth, critical boron concentration) match predictions following refueling. The compensating requirements — reduced power, reduced trip setpoints, and available shutdown capability — ensure adequate safety margins during testing.

The 531°F minimum temperature for low-power physics tests (3.10.3) is lower than the normal 541°F minimum (3.1.1.4) because the physics tests are conducted at very low power (≤5% RTP) where the consequences of a cooldown event are less severe.

### No Flow Tests (3/4.10.4)

Allows measurement of isothermal and power coefficients with fewer than all RCS loops operating. Power is limited below the P-7 interlock to ensure automatic reactor trips on loss of flow remain available.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-10.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-10.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Reactor Core and Fuel]], [[Instrumentation and Controls]]
- Related concepts: [[Nuclear Design]]
