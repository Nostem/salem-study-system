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

## Function & Design Basis

The Main Steam System is designed to convey saturated steam from the four steam generators to the high-pressure turbine, the steam generator feedpump turbines, the auxiliary feedpump turbine, the moisture separator-reheaters, the gland sealing steam controllers, and the No. 15 feedwater heater (UFSAR §10.3.1). Provision is made to dump up to <span class="hi">40 percent of full load steam flow</span> directly to the condenser (turbine bypass) to aid the reactor in accommodating electric generator load rejections without a reactor trip (UFSAR §10.3.1). The system also provides overpressure protection via the main steam safety valves and atmospheric relief (MS10) valves.

System steam conditions are approximately <span class="hi">3900000 pounds per hour</span> at a density based on <span class="hi">750 psig (nominal) 513°F</span> steam used for design of both units; the steam reaches the turbine throttle valves with less than <span class="hi">40 psi</span> pressure drop (UFSAR §10.3.2.1, §10.1). At the steam generator exit nozzle, Unit 1 steam is <span class="hi">814 psig at 522°F</span> and Unit 2 is <span class="hi">885 psig at 532°F</span> (UFSAR §10.3.2.1).

The main steam piping from the steam generators through the MSIVs is classified <span class="hi">Seismic Category I</span>; beyond the MSIVs the piping is designed to conventional standards (UFSAR §10.3.1). Main steam piping inside containment has been analyzed for the effects of a guillotine-type pipe rupture, with restraints provided to ensure such a rupture will not compromise containment integrity (UFSAR §10.3.1). Pressure-retaining components use ASME Boiler and Pressure Vessel Code Section VIII for vessels; main steam safety valves are ASME Section III Class A; the main steam relief valves (MSIO/PORVs) and MSIVs are ASME Section III Class II, Class I for materials, inspections, fabrication, and quality control (UFSAR §10.3.1).

## Key Components

- **Main steam piping** — four lines convey steam from the steam generators, through the containment wall penetrations, to an anchored mixing bottle in the yard. Piping is <span class="hi">30 inches OD</span> within containment, <span class="hi">32 inches OD</span> within and inside the penetrations (except <span class="hi">34 inches OD</span> from the safety-valve headers), and <span class="hi">32 inches OD</span> from the MSIVs to the mixing bottle; the mixing bottle has a <span class="hi">43-inch OD</span> (UFSAR §10.3.2.1). From the mixing bottle, two parallel <span class="hi">40-inch OD</span> pipes carry steam to the turbine; a <span class="hi">24-inch OD</span> equalizing pipe interconnects them upstream of their bifurcations (UFSAR §10.3.2.1).
- **Main Steam Isolation Valves (MSIVs, xMS167)** — one per main steam header at each SG outlet, four total, located outside containment downstream of the safety-valve manifold. <span class="hi">32 x 24 x 32-inch Hopkinson parallel slide gate valves with double discs</span>, operated by an integral steam-driven piston and cylinder (UFSAR §10.3.2.2). See `## Main Steam Isolation Valves (MSIVs)` below.
- **Flow restrictors (venturi type)** — one dual-purpose venturi restrictor per steam line, located inside containment approximately <span class="hi">24 pipe diameters downstream of each steam generator</span> in vertical pipe sections (UFSAR §10.3.2.3, §10.3.3). Each SG additionally has an integral flow-restricting device in the steam nozzle with a flow area of <span class="hi">1.4 ft²</span> (UFSAR §10.3.2.3). See `### Flow Restrictors` below.
- **Main Steam Safety Valves (MSSVs, xMS11–xMS15)** — five self-actuated safety valves per main steam line (20 total), set at <span class="val-trip">1070, 1100, 1110, 1120, 1125 psig</span>, with total relief capacity of <span class="hi">100 percent of full load flow</span>, located in the penetration area and vented to atmosphere through umbrella-type vents (UFSAR §10.3.3.3, §10.4.4.1). See `## Main Steam Safety Valves (MSSVs)`.
- **Main Steam Relief Valves (MSIO / MS10 PORVs, xMS10)** — one power-operated main steam relief valve on each main steam line upstream of the MSIVs; total relief capacity for the four valves equals <span class="hi">10 percent of full load flow</span>, with a remotely variable pressure setpoint, used to bleed off reactor decay heat during cooldown (UFSAR §10.4.4.1). See `## Atmospheric Relief Valves (MS10s)`.
- **MSIV bypass valves, drain stop valves (MS7), strainer/orifice assemblies, and startup drain valves** — a pneumatically-operated bypass valve around each MSIV, plus steam traps, strainer/orifice assemblies, and power- and manually-operated startup drain valves at appropriate locations to ensure proper warmup of the Main Steam System and to prevent condensate collection in operation and freeze-up during outages (UFSAR §10.3.2.1).

