---
title: "TS 3/4.5 — ECCS"
category: tech-specs
status: draft
aliases:
  - ECCS tech specs
  - accumulators TS
  - RWST tech specs
  - safety injection TS
  - TS 3.5.4
---

# TS 3/4.5 — Emergency Core Cooling Systems

## Accumulators

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.1</div>
Each RCS accumulator shall be OPERABLE with:<br>
a. Isolation valve open<br>
b. Contained volume: <span class="hi">6223–6500 gallons</span><br>
c. Boron concentration: <span class="hi">2200–2500 ppm</span><br>
d. Nitrogen cover-pressure: <span class="hi">595.5–647.5 psig</span>
</div>

**Applicability:** Modes 1, 2, and 3 (pressurizer pressure >1000 psig)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 accumulator inoperable (not isolation valve or boron) | Restore to OPERABLE | <span class="val-alarm">24 hrs</span>, or Hot Shutdown in 12 hrs |
| 1 accumulator inoperable due to closed isolation valve | Immediately open valve | Or Hot Standby in 24 hrs + Hot Shutdown in 12 hrs |
| 1 accumulator boron concentration outside limits | Restore boron concentration | <span class="val-alarm">72 hrs</span>, or Hot Standby in 6 hrs and reduce PZR pressure to ≤1000 psig in 6 hrs |

*Amendment No. 282*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.5.1 Accumulators</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.5.1</div>

<span class="hi-exam">Each accumulator provides a passive, immediate surge of borated water into the core through each cold leg when RCS pressure falls below accumulator pressure.</span> No electrical power or actuation signal is required — this initial surge provides the critical first cooling mechanism during large RCS pipe ruptures.

The limits on accumulator volume, boron concentration, and nitrogen cover-pressure ensure that the assumptions used for accumulator injection in the safety analysis are met.

The accumulator power-operated isolation valves are considered "operating bypasses" per IEEE Std 279-1971, which requires bypasses of a protective function to be removed automatically when permissive conditions are not met. Because these valves fail to meet single-failure criteria, <span class="hi-exam">power must be removed from the accumulator isolation valves</span>.

If a closed isolation valve cannot be immediately opened, <span class="hi-exam">the full capability of one accumulator is not available and prompt action is required</span> to place the reactor in a mode where this capability is not required. Operating with one accumulator inoperable (for reasons other than a closed isolation valve or boron concentration) is limited to 24 hours to minimize exposure to a LOCA concurrent with failure of an additional accumulator that could result in unacceptable peak cladding temperatures.
</div>
</details>

---

## ECCS Subsystems — Tavg ≥ 350°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.2</div>
<span class="hi">Two independent ECCS subsystems</span> shall be OPERABLE, each comprised of:<br>
a. One centrifugal charging pump + flow path (cold leg injection)<br>
b. One safety injection pump + flow path (cold leg injection; manual hot leg injection)<br>
c. One RHR pump + RHR HX + flow path (cold leg injection)
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 ECCS subsystem inoperable | Restore to OPERABLE | <span class="val-alarm">72 hrs</span>, or Hot Shutdown in 12 hrs |
| Both ECCS subsystems inoperable (surveillance testing) | Restore at least one | <span class="val-trip">1 hr</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs + Cold Shutdown in 24 hrs |

**Key Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.5.2.a | Verify specific valves in correct position with power removed (see valve list below) | Per SFCP |
| 4.5.2.e | Verify auto-start of charging, SI, and RHR pumps on SI test signal | Per SFCP (during shutdown) |
| 4.5.2.f | Verify pump TDH per IST program: Charging ≥2338 psi, SI ≥1369 psi, RHR ≥165 psi | Per IST |

### ECCS Valve Alignment (SR 4.5.2.a)

