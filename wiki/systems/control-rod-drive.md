---
title: Control Rod Drive
category: systems
status: draft
aliases:
  - CRDM
  - rod control
---

# Control Rod Drive

## Function

The Control Rod Drive Mechanism (CRDM) provides the means for inserting, withdrawing, and holding control rod assemblies. Rod motion is controlled by energizing and de-energizing the lift coil, moveable gripper coil, and stationary gripper coil in a programmed sequence. Rod control interlocks (rod stops) prevent unsafe rod withdrawal conditions. (UFSAR 7.7)

## Rod Control Interlocks (Rod Stops)

These interlocks are duplicated here from [[RPS/SSPS]] (the master reference) for study convenience.

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| C-1 | 1/2 intermediate range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-2 | 1/4 power range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-3 | 2/4 OT Delta-T above setpoint | Blocks rod withdrawal; actuates turbine runback | UFSAR T7.2-2 |
| C-4 | 2/4 OP Delta-T above setpoint | Blocks rod withdrawal; starts turbine runback | UFSAR T7.2-2 |
| C-5 | 1/1 turbine pressure below setpoint | Blocks automatic rod withdrawal | UFSAR T7.2-2 |

Note: Automatic rod withdrawal is disabled at Salem. (UFSAR T7.2-2)

## Rod Bank Selector Switch Speeds

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q30</div>
Rod speeds by ROD BANK SELECTOR SWITCH position:<br>
&bull; <span class="hi-exam">AUTO: 8 SPM (minimum) to 72 SPM (maximum)</span> — speed varies linearly with temperature error<br>
&bull; <span class="hi-exam">SBA, SBB, SBC, SBD (Shutdown Banks): 64 SPM</span><br>
&bull; <span class="hi-exam">CBA, CBB, CBC, CBD (Control Banks): 48 SPM</span><br>
<span class="hi-trap">Trap: 72 SPM is the maximum speed in AUTO only — Control Bank positions (CBA) move at 48 SPM, NOT 72. Shutdown Bank positions (SBA) move at 64 SPM, NOT 48.</span>
</div>

