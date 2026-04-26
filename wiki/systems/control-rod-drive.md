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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q67</div>
AB.ROD-0003 (Continuous Rod Motion) entry conditions: rods <span class="hi-exam">withdraw OR insert a MINIMUM of 3 steps</span> at steady state. <span class="hi-trap">Process noise can cause up to 2 steps of rod motion — this is normal and does NOT warrant AB.ROD-0003 entry.</span>
</div>

## Reactivity Management — Power Defect and Rod Worth

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q41</div>
Using the Curve Book (S2-RE-RA.ZZ-0016), for a power reduction from 100% to 80% at 8000 EFPH and 900 ppm boron: power defect adds <span class="hi-exam">(+) 396 pcm</span> to core reactivity. If boration absorbs (-) 216 pcm, Control Bank D must absorb the remaining <span class="hi-exam">(-) 180 pcm by inserting from 228 steps to approximately 186 steps</span> (IAW Figure 2C, Integral Rod Worth). <span class="hi-trap">Trap: requires reading multiple curves/tables — power defect from Figure 17A or Table 2-1, then rod worth from Figure 2C. Errors in any step give different (wrong) rod positions.</span>
</div>

## CRDM Vent Fans

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-a</div>
Loss of all CRD Vent Fans (alternate path JPM): 21 CRD Vent Fan damper fails causing <span class="hi-exam">AIR FLOW LO alarm and SEQUENCE COMPLETE bezel extinguished</span> on 2CC1 console. ARP S2.OP-AR.ZZ-0011 page 13 directs swapping to standby fan. After standby fan starts, both remaining running fans trip within seconds. With <span class="hi-exam">NO CRDM Vent Fans in operation, ARP step 3.2.D directs TRIP the Reactor</span>. Operating with less than two Rod Drive Vent Fans could degrade the Rod Drive Coils. <span class="hi-trap">Step 3.2.D was initially marked N/A when the standby started — it becomes applicable when all fans trip. The operator must re-evaluate and trip the reactor.</span>
</div>

## Mode 2 Entry and Rod Withdrawal

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q39</div>
Per S2.OP-IO.ZZ-0003 (Hot Standby To Minimum Load), <span class="hi-exam">MODE 2 entry is recorded in the Control Room Narrative Log when withdrawal of Control Bank "A" is imminent</span>. <span class="hi-trap">Mode 2 entry is NOT when the reactor is critical, NOT when Shutdown Bank A withdrawal begins (Shutdown Banks are withdrawn first but remain in Mode 3), and NOT when IR power stabilizes at 2E-3% (that is for ICRR data collection).</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.1.3 — Movable Control Assemblies]]** — Rod operability, alignment, insertion limits

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 IP-j</div>
Startup and parallel 11 RDMG set per S1.OP-SO.RCS-0001 Section 5.4 (same task as 2023 JPM IP-j using Section 4.4 — procedure was revised between exams). Key values: running set <span class="hi-exam">GENERATOR LINE VOLTS 260V (247V-273V), GENERATOR LINE AMPS ~80 DC AMPS</span>. VOLTAGE ADJUST range check: <span class="hi-exam">~220V (LOW) to ~300V (HIGH)</span>. DMM readings at back of installed voltmeter are <span class="hi-exam">approximately half</span> of meter face readings (~130V). Must adjust incoming set voltage <span class="hi-exam">0-2.5V higher than running set</span> on DMM before paralleling.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Rx Vessel & Internals]], [[Excore NIs]]
- Related procedures: [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.ROD-0002 — Dropped Rod]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S1.OP-SO.RCS-0001 — Rod Control System Operation]], [[OP-AP-300-1001 — PWR Control Rod Movement Requirements]], [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related scenarios: [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam questions: [[2018 Q30]], [[2018 Q39]], [[2018 Q41]], [[2019 Q3]], [[2019 Q29]], [[2019 Q49]], [[2019 Q67]], [[2020 Q19]], [[2020 Q20]], [[2020 Q56]], [[2020 Q68]], [[2023 Q55 — Urgent Failure / Rod Control Gripper Coils|2023 Q55]], [[2022 Q56]], [[2022 Q92]]
- Related JPMs: [[2019 JPM Sim-a]], [[2019 JPM IP-j]], [[2023 JPM Sim-g]], [[2023 JPM IP-j]], [[2022 JPM Sim-a]], [[2020 JPM RO-A1]], [[2020 JPM SRO-A1]], [[2020 JPM Sim-c]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
