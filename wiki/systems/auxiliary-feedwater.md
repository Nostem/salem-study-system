---
title: AFW
category: systems
status: draft
aliases:
  - auxiliary feedwater system
  - AFW
---

# AFW

## Function & Design Basis

The Auxiliary Feedwater (AFW) System serves as a backup system for supplying feedwater to the secondary side of the steam generators at times when the Main Feedwater System is not available. It is relied upon to prevent core damage and system overpressurization in the event of accidents such as a loss of normal feedwater or a secondary system pipe rupture, and to provide a means for plant cooldown (UFSAR §10.4.7.2.1). The system is capable of functioning for extended periods, allowing time either to restore normal feedwater flow or to proceed with an orderly cooldown of the plant to the design temperature of the Residual Heat Removal (RHR) System; the AFW flow and water supply capacity is sufficient to remove core decay heat, reactor coolant pump heat, and sensible heat during the plant cooldown (UFSAR §10.4.7.2.1). Provisions are made to limit or terminate auxiliary feedwater flow to the affected loop in the case of a feedwater line break (to ensure adequate flow to the effective steam generators) and in the case of a steam line break inside containment (to also limit the containment pressure) (UFSAR §10.4.7.2.1). The Auxiliary Feedwater System is designed as a Class 1E Safety Grade System, and its pumps, drives, valves, tanks, piping, and appurtenances are designed as Seismic Category I components (UFSAR §10.4.7.2.2).

The plant conditions that form the basis for AFW System performance requirements are: loss of main feedwater transient (with and without offsite power); feedline rupture; steamline rupture; loss of all ac power; loss-of-coolant accident (LOCA); and plant cooldown (UFSAR §10.4.7.2.1). For mitigation of a design basis event (small break LOCA, loss-of-offsite-power, loss of normal feedwater, feedwater line break, main steam line break), <span class="hi-exam">two pumps are required</span> (UFSAR §10.4.7.2.2). The single-failure analysis (summarized in UFSAR Table 10.4-2) verified that the flow required to meet system performance objectives will be delivered with two pumps, considering a single failure of a pump (UFSAR §10.4.7.2.3).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q18</div>
AFW flow defines an adequate <span class="hi-exam">secondary heat sink</span> in EOP-FRCC-1 (Step 13) prior to SG depressurization for accumulator injection: <span class="hi-exam">total AFW flow &gt; <span class="val-normal">22E4 lbm/hr</span></span> satisfies the criterion when no SG NR level is &gt; 9% (the criterion is <span class="hi-exam">9% NR level OR &gt; 22E4 lbm/hr</span>, not both). At 2 psig containment (below 4 psig adverse), the normal 9% NR value applies, <span class="hi-trap">not the 15% adverse value</span>.
</div>

## Key Components

Each unit is equipped with one turbine-driven and two motor-driven auxiliary feed pumps (UFSAR §10.4.7.2.2). The turbine-driven auxiliary feed pump is nominally rated at <span class="hi">880 gpm</span> (plus <span class="hi">100 gpm</span> continuous recirculation flow) and <span class="hi">1550 psid at 3840 rpm</span>, and the motor-driven auxiliary feed pumps are nominally rated at <span class="hi">440 gpm and 1300 psid</span>, receiving suction from the 220000-gallon auxiliary feedwater storage tank (UFSAR §10.4.7.2.2). (Per UFSAR footnote, the No. 22 motor-driven auxiliary feedwater pump is rated at <span class="hi">450 gpm and 1175 psi</span>.) The motor-driven pumps receive power from the 4 KV vital buses (UFSAR §10.4.7.2.2). Steam for the turbine-driven pump is taken from two of the four main steam lines upstream of the MSIVs, with separate isolation valves provided for these connections (UFSAR §10.4.7.2.2). The steam supply line up to the stop-start valve is continuously warmed by main steam; the turbine is a single-inlet, single-stage unit of rugged design such that water impingement will not impair its operation (UFSAR §10.4.7.2.2).

Each motor-driven pump discharges to two steam generators, with a normally isolated cross-connect line joining the motor-driven pump discharge headers; the turbine-driven pump feeds all four steam generators (UFSAR §10.4.7.2.2). Feedwater flow is controlled from the Control Room by remotely operated flow control valves in the supply lines to each steam generator, and for Units 1 and 2 reduced-capacity trim has been installed on all eight flow control valves (AF11 and AF21) to limit the maximum flow under certain plant conditions (UFSAR §10.4.7.2.2). Safety-grade indication of auxiliary feedwater flow to each steam generator is provided in the Control Room (UFSAR §10.4.7.2.2).

The minimum performance limits required for the auxiliary feedwater pumps to satisfy the design bases analyses, as verified during Technical Specification Inservice Testing (these values account for test instrumentation uncertainties), are (UFSAR §10.4.7.2.2):

| Pump | IST Minimum Performance |
|------|--------------------------|
| 11 motor-driven AFWP | <span class="hi">160 gpm and 1361 psid</span> |
| 12 motor-driven AFWP | <span class="hi">160 gpm and 1361 psid</span> |
| 13 turbine-driven AFWP | <span class="hi">400 gpm and 1395 psid at 3450 rpm</span> |
| 21 motor-driven AFWP | <span class="hi">160 gpm and 1369 psid</span> |
| 22 motor-driven AFWP | <span class="hi">160 gpm and 1389 psid</span> |
| 23 turbine-driven AFWP | <span class="hi">400 gpm and 1506 psid at 3600 rpm</span> |

The AFW System piping and components are designed to ANSI B31.1 (system piping), ASME Section III sub-section N.D. (auxiliary feed storage tank), ASME Section III (auxiliary feed pumps except No. 22, and system valves), and Hydraulic Institute standards (No. 22 auxiliary feed pump) (UFSAR §10.4.7.2.2). At the AFW System seismic boundary, valves AF-71 and AF-72 are anchored to the Seismic Category I Auxiliary Building wall and protected from debris by a steel protective structure that also provides seismic guides (UFSAR §10.4.7.2.2).

