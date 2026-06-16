---
title: Main Steam
category: systems
status: draft
aliases:
  - main steam system
  - MSIVs
  - steam dump
  - atmospheric dump valves
---

# Main Steam

## Function

Transports steam from the four steam generators to the turbine-generator and other auxiliary steam loads. Provides overpressure protection via main steam safety valves and atmospheric dump valves. (UFSAR 10.3)

## Main Steam Isolation Valves (MSIVs)

- One per steam line (4 total)
- Close on: high steam flow AND (Lo-Lo Tavg OR low steam pressure); Hi-Hi containment pressure (2/4); manual (1/1 per line)
- Designed to close against full steam flow
- <span class="hi">Flow restrictors (venturi type) in each steam line limit blowdown rate in the event of a steamline break</span>
(UFSAR 10.3.2.2, T7.2-1)

## Main Steam Safety Valves (MSSVs)

5 valves per loop, 4 loops = 20 MSSVs total.

| Valve (per loop) | Lift Setting (±3%) | Orifice Size |
|-------------------|-------------------|--------------|
| xMS11 | 1125 psig | 16.0 in² |
| xMS12 | 1120 psig | 16.0 in² |
| xMS13 | 1110 psig | 16.0 in² |
| xMS14 | 1100 psig | 16.0 in² |
| xMS15 | 1070 psig | 16.0 in² |

