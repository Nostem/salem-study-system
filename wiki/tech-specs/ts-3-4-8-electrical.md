---
title: "TS 3/4.8 — Electrical"
category: tech-specs
status: draft
aliases:
  - electrical tech specs
  - AC sources TS
  - DC sources TS
  - diesel generator TS
---

# TS 3/4.8 — Electrical Power Systems

## 3/4.8.1 — AC Sources

### AC Sources — Operating (3.8.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.1.1</div>
The following AC electrical power sources shall be OPERABLE:<br>
a. Two physically independent circuits between the offsite transmission network and the onsite Class 1E distribution system<br>
b. Three separate and independent diesel generators, each with a separate fuel supply and day tank
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Key Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 offsite circuit inoperable | Restore | <span class="val-alarm">72 hrs</span> |
| 1 diesel generator inoperable | Demonstrate OPERABILITY of remaining DGs; restore | <span class="val-alarm">72 hrs</span> |
| 2 offsite circuits inoperable | Restore at least one | <span class="val-trip">24 hrs</span> |
| 1 offsite circuit AND 1 DG inoperable | Restore offsite OR DG | <span class="val-trip">12 hrs</span> |

<div class="callout callout-exam">
<div class="callout-label">Cross-Train Check</div>
When one DG is inoperable, the OPERABILITY of the remaining DGs must be demonstrated within 24 hours. This is to ensure the redundant DGs are not affected by a common-cause failure.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.8.1.1 AC Sources (Operating)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.8.1.1</div>

**OPERABILITY Basis**

<span class="hi-exam">OPERABILITY of the AC electrical power sources ensures sufficient power is available for: (1) safe shutdown of the facility, and (2) mitigation and control of accident conditions.</span> The minimum independent and redundant AC and DC power sources satisfy the requirements of GDC 17 of 10 CFR Part 50, Appendix A.

The sources are consistent with initial condition assumptions in the accident analyses — <span class="hi-exam">at least two independent sets of onsite AC and DC sources must be OPERABLE during an accident with an assumed loss of all offsite power and a single failure of one onsite AC source.</span>

**Action Statement Logic**

ACTION requirements specify different completion times commensurate with the level of degradation:

- <span class="hi-exam">**Action a.2** (one train without offsite power): assurance that a coincident single failure of the associated DG will not cause a complete loss of all critical redundant required systems.</span>
- <span class="hi-exam">**Action b.2** (one DG inoperable): assurance that a loss of offsite power will not cause a complete loss of safety function of critical systems.</span>
- <span class="hi-exam">**Action d.2** (two offsite circuits inoperable): assurance that an event plus a coincident single failure will not cause complete loss of redundant required safety functions.</span>

<span class="hi">These systems are powered from an independent AC electrical power train. Redundant required systems are not necessarily powered from AC electrical sources</span> (e.g., the turbine-driven AFW pump is redundant to the motor-driven pumps).

When a system or component is determined inoperable solely because its normal power source OR its emergency power source is inoperable, it may still be considered OPERABLE provided the applicable cross-train action (a.2, b.2, or d.2) is satisfied.

<span class="hi-exam">LCO 3.0.4.b is NOT applicable to an inoperable DG — a risk assessment cannot be used to enter a MODE or other specified condition in the Applicability with an inoperable DG.</span>

**Completion Time Rationale**

The completion time allows the operator time to evaluate and repair. An exception to the normal "time zero" for the allowed outage clock exists: <span class="hi-exam">the clock starts only upon discovery that BOTH (a) one train has no offsite power, the DG is inoperable, or two offsite circuits are inoperable, AND (b) a required system on the other train is inoperable.</span>

The remaining OPERABLE AC supplies are adequate on a component basis — single failure protection may have been lost, but the safety function itself has not been lost.

<span class="hi-exam">The completion time for Condition d (loss of both offsite circuits) is reduced to <span class="hi">12 hours</span>, shorter than the time allowed for one train without offsite power (Action a.2).</span> Reg Guide 1.93 allows 24 hours for two required offsite circuits inoperable, but that assumes two complete safety trains OPERABLE. The shorter 12-hour time applies because a concurrent redundant required system failure cannot be ruled out.

**14-Day EDG Allowed Outage Time Extension**

<span class="hi-exam">LCO 3.8.1.1, Action b.4.a.2 allows the EDG AOT to be extended from <span class="hi">72 hours to 14 days</span></span> with the following commitments (when utilizing extended EDG AOT &gt; 72 hours and &lt; 14 days):

1. When a DG is removed from service, the <span class="hi-exam">TDAFW pump and its supporting systems must be OPERABLE</span>
2. Voluntary entry is not permitted during adverse weather conditions
3. The system load dispatcher is contacted once per day regarding grid perturbations
4. Licensed operators are trained on the SPS (supplemental power supply) purpose and use
5. Operating crews are briefed on the EDG work plan and LOOP/SBO procedures
6. If any commitment is not met, enter the corrective action program
</div>
</details>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — EDG Surveillance Requirements</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — EDG Surveillance</div>

DG surveillance is per Reg Guide 1.9 (DG set capacity for standby power), Reg Guide 1.108 (periodic testing of DGs), and Reg Guide 1.137 (fuel oil testing). Surveillance frequency is based on operating experience, reliability, and plant risk, controlled under the Surveillance Frequency Control Program.

**Voltage and Frequency**

<span class="hi-exam">The minimum voltage and frequency values in the SR ensure the EDG can accept DBA loading while maintaining acceptable voltage and frequency.</span> Stable operation at normal voltage and frequency is also essential for OPERABILITY — <span class="hi-exam">no time constraint is imposed on voltage/frequency oscillations to dampen.</span>

