---
title: "TS 3/4.6 — Containment"
category: tech-specs
status: draft
aliases:
  - containment tech specs
  - containment integrity TS
  - containment spray TS
  - containment isolation TS
---

# TS 3/4.6 — Containment Systems

## 3/4.6.1 — Primary Containment

### Containment Integrity (3.6.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.1</div>
Primary CONTAINMENT INTEGRITY shall be maintained.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** Without CONTAINMENT INTEGRITY, restore within <span class="val-trip">1 hour</span> or be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.1 Containment Integrity</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.1</div>

<span class="hi-exam">Primary CONTAINMENT INTEGRITY restricts release of radioactive materials to those leakage paths and leak rates assumed in the accident analyses</span>, limiting site boundary doses to within 10 CFR 100 limits during accident conditions.

**SR 4.6.1.1.a** does not require valve manipulations or testing — it verifies that containment isolation valves capable of being mispositioned are in their proper safety positions (closed). Valves and blind flanges in high radiation areas may be verified by administrative controls, since limited ALARA access in Modes 1–4 makes misalignment after initial verification unlikely.

**Service water accumulator vessels** (installed to address Generic Letter 96-06 issues of column separation, waterhammer, and two-phase flow) maintain water-filled, subcooled conditions in the CFCU cooling loops during accident conditions. <span class="hi-exam">If a service water accumulator vessel fails its surveillance or a discharge valve fails response time testing, the two CFCUs exclusively supplied by that accumulator must be removed from service and isolated to maintain containment integrity.</span>
</div>
</details>

### Containment Leakage (3.6.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.2</div>
Containment leakage rates shall be limited to:<br>
a. Overall integrated leakage rate (Type A) per Containment Leakage Rate Testing Program<br>
b. Combined leakage rate for Type B and C tests per Containment Leakage Rate Testing Program
</div>

**Action:** If leakage not within limits, restore prior to increasing RCS temperature above 200°F.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.2 Containment Leakage</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.2</div>

The leakage rate limitations ensure total containment leakage does not exceed the value assumed in the accident analyses at peak accident pressure (P<sub>a</sub>). <span class="hi-exam">The measured overall integrated leakage rate (Type A) is further limited to ≤0.75 L<sub>a</sub> or ≤0.75 L<sub>t</sub> (as applicable) during periodic testing</span>, providing conservatism to account for possible degradation of containment leakage barriers between leakage tests.

Surveillance testing is consistent with the Containment Leakage Rate Testing Program.
</div>
</details>

### Containment Air Locks (3.6.1.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.3</div>
Each containment air lock shall be OPERABLE with:<br>
a. Both doors closed except during normal transit (then at least one door closed)<br>
b. Overall air lock leakage rate per Containment Leakage Rate Testing Program
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One air lock door inoperable | Verify OPERABLE door closed; lock closed | <span class="val-trip">1 hour</span>; then 24 hours |
| Air lock interlock inoperable | Verify an OPERABLE door closed; lock closed | <span class="val-trip">1 hour</span>; then 24 hours |
| Air lock inoperable (other reasons) | Evaluate overall containment leakage; verify one door closed; restore | Immediately; 1 hour; <span class="val-alarm">24 hours</span> |
| Unable to meet actions | Hot Standby in 6 hours, Cold Shutdown in 30 hours | 6 + 30 hrs |

**Notes:** Entry/exit permitted for repairs. Separate condition entry allowed for each air lock.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.3 Containment Air Locks</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.3</div>

Air locks form part of the containment pressure boundary and provide personnel access in all Modes. Each is nominally a <span class="hi">10-foot diameter right circular cylinder</span> with a door at each end. The doors are interlocked to prevent simultaneous opening during normal operation; <span class="hi-exam">closure of a single door supports containment OPERABILITY</span>. Each door has double-gasketed seals and local leak rate testing capability. The design uses <span class="hi-exam">pressure-seated doors — increased containment pressure results in increased sealing force</span>.

Each air lock is OPERABLE when: (1) the interlock mechanism is OPERABLE, (2) the leakage rate is within Type B test limits, and (3) both doors are OPERABLE.

