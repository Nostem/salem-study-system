---
title: Radiation Monitoring
category: systems
status: draft
aliases:
  - process radiation monitors
  - rad monitors
  - rad protection
  - ALARA
  - shielding
---

# Radiation Monitoring

## Function

Radiation monitoring systems detect and measure radiation levels throughout the plant for personnel protection, effluent control, and post-accident monitoring. Process radiation monitors provide automatic actuation of safety functions (e.g., containment vent isolation) and alarms. The radiation protection program ensures that occupational radiation exposures are maintained as low as reasonably achievable (ALARA) and within 10CFR20 limits. (UFSAR 7.6, UFSAR 12)

## Process Radiation Monitors

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q49</div>
SGBD radiation monitor (<span class="hi-exam">1R19A</span>) check source test: when the check source pushbutton is pressed, counts rise then <span class="hi-exam">return to the original reading</span> (not held high while button is pressed). During the check source, <span class="hi-exam">interlocks are NOT expected to actuate</span>. (Ref: S1.OP-ST.RM-0001)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q10</div>
The <span class="hi-exam">R19 SGBD radiation monitors are NOT accurate immediately following a unit trip</span> — per the note under the AB.SG-0001 entry conditions, a 2R19 alarm right after a Rx trip should not be the sole basis for entering the SG tube leak procedure or for a manual SI. The proper response to OHA A-6 RMS HI RAD with 2R19C (23 SG Blowdown) in alarm is to <span class="hi-exam">enter AB.RAD-0001 to verify the alarm while continuing in EOP-TRIP-2</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
1R1A (Control Room Area) radiation monitor in alarm: <span class="hi-trap">does NOT automatically actuate CAV in AP Mode</span>. Requires manual actuation — press ACCIDENT PRESSURIZED pushbutton at 1RP2 to actuate BOTH units' CAV into AP Mode. Emergency intake dampers open on the unaffected unit.
</div>

### Letdown Line Failed-Fuel Monitor (R31)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q19</div>
<span class="hi-exam">2R31 is the Letdown Line-Failed Fuel Process Rad Monitor</span> (RMS channel monitoring CVCS letdown for fuel-clad failure). A rising 2R31 trend indicates increasing RCS activity, but the monitor itself <span class="hi-trap">cannot distinguish a crud burst from failed fuel by its rate of rise</span> — there is no procedural guidance to judge the source by how fast the indication rises. Per AB.RC-0002, the cause is determined by having a <span class="hi-exam">Shift Chemistry Technician perform an isotopic (radiological) analysis of the RCS</span>: a crud burst shows different radionuclide concentrations than failed fuel. <span class="hi-trap">Maximizing letdown flow expedites cleanup of valid activity (not source determination); Radiation Protection surveys are for personnel protection/reposting (not source determination).</span>
</div>

### Plant Vent Effluent Monitor (R41)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q83</div>
Gas Decay Tank (GDT) release path: <span class="hi-exam">11 GDT discharges to the plant vent</span>. An unplanned gaseous radioactive release from the 11 GDT will alarm on <span class="hi-exam">1R41D (Plant Vent Noble Gas Release Rate)</span> — NOT on 1R12A-B (Cont or Vent Gas Effluent/Iodine). Crew performs AB.RAD-0001 <span class="hi-exam">Attachment 1 (Process Radiation Monitors)</span> to stop the release. <span class="hi-trap">Trap: R12A-B IS a gaseous process radiation monitor, but it monitors containment vent gas, not the plant vent. Also, Attachment 2 (Process Filter Radiation Monitors) applies to filtered systems — the GDT release path to the plant vent is unfiltered.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q25</div>
2R41 has 4 channels (A, B, C, D). <span class="hi-exam">2R41 Channel D is the ONLY control room indication that reads out in µCi/sec</span> and can be used to determine if a radiological release is in progress for notification to State and Local Agencies. <span class="hi-trap">Channels A, B, and C do not read out in µCi/sec — only Channel D provides release rate information.</span>
</div>

