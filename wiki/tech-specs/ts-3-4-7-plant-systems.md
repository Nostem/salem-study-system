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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.1.1 Main Steam Safety Valves</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.1.1</div>

<span class="hi-exam">The MSSVs ensure secondary system pressure is limited to within <span class="hi">110%</span> of the design pressure of <span class="hi">1085 psig</span> during the most severe anticipated transient.</span> They also protect against overpressurization of the RCS pressure boundary by providing a heat sink for energy removal when the preferred heat sink is unavailable.

<span class="hi-exam">The maximum relieving capacity case is a turbine trip from 100% RTP coincident with a loss of condenser heat sink (no steam bypass to the condenser).</span> Total relieving capacity for all valves on all steam lines is <span class="hi">16.66 x 10⁶ lbs/hr</span>, approximately 110% of the maximum calculated steam flow of <span class="hi">15.12 x 10⁶ lbs/hr</span> at 100% RTP. A minimum of <span class="hi-exam">2 OPERABLE safety valves per OPERABLE steam generator</span> ensures sufficient relieving capacity for the allowable power restriction in Table 3.7-1.

The acceptable power levels for operation with inoperable MSSVs were determined by explicit transient analysis. <span class="hi-exam">The limiting anticipated operational occurrence is a loss of external electrical load and/or turbine trip.</span> The transient analysis assumes MSSVs start to open at the lift setpoint with <span class="hi">±3%</span> tolerance plus a <span class="hi">5 psi</span> accumulation ramp to fully open. <span class="hi-exam">Inoperable MSSVs are assumed to be those with the lowest lift settings.</span>

For three inoperable MSSVs in one or more steam generators, <span class="hi-exam">thermal power must be reduced AND the Power Range Neutron Flux High trip setpoint must be reduced</span> to prevent secondary overpressurization. RCCA Bank Withdrawal at Power analyses demonstrate adequate relief capacity with up to two inoperable safety valves per SG — the OTDT reactor trip plus remaining MSSVs is sufficient to meet secondary pressurization limits.

Following surveillance testing, valves must be reset to within <span class="hi">±1%</span> of the lift setpoint (narrower than the ±3% allowance during operation) to allow for drift.

*Amendment No. 259*
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q42</div>
MSSVs will FIRST start to open when main steam line pressure exceeds <span class="hi-exam"><span class="val-trip">1070 psig</span> (xMS15, the lowest lift setting)</span>. LCO 3.7.1.1 purpose is dual: <span class="hi-exam">limit secondary system pressure to within 110% of design pressure AND protect against overpressurization of the Reactor Coolant Pressure boundary</span>. <span class="hi-trap">Trap: the MSSVs protect both secondary AND primary pressure boundaries — not secondary only.</span>
</div>

---

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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.1.2 Auxiliary Feedwater System</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.1.2</div>

<span class="hi-exam">The AFW system ensures the RCS can be cooled down to less than <span class="hi">350°F</span> from normal operating conditions in the event of a total loss of offsite power.</span>

Verifying each AFW pump's developed head at the flow test point confirms pump performance has not degraded and that accident analysis assumptions remain valid. <span class="hi-exam">Flow and differential head testing is required by ASME Code Section XI. Because it is undesirable to introduce cold AFW into the steam generators while operating, the test is performed on recirculation flow.</span> This confirms one point on the pump design curve (head vs. flow) and is indicative of overall pump performance.

The flow path to each steam generator is ensured by maintaining all manual maintenance valves locked open. A spool piece (length of pipe) may be used as an equivalent to a locked-open manual valve.

<span class="hi-exam">LCO 3.0.4.b is NOT applicable to an inoperable AFW train</span> — there is an increased risk associated with entering an applicable MODE with an AFW train inoperable, so mode change with the LCO not met (even after a risk assessment) is prohibited.