## Automatic Rod Control Speed

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q29</div>
With rods in AUTO, control rod speed varies based on total temperature error magnitude:<br>
• <span class="hi-exam">1.5 °F to 3 °F error: rods move at 8 SPM (minimum)</span><br>
• <span class="hi-exam">3 °F to 5 °F error: rods move from 8 SPM to 72 SPM (linearly)</span> — rate of increase is <span class="hi-exam">32 SPM/°F</span><br>
• <span class="hi-exam">Above 5 °F error: rods move at 72 SPM (maximum)</span><br>
Calculation: with a temperature error of 4 °F, rod speed = 8 + (32 x (4 - 3)) = <span class="hi-exam">40 SPM</span>. <span class="hi-trap">Trap: 72 SPM is the maximum (at 5 °F), and 8 SPM is the minimum (at 3 °F). The speed is LINEAR between these points, not a step function.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q28</div>
Confirms the AUTO rod speed program: at a <span class="hi-exam">4.0°F Tave-Tref deviation, initial AUTO rod speed = 8 SPM (@3.0°F) + 32 SPM (ramped from 3.0 to 4.0°F) = 40 SPM</span> (16 SPM per 1/2°F). AUTO speed is determined by Auctioneered High Tavg vs Tref (PT-505, Turbine steamline inlet pressure). <span class="hi-trap">Distractor traps: 56 SPM uses an incorrect 1.5–5.0°F linear ramp; 48 SPM is the normal MANUAL rod control speed (Control Bank). The Power Mismatch circuit has cycled through &gt;5 time constants 10 minutes after the load reduction, so its effect on rod speed is zero.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q55</div>
<span class="hi-exam">Urgent Failure alarm prevents ALL rod motion in both Manual and Automatic.</span> When Urgent Failure is present, rods are held in position by the <span class="hi-exam">stationary gripper coil energized at a reduced current</span>. The moveable gripper coil is de-energized. Rods cannot be inserted even in Manual. (Ref: S2.OP-AR.ZZ-0012)
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-g</div>
Failed high Tavg channel (AB.ROD-0003): recognize unwarranted rod insertion, take rods to manual. Adjust rods to control <span class="hi-exam">Tavg within 1.5F of Tprogram</span>. Stabilize PZR level (Master Flow Controller to manual). Defeat <span class="hi-exam">BOTH Differential Temperature AND Average Temperature</span> deviation alarms on 2CC2. Select valid recorder channel (2, 3, or 4) for both parameters.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-j</div>
Rod Drive M-G Set paralleling (S1.OP-SO.RCS-0001): incoming set voltage adjusted <span class="hi-exam">0-2.5V higher</span> than running set via DMM (not installed voltmeter). Move <span class="hi-exam">single SYNCHRONIZE handle</span> from running to incoming set, place in ON — generator breaker auto-closes. Do NOT manually close generator breaker.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q56</div>
OHA E-8 (ROD INSERT LMT LO) alarms when rods are <span class="hi-exam">10 steps from the Rod Insertion Limit</span>. The COLR Rod Insertion Limit has <span class="hi-exam">NOT been exceeded</span> when E-8 alarms — it is a warning. Per the alarm response procedure, the crew initiates a <span class="hi-exam">normal boration per S2.OP-SO.CVC-0006 (Boron Concentration Control)</span> to restore rods to their normal band. <span class="hi-trap">Emergency boration (Rapid Borate) was previously required for OHA E-16 (ROD INSERT LO-LO) but this requirement has been removed from the OHA alarm procedures.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q92</div>
Misaligned rod response per AB.ROD-0001: with one rod misaligned <span class="hi-exam">>=12 steps from the group demand counter</span> and reactor power >85% RTP, per TS 3.1.3.1 action c.3.d: <span class="hi-exam">reduce power to <75% RTP</span>. The misaligned rod is aligned to the BANK position (not the other way around). <span class="hi-trap">You do NOT insert the bank to match the misaligned rod. If two or more rods are misaligned, the action is Hot Standby within 6 hours.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q19</div>
Dropped rod recovery (AB.ROD-0002): before withdrawing the dropped rod, <span class="hi-exam">reset the group step counter to zero</span> so it matches actual rod position and the rod is withdrawn to the proper height. For Control Bank D Group 1 rods, also <span class="hi-exam">reset the P/A converter to zero locally at the RPI-2 cabinet</span> — this ensures bank overlap is maintained. <span class="hi-trap">Group step counter does NOT input into the P/A converter; P/A input is from the Group 1 Data Logging card.</span> After P/A converter reset: OHAs E-8 (RIL LO) and E-16 (RIL LO-LO) WILL annunciate (expected alarm). OHA E-40 (ROD BANK URGENT FAILURE) annunciates after rod withdrawal begins.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q20</div>
Misaligned rods (AB.ROD-0001): <span class="hi-exam">more than one rod stuck/misaligned = place unit in Hot Standby</span>. Only one rod misaligned = reduce power to <span class="hi-exam">&lt; 75% RTP</span>. <span class="hi-trap">Do not confuse Hot Standby (>1 rod) with Hot Shutdown or power reduction (1 rod).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q56</div>
Rod Drive MG Set power supplies: <span class="hi-exam">11 MG set is powered from the 1E 460V bus; 12 MG set is powered from the 1G 460V bus</span>. Loss of 1E AND 1F 460V buses does NOT trip the reactor because <span class="hi-exam">one MG set (12, on 1G bus) is sufficient to maintain power to the Rod Control System</span>. <span class="hi-trap">Trap: 1E and 1F buses do NOT each power one MG set — both MG sets are NOT lost on loss of 1E + 1F.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q68</div>
Manual rod movement communication (OP-AP-300-1001 step 4.4.3): during non-transient conditions, the RO shall STATE the <span class="hi-exam">selected control rod bank initial position, target control rod position, and the direction of movement</span>. <span class="hi-trap">Minimum info is bank/target/direction — NOT T<sub>AVG</sub>, NOT NIS power, NOT number of steps.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A1</div>
SDM calculation with inoperable rod (SC.RE-ST.ZZ-0002 Att. 3): <span class="hi-exam">rod bank penalty (step 4.2.6) is based on the position of the rod BANK, not the individual misaligned rod</span>. With all banks at ARO (225 steps), penalty = 0 pcm even though rod 1D5 is at 214 steps. Step 4.1.5 = 0 untrippable rods (rod is trippable). Calculated SDM = <span class="hi-exam">-2398 pcm</span> vs acceptance of -1300 pcm — SAT. Time critical JPM (60-minute limit per TSAS 3.1.3.1 Action c.3).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A1</div>
SRO review of SDM calculation with two <span class="hi-exam">untrippable rods (1D4 and 1D2)</span>: key error was treating rods as dropped/misaligned rather than untrippable — different penalty section (4.2.4 vs 4.2.5, <span class="hi-exam">4330 pcm</span>) and different rod worth formula ("Trippable Rod Worth with Untrippable RCCA(s)" = <span class="hi-exam">-2327.8 pcm</span>). Correct SDM = <span class="hi-exam">-269.5 pcm (UNSAT)</span> — requires power reduction to ~19% RTP. Control Bank D at 200 steps (not ARO).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-c</div>
Rod control surveillance (S2.OP-ST.RCS-0001): insert Control Bank D <span class="hi-exam">15 steps</span>, verify each rod moved at least 10 steps on P-250, record SAT, restore to ARO. <span class="hi-exam">Alternate path: when rod bank selector switch placed in AUTO at Step 5.1.11.C, uncontrolled rod insertion occurs</span>. Rods continue inserting in both AUTO and MANUAL. Operator must recognize continuous insertion and <span class="hi-exam">manually trip the reactor</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-a</div>
Control rod operability surveillance (S2.OP-ST.RCS-0001 Rev. 22, Section 5.1) — Shutdown Bank testing. Per OP-AP-300-1001, prior to manual rod motion the operator states <span class="hi-exam">initial Shutdown Bank position, target rod position, and direction of movement</span> (peer-checked). For each shutdown bank: place Bank Selector Switch in SBA/SBB/SBC/SBD, verify GRP. SELECT "C" lights illuminated at the corresponding Power Cabinet pair (21AC/22AC for SBA, 21BD/22BD for SBB), <span class="hi-exam">maneuver the bank at least 10 steps</span>, verify rod movement on P-250, record SAT in Att 1, restore to pre-test (ARO) condition. <span class="hi-exam">Alternate path: with SBB inserted at least 10 steps, 21 SGFP trips. Per S2.OP-ST.RCS-0001 P&L 3.13, the operator must manually trip the reactor</span> — moving the Rod Bank Selector to MAN or AUTO under these conditions is incorrect.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q67</div>
AB.ROD-0003 (Continuous Rod Motion) entry conditions: rods <span class="hi-exam">withdraw OR insert a MINIMUM of 3 steps</span> at steady state. <span class="hi-trap">Process noise can cause up to 2 steps of rod motion — this is normal and does NOT warrant AB.ROD-0003 entry.</span>
</div>

