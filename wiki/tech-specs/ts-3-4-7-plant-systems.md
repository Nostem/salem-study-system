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

## 3/4.7.1.3 — Auxiliary Feed Storage Tank

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.3</div>
The auxiliary feed storage tank (AFST) shall be OPERABLE with a contained volume of at least <span class="hi">200000 gallons</span> of water.
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| AFST inoperable | Restore AFST OR demonstrate OPERABILITY of backup supply (demin water or fire protection/domestic water tank) | <span class="val-alarm">4 hours</span> |
| Backup supply in use | Restore AFST | <span class="val-alarm">7 days</span> |
| Unable to meet actions | Hot Shutdown in 12 hours | 12 hrs |

**Backup water sources:** Demineralized water storage tank (≥200000 gallons) or fire protection/domestic water storage tank (≥200000 gallons), with proper valve alignment verified.

## 3/4.7.1.4 — Secondary Coolant Activity

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.4</div>
The specific activity of the secondary coolant system shall be ≤ <span class="val-alarm">0.10 μCi/gram</span> DOSE EQUIVALENT I-131.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With specific activity > 0.10 μCi/gram DE I-131, be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

**SR:** Per Table 4.7-2 sampling and analysis program (gross activity per SFCP; isotopic analysis when gross activity >10% of limit).

## 3/4.7.1.5 — Main Steam Line Isolation Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.5</div>
Each main steam line isolation valve shall be OPERABLE.
</div>

**Applicability:** Mode 1; Modes 2 and 3 except when all MSIVs are closed

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One MSIV inoperable (Mode 1) | Restore OR close inoperable valve | <span class="val-alarm">4 hours</span>; otherwise Mode 2 in 6 hrs |
| One or more MSIVs inoperable (Modes 2-3) | Maintain closed and verify closed every 7 days | Ongoing |
| Unable to meet actions (Modes 2-3) | Hot Standby in 6 hours, Hot Shutdown in 6 hours | 6 + 6 hrs |

**Key SR:** Verify full closure within <span class="hi">5 seconds</span> per Inservice Testing Program.

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

## 3/4.7.5 — Flood Protection

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.5</div>
Flood protection shall be provided for all safety related systems, components and structures when the water level of the Delaware River exceeds <span class="val-alarm">10.5 ft</span> Mean Sea Level USGS datum at the service water intake structure.
</div>

**Applicability:** At all times

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Water level > 10.5 ft MSL | Close all watertight doors | <span class="val-alarm">2 hours</span> |
| Water level > 11.5 ft MSL | Hot Standby in 6 hours, Cold Shutdown in 30 hours | 6 + 30 hrs |

## 3/4.7.6 — Control Room Emergency Air Conditioning System (CREACS)

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.6</div>
The common CREACS* shall be OPERABLE with:<br>
a. Two independent filtration trains (one from each unit): two fans, one cooling coil, one charcoal adsorber/HEPA filter array, return air isolation damper<br>
b. All automatic dampers for pressurization/recirculation modes<br>
c. Control room envelope (CRE) intact
</div>

*CREACS is a shared system with Salem Unit 1.*

**Applicability:** ALL Modes and during movement of irradiated fuel assemblies

**Actions (Modes 1-4):**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One filtration train inoperable | Align for single-train operation; restore | <span class="val-alarm">4 hours</span>; <span class="val-alarm">30 days</span> |
| Single-train with one fan/damper inoperable | Restore fan/damper | <span class="val-alarm">72 hours</span> |
| CRE boundary inoperable | Implement mitigating actions; verify exposures within limits; restore | Immediately; 24 hrs; <span class="val-alarm">90 days</span> |
| Unable to meet actions | Hot Standby in 6 hours, Cold Shutdown in 30 hours | 6 + 30 hrs |

**Note:** CRE boundary may be opened intermittently under administrative control.

## 3/4.7.7 — Auxiliary Building Ventilation System

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.7</div>
The Auxiliary Building Ventilation System shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

## 3/4.7.8 — Sealed Source Contamination

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.8</div>
Each sealed source containing radioactive material with a half-life >30 days (excluding H-3) and in excess of 100 μCi shall have ≤ <span class="val-alarm">0.005 μCi</span> of removable contamination.
</div>

**Applicability:** At all times

**Action:** With removable contamination exceeding limits, withdraw the source from use and either decontaminate or dispose.

## 3/4.7.9 — Snubbers

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.9</div>
All snubbers shall be OPERABLE. Snubbers excluded from this requirement are listed in the Snubber Inservice Inspection Program.
</div>

**Applicability:** Modes 1, 2, 3, and 4 (for snubbers on safety-related systems)

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