*Amendment No. 258*
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q97</div>
The TS 3.7.1.2 Bases reason for maintaining an OPERABLE AFW System in Modes 1-3 is that it <span class="hi-exam">ensures the RCS can be cooled down to &lt;<span class="hi">350°F</span> from normal conditions following a complete loss of off-site power</span>. <span class="hi-trap">Trap distractors not in the 3.7.1.2 Bases: the AFWST 8-hour HSB-with-atmospheric-steam-discharge value, the SGTR cooldown to &lt;500°F (which limits off-site dose), and the ATWT decay-heat-removal reason are all true facts elsewhere but are NOT the stated 3.7.1.2 operability bases.</span>
</div>

---

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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.1.3 Auxiliary Feed Storage Tank</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.1.3</div>

<span class="hi-exam">The minimum water volume of <span class="hi">200000 gallons</span> ensures sufficient water is available to maintain the RCS at HOT STANDBY conditions for <span class="hi">8 hours</span> with steam discharge to the atmosphere concurrent with a total loss of offsite power.</span> The contained water volume limit includes an allowance for water not usable because of tank discharge line location or other physical characteristics.

*Amendment No. 258*
</div>
</details>

---

## 3/4.7.1.4 — Secondary Coolant Activity

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.1.4</div>
The specific activity of the secondary coolant system shall be ≤ <span class="val-alarm">0.10 μCi/gram</span> DOSE EQUIVALENT I-131.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With specific activity > 0.10 μCi/gram DE I-131, be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

**SR:** Per Table 4.7-2 sampling and analysis program (gross activity per SFCP; isotopic analysis when gross activity >10% of limit).

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.1.4 Secondary Coolant Activity</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.1.4</div>

<span class="hi-exam">The secondary specific activity limit ensures the resultant offsite radiation dose is limited to a small fraction of 10 CFR Part 100 limits in the event of a steam line rupture.</span> The dose calculation includes the effects of a coincident <span class="hi">1.0 GPM</span> primary-to-secondary tube leak in the steam generator of the affected steam line. These values are consistent with the assumptions used in the accident analyses.
</div>
</details>

---

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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.1.5 Main Steam Line Isolation Valves</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.1.5</div>

<span class="hi-exam">MSIV OPERABILITY ensures no more than one steam generator will blow down in the event of a steam line rupture.</span> This restriction is required to: 1) minimize the positive reactivity effects of the RCS cooldown associated with the blowdown, and 2) limit the pressure rise within containment if the rupture occurs inside containment.

<span class="hi-exam">If the MSIV closure time during TS surveillance testing (performed at SG pressure between <span class="hi">800 psig</span> and <span class="hi">1015 psig</span>) is <span class="hi">≤5.0 seconds</span>, and the ESF response time (including valve closure) for the MSI signal (Table 3.3-5) is <span class="hi">≤5.5 seconds</span>, then assurance is provided that MSI occurs within <span class="hi">12 seconds</span> under accident conditions where SG pressure may be lower.</span>

Fast closure of the MSIVs is assured at a minimum steam pressure of <span class="hi">170 psia</span>. The MSIV will still close via the steam assist function between <span class="hi">118–170 psia</span> with slightly greater closure times. <span class="hi-exam">For steam line ruptures that do not have adequate steam pressure to close the MSIVs (less than <span class="hi">118 psia</span>), the event does not require MSIV closure to satisfy design basis requirements</span> — minimum DNBR remains above the limit and peak containment pressure remains below <span class="hi">47 psig</span>.

SR 4.7.1.5 testing is performed prior to opening MSIVs for power operation. Only one valve is opened at a time with the other three remaining closed, ensuring isolation capability is maintained. A postulated failure of the tested valve in the open position would result in blowdown of a single SG — consistent with the accident analysis assumptions for a major secondary system pipe rupture (UFSAR Section 15.4.2).

*Revised by letter dated 6-19-2003*
</div>
</details>

---

## 3/4.7.2 — SG Pressure/Temperature Limitation

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.2</div>
Primary and secondary coolant temperatures in the SGs shall be <span class="hi">>70°F</span> when either coolant pressure is <span class="hi">>200 psig</span>.
</div>