### Steam Generator Blowdown Radiation Monitors (R19)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q23</div>
R19 SGBD radiation monitor WARNING setpoint — unit difference confirmed: <span class="hi-exam">Unit 1 has NO automatic functions when R19 goes into WARNING</span> (automatic functions only occur when the monitor goes into ALARM). <span class="hi-exam">Unit 2 has automatic functions on R19 WARNING</span> — GB185 (Blowdown Discharge to Condenser) valves automatically close. <span class="hi-trap">Trap: do not confuse WARNING vs ALARM actions, and remember the unit difference at the WARNING level. Unit 1 warning is early warning only; Unit 2 warning closes blowdown valves.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q51</div>
R19 SGBD radiation monitor WARNING setpoint: <span class="hi-exam">Unit 1 — NO automatic actuations (warning is early warning only). Unit 2 — automatically closes ALL GB10s, GB185s, and 2GB50.</span> <span class="hi-trap">Trap: R19 WARNING and ALARM actions differ. The ALARM setpoint on Unit 1 closes ALL GB4s, GB8s, GB10s, GB185s, and 1GB50. On Unit 2, ALARM isolates blowdown from the affected SGs by closing the associated GB4. Do not confuse warning vs alarm actions, and remember the unit difference at the warning level.</span>
</div>

### Main Steamline Monitors (R46, R53)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q14</div>
First indication of a Steam Generator tube leak at 100% power: <span class="hi-exam">R53 Main Steamline N-16 monitors</span> — these are <span class="hi-exam">N-16 (nitrogen-16) monitors</span> on the Main Steamlines and are very sensitive, indicating prior to the others. <span class="hi-trap">Trap A: R15 Condenser Air Ejector samples the Main Condenser, so steam must travel past R53 first.</span> <span class="hi-trap">Trap B: R19 SG Blowdown provides indication only after blowdown flow lag time.</span> <span class="hi-trap">Trap C: R46 Main Steamline monitors are HIGH RANGE — while they can detect low levels of radiation, they would NOT provide an alarm to alert the crew at low SGTL levels.</span> Ranking by SGTL response time: <span class="hi-exam">R53 → R46 → R19 → R15</span>.
</div>

### Liquid Effluent Radiation Monitor (R18)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q90</div>
2R18 (Radioactive Liquid Effluent Monitor) response to detector failure: <span class="hi-exam">R18 failing LOW will NOT cause 2WL51 (Liquid Release Stop Valve) to automatically close</span> — only a HIGH alarm closes WL51. Per S2.OP-SO.WL-0001, if 2R18 is inoperable, <span class="hi-exam">2FR1064 (Radwaste Overboard Discharge Flow Recorder) must be OPERABLE AND two independent samples, independent release calculations, and independent discharge valve lineups must be performed</span>. <span class="hi-trap">Trap: ODCM 3.3.3.8 allows flow rate estimation if 2FR1064 is inoperable, but the release procedure prevents BOTH R18 and FR1064 from being inoperable simultaneously.</span>
</div>

### Fuel Handling Building Radiation Monitors

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q23</div>
2R32A (Fuel Handling Crane area radiation monitor): when the monitor <span class="hi-exam">fails to its alarm setpoint, ONLY crane hoist-up operation is prevented</span>. Lowering the hoist is still allowed (conservative — allows the assembly to be lowered back for increased water shielding). <span class="hi-trap">There is no BYP INT pushbutton to defeat this interlock, and crane trolley operation is NOT affected.</span> Note: <span class="hi-exam">2R5 and 2R9 (FHB area rad monitors) cause FHB exhaust to shift to 22 HEPA plus Charcoal but have NO interlocks with the fuel handling crane</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q33</div>
Confirms 2R32A behavior: with 2R32A failed high, <span class="hi-exam">ONLY crane motion other than downward movement of suspended load is locked out</span>. FHB ventilation transfer to HEPA and Charcoal does NOT occur on 2R32A — <span class="hi-exam">FHB ventilation auto-shifts only on 2R5 and 2R9 alarms</span>.
</div>