**Design basis:** The containment was designed with an allowable leakage rate of <span class="hi">L<sub>a</sub> = 0.1% of containment air weight per day</span>, the maximum allowable rate at calculated peak containment internal pressure <span class="hi">P<sub>a</sub> = 47.0 psig</span> following a DBA. DBAs that release radioactive material to containment are LOCA and rod ejection accident.

**Action c (leakage failure) basis:** When air lock leakage exceeds limits, an evaluation is required rather than immediate inoperability declaration because <span class="hi-exam">even with both doors failing the seal test, the overall containment leakage rate can still be within limits</span>. One-door seal failure does not necessarily make containment inoperable.

**Interlock inoperable (Condition b):** A dedicated individual stationed at the air lock may perform the interlock function (ensuring only one door is opened at a time) as an alternative to locking closed the OPERABLE door.

**Air lock interlock SR:** Periodic testing demonstrates the interlock prevents simultaneous opening of inner and outer doors. Frequency is controlled under the Surveillance Frequency Control Program.
</div>
</details>

### Internal Pressure (3.6.1.4)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.4</div>
Primary containment internal pressure shall be maintained between <span class="val-alarm">-1.5 psig</span> and <span class="val-alarm">+0.3 psig</span>.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With containment internal pressure not within limits, restore within <span class="val-trip">1 hour</span> or be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.4 Internal Pressure</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.4</div>

Two separate limits, two separate failure modes:

1. <span class="hi-exam">The lower limit of -1.5 psig prevents the containment structure from exceeding its design negative pressure differential of 3.5 psig with respect to outside atmosphere.</span>
2. <span class="hi-exam">The upper limit of +0.3 psig ensures the containment peak pressure does not exceed the design pressure of 47 psig during the limiting pipe break</span> (LOCA or steam line break). The +0.3 psig limit is consistent with accident analysis initial conditions.

The maximum peak pressure expected from a LOCA or steam line break event is approximately <span class="hi">47 psig</span>.
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q54</div>
<span class="hi-exam">Containment internal pressure limits: -1.5 to +0.3 psig (Modes 1-4).</span> If pressure exceeds +0.3 psig, containment design limits could be exceeded during a DBA. The upper limit ensures peak pressure does not exceed the <span class="val-trip">47 psig</span> design pressure during the limiting pipe break (LOCA or steam line break). The lower limit ensures the containment structure is prevented from exceeding its design negative pressure differential of <span class="val-trip">3.5 psig</span> with respect to outside atmosphere. Restoration time is <span class="hi-exam">1 hour</span>.
</div>

### Containment Air Temperature (3.6.1.5)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.5</div>
Primary containment average air temperature shall not exceed <span class="val-alarm">120°F</span>.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With average air temperature > 120°F, reduce to within limit within <span class="val-alarm">8 hours</span>, or Hot Standby in 6 hours and Cold Shutdown in 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.5 Air Temperature</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.5</div>

<span class="hi-exam">The 120°F limit ensures the containment average air temperature does not exceed the initial temperature condition assumed in the accident analysis</span> for a LOCA or steam line break. Average temperature is calculated using measurements at locations within containment selected to provide a representative sample of the overall containment atmosphere.
</div>
</details>

### Containment Structural Integrity (3.6.1.6)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.6</div>
The structural integrity of the containment shall be maintained at a level consistent with the acceptance criteria in SR 4.6.1.6.1.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With structural integrity not conforming, restore within <span class="val-alarm">24 hours</span> or Hot Standby in 6 hours and Cold Shutdown in 30 hours.

**SRs:**
- 4.6.1.6.1 — Inspect exposed accessible interior/exterior surfaces and liner plate per Containment Leakage Rate Testing Program
- 4.6.1.6.2 — Any abnormal degradation evaluated for reportability per 10CFR50.72/50.73

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.1.6 Structural Integrity</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.1.6</div>

<span class="hi-exam">Structural integrity is required to ensure containment withstands the design pressure.</span> Visual inspections of concrete, liner, and the Type A leakage test (both per the Containment Leakage Rate Testing Program) are sufficient to demonstrate this capability. The limitation ensures structural integrity is maintained comparable to original design standards for the life of the facility.
</div>
</details>