**Applicability:** At all times

**Action:** Reduce applicable SG pressure to ≤200 psig within 30 minutes. Perform engineering evaluation before increasing temperature above 200°F.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.2 Steam Generator Pressure/Temperature Limitation</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.2</div>

<span class="hi-exam">The limitation ensures that pressure-induced stresses in the steam generators do not exceed the maximum allowable fracture toughness stress limits.</span> The limits of <span class="hi">70°F</span> and <span class="hi">200 psig</span> are based on average steam generator impact values taken at <span class="hi">10°F</span> and are sufficient to prevent brittle fracture.
</div>
</details>

---

## 3/4.7.3 — Component Cooling Water

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.3</div>
At least <span class="hi">two independent CCW loops</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With only one loop, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours + Cold Shutdown in 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.3 Component Cooling Water</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.3</div>

<span class="hi-exam">The CCW loops are independent of each other — each has separate controls and power supplies, and the operation of one does not depend on the other.</span> The system consists of <span class="hi">two safeguards mechanical trains</span> supplied by <span class="hi">three pumps</span> powered from separate vital buses.

This complement of equipment assures adequate redundancy for <span class="hi-exam">a single active component failure during the injection phase and either a single active failure or passive failure during the recirculation phase</span>. The redundant cooling capacity, assuming a single failure, is consistent with the assumptions used in the accident analyses (separation of loops as required by the single-failure analysis).

<span class="hi-exam">An OPERABLE CCW loop consists of one mechanical train and one CCW pump.</span>

*S20-04*
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q37</div>
Per the 3.7.3 bases, having <span class="hi-exam">2 operable CCW loops requires ALL 3 CCW pumps operable</span> (along with HXs and valves). The <span class="hi-exam">23 CCW pump is a BLACKOUT load, NOT an ACCIDENT load</span>. On a 2C 4KV bus undervoltage / SEC Mode II, the SEC opens the bus infeeds, starts the EDG, strips loads, and sequences blackout loads — but 23 CCW is not sequenced for this event, and the SEC <span class="hi-exam">locks out the AUTO/MAN function of the CCW pump start circuitry</span> so 23 CCW being in MANUAL has no effect. All 3 pumps remain operable → <span class="hi-trap">TSAS 3.7.3 is NOT entered.</span> See [[CCW]].
</div>

---

## 3/4.7.4 — Service Water

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.4</div>
At least <span class="hi">two independent service water loops</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With only one loop, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours + Cold Shutdown in 30 hours.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q14</div>
SW loop OPERABILITY requires <span class="hi-exam">two SW pumps powered from separate buses</span>. Per S2.OP-SO.SW-0005 P&L 3.2: when a SW Bay is removed from service in Modes 1-4 and the "B" bus SW pump in the operable bay is unavailable, <span class="hi-exam">LCO 3.0.3 applies (not 3.7.4)</span>. With #2 Bay isolated (leak) AND 24 SWP C/Ted, both loops are inoperable. <span class="hi-trap">TS 3.7.4 only applies with one loop inoperable (72 hrs). When both loops are inoperable, no specific action exists in 3.7.4, so LCO 3.0.3 (default shutdown action) applies.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
TSAS 3.7.4 entry context: with 4 SW Bay isolated (leak on 25SW3), the unit is shut down in compliance with TSAS 3.7.4. <span class="hi-exam">SW pump bus alignment: 21/22/23 SW pumps are on AA/BB/CC vital buses; 24/25/26 SW pumps are unavailable when 4 SW Bay is isolated.</span> A 2A 4KV Vital Bus Differential <span class="hi-exam">opens the EDG output breaker AND prevents station-power infeed reclosure</span>, eliminating the only remaining SW power source — total loss of all SW results.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q82</div>
A leak on 25SW3 (25 SW Pump Discharge Isolation Valve) isolates 4 SW Bay, and the difficulty of repair drives a shutdown <span class="hi-exam">to comply with TSAS 3.7.4</span> with 21 and 23 SW pumps in service. A subsequent 2A EDG output-breaker trip (Bus Differential) followed by the 23 SW pump tripping on overcurrent at runout leaves no SW pumps running — <span class="hi-exam">a loss of ALL service water, requiring entry to AB.SW-0005 (trip the Rx, stop RCPs to protect CCW and the RCP seals)</span>.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.4 Service Water</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.4</div>

