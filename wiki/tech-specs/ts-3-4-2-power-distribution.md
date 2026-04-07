---
title: "TS 3/4.2 — Power Distribution"
category: tech-specs
status: draft
aliases:
  - power distribution limits
  - FQ
  - F delta H
  - axial flux difference
  - QPTR
  - DNB parameters
---

# TS 3/4.2 — Power Distribution Limits

## 3/4.2.1 — Axial Flux Difference (AFD)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.1</div>
The indicated AXIAL FLUX DIFFERENCE (AFD) shall be maintained within the target band about the target flux difference specified in the COLR.
</div>

**Applicability:** Mode 1 above 15% RTP (when AFD monitor alarm is OPERABLE); above 50% RTP (when alarm inoperable)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| AFD outside target band (50-90% RTP) | Cumulative penalty deviation ≤1 hr in previous 24 hrs | Continuously |
| AFD outside target band (15-50% RTP) | Cumulative penalty deviation ≤2 hrs in previous 24 hrs | Continuously |
| AFD outside target band + penalty exceeded | Reduce power to <15% RTP | <span class="val-alarm">30 minutes</span> |
| AFD outside limits in COLR (at any power >15%) | Reduce power to <15% RTP | <span class="val-trip">15 minutes</span> |

## 3/4.2.2 — Heat Flux Hot Channel Factor FQ(Z)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.2</div>
FQ(Z) shall be limited by the relationship specified in the COLR.
</div>

**Applicability:** Mode 1

**Action:** With FQ(Z) exceeding the COLR limit, reduce power ≥1% RTP for each 1% FQ(Z) exceeds the limit within <span class="val-alarm">15 minutes</span> and verify within required limits within 24 hours.

## 3/4.2.3 — Nuclear Enthalpy Rise Hot Channel Factor F-delta-H

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.3</div>
F-delta-H shall be limited by the relationship specified in the COLR.
</div>

**Applicability:** Mode 1

## 3/4.2.4 — Quadrant Power Tilt Ratio (QPTR)

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.4</div>
The QPTR shall not exceed <span class="hi">1.02</span>.
</div>

**Applicability:** Mode 1 above 50% RTP

**Action:** With QPTR >1.02, reduce power ≥3% from RTP for each 1% of QPTR in excess of 1.0 within <span class="val-alarm">2 hours</span>.

## 3/4.2.5 — DNB Parameters

<div class="callout callout-important">
<div class="callout-label">LCO 3.2.5</div>
The following DNB-related parameters shall be maintained within limits:<br>
a. RCS Tavg per the COLR<br>
b. Pressurizer pressure per the COLR<br>
c. RCS total flow rate per the COLR
</div>

**Applicability:** Mode 1

**Actions:** With any parameter not within limit, restore within <span class="val-alarm">2 hours</span> or reduce power to <5% RTP within 4 hours.

---

## Bases

<span class="hi-exam">The power distribution limits ensure that: (1) the DNB design criterion is met during normal operation and AOOs, (2) fuel centerline melting does not occur, and (3) the peak local power density during a LOCA remains below the ECCS acceptance criteria (peak clad temp <2200°F).</span>

FQ and F-delta-H limits are established in the COLR based on the reload-specific core design and safety analysis. The QPTR limit of 1.02 ensures the core power distribution remains consistent with the assumptions used in the safety analyses.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-2.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-2.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related concepts: [[Nuclear Design]], [[Thermal-Hydraulic Design]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]], [[TS 2.0 — Safety Limits and LSSS]]
