---
title: "TS 3.4 — Reactor Coolant System"
category: tech-specs
status: draft
aliases:
  - RCS tech specs
  - RCS loops TS
  - PORVs tech specs
  - RCS leakage TS
  - pressurizer TS
  - TS 3.4.7.2
---

<div class="ts-source-pdfs">
<strong>Source PDFs:</strong> <a href="/salem-study-system/ts-pdfs/ts-3-4.pdf" target="_blank">View TS 3.4 PDF (Full Section)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4.pdf" target="_blank">View Bases 3.4 PDF</a>
</div>

# TS 3.4 — Reactor Coolant System

## 3.4.1 — Reactor Coolant Loops and Coolant Circulation

### Startup and Power Operation (3.4.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.1</div>
<span class="hi">All reactor coolant loops shall be in operation.</span>
</div>

**Applicability:** Modes 1 and 2

**Action:** With less than required loops in operation, be in Hot Standby within <span class="val-trip">1 hour</span>.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q28</div>
Mode 2 RCP trip during startup at 4% power: with one RCS loop no longer in operation, LCO 3.4.1.1 requires the unit to <span class="hi-exam">be in Mode 3 within 1 hour</span>. <span class="hi-trap">Distinguish from: 15-minute timeline (wrong); "immediately initiate corrective action to return the loop to operable" (this is a Mode 4 / 3.4.1.3 action); "suspend boron dilution" (this is a Mode 3 / 3.4.1.2 action when no loop is in operation).</span>
</div>

### Hot Standby (3.4.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.2</div>
a. At least <span class="hi">two RCS loops</span> shall be OPERABLE<br>
b. At least one loop in operation when rod control system is deenergized<br>
c. All loops in operation when rod control system is energized
</div>

**Applicability:** Mode 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Less than required loops OPERABLE | Restore | <span class="val-alarm">72 hrs</span>, or Hot Shutdown in 12 hrs |
| No loop in operation | Suspend boron dilution; immediately restore a loop | Immediately |

<div class="callout callout-trap">
<div class="callout-label">Rod Control System De-energized Definition</div>
The rod control system is de-energized when: (1) both Rod Drive MG set motor breakers open, OR (2) both Rod Drive MG set generator breakers open, OR (3) at least three reactor trip and/or bypass breakers open. If none met, the system is considered energized.
</div>

All RCPs may be de-energized for up to 1 hour provided: (1) no boron dilution, (2) core outlet temp maintained ≥10°F below saturation, (3) rod control system de-energized. SG secondary level must be ≥5% narrow range. *(Amendment No. 282)*

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q94</div>
Mode 3 with 21 RDMG motor AND generator breakers closed and BOTH Reactor Trip Breakers A and B shut for rod control testing: fewer than 3 of the RTB/RTBBs are open, so <span class="hi-exam">rod control is ENERGIZED</span>. Per LCO 3.4.1.2.c, with rod control energized, <span class="hi-exam">all FOUR RCS loops must be in operation</span>, and the Bases (page B3/4 4-1) gives <span class="hi-exam">single failure considerations</span> as the reason. <span class="hi-trap">DNB is a Mode 1/2 bases (not Mode 3); the "one loop / mixing, prevent stratification, gradual reactivity changes" bases applies to when only ONE loop is required (rod control de-energized).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q77</div>
Mode 3 with 22 RDMG operating (motor & generator breakers shut), RTB "B" racked in and shut, RTB "A" and both RTBBs open: <span class="hi-exam">3 of the 4 RTB and RTBBs being open is considered "rod control de-energized"</span> (per TS page 3/4 4-2a) — even with an RDMG set in operation and a single RTB shut. With rod control de-energized, LCO 3.4.1.2 requires <span class="hi-exam">TWO operable RC loops (RCP, SG, and loop)</span> and <span class="hi-exam">ONE loop in operation</span>. With four RCPs operable initially, the trip of a single RCP <span class="hi-exam">does not require any action — minimum LCO is still met, no cooldown to Mode 4 required</span>. The bases provides "ensure mixing, prevent stratification, and produce gradual reactivity changes during boron concentration reductions in the RCS" as the reason for required loop operation. <span class="hi-trap">Trap B: "single failure criteria" is not the bases for the operation requirement — single failure criteria refers in this case to the minimum required loops IN OPERATION, not the bases statement.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q51</div>
After a reactor trip from 75% with one RCP stopped: RTB B is open and both bypass breakers not racked in, so <span class="hi-exam">rod control system is de-energized</span>. LCO 3.4.1.2 only requires <span class="hi-exam">two loops OPERABLE</span> when de-energized. With three loops still running, <span class="hi-exam">LCO 3.4.1.2 IS met</span>. <span class="hi-trap">Trap: candidates may assume all four loops must be OPERABLE after a trip, forgetting the de-energized allowance.</span>
</div>