## Main Steam Isolation Valves (MSIVs)

- One per steam line (4 total)
- Close on: high steam flow AND (Lo-Lo Tavg OR low steam pressure); Hi-Hi containment pressure (2/4); manual (1/1 per line)
- Designed to close against full steam flow
- <span class="hi">Flow restrictors (venturi type) in each steam line limit blowdown rate in the event of a steamline break</span>
(UFSAR 10.3.2.2, T7.2-1)

The MSIVs are <span class="hi">32 x 24 x 32-inch Hopkinson parallel slide gate valves with double discs</span>, installed in each main steam header at the SG outlet, located outside containment downstream of the safety-valve manifold (UFSAR §10.3.2.2). Each valve is operated by an integral piston and cylinder using steam within the valve and piping as the power medium: the piston is held at the lower end of its cylinder (valve open) by steam applied to the upper side of the piston, and has a small orifice to permit pressure equalization in the open position (UFSAR §10.3.2.2). A vent line from the upper end of the cylinder branches to <span class="hi">two diaphragm-operated dump (vent) valves connected in parallel</span> for redundant control (UFSAR §10.3.2.2).

Upon receipt of a closure signal, the vent valves open and release steam from the upper side of the main valve piston, closing the valve; stem travel is damped by an integral <span class="hi">hydraulic cylinder and piston (snubber)</span> incorporating an electric motor-operated hydraulic power unit that permits remote manual operation at conventional speed (UFSAR §10.3.2.2). A motor-operated <span class="hi">three-way valve</span> in the vent line is normally in the mid-position, permitting venting through either vent valve; it can be positioned to isolate one dump valve and its controls without affecting the other (UFSAR §10.3.2.2). A detent mechanism maintains the valve in the open or closed position. The MSIVs can be operated from the Control Room and may be partially closed by remote-manual (electro-hydraulic) control for testing operability at any steam flow or pressure (UFSAR §10.3.2.2).

The MSIV vent valves are <span class="hi">normally closed, air-to-close, solenoid-actuated diaphragm valves</span> with solenoids normally de-energized; a steam line isolation signal energizes the solenoid, which exhausts the vent-valve diaphragm to open the vent valve, relieving steam from the MSIV upper cylinder and closing the MSIV (UFSAR §10.3.2.2). Single-failure design features: each cylinder may be exhausted through either of two redundant parallel vent valves; the vent-valve solenoids are powered by redundant vital buses; the air supply is fed from redundant air headers; and the vent valves are actuated from separate protection-system logic trains — so a failure of an air supply, logic train, power supply, or vent valve will not prohibit isolation by the redundant equipment (UFSAR §10.3.2.2). If a vent fails to close the MSIV, the hydraulic operator may be used to close the valve (UFSAR §10.3.2.2).