### Fuel Storage Area Monitor (2R9)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q36</div>
2R9 (Fuel Storage Area Monitor) alarm response: <span class="hi-exam">BOTH Fuel Handling Area Exhaust Fans receive an auto start signal</span> (standby fan starts). <span class="hi-exam">21 HEPA ONLY Filter Unit ISOLATES</span> and <span class="hi-exam">22 HEPA PLUS CHAR filter unit automatically aligns</span>. After 2R9 alarm, both exhaust fans are running but only the charcoal filter unit is in service. <span class="hi-trap">Trap: 2R9 does NOT keep both HEPA units in service — the HEPA ONLY unit isolates and the HEPA PLUS CHAR unit takes over.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q88</div>
2R5 setpoints (FHB radiation monitor — Spent Fuel Pool area): <span class="hi-exam">alarm <span class="val-alarm">11 mR/hr</span>, warning <span class="val-alarm">7 mR/hr</span></span>. On a dropped fuel assembly with 2R5 stabilized at 25 mR/hr (above alarm), FHB ventilation <span class="hi-exam">automatically swaps to the Charcoal Filter and starts BOTH FHB Exhaust Fans</span> (normal lineup is single Supply Fan + both Exhaust Fans). <span class="hi-trap">2R5 does NOT lock out crane motion — only the 2R32A monitor on the crane itself causes the &quot;all crane motion except downward&quot; lockout.</span>
</div>