<span class="hi-exam">The narrower band for steady-state frequency ensures the EDG is not in an overloaded (isochronous steady state) condition during accident conditions.</span> Steady state is achieved after 1 minute with all loads sequenced. <span class="hi-exam">The narrower band for steady-state voltage ensures the voltage regulator protects against over-voltages during an accident.</span> A wider voltage band is appropriate when the EDG is paralleled to the grid (governor droop mode).

All voltages and frequencies in SR 4.8.1.1.2 are representative values — instrument inaccuracies for EDG voltage and frequency are administratively controlled.

**Start Time and Standby Condition**

<span class="hi-exam">The <span class="hi">13-second</span> start time requirement is based on the Westinghouse assumption of <span class="hi">15 seconds</span> from occurrence to electrical power to the first sequenced safeguards pump</span> (BURL-3011 dated Nov 13, 1974; BURL-1531 dated July 27, 1970). Supporting times are in UFSAR Section 15.4.

"Standby condition" means the engine state immediately prior to starting for the surveillance. <span class="hi-exam">Lube oil temperature must be between <span class="hi">100 &deg;F and 170 &deg;F</span>; the minimum lube oil temperature for an OPERABLE diesel is <span class="hi">100 &deg;F</span>.</span>
</div>
</details>

### AC Sources — Shutdown (3.8.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.1.2</div>
As a minimum, the following AC sources shall be OPERABLE:<br>
a. One circuit between offsite network and onsite distribution<br>
b. One diesel generator with fuel supply
</div>

**Applicability:** Modes 5 and 6

**Action:** With less than required, suspend CORE ALTERATIONS, handling of irradiated fuel, and operations with positive reactivity changes. Immediately initiate action to restore.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.8.1.2 AC Sources (Shutdown)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.8.1.2</div>

<span class="hi-exam">The minimum specified AC and DC sources during shutdown and refueling ensure: (1) the facility can be maintained in a shutdown or refueling condition for extended periods, and (2) sufficient instrumentation and control capability is available for monitoring.</span>

Specs 3.8.2.2, 3.8.2.4, and 3.8.2.6 include movement of irradiated fuel assemblies — these requirements ensure adequate electrical power for Fuel Handling Building ventilation.

<span class="hi-exam">An offsite circuit is considered inoperable if it is not available to all required trains</span> — the option exists to declare all required features associated with that circuit inoperable instead.

<span class="hi-exam">With both required DGs inoperable, the minimum required diversity of AC power is not available — suspend CORE ALTERATIONS, irradiated fuel movement, and positive reactivity additions.</span>
</div>
</details>

---

## 3/4.8.2 — DC Sources

### DC Sources — Operating (3.8.2.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.2.1</div>
The following DC power sources shall be OPERABLE:<br>
a. Three 125-volt battery banks with associated chargers<br>
b. Three 28-volt battery supplies for reactor trip breaker UV coils
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Key Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 battery bank or charger inoperable | Restore | <span class="val-alarm">2 hrs</span> (battery) or <span class="val-alarm">24 hrs</span> (charger with spare) |
| 1 of 3 28V supplies inoperable | Restore | <span class="val-alarm">48 hrs</span> |

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.8.2.1 DC Sources (Operating)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.8.2.1</div>

<span class="hi-exam">The 125V DC batteries provide control power for switchgear operation, diesel generator starting, reactor trip breaker control, and emergency instrumentation.</span> OPERABILITY of the DC sources ensures sufficient power for safe shutdown and accident mitigation, consistent with GDC 17. The 2-hour completion time for a battery reflects the critical importance of DC power for safety functions.

<span class="hi-exam">The three <span class="hi">28V</span> battery supplies power the reactor trip breaker undervoltage (UV) coils — loss of these supplies causes a reactor trip (fail-safe design).</span> The 48-hour completion time for one inoperable 28V supply reflects that the remaining two supplies maintain trip capability.
</div>
</details>

### DC Sources — Shutdown (3.8.2.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.2.2</div>
As a minimum, the following DC source shall be OPERABLE:<br>
One 125-volt battery bank with associated charger
</div>

**Applicability:** Modes 5 and 6

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.8.2.2 DC Sources (Shutdown)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.8.2.2</div>

<span class="hi-exam">The minimum specified DC source during shutdown and refueling ensures sufficient instrumentation and control capability for monitoring and maintaining the facility in a safe shutdown condition for extended periods.</span> Requirements in Specs 3.8.2.2, 3.8.2.4, and 3.8.2.6 that address movement of irradiated fuel assemblies ensure adequate electrical power for Fuel Handling Building ventilation.
</div>
</details>

---

## 3/4.8.3 — Onsite Power Distribution

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.3.1</div>
The following electrical busses shall be energized and OPERABLE:<br>
- Three 4160V vital busses<br>
- Three 460V vital busses<br>
- Three 115V AC vital instrument busses<br>
- Three 125V DC busses
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one bus inoperable, restore within <span class="val-alarm">8 hours</span> or be in Hot Standby within 6 hours and Hot Shutdown within 6 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.8.3 Onsite Power Distribution</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.8.3</div>

<span class="hi-exam">Containment electrical penetrations and penetration conductors are protected by either deenergizing circuits not required during reactor operation, or by demonstrating OPERABILITY of primary and backup overcurrent protection circuit breakers during periodic surveillance.</span>

Surveillance frequency is based on operating experience, equipment reliability, and plant risk, controlled under the Surveillance Frequency Control Program.
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-8-1.pdf" target="_blank">View TS PDF (AC Sources)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-8-2.pdf" target="_blank">View TS PDF (DC Sources)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-8-3.pdf" target="_blank">View TS PDF (Distribution)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-8.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[500KV]], [[4KV]], [[EDGs]], [[DC Power]]
- Related exam questions: [[2023 Q89]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
