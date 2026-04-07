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

---

## Bases

### Shutdown Margin (3/4.1.1.1 and 3/4.1.1.2)

A sufficient SHUTDOWN MARGIN ensures that: (1) the reactor can be made subcritical from all operating conditions, (2) reactivity transients from postulated accidents are controllable, and (3) the reactor is maintained sufficiently subcritical to preclude inadvertent criticality.

SDM requirements vary throughout core life as a function of fuel depletion, RCS boron concentration, and Tavg. <span class="hi-exam">The most restrictive condition occurs at EOL, with Tavg at no-load operating temperature, associated with a postulated steam line break and resulting uncontrolled RCS cooldown.</span> The minimum 1.3% delta k/k is required to control this transient, consistent with FSAR assumptions.

With Tavg ≤ 200°F, steam line break cooldown transients are minimal — 1% delta k/k provides adequate protection.

The ±1% delta k/k core reactivity balance limit is based on engineering judgment. A 1% deviation is larger than expected for normal operation and corresponds to approximately 100 ppm boron concentration difference.

### Moderator Temperature Coefficient (3/4.1.1.3)

The MTC limits ensure this coefficient remains within the conditions assumed in accident and transient analyses. The MTC becomes more negative with burnup as boron concentration decreases. The 300 ppm surveillance limit provides a conservative check near EOL conditions.

### Minimum Temperature for Criticality (3/4.1.1.4)

<span class="hi-exam">The 541°F minimum ensures: (1) MTC is within its analyzed range, (2) protective instrumentation is within normal operating range, (3) P-12 interlock is above its setpoint, (4) pressurizer is capable of being OPERABLE with a steam bubble, and (5) reactor vessel is above its minimum RTNDT temperature.</span>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-1-1.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-1.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Reactor Core and Fuel]], [[Chemical and Volume Control System]], [[Reactor Coolant System]]
- Related concepts: [[Nuclear Design]], [[Reactivity and Reactor Control]]
- Related tech specs: [[TS 3/4.1 — Reactivity Control]]
