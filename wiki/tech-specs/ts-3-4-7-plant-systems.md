---
title: "TS 3/4.7 — Plant Systems"
category: tech-specs
status: draft
aliases:
  - plant systems TS
  - AFW tech specs
  - MSSVs tech specs
  - CCW tech specs
  - service water TS
---

# TS 3/4.7 — Plant Systems

## 3/4.7.1.1 — Main Steam Safety Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.1</div>
All main steam line code safety valves (MSSVs) associated with each steam generator shall be OPERABLE with lift settings as specified in Table 3.7-4.
</div>

**Applicability:** Modes 1, 2, and 3

**MSSV Lift Settings (Table 3.7-4):**

| Valve (per loop) | Lift Setting (±3%) | Orifice Size |
|-------------------|-------------------|--------------|
| xMS11 | <span class="val-trip">1125 psig</span> | 16.0 in² |
| xMS12 | <span class="val-trip">1120 psig</span> | 16.0 in² |
| xMS13 | <span class="val-trip">1110 psig</span> | 16.0 in² |
| xMS14 | <span class="val-trip">1100 psig</span> | 16.0 in² |
| xMS15 | <span class="val-trip">1070 psig</span> | 16.0 in² |

5 valves per loop, 4 loops = 20 MSSVs total.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1–2 MSSVs inoperable per SG | Restore OR reduce power per Table 3.7-1 | <span class="val-alarm">4 hrs</span> |
| 3 MSSVs inoperable per SG | Restore OR reduce power per Table 3.7-1 AND reduce high flux trip setpoint within 36 hrs | <span class="val-alarm">4 hrs</span> |

**Max Allowable Power with Inoperable MSSVs (Table 3.7-1):**

| Inoperable MSSVs per SG | Max Power |
|--------------------------|-----------|
| 1 | 87% RTP |
| 2 | 58% RTP |
| 3 | 39% RTP |

*Amendment No. 259*

## 3/4.7.1.2 — Auxiliary Feedwater System

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.2</div>
At least <span class="hi">three independent AFW pumps</span> and associated flow paths shall be OPERABLE:<br>
a. Two motor-driven pumps, each powered from separate vital buses<br>
b. One turbine-driven pump, powered from an OPERABLE steam supply
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 AFW pump inoperable | Restore | <span class="val-alarm">72 hrs</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| 2 AFW pumps inoperable | Hot Standby in 6 hrs + Hot Shutdown in 6 hrs | <span class="val-trip">Immediately</span> |
| 3 AFW pumps inoperable | Immediately restore at least one | <span class="val-trip">Immediately</span> |

**Key SR:** Verify turbine-driven pump developed head at flow test point when SG pressure >680 psig.

*LCO 3.0.4.b is not applicable (cannot defer entry into the applicable mode).*

## 3/4.7.2 — SG Pressure/Temperature Limitation

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.2</div>
Primary and secondary coolant temperatures in the SGs shall be <span class="hi">>70°F</span> when either coolant pressure is <span class="hi">>200 psig</span>.
</div>

**Applicability:** At all times

**Action:** Reduce applicable SG pressure to ≤200 psig within 30 minutes. Perform engineering evaluation before increasing temperature above 200°F.

## 3/4.7.3 — Component Cooling Water

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.3</div>
At least <span class="hi">two independent CCW loops</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With only one loop, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours + Cold Shutdown in 30 hours.

## 3/4.7.4 — Service Water

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.4</div>
At least <span class="hi">two independent service water loops</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With only one loop, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours + Cold Shutdown in 30 hours.

---

## Bases

### Main Steam Safety Valves

<span class="hi-exam">The MSSVs provide overpressure protection for the secondary side of the steam generators. The power reduction requirements with inoperable MSSVs ensure that the remaining valves have sufficient capacity to prevent secondary side overpressurization.</span>

### Auxiliary Feedwater

<span class="hi-exam">Three independent AFW pumps (2 motor-driven, 1 turbine-driven) ensure decay heat removal via the steam generators when main feedwater is unavailable.</span> The turbine-driven pump is powered by steam and does not require AC power — it is available during a station blackout. Each motor-driven pump is powered from a separate vital bus backed by its own diesel generator.

### CCW and Service Water

Two independent loops of each system ensure single-failure capability for safety-related cooling functions. CCW provides the intermediate barrier between potentially radioactive systems and the service water (ultimate heat sink).

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-7-1.pdf" target="_blank">View TS PDF (Turbine Cycle)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-3.pdf" target="_blank">View TS PDF (CCW)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-4.pdf" target="_blank">View TS PDF (SW)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-7.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Auxiliary Systems]], [[Steam Generators]], [[Main Steam and Feedwater]], [[Containment Systems]]