<span class="hi-exam">The service water system ensures sufficient cooling capacity for continued operation of safety-related equipment during normal and accident conditions.</span> The redundant cooling capacity of this system, assuming a single failure, is consistent with the assumptions used in the accident analyses to maintain conditions within acceptable limits.

*S20-04*
</div>
</details>

---

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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.5 Flood Protection</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.5</div>

The limitation on flood protection ensures that facility protective actions will be taken and operation will be terminated in the event of flood conditions. <span class="hi-exam">The limit of elevation <span class="hi">10.5 ft</span> Mean Sea Level is the elevation above which facility flood control measures are required to provide protection to safety-related equipment.</span>
</div>
</details>

---

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

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.6 Control Room Emergency Air Conditioning System</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.7.6</div>

**Background:** The CREACS provides a protected environment from which occupants can control the unit following an uncontrolled release of radioactivity, hazardous chemicals, or smoke. It ensures: 1) ambient air temperature does not exceed the allowable continuous duty rating for equipment and instrumentation, and 2) the control room remains habitable during and following all credible accident conditions.

<span class="hi-exam">The CREACS consists of two independent redundant trains, one from each unit, that recirculate and filter the air in the Control Room Envelope (CRE).</span> Each train consists of a prefilter, HEPA filter, activated charcoal adsorber section (principally for iodine removal), and fans. <span class="hi-exam">CREACS is a shared system between Unit 1 and Unit 2 supplying a common CRE.</span>

Upon receipt of a Safety Injection or High Radiation actuation signal, one 100% capacity fan in each unit's CREACS operates in pressurization mode with outside air supplied for CRE pressurization. One fan from each train auto-starts; a standby fan auto-starts on failure of the running fan. <span class="hi-exam">Each CREACS train has two 100% capacity fans — any one of the four fans is sized to provide the required CRE pressurization flow.</span>

<span class="hi-exam">Outside air is supplied from the non-accident unit's emergency air intake through the cross-connected supply duct</span> (determined by which unit received the accident signal). The CREACS is designed to maintain a habitable environment for <span class="hi">30 days</span> of continuous occupancy after a DBA without exceeding <span class="hi">5 rem TEDE</span>.

Normal air supply to the CRE is isolated upon actuation signal; ventilation air is recirculated through the filter trains. Pressurization of the CRE minimizes infiltration of unfiltered air. <span class="hi-exam">CREACS will be manually initiated in recirculation mode only in the event of a fire outside the CRE, a toxic chemical release, or testing.</span>

**LCO:** Two independent and redundant trains are required OPERABLE so at least one is available if a single active failure disables the other. Total system failure could result in exceeding <span class="hi">5 rem TEDE</span> to CRE occupants in the event of a large radioactive release. The CRE boundary must be maintained such that CRE occupant dose does not exceed the licensing basis consequence analysis values, and occupants are protected from hazardous chemicals and smoke.

The CRE boundary may be opened intermittently under administrative controls (doors, hatches, floor plugs, access panels). A dedicated individual stationed at the opening must be in continuous communication with operators and have a method to rapidly restore the CRE boundary.

**Key Dampers:**
- Fan outlet dampers: 1(2)CAA15 and 1(2)CAA16 — open on fan operation
- Return air isolation damper: 1(2)CAA17 — administratively open during single-train operation
- CAACS outside air intake isolation dampers: 1(2)CAA40, 1(2)CAA41, 1(2)CAA43, 1(2)CAA45
- CAACS exhaust isolation dampers: 1(2)CAA18 and 1(2)CAA19 — normally closed, prevent outside inleakage
- <span class="hi-exam">CREACS air intake dampers: 1(2)CAA48, 1(2)CAA49, 1(2)CAA50, 1(2)CAA51 — control logic auto-opens the intake farthest from the radiation source based on which unit's SSPS or RMS signal is received</span>
- CAACS/CREACS interface isolation dampers: 1(2)CAA14 and 1(2)CAA20 — normally open, isolate CREACS from CAACS during emergency