## Reactivity Management — Power Defect and Rod Worth

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q41</div>
Using the Curve Book (S2-RE-RA.ZZ-0016), for a power reduction from 100% to 80% at 8000 EFPH and 900 ppm boron: power defect adds <span class="hi-exam">(+) 396 pcm</span> to core reactivity. If boration absorbs (-) 216 pcm, Control Bank D must absorb the remaining <span class="hi-exam">(-) 180 pcm by inserting from 228 steps to approximately 186 steps</span> (IAW Figure 2C, Integral Rod Worth). <span class="hi-trap">Trap: requires reading multiple curves/tables — power defect from Figure 17A or Table 2-1, then rod worth from Figure 2C. Errors in any step give different (wrong) rod positions.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q9</div>
<span class="hi-exam">Differential boron worth rises over core life</span>, so a rapid boration to compensate for a failure-to-scram inserts more negative reactivity at EOL (HIGHER differential boron worth) than at BOL. This governs the effectiveness of boration as a reactivity-management tool during an ATWS.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q11</div>
For a tube-leak shutdown with a Rx trip, boration for a <span class="hi-exam">single stuck rod is NOT performed in the EOP series (TRIP-2)</span> — it is directed in AB.SG-0001 (re-entered at Step 3.27 after exiting the TRIP series), Step 3.28, as a <span class="hi-exam">rapid boration of 35 minutes per stuck rod</span> to satisfy SDM for the initial cooldown to 500&deg;F.
</div>