| Valve | Function | Required Position |
|-------|----------|------------------|
| 2 SJ 69 | RHR pump suction | Open |
| 2 SJ 30 | SI pump suction | Open |
| 21 SJ 40 | SI discharge to hot legs | Closed |
| 22 SJ 40 | SI discharge to hot legs | Closed |
| 2 RH 26 | RHR discharge to hot legs | Closed |
| 21 SJ 49 | RHR discharge to cold legs | Open |
| 22 SJ 49 | RHR discharge to cold legs | Open |
| 2 SJ 135 | SI discharge to cold legs | Open |
| 21 RH 19 | RHR crosstie valve | Open |
| 22 RH 19 | RHR crosstie valve | Open |

*Amendment No. 282*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.5.2 ECCS Subsystems (Tavg ≥ 350°F)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.5.2</div>

<span class="hi-exam">Two independent ECCS subsystems ensure that sufficient emergency core cooling capability is available assuming any single active failure in either subsystem.</span> Either subsystem operating in conjunction with the accumulators is capable of supplying sufficient core cooling to limit peak cladding temperatures within acceptable limits for <span class="hi-exam">all postulated break sizes, from double-ended break of the largest RCS cold leg pipe downward</span>. Each subsystem also provides long-term core cooling capability in the recirculation mode during accident recovery.

The ECCS flow paths ensure borated water delivery to both cold legs (injection phase) and hot legs (recirculation phase).

**Pump runout limits:** Surveillance requirements cap maximum total pump flow at <span class="hi">554 gpm for centrifugal charging pumps</span> (accounting for suction boost alignment; 560 gpm nameplate), <span class="hi">664 gpm for SI pumps in cold leg alignment</span>, and <span class="hi">654 gpm for SI pumps in hot leg alignment</span> (675 gpm nameplate). The maximum–minimum flow surveillance ensures the minimum individual injection line resistance assumed for the spilling line following a LOCA is met.

**Safety analysis assumptions:** The safety analyses account for both maximum and minimum total system resistance and branch injection line resistance to calculate maximum and minimum ECCS flow bounds.

**LCO 3.0.4.b restriction:** <span class="hi-exam">LCO 3.0.4.b is not applicable to an inoperable ECCS high head subsystem when entering Mode 4.</span> The provisions allowing entry into a Mode with the LCO not met after risk assessment should not be applied in this circumstance due to increased risk.

The RHR interlock (tested per SR 4.5.2.i) prevents opening the RHR suction isolation valves (2RH1, 2RH2) when RCS pressure is ≥375 psig, protecting the low-pressure RHR system from RCS pressure.
</div>
</details>

---

## ECCS Subsystems — Tavg < 350°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.3</div>
As a minimum, <span class="hi">one ECCS subsystem</span> shall be OPERABLE comprised of:<br>
a. One centrifugal charging pump + flow path (cold leg injection)<br>
b. One RHR pump + RHR HX + flow path (cold leg and hot leg injection)
</div>

**Applicability:** Mode 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| No ECCS subsystem (charging pump or flow path inoperable) | Restore at least one | <span class="val-trip">1 hr</span>, or Cold Shutdown in 20 hrs |
| No ECCS subsystem (RHR pump or HX inoperable) | Restore or maintain Tavg <350°F by alternate heat removal | Immediately |

<div class="callout callout-trap">
<div class="callout-label">POPS Restriction</div>
A maximum of one SI pump or one centrifugal charging pump shall be OPERABLE in Mode 4 (cold leg temp ≤ POPS enable temp), Mode 5, or Mode 6 (head on vessel). Excess pumps must be demonstrated inoperable by breaker removal or verified in recirc with two independent means of preventing RCS injection.
</div>

*Amendment No. 328*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.5.3 ECCS Subsystems (Tavg &lt; 350°F)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.5.3</div>

<span class="hi-exam">With RCS temperature below 350°F, one OPERABLE ECCS subsystem is acceptable without single-failure consideration</span> on the basis of the stable reactivity condition of the reactor and the limited core cooling requirements in Mode 4.

**POPS basis:** The limitation of a maximum of one SI pump or one centrifugal charging pump OPERABLE below the POPS enable temperature (specified in the PTLR) <span class="hi-exam">provides assurance that a mass addition pressure transient can be relieved by the operation of a single POPS relief valve.</span>