**Actions:** With one CREACS train inoperable, align for single filtration train operation within 4 hours and restore within 30 days. Single-train alignment requires the unit with the operable train to be in Chilled Water LCO 3.7.10.a configuration (not 3.7.10.c). With CRE boundary inoperable, implement mitigating actions immediately; verify exposures within limits within 24 hours; restore within 90 days.

**Surveillance:** Each CAACS normal air intake has two radiation detector channels. A minimum of one out of two detectors in either intake initiates CREACS pressurization mode. <span class="hi-exam">With two detector channels inoperable on a unit, CREACS must be placed in pressurization or recirculation mode. Movement of irradiated fuel assemblies is NOT permitted when in recirculation mode</span> (auto-initiation capability is defeated for high radiation).

*Amendment No. 297*
</div>
</details>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q68</div>
TS Bases 3/4.7.6 (and S2.OP-SO.CAV-0001 P&L 3.6.3): when CAV is aligned to <span class="hi-exam">FIRE OUTSIDE CONTROL AREA (Recirculation Mode)</span>, <span class="hi-exam">Core Alterations and movement of irradiated fuel are NOT permitted</span>. Pressing the Fire Outside Control Room pushbutton during fuel movement requires immediate suspension of fuel movement.
</div>

---

## 3/4.7.7 — Auxiliary Building Ventilation System

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.7</div>
At least two supply fans and three exhaust fans shall be OPERABLE to maintain the Auxiliary Building at slightly negative pressure. One supply fan may be considered OPERABLE with its auto-start circuit administratively removed from service to prevent more than one supply fan from operating at any time.
</div>

**Applicability:** At all times

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| Modes 1–4: one supply fan and/or one exhaust fan inoperable | Restore fan(s), otherwise be in Hot Standby then Cold Shutdown | 14 days; then 6 hrs + 30 hrs |
| Modes 1–4: two supply and/or two exhaust fans inoperable | Restore at least one inoperable supply fan and two exhaust fans, otherwise be in Hot Standby then Cold Shutdown | 24 hrs; then 6 hrs + 30 hrs |
| Auxiliary Building not slightly negative in Modes 1–4 | Restore slightly negative pressure, otherwise be in Hot Standby then Cold Shutdown | 4 hrs; then 6 hrs + 30 hrs |
| During CORE ALTERATIONS: Auxiliary Building not slightly negative | Restore slightly negative pressure or suspend CORE ALTERATIONS | 4 hrs |
| At all times: Auxiliary Building not slightly negative | Suspend radioactive gaseous releases via the Auxiliary Building | Immediately |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q82</div>
This action (TS 3.7.7 action e) is the basis for terminating a gas decay tank release: if <span class="hi-exam">Auxiliary Building pressure turns positive</span> (loses its slightly-negative condition) during a radioactive gaseous release via the Aux Building, the release must be <span class="hi-exam">suspended immediately</span> to prevent an unmonitored release.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.7.7 Auxiliary Building Ventilation System</summary>
<div class="callout callout-bases">
<div class="callout-label">Basis — 3/4.7.7</div>

The Auxiliary Building Ventilation System (ABVS) controls Auxiliary Building temperature during normal and emergency operation and contains airborne contamination by maintaining slightly negative pressure during a LOCA. It has two major subsystems:

1. **Exhaust system** — once-through filtration exhaust to contain particulate and gaseous contamination per 10 CFR 20. It has <span class="hi">three 50% capacity fans</span> powered from vital buses and is designed to control Auxiliary Building pressure at about <span class="hi">-0.10 in. water gauge</span> relative to atmosphere.
2. **Supply system** — once-through air supply to maintain building temperatures within acceptable limits. It has <span class="hi">two 100% capacity fans</span> powered from vital buses. For TS LCO purposes, one supply fan must be administratively removed from auto-start but still OPERABLE.