---

## 3/4.6.2 — Depressurization and Cooling Systems

### Containment Spray (3.6.2.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.1</div>
<span class="hi">Two independent containment spray systems</span> shall be OPERABLE, each capable of taking suction from RWST and transferring suction to RHR pump discharge.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one inoperable, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours. Restore within next 48 hours or Cold Shutdown in 30 hours.

**Key SR:** Each spray pump differential pressure ≥204 psid per IST program.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.2.1 Containment Spray</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.2.1</div>

<span class="hi-exam">Two independent containment spray systems ensure pressure reduction and iodine removal following a LOCA even with a single active failure.</span> The system works in conjunction with the Containment Cooling System — together they provide containment depressurization and cooling. The lower containment pressure and resultant lower leakage rate are consistent with accident analysis assumptions.

<span class="hi-exam">The containment spray also provides a mechanism for removing iodine from the containment atmosphere.</span> Because of this iodine removal function, the restoration time for an inoperable spray system is consistent with that assigned other inoperable ESF equipment (72 hours).

**SR 4.6.2.1.d (nozzle flow test):** Normal plant operation and maintenance are not expected to trigger this test. Only unanticipated circumstances (inadvertent spray actuation, major configuration change, or loss of foreign material control within the spray boundary) initiate it. An engineering evaluation may be performed first — if the evaluation conclusively determines nozzle blockage would not impact design basis function, the air/smoke flow test is not required.

The NaOH spray additive maintains post-LOCA sump pH between 7.0 and 10.0, minimizing iodine re-evolution and chloride stress corrosion.
</div>
</details>

### Spray Additive System (3.6.2.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.2</div>
Spray additive system shall be OPERABLE with:<br>
a. Spray additive tank: <span class="hi">2568–4000 gallons</span> of <span class="hi">30–32% by weight NaOH</span><br>
b. Two spray additive eductors OPERABLE
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** If inoperable, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours. Restore within 48 hours or Cold Shutdown in 30 hours.

**Key SR:** Spray additive tank eductor flow shall be 35 ±3.5 gpm to each containment spray system.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.2.2 Spray Additive System</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.2.2</div>

The NaOH spray additive ensures sufficient base is added to the containment spray to achieve two goals following a LOCA:

1. <span class="hi-exam">Iodine removal efficiency of the spray water is maintained due to the increased pH value.</span>
2. <span class="hi-exam">Corrosion effects on components within containment are minimized.</span>

The volume and concentration limits (2568–4000 gal of 30–32% NaOH by weight) are consistent with the iodine removal efficiency assumed in the accident analyses. The minimum volume limit includes an allowance for water not usable due to tank discharge line location or other physical characteristics.
</div>
</details>

### Containment Fan Coolers (3.6.2.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.3</div>
At least <span class="hi">three containment fan coil units</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one fan cooler inoperable, restore within <span class="val-alarm">7 days</span>. With two inoperable, restore one within <span class="val-alarm">72 hours</span>. Otherwise Hot Standby in 6 hours and Cold Shutdown in 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.2.3 Containment Fan Coolers</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.2.3</div>

<span class="hi-exam">Three of five CFCUs provide sufficient post-LOCA heat removal capacity (132 × 10⁶ Btu/hr) to reduce containment pressure below design limits</span> when operated in conjunction with the containment spray systems.

**Five CFCU arrangement:**
- Two CFCUs each supplied with cooling water from one of the two separate service water headers
- <span class="hi-exam">One CFCU supplied from both service water headers through normally open isolation valves and check valves from each header</span>

**Normal operation:** Up to four CFCUs typically operate at high speed with service water supplied to the cooling coils. The CFCUs limit ambient containment temperature to below the limit in LCO 3.6.1.5.

**Post-accident operation:** <span class="hi-exam">On SI actuation signal, CFCUs automatically start in low speed if not running. If already running in high (normal) speed, they automatically shift to low speed</span> to prevent motor overload from the higher-density post-accident atmosphere.