## CRDM Vent Fans

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-a / 2019 Sim-a</div>
Loss of all CRD Vent Fans (alternate path JPM, tested both 2018 and 2019): 21 CRD Vent Fan damper fails causing <span class="hi-exam">AIR FLOW LO alarm and SEQUENCE COMPLETE bezel extinguished</span> on 2CC1 console. ARP S2.OP-AR.ZZ-0011 page 13 directs swapping to standby fan. After standby fan starts, both remaining running fans trip within seconds. With <span class="hi-exam">NO CRDM Vent Fans in operation, ARP step 3.2.D directs TRIP the Reactor</span>. Operating with less than two Rod Drive Vent Fans could degrade the Rod Drive Coils. CRD Vent Fan Outlet Temperature alarm points: <span class="hi-exam">21 T2602A/160F, 22 T2603A/160F, 23 T2604A/160F</span>. <span class="hi-trap">Step 3.2.D was initially marked N/A when the standby started — it becomes applicable when all fans trip. The operator must re-evaluate and trip the reactor. S2.OP-SO.CBV-0001 provides direction for starting/stopping CRDM Vent Fans but provides NO direction for a loss of all fans — the ARP is the governing procedure.</span>
</div>

## Mode 2 Entry and Rod Withdrawal

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q39</div>
Per S2.OP-IO.ZZ-0003 (Hot Standby To Minimum Load), <span class="hi-exam">MODE 2 entry is recorded in the Control Room Narrative Log when withdrawal of Control Bank "A" is imminent</span>. <span class="hi-trap">Mode 2 entry is NOT when the reactor is critical, NOT when Shutdown Bank A withdrawal begins (Shutdown Banks are withdrawn first but remain in Mode 3), and NOT when IR power stabilizes at 2E-3% (that is for ICRR data collection).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q69</div>
Per S2.OP-IO.ZZ-0003 Step 4.2.21.3, when withdrawal of Control Bank "A" is imminent, the crew shall: (1) <span class="hi-exam">RECORD time of Mode 2 entry in the Control Room Narrative Log</span>, (2) <span class="hi-exam">UPDATE WCM to Mode 2</span>, and (3) RECORD Date and Time of Control Banks withdrawal in Attachment 3, Technical Specifications Pre-Criticality Surveillance Data, Section A. <span class="hi-trap">Mode 2 entry is NOT keyed to Rx criticality, RTB closure, or Shutdown Bank withdrawal — it is specifically tied to imminent Control Bank A withdrawal.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.1.3 — Movable Control Assemblies]]** — Rod operability, alignment, insertion limits

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 IP-j</div>
Startup and parallel 11 RDMG set per S1.OP-SO.RCS-0001 Section 5.4 (same task as 2023 JPM IP-j using Section 4.4 — procedure was revised between exams). Key values: running set <span class="hi-exam">GENERATOR LINE VOLTS 260V (247V-273V), GENERATOR LINE AMPS ~80 DC AMPS</span>. VOLTAGE ADJUST range check: <span class="hi-exam">~220V (LOW) to ~300V (HIGH)</span>. DMM readings at back of installed voltmeter are <span class="hi-exam">approximately half</span> of meter face readings (~130V). Must adjust incoming set voltage <span class="hi-exam">0-2.5V higher than running set</span> on DMM before paralleling.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
22 RC Loop Tavg Channel fails high at 40% power causing rods to step in (automatic control sees Tavg higher than Tref). RO places rod control in Manual, stopping rod motion. OHA E-8 (Rod Insertion Lo) and E-16 (Rod Insertion Lo-Lo). CRS enters AB.ROD-0003. RO adjusts rods to maintain Tavg within <span class="hi-exam">1.5 deg</span> of program. After defeating failed channel and restoring rods to ARO, RO returns <span class="hi-exam">rod control to Auto</span>.
</div>