**Normal alignment:** two exhaust fans and one supply fan. During cooler seasons, both supply fans may be secured and exhaust reduced to one fan if negative pressure is maintained.

<span class="hi-exam">**Emergency alignment:** at least two of three exhaust fans and one of two supply fans. During a Safety Injection, all three exhaust fans and one supply fan auto-start.</span>

The system also provides a containment purge flow path in Modes 5 and 6. Either Containment Purge or ABVS suction from containment atmosphere with associated radiation monitoring must be available when irradiated fuel is moved in containment with the equipment hatch open. <span class="hi-exam">OPERABILITY ensures air that may contain radioactive material leaked from ECCS equipment after a LOCA is monitored before release via the plant vent.</span> Auxiliary Building exhaust air filtration functionality itself is not required to meet LCO 3.7.7.

*Amendment No. 252*
</div>
</details>

---

## 3/4.7.8 — Sealed Source Contamination

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.8</div>
Each sealed source containing radioactive material in excess of 100 μCi beta/gamma material or 5 μCi alpha material shall be free of ≥ <span class="val-alarm">0.005 μCi</span> removable contamination.
</div>

**Applicability:** At all times

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| Sealed source has removable contamination ≥0.005 μCi | Withdraw source from use and either decontaminate/repair it or dispose of it per Commission regulations | Immediately |
| LCO not met | LCO 3.0.3 does not apply | N/A |

**Basis:** The removable contamination limit, including alpha emitters, is based on 10 CFR 70.39(c) plutonium limits. It ensures leakage from byproduct, source, and special nuclear material sources will not exceed allowable intake values. Sealed sources are classified according to use so frequently handled sources are tested more often. <span class="hi-exam">Sources continuously enclosed in shielded mechanisms, such as radiation monitoring or boron measuring devices, are considered stored and need not be tested unless removed from the shielded mechanism.</span>

*Amendment No. 209*

---

## 3/4.7.9 — Snubbers

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.9</div>
All snubbers shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4. Modes 5 and 6 also apply for snubbers located on systems required OPERABLE in those Modes.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| One or more snubbers inoperable | Replace or restore inoperable snubber(s) and perform engineering evaluation of the supported component per SR 4.7.9, or declare the supported system inoperable and enter its action statement | 72 hrs |

**Basis:** <span class="hi-exam">All snubbers are required OPERABLE to ensure structural integrity of the RCS and all other safety-related systems during and after a seismic or other dynamic-load event.</span> Snubbers excluded from the program are on non-safety-related systems only when failure of the snubber or system would not adversely affect any safety-related system. Examination, testing, and service-life monitoring are performed under ASME BPV Code Section XI or the OM Code as required by 10 CFR 50.55a, except where the NRC granted relief or authorized alternatives.

*Amendment No. 284*

---

## 3/4.7.10 — Chilled Water System — Auxiliary Building Subsystem

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.10</div>
The Auxiliary Building chilled water loop serving safety-related loads shall be OPERABLE in one of three configurations: three chillers/two pumps, two chillers/two pumps during November–April with additional restrictions, or a cross-tied configuration with three chillers/two pumps from either unit.
</div>

**Applicability:** All Modes and during movement of irradiated fuel assemblies, subject to the configuration-specific restrictions in TS 3.7.10.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| Modes 1–4: one required chiller inoperable | Remove appropriate non-essential heat loads and restore chiller, otherwise be in Hot Standby then Cold Shutdown | 4 hrs; 14 days; then 6 hrs + 30 hrs |
| Modes 1–4: two required chillers inoperable | Remove non-essential heat loads, align CREACS for single filtration using Salem Unit 1 train, restore one chiller, otherwise be in Hot Standby then Cold Shutdown | 4 hrs; 4 hrs; 72 hrs; then 6 hrs + 30 hrs |
| Modes 1–4: one chilled water pump inoperable | Restore pump, otherwise be in Hot Standby then Cold Shutdown | 7 days; then 6 hrs + 30 hrs |
| Modes 5/6 or irradiated fuel movement: one/two chillers or one pump inoperable | Same heat-load/CREACS restoration actions as applicable, otherwise suspend CORE ALTERATIONS and irradiated fuel movement | 4 hrs / 72 hrs / 7 days as applicable |