**Service water accumulator surveillance (SR 4.6.2.3.a):** Verifies each tank contains sufficient water and nitrogen to maintain water-filled, subcooled conditions in three CFCU cooling loops during a loss of offsite power without injecting nitrogen into the loops — assuming the most limiting single failure. Discharge valve response time testing verifies each valve opens in time to allow sufficient tank discharge into CFCU piping.

**SR 4.6.2.3.b.2:** Operating each CFCU in low speed for ≥15 minutes ensures all CFCUs are OPERABLE and associated controls function properly; also detects blockage, fan or motor failure.

**SR 4.6.2.3.c.1:** Verifies each CFCU actuates upon receipt of an actual or simulated safety injection signal.
</div>
</details>

---

## 3/4.6.3 — Containment Isolation Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.3</div>
Each containment isolation valve shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| ≥1 containment isolation valve inoperable | Restore OR isolate affected penetration by: closed/deactivated auto valve, closed manual valve, or blind flange | <span class="val-alarm">4 hrs</span> |
| Unable to isolate | Be in Hot Standby, then Cold Shutdown | 6 hrs + 30 hrs |

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.6.3 Containment Isolation Valves</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.6.3</div>

<span class="hi-exam">Containment isolation valves isolate the containment atmosphere from the outside environment in the event of radioactive material release to containment or containment pressurization.</span> Isolation within specified time limits ensures release of radioactive material to the environment is consistent with LOCA analysis assumptions.

**Locked/sealed closed valves — intermittent opening under administrative control** requires: (1) a dedicated individual in constant communication with the control room stationed at the valve controls, (2) instruction to close the valves in an accident situation, and (3) assurance that environmental conditions will not preclude access to close the valves.

**Main Steam Isolation Valves (MSIVs):** <span class="hi-exam">MSIVs fulfill their containment isolation function as remote-manual containment isolation valves — automatic closure is NOT required for containment isolation</span> because there is a closed system inside containment. The remote-manual function can be accomplished via hydraulic operator, or via steam assist closure when the MSIV has been tested per SR 4.7.1.5.

**SR 4.6.3.3** applies only to MS7 (Main Steam Drain) and MS18 (Main Steam Bypass) valves. The MS167 (Main Steam Isolation) valves are tested for containment isolation purposes as remote/manual valves per Specification 4.0.5.

**Containment purge valves:** <span class="hi-exam">Purge supply and exhaust isolation valves are required closed during plant operation because they have not been demonstrated capable of closing during a LOCA.</span> The inboard valve of both purge supply and exhaust penetrations has been replaced with a testable double O-ring blind flange — the blind flange serves as the containment boundary in Modes 1–4. The outboard valves perform no containment integrity function in Modes 1–4.
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Phase A vs Phase B Isolation</div>
Phase A isolation valves actuate on Safety Injection signal ("T"). Phase B isolation valves actuate on Hi-Hi Containment Pressure (Containment Spray actuation signal, "P"). Containment purge valves are required to be closed and immobilized with control air isolated.
</div>

## 3/4.6.4 — Combustible Gas Control

Pages 3/4 6-16 through 6-22 are intentionally blank. This section has been deleted/relocated from Technical Specifications.

## 3/4.6.5 — Containment Structural Integrity (Visual Inspection)

Covered under SR 4.6.1.6.1 above.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-6-1.pdf" target="_blank">View TS PDF (Containment)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-6-2.pdf" target="_blank">View TS PDF (Spray/Cooling)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-6-3.pdf" target="_blank">View TS PDF (Isolation)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-6.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A3</div>
TS LCO 3.6.3 containment isolation valve operability: <span class="hi-exam">2VC5 stroke time of 2.83 seconds is in the REQUIRED ACTION RANGE (> 2.0 seconds)</span> — immediately declare inoperable. Actions: (1a) TS action applicable, (1b) close and deactivate companion valve 2VC6 within <span class="hi-exam">4 hours</span>, OR (1c) isolate penetration within 4 hours, OR (1d) Hot Standby in 6 hours and Cold Shutdown in 30 hours.
</div>

## Connections

- Related systems: [[Containment]], [[ECCS]]

- Related concepts: [[ESF & Design]]
- Related exam questions: [[2023 Q54]]
- Related JPMs: [[2022 JPM SRO-A3]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