| Parameter | Motor-Driven (2) | Turbine-Driven (1) |
|-----------|------------------|---------------------|
| Number | 2 | 1 |
| Power Source | Vital buses (EDG-backed) | Main steam (no AC required) |
| SG Supply | Each can supply 2 SGs | Can supply all 4 SGs |
| DC Control Power | Vital DC | Vital DC |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q53</div>
Each MDAFW pump has its own dedicated recirc line and <span class="hi-exam">automatic recirc valve that opens to keep AFW pump flow &gt;180 gpm</span> (closes again above 180). Shutting both AF21 discharge control valves lowers pump flow, so the affected pump's recirc valve opens to prevent overheating/pump damage. The Pressure Override circuit instead closes the AF21s on low pump pressure to prevent runout.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q18</div>
AFW backleakage (S2.OP-PT.AF-0002): monitoring required <span class="hi-exam">30 to 60 minutes</span> after an AFW Pump is shutdown in Modes 1-3 (P&L 3.1). Backleakage of hot feedwater can disable motor-driven AFW pumps by causing <span class="hi-exam">vapor binding (steam binding)</span> — per SOER 84-3. <span class="hi-trap">Trap: backward rotation is a concern for RCPs (which have anti-reverse-rotation devices), not AFW pumps. The AFW failure mode is steam/vapor binding from hot feedwater backing into the pump suction piping.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q66</div>
MDAFW pump power supply confirmation: <span class="hi-exam">11 AFW Pump is powered from 1A 4KV Vital Bus</span>. With 1A 4KV de-energized, 11 AFW is lost. Per EOP-LOSC-2 Step 1: if the 13 AFW Pump (TDAFW) is the <span class="hi-exam">ONLY source of AFW flow</span> (both MDAFWs unavailable), steam must NOT be isolated to the 13 AFW Pump. <span class="hi-trap">Must trace 4KV bus to AFW pump mapping: 1A 4KV → 11 AFP, 1B 4KV → 12 AFP. With both MDAFWs unavailable, the TDAFW pump is the only remaining source and must be preserved.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q41</div>
23 AFW Turbine-Driven pump governor maintains <span class="hi-exam">constant turbine speed</span> as SG pressure lowers (designed to operate with SG pressures as low as 100 psig). As SG pressure decreases, the differential pressure across the feedpump discharge and the SG increases, so <span class="hi-exam">AFW flow RISES even though turbine speed remains constant</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-j</div>
<strong>AFW Backleakage Surveillance (S1.OP-PT.AF-0002):</strong> performed <span class="hi-exam">30–60 min after an AFW Pump shutdown</span> (per P&L 3.1) to detect hot-feedwater backleakage that can <span class="hi-exam">vapor (steam) bind</span> motor-driven AFW pumps. Read AFW line temperatures from <span class="hi-exam">1TA165551</span> (4 line readings, one per AFW supply line). Acceptance logic: SAT only when each line &lt; 120 °F AND ΔT (highest − average) ≤ 10 °F; vent required when any line ≥ 160 °F. Vent locations on 11 AFW Pump: <span class="hi-exam">11AF83 (AF PUMP VENT)</span> and <span class="hi-exam">11AF114 (AF PUMP DISCH VENT)</span> — slowly throttle open until a solid stream of water is observed, then close. Reference: SOER 84-3.
</div>

## Power Supplies

The motor-driven pumps receive power from the 4 KV vital buses (one motor-driven AFW pump per vital bus), and the AFW System circuits and initiation signals receive power from unit vital buses (UFSAR §10.4.7.2.2). The motor-driven auxiliary feedwater pumps are among the loads included in the diesel generator's automatic loading sequence (UFSAR §10.4.7.2.2). The turbine-driven pump requires no ac power, taking its motive steam from the main steam lines (UFSAR §10.4.7.2.2). The exam-bank 4KV bus → MDAFW pump mapping (1A 4KV → 11 AFP / 1B 4KV → 12 AFP on Unit 1; 2A 4KV → 21 AFP / 2B 4KV → 22 AFP on Unit 2) is documented in the Exam — 2018 Q66 and Exam — 2019 Q19 callouts above and below (see Exam — 2018 Q66).

## Automatic Features & Setpoints

The AFW pumps are capable of being started in either the manual or automatic mode; manually, the pumps can be started at their local control panel or from the main Control Room, and manual start circuits are designed for single failure, so that failure of the automatic initiation signals or circuits will not affect the capability for manual starting (UFSAR §10.4.7.2.2). For the pumps to start in automatic mode, the REMOTE-LOCAL MANUAL switch located on the local panel must be in the REMOTE position (UFSAR §10.4.7.2.2).

The motor-driven auxiliary feedwater pumps are started automatically by any of the following conditions: <span class="hi-exam">loss of offsite power, loss of main feedwater system, safeguards sequence signal, or low-low level signal from any one steam generator</span> (UFSAR §10.4.7.2.2). The turbine-driven auxiliary feedpump is started automatically by either of the following conditions: <span class="hi-exam">low-low level in two of the four steam generators, or undervoltage on the reactor coolant pump group buses using 1/2 twice logic</span> (UFSAR §10.4.7.2.2).