**Two independent means of preventing RCS injection** are required when running an SI pump below the POPS enable temperature with potential for injecting into the RCS. Any two of the following satisfy this requirement:
1. A manual isolation valve locked in the closed position
2. Two manual isolation valves closed
3. One motor-operated valve closed with breaker de-energized and control circuit fuses removed
4. One air-operated valve closed with air supply maintained to ensure it remains closed
</div>
</details>

---

## Seal Injection Flow

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.4</div>
RCP seal injection flow shall be <span class="hi">≤40 gpm</span> with charging pump discharge header pressure ≥2430 psig and charging flow control valve full open.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** Adjust manual seal injection throttle valves within <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.5.4 Seal Injection Flow</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.5.4</div>

<span class="hi-exam">RCP seal injection flow is restricted because it is NOT isolated during Safety Injection (SI) actuation</span> — any flow diverted to the RCP seals is diverted from the ECCS injection path. The limit is therefore based on safety analysis assumptions for flow diversion.

The LCO is not strictly a flow limit but a <span class="hi-exam">flow limit based on line resistance</span>: both line pressure and flow must be known to establish proper line resistance. The resistance is determined assuming RCS pressure at normal operating pressure and charging pump discharge pressure ≥ <span class="hi">2430 psig</span>. Charging pump header pressure is used rather than RCS pressure because it is more representative of flow diversion during an accident. The charging flow control valve must be full open because it is designed to fail open.

**Surveillance exemption:** SR 4.0.4 is exempt for up to <span class="hi">4 hours</span> after RCS pressure stabilizes within ±20 psig of normal operating pressure when entering Mode 3 — the exemption allows time to establish the conditions necessary to correctly set the manual throttle valves.
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q91</div>
Seal injection flow surveillance: individual RCP seal injection flows of 10 + 10.5 + 9.8 + 10.2 = <span class="hi-exam">40.5 gpm total exceeds the &le;40 gpm limit</span>. Required action: adjust manual seal injection throttle valves within 4 hours. <span class="hi-trap">This is NOT a charging pump operability issue (TS 3.5.2) -- the charging pump is functioning properly; the seal injection throttle valves need adjustment.</span>
</div>

---

## Refueling Water Storage Tank

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.5</div>
The RWST shall be OPERABLE with:<br>
a. Contained volume ≥ <span class="hi">364500 gallons</span><br>
b. Boron concentration: <span class="hi">2300–2500 ppm</span><br>
c. Temperature: <span class="hi">≥35°F and ≤100°F</span>
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| RWST inoperable (boron or temp) | Restore | <span class="val-alarm">8 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| RWST inoperable (other reasons) | Restore | <span class="val-trip">1 hr</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |

*Amendment No. 309*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.5.5 RWST</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.5.5</div>

The RWST minimum volume and boron concentration limits ensure three things simultaneously:

1. <span class="hi-exam">Sufficient water is available within containment to permit recirculation cooling flow to the core</span> (the sump must have adequate inventory for long-term recirculation).
2. <span class="hi-exam">The reactor will remain subcritical in the cold condition following a small LOCA</span>, assuming complete mixing of RWST, RCS, and ECCS water volumes with all control rods inserted except the most reactive assembly (ARI-1 — stuck rod out).
3. <span class="hi-exam">The reactor will remain subcritical in the cold condition following a large break LOCA</span> (break flow area > <span class="hi">3.0 sq ft</span>), assuming complete mixing with all control rods assumed out (ARO).

The boron concentration limits also ensure a <span class="hi-exam">post-LOCA sump pH between 7.0 and 10.0</span> for the solution recirculated within containment. This pH band minimizes iodine evolution and minimizes chloride and caustic stress corrosion on mechanical systems. The minimum volume limit includes an allowance for water not usable due to tank discharge line location or other physical characteristics.
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-5.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-5.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[ECCS]], [[RHR]], [[CVCS]]
- Related concepts: [[ESF & Design]]
- Related exam questions: [[2023 Q91]]
- Related exam: [[2023 NRC Written Exam]]
