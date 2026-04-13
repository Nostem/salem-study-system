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

<span class="hi-exam">The soluble boron concentration offsets core reactivity and is measured by chemical analysis of a representative sample of coolant in each volume.</span> The COLR limit ensures overall core reactivity of <span class="hi">Keff ≤ 0.95</span> during fuel handling, with control rods and fuel assemblies in the most adverse configuration (least negative reactivity) allowed by plant procedures.

<span class="hi-exam">10 CFR 50, Appendix A, General Design Criterion 26 requires two independent reactivity control systems of different design principles — one must be capable of holding the core subcritical under cold conditions. The CVCS satisfies this requirement by maintaining the boron concentration.</span>

The refueling cavity and canal are flooded with borated water from the refueling water storage tank (RWST) through the open reactor vessel by gravity feed or RHR System pumps. The pumping action of the RHR System and natural circulation in the vessel and refueling cavity mix the added boric acid to maintain concentrations above the COLR limit.

During refueling, the water volume in the spent fuel pool, transfer canal, refueling canal, refueling cavity, and reactor vessel form a single mass — the soluble boron concentration is relatively the same in each volume. The boron concentration limit in the COLR is based on core reactivity at the beginning of each fuel cycle (end of refueling) and includes an uncertainty allowance.

<span class="hi-exam">The LCO applies only to the refueling canal, fuel storage pool, and refueling cavity when those volumes are connected to the RCS. When isolated from the RCS, no potential path for boron dilution exists.</span>

Suspension of CORE ALTERATIONS and positive reactivity additions does not preclude: (1) moving a component to a safe position, or (2) operations that individually add limited positive reactivity (e.g., temperature fluctuations from inventory addition) but when combined with all other operations result in overall net negative reactivity addition.

Once boration to restore concentration is initiated, it must be continued until the boron concentration is restored. The restoration time depends on the amount of boron that must be injected.
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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.9.2.1 Unborated Water Source Isolation Valves</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.9.2.1</div>

<span class="hi-exam">All isolation valves for reactor makeup water sources containing unborated water connected to the RCS must be closed during Mode 6 to prevent unplanned boron dilution. The valves must be secured (not just closed) in the closed position.</span>

<span class="hi-exam">By isolating all unborated water sources, a safety analysis for an uncontrolled boron dilution event per Standard Review Plan (NUREG-0800, Section 15.4.6) is not required for Mode 6.</span>

If any required valve is found not secured closed, there is a potential for diluted boron concentration in the RCS. Required actions: immediately suspend CORE ALTERATIONS and initiate actions to secure the valve. SR 4.9.1 must be performed to demonstrate that the required boron concentration exists. The <span class="hi">4-hour completion time</span> is sufficient to obtain and analyze a reactor coolant sample for boron concentration.

The surveillance is performed via system walkdown. Frequency is controlled under the Surveillance Frequency Control Program. *(Amendment No. 292)*
</div>
</details>

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

<span class="hi-exam">Source range neutron flux monitors are used during refueling to determine core reactivity condition and alert operators to unexpected changes in core reactivity such as a boron dilution event. Two OPERABLE monitors are required to ensure redundant monitoring capability.</span>

<span class="hi-exam">Based on isolating all boron dilution paths per LCO 3.9.2.1, only the source range neutron flux monitor visual indication in the control room is required for OPERABILITY.</span>

<span class="hi-exam">Any combination of NIS source range neutron flux monitors and/or Gamma-Metrics post-accident neutron flux monitors may be used to satisfy the LCO. Two of the four total source range neutron flux monitors are required to be OPERABLE.</span>

With one monitor inoperable: redundancy is lost; suspending positive reactivity additions is required to assure continued safe operation.

With no monitors OPERABLE: no direct means of detecting changes in core reactivity exists. However, since positive reactivity additions are not permitted, the core reactivity condition is stabilized. This stabilized condition is confirmed by performing SR 4.9.1 every 12 hours to ensure required boron concentration exists and adequate shutdown margin is maintained. *(Amendment No. 315)*
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

<span class="hi-exam">The containment closure requirements during irradiated fuel movement ensure that a release of fission product radioactivity will not exceed the guidelines and dose calculations of Regulatory Guide 1.183 (Alternative Radiological Source Term). In Mode 6, containment pressurization from an accident is not likely, so requirements can be less stringent than Mode 1–4 CONTAINMENT INTEGRITY.</span>

<span class="hi-exam">The term "containment closure" differs from "containment OPERABILITY." Containment closure means all potential release paths are closed or capable of being closed. It does not require CONTAINMENT INTEGRITY.</span>