When either motor-driven pump is started automatically, a signal is sent to close Steam Generator Blowdown and Sampling Systems' isolation valves; the isolation signal to the Sampling System isolation valves can be bypassed by the use of a keylock switch located on the control room console, allowing operators to open the Sampling System isolation valves when sampling is required by the EOPs in the event a faulted steam generator with a low-low level condition is experienced (UFSAR §10.4.7.2.2). When the turbine-driven pump is started automatically, Steam Generator Blowdown System valves and Sampling System valves are automatically closed in the same manner (UFSAR §10.4.7.2.2).

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual (local and remote) | UFSAR T7.2-1; UFSAR §10.4.7.2.2 |
| Motor-Driven | 2/3 Lo-Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence signal; OR blackout sequence signal; OR manual (local and remote) | UFSAR T7.2-1; UFSAR §10.4.7.2.2 |

**Exam & operating coverage:**

### SGFP Trip & Loss-of-Power (SEC / Blackout) Auto-Starts

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q54</div>
<span class="hi-exam">MDAFW pumps auto-start when both SGFPs are tripped</span> (logic drawing 221064); the TDAFW pump does NOT. (The MDAFW pumps also auto-start on 2/3 NR level channels in one SG lowering to 14%; the TDAFW pump starts on 2/3 NR level channels in 2/4 SGs.) See [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q51</div>
Trip of both SGFPs caused by FW Isolation: the trip-of-both-SGFPs MDAFW auto-start signal is <span class="hi-exam">inhibited when the SGFP trips are caused by a FW Isolation</span>. With 21 SGFP already manually tripped (per S2.OP-SO.CN-0002) and 24 SG NR &gt;<span class="val-trip">67%</span> driving FW Isolation, both SGFPs trip but no AFW pumps auto-start immediately. SG NR levels remain above the AFW pump auto-start setpoint of <span class="val-alarm">9%</span> at 35% initial power, so all AFW pumps would only auto-start if levels fall &lt;9%. EOP-TRIP-2 step 3 (NO path) directs operators to <span class="hi-exam">start 21–23 AFW pumps as necessary to establish &gt;<span class="val-normal">22E4 lbm/hr</span> total AFW flow</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q19</div>
MDAFW pump power supply and SEC Mode 2 start: <span class="hi-exam">22 AFW Pump is powered from 2B 4KV Vital Bus</span>. When 2B bus de-energizes and 2B SEC actuates in Mode 2 (blackout), the SEC starts 22 AFW Pump after bus restoration. At 15% power with 21 SGFP still running, SG levels drop but <span class="hi-exam">none reach the Lo-Lo 14% setpoint for automatic MDAFW start</span>. Only 22 AFW is running (from the SEC Mode 2 start on 2B bus). <span class="hi-trap">21 AFW Pump is powered from the A bus (NOT the B bus) — 21 AFW does NOT start because the 2A SEC has no blackout signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q44</div>
Trip of both SGFPs generates an automatic start of <span class="hi-exam">ONLY the MDAFW pumps</span>. The <span class="hi-exam">TDAFW pump does NOT start on trip of both SGFPs</span> — the TDAFW pump starts on <span class="hi-exam">2/3 Lo-Lo level in any 2/4 SGs (14% NR)</span>, RCP bus undervoltage, or manual actuation. <span class="hi-trap">Common trap: believing all AFW pumps start on both SGFPs trip, or that the TDAFW pump starts on 1/4 SGs at 14% — it requires 2/4 SGs at 14%.</span> Per S2.OP-SO.CN-0002, a removed-from-service SGFP is placed in the tripped condition, so the "trip of both SGFPs" interlock is already half-satisfied.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
At 2% power during startup, 21 SGFP trips — AFW pumps <span class="hi-exam">fail to auto-start</span> (both motor-driven AFW pump auto-start signals failed). PO manually starts 21 and 22 AFW pumps, sets 21-24 AF21 demands to 0% first, then throttles AF21s to maintain SG levels between +/-5% of program. PO throttles AFW flow to no less than <span class="hi-exam">22E4 lbm/hr</span> after reactor trip.
</div>

### Lo-Lo Level Starts, AMSAC & LOCAL MANUAL

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q55</div>
On a spurious MSLI during low-power startup, the MDAFW pumps and TDAFW pump <span class="hi-exam">start when SG level(s) drop to the lo-lo level setpoint</span> as the SGFP coasts down after losing its main-steam supply (MSIVs and MS18 bypass valves close on the MSLI).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q65</div>
SS94 (SG B/D Sample Valves) interaction with AFW auto-start circuit: <span class="hi-exam">SG lo-lo level closes the SS94s</span> as part of the AFW auto-start logic. The <span class="hi-exam">SGBD sample isolation bypass</span> bypasses ONLY the lo-lo level input into that circuit; <span class="hi-trap">it does NOT defeat Phase A — Phase A is a separate input that also keeps the SS94s closed. After lo-lo bypass is reset, Phase A reset is still required before SS94s can be reopened.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q16</div>
AFW pump start behavior with controllers in LOCAL MANUAL: <span class="hi-exam">LOCAL MANUAL disables all automatic AFW starts EXCEPT those initiated by the SECs</span>. On SI (SEC Mode 1), the SECs send automatic start signals to <span class="hi-exam">ONLY 21 and 22 MDAFW pumps (not 23 TDAFW)</span>. Consequently, with all controllers in LOCAL MANUAL, a Reactor Trip + SI will start ONLY 21 and 22 AFW pumps. <span class="hi-trap">23 TDAFW does NOT receive an SEC start signal — it starts on 2/3 Lo-Lo level in 2/4 SGs, RCP bus undervoltage, or manual only.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q31</div>
AMSAC AFW pump start mapping: <span class="hi-exam">AMSAC Train A starts 21 AFW pump (motor-driven). AMSAC Train B starts 22 AFW pump (motor-driven). Either train starts 23 AFW pump (turbine-driven).</span> A spurious actuation of ONLY Train A starts 21 and 23 AFW pumps. <span class="hi-trap">Trap: 22 AFW does NOT start on Train A — it only starts on Train B. The turbine-driven pump (23) starts on either train.</span>
</div>

### Automatic Blowdown / Sample Isolation (SS94s)

On automatic start of either a motor-driven or the turbine-driven AFW pump, a signal is sent to close Steam Generator Blowdown and Sampling Systems' isolation valves; the Sampling System isolation signal can be bypassed via a keylock switch on the control room console so that operators can open the Sampling System isolation valves when EOP sampling of a faulted steam generator with a low-low level condition is required (UFSAR §10.4.7.2.2). (The exam-bank SS94 interaction is documented in the Exam — 2016 Q65 callout above.)

## Design Features & Interlocks

Each of the two motor-driven pumps is provided with a minimum-flow recirculation system to prevent damage to the pumps from low flow (UFSAR §10.4.7.2.2). In order to prevent a runout of the motor-driven pumps, the steam generator level control valves (AF21s) are throttled back when pump discharge pressure drops below <span class="val-alarm">1350 psig</span> and are closed at <span class="val-trip">1150 psig</span>; this runout protection feature can be overridden in the Control Room (UFSAR §10.4.7.2.2). Per the UFSAR footnote, the runout setpoints for the control valves of the No. 22 motor-driven pump (Valves 21 & 22AF21) are <span class="val-alarm">1200 psig</span> (throttle) and <span class="val-trip">1000 psig</span> (close), and for the No. 21 motor-driven pump (Valves 23AF21 & 24AF21) they are <span class="val-alarm">1285 psig</span> (throttle) and <span class="val-trip">1085 psig</span> (close) (UFSAR §10.4.7.2.2, footnote). The steam-turbine-driven pump is protected from operation with insufficient flow by a continuous recirculation flow, the required margin of <span class="hi">100 gpm</span> being built into the pump rated flow (UFSAR §10.4.7.2.2).

All auxiliary feed pumps normally take suction from the auxiliary feed storage tank, which is protected against the effects of earthquakes, tornado wind loads, and floods (UFSAR §10.4.7.2.2). A safety-grade, automatic low-pressure trip is provided as backup protection for each pump in the event tornado missile damage to the auxiliary feedwater storage tank results in loss of suction pressure; to protect against spurious activation, this trip is made operable only during "tornado warnings" issued by the National Weather Service (UFSAR §10.4.7.2.2). The tank has sufficient capacity to allow residual heat removal for <span class="hi">8 hours</span> (UFSAR §10.4.7.2.2). The Unit 1 and Unit 2 auxiliary feedwater storage tanks are provided with a nitrogen purge/blanket system, each with a dedicated nitrogen source, to control the dissolved oxygen concentration in the water (UFSAR §10.4.7.2.2).

The AFW tank has low and low-low level alarms which alert the operator to align pump suction to an alternate source; the low level alarm sounds at a level of <span class="val-alarm">100000 gallons</span> and the low-low level alarm sounds at <span class="val-trip">30000 gallons</span> (UFSAR §10.4.7.2.2). The AFW tank has redundant channels of level indication, and the demineralized water makeup supply valve to the AFW storage tank can be opened from the Control Room (UFSAR §10.4.7.2.2). To provide assurance that inadvertent failure (or closure) of the suction valve from the AFW storage tank will not degrade the AFW System, the valve was radiographed to ensure an open flow path, then drilled and pinned in the open position with the handwheel removed and the stem left in place for visual indication (UFSAR §10.4.7.2.2).

**Backup water sources / priority of use:** the backup water sources for the auxiliary feed pumps are the two demineralized water storage tanks (<span class="hi">500000 gallons</span> capacity each), the two fire protection and domestic water storage tanks (<span class="hi">350000 gallons</span> capacity each), and the station Service Water System, which must first have a spectacle flange rotated into place; the quality of water from these sources is lower and is therefore intended for use only in emergency situations (UFSAR §10.4.7.2.2). The use of service water for a long-term makeup source is evaluated for the case where, following plant trip and loss of offsite power, AFW is initially provided from the 220000-gallon AFW storage tank (AFST) and, when that supply is depleted, AFW pump suction is transferred to the Service Water System (UFSAR §10.4.7.2.4).

There is adequate redundancy in the AFW System to provide reactor cooldown capability when necessary; during normal plant cooldown, each pump has the capacity to remove heat from the steam generators at a sufficient rate, and feedwater flow can be stopped when the reactor coolant has been cooled to approximately <span class="hi">350°F</span> and <span class="hi">400 psig</span>, at which time the RHR System is used to continue the cooldown (UFSAR §10.4.7.2.2). The RCS is cooled down at a rate of <span class="hi">50°F/hr</span> once the normal steam generator level is re-established (UFSAR §10.4.7.2.2).

A Non Safety-Related (NSR) Mitigating Safety Performance Index (MSPI) AFW System supplies water to the steam generators for reactor decay heat removal if the normal feedwater sources and the safety-related AFW sources are unavailable, possibly during a Station Blackout; it consists of one diesel generator and one motor-driven auxiliary feed pump configured to supply either Salem Unit 1 or 2, is manually started and operated from a remote start panel on Elevation 120' within the Unit 1 Turbine Generator Area, takes suction from the demineralized water storage tanks (500000 gallons each), and is designed as Seismic Category III (UFSAR §10.4.7.3.1).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q63</div>
AFW can be supplied from the fire-protection system: <span class="hi-exam">Fire Protection / Fresh Water Storage Tank water can be aligned to AFW through a normally disconnected spool piece</span>. See [[Fire Protection]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q53</div>
<span class="hi-exam">21-23AF141 (AUX FDWTR PMP INLET AUTO VENT RLSE) valves</span> design purpose: <span class="hi-exam">to facilitate filling lines upon aligning alternate water sources to the suction header</span>. Alternate sources align through the <span class="hi-exam">normally jacked-closed AF52 Alternate Suction Valves</span> from <span class="hi-exam">Demin Water, Fresh Water / Fire Protection, and Service Water</span>. Per S2.OP-SO.AF-0001 Section 5.10 (Alternate Sources Alignment), operators ensure <span class="hi-exam">21-23AF140 Auto Vent Isolation Valves</span> are open, allowing the alternate suction line to fill and vent through the <span class="hi-exam">AF141 auto vents, which close when the line is vented</span>. Prevents AFW line voiding and water hammer prior to AFW pump start on alternate source.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q44</div>
<span class="hi-exam">2DR6 (AFW Tank Makeup Valve) fails OPEN on loss of air</span>. This causes the AFW storage tank level to rise and potentially overflow. Per S2.OP-AB.CA-0001, Attachment 2, the <span class="hi-exam">2DR6 can be manually operated from the field</span> to control tank level.
</div>

### Key Design Points

- Turbine-driven pump is available during station blackout (no AC power required)
- Motor-driven pumps auto-start on lower SG level setpoint than turbine-driven pump
- Turbine-driven pump requires steam pressure >680 psig for IST testing

## Effects of Loss / Malfunction

A total loss of AFW flow eliminates the secondary heat sink and drives the crew into EOP-FRHS-1 (feed and bleed). Pressure-override (runout protection) failures, control-air failures affecting the AFW steam inlet and discharge valves, and pump trips (overcurrent, overspeed, loss of vital bus) are the dominant AFW malfunction modes in the exam bank.

**Exam & operating coverage:**

### Control-Air Valve Failures & Manual-Start Recovery

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q20</div>
AFW Pressure Override Runout Protection: with PRESSURE OVERRIDE NORMAL light illuminated, runout protection is enabled. <span class="hi-exam">When 21 AFW Pump trips, discharge pressure goes to 0 psig → 23AF21 and 24AF21 AUTOMATICALLY close</span> (runout protection closes AF21 valves when discharge pressure < <span class="val-trip">1085 psig</span>). AFW flow to 23 and 24 SGs goes to 0 LBM/HR. <span class="hi-trap">If PRESSURE OVERRIDE DEFEAT had been selected, the AF21 valves would NOT have auto-closed — they would remain in position and AFW flow would still drop to zero (no pump running) but the valves would stay open.</span> Trip of a MDAFW pump does NOT cause automatic start of 23 TDAFW.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q46</div>
2PA-3450 (AFW pump discharge pressure transmitter) fails to zero: runout protection circuit <span class="hi-exam">closes AF21 valves (flow control)</span> to protect pump from runout. To recover: place <span class="hi-exam">PRESS OVERRIDE DEFEAT switch to DEFEAT</span> to bypass the runout protection circuit and allow operator control of AF21s. <span class="hi-trap">LOCAL MANUAL is indication only in the control room (no auto-start signals) — it does NOT allow manual control of the AF21 valves. PRESS OVERRIDE DEFEAT is the correct recovery action.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q90</div>
Total loss of Control Air during power ascension at 7%, post manual trip: <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) fails OPEN</span> on loss of CA, starting the <span class="hi-exam">23 AFW (TDAFW) pump operating at maximum speed</span>. Per AB.CA-0001, dispatch a Field Operator to <span class="hi-exam">locally establish manual speed control of 23 AFW pump</span> to prevent runout and SG overfill. Concurrent feed-flow loss: BF19s/40s fail SHUT on loss of CA, FW Interlock actuates with reactor tripped + Tavg low setpoint reached. <span class="hi-trap">At 7% during power ascension, Main Feed has already been established and AFW secured per the IOP — so &quot;MDAFW pumps previously in service&quot; distractors are wrong. Pressure Override does NOT preclude using 21/22 AFW as feed supply.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
Instrument air supply line rupture to <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) causes the valve to fail OPEN</span>. This starts the 23 AFW pump, injecting cold feedwater into the SGs at power. <span class="hi-exam">Reactor power increases above 100% RTP</span> due to cooler feedwater (positive MTC). The digital FW system automatically adjusts MFW Reg Valves — no manual FW control needed. Operator should reduce reactor power per S2.OP-IO.ZZ-0004 (Power Operation). Maximum power level: 3459 MWt (100% RTP).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Post-trip, <span class="hi-exam">21 AFW pump runs with no discharge flow and 22/23 AFW pumps fail to auto-start</span>. PO manually starts at least one of 22/23 AFW pumps to establish <span class="hi-exam">≥ 22E4 lbm/hr AFW flow</span>, maintains that until at least one SG NR level is &gt; 9%, then maintains intact SG NR level 9-33%. PO stops/ensures stopped 21 and 22 SGFP; may depress the Pressure Override Defeat for 21 AFW pump to establish flow from it.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
After manual reactor trip and SI for SBLOCA, <span class="hi-exam">21 and 22 AFW pumps fail to auto-start</span> because SEC loading on 2A and 2B vital buses does not complete; <span class="hi-exam">23 AFW pump starts but provides no AFW flow</span>. CT#1 (CT-4) recovery — establish at least <span class="hi-exam">22E4 lbm/hr AFW flow</span> (or &ge;9% NR level in at least one SG) before transition to FRHS-1 is required: crew blocks 2A/2B SECs, attempts reset, <span class="hi-trap">2A SEC will not reset</span>, dispatches operator to deenergize 2A SEC, then RO manually starts 22 AFW pump (and 21 AFW pump). PO subsequently maintains 19-33% SG NR level.
</div>