### Hot Shutdown (3.4.1.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.3</div>
At least <span class="hi">two coolant loops</span> (RCS loops or RHR loops) shall be OPERABLE, and at least one in operation.
</div>

**Applicability:** Mode 4

<div class="callout callout-trap">
<div class="callout-label">RCP Start Restriction</div>
An RCP shall not be started with any RCS cold leg temp ≤ POPS enable temperature unless: (1) PZR water volume <1650 ft³ (~92% level), OR (2) SG secondary water temp <50°F above each RCS cold leg temp.
</div>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q1</div>
Per S2.OP-SO.RC-0001, with RCS Cold Leg temps &le;312&deg;F, <span class="hi-exam">at least ONE of</span> the two RCP start conditions must be met (NOT both). The concern is <span class="hi-exam">an RCS pressure transient from secondary energy addition</span>, not RCP motor degradation.
</div>

*Amendment No. 328*

### Cold Shutdown (3.4.1.4)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.4</div>
<span class="hi">Two RHR loops</span> shall be OPERABLE and at least one in operation.
</div>

**Applicability:** Mode 5

One RHR loop may be inoperable for up to 2 hours for surveillance testing if the other is OPERABLE and in operation. Four filled RCS loops with ≥2 SGs at ≥5% NR level may substitute for one RHR loop. *(Amendment No. 328)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.1 Reactor Coolant Loops and Coolant Circulation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.1</div>

**Modes 1 and 2:** The plant is designed to operate with <span class="hi-exam">all reactor coolant loops in operation</span> to meet DNB design criteria during all normal operations and anticipated transients. With less than all loops operating, the plant must be in at least Hot Standby within 1 hour.

**Mode 3:** <span class="hi-exam">A single RCS loop provides sufficient decay heat removal</span>, but single failure considerations require all loops in operation when the rod control system is energized, and at least one loop when de-energized.

**Mode 4:** A single RCS loop or RHR loop provides sufficient decay heat removal, but single failure considerations require at least 2 loops OPERABLE. If RCS loops are not OPERABLE, two RHR loops must be OPERABLE.

**Mode 5:** Single failure considerations require two RHR loops OPERABLE.

**Support systems:** For SW and CC, component redundancy is necessary to ensure no single active component failure causes loss of decay heat removal. <span class="hi-exam">One piping path of SW and CC is adequate when it supports both RHR loops.</span> Procedures require two RHR, two CC, and two SW pumps powered from two different vital buses.

**Four-loop substitution:** Four filled RCS loops with at least two SGs at ≥5% NR level may substitute for one RHR loop, ensuring a single failure does not cause loss of decay heat removal.

**Flow and mixing:** Operation of one RCP or one RHR pump provides adequate flow to <span class="hi-exam">ensure mixing, prevent stratification, and produce gradual reactivity changes</span> during boron concentration reductions. The reactivity change rate will be within the capability of operator recognition and control.

**RCP start restriction (below POPS enable temp):** Restrictions prevent RCS pressure transients caused by energy additions from the secondary system that could exceed Appendix G limits. The RCS is protected by either: (1) restricting pressurizer water volume (providing expansion volume), or (2) restricting RCP starts to when <span class="hi">SG secondary water temperature is < 50°F above each RCS cold leg temperature</span>.

*(Amendment No. 328)*
</div>
</details>

---

## 3.4.2 & 3.4.3 — Safety Valves

### Safety Valves — Shutdown (3.4.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.2</div>
A minimum of one pressurizer code safety valve shall be OPERABLE with a lift setting of <span class="hi">2485 psig ±3%</span>.
</div>

**Applicability:** Modes 4 and 5

**Action:** With no safety valve OPERABLE, immediately suspend positive reactivity changes and place an OPERABLE RHR loop in shutdown cooling mode. *(In Mode 5, an equivalent size vent pathway may be used.)*

### Safety Valves — Operating (3.4.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.3</div>
<span class="hi">All</span> pressurizer code safety valves shall be OPERABLE with a lift setting of <span class="hi">2485 psig ±3%</span>.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With one safety valve inoperable, restore within <span class="val-trip">15 minutes</span> or be in Hot Shutdown within 12 hours.

*Amendment No. 300*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.2 & 3.4.3 Safety Valves</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.2 & 3.4.3</div>

The pressurizer code safety valves operate to prevent the RCS from being pressurized above its Safety Limit of <span class="hi">2735 psig</span>. <span class="hi-exam">Each safety valve is designed to relieve 420000 lbs/hr of saturated steam at the valve setpoint.</span>

**Shutdown (3.4.2):** The relief capacity of <span class="hi-exam">a single safety valve is adequate to relieve any overpressure condition during shutdown</span>. If no safety valves are OPERABLE, an operating RHR loop connected to the RCS provides overpressure relief capability. The Overpressure Protection System (POPS) provides a diverse means of protection at low temperature. In Mode 5, an equivalent size vent path may satisfy the safety valve requirement when no code safety valves are OPERABLE.