**MSIV closure timing & low-pressure behavior:** The MSIVs close automatically on a steam line isolation (MSI) signal. If the closure time during TS surveillance testing (between <span class="hi">800 psig and 1000 psig</span> SG pressure) is <span class="val-trip">5.0 seconds or less</span> and the ESF response time for the MSI signal (Table 3.3-5) is <span class="val-trip">5.5 seconds or less</span>, then MSI is assured to occur within <span class="hi">12 seconds</span> under accident conditions where SG pressure may be lower (UFSAR §10.3.2.2; see also [[TS 3/4.7 — Plant Systems]]). The 5.0-second surveillance time consists of a <span class="hi">1.5 second timer delay and a 3.5 second mechanical stroke time</span> (UFSAR §10.3.2.2). Fast closure of the MSIVs is assured at a minimum steam pressure of <span class="hi">170 psia</span>; the MSIVs will still close via the steam-assist function between <span class="hi">118–170 psia</span> with slightly greater closure times; for steam line ruptures with less than <span class="hi">118 psia</span> the event does not require MSIV closure to satisfy design-basis requirements (DNBR remains above limit, peak containment pressure remains below <span class="hi">47 psig</span>) (UFSAR §10.3.2.2). Vendor full-scale testing demonstrated full closure under full differential pressure occasioned by a main steam line rupture immediately downstream of the valve; with the hydraulic unit uncoupled, closure times using nitrogen at 400 psig and 360 psig were <span class="hi">0.94 and 1.03 seconds</span> respectively (UFSAR §10.3.3.5). Per UFSAR §10.3.4 the MSIVs (MS167) and automatic drain stop valves (MS7) are tested periodically per the Technical Specifications.

**Exam & operating coverage:**