### Containment High Range Monitors (R44A/B)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
R44A/B containment high range monitors provide input to the Subcooling Margin Monitor for adverse containment determination. <span class="hi-exam">R44A/B > 1E05 R/HR triggers adverse containment conditions for the SMM.</span> Note: <span class="hi-trap">>1E06 R/HR is the integrated dose value used in procedures — the SMM adverse threshold is >1E05 R/HR.</span> R44A/B are also used in EOP-CFST-1 to determine entry into EOP-FRCE-3 when radiation exceeds 2 R/HR.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q27</div>
Confirms the SMM ADVERSE Mode logic: <span class="hi-exam">EITHER R44A OR R44B reaching 1E5 R/hr automatically shifts either channel of the Subcooling Margin Monitor to ADVERSE Mode</span> — only one of the two Containment High Range monitors is required. <span class="hi-trap">Other in-containment area monitors (R2 Containment 130', R7 In-Core Seal Table) do NOT input into the SMM.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q85</div>
With a SAE already declared during a LBLOCA, <span class="hi-exam">containment radiation exceeding 2000 R/hr adds 2 points from the containment barrier — escalating the classification to a General Emergency</span>. The more-severe classification is what drives a subsequent NRC notification (required within 60 minutes, not 15).
</div>

## Shielding Design

- Primary shielding: biological shield around the reactor vessel (concrete)
- Secondary shielding: containment structure, auxiliary building walls
- Designed to limit dose rates in normally occupied areas to levels consistent with 10CFR20 occupational limits
- Shielding design considers both normal operation and post-accident conditions
(UFSAR 12.1)

## Ventilation for Contamination Control

- Plant ventilation systems maintain appropriate pressure differentials to direct airflow from areas of lower contamination to areas of higher contamination
- HEPA filters and charcoal adsorbers on exhaust systems remove airborne contamination
- Containment purge system used to reduce airborne activity levels before personnel entry
(UFSAR 12.2)

## Radiation Protection Program

- Dosimetry: personnel monitoring for external and internal exposure
- Radiation surveys and monitoring
- Contamination control and decontamination
- Respiratory protection program
- Radioactive material control and accountability
- Training for all personnel with access to radiation areas
(UFSAR 12.3)

## ALARA Program

- Design features to minimize exposure: remote operation, shielding, ventilation, decontamination capability
- Administrative controls: radiation work permits, dose goals, pre-job ALARA reviews
- Dose tracking and trending
(UFSAR 12.4)

## Key Regulatory Limits (10CFR20)

| Parameter | Limit | Source |
|-----------|-------|--------|
| Total Effective Dose Equivalent (TEDE) | 5000 mrem/year | 10CFR20.1201 |
| Lens of Eye Dose | 15000 mrem/year | 10CFR20.1201 |
| Shallow Dose Equivalent (skin/extremity) | 50000 mrem/year | 10CFR20.1201 |
| Declared Pregnant Worker | 500 mrem/gestation | 10CFR20.1208 |
| General Public (fence line) | 100 mrem/year | 10CFR20.1301 |

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.3]]** — Monitoring Instrumentation (radiation monitors)
- **[[TS 3/4.11 — Radioactive Effluents]]** — Effluent monitoring and release limits

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q83</div>
Fission Product Barrier Table (EP-SA-325-123) and R44A/B containment high range radiation monitors: with <span class="hi-exam">R44A and R44B both reading >2000 R/hr</span> following a LBLOCA, the barrier assessment yields: <span class="hi-exam">FB2.L (fuel barrier loss, 5 pts) + RB1.L or RB2.L (RCS barrier loss, 5 pts) + CB2.P (containment barrier potential loss, 2 pts) = 12 points → General Emergency</span>. Classification: <span class="hi-exam">GE with Loss of 2 barriers and Potential Loss of the 3rd barrier</span>. <span class="hi-trap">This is NOT a loss of all 3 barriers — containment is a POTENTIAL loss (lowering pressure indicates containment is functioning).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A4</div>
Dose and stay time calculation for containment entry (RP-AA-300): from survey map, identify gamma and neutron dose rates at work location. Calculate stay time = (dose limit / dose rate) x 60 min/hr. Compare all limiting factors: <span class="hi-exam">gamma stay time, neutron stay time, and heat stress stay time</span>. The lowest value is the controlling factor. At 22 CFCU area (130' CTMT): neutron = 40 mrem/hr → <span class="hi-exam">12 min stay time (most limiting)</span>, gamma = 5 mrem/hr → 24 min, heat stress = 15 min.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-k</div>
During liquid radwaste release (S2.OP-SO.WL-0001 Sec 5.5), <span class="hi-exam">2R18 reads 105 cpm with High Radiation light illuminated</span> at 104 panel during Step 5.5.8 data collection. Step 5.5.9: 2R18 Monitor ALARMS → direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span> to terminate the release.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-k</div>
During liquid radwaste release (S2.OP-SO.WL-0001 Sec 5.5), <span class="hi-exam">2R18 radiation monitor</span> provides overwatch. At Step 5.5.8, operator reads 2R18 on 104 panel: <span class="hi-exam">105 CPM with High Radiation light illuminated</span>. Step 5.5.9: if 2R18 ALARMS, immediately direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span> to terminate the release.
</div>

## Process Radiation Monitor Source Checks

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q60</div>
Process radiation monitor Source Check duration: <span class="hi-exam">activate the source check for 30 seconds or less to prevent the solenoids from overheating</span>. Both the system operating procedure (S1.OP-SO.RM-0001) and the surveillance procedure (S1.OP-ST.RM-0001) contain this 30-second precaution. <span class="hi-trap">Traps: terminating "just until indication of rising level is detected" prolongs source life but is NOT the procedural rationale; alarm action functions are NOT automatically blocked on every monitor during a source check, but the cited reason for the 30-second limit is solenoid overheating; source check is not intended to raise rad levels outside the monitor.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q59</div>
2R18 (Liquid Radwaste process radiation monitor) ALARM setpoint per S2.IC-CC.RM-0028 is <span class="hi-exam">6.82E5 cps</span>. Above the setpoint, <span class="hi-exam">2R18 automatically shuts 2WL51 (Liquid Release Stop Valve)</span>. If the auto-close fails (e.g., 2WL51 still indicates OPEN with 2R18 in alarm at 10E6 cps), <span class="hi-exam">the NCO shuts 2WL51 remotely from the control room</span> per S2.OP-SO.WL-0001 Step 5.5.9 — there is no procedural provision to close 2WL51 locally.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q68</div>
<span class="hi-exam">Containment Radiation Monitors (e.g., 2R12A) are NOT required to be operable for Mode 6 or Fuel Movement or Core Alts per Tech Specs.</span> A failure of 2R12A causing a Containment Ventilation Isolation signal does NOT by itself require suspension of fuel movement. <span class="hi-trap">Trap: a CVI signal looks like an emergency response, but the rad monitor is not Tech-Spec required for refueling, so its failure has no LCO impact on fuel movement.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q49</div>
A loss of SFP cooling that lets SFP temperature climb toward 150°F drives <span class="hi-exam">spent-fuel off-gassing, raising radiation at the FHB charcoal filter</span>. The 2R32 Fuel Handling Crane Area Monitor does not preclude lowering a fuel bundle. See [[Spent Fuel Pool]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q60</div>
When a Containment Pressure Relief is initiated with NORMAL containment radiation: <span class="hi-exam">1R12A (Containment Gas Effluent) stays constant (already sampling containment), 1R41B (Plant Vent Noble Gas Intermediate Range) stays constant (no sample flow until 1R41A nears full scale), and 1R41D (Plant Vent Noble Gas Release Rate) RISES</span> (computes release rate from on-range monitors × plant-vent flow; also auto-terminates release on high effluent).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q73</div>
Area Radiation Monitors with automatic ventilation actions: <span class="hi-exam">2R9 (New Fuel Storage) on its High Radiation Alarm realigns FHB ventilation through the charcoal filters and starts both FHB Exhaust fans</span>. Distractors: 2R32A (Fuel Handling Crane) only prevents fuel-crane motion except downward; 2R52 (Liquid PASS Room) only lights an alarm outside the PASS room; 2R44A (Containment High Range) has no automatic function.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q98</div>
On a 2R31 (Letdown Line Monitor) WARNING and entry into AB.RC-0002: the CRS <span class="hi-exam">directs a Radiation Protection Technician to take surveys to determine if radiation levels have changed access requirements</span> (so personnel are promptly notified). Chemistry sampling — not RP surveys — confirms the 2R31 rise; the hourly isotopic analysis is for gamma to determine DEI for trending.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q60</div>
On a CVCS Monitor Tank release routed through the cross-connect line, the high-radiation auto-isolation comes from the initiating unit's <span class="hi-exam">R18 monitor closing 2WL51</span>. <span class="hi-trap">The cross-connect does NOT put flow through the opposite unit's R18 monitor; 1WL51 stays out of the flowpath.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q61 (Deleted)</div>
For a 22 SG tube leak: <span class="hi-exam">2R19B (22 SG Blowdown) and 2R15 (Condenser Air Ejector) respond first, then 2R41D (Plant Vent Release Rate)</span> as activity reaches the plant vent. <span class="hi-trap">The 2R46A (22 Main Steam Line) monitor watches high-level post-accident noble-gas releases via the atmospheric steam relief/safety valves — it does NOT change from a tube leak.</span> (Question marked Deleted on the worksheet; keyed answer B.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q62</div>
Point-source inverse-square scaling: <span class="hi-exam">DR1 = DR2 × (d2² / d1²)</span>. A process monitor reading 2 R/hr at 10 ft from a dropped source gives <span class="hi-exam">2 R/hr × (10²/1²) = 200 R/hr</span> at 1 ft.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q67</div>
Containment Radiation Monitors (e.g., 2R12A) are <span class="hi-exam">NOT required to be operable for Mode 6, Fuel Movement, or Core Alterations</span> per Tech Specs — a failure causing a Containment Ventilation Isolation does not by itself require suspending fuel movement. The condition that DOES require suspension: aligning Control Area Ventilation to <span class="hi-exam">FIRE OUTSIDE CONTROL AREA (Recirculation Mode)</span>, which prohibits Core Alterations and movement of irradiated fuel (T/S Bases 3/4.7.6, SO.CAV P&amp;L 3.6.3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q70</div>
The <span class="hi-exam">R41 plant-vent monitors in the control room have a trend function</span> (display historical data on 2RP1) that can confirm whether a gaseous release is actually in progress versus a tank-pressure instrument failure. If a release IS in progress through the plant vent, it is being monitored — so the release is <span class="hi-exam">unapproved, not unmonitored</span>. <span class="hi-trap">Area Monitors do NOT have local trend functions; only R4 and R34 are trended (on the P-250 computer) in the control room.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q71</div>
On a 2R19A (SG Blowdown Rad Monitor) Hi Rad <span class="hi-exam">ALARM</span>, <span class="hi-exam">ONLY the affected 21GB4 (SG B/D Outlet Isolation Valve) shuts automatically</span> — to minimize the spread of contamination from an SGTR on 21 SG to secondary systems. <span class="hi-trap">All four 21-24GB4s do NOT shut; ALL GB10s, GB185s, and 2GB50 shut on the Hi Rad WARNING (a different setpoint). Each SG has its own blowdown line, so cross-contamination/backfeeding through the blowdown lines is not possible.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q72</div>
EOP-LOCA-1 step 16 checks for radiation outside containment using these monitors: <span class="hi-exam">2R4 (charging pump area), 2R41D (plant vent process), 2R34 (Mechanical Penetration 100'), 1R3 (Radio Chem lab area), 1R6A (Sampling room), and 1R20B (counting room)</span>. <span class="hi-trap">2R10A (Personnel Hatch Containment 100') is used to assist in determining a LOCA is occurring INSIDE containment — not on the step 16 outside-containment list. 2R47 and 2R52 are not checked in step 16.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[CAV]], [[Containment]], [[Waste Gas]], [[Waste Liquid]], [[Steam Generator & Blowdown]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[AB.RC-0002 — High Activity in the RCS]], [[S2.OP-SO.RM-0001 — Radiation Monitoring System Operation]], [[S1.OP-SO.RM-0001 — Radiation Monitoring System Operation]], [[S1.OP-ST.RM-0001 — Radiation Monitors Check Source]], [[NC.EP-EP.ZZ-0304 — OSC Radiation Protection Response]], [[RP-AA-300 — Radiological Survey Program]], [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[S2.IC-CC.RM-0028 — 2R18 Liquid Waste Disposal Process Radiation Monitor]], [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exams: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2012 NRC Written Exam]]
  - [[2015 Q10]] — R19 SGBD monitors not accurate immediately post-trip / enter AB.RAD-0001 to verify, not manual SI
  - [[2015 Q19]] — 2R31 Letdown Line Failed-Fuel monitor / crud burst vs failed fuel determined by Shift Chemistry isotopic RCS analysis (AB.RC-0002)
  - [[2015 Q49]] — loss of SFP cooling: rising radiation at FHB charcoal filter from spent-fuel off-gassing as SFP temp approaches 150°F
  - [[2015 Q60]] — containment pressure relief: 1R41D (release rate) rises; 1R12A and 1R41B constant with normal containment radiation
  - [[2015 Q73]] — 2R9 (New Fuel Storage) ARM High Rad Alarm realigns FHB ventilation through charcoal filters and starts both FHB Exhaust fans
  - [[2015 Q98]] — 2R31 WARNING / AB.RC-0002: direct RP Tech surveys to determine if access requirements changed (prompt personnel notification)
  - [[2016 Q14]] — R53 Main Steamline N-16 monitor / FIRST indication of SGTL at 100% power
  - [[2019 Q8]] — 2R17A/B high alarm auto-closes 2CC149 (CCW Surge Tank Vent Valve)
  - [[2019 Q25]] — 2R41 Channel D reads in µCi/sec for release determination
  - [[2019 Q33]] — 2R32A fails high: only crane motion other than downward movement locked out / FHB vent does NOT shift
  - [[2019 Q36]] — 2R9 alarm: both FHB exhaust fans start, HEPA ONLY isolates, HEPA PLUS CHAR aligns
  - [[2020 Q23]] — 2R32A fuel handling crane interlock / hoist-up only / R5 & R9 do NOT interlock crane
  - [[2018 Q23]] — R19 SGBD WARNING unit difference: Unit 1 no auto actions on warning, Unit 2 closes GB185s on warning
  - [[2018 Q46]] — 2R1B-2 control room intake rad monitor: AP Mode on ALARM (not WARNING), only opposite unit EACS opens
  - [[2020 Q51]] — R19 SGBD warning setpoint unit difference: Unit 1 no auto action, Unit 2 closes GB10s/GB185s/GB50
  - [[2023 Q49 — SGBD Radiation Monitor Check Source|2023 Q49]] — SGBD rad monitor check source response and interlocks
  - [[2023 Q62]] — Area Rad Monitor 1R1A / manual CAV AP mode from 1RP2
  - [[2022 Q62]] — Fuel Handling Crane interlocks (2R32A vs 2R9 rad monitors)
  - [[2022 Q83]] — LBLOCA R44A/B >2000 R/hr / GE classification / Fission Product Barrier Table
  - [[2020 Q26]] — R44A/B >1E05 R/HR / SMM adverse containment / manual reset for radiation
  - [[2019 Q43]] — 21 CVCS MT release via SW to CW / 2FR1064 inoperable requires stopping release
  - [[2020 Q90]] — 2R18 fails LOW → WL51 does NOT close / FR1064 must remain OPERABLE per release procedure
  - [[2018 Q83]] — 11 GDT discharges to plant vent → R41D alarm / AB.RAD-0001 Attachment 1 (Process) not Attachment 2 (Filter)
  - [[2018 Q85]] — R44A/B ≥ 2 R/HR = FRCE-3 entry (yellow path, not required) / 100 R/HR is warning setpoint
  - [[2018 Q89]] — R12A failure during containment vacuum relief / TS 3.3.3.1 Table 3.3-6 / R41 alternate for purge & P/V relief
  - [[2016 Q59]] — 21 CVCS MT release / 2R18 ALARM setpoint 6.82E5 cps auto-shuts 2WL51 / NCO shuts remotely if auto-close fails
  - [[2016 Q60]] — Process radiation monitor source check ≤ 30 seconds / prevents solenoid overheating
  - [[2016 Q68]] — Containment Rad Monitors (2R12A) NOT required operable for Mode 6 / Fuel Movement / Core Alts
  - [[2016 Q88]] — 2R5 alarm 11 mR/hr / dropped fuel: auto swap FHB vent to charcoal + start both Exhaust Fans / 2R5 does NOT lock out crane
  - [[2014 Q5]] — RCP thermal barrier rupture: rising activity on 2R17A/2R17B CCW surge tank rad monitors (expected); CC surge tank level lowering is the unexpected indication
  - [[2014 Q13]] — fuel handling incident: evacuate FHB at 1 R/hr per AB.FUEL-0001 CAS 1.0; 2R32A crane lockout and HEPA+Charcoal realignment are not the evacuation criterion
  - [[2014 Q14]] — 2R19A SG Blowdown Rad Monitor at ALARM (not Warning) auto-closes 21GB4 to isolate blowdown to condenser; each SG has its own blowdown line (no backfeeding)
  - [[2014 Q20]] — failed fuel with excess letdown in service (2CV18 shut): 2R4 (Charging Pump Room Area) responds first since excess letdown returns to charging pump suction; bypasses 2R31, no 2R26 demin flow, no 2R19 with no pri-sec leak
  - [[2014 Q60]] — CVCS Monitor Tank cross-connect release: initiating unit's R18 monitor auto-closes 2WL51; cross-connect bypasses opposite unit's R18 (1WL51 not in flowpath)
  - [[2014 Q61]] — 22 SG tube leak: 2R19B/2R15 respond first, then 2R41D; 2R46A (22 Main Steam Line) does NOT change (post-accident noble-gas monitor) — question marked Deleted, keyed B
  - [[2014 Q62]] — point-source inverse-square: 2 R/hr at 10 ft → 200 R/hr at 1 ft via DR1 = DR2 × (d2²/d1²)
  - [[2012 Q16]] — substantial fuel rod leak at 100% power: 2R31 (Letdown Line) responds FIRST and most significantly; 2R53A-D N16 MS Line only with primary-to-secondary leakage; 2R34 charging area diluted by VCT; 2R2 area monitor slow
  - [[2012 Q19]] — during LOCA-2 the 2R53A-D (N16 MS Line) monitors give no useful indication after Rx shutdown (SGBD alignment is an SGTR-1 action, not LOCA-2)
  - [[2012 Q27]] — EITHER R44A OR R44B (Containment High Range) at 1E5 R/hr shifts the SMM to ADVERSE Mode; R2 (Containment 130') and R7 (In-Core Seal Table) do NOT input to the SMM
  - [[2012 Q61]] — 21 CVCS MT release: 2R18 ALARM setpoint 6.82E5 cps auto-shuts 2WL51 (S2.IC-CC.RM-0028); 2R18 red 104-panel alarm with 2WL51 OPEN means the auto-close failed → NCO shuts 2WL51 remotely (no local-close provision, no time delay)
  - [[2012 Q65]] — valid RMS-initiated CVI during containment vacuum relief shuts 2VC5, 2VC6 AND the Vacuum Relief Damper; CVI can be blocked only if present before commencing the relief (not blocked in the stem conditions)
  - [[2012 Q67]] — 2R12A Containment Rad Monitor NOT required operable for Mode 6/Fuel Movement; FIRE OUTSIDE CONTROL AREA (Recirculation Mode) is the condition requiring suspension of fuel movement
  - [[2012 Q70]] — isolated GDT pressure lowering: R41 plant-vent monitor trend on 2RP1 confirms a release (Area Monitors have no local trend); release would be unapproved, not unmonitored
  - [[2012 Q71]] — 2R19A Hi Rad ALARM auto-shuts ONLY the affected 21GB4; all GB10s/GB185s/2GB50 shut on WARNING; each SG has its own blowdown line (no backfeeding)
  - [[2012 Q72]] — EOP-LOCA-1 step 16 checks 2R4/2R41D/2R34/1R3/1R6A/1R20B for a LOCA outside containment; 2R34 (Mechanical Penetration 100') is the answer, 2R10A is for LOCA inside containment
  - [[2012 Q85]] — containment radiation >2000 R/hr adds 2 pts (containment barrier) escalating a SAE to a General Emergency → subsequent NRC notification within 60 min
  - [[2012 Q90]] — dropped fuel assembly with 2R5 (FHB area) stabilizing at 25 mR/hr (alarm 11 mR/hr, warning 7 mR/hr): auto swaps FHB ventilation to the Charcoal Filter and starts BOTH FHB Exhaust Fans; 2R5 does NOT lock out crane motion (only 2R32A on the crane does); bank parent of 2016 Q88
- Related JPMs: [[2016 JPM SRO-A3]], [[2018 JPM IP-k]], [[2022 JPM RO-A4]], [[2022 JPM IP-k]], [[2014 JPM IP-k]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2015 Scenario 1]], [[2015 Scenario 4]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]]