**Operating (3.4.3):** During operation, all pressurizer code safety valves must be OPERABLE. <span class="hi-exam">The combined relief capacity of all safety valves is greater than the maximum surge rate from a complete loss of load</span> assuming no reactor trip until the first RPS trip setpoint is reached (no credit for direct reactor trip on loss of load) and no operation of PORVs or steam dump valves.

**Testing:** Demonstration of safety valve lift settings occurs only during shutdown per ASME Section XI. <span class="hi-exam">Surveillance allows a ±3% lift setpoint tolerance, but valves must be reset to within ±1% of lift setpoint following testing.</span>

*(Amendment No. 282)*
</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q96</div>
LCO 3.4.3 (PZR Code Safety Valves): in MODES 1-3 <span class="hi-exam">only ONE PZR Code safety valve is permitted to be inoperable at a time</span>. With ALL THREE PZR Code Safety Valves having an actual lift pressure of <span class="hi-exam">2735 psig</span> (above the LCO acceptance band, due to a faulty test device used during the refueling outage), all three are inoperable simultaneously — no specific TS action exists for that condition, so <span class="hi-exam">LCO 3.0.3 applies</span>: 1 hour to begin shutdown + 6 hours to Hot Standby = <span class="hi-exam">7 hours total</span>. From a 1200 discovery, Hot Standby is required by <span class="hi-exam">1900</span>.
</div>

---

## 3.4.4 — Pressurizer

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.4</div>
The pressurizer shall be OPERABLE with:<br>
- Water volume ≤ <span class="hi">1650 ft³ (92% indicated level)</span><br>
- At least <span class="hi">two groups of heaters</span>, each ≥150 kW, capable of being powered from emergency power
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Inoperable emergency power to heaters | Restore emergency power | <span class="val-alarm">72 hrs</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| Pressurizer otherwise inoperable | Be in Hot Standby with reactor trip breakers open | <span class="val-trip">6 hrs</span>, then Hot Shutdown in 6 hrs |

*Amendment No. 282*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.4 Pressurizer</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.4</div>

The limit on maximum water volume ensures the parameter is maintained within the normal steady-state envelope of operation assumed in the SAR. <span class="hi-exam">The maximum water volume also ensures that a steam bubble is formed and the RCS is not a hydraulically solid system.</span>

The requirement for a minimum number of pressurizer heaters OPERABLE <span class="hi-exam">enhances the capability to control RCS pressure and establish natural circulation</span>.

The Surveillance Frequency is controlled under the Surveillance Frequency Control Program (SFCP).

*(Amendment No. 282)*
</div>
</details>

---

## 3.4.5 — Relief Valves (PORVs and Block Valves)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.5</div>
<span class="hi">Two PORVs</span> and their associated block valves shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 or both PORVs inoperable (seat leakage) | Restore OR close block valve(s) with power maintained | <span class="val-alarm">1 hr</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| 1 PORV inoperable (other causes) | Restore OR close block valve and remove power | <span class="val-alarm">1 hr</span> to close; restore PORV in 72 hrs |
| Both PORVs inoperable (other causes) | Restore ≥1 OR close block valves and remove power; be in Hot Standby | <span class="val-trip">6 hrs</span> to act; Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| 1 block valve inoperable | Restore OR place PORV in manual | <span class="val-alarm">1 hr</span>; restore in 72 hrs |
| Both block valves inoperable | Restore OR place PORVs in manual; restore ≥1 block valve | <span class="val-alarm">1 hr</span>; ≥1 in 6 hrs |

<div class="callout callout-exam">
<div class="callout-label">Key Distinction</div>
When a PORV is inoperable due to seat leakage, the block valve is closed but power is MAINTAINED (so the block valve can be opened if needed for overpressure protection). When inoperable for other causes, the block valve is closed and power is REMOVED (isolating the failed-open path).
</div>

*Amendment No. 177*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.5 Relief Valves (PORVs and Block Valves)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.5</div>

PORV and block valve OPERABILITY is determined based on the ability to perform these functions:

**A. Manual PORV control** — Used to control RCS pressure. <span class="hi-exam">This function is used for the steam generator tube rupture accident and for plant shutdown.</span>

**B. Automatic PORV control** — <span class="hi-exam">Reduces challenges to the code safety valves for overpressurization events, including an inadvertent actuation of Safety Injection.</span>

**C. RCS pressure boundary integrity** — Controlling identified leakage and ensuring the ability to detect unidentified RCPB leakage.

**D. Manual block valve control (unblock/isolate)** — (1) Unblock an isolated PORV to allow manual and automatic RCS pressure control (Functions A and B), and (2) isolate a PORV with excessive seat leakage (Function C).