### Loss of AFW / FRHS-1

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q83</div>
On a MSLB/SI with no AFW flow (11 AFP C/T, 12/13 AFP tripped) and SG WR levels dropping: a <span class="hi-exam">RED path of no AFW flow and SG WR level &lt;9% drives transition to EOP-FRHS-1 (Loss of Secondary Heat Sink), where feed-and-bleed is initiated immediately</span>. Bleed-and-feed criteria are SG WR levels &lt;36% (adverse), not 32%. See [[Steam Generator & Blowdown]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #3</div>
After the manual reactor trip on loss of the only operating SGFP, <span class="hi-exam">no AFW flow is present</span>: 22 AFW pump trips after starting, 23 AFW pump does not auto-start, and 21 AFW pump runs with no flow but adequate discharge pressure because its <span class="hi-exam">pressure-override circuit has failed</span>. In EOP-TRIP-2 the crew starts 23 AFW pump and depresses the 21 AFW pump pressure-override defeat to establish <span class="hi-exam">≥22E4 lbm/hr AFW flow (CT#1)</span>. The last AFW pump (23) then develops a speed-control failure that drives its speed demand to zero, producing total AFW flow &lt;22E4 lbm/hr with all SG NR levels &lt;9% — a Heat Sink RED path leading to FRHS-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
<span class="hi-exam">Loss of all AFW</span> after a post-trip transient: 22 AFW pump trips shortly after the post-trip AFW flow reduction, 23 AFW pump trips ~5 min later, and 21 AFW pump has no power (2A vital bus locked out). With less than <span class="hi-exam">22E4 lbm/hr</span> AFW available and no AFW pumps running, the crew transitions out of TRIP-1 to FRHS-1 and, with the SGFPs also unavailable, performs a <span class="hi-exam">Condensate pump recovery</span> to re-establish SG feed flow before RCS Bleed and Feed (CT#2). See [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
Cascading <span class="hi-exam">loss of all AFW</span> after the reactor trip: 22 AFW pump fails to start on SEC; 21 charging pump (for charging) also lost; <span class="hi-exam">21 AFW pump trips 4 minutes after the Rx trip</span>, leaving 23 AFW pump as the only operating aux feed pump; then <span class="hi-exam">23 AFW pump overspeeds and trips</span> when SG NR levels recover but remain &lt;9%. With AFW flow &lt;22E4 lbm/hr and ALL SG NR levels &lt;9%, the crew validates a CFST Heat Sink <span class="hi-exam">RED path</span> and transitions to FRHS-1. See [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Complete loss of all AFW following reactor trip: <span class="hi-exam">21 AFP trips on overcurrent</span> (overcurrent relay flag up), <span class="hi-exam">22 MDAFW pump lost with 2B 4KV bus</span> (bus differential protection), <span class="hi-exam">23 AFP trips on overspeed</span>, <span class="hi-exam">MSPI AFW pump fails on overspeed</span>. No SG NR levels >9% (15% adverse), total AFW flow <22E4 lbm/hr → transition to EOP-FRHS-1. CT-43: establish condensate feed flow before bleed and feed required. Bleed and feed criteria: 3 WR levels <20% (25% adverse). Caution: steam 21 and 23 SGs last to maximize 23 AFW pump steam supply availability.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Loss of all AFW: 21 AFP C/T for oil bubbler replacement (initial condition). 23 AFP fails to auto start on SI — PO manually starts. <span class="hi-exam">22 AFP trips on overcurrent</span>. <span class="hi-exam">23 AFP trips on overspeed</span>. No SG NR levels > 9% (15% adverse), total AFW flow < 22E4 lbm/hr. CFST Heat Sink Red Path → transition to EOP-FRHS-1. <span class="hi-exam">CT#2 (CT-43): Establish feed flow to one SG before bleed and feed is required.</span> Recovery via condensate system (MS10 depressurization + BF40/BF19 bypass).
</div>

## Control-Room Operation

The AFW pumps can be started manually from their local control panel or from the main Control Room, and the AFW pumps are placed in automatic by setting the REMOTE-LOCAL MANUAL switch on the local panel to REMOTE (UFSAR §10.4.7.2.2). Feedwater flow to each steam generator is controlled from the Control Room by remotely operated flow control valves (the AF11 S/G level control valves and AF21 flow control valves), and safety-grade indication of auxiliary feedwater flow to each steam generator is provided in the Control Room (UFSAR §10.4.7.2.2). The demineralized water makeup supply valve to the AFW storage tank can also be opened from the Control Room, and AFW storage tank level has redundant channels of control-room indication with low (<span class="val-alarm">100000 gallons</span>) and low-low (<span class="val-trip">30000 gallons</span>) level alarms (UFSAR §10.4.7.2.2).

**Exam & operating coverage:**

### Pump-to-SG Alignment

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q56</div>
AFW pump SG coverage: the <span class="hi-exam">21 MDAFW pump feeds 23 and 24 SGs only; the 23 TDAFW pump feeds all 4 SGs</span>. In EOP-TRIP-2 (after stopping the SGFPs, step 3) 23 AFW pump speed is lowered to minimum (or 22E4 lbm/hr) <span class="hi-exam">only if both AFW pumps are running</span>. <span class="hi-trap">If 21 MDAFW fails to start, lowering 23 AFW to minimum would leave no flow to 23 and 24 SGs — so operators throttle the 21-24AF11 S/G Level Control Valves to balance flow. No overfeed/Steamline-D/P SI occurs because flow is being lowered.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q56</div>
With the 22 AFP Pressure Override Protection circuit malfunctioned (holding the 22 AFP <span class="hi-exam">AF21 isolation valves shut</span> to 21 and 22 SGs), 23 AFP still feeds 21 and 22 SGs through the AF11s. <span class="hi-exam">21 and 22 SG levels rise slower than 23 and 24 SG levels</span> because 23 and 24 are fed by 21 MDAFW pump PLUS the TDAFW pump. <span class="hi-trap">Total AFW flow (all MDAFW + TDAFW pumps combined) is indicated on 2CC2 — so it will NOT read 0 gpm for any pair of SGs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q54</div>
AFW Pressure Override circuit (runout protection) — pump-to-AF21 mapping: the Pressure Override circuit holds the AFW pump discharge AF21 valves <span class="hi-exam">SHUT until AFW pump discharge pressure rises above the runout setpoint</span>, then permits them to open. During normal standby, this keeps AF21s shut even though normal valve demand is set to <span class="val-normal">~98%</span>. With Pressure Override removed from a single pump, that pump's associated AF21s will <span class="hi-exam">open to current demand</span>. <span class="hi-exam">Salem Unit 1 mapping: 11 AFW pump feeds 13 and 14 AF21s only; 12 AFW pump feeds 11 and 12 AF21s</span> — pump number does NOT match AF21 number on the same SG.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q46</div>
<span class="hi-exam">21 AFW Pump (motor-driven) feeds 23 and 24 SGs.</span> 23 AFW Pump (turbine-driven) feeds all 4 SGs. Pressure override runout protection closes AF21 valves when discharge pressure is <span class="hi-exam">&lt; 1085 psig</span>, preventing pump runout. With pressure override active on 21 AFW and 23 AFW running, <span class="hi-exam">23 and 24 SG levels rise SLOWER</span> than 21 and 22 SG levels (only turbine-driven pump feeding them vs. turbine-driven feeding all 4). <span class="hi-trap">Common trap: believing 21 AFW feeds 21 and 22 SGs (pump number does NOT match SG number).</span> 23 AFW auto-starts on LOOP due to 4KV Group Bus Undervoltage.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak escalating to rupture. After 21 SG identified as the affected SG, CRS dispatches operator to <span class="hi-exam">shut 21MS45 — the steam supply to 23 AFW pump</span>; this renders 23 AFW inoperable and the CRS enters <span class="hi-exam">LCO 3.7.1.2 (less than 3 operable AFW pumps)</span>. After the manual trip and SI for the SGTR, <span class="hi-exam">21 AFW pump trips</span> (4-minute delay simulator trigger) — PO redistributes flow between 22 AFW pump (supplies 21/22 SGs) and 23 AFW pump (supplies all SGs). In EOP-SGTR-1, isolating feed flow to 21 SG is part of <span class="hi-exam">CT#1 (CT-18)</span>: PO closes <span class="hi-exam">21AF11 and 21AF21</span> (and later trips 23 AFW pump after 21 SG is fully isolated). Pump-to-SG mapping: 21 AFW pp → 23/24 SGs; 22 AFW pp → 21/22 SGs; 23 AFW pump → all SGs.
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.2 requires three independent AFW pumps OPERABLE in Modes 1, 2, and 3 (two motor-driven, each from a separate vital bus; one turbine-driven from an OPERABLE steam supply) (TS 3/4.7.1.2)
- 1 pump inoperable: 72 hours to restore (TS 3/4.7.1.2)
- 2 pumps inoperable: Hot Standby in 6 hours (TS 3/4.7.1.2)
- 3 pumps inoperable: immediately restore at least one (TS 3/4.7.1.2)

**Exam & operating coverage:**

### Operability Basis & Instrumentation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q97</div>
The TS 3.7.1.2 operability Bases for the AFW System in Modes 1-3 is that it <span class="hi-exam">ensures the RCS can be cooled down to &lt;350°F from normal conditions following a complete loss of off-site power</span>. <span class="hi-trap">Trap: do not confuse with the AFWST sizing basis (8 hours at HSB with atmospheric steam discharge), the SGTR cooldown to &lt;500°F (off-site dose), or the ATWT decay-heat reason — none of those is the 3.7.1.2 operability bases.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q20</div>
Loss of 2A 115VAC VIB AFW impact (no SI): <span class="hi-exam">23AF21 and 24AF21 fail closed</span> due to pressure override as power is lost to the AFW discharge pressure transmitter — power is also lost to the AF21 valve controllers. AB.115-0001 Step 13 dispatches an <span class="hi-exam">NEO to locally throttle 23AF21 and 24AF21</span>. <span class="hi-trap">Without an SEC actuation, 21 AFW Pump does NOT auto-start on a Rx trip alone — and manual start is not required by AB.115-0001 for this condition. PRESSURE OVERRIDE DEFEAT is NOT useful here because power is lost to the valve controllers themselves, not just the transmitter.</span>
</div>

### SGTR & Steam Supply

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q55</div>
The 23 Turbine-Driven AFW pump is supplied from the 21 and 23 Main Steam lines (each with its own isolation valve — <span class="hi-exam">21MS45 and 23MS45</span> — and check valve). During an SGTR, the TDAFW pump <span class="hi-exam">remains in service ONLY if it is the SOLE source of feed flow</span> (its turbine exhaust is an unmonitored atmospheric release). Per EOP-SGTR-1 Steps 4.4/4.5/4.7, if NOT the sole feed source: <span class="hi-exam">lower 23 AFW speed to minimum, trip it, and do not restart until 23MS45 is shut</span>. <span class="hi-trap">A single SG fed is sufficient for heat-sink status; 22 AFW pump (2B 4KV bus) running means 23 AFW is not the only source. 21 AFW pump is lost on a 2A 4KV vital bus lockout.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q15</div>
EOP-SGTR-1 Step 6 AFW control to ruptured SG: if ruptured SG NR level is &lt;9%, <span class="hi-exam">establish AFW flow until NR level &gt;9%, then isolate AFW and maintain &gt;9%</span>. Purpose is to keep tubes covered. <span class="hi-trap">19% is the EOP Rev 30 level for INTACT SG maintenance — not the ruptured SG.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q79</div>
2MS132 (23 AFP Turbine Steam Inlet Valve) air supply line rupture: valve <span class="hi-exam">fails OPEN on loss of air</span>, causing 23 AFW pump to start at power. Cold AFW injection causes <span class="hi-exam">reactor thermal overpower (exceeds 3459 MWt)</span>. Per S2.OP-IO.ZZ-0004 (Power Operation): <span class="hi-exam">reduce turbine load</span> to lower reactor power below the administrative limit. <span class="hi-trap">AB.CA-0001 Attachment 12 provides local control of 23 AFP governor and AF21s but does NOT direct shutting down 23 AFW pump. The overpower condition must be addressed first by reducing turbine load.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A4</div>
ICMF during SGTR: TD AFW pump (23 AFW) takes steam from <span class="hi-exam">21 and 23 SGs</span>. With 23 SG ruptured and <span class="hi-exam">23MS45 not yet closed</span>, primary-to-secondary leakage exits through the TD AFW pump steam supply — constitutes an <span class="hi-exam">unmonitored release in progress</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
During the SGTR response, <span class="hi-exam">22 AFW pump pressure-override (discharge-pressure interlock) protection fails and cannot be defeated</span>, so 22 AFW pump runs at high discharge pressure but supplies no flow to 21/22 SGs. The 23 (TD) AFW pump is supplying flow with 23MS45 not yet shut (an unmonitored atmospheric release). The crew isolates AFW to the ruptured 23 SG by closing <span class="hi-exam">23AF11 and 23AF21 (CT#1 — within 10 min of TRIP-1 entry)</span>, throttles total AFW flow &gt;22E4 lbm/hr, then secures 23 AFW pump in SGTR-1 (lower speed to minimum, trip) and resets 23MS52 after all SG NR levels &gt;15%.
</div>

### EOP Procedure Interactions

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
EOP-FRTS-1 PURPLE path AFW flow target (Step 3.5): <span class="hi-exam">maintain AFW flow &gt;22E4 lbm/hr until at least ONE intact SG NR level is &gt;15%</span>. With all SG NR levels &lt;9% (less than the 15% adverse threshold), the crew is directed to maintain &gt;22E4 lbm/hr. <span class="hi-trap">FRSM-1 (not FRSM-2) directs &gt;44E4 lbm/hr coupled with boration until IR SUR is negative — do not confuse the two flow targets.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q85</div>
EOP-LOSC-2 / LOSC-1 transition with AFW flow at <span class="hi-exam">1.0E4 lbm/hr to each SG</span>: a pressure rise in any SG after LOSC-2 Step 20 (post SI termination) directs GO TO EOP-LOSC-1 — AFW flow is maintained while transition occurs. The 1.0E4 lbm/hr per-SG target is the LOSC-2 reduced-flow band for cooldown control under faulted-SG conditions.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-d</div>
With <span class="hi-exam">all AFW flow lost</span> and all SGs faulted (unisolable MSLB), no secondary heat sink exists. EOP-FRHS-1 Step 1 first checks whether total AFW flow is less than <span class="hi-exam">22E04 lb/hr due to operator actions</span> (here it is NOT — the loss is a malfunction, not operator-induced). With no charging pump available, the crew must establish RCS bleed and feed using the SI pumps and reactor head vents. This defines the loss-of-secondary-heat-sink entry threshold AFW flow value used in FRHS-1.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-h</div>
On a loss of RHR with no RHR loop available, AFW provides the secondary heat sink for alternate decay heat removal (AB.RHR-0001 Attachment 10): <span class="hi-exam">feed available Steam Generators to wide-range level &gt;77% using the Auxiliary Feedwater System (or Condensate)</span> while operating the MS10s to keep Core Exit Thermocouples stable or lowering.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
After the reactor trip, steam leak in containment, and MSLI failure, the RCS cools down rapidly (cooldown rate &gt; 100°F/hr). <span class="hi-exam">CT#3 (CT-33): reduce AFW flow to no less than 1.0E4 lbm/hr to each SG</span> to minimize the RCS cooldown, performed in FRCE-1 prior to exit (and consistent with the LOSC-2 cooldown-minimization criterion). AFW pumps not needed for SG level control (e.g., 23 AFW pump) are tripped/stopped. See [[2014 Scenario 1]].
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related procedures: [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[S2.OP-PT.AF-0002 — AFW Backleakage Testing]], [[AB.115-0001 — Loss of 115V Vital Instrument Bus]], [[S2.OP-SO.AF-0001 — Auxiliary Feedwater System Operation]], [[S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation]], [[AB.CA-0001 — Loss of Control Air]]
- Related exam questions: [[2015 Q18]], [[2016 Q15]], [[2016 Q20]], [[2016 Q51]], [[2016 Q53]], [[2016 Q54]], [[2016 Q65]], [[2016 Q76]], [[2016 Q78]], [[2016 Q83]], [[2016 Q85]], [[2016 Q90]], [[2018 Q18]], [[2018 Q66]], [[2019 Q16]], [[2019 Q19]], [[2019 Q20]], [[2019 Q31]], [[2019 Q71]], [[2020 Q10]], [[2020 Q18]], [[2020 Q44]], [[2020 Q46]], [[2020 Q100]], [[2023 Q41]], [[2023 Q43]], [[2023 Q44]], [[2022 Q46]], [[2022 Q79]], [[2015 Q53]], [[2015 Q54]], [[2015 Q63]], [[2015 Q83]], [[2014 Q15]], [[2014 Q55]], [[2014 Q56]], [[2014 Q85]], [[2014 Q97]], [[2014 Q92]], [[2012 Q2]], [[2012 Q14]], [[2012 Q19]], [[2012 Q25]], [[2012 Q55]], [[2012 Q56]], [[2012 Q84]]
- Related JPMs: [[2014 JPM Sim-d]], [[2023 JPM SRO-A4]], [[2016 JPM IP-j]], [[2015 JPM Sim-h]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 1]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 2]], [[2012 Scenario 3]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
