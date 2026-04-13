---
title: "TS 3/4.11 — Radioactive Effluents"
category: tech-specs
status: draft
aliases:
  - radioactive effluents TS
  - liquid holdup tanks
  - explosive gas mixture
---

# TS 3/4.11 — Radioactive Effluents

Most original TS 3/4.11 specifications have been deleted and relocated to the Offsite Dose Calculation Manual (ODCM) and other programs. The remaining active specifications are:

## 3/4.11.1.4 — Liquid Holdup Tanks

<div class="callout callout-important">
<div class="callout-label">LCO 3.11.1.4</div>
The quantity of radioactive material contained in each outdoor temporary tank* shall be limited to ≤ <span class="hi">10 curies</span>, excluding tritium and dissolved or entrained noble gases.
</div>

*Tanks included: outdoor temporary tanks not surrounded by liners, dikes, or walls capable of holding tank contents, and that do not have overflows/drains connected to the liquid radwaste treatment system.

**Applicability:** At all times

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Radioactive material in any tank exceeds 10 curies | Immediately suspend all additions to the tank; reduce contents to within limit | Immediately; <span class="val-alarm">48 hours</span> to reduce |

LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.11.1.4 | Analyze representative sample of tank contents to verify within limit | Per SFCP, when radioactive materials are being added |

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.11.1.4 Liquid Holdup Tanks</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.11.1.4</div>

<span class="hi-exam">The tanks included in this specification are all outdoor tanks that are not surrounded by liners, dikes, or walls capable of holding the tank contents, and that do not have tank overflows and surrounding area drains connected to the liquid radwaste treatment system.</span>

<span class="hi-exam">Restricting the quantity of radioactive material in these tanks to ≤ <span class="hi">10 curies</span> (excluding tritium and dissolved/entrained noble gases) provides assurance that in the event of an uncontrolled release of the tanks' contents, the resulting concentrations would be less than the limits of 10 CFR Part 20, Appendix B, Table II, Column 2, at the nearest potable water supply and the nearest surface water supply in an unrestricted area.</span> *(Amendment No. 215)*
</div>
</details>

---

## 3/4.11.2.5 — Explosive Gas Mixture

<div class="callout callout-important">
<div class="callout-label">LCO 3.11.2.5</div>
The concentration of oxygen in the waste gas holdup system shall be limited to ≤ <span class="hi">2% by volume</span>.
</div>

**Applicability:** At all times*

*Not applicable to portions of the Waste Gas System removed from service for maintenance, provided those portions are isolated and purged of hydrogen to <4% by volume.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Oxygen >2% but ≤4% by volume | Reduce oxygen concentration to ≤2% | <span class="val-alarm">48 hours</span> |
| Oxygen >4% by volume | Immediately suspend all additions of waste gases; reduce oxygen to ≤2% | <span class="val-trip">Immediately</span> |

LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.11.2.5 | Continuously monitor oxygen in waste gas holdup system with oxygen monitor | Continuous |
| (alt) | If oxygen monitor inoperable: grab samples analyzed within 4 hours | Per SFCP |

<div class="callout callout-exam">
<div class="callout-label">Key Concept</div>
The 2% oxygen limit prevents formation of a flammable/explosive gas mixture. Hydrogen is produced by radiolysis of reactor coolant. If hydrogen is not measured, it shall be assumed to exceed 4% by volume. The 4% oxygen threshold escalates the required action from a 48-hour to immediate response.
</div>

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.11.2.5 Explosive Gas Mixture</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.11.2.5</div>

<span class="hi-exam">This specification ensures that the concentration of potentially explosive gas mixtures in the waste gas holdup system is maintained below the flammability limits for hydrogen and oxygen. Maintaining the oxygen concentration below the specified values provides assurance that releases of radioactive materials will be controlled in conformance with General Design Criterion 60 of 10 CFR Part 50, Appendix A.</span>

The <span class="hi">2% oxygen limit</span> provides margin below the lower flammability limit for hydrogen-oxygen mixtures, preventing formation of an explosive gas mixture. Hydrogen in the waste gas system is produced by radiolysis of reactor coolant water.

<span class="hi-exam">This specification is not applicable to portions of the Waste Gas System removed from service for maintenance, provided those portions are isolated from sources of hydrogen and purged of hydrogen to less than <span class="hi">4% by volume</span>.</span> *(Amendment No. 243)*
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-11.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-11.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Waste Gas]]
- Related concepts: [[Radiation Monitoring]]
