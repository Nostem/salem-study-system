---
title: "Tech Spec Formatting Mockup"
category: tech-specs
status: draft
aliases: []
---

# Tech Spec Formatting Mockup

This page shows two formatting approaches for tech spec articles. Compare them and let me know which reads better, or if you want elements from both.

---

## Option A — Structured with Cards and Color

This approach uses visual formatting to make the TS easy to scan: colored borders for LCO vs Actions vs SRs, the bases integrated after SRs, and key values highlighted.

---

### TS 3/4.1.1.1 — Shutdown Margin (Tavg > 200°F)

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
| 4.1.1.1.1.a | Determine SDM ≥ 1.3% delta k/k | Within 1 hr after detection of inoperable rod, then every 12 hrs while inoperable |
| 4.1.1.1.1.b | Verify control banks within COLR limits (Mode 1, 2 with keff ≥ 1.0) | Per SFCP |
| 4.1.1.1.1.c | Verify predicted critical rod position within COLR limits (Mode 2, keff < 1.0) | Within 4 hrs prior to criticality |

*If inoperable rod is immovable or untrippable, increase required SDM by at least the withdrawn worth of that rod.*

<div class="callout callout-exam">
<div class="callout-label">Bases — Why This Limit Exists</div>

A sufficient SHUTDOWN MARGIN ensures that: (1) the reactor can be made subcritical from all operating conditions, (2) reactivity transients from postulated accidents are controllable, and (3) the reactor is maintained sufficiently subcritical to preclude inadvertent criticality.

The most restrictive condition is at <span class="hi-exam">EOL, with Tavg at no-load operating temperature</span>, associated with a postulated steam line break and resulting uncontrolled RCS cooldown. The minimum 1.3% delta k/k SDM is required to control this transient.

With Tavg ≤ 200°F, cooldown transients from a steam line break are minimal, and 1% delta k/k provides adequate protection (see TS 3/4.1.1.2).
</div>

*\*See Special Test Exception 3.10.1 | Amendment No. 282*

---

## Option B — Clean Prose with Indentation

This approach keeps it closer to how the TS reads on paper, but with better typography and spacing for the dark theme. Less visual chrome, more like reading the actual spec.

---

### TS 3/4.1.1.1 — Shutdown Margin (Tavg > 200°F)

**LIMITING CONDITION FOR OPERATION**

**3.1.1.1** The SHUTDOWN MARGIN shall be greater than or equal to 1.3% delta k/k.

**APPLICABILITY:** MODES 1, 2*, 3, and 4.

**ACTION:**

With the SHUTDOWN MARGIN less than 1.3% delta k/k, immediately initiate and continue boration at ≥ 33 gpm of a solution containing ≥ 6560 ppm boron or equivalent until the required SHUTDOWN MARGIN is restored.

**SURVEILLANCE REQUIREMENTS**

**4.1.1.1.1** The SHUTDOWN MARGIN shall be determined to be greater than or equal to 1.3% delta k/k:

- **a.** Within 1 hour after detection of an inoperable control rod(s) and at least once per 12 hours thereafter while the rod(s) is inoperable. If the inoperable control rod is immovable or untrippable, the required SHUTDOWN MARGIN shall be increased by an amount at least equal to the withdrawn worth of the immovable or untrippable control rod(s).
- **b.** When in MODE 1 or MODE 2 with keff ≥ 1.0, in accordance with the Surveillance Frequency Control Program by verifying that control banks are within the limits in the COLR per Specification 3.1.3.5.
- **c.** When in MODE 2 with keff < 1.0, within 4 hours prior to achieving reactor criticality by verifying that the predicted critical control rod position is within the limits in the COLR per Specification 3.1.3.5.

*\*See Special Test Exception 3.10.1*

**BASES**

A sufficient SHUTDOWN MARGIN ensures that 1) the reactor can be made subcritical from all operating conditions, 2) the reactivity transients associated with postulated accident conditions are controllable within acceptable limits, and 3) the reactor will be maintained sufficiently subcritical to preclude inadvertent criticality in the shutdown condition.

SHUTDOWN MARGIN requirements vary throughout core life as a function of fuel depletion, RCS boron concentration, and RCS Tavg. The most restrictive condition occurs at EOL, with Tavg at no load operating temperature, and is associated with a postulated steam line break accident and resulting uncontrolled RCS cooldown. In the analysis of this accident, a minimum SHUTDOWN MARGIN of 1.3% delta k/k is initially required to control the reactivity transient.

With Tavg ≤ 200°F, the reactivity transients resulting from a postulated steam line break cooldown are minimal and a 1% delta k/k shutdown margin provides adequate protection.

*Amendment No. 282*

---

## Option C — Hybrid

Combines the structured tables and callouts from Option A with the full prose fidelity of Option B. Key values color-coded, but bases presented as prose rather than a callout box.

---

### TS 3/4.1.1.1 — Shutdown Margin (Tavg > 200°F)

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.1.1</div>
The SHUTDOWN MARGIN shall be greater than or equal to <span class="hi">1.3% delta k/k</span>.
</div>

**Applicability:** Modes 1, 2*, 3, and 4

**Action:**

With the SHUTDOWN MARGIN less than <span class="val-trip">1.3% delta k/k</span>, immediately initiate and continue boration at ≥ <span class="val-normal">33 gpm</span> of a solution containing ≥ <span class="val-normal">6560 ppm boron</span> or equivalent until the required SHUTDOWN MARGIN is restored.

**Surveillance Requirements**

**4.1.1.1.1** The SHUTDOWN MARGIN shall be determined to be ≥ 1.3% delta k/k:

- **a.** Within 1 hour after detection of an inoperable control rod(s) and at least once per 12 hours thereafter while the rod(s) is inoperable. If the inoperable control rod is immovable or untrippable, the required SHUTDOWN MARGIN shall be increased by an amount at least equal to the withdrawn worth of the immovable or untrippable control rod(s).
- **b.** When in MODE 1 or MODE 2 with keff ≥ 1.0, per SFCP by verifying control banks within COLR limits per Spec 3.1.3.5.
- **c.** When in MODE 2 with keff < 1.0, within 4 hours prior to criticality by verifying predicted critical rod position within COLR limits per Spec 3.1.3.5.

*\*See Special Test Exception 3.10.1*

### Bases

A sufficient SHUTDOWN MARGIN ensures that: (1) the reactor can be made subcritical from all operating conditions, (2) reactivity transients from postulated accidents are controllable, and (3) the reactor is maintained sufficiently subcritical to preclude inadvertent criticality.

The most restrictive condition occurs at <span class="hi-exam">EOL, with Tavg at no-load operating temperature</span>, associated with a postulated steam line break and resulting uncontrolled RCS cooldown. The minimum <span class="hi">1.3% delta k/k</span> SDM is required to control this transient. This is consistent with FSAR safety analysis assumptions.

With Tavg ≤ 200°F, cooldown transients are minimal — 1% delta k/k provides adequate protection (see TS 3/4.1.1.2).

*Amendment No. 282*

---

## Your Feedback

Which option do you prefer? Or do you want to mix elements from different options? Let me know and I'll delete this mockup page once we decide.

## Connections

- Related: [[TS 3/4.1 — Reactivity Control]]