**Basis:** The chilled water system provides normal and accident heat removal for the control room area, relay rooms, equipment rooms, and other safety-related areas. The three possible configurations are analyzed separately: (a) three chillers required, (b) two chillers required from November 1 through April 30, and (c) units cross-tied. Removing non-essential heat loads keeps remaining loads within the available chiller capacity. Two-chiller and cross-tie configurations have additional restrictions because CREACS, ECAC, service water temperature, outside air temperature, and unit-to-unit dependencies affect the remaining cooling margin.

<span class="hi-exam">Cross-tied chilled water requires both CREACS trains OPERABLE; CREACS single-filtration operation is not allowed in the cross-tie configuration.</span> During Modes 5/6 and irradiated fuel movement, chilled water components are not considered inoperable solely because the backup diesel generator is inoperable, except this does not apply to the cross-tie configuration.

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A1-1</div>
With both required chillers inoperable in Modes 1-4, TS 3.7.10.a Action b.1 requires removing non-essential heat loads within 4 hours. The quantity to isolate is set by S2.OP-SO.CH-0001 Attachment 2 Table A as a function of inlet water temperature and configuration. At an inlet temp of <span class="hi-exam">75.0°F</span> (highest reading 73.5°F + 1.5°F instrument uncertainty), with rising outside air temperature the SRO conservatively uses the &gt; 75°F category, requiring <span class="hi-exam">999.1 kBTU/hr</span> of non-essential heat-load isolation.
</div>

*Amendment No. 297*

---

## 3/4.7.11 — Fuel Storage Pool Boron Concentration

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.11</div>
Fuel storage pool boron concentration shall be ≥ <span class="val-normal">800 ppm</span> when fuel assemblies are stored in the pool and a fuel storage pool verification has not been performed since the last movement of fuel assemblies.
</div>

**Applicability:** When fuel assemblies are stored in the fuel storage pool and no post-movement fuel storage pool verification has been completed.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| Fuel storage pool boron concentration below limit | Immediately suspend movement of fuel assemblies and initiate action to restore boron concentration or perform fuel storage pool verification | Immediately |
| LCO not met | LCO 3.0.3 does not apply | N/A |

**Basis:** The spent fuel pool normally uses soluble boron to provide large subcriticality margin. The rack design is evaluated with unborated water for normal loaded configurations, but postulated accidents such as mislocating a fresh 5.0 wt% assembly rely on soluble boron. The analysis shows 600 ppm soluble boron offsets the reactivity from postulated accidents; the LCO uses <span class="hi-exam">800 ppm</span> to include measurement uncertainty and preserve the criticality assumptions. This LCO ends after verification confirms there are no misloaded assemblies and no further fuel movement is in progress.

*Amendment No. 282*

---

## 3/4.7.12 — Fuel Assembly Storage in the Spent Fuel Pool

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.12</div>
The combination of initial enrichment, burnup, and Integral Fuel Burnable Absorber (IFBA) of each fuel assembly stored in Region 1 or Region 2 shall be within the acceptable limits in SR 4.7.12.1 and SR 4.7.12.2.
</div>

**Applicability:** When any fuel assembly is stored in Region 1 or Region 2 of the spent fuel pool.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| Fuel assembly storage requirements not met | Immediately verify fuel storage pool boron concentration meets TS 3.7.11 and initiate movement of the non-complying assembly to a compliant location | Immediately |
| LCO not met | LCO 3.0.3 does not apply | N/A |

