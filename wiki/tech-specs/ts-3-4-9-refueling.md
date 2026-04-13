---
title: "TS 3/4.9 — Refueling Operations"
category: tech-specs
status: draft
aliases:
  - refueling operations
  - refueling boron
  - refueling RHR
---

# TS 3/4.9 — Refueling Operations

## 3/4.9.1 — Boron Concentration

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.1</div>
The boron concentration of the RCS, fuel storage pool, refueling canal, and refueling cavity shall be maintained within the limit specified in the COLR.
</div>

**Applicability:** Mode 6 (fuel storage pool, refueling canal, and refueling cavity only when connected to RCS)

**Action:** Immediately: (a) suspend CORE ALTERATIONS, (b) suspend positive reactivity additions, (c) initiate action to restore boron concentration. LCO 3.0.3 not applicable.

**Surveillance:** Verify boron concentration within COLR limit per SFCP. *(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.1 Boron Concentration</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.1</div>
The refueling boron concentration ensures keff ≤ 0.95 with all control rods withdrawn, providing adequate shutdown margin during refueling operations. The boron concentration is specified in the COLR based on the reload-specific core design.
</div>
</details>

## 3/4.9.2.1 — Unborated Water Source Isolation Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.2.1</div>
Each valve used to isolate unborated water sources shall be <span class="hi">secured in the closed position</span>.
</div>

**Applicability:** Mode 6

**Actions:** (Separate entry allowed for each valve)

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| ≥1 valve not secured closed | Immediately suspend CORE ALTERATIONS and initiate action to secure valve | Immediately |
| (continued) | Perform SR 4.9.1 (verify boron concentration) | <span class="val-alarm">4 hours</span> |

**Surveillance:** Verify each unborated water source isolation valve is secured closed per SFCP. *(Amendment No. 292)*

## 3/4.9.2.2 — Source Range Instrumentation

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.2.2</div>
<span class="hi">Two source range neutron flux monitors</span> shall be OPERABLE.
</div>

**Applicability:** Mode 6

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 source range monitor inoperable | Immediately suspend CORE ALTERATIONS and positive reactivity additions | Immediately |
| Both source range monitors inoperable | Immediately suspend CORE ALTERATIONS and positive reactivity additions; initiate action to restore one monitor; perform SR 4.9.1 every 12 hours | Immediately |

LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.9.2.2.a | CHANNEL CHECK each source range monitor | Per SFCP |
| 4.9.2.2.b | CHANNEL CALIBRATION each source range monitor (neutron detectors excluded from calibration) | Per SFCP |

*(Amendment No. 292)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.2.2 Source Range Instrumentation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.2.2</div>
Two source range monitors provide redundant monitoring of core reactivity during refueling. With both inoperable, boron concentration verification every 12 hours provides an alternate means of monitoring reactivity status.
</div>
</details>

## 3/4.9.4 — Containment Building Penetrations

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.4</div>
Containment building penetrations shall be in the following status:<br>
a. Equipment hatch inside door capable of being closed with ≥4 bolts, or equivalent closure device installed and capable of being closed<br>
b. Minimum one door in each airlock capable of being closed<br>
c. Each penetration providing direct access to outside atmosphere: either closed (manual/auto valve, blind flange), or capable of being closed by Containment Purge and P-V Relief Isolation System
</div>

**Applicability:** During movement of irradiated fuel within containment

**Action:** If not satisfied, immediately suspend all movement of irradiated fuel in containment. LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.9.4.1 | Verify each penetration in required condition or capable of being closed | Per SFCP |
| 4.9.4.2 | Verify capability to close equipment hatch inside door (or equivalent) within 1 hour | Once per refueling, prior to start of irradiated fuel movement |
| 4.9.4.3 | Verify each required containment purge isolation valve actuates to isolation position on manual signal | Per SFCP |

<div class="callout callout-exam">
<div class="callout-label">Key Distinction</div>
The equipment hatch does not need to be closed during irradiated fuel movement — it only needs to be CAPABLE of being closed (inside door held by ≥4 bolts or equivalent). Penetration flow paths providing direct access may be unisolated under administrative controls.
</div>

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.4 Containment Building Penetrations</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.4</div>
The requirements ensure containment closure capability during fuel movement to limit potential release from a fuel handling accident. The equipment hatch closure capability (not actual closure) allows refueling operations while maintaining the ability to establish containment integrity if needed.
</div>
</details>

## 3/4.9.8 — Residual Heat Removal and Coolant Circulation

### All Water Levels (3.9.8.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.8.1</div>
At least <span class="hi">one RHR loop shall be in operation</span>.
</div>

**Applicability:** Mode 6

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| No RHR loop in operation (except as in b.) | Suspend operations increasing decay heat load or reducing boron concentration. Close all containment penetrations providing direct access to outside atmosphere. | Immediately; close penetrations in <span class="val-alarm">4 hours</span> |
| RHR loop removed from operation for CORE ALTERATIONS near hot legs | Permitted for up to <span class="val-alarm">1 hour per 8 hour period</span> | — |

LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.9.8.1 | Verify one RHR loop in operation circulating at: (a) ≥1000 gpm, AND (b) sufficient to maintain RCS temp ≤140°F | Per SFCP |

*(Amendment No. 282)*

### Low Water Level (3.9.8.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.8.2</div>
<span class="hi">Two independent RHR loops</span> shall be OPERABLE.
</div>

**Applicability:** Mode 6 when water level above reactor vessel flange is <span class="hi">less than 23 feet</span>

**Action:** With less than required RHR loops OPERABLE, immediately initiate corrective action to restore. LCO 3.0.3 not applicable.

**Surveillance:** Per INSERVICE TESTING PROGRAM. *(Normal or emergency power source may be excepted from operability.)*

<div class="callout callout-trap">
<div class="callout-label">Water Level Threshold</div>
Two RHR loops are required when water level drops below 23 feet (reduced inventory). At all other water levels in Mode 6, only one RHR loop in operation is required (LCO 3.9.8.1). The 23-foot threshold is the same as the minimum required water level for fuel movement (LCO 3.9.10).
</div>

*(Amendment No. 300)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.8 RHR and Coolant Circulation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.8</div>
One operating RHR loop ensures adequate decay heat removal and provides mixing of the borated coolant to prevent stratification. The 1000 gpm minimum flow and 140°F temperature limit ensure adequate cooling margin. Two OPERABLE loops at low water level (less than 23 feet above vessel flange) provide redundancy when the reduced water inventory provides less thermal margin.
</div>
</details>

## 3/4.9.10 — Water Level — Reactor Vessel

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.10</div>
At least <span class="hi">23 feet of water</span> shall be maintained over the top of the reactor pressure vessel flange.
</div>

**Applicability:** During movement of fuel assemblies or control rods within the reactor vessel when either the assemblies being moved or those seated in the vessel are irradiated

**Action:** If not satisfied, suspend all movement of fuel assemblies or control rods within the vessel. LCO 3.0.3 not applicable.

**Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.9.10 | Verify water level ≥23 feet above vessel flange | Within 2 hours prior to start of fuel movement, then per SFCP |

*(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.10 Water Level — Reactor Vessel</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.10</div>
The 23-foot water level above irradiated fuel provides adequate shielding for personnel radiation protection and provides a source of water for iodine removal in the event of a fuel handling accident.
</div>
</details>

## 3/4.9.11 — Storage Pool Water Level

<div class="callout callout-important">
<div class="callout-label">LCO 3.9.11</div>
At least <span class="hi">23 feet of water</span> shall be maintained over the top of irradiated fuel assemblies seated in the storage racks.
</div>

**Applicability:** Whenever irradiated fuel assemblies are in the storage pool

**Action:** Suspend all fuel assembly movement and crane operations with loads in the fuel storage areas. Restore water level within <span class="val-alarm">4 hours</span>. LCO 3.0.3 not applicable.

**Surveillance:** Verify water level per SFCP when irradiated fuel assemblies are in the pool. *(Amendment No. 282)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.11 Storage Pool Water Level</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.11</div>
The 23-foot water level above irradiated fuel assemblies in the storage pool provides adequate shielding for personnel radiation protection and provides a source of water for iodine removal in the event of a fuel handling accident.
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-9.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-9.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[RHR]], [[CVCS]], [[Rx Vessel & Internals]]