**E. Manual block valve control (stuck-open PORV)** — Isolate a stuck-open PORV.

<span class="hi-exam">The distinction between seat leakage and other causes determines whether block valve power is maintained or removed.</span> With seat leakage, block valve power is maintained so the PORV path remains available for overpressure protection. With other failures, power is removed to positively isolate the failed-open path.

*(Amendment No. 282)*
</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q87</div>
<span class="hi-exam">TS 3.4.5 action b: a PORV isolated by shutting its Block Valve (e.g., a failed-open 2PR1) requires a unit shutdown if the PORV is not restored to operable within 72 hours</span>. A leaking PORV isolated by its Block Valve (with power maintained to the Block Valve) does not require shutdown. See [[Pressurizer Level & Press Control]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q95</div>
LCO 3.4.5 PORV inoperable due to <span class="hi-exam">control circuitry failure</span> (not seat leakage): Required Action B directs closing the associated block valve (2PR7) and <span class="hi-exam">removing power</span> to 2PR7. Per OP-AA-108-101-1002, since removing power from the block valve is a <span class="hi-exam">1 hour or less TS REQUIRED ACTION</span>, configuration control is INITIALLY maintained with an <span class="hi-exam">Abnormal Component Position Sheet (ACPS)</span>. <span class="hi-trap">Trap: if the PORV were inoperable due to seat leakage, power would be MAINTAINED to the block valve. A WCD (Work Clearance Document) is hung as soon as practical AFTER the TS is entered, but the INITIAL configuration control tool for a 1-hour-or-less TSAS is an ACPS.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-c</div>
A <span class="hi-exam">leaking 2PR2 PZR PORV</span> (seat leakage) is isolated by AB.PZR-0001 by closing its block valve <span class="hi-exam">2PR7</span>. Because the cause is seat leakage, this is <span class="hi-exam">LCO 3.4.5 Condition 1 / Action a</span>: close the block valve <span class="hi-exam">with power MAINTAINED</span> (so it can be reopened for overpressure protection), within <span class="val-alarm">1 hour</span>. After isolating, the procedure directs notifying the SM/CRS to refer to TS 3.4.5 and the Event Classification Guide for Primary Leakage. The JPM diagnosis (sequential unisolation of 2PR6 then 2PR7 to find the rising-tailpipe valve) is the field method that identifies which PORV is the seat-leaker.
</div>

---

## 3.4.6 — Steam Generator Tube Integrity

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.6</div>
SG tube integrity shall be maintained and all tubes satisfying plugging criteria shall be plugged per the Steam Generator Program.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** If tube integrity not maintained, be in Hot Standby within 6 hours and Cold Shutdown within 30 hours. *(Amendment No. 291)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.6 Steam Generator Tube Integrity</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.6</div>

The LCO requires SG tube integrity be maintained and all tubes satisfying plugging criteria be plugged per the Steam Generator Program. <span class="hi-exam">A SG tube is defined as the entire length of the tube, including the tube wall, between the tube-to-tubesheet weld at the tube inlet and the tube-to-tubesheet weld at the tube outlet. The tube-to-tubesheet weld is not considered part of the tube.</span>

A SG tube has tube integrity when it satisfies the three SG performance criteria:

1. **Structural integrity** — Provides a margin of safety against tube burst or collapse under normal and accident conditions. Primary membrane stress intensity must not exceed yield strength for all ASME Code Service Level A (normal) and Level B (upset/abnormal) transients.

2. **Accident induced leakage** — Ensures primary-to-secondary leakage caused by a design basis accident (other than SGTR) is within accident analysis assumptions. <span class="hi-exam">The accident analysis assumes accident induced leakage does not exceed 1 gpm per SG.</span> This includes any leakage existing prior to the accident plus leakage induced during the accident.

3. **Operational leakage** — Provides an observable indication of SG tube conditions during operation. Limited to <span class="hi">150 gallons per day</span> primary-to-secondary through any one SG (per LCO 3.4.7.2). <span class="hi-exam">This limit is based on the assumption that a single crack leaking this amount would not propagate to a SGTR under the stress conditions of a LOCA or main steam line break.</span>

Actions may be entered independently for each SG tube (per Note). If tube integrity is not maintained, Hot Standby within 6 hours and Cold Shutdown within 36 hours.

*(Amendment No. 291)*
</div>
</details>

---

## 3.4.7 — RCS Leakage

### Leakage Detection Systems (3.4.7.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.7.1</div>
The following leakage detection systems shall be OPERABLE:<br>
a. Containment atmosphere particulate radioactivity monitor<br>
b. Containment pocket sump level monitor<br>
c. EITHER containment fan cooler condensate flow rate OR containment atmosphere gaseous radioactivity monitor
</div>

**Action:** With only 2 of 3 OPERABLE, continue up to 30 days with grab samples every 24 hours; otherwise Hot Standby in 6 hours. *(Amendment No. 282)*

### Operational Leakage (3.4.7.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.7.2</div>
RCS leakage shall be limited to:<br>
a. <span class="val-trip">No PRESSURE BOUNDARY LEAKAGE</span><br>
b. <span class="hi">≤1 gpm UNIDENTIFIED LEAKAGE</span><br>
c. <span class="hi">≤150 gallons per day</span> primary-to-secondary leakage through any one SG<br>
d. <span class="hi">≤10 gpm IDENTIFIED LEAKAGE</span><br>
f. <span class="hi">≤1 gpm</span> from any RCS Pressure Isolation Valve (at 2230 ±20 psig)
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Any PRESSURE BOUNDARY LEAKAGE or primary-to-secondary not within limit | Hot Standby in 6 hrs; Cold Shutdown in 30 hrs | <span class="val-trip">Immediately</span> |
| Other leakage above limits | Reduce to within limits | <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| Pressure Isolation Valve leakage above limit | Isolate with ≥2 closed manual or deactivated auto valves | <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |

*Amendment No. 304*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.7 RCS Leakage</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.7</div>

**3.4.7.1 Leakage Detection Systems:** The RCS leakage detection systems monitor and detect leakage from the RCPB, consistent with the recommendations of <span class="hi">Regulatory Guide 1.45</span>, "Reactor Coolant Pressure Boundary Leakage Detection Systems" (May 1973).

**3.4.7.2 Operational Leakage:**

*Unidentified leakage:* Industry experience shows the unidentified portion of RCS leakage can be reduced to a threshold value of <span class="hi-exam">less than 1 gpm, sufficiently low to ensure early detection of additional leakage</span>.

*Identified leakage:* The <span class="hi">10 gpm</span> limit provides allowance for a limited amount of leakage from known sources whose presence will not interfere with detection of UNIDENTIFIED LEAKAGE.

*Pressure boundary leakage:* <span class="hi-exam">PRESSURE BOUNDARY LEAKAGE of any magnitude is unacceptable since it may be indicative of an impending gross failure of the pressure boundary.</span> The presence of any pressure boundary leakage requires the unit to be promptly placed in Cold Shutdown. <span class="hi-exam">Leakage past seals and gaskets is NOT pressure boundary leakage.</span>

*Primary-to-secondary leakage:* The <span class="hi">150 gallons per day</span> per SG limit is based on the operational leakage performance criterion in NEI 97-06. The limit, in conjunction with the Steam Generator Program, is an effective measure for minimizing the frequency of SGTRs. <span class="hi-exam">The dose analyses are based on total primary-to-secondary leakage from all SGs of 1 gpm as a result of accident induced conditions</span> (per 10 CFR 50.67). The 150 gpd limit is measured at room temperature per EPRI guidelines. <span class="hi-exam">If leakage cannot be assigned to an individual SG, all primary-to-secondary leakage should be conservatively assumed to be from one SG.</span>

*Pressure Isolation Valves (PIVs):* The function of RCS PIVs is to separate the high-pressure RCS from attached low-pressure systems. <span class="hi-exam">Leakage through both series PIVs in a line must be included as IDENTIFIED LEAKAGE.</span> A known component of identified leakage before operation begins is the least of the two individual leak rates for leaking series PIVs. The main purpose of the PIV leakage limit is to <span class="hi-exam">prevent overpressure failure of the low-pressure portions of connecting systems</span>. PIV leakage could lead to a LOCA outside of containment — an unanalyzed accident that could degrade low-pressure injection capability.

**Actions:** The 4-hour action time allows time to verify leakage rates and either identify unidentified leakage or reduce leakage to within limits. In Cold Shutdown, pressure stresses on the RCPB are much lower and further deterioration is much less likely.

**Surveillances:** RCS water inventory balance must be performed at steady state. <span class="hi-exam">Steady state is defined as stable RCS pressure, temperature, power level, pressurizer and makeup tank levels, makeup and letdown, and RCP seal injection and return flows.</span> A Note provides a 12-hour allowance after establishing steady state to collect and process all necessary data. Primary-to-secondary leakage is determined using continuous process radiation monitors or radiochemical grab sampling per EPRI guidelines.

*(Amendment No. 304)*
</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q86</div>
The RCS Water Inventory Balance (Surveillance Requirement 4.4.7.2.1.d, performed via S2.OP-ST.RC-0008) is required in Modes 1–4, but <span class="hi-exam">SR 4.4.7.2.1.d specifically states the provisions of Tech Spec 4.0.4 are NOT applicable for entry into Mode 4</span>. Therefore an overdue balance does not bar entry into Mode 4 — per S2.OP-IO.ZZ-0002 P&amp;L 3.8 the surveillance need not be completed until <span class="hi-exam">12 hours after steady-state operation is established</span>. <span class="hi-trap">TS 4.0.3 (for missed/overdue surveillances) does not apply because 4.0.4 NA permits the mode change without performing the balance first.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q97</div>
CVCS leak vs. RCS operational leakage: a leak from 2CV6 (Letdown Relief Valve) is a <span class="hi-exam">CVCS auxiliary system leak, NOT RCS pressure boundary leakage</span>. TS 3.4.7.2 remains MET because CVCS piping is outside the RCS boundary. Once letdown is isolated and the leak stops, no TS action or Emergency Declaration is required. <span class="hi-trap">The CVCS is NOT part of the RCS -- it is an auxiliary system that interfaces with the RCS.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 RO-A1-1</div>
S2.OP-SO.RC-0004 §5.3 Containment Sump leak-rate calculation following an unexpected OHA C-2 CNTMT SUMP PMP START. Quantified leak rate ~<span class="hi-exam">0.9 gpm</span> (320 minutes between sump-pump cycles per Attachment 3). The two action thresholds bracket the unidentified leakage limit: <span class="hi-exam">&gt; 0.85 gpm</span> initiates Section 5.6 trending only; <span class="hi-exam">&gt; 1.0 gpm</span> initiates S2.OP-ST.RC-0008 RCS Water Inventory Balance and refers to TS 3.4.7.2. At 0.9 gpm the unidentified-leakage LCO 3.4.7.2.b (≤1 gpm) is still MET, so no TS action time starts.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak with leakage &gt;<span class="hi-exam">150 gpd primary-to-secondary</span> through a single SG. CRS enters <span class="hi-exam">LCO 3.4.7.2.c — Action Level 3</span> per AB.SG-0001: be &lt;50% power within 1 hour and Hot Standby within 6 hours. Leak escalates to a tube rupture before completion of the controlled shutdown.
</div>

---

## 3.4.9 — Specific Activity

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.9</div>
The specific activity of the primary coolant shall be limited to:<br>
a. ≤ <span class="val-alarm">1.0 μCi/gram</span> DOSE EQUIVALENT I-131, and<br>
b. ≤ <span class="val-alarm">600 μCi/gram</span> DOSE EQUIVALENT XE-133.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| DE I-131 > 1.0 μCi/gm | Verify DE I-131 ≤ 60 μCi/gm every 4 hours AND restore ≤ 1.0 μCi/gm | <span class="val-alarm">48 hours</span> |
| DE XE-133 > 600 μCi/gm | Restore ≤ 600 μCi/gm | <span class="val-alarm">48 hours</span> |
| Unable to restore | Hot Standby in 6 hours, Cold Shutdown in 30 hours | 6 + 30 hrs |

**Note:** SR 4.4.9.1 not required in Mode 4; not required in Mode 3 until 24 hours after Tavg > 500°F.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.9 Specific Activity</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.9</div>

In Modes 1-4, operation within the LCO limits for DOSE EQUIVALENT I-131 and DOSE EQUIVALENT XE-133 is necessary to <span class="hi-exam">limit the potential consequences of a steam line break (SLB) or steam generator tube rupture (SGTR) to within acceptance criteria</span>. Violation of the LCO may result in coolant radioactivity levels that could, in the event of an SLB or SGTR, lead to doses exceeding acceptance criteria.

**DE I-131 > LCO limit:** Samples at 4-hour intervals must demonstrate specific activity < <span class="hi">60.0 μCi/gm</span>. Must be restored within 48 hours. <span class="hi-exam">The 48-hour completion time is acceptable since an iodine spike is expected to restore to normal concentration within this period</span>, and there is a low probability of an SLB or SGTR during this time.

**DE XE-133 > LCO limit:** Must be restored within 48 hours on the same basis (noble gas spike expected to restore within this period).

**TS 3.0.4.c allowance:** A Note permits use of TS 3.0.4.c provisions, <span class="hi-exam">allowing entry into applicable MODES while relying on Actions while the specific activity LCO limit is not met</span>. This is acceptable due to significant conservatism in the specific activity limit and the low probability of a limiting event. <span class="hi-exam">(Tested: 2019 Q84 — crew IS permitted to raise TAVG above 500 &deg;F and enter Mode 1/2 while RCS activity exceeds LCO 3.4.9 limit, per LCO 3.0.4.c.)</span>

**If DE I-131 > 60 μCi/gm** or action completion times not met: Hot Standby within 6 hours and Cold Shutdown within 30 hours.

**SR 4.4.9.1** — Gamma isotopic analysis measures noble gas specific activity per SFCP. The measurement is the sum of degassed gamma activities and gaseous gamma activities. <span class="hi-exam">If a specific noble gas nuclide listed in the definition of DOSE EQUIVALENT XE-133 is not detected, it should be assumed present at the minimum detectable activity.</span> Due to the inherent difficulty in detecting Kr-85 (masking from F-18 and I-134), it is acceptable to include the minimum detectable activity for Kr-85.

**SR 4.4.9.2** — Ensures iodine specific activity remains within limit during normal operation and following fast power changes when iodine spiking is more apt to occur. <span class="hi-exam">The sample frequency of 2 to 6 hours after a power change > 15% RTP within a 1-hour period is established because iodine levels peak during this time following spike initiation.</span> Samples at other times would provide inaccurate results.

*(Amendment No. 318)*
</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q86</div>
DEI-131 at 8 μCi/gm (above the 1.0 μCi/gm LCO 3.4.9 limit but below the line of graph 3.4-1): per LCO 3.4.9 Action, <span class="hi-exam">operation can continue for 48 hours, then Hot Standby with Tavg &lt;500&deg;F in 6 hours</span>. Sample taken at 1000 on March 10 → 48 hours later = 1000 March 12 → +6 hours = 1600 March 12. Bases for the action: <span class="hi-exam">ensures the resulting 2-hour dose at the Site Area Boundary will not exceed an appropriately small fraction of Part 100 limits following an SGTR accident in conjunction with an assumed primary-to-secondary leakage rate of 1 gpm</span>. <span class="hi-trap">Trap: distractors substitute "Protected Area Boundary" for the correct "Site Area Boundary." Other trap: alternate bases statement (saturation pressure of primary coolant below atmospheric release lift pressure) describes the LCO LIMIT bases, not the time-clock action bases.</span>
</div>

---

## 3.4.10 — Pressure/Temperature Limits

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.10.1 — RCS P/T Limits</div>
RCS temperature and pressure (except the pressurizer) shall be limited in accordance with the PTLR with:<br>
a. Maximum heatup rate per PTLR<br>
b. Maximum cooldown rate per PTLR<br>
c. Maximum temperature change per PTLR during hydrostatic testing above design pressure
</div>

**Applicability:** At all times

**Action:** With limits exceeded, restore within <span class="val-trip">30 minutes</span>; perform engineering evaluation on structural integrity; if unacceptable, Hot Standby in 6 hours and reduce to <200°F and <500 psig within 30 hours.

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.10.2 — Pressurizer P/T Limits</div>
Pressurizer temperature limited to:<br>
a. Maximum heatup: <span class="val-alarm">100°F/hr</span><br>
b. Maximum cooldown: <span class="val-alarm">200°F/hr</span><br>
c. Maximum spray water temperature differential: <span class="val-alarm">320°F</span>
</div>

**Applicability:** At all times

**Action:** With limits exceeded, restore within <span class="val-trip">30 minutes</span>; engineering evaluation; if unacceptable, Hot Standby in 6 hours and reduce PZR pressure to <500 psig within 30 hours.

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.10.3 — Overpressure Protection Systems (POPS / LTOP)</div>
At least one of the following shall be OPERABLE:<br>
a. Two POPS relief valves with lift setting per PTLR, or<br>
b. RCS depressurized with an RCS vent ≥ <span class="hi">3.14 square inches</span>
</div>

**Applicability:** When any RCS cold leg temperature ≤ POPS enable temperature per PTLR (except when reactor vessel head is removed)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One POPS inoperable (Mode 4) | Restore OR depressurize and vent through ≥3.14 in² vent | <span class="val-alarm">7 days</span> then 8 hrs |
| One POPS inoperable (Modes 5-6, head installed) | Restore OR depressurize and vent | <span class="val-alarm">24 hours</span> then 8 hrs |
| Both POPS inoperable | Depressurize and vent through ≥3.14 in² vent | <span class="val-trip">8 hours</span> |

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3.4.10 Pressure/Temperature Limits and POPS</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3.4.10</div>

**P/T Limits (3.4.10.1):** Temperature and pressure changes during heatup and cooldown are limited per ASME Boiler and Pressure Vessel Code, Section XI, Appendix G. Allowable combinations of pressure and temperature for specific rate changes are below and to the right of the PTLR limit lines. Cooldown rate limits between those presented may be obtained by interpolation.

<span class="hi-exam">The SG secondary side must not be pressurized above 200 psig if SG temperature is below 70°F.</span>

The heatup and cooldown curves are composite curves constructed from point-by-point comparison of steady-state data, finite rate data, and reactor vessel/head flange data. <span class="hi-exam">The heatup curve represents different restrictions than the cooldown curve because the thermal gradient directions through the vessel wall are reversed</span>, altering the location of tensile stress between outer and inner walls. The criticality limit curve must be ≥40°F above the heatup or cooldown curve.

Fracture toughness properties of ferritic reactor vessel materials are determined per NRC Standard Review Plan and ASTM E185-82. P/T limit curves are calculated using the most limiting value of the nil-ductility reference temperature (RT<sub>NDT</sub>) at the 1/4T and 3/4T locations of the beltline and extended beltline materials. <span class="hi-exam">Reactor operation and fast neutron irradiation (E > 1 MeV) can cause an increase in RT<sub>NDT</sub>.</span> The adjusted reference temperature (ART) is predicted based on fluence and the copper and nickel content of the material, using Regulatory Guide 1.99, Rev. 2. Neutron fluence as a function of Effective Full Power Years (EFPY) is calculated per Regulatory Guide 1.190.

**Pressurizer P/T Limits (3.4.10.2):** Although the pressurizer operates in temperature ranges above those where non-ductile failure is a concern, operating limits (<span class="hi">100°F/hr heatup, 200°F/hr cooldown, 320°F spray ΔT</span>) ensure compatibility with the fatigue analysis performed per ASME Code.

**Overpressure Protection Systems (3.4.10.3):** The OPERABILITY of two POPS valves or an RCS vent of ><span class="hi">3.14 in²</span> ensures the RCS is protected from pressure transients exceeding Appendix G limits when any cold leg is ≤ POPS enable temperature. <span class="hi-exam">Either POPS valve has adequate relieving capability</span> to protect the RCS when the transient is limited to either: (1) start of an idle RCP with SG secondary water temperature ≤ 50°F above RCS cold leg temperatures, or (2) start of an Intermediate Head SI pump into a water-solid RCS, or start of a High Head SI pump with a running Positive Displacement pump into a water-solid RCS.

<span class="hi-exam">The minimum power sources for POPS operability consist of a normal (offsite) and emergency (battery) power source for each train.</span> Emergency diesel generators are NOT required for POPS to meet single failure criteria and therefore are NOT required for POPS OPERABILITY.

<span class="hi-exam">LCO 3.0.4.b is not applicable to an inoperable POPS when entering MODE 4.</span> There is an increased risk entering Mode 4 from Mode 5 with an inoperable POPS. The provisions of LCO 3.0.4.b (which allow entry into a MODE with the LCO not met after a risk assessment) should not be applied in this circumstance.

*(Amendment No. 328)*
</div>
</details>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q23</div>
The <span class="hi-exam">200&deg;F/hr PZR cooldown limit (TS 3.4.10.2.b)</span> appears as a distractor in the TRIP-5 natural-circulation cooldown timing problem: applying 200&deg;F/hr to drop RCS from 500&deg;F to 450&deg;F would give ~15 min, but the EOP-directed natural-circulation cooldown rate is <span class="hi-trap">&lt;100&deg;F/hr (NOT the TS PZR cooldown limit)</span>, giving 30 minutes. The RCS P/T cooldown limit is per the PTLR, not a fixed value.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q84</div>
The TS RCS cooldown limit per PTLR is applied in EOP-LOCA-5 as <span class="hi-exam">&lt;100&deg;F/hr</span> when initiating a cooldown — this prevents an unwanted Thermal Shock condition that would complicate matters since CFSTs are still in effect in LOCA-5.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q7</div>
LCO 3.4.10.2 PZR heatup rate = <span class="hi-exam"><span class="val-trip">100&deg;F/hr</span></span> maximum. PZR cooldown rate = <span class="hi-exam">200&deg;F/hr</span> maximum. <span class="hi-trap">Heatup and cooldown limits are different — candidates confuse 100 vs 200. The cooldown limit is DOUBLE the heatup limit.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q91</div>
Action "e": <span class="hi-exam">LCO 3.0.4.b is NOT applicable when entering MODE 4 from MODE 5</span> with an inoperable POPS channel. A risk assessment cannot be used to justify this mode change. The LTOP channel <span class="hi-exam">must be restored to OPERABLE status before entering Mode 4</span>. <span class="hi-trap">Do not confuse with actions "a" (7-day restore in Mode 4) or "b" (24-hour restore in Modes 5-6) — those apply AFTER entering the applicable mode, not for making the mode change.</span>
</div>



## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[RHR]], [[Steam Generator & Blowdown]]
- Related concepts: [[ESF & Design]]
- Related procedures: [[S2.OP-ST.RC-0008 — RCS Water Inventory Balance]], [[S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related exam questions: [[2016 Q28]], [[2016 Q77]], [[2016 Q84]], [[2016 Q86]], [[2016 Q96]], [[2018 Q51]], [[2018 Q69]], [[2019 Q1]], [[2019 Q7]], [[2019 Q84]], [[2019 Q95]], [[2022 Q91]], [[2023 Q97]], [[2015 Q87]], [[2014 Q86]], [[2012 Q23]], [[2012 Q94]]
- Related JPMs: [[2014 JPM Sim-c]], [[2016 JPM RO-A1-1]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]]
- Related exam: [[2014 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