(UFSAR 10.3, TS Table 3.7-4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q42</div>
MSSVs will start to open when main steam line pressure FIRST exceeds <span class="hi-exam"><span class="val-trip">1070 psig</span></span> (the lowest lift setting, xMS15). <span class="hi-trap">Trap: 1100 psig (xMS14) is the second lowest — the lowest is 1070 psig.</span> LCO 3.7.1.1 purpose: limit secondary system pressure to within <span class="hi-exam">110% of design pressure AND protect against overpressurization of the Reactor Coolant Pressure boundary</span>. <span class="hi-trap">It is NOT only for secondary overpressure protection — the MSSVs also protect the RCS pressure boundary.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q26</div>
Each SG has <span class="hi-exam">five</span> safety valves with lift setpoints of <span class="hi-exam"><span class="val-trip">1070, 1100, 1110, 1120, 1125 psig</span></span> (confirms the xMS11–xMS15 table above). Count valves whose setpoint is at or below the SG pressure: at <span class="hi-exam">1115 psig</span>, the 1070, 1100, and 1110 psig valves are open = <span class="hi-exam">3 safety valves</span>. <span class="hi-trap">Trap: the 1120 and 1125 psig valves are above 1115 psig and stay shut. Only the affected SG (the one at 1115 psig) is considered — a MSLI isolates the other SGs.</span>
</div>

## Atmospheric Relief Valves (MS10s)

- 4 valves total (one per SG: 21MS10 through 24MS10)
- Design capacity: <span class="hi">10% of rated steam flow total (all 4 valves combined)</span>, <span class="hi">2.5% rated steam flow per individual valve</span>
- Total flow at no-load steam pressure: 390147 lb/hr at 1005 psig
- Controllable from the control room; backup nitrogen bottle racks for loss of control air

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q43</div>
Each MS10 (SG Atmospheric Relief Valve) has a design capacity of <span class="hi-exam">2.5% rated steam flow</span> (total for all 4 valves is <span class="hi-exam">10% rated steam flow at no-load steam pressure — 390147 lb/hr at 1005 psig</span>). <span class="hi-trap">Common trap: 10% is the total design capacity for all 4 valves, not the capacity of a single valve.</span> Per AB.STM-0001, if an MS10 fails open and MSLI does not isolate the leak, a manual SI is required.
</div>

## Steam Dump System

See [[Steam Dumps]] for condenser steam dump valve operation, interlocks (C-9, P-12), and cooldown mode.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q12</div>
MSLI actuation setpoints: High steam flow (<span class="val-trip">>40%</span>) coincident with either <span class="hi-exam">Low-Low Tavg (<span class="val-trip">≤543°F</span> on 2/4 loops) OR Low SG Pressure (<span class="val-trip"><600 psig</span>)</span>. Also actuates on Containment Pressure <span class="val-trip">>15 psig</span>. <span class="hi-trap">SG Pressure differential >100 psig between one SG and the others actuates SI only (not MSLI) — different signals.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.1 MSSVs, TS 3.7.1.5 MSIVs

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
MS10 atmospheric dump valves during EOP-LOPA-1 (Loss of All AC Power): on loss of all control air, CA330s fail closed isolating air to containment. MS10s remain operable from the control room via <span class="hi-exam">DC battery power for controls and nitrogen bottle racks (4 bottles >=2000 psig per MS10) for the air operator</span>. Bottle rack capacity: <span class="hi-exam">minimum 72 hours</span> of MS10 operation. Maximum cooldown rate per EOP-LOPA-1 step 17.2 is <span class="hi-exam">100F/hr</span>. <span class="hi-trap">50F/hr is the cooldown rate for EOP-TRIP-6 (Nat Circ without RVLIS above 500F), NOT EOP-LOPA-1.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Main turbine fails to auto trip AND fails to manually trip following reactor trip from AB.RCP-0001. MSLI fails to auto actuate. <span class="hi-exam">CT#1 (CT-12): crew manually actuates MSLI using Fast Close pushbuttons on 2CC2</span> (or Loops 21-24 MSLI on 2CC1 Safeguards bezels). Failure to close MSIVs causes uncontrolled depressurization of all SGs, excessive RCS cooldown, and challenges to Integrity and Subcriticality CSFs. MS10 atmospheric dump valves used in EOP-FRHS-1 to depressurize selected SG to < <span class="hi-exam">575 psig</span> for condensate feed recovery.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-g</div>
EOP-SGTR-1 RCS cooldown with steam dumps unavailable (permissive light NOT illuminated on 2RP4): Step 10 directs cooldown using <span class="hi-exam">MS10 atmospheric relief valves on intact SGs (21, 22, 23)</span>. Table B determines target temperature based on ruptured SG pressure — <span class="hi-exam">1045 psi → 503°F target</span>. Lower MS10 setpoints on intact SGs to fully open for maximum-rate cooldown. When hottest CET reaches 503°F, stop cooldown by matching MS10 setpoints to current SG pressures. Do NOT dump steam from the ruptured 24 SG.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q15</div>
MS10 setpoint adjustment during SG tube leak: IAW AB.SG-0001 Step 3.31, the affected MS10 setpoint is lowered to <span class="hi-exam"><span class="val-alarm">1045 psig</span></span>. Button <span class="hi-exam">A</span> on the MS10 controller raises the setpoint. <span class="hi-trap">Trap: 1070 psig is the MSSV (MS15) setpoint, not the AB.SG-0001 MS10 adjustment. Button B raises the manual output to open the valve more — it does NOT change the setpoint.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q16</div>
Main Steam warmup (S2.OP-SO.MS-0001): <span class="hi-exam">MS7 drain valves are opened BEFORE MSIVs (MS167)</span> to prevent water hammer from pressurized steam forcing residual water in the piping. MSIVs are opened when less than a MAXIMUM of <span class="hi-exam">50 psid</span> across each valve. <span class="hi-trap">Trap: 15 psig is used for other MS Header pressure steps in SO.MS-0001, not the MSIV opening delta-P criterion.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
During EOP-SGTR-1 for 24 SG tube rupture: PO isolates steam from 24 SG by closing <span class="hi-exam">24MS10 (set at 1045 psig), 24MS167, 24MS18, 24MS7, 24GB4</span>. RCS cooldown initiated using steam dumps at 25% demand in MS Pressure Control or <span class="hi-exam">intact MS10s</span> (may have initiated MSLI during TRIP-2 based on uncontrolled RCS temperatures). CT#2: stop cooldown when hottest CETs < 503 F target.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
21MS167 drifts from full open position at 40% power. OHA G-34 (21-24 MS167 VALVES NOT FULL OPEN). PO reports CRT and board indication. Recovery: <span class="hi-exam">depress open pushbutton to re-open 21MS167</span> per ARP S2.OP-AR.ZZ-0007.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q16</div>
Steam line rupture upstream of 24MS167 with reactor tripped, MSLI performed, and feed isolated to 24 SG: as the <span class="hi-exam">faulted SG pressure lowers due to the steam break, break flow lowers</span>, and the <span class="hi-exam">RCS cooldown rate lowers</span> as a result. <span class="hi-trap">A static break does NOT pass the same lbm of steam flow during the entire event — break flow is a function of upstream SG pressure. Initiating AFW to the ruptured SG is only directed in EOP-LOSC-2 if ALL SGs are faulted, not in this single-line-break scenario.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q49</div>
Small (0.1%) steam leak from a single SG with reactor at <span class="hi-exam">1×10⁻⁸ Amps (exactly critical, below POAH)</span>: positive reactivity from the cooldown causes <span class="hi-exam">Rx power to rise until it stabilizes after reaching the Point Of Adding Heat (POAH)</span>. <span class="hi-exam">Below POAH there is NO temperature-coefficient feedback</span> — power simply rises with the steam-induced cooldown. Once power reaches POAH, the negative MTC adds enough negative reactivity to <span class="hi-exam">offset the positive reactivity from the steam leak</span> and power stabilizes. <span class="hi-trap">No reactor trip occurs — both OT/DT and Power Range high-flux (low setpoint) trips are plausible distractors but neither actuates because power stabilizes well below their setpoints.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q12</div>
Initial Tavg response (before automatic protective actions) — large steam line break vs large feed line break: a <span class="hi-exam">steam line break draws MORE steam from the SG → Tcold lowers → Tavg LOWERS</span>; a <span class="hi-exam">feed line break sends LESS cold feed into the SG → Tcold rises → Tavg RISES</span>. <span class="hi-trap">A main feedwater line break depressurizes the SG similarly to a steam line break, so diverse/alternate indications are needed to discern the actual SG condition.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
21 SG steam leak inside containment escalates to a rupture on a manual reactor trip. <span class="hi-exam">Both auto MSLI signals (RP0279A/B) and manual MSLI fail to close any of the four MSIVs</span> (21-24MS167 fail open). MSLI failure leaves the steam leak unisolated → CRS directs manual SI per AB.STM CAS / TRIP-1 Step 11. Local operators are dispatched to <span class="hi-exam">place valves from Table D in safeguards position</span> (locally close MSIVs). All SGs depressurize uncontrollably → EOP-LOSC-1 → EOP-LOSC-2. Local operators successfully shut <span class="hi-exam">23MS167</span> later in the event; pressure rise in 23 SG drives transition back to LOSC-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q27</div>
During a LOCA, <span class="hi-exam">Main Steamline Isolation occurs at 15 psig</span> containment pressure. It is the only automatic action that newly actuates as containment pressure rises from 12 to 18 psig — Phase A, Feedwater Isolation, and Containment Ventilation isolation already occurred on the earlier SI signal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q51</div>
Per AB.STM-0001 (Excessive Steam Flow), uncontrollably rising steam flow with no apparent cause drives reactor power up at <span class="hi-exam">the same rate as the steam flow</span>; the Continuous Action Summary (Step 1.1) directs the crew to <span class="hi-exam">trip the reactor, confirm the trip, then initiate MSLI</span> to determine if SI is required. See [[AB.STM-0001 — Excessive Steam Flow]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-h</div>
The <span class="hi-exam">MS10 atmospheric steam dump valves</span> provide the heat removal path during a forced flow / natural circulation cooldown when RHR is lost (AB.RHR-0001 Attachment 10): with SGs fed to wide-range level &gt;77%, <span class="hi-exam">operate the appropriate MS10s to maintain Core Exit Thermocouples stable or lowering</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q51</div>
All Main Steam Dumps failing full open at 20% power generates an automatic Main Steamline Isolation: dumps pass ~52% steam flow vs the <span class="hi-exam">Hi Steam Flow setpoint of 40% in the 0–20% power band</span>, coincident with <span class="hi-exam">Lo Tavg (&lt;<span class="val-trip">543°F</span>) or Lo Steam Pressure (&lt;<span class="val-trip">600 psig</span>)</span> as Tavg rapidly drops — the MSI signal is generated before the dumps turn off at 543°F.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q52</div>
With steam dumps in MS Pressure control (AUTO) during a startup at 18% with the generator rolling unloaded, <span class="hi-exam">raising the MS Dump Pressure setpoint 5 psig causes the dumps to SHUT</span> to raise header pressure to setpoint → lower steam flow, higher Tavg → <span class="hi-exam">Rx power lowers (&lt;18%)</span>. Rods stay in MANUAL (auto rod control not enabled until &gt;P-2 / 15% turbine power).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q55</div>
A spurious MSLI closes the MSIVs AND the <span class="hi-exam">11-14MS18 (MS STOP BYP) valves</span>, removing the main-steam supply to the operating SGFP (which had been placed on main steam prior to 5% power). The SGFP coasts down — it does not trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q65</div>
A <span class="hi-exam">Main Steamline rupture in containment with failure of MSLI</span> causes ALL SGs to blow down and containment pressure to rise above <span class="val-trip">15 psig</span>, generating the Phase B containment isolation that isolates ALL containment penetrations not supporting ECCS. <span class="hi-trap">Phase A isolation occurs at <span class="val-trip">4 psig</span> (non-essential penetrations); Phase B isolates the remaining non-ECCS penetrations.</span>
</div>

## Connections

- Related systems: [[Steam Dumps]], [[Feed & Condensate]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOPA-1 — Loss of All AC Power]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related procedures: [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.STM-0001 — Excessive Steam Flow]], [[S2.OP-SO.MS-0001 — Main Steam Warmup]]
- Related exam questions: [[2015 Q12]], [[2015 Q25]], [[2015 Q26]], [[2016 Q16]], [[2016 Q24]], [[2016 Q49]], [[2016 Q50]], [[2016 Q83]], [[2016 Q85]], [[2016 Q90]], [[2018 Q15]], [[2018 Q16]], [[2019 Q42]], [[2019 Q48]], [[2020 Q43]], [[2022 Q12]], [[2022 Q77]], [[2015 Q27]], [[2015 Q51]], [[2014 Q15]], [[2014 Q22]], [[2014 Q51]], [[2014 Q52]], [[2014 Q55]], [[2014 Q65]], [[2014 Q91]], [[2012 Q16]], [[2012 Q19]], [[2012 Q25]]
- Related JPMs: [[2023 JPM Sim-e]], [[2020 JPM Sim-g]], [[2015 JPM Sim-h]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2016 Scenario 3]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2015 Scenario 4]], [[2014 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