## Rod Control Cabinet Failure Modes

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q2</div>
Failures that cause a <span class="hi-exam">SINGLE control rod to drop fully into the core</span>: <span class="hi-exam">a blown fuse for a Stationary Gripper coil with NO demand for rod movement</span>. With no movement demand, the moveable gripper is de-energized — the stationary gripper alone supports the rod. Loss of stationary gripper power releases the rod, allowing it to drop. <span class="hi-trap">Trap matrix:<br>&bull; Blown fuse for a LIFT coil during demand for rod movement → moveable gripper still holds rod, rod just won't move (does NOT drop).<br>&bull; Loss of power to a single POWER CABINET during demand → affects MULTIPLE rods (stationary gripper coils on multiple rods), not a single rod.<br>&bull; Loss of power to a single LOGIC CABINET with NO demand for rod movement → no effect (logic cabinet failure during a movement cycle could drop multiple rods due to lost power to movable gripper and lift coils, but at no demand the stationary grippers continue to be powered).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q3</div>
With reactor trip breakers (RTBs) failing to open, the reactor is tripped from the control room by <span class="hi-exam">opening the RDMG sets power supply breakers from 1CC3</span>. This de-energizes the rod drive system and allows rods to drop. Because the trip signal originates from RDMG breaker open (not from the RTB output contacts), the <span class="hi-exam">Main Turbine does NOT receive an automatic trip signal — the crew must directly perform a manual turbine trip</span>. Other expected automatic responses still occur: main generator output breakers auto-open on the manual turbine trip, 4KV group buses auto-transfer on low voltage, and AFW pumps auto-start on SG lo-lo level after main turbine trip causes SG shrink.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 RO-A1-2</div>
SDM calculation per TSAS 3.1.3.1 Action c.3 with rod 105 declared INOPERABLE (trippable, at 214 steps; bank D at 227 steps). Att. 3 §4.1.5 = 0 untrippable rods, §4.1.6 = 1 inoperable rod. Final SDM = <span class="hi-exam">-2441 pcm</span> (acceptance criteria: more negative than -1300 pcm — SAT). The 4.2.6 rod-bank penalty is determined from the bank position (227 steps = ARO), not from the individual misaligned rod position (214 steps).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
<span class="hi-exam">Shutdown Bank rod 1S A3 drops</span> at 1x10<sup>-8</sup> Amps with Control Bank D at 130 steps. Symptom: OHA <span class="hi-exam">E-48 ROD BOTTOM</span>, rod-bottom light illuminated for SB rod 1S A3. Crew enters AB.ROD-0002, confirms rods in manual; RO reports the <span class="hi-exam">reactor is subcritical as a result of the dropped rod</span>; CRS directs RO to insert all control and shutdown bank rods, RO initiates rod insertion in manual.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q28</div>
<span class="hi-exam">OHA E-48 ROD BOTTOM clears during a startup when Control Bank A is withdrawn past 20 steps</span>. There are 3 Rod Bottom Bypass Bistable Modules (Control Banks B, C, and D only); each blocks ROD BOTTOM for its own bank below 35 steps. When all banks are on bottom the alarm is illuminated; with Control Bank A &gt;20 steps the alarm clears (B/C/D bypassed). Bypassing banks B/C/D until &gt;35 steps gives dropped-rod indication on any shutdown/control bank. See [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q76</div>
A dropped Shutdown Bank rod with the Rx exactly critical during low-power physics testing: per AB.ROD-0002, the CRS directs <span class="hi-exam">fully inserting all Control Bank and Shutdown Bank rods</span> (becoming subcritical) — a dropped-rod recovery is NOT done because <span class="hi-trap">withdrawing the recovered rod would constitute an approach to criticality</span> (only allowed via the startup procedure). See [[AB.ROD-0002 — Dropped Rod]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q88</div>
On a loss of Rod Position Indication (IRPIs dark), the <span class="hi-exam">affected rods are assumed fully withdrawn (reactivity unavailable)</span>. AB.ROD-0004 requires <span class="hi-exam">an additional 270 ppm boration per failed IRPI</span> if shutting down before the IRPI is operable (two failed Control Bank D IRPIs → 540 ppm); boration to Cold Shutdown SDM is NOT required for a shutdown to Hot Standby. See [[CVCS]], [[AB.ROD-0004 — Rod Position Indication Failure]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q94</div>
During a control-rod startup, when the predicted critical rod height differs from the ECC: <span class="hi-exam">if the difference is &lt;300 pcm (eightfold position), no action is required and the startup continues</span> (e.g., ECC 77 steps = 1079.4 pcm vs predicted 122 steps = 877.0 pcm → 202.4 pcm difference). See [[S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q28</div>
Effects of control rod motion on plant parameters: Salem normally operates with a <span class="hi-exam">negative AFD</span> (except very late in core life). As rods move OUT, more power is produced in the upper half of the core, so <span class="hi-exam">indicated AFD becomes LESS negative</span>. The <span class="hi-trap">OP/DT (OPDT) setpoint is NOT dependent on rod position</span>. QPTR is unaffected by symmetric bank motion (the power change is seen on all planes equally). <span class="hi-trap">Shutdown margin is NOT affected by rod position so long as the rods remain trippable.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-a</div>
Dropped-rod corrective actions per AB.ROD-0002: on a single dropped rod, <span class="hi-exam">place the Rod Bank Selector Switch in MAN</span> to defeat the automatic outward rod motion that would otherwise occur at <span class="hi-exam">T+1:30</span>, then maintain Tave within 1.5° of program. If <span class="hi-exam">more than one rod is verified dropped (step 2.1), manually TRIP the reactor</span> and GO TO EOP-TRIP-1 — a second dropped rod is recognized by a second rod bottom light, depressed power/flux in the region of the two rods, lowering Tavg/Terr, or OHA D-32 TAVE LO. See [[AB.ROD-0002 — Dropped Rod]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-g</div>
Reactor startup rod withdrawal to criticality (S2.OP-IO.ZZ-0003 Step 5.3.18.D): withdraw Control Banks A/B/C with ICRR hold points (CBA fully withdrawn, RIL position, CBB fully withdrawn, CBD at 50 steps or 8-fold position), monitoring NIS closely. <span class="hi-exam">Criticality is reached BEFORE Control Bank D is withdrawn the predicted 25 steps — stop the pull when criticality is identified.</span> Then establish an approximately <span class="hi-exam">0.25 dpm SUR (not to exceed 1.0 dpm)</span> with Control Bank D. <span class="hi-exam">Alternate path: when the Source Range High Flux Trip fails to block (Channel B), insert Control Bank D to drive SUR zero/negative before the reactor auto-trips at 1E5 cpm.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q44</div>
Control Grade Interlocks / rod stops that block outward rod motion: <span class="hi-exam">C-2 (1/4 PR NI &gt;103%) blocks ALL outward rod motion (auto AND manual)</span>. <span class="hi-trap">C-11 (ARO position) blocks only AUTO outward motion — ARO is a per-fuel-cycle number, not a physical stop in the core. C-3 actuates within 3% of the OT/&Delta;T Rx trip setpoint. P-2 (steam line inlet pressure &lt;15%) blocks only AUTO outward rod motion; manual rod motion still works.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q42</div>
During a continuous manual rod withdrawal at low power, the rod block (20% power-equivalent amps on 1/2 IR NI) <span class="hi-trap">is NOT credited by FSAR 15.2.2.1 and will not act quickly enough</span> — the event is terminated by the <span class="hi-exam">High Power Reactor Trip (low range), 25% on 2/4 PR NIs, basis DNB protection</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q52</div>
During a startup with the Main Generator rolling unloaded (not yet online), <span class="hi-exam">rod control is NOT placed in AUTO until &gt;P-2 (15% Turbine power)</span>. With reactor power stable at 18% but turbine not loaded, rods remain in MANUAL — so with no operator action the rods do NOT step in or out. (Raising MS Dump Pressure setpoint shuts the dumps, lowering steam flow / raising temperature → Rx power lowers to &lt;18%.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q76</div>
Diagnosing an unwanted RCS boration from rod/temperature symptoms: with rods in AUTO, an inadvertent boration (e.g., 1CV185 Makeup to Charging Pump Suction Valve opening) initially lowers RCS temp/pressure, so rods step OUT to restore Tavg and PZR spray demand recovers. <span class="hi-exam">Rods stepping out with Tavg below program and rising, plus PZR spray demand lowering then rising, points to a boration — enter AB.ROD-0003, place rods in MANUAL, terminate the boration.</span> A xenon transient large enough to move rods would show a large AFD change (normal AFD rules it out); a PRNI fail-low gives only a short outward step before the 109% Overpower Rod Block on 1/4 PRNI>109% blocks withdrawal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q77</div>
A dropped rod (OHA E-48 ROD BOTTOM) is treated by AB.ROD-0002. <span class="hi-exam">On Unit 2 a rod is considered fully inserted if it indicates ≤10 steps withdrawn (per NFE 96-098, April 13 1989, cited in OP-AA-101-111-1003).</span> AB.ROD-0002 step 3.23 asks if the affected rod is fully inserted; if BOTH IRPI and Plant Computer indicate >10 steps (e.g., 18 steps), the procedure directs GO TO AB.ROD-0001 because the Group Step Counter manipulations for maintaining proper rod group stepping logic differ significantly between a partially inserted and a fully inserted rod. <span class="hi">The Rod Bottom E-48 alarm comes in at 20 steps withdrawn with Group Demand >35 steps.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Rx Vessel & Internals]], [[Excore NIs]], [[CVCS]], [[Main Turbine]]
- Related procedures: [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.ROD-0002 — Dropped Rod]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S1.OP-SO.RCS-0001 — Rod Control System Operation]], [[OP-AP-300-1001 — PWR Control Rod Movement Requirements]], [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[S2.OP-SO.CVC-0008 — Rapid Boration]], [[curve book]]
- Related scenarios: [[2016 Scenario 3]], [[2018 Scenario 2]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2015 Scenario 1]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam questions: [[2014 Q1]], [[2014 Q28]], [[2015 Q9]], [[2015 Q11]], [[2016 Q2]], [[2016 Q3]], [[2016 Q67]], [[2016 Q69]], [[2016 Q77]], [[2018 Q30]], [[2018 Q39]], [[2018 Q41]], [[2019 Q3]], [[2019 Q29]], [[2019 Q49]], [[2019 Q67]], [[2020 Q19]], [[2020 Q20]], [[2020 Q56]], [[2020 Q68]], [[2023 Q55 — Urgent Failure / Rod Control Gripper Coils|2023 Q55]], [[2022 Q56]], [[2022 Q92]], [[2015 Q28]], [[2015 Q76]], [[2015 Q88]], [[2015 Q94]], [[2014 Q17]], [[2014 Q42]], [[2014 Q44]], [[2014 Q52]], [[2014 Q76]], [[2014 Q77]], [[2012 Q1]], [[2012 Q9]], [[2012 Q10]], [[2012 Q13]], [[2012 Q28]]
- Related JPMs: [[2018 JPM Sim-a]], [[2019 JPM Sim-a]], [[2019 JPM IP-j]], [[2023 JPM Sim-g]], [[2023 JPM IP-j]], [[2022 JPM Sim-a]], [[2020 JPM RO-A1]], [[2020 JPM SRO-A1]], [[2020 JPM Sim-c]], [[2016 JPM RO-A1-2]], [[2016 JPM SRO-A2]], [[2016 JPM Sim-a]], [[2015 JPM Sim-a]], [[2014 JPM Sim-g]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2012 NRC Written Exam]]