**Basis:** Region 1 and Region 2 of the Maximum Density Rack have different storage constraints. Region 1 accepts new fuel up to 4.25 wt% U-235 without restriction and higher-enrichment fuel up to 5.0 wt% only under IFBA, burnup, or location restrictions. Region 2 uses stricter checkerboard, peripheral, and burnup controls. <span class="hi-exam">The placement restrictions keep spent fuel pool keff < 0.95 assuming unborated water.</span> Before moving an assembly into a Region 1 or Region 2 storage location, verify both the final location criticality requirements and fuel pool boron concentration.

*Amendment No. 244*

---

## 3/4.7.13 — Main Feedwater Isolation Valves, Regulating Valves, Bypass Valves, and SGFP Turbine Steam Stop Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.7.13</div>
Four Main Feedwater Isolation Valves (FIVs), four Main Feedwater Regulating Valves (FRVs), four FRV Bypass Valves (FRVBVs), and four Steam Generator Feedwater Pump turbine steam stop valves shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, and 3 except when the affected valve is closed/deactivated or its associated flow path or steam supply is isolated as allowed by TS 3.7.13.

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|-----------------|-----------------|
| One or more FIVs, FRVs, or FRVBVs inoperable | Restore to OPERABLE or close/isolate affected valve; verify closed/isolated periodically | 72 hrs; then every 7 days |
| One or more SGFP turbine steam stop valves inoperable | Restore to OPERABLE, isolate associated steam supply, or isolate SGFP flow path; verify isolated periodically | 72 hrs; then every 7 days |
| Two valves in the same feedwater flow path inoperable causing loss of feedwater isolation capability | Restore at least one valve or isolate affected flow path | 8 hrs |
| Required actions not met | Be in Hot Standby then Hot Shutdown | 6 hrs + 6 hrs |

**Basis:** These valves rapidly isolate feedwater after steam line rupture, feedwater line rupture, or feedwater malfunction to limit RCS cooldown and containment mass/energy release. Accident analyses assume specific credited closures: FIV closure in 32 seconds for certain feedwater malfunction and steam-line-break cases, FRV/FRVBV closure in 10 seconds for non-faulted steam generators after SI, and SGFP trip in 7 seconds for containment mass/energy analysis. The 72-hour action time is justified by remaining redundant isolation valves and low probability of an event during the allowed time. <span class="hi-exam">If two valves in the same flow path are inoperable such that automatic feedwater isolation capability for that path is lost, the shorter 8-hour action applies.</span>

*Amendment No. 310*

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-7-1.pdf" target="_blank">View TS PDF (Turbine Cycle)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-3.pdf" target="_blank">View TS PDF (CCW)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-4.pdf" target="_blank">View TS PDF (SW)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-7.pdf" target="_blank">View TS PDF (3/4.7.7)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-8.pdf" target="_blank">View TS PDF (3/4.7.8)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-9.pdf" target="_blank">View TS PDF (3/4.7.9)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-10.pdf" target="_blank">View TS PDF (3/4.7.10)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-11.pdf" target="_blank">View TS PDF (3/4.7.11)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-12.pdf" target="_blank">View TS PDF (3/4.7.12)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-7-13.pdf" target="_blank">View TS PDF (3/4.7.13)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-7.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak escalating to rupture. After 21MS45 is shut to isolate the 21 SG steam supply path to 23 AFW pump, CRS enters <span class="hi-exam">LCO 3.7.1.2</span> for less than 3 operable AFW pumps (23 AFW pump rendered inoperable by loss of steam supply).
</div>

## Connections

- Related systems: [[AFW]], [[CCW]], [[Service Water]], [[Steam Generator & Blowdown]], [[Main Steam]], [[Feed & Condensate]], [[Containment]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]]
- Related exam questions: [[2016 Q68]], [[2016 Q92]], [[2019 Q42]], [[2020 Q14]], [[2014 Q37]], [[2014 Q82]], [[2014 Q97]], [[2012 Q82]]
- Related JPMs: [[2020 JPM SRO-A3]], [[2014 JPM SRO-A1-1]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]]