**Equipment Hatch:** May be open during irradiated fuel movement provided: (1) inside door (or equivalent closure device) capable of being closed with <span class="hi">four bolts within 1 hour</span> by designated personnel; (2) either Containment Purge System or Auxiliary Building Ventilation System taking suction from containment is operating; and (3) plant is in Mode 6 with <span class="hi">at least 23 feet of water above the reactor pressure vessel flange</span>. Good engineering practice dictates the four bolts are approximately equally spaced.

An equivalent closure device may be installed in place of the equipment hatch inside door. Penetrations incorporated into such a device are considered part of the containment boundary and subject to TS 3/4.9.4 requirements.

**Air Locks:** The door interlock mechanism may remain disabled with both doors of each airlock open during irradiated fuel movement if: (1) at least one door of each airlock is capable of being closed within 1 hour by dedicated personnel; (2) either Containment Purge or Auxiliary Building Ventilation taking suction from containment is operating; and (3) Mode 6 with at least 23 feet above RPV flange.

<span class="hi-exam">The postulated Fuel Handling Accident (FHA) dose calculations using RG 1.183 do not assume automatic containment purge isolation — this allows continuous monitoring of containment activity until release pathways are manually isolated from the control room.</span>

SR 4.9.4.2 demonstrates that necessary hardware, tools, and equipment are available to close the equipment hatch. Performed once per refueling prior to start of irradiated fuel movement; only required when the equipment hatch is open. *(Amendment Nos. 292, 245)*
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

<span class="hi-exam">One RHR loop in operation ensures: (1) sufficient cooling capacity to remove decay heat and maintain reactor pressure vessel water below <span class="hi">140°F</span> as required during the REFUELING MODE, and (2) sufficient coolant circulation through the reactor core to minimize effects of a boron dilution incident and prevent boron stratification. A minimum flow rate of <span class="hi">1000 gpm</span> is required.</span>

Additional flow limitations are specified in plant procedures, with design basis documented in the Salem UFSAR. These limitations address concerns related to vortexing and air entrapment in the RHR System, and provide operational flexibility by adjusting flow limitations based on time after shutdown.

<span class="hi-exam">The requirement for two RHR loops OPERABLE when there is less than <span class="hi">23 feet of water above the reactor vessel flange</span> ensures that a single failure of the operating RHR loop will not result in a complete loss of residual heat removal capability.</span>

**Support systems (Service Water and Component Cooling):** Component redundancy is necessary to ensure no single active component failure causes loss of Decay Heat Removal. One piping path of SW and CC is adequate when it supports both RHR loops. Support system requirements before entering desired configuration (e.g., one SW loop out for maintenance in Modes 5 and 6) include:
- Two RHR, two CC, and two SW pumps powered from two different vital buses kept operable
- Active (air/motor operated) valves in the affected flow path locked open or disabled

**Alternative to RHR loop:** <span class="hi-exam">Four filled reactor coolant loops, with at least two steam generators having secondary-side water level ≥ <span class="hi">5% (narrow range)</span>, may be substituted for one RHR loop — this ensures single failure does not cause a loss of decay heat removal.</span>

With the reactor vessel head removed and 23 feet of water above the RPV flange, a large heat sink is available for core cooling. In the event of a failure of the operating RHR loop, adequate time is provided to initiate emergency procedures to cool the core. *(Amendment Nos. 277, 315)*
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

<span class="hi-exam">The minimum water level restriction ensures sufficient water depth is available to remove <span class="hi">99% of the assumed 10% iodine gap activity</span> released from the rupture of an irradiated fuel assembly. The minimum water depth is consistent with the assumptions of the accident analysis.</span>

The 23-foot minimum also satisfies the precondition referenced in TS 3/4.9.4 for relaxed containment closure requirements during irradiated fuel movement. *(Amendment No. 315)*
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

<span class="hi-exam">The minimum water level restriction ensures sufficient water depth is available to remove <span class="hi">99% of the assumed 10% iodine gap activity</span> released from the rupture of an irradiated fuel assembly seated in the storage racks. The minimum water depth is consistent with the assumptions of the accident analysis.</span>

The bases for 3/4.9.10 (reactor vessel) and 3/4.9.11 (storage pool) share a common technical basis: both 23-foot requirements come from the same iodine scrubbing calculation in the fuel handling accident analysis. *(Amendment No. 315)*
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-9.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-9.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[RHR]], [[CVCS]], [[Rx Vessel & Internals]]