### MSIV Actuation & Isolation Signals

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
<span class="hi-exam">The 24MS167 Main Steamline Isolation Valve receives a SHUT signal from the Hi-Hi containment pressure (15 psig) MSLI signal</span> on a LOCA — so a 24MS167 indicating OPEN after such an event means it failed to reposition. See [[ESF & Design]], [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q65</div>
A <span class="hi-exam">Main Steamline rupture in containment with failure of MSLI</span> causes ALL SGs to blow down and containment pressure to rise above <span class="val-trip">15 psig</span>, generating the Phase B containment isolation that isolates ALL containment penetrations not supporting ECCS. <span class="hi-trap">Phase A isolation occurs at <span class="val-trip">4 psig</span> (non-essential penetrations); Phase B isolates the remaining non-ECCS penetrations.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q27</div>
During a LOCA, <span class="hi-exam">Main Steamline Isolation occurs at 15 psig</span> containment pressure. It is the only automatic action that newly actuates as containment pressure rises from 12 to 18 psig — Phase A, Feedwater Isolation, and Containment Ventilation isolation already occurred on the earlier SI signal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q12</div>
MSLI actuation setpoints: High steam flow (<span class="val-trip">>40%</span>) coincident with either <span class="hi-exam">Low-Low Tavg (<span class="val-trip">≤543°F</span> on 2/4 loops) OR Low SG Pressure (<span class="val-trip"><600 psig</span>)</span>. Also actuates on Containment Pressure <span class="val-trip">>15 psig</span>. <span class="hi-trap">SG Pressure differential >100 psig between one SG and the others actuates SI only (not MSLI) — different signals.</span>
</div>

### MSIV Mechanics & Operations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q49</div>
11MS167 hydraulic stop valve (logic dwgs 239916/239917): the FAST/Emergency CLOSE signal acts like a Safeguards Train MSLI or High Steam Line Flow SI. <span class="hi-exam">SV-1 closes (had directed hydraulic pressure to the bottom of the piston); SV-3 opens to equalize hydraulic pressure on both sides of the operating piston</span> (hydraulic fluid acts as a buffer to prevent slamming); the <span class="hi-exam">solenoids for vent valves 11MS169 and 11MS171 open, venting air so those vent valves open and main steam pressure on the lower operating piston drives the disc closed</span>. The hydraulic pump immediately stops running. A FAST close issued after a NORMAL close is already in progress drives the valve closed via this Emergency Trip path.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q55</div>
A spurious MSLI closes the MSIVs AND the <span class="hi-exam">11-14MS18 (MS STOP BYP) valves</span>, removing the main-steam supply to the operating SGFP (which had been placed on main steam prior to 5% power). The SGFP coasts down — it does not trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q16</div>
Main Steam warmup (S2.OP-SO.MS-0001): <span class="hi-exam">MS7 drain valves are opened BEFORE MSIVs (MS167)</span> to prevent water hammer from pressurized steam forcing residual water in the piping. MSIVs are opened when less than a MAXIMUM of <span class="hi-exam">50 psid</span> across each valve. <span class="hi-trap">Trap: 15 psig is used for other MS Header pressure steps in SO.MS-0001, not the MSIV opening delta-P criterion.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-e</div>
A Main Steam Line Isolation (MSLI) is performed by depressing all 4 MSLI PBs on either Safeguards bezel. <span class="hi-trap">Outside the EOP network, initiating a MSLI to trip the turbine BEFORE tripping the reactor is incorrect — a MSLI renders the Main Steam Dumps inoperable and prematurely isolates the SGFPs, and with Rx power &gt;P-10 (10%) and steam dumps unavailable, the CAS then requires a reactor trip. In TRIP-1 the steps to trip the Rx precede tripping the Turbine, and a MSLI is only used as the last turbine-trip method (after the trip handle and Turbine Trip bezel fail).</span> In this JPM, initiating a MSLI before the reactor trip is failure criteria due to the possible challenge to SG safeties.
</div>

### Steam Line Breaks & Secondary Effects

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q12</div>
Initial Tavg response (before automatic protective actions) — large steam line break vs large feed line break: a <span class="hi-exam">steam line break draws MORE steam from the SG → Tcold lowers → Tavg LOWERS</span>; a <span class="hi-exam">feed line break sends LESS cold feed into the SG → Tcold rises → Tavg RISES</span>. <span class="hi-trap">A main feedwater line break depressurizes the SG similarly to a steam line break, so diverse/alternate indications are needed to discern the actual SG condition.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q51</div>
Per AB.STM-0001 (Excessive Steam Flow), uncontrollably rising steam flow with no apparent cause drives reactor power up at <span class="hi-exam">the same rate as the steam flow</span>; the Continuous Action Summary (Step 1.1) directs the crew to <span class="hi-exam">trip the reactor, confirm the trip, then initiate MSLI</span> to determine if SI is required. See [[AB.STM-0001 — Excessive Steam Flow]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q16</div>
Steam line rupture upstream of 24MS167 with reactor tripped, MSLI performed, and feed isolated to 24 SG: as the <span class="hi-exam">faulted SG pressure lowers due to the steam break, break flow lowers</span>, and the <span class="hi-exam">RCS cooldown rate lowers</span> as a result. <span class="hi-trap">A static break does NOT pass the same lbm of steam flow during the entire event — break flow is a function of upstream SG pressure. Initiating AFW to the ruptured SG is only directed in EOP-LOSC-2 if ALL SGs are faulted, not in this single-line-break scenario.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q49</div>
Small (0.1%) steam leak from a single SG with reactor at <span class="hi-exam">1×10⁻⁸ Amps (exactly critical, below POAH)</span>: positive reactivity from the cooldown causes <span class="hi-exam">Rx power to rise until it stabilizes after reaching the Point Of Adding Heat (POAH)</span>. <span class="hi-exam">Below POAH there is NO temperature-coefficient feedback</span> — power simply rises with the steam-induced cooldown. Once power reaches POAH, the negative MTC adds enough negative reactivity to <span class="hi-exam">offset the positive reactivity from the steam leak</span> and power stabilizes. <span class="hi-trap">No reactor trip occurs — both OT/DT and Power Range high-flux (low setpoint) trips are plausible distractors but neither actuates because power stabilizes well below their setpoints.</span>
</div>

### MSLI Failure & Manual Recovery

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
21 SG steam leak inside containment escalates to a rupture on a manual reactor trip. <span class="hi-exam">Both auto MSLI signals (RP0279A/B) and manual MSLI fail to close any of the four MSIVs</span> (21-24MS167 fail open). MSLI failure leaves the steam leak unisolated → CRS directs manual SI per AB.STM CAS / TRIP-1 Step 11. Local operators are dispatched to <span class="hi-exam">place valves from Table D in safeguards position</span> (locally close MSIVs). All SGs depressurize uncontrollably → EOP-LOSC-1 → EOP-LOSC-2. Local operators successfully shut <span class="hi-exam">23MS167</span> later in the event; pressure rise in 23 SG drives transition back to LOSC-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
21MS167 drifts from full open position at 40% power. OHA G-34 (21-24 MS167 VALVES NOT FULL OPEN). PO reports CRT and board indication. Recovery: <span class="hi-exam">depress open pushbutton to re-open 21MS167</span> per ARP S2.OP-AR.ZZ-0007.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Main turbine fails to auto trip AND fails to manually trip following reactor trip from AB.RCP-0001. MSLI fails to auto actuate. <span class="hi-exam">CT#1 (CT-12): crew manually actuates MSLI using Fast Close pushbuttons on 2CC2</span> (or Loops 21-24 MSLI on 2CC1 Safeguards bezels). Failure to close MSIVs causes uncontrolled depressurization of all SGs, excessive RCS cooldown, and challenges to Integrity and Subcriticality CSFs. MS10 atmospheric dump valves used in EOP-FRHS-1 to depressurize selected SG to < <span class="hi-exam">575 psig</span> for condensate feed recovery.
</div>

### Flow Restrictors

Each steam line is provided with a <span class="hi">venturi-type restrictor</span> designed to increase the margin to departure from nucleate boiling (DNB) — and thereby reduce fuel clad damage — by limiting steam flow rate consequent to a steam line rupture and reducing the primary system cooldown rate (UFSAR §10.3.2.3). Design criteria: provide plant protection for a steam line rupture downstream of the restrictor by reducing break flow and primary cooldown rate; minimize unrecovered pressure loss across the restrictor while limiting accident flow rate to an acceptable value (<span class="hi">less than 5 psi at 120 percent of rated steam flow</span>); withstand the plant's pressure and thermal cycles; and maintain restrictor integrity in the event of a double-ended severance immediately downstream (UFSAR §10.3.2.3). Restrictors are positioned approximately <span class="hi">24 pipe diameters downstream of each steam generator</span> in vertical pipe sections to minimize the length of upstream piping and reduce the probability of an upstream break (UFSAR §10.3.2.3). Each flow restrictor is provided with <span class="hi">two steam flow transmitters</span> that input to the Reactor Protection System; the transmitters have variable damping selected to minimize false SI signals from spurious transient high-steam-flow signals without exceeding TS time-response requirements (UFSAR §10.3.2.3). Each SG also has an integral flow-restricting device in the steam nozzle with a flow area of <span class="hi">1.4 ft²</span> (UFSAR §10.3.2.3).

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

The MSSVs are <span class="hi">self-actuated safety valves designed to pass 100 percent of the maximum calculated steam generator capacity</span>; five valves are installed on each steam generator outlet steam line with the lowest set pressure at <span class="val-trip">1070 psig</span> (UFSAR §10.3.3.3). The five lift settings are <span class="val-trip">1070, 1100, 1110, 1120, 1125 psig</span> (UFSAR §10.4.4.1, §10.3.2.1). The valves are located in the penetration area and are vented via umbrella-type vents to atmosphere through the roof of the penetration area (UFSAR §10.4.4.1). The atmospheric dump capacity of the steam generator safety valves is <span class="hi">100 percent of full load flow</span> (UFSAR §10.4.4.2). Should a load drop in excess of 50 percent occur, or should it be necessary to close the MSIVs with the plant under load, this 100-percent safety-valve capacity is provided on the piping just upstream of the MSIVs (UFSAR §10.4.4.1). The MSSV lift settings are amendment-controlled per [[TS 3/4.7 — Plant Systems]] Table 3.7-4 (TS 3/4.7.1.1, Amend 259).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q26</div>
Each SG has <span class="hi-exam">five</span> safety valves with lift setpoints of <span class="hi-exam"><span class="val-trip">1070, 1100, 1110, 1120, 1125 psig</span></span> (confirms the xMS11–xMS15 table above). Count valves whose setpoint is at or below the SG pressure: at <span class="hi-exam">1115 psig</span>, the 1070, 1100, and 1110 psig valves are open = <span class="hi-exam">3 safety valves</span>. <span class="hi-trap">Trap: the 1120 and 1125 psig valves are above 1115 psig and stay shut. Only the affected SG (the one at 1115 psig) is considered — a MSLI isolates the other SGs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q42</div>
MSSVs will start to open when main steam line pressure FIRST exceeds <span class="hi-exam"><span class="val-trip">1070 psig</span></span> (the lowest lift setting, xMS15). <span class="hi-trap">Trap: 1100 psig (xMS14) is the second lowest — the lowest is 1070 psig.</span> LCO 3.7.1.1 purpose: limit secondary system pressure to within <span class="hi-exam">110% of design pressure AND protect against overpressurization of the Reactor Coolant Pressure boundary</span>. <span class="hi-trap">It is NOT only for secondary overpressure protection — the MSSVs also protect the RCS pressure boundary.</span>
</div>

## Atmospheric Relief Valves (MS10s)

- 4 valves total (one per SG: 21MS10 through 24MS10)
- Design capacity: <span class="hi">10% of rated steam flow total (all 4 valves combined)</span>, <span class="hi">2.5% rated steam flow per individual valve</span>
- Total flow at no-load steam pressure: 390147 lb/hr at 1005 psig
- Controllable from the control room; backup nitrogen bottle racks for loss of control air

A power-operated main steam relief valve (MSIO / MS10 PORV) is provided on each main steam line upstream of the MSIVs; the total relief capacity for the four valves equals <span class="hi">10 percent of full load flow</span> (UFSAR §10.4.4.1). These valves have a <span class="hi">remotely variable pressure setpoint</span> and can be used to bleed off reactor decay heat during cooldown (UFSAR §10.4.4.1). After a reactor turbine trip, stored heat in the primary system is removed by the combination of steam dump to the condenser and atmospheric relief; should the condenser be unavailable, the SG safety valves and PORVs open to dump steam to atmosphere, and when the safety valves reseat the PORVs are used to remove residual heat and control steam pressure while the Auxiliary Feedwater System maintains SG level (UFSAR §10.4.4.1). In the unlikely event of a loss of offsite power, decay heat removal is assured by one steam-driven and two motor-driven auxiliary feed pumps with steam discharge to atmosphere via the power relief valves and/or the SG safety valves (UFSAR §10.3.3.1).

**Exam & operating coverage:**

### MS10 Design & Setpoints

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q15</div>
MS10 setpoint adjustment during SG tube leak: IAW AB.SG-0001 Step 3.31, the affected MS10 setpoint is lowered to <span class="hi-exam"><span class="val-alarm">1045 psig</span></span>. Button <span class="hi-exam">A</span> on the MS10 controller raises the setpoint. <span class="hi-trap">Trap: 1070 psig is the MSSV (MS15) setpoint, not the AB.SG-0001 MS10 adjustment. Button B raises the manual output to open the valve more — it does NOT change the setpoint.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q43</div>
Each MS10 (SG Atmospheric Relief Valve) has a design capacity of <span class="hi-exam">2.5% rated steam flow</span> (total for all 4 valves is <span class="hi-exam">10% rated steam flow at no-load steam pressure — 390147 lb/hr at 1005 psig</span>). <span class="hi-trap">Common trap: 10% is the total design capacity for all 4 valves, not the capacity of a single valve.</span> Per AB.STM-0001, if an MS10 fails open and MSLI does not isolate the leak, a manual SI is required.
</div>

### MS10 in Cooldown & Heat Removal

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q51</div>
If the Main Steam Dumps fail to ARM on a turbine-trip-induced reactor trip, core heat drops rapidly and the <span class="hi-exam">SG Atmospheric Relief Valves (MS10s) open to establish RCS temperature ~551-552°F</span>. RCS pressure does NOT rise enough to open the PORVs or PZR Safeties — <span class="hi-exam">PZR spray opens rapidly and fully to keep RCS pressure below ~2335 psig</span>. See [[Steam Dumps]], [[Pressurizer & PRT]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
MS10 atmospheric dump valves during EOP-LOPA-1 (Loss of All AC Power): on loss of all control air, CA330s fail closed isolating air to containment. MS10s remain operable from the control room via <span class="hi-exam">DC battery power for controls and nitrogen bottle racks (4 bottles >=2000 psig per MS10) for the air operator</span>. Bottle rack capacity: <span class="hi-exam">minimum 72 hours</span> of MS10 operation. Maximum cooldown rate per EOP-LOPA-1 step 17.2 is <span class="hi-exam">100F/hr</span>. <span class="hi-trap">50F/hr is the cooldown rate for EOP-TRIP-6 (Nat Circ without RVLIS above 500F), NOT EOP-LOPA-1.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-h</div>
The <span class="hi-exam">MS10 atmospheric steam dump valves</span> provide the heat removal path during a forced flow / natural circulation cooldown when RHR is lost (AB.RHR-0001 Attachment 10): with SGs fed to wide-range level &gt;77%, <span class="hi-exam">operate the appropriate MS10s to maintain Core Exit Thermocouples stable or lowering</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-g</div>
EOP-SGTR-1 RCS cooldown with steam dumps unavailable (permissive light NOT illuminated on 2RP4): Step 10 directs cooldown using <span class="hi-exam">MS10 atmospheric relief valves on intact SGs (21, 22, 23)</span>. Table B determines target temperature based on ruptured SG pressure — <span class="hi-exam">1045 psi → 503°F target</span>. Lower MS10 setpoints on intact SGs to fully open for maximum-rate cooldown. When hottest CET reaches 503°F, stop cooldown by matching MS10 setpoints to current SG pressures. Do NOT dump steam from the ruptured 24 SG.
</div>

### MS10 in SGTR/SG Leak Isolation

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
The <span class="hi-exam">21 MS10 atmospheric steam dump fails ~33% open in auto</span>; the PO places 21 MS10 in manual and shuts it (or raises the steam pressure setpoint so the valve responds), entering [[AB.STM-0001 — Excessive Steam Flow]]. Later, during the LBLOCA response, <span class="hi-exam">MSLI is initiated manually</span> in [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
SGTR isolation: the <span class="hi-exam">23MS10 setpoint is raised to 1045 psig</span> and 23MS167/23MS7/23MS18 are shut to isolate the ruptured 23 SG. After the loss of offsite power the RCS cooldown is re-established using the intact-SG atmospheric reliefs — the <span class="hi-exam">21/22/24 MS10s fully open</span> (steam dumps are unavailable with no condenser/offsite power).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
During EOP-SGTR-1 for 24 SG tube rupture: PO isolates steam from 24 SG by closing <span class="hi-exam">24MS10 (set at 1045 psig), 24MS167, 24MS18, 24MS7, 24GB4</span>. RCS cooldown initiated using steam dumps at 25% demand in MS Pressure Control or <span class="hi-exam">intact MS10s</span> (may have initiated MSLI during TRIP-2 based on uncontrolled RCS temperatures). CT#2: stop cooldown when hottest CETs < 503 F target.
</div>

## Steam Dump System

See [[Steam Dumps]] for condenser steam dump valve operation, interlocks (C-9, P-12), and cooldown mode.

The Turbine Bypass (Steam Dump) System provides the capability to dump up to <span class="hi">40 percent of full load steam flow</span> directly to the condenser, enabling the plant to accept a <span class="hi">50 percent step load decrease</span> from full load without reactor trip (the remaining 10 percent is the inherent NSSS step-load capability) (UFSAR §10.4.4.1). <span class="hi">Twelve bypass valves</span> are required (4 per condenser shell), with a limitation on maximum flow through any one valve of <span class="hi">1100000 lb/hr</span> should it fail open (UFSAR §10.4.4.1). The full-load average coolant temperature is significantly greater than the saturation temperature corresponding to the SG safety-valve pressure setting, so a heat sink must be available after a reactor/turbine trip to prevent lifting the SG safety valves (UFSAR §10.4.4.1). The Steam Dump System also acts as a supplemental heat sink for a load reduction up to 50 percent of rated load without a reactor trip (UFSAR §10.4.4.1). During operational transients, excess steam generated is normally bypassed directly to the condenser; this 40-percent bypass capacity in conjunction with the 10-percent NSSS step-load capability enables a 50-percent load rejection without reactor trip, turbine trip, or safety-valve actuation (UFSAR §10.3.2.1, §10.4.4.1).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q50</div>
With Main Steam Dumps in AUTO MS Pressure control during a startup (18% power, generator rolling unloaded), <span class="hi-exam">lowering the MS Dump pressure setpoint 5 psig causes the dumps to open to lower header pressure to the new setpoint → higher steam flow, lower Tavg → positive reactivity → reactor power rises above 18%</span>. <span class="hi-trap">Control rods are NOT in auto until &gt;P-2 (15% Turbine power, not yet online), so rods stay in manual with no operator action.</span> See [[Steam Dumps]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q51</div>
All Main Steam Dumps failing full open at 20% power generates an automatic Main Steamline Isolation: dumps pass ~52% steam flow vs the <span class="hi-exam">Hi Steam Flow setpoint of 40% in the 0–20% power band</span>, coincident with <span class="hi-exam">Lo Tavg (&lt;<span class="val-trip">543°F</span>) or Lo Steam Pressure (&lt;<span class="val-trip">600 psig</span>)</span> as Tavg rapidly drops — the MSI signal is generated before the dumps turn off at 543°F.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q52</div>
With steam dumps in MS Pressure control (AUTO) during a startup at 18% with the generator rolling unloaded, <span class="hi-exam">raising the MS Dump Pressure setpoint 5 psig causes the dumps to SHUT</span> to raise header pressure to setpoint → lower steam flow, higher Tavg → <span class="hi-exam">Rx power lowers (&lt;18%)</span>. Rods stay in MANUAL (auto rod control not enabled until &gt;P-2 / 15% turbine power).
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.1 MSSVs, TS 3.7.1.5 MSIVs

## Connections

- Related systems: [[Steam Dumps]], [[Feed & Condensate]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOPA-1 — Loss of All AC Power]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related procedures: [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.STM-0001 — Excessive Steam Flow]], [[S2.OP-SO.MS-0001 — Main Steam Warmup]]
- Related exam questions: [[2015 Q12]], [[2015 Q25]], [[2015 Q26]], [[2016 Q16]], [[2016 Q24]], [[2016 Q49]], [[2016 Q50]], [[2016 Q83]], [[2016 Q85]], [[2016 Q90]], [[2018 Q15]], [[2018 Q16]], [[2019 Q42]], [[2019 Q48]], [[2020 Q43]], [[2022 Q12]], [[2022 Q77]], [[2015 Q27]], [[2015 Q51]], [[2014 Q15]], [[2014 Q22]], [[2014 Q51]], [[2014 Q52]], [[2014 Q55]], [[2014 Q65]], [[2014 Q91]], [[2012 Q16]], [[2012 Q19]], [[2012 Q25]], [[2012 Q42]], [[2012 Q49]], [[2012 Q50]], [[2012 Q51]], [[2012 Q84]], [[2012 Q91]]
- Related JPMs: [[2023 JPM Sim-e]], [[2020 JPM Sim-g]], [[2015 JPM Sim-h]], [[2012 JPM Sim-e]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2016 Scenario 3]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2015 Scenario 4]], [[2014 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 3]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
