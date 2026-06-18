---
title: Waste Gas
category: systems
status: draft
aliases:
  - gaseous waste
  - rad waste
---

# Waste Gas

## Function & Design Basis

The Gaseous Waste System (GWS) provides controlled handling and disposal of gaseous wastes generated during plant operation, and also supplies hydrogen and nitrogen to primary systems' components as required during normal operation (UFSAR §11.3). Radioactive gases are collected in gas decay tanks (GDTs) to allow for decay and isotopic analysis; decayed gases are discharged intermittently at a controlled rate through the monitored plant vent (UFSAR §11.3.1).

Design objectives for the GWS are: (1) provide sufficient capacity and storage to process and store the gaseous effluent expected for a period of <span class="hi">45 days</span>; (2) provide cover gas for the liquid holdup tanks; (3) keep releases of radioactive gaseous wastes as low as practicable; (4) maintain releases below the limits of 10CFR20; and (5) keep public exposures below the design objective of 10CFR50 Appendix I (UFSAR §11.3.1).

Gaseous wastes originate from: degassing reactor coolant discharge to the CVCS; displacement of cover gases as liquids accumulate in various tanks; miscellaneous equipment vents and relief valves; and sampling/automatic gas-analysis operations for hydrogen and oxygen in cover gases (UFSAR §11.3.2). Most of the gas received during normal operation is cover gas displaced from the CVCS holdup tanks as they fill with liquid; since this gas must be replaced when the tanks are emptied, facilities return gas from the decay tanks to the holdup tanks (UFSAR §11.3.2).

## Key Components

- **Gas decay tanks (GDTs):** Four welded carbon steel tanks per unit (ASME Section III Class C), each <span class="hi">525 ft³</span> volume, vertical cylinder. Design pressure <span class="hi">150 psig</span>, design temperature <span class="hi">180°F</span>; operating pressure <span class="val-normal">0–92 psig</span>, operating temperature 50–150°F (UFSAR §11.3.3). All piping and valves providing isolation for the Gas Decay Tanks are classified safety-related, Nuclear Class III, Seismic Class I (UFSAR Table 11.2-3 note 11).
- **Waste gas compressors:** Two per system; water-sealed rotary positive-displacement units, one normally running with the second on standby. Each rated <span class="hi">40 cfm at 105 psig</span>; the seal water is cooled by component cooling water (CCW) in a heat exchanger, and seal makeup water is supplied to the compressor suction from the Component Cooling System (UFSAR §11.3.3). Each compressor contains a mechanical seal to minimize seal-water leakage. Compressor motor: 25 HP, 3500 RPM, 460 V, 3-phase (UFSAR §11.3.3).
- **Nitrogen manifold:** Backup to the Liquid Nitrogen System (automatic switching dual header), 18 cylinders per header, design flow 40 scfm at 100 psig delivery. Pressure controllers I-PIA-1066 switch from the normal bulk supply to the backup cylinder header. The manifold also supplies N2 at <span class="hi">800 psi</span> to the Safety Injection accumulators (UFSAR §11.3.3).
- **Hydrogen manifold:** Backup to the Bulk Hydrogen System (automatic switching dual header), 6 cylinders per header, design flow 30 scfm at 100 psig. Pressure controller 1-PIA-1065 automatically switches from the normal system to the backup. Serves as a backup hydrogen supply to the volume control tank (UFSAR §11.3.3).
- **Gas analyzers:** Redundant analyzers (one in each Salem unit, cross-connected), provided per NUREG-0472, continuously monitor oxygen and hydrogen concentrations to indicate when accumulation approaches an explosive mixture (UFSAR §11.3.3).
- **Plant vent / Plant Vent Radiation Monitor:** Release point for decayed gas; the modulating discharge valve automatically trips closed on high activity detected by the Plant Vent Radiation Monitor (UFSAR §11.3.4).

All major GWS equipment is located outside the Reactor Containment Building, in the Auxiliary Building at Elevation 64 feet and 122 feet (UFSAR §11.3.3).

## Power Supplies

- Waste gas compressor motors are <span class="hi">25 HP, 460 V, 3-phase, 60 cycle</span> (UFSAR §11.3.3).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q49</div>
Hydrogen Recombiner power supplies: <span class="hi-exam">11 Recombiner from 1A 460V Vital Bus; 12 Recombiner from 1B 460V Vital Bus</span> (each fed from its respective 4KV Vital Bus). With the <span class="hi-exam">1A 4KV Vital Bus locked out on bus differential, the 1A 460V is de-energized → 11 Recombiner is unavailable; only 12 can be started</span> when directed by procedure.
</div>

## Automatic Features & Setpoints

Gas pumped to the GDTs flows to one of four decay tanks. When the in-service tank becomes pressurized to <span class="val-trip">92 psig</span>, a pressure transmitter automatically closes the inlet valve to that tank, opens the inlet valve to the backup tank, and sounds an alarm so the operator may select a new backup tank (UFSAR §11.3.3, §11.3.4).

One of the two waste gas compressors operates while the other is on standby. The operating compressor maintains a vent header pressure of <span class="val-normal">0.5 to 4.0 psig</span>; if vent header pressure rises to <span class="val-alarm">4 psig</span>, the standby compressor automatically energizes (UFSAR §11.3.4). The compressor discharge control valve on the separator is set to open at <span class="hi">50 psig</span> to assure sufficient pressure to circulate seal water at startup (UFSAR §11.3.3).

When the operating nitrogen header (set for <span class="hi">100 psig</span> discharge) falls below 100 psig, an alarm alerts the operator; the backup header (pressure regulator set at <span class="hi">90 psig</span>) comes into service automatically (UFSAR §11.3.2, §11.3.3).

Gas samples are drawn automatically from the gas decay tanks and analyzed for hydrogen and oxygen content; an alarm warns the operator if any sample shows <span class="val-alarm">2 percent or higher by volume of oxygen</span>, allowing time to take required action before the combustible limits of hydrogen-oxygen mixtures are reached (UFSAR §11.3.2). System malfunction is alarmed in the Auxiliary Building and annunciated in the Control Room (UFSAR §11.3.2).

Before a tank is discharged to the plant vent, it is sampled and analyzed for activity, then discharged at a controlled rate and monitored for gross activity. If the Plant Vent Radiation Monitor detects high activity during release, the modulating valve automatically trips closed; to reopen it the switch must first be reset by returning it to the closed position, after which the valve can be repositioned (UFSAR §11.3.4).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q35</div>
During a 24 GDT release per S2.OP-SO.WG-0011, <span class="hi-exam">2R41 Channel D High Radiation Alarm causes 2WG41 (GDT VENT CONT V) to AUTOMATICALLY close</span>, terminating the release. Other valves open during the release — 24WG34 (GDT STOP TO PLNT), 2WG39 (GDT TO VENT HOR STOP V), 2WG38 (GDT VENT CONTROL VALVE) — <span class="hi-trap">do NOT automatically close on 2R41 high radiation. Only 2WG41 receives the automatic closure signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q23</div>
2R41D (Plant Vent radiation monitor) in ALARM automatically closes: <span class="hi-exam">2WG41 (GDT Vent Control Valve — terminates waste gas release)</span>, <span class="hi-exam">2VC1 and 2VC4 dampers (containment purge)</span>, and <span class="hi-exam">2VC5 and 2VC6 dampers (containment pressure relief)</span>. Also aligns 2R45 skid to accident sampling loop.
</div>

## Design Features & Interlocks

The Gas Decay Tank inlet header control arrangement allows the operator to place one tank in service and select one tank for backup; pressure indicators aid the operator in selecting the backup tank (UFSAR §11.3.3). The header arrangement at the tank inlet gives the operator the option to fill, reuse, or discharge gas to the environment simultaneously without restriction by operation of the other tanks (UFSAR §11.3.3).

To avoid the possibility of hydrogen combustion in the vent header while gas is being displaced from holdup tanks, components discharging to the vent header are restricted to those containing no air or aerated liquids, and the vent header is designed to operate at a slight positive pressure (<span class="val-normal">0.5 psig minimum to 4.0 psig maximum</span>) to prevent inleakage (UFSAR §11.3.2). Outleakage is minimized with Saunders patent diaphragm valves, bellows seals, self-contained pressure regulators, and soft-seated packless valves throughout the radioactive portions of the system (UFSAR §11.3.2).

**Oxygen / hydrogen control (explosive-mixture prevention):** Redundant gas analyzers continuously analyze gas decay tank samples to ensure the oxygen concentration remains <span class="val-alarm">less than or equal to 2 percent</span> (UFSAR §11.3.3). The high-span calibration gas is nominally <span class="hi">4% oxygen</span> and the low-span calibration gas nominally <span class="hi">1% oxygen</span>, with the balance nitrogen except small amounts of hydrogen (between 1% and 2.5%) (UFSAR §11.3.3). Oxygen is measured by partial-pressure measurement over a 0–5% O2 range and hydrogen over a 0–25% H2 range; the recorder samples the waste gas decay tank every 3 minutes (UFSAR §11.3.3). Hydrogen in the GWS is produced primarily by hydrogen stripped from the reactor coolant during boron recycle and degassing operations (UFSAR §11.3.4). The compressor discharge separator centrifuges seal water out of the gas mixture; design data assumes a 65% N2 / 35% H2 mixture at the discharge (UFSAR §11.3.3).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q59</div>
TS LCO 3.11.2.5 prevents an explosive mixture in the Waste Gas Holdup System by maintaining <span class="hi-exam">oxygen concentration less than or equal to 2%</span>. Hydrogen concentration is monitored but is not addressed by Tech Specs. See [[TS 3/4.11 — Radioactive Effluents]].
</div>

## Interconnections & Loads

- **Nitrogen / Liquid Nitrogen System:** Two liquid nitrogen storage tanks (each with a self-contained ambient vaporizer) supply the operating headers for both units; one storage tank and its vaporizer are used at a time. The operating header of each unit is set for 100 psig discharge and is backed up by a nitrogen cylinder manifold set at 90 psig (UFSAR §11.3.2). The station bulk low-pressure (LP) nitrogen storage tanks are double-walled vertical cylinders with design pressure 249 psig and operating pressure 245 psig max (UFSAR §11.3.3).
- **CVCS:** Most GWS gas is cover gas displaced from the CVCS holdup tanks as they fill with liquid; gas is returned from the decay tanks to the holdup tanks as cover gas when liquid is processed by the boric acid evaporator. To maximize gas residence time, the last tank filled should be the first returned as cover gas (UFSAR §11.3.2, §11.3.4). The hydrogen manifold backs up the Bulk Hydrogen System feed to the volume control tank (UFSAR §11.3.3).
- **Safety Injection accumulators:** The nitrogen manifold also supplies high-pressure N2 (800 psi) for recharging the SI accumulators (UFSAR §11.3.2, §11.3.3).
- **Auxiliary Feedwater storage tanks:** The Unit 1 and Unit 2 auxiliary feedwater storage tanks are provided with a nitrogen purge/blanket system (dedicated nitrogen source) to control dissolved oxygen concentration in the water (UFSAR §11.3.2).
- **Gas analyzer sampling points:** waste gas to plant vent; reactor coolant drain tank; spent resin storage tank; gas decay tanks (2 points); CVCS holdup tanks; boric acid evaporator and gas stripper; volume control tank; pressure relief tank (UFSAR §11.3.3).
- **Radiation Monitoring System:** the Plant Vent Radiation Monitor (2R41D) provides automatic protection against unmonitored releases and trips the discharge valve closed on high activity (UFSAR §11.3.4; see [[Radiation Monitoring]]).

### Physical Connection to Liquid Waste System

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q38</div>
Of the Radioactive Liquid Waste System tanks, <span class="hi-exam">ONLY the RCDT has a physical connection to the Waste Gas Compressor Header</span>. Other liquid waste tanks (WHUTs, Chemical Drain Tank, Auxiliary Building Sump Tank) do not connect to the waste gas header.
</div>

## Control-Room Operation

The system is controlled from a central panel in the Auxiliary Buildings; all system equipment is located in the Auxiliary Building. Malfunction of the system is alarmed in the Auxiliary Building and annunciated in the Control Room (UFSAR §11.3.2). The waste gas compressors can be used to: (1) pump gas to the waste decay tanks; (2) transfer gas between tanks; and (3) pump gas directly to the CVCS holdup tanks (UFSAR §11.3.4). To pump gas to the GDTs, the operator selects two tanks at the auxiliary control panel No. 104 — one to receive gas and one for standby (UFSAR §11.3.4).

### GDT Release Operations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q82</div>
During a Gas Decay Tank release to the plant vent (S1.OP-SO.WG-0008): <span class="hi-exam">if Auxiliary Building pressure turns positive, terminate the release</span> (P&amp;L 3.9 / TS 3.7.7 action e) — a positive Aux Building could cause an unmonitored release. <span class="hi-exam">1WG38 (Gas Decay Tank Vent Pressure Control Valve) maintains downstream pressure &lt;<span class="val-alarm">8.0 psig</span>, which keeps the release rate below the <span class="val-alarm">32 scfm</span> maximum</span> — so 7.5 psig downstream is acceptable, not a termination condition.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q93</div>
Containment Purge to Plant Vent (S2.OP-SO.WG-0006) reinstatement after temporary termination: <span class="hi-exam">no new release form required if duration was short (~4 hours) AND containment radiological conditions have not changed</span>; <span class="hi-exam">CVI signal can be blocked per Attachment 2</span> (Temporary Termination and Reinstatement). A new effluent permit is not always required.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q98</div>
WGDT release administrative restrictions: <span class="hi-exam">only one WGDT may be released at a time</span>; <span class="hi-exam">no transfer of waste gas between WGDTs during a release</span>; <span class="hi-exam">waste GAS cannot be transferred between units</span> (waste LIQUID transfer between units IS allowed). The <span class="hi-exam">VCT purge to plant vent IS allowed concurrently</span> with a WGDT release per S1.OP-SO.WG-0011 page 16.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q98</div>
GDT release restrictions per S1.OP-SO.WG-0011:
<ul>
<li><span class="hi-exam">"DO NOT release more than one GDT at a time."</span> (P&L 3.2)</li>
<li><span class="hi-exam">"DO NOT transfer Waste Gas from one GDT to another during the GDT Release."</span> (P&L 3.3)</li>
</ul>
<span class="hi-exam">VCT Purge to the plant vent IS allowed during a GDT release</span> — per S1.OP-SO.WG-0005(Q), step 1 of the VCT Purge Radioactive Gaseous Release Form. <span class="hi-trap">Trap: waste gas cannot be transferred between units or between GDTs during a release, and only one GDT may be released at a time, but VCT purge is a separate permitted activity.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A3</div>
CRS authorization review of a 13 Gas Decay Tank release (S1.OP-SO.WG-0010). Two embedded errors the CRS must catch before approving: (1) <span class="hi-exam">the pre-release valve position verification at step 5.2.8 was not performed</span>; and (2) the Maximum Allowable Release Rate calculated as <span class="hi-exam">100 scfm</span> was incorrectly transcribed as <span class="hi-exam">32 scfm</span> on Attachment 2 step 4.1 — the entered rate must be &gt; 32 scfm to sign off the next bullet (tanks &le; 32 scfm cannot be released). The CRS withholds approval and records both discrepancies.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 IP-k</div>
Swapping the in-service Gas Decay Tank per S2.OP-SO.WG-0003 §5.2: before placing 24 GDT in service, verify no release in progress and <span class="hi-exam">24 GDT pressure &gt;10 psig AND &lt;92 psig (2PIS1039)</span>. Press the <span class="hi-exam">GAS DECAY TANK 24 MANUAL SELECT pushbutton on the 104 panel</span> (24 in-service light ON, 21 OFF), then <span class="hi-exam">CLOSE 21WG35 (GDT STOP VALVE TO HUT)</span> for the tank removed and OPEN 24WG35. To place 21 GDT in holdup for sampling/release, perform S2.OP-SO.WG-0008 Attachment 1 Section 1.0 valve lineup and hang a <span class="hi-exam">Red Blocking Tag on 21WG31 (GDT INLET VALVE)</span> closed.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A4</div>
CRS review of S1.OP-SO.WG-0010 for 13 GDT release: release cannot be authorized due to two errors. (1) <span class="hi-exam">Pre-Release Verification in Attachment 1, Section 1.0 not performed</span>. (2) <span class="hi-exam">Maximum Allowable Release Rate of 32 SCFM is NOT > 32 SCFM</span> — per NOTE in Step 3.4, tanks with a calculated rate <= 32 SCFM cannot be released. <span class="hi-trap">Common trap: finding one error and stopping the review. The examiner cue directs review of the ENTIRE procedure.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 IP-k</div>
22 GDT release per S2.OP-SO.WG-0009: same latch-and-set sequence as 21 GDT (S2.OP-SO.WG-0008). 22 GDT discharge valves are <span class="hi-exam">22WG31 and 22WG34</span>, pressure instrument is <span class="hi-exam">PIS2037</span>. 2WG38 downstream pressure monitored on <span class="hi-exam">2PL8678</span> — terminate if >8.0 psig. Terminate release when tank pressure reaches <span class="hi-exam">10 psig</span>. MET data recorded during release: Wind Speed 5.8 MPH at El 33 ft, Wind Direction 290 degrees. Calculate average release rate every <span class="hi-exam">10 minutes</span> on Attachment 3.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-k</div>
Waste Gas Decay Tank release (S2.OP-SO.WG-0008): latch-and-set sequence on 2WG41 must be performed before commencing release. Max release rate <span class="hi-exam">32 SCFM</span> (Flow Bias <=100%). Terminate release at <span class="hi-exam">10 psig</span> tank pressure: reduce Flow Bias to <0%, close 2WG41-SWT, close 21WG34.
</div>

### Loss of Control Air Interaction

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-g</div>
On a total Loss of Control Air with a WG release in progress from 21 GDT, AB.CA-0001 step 3.57 requires the operator to <span class="hi-exam">VERIFY any Liquid or Gaseous release is STOPPED by ensuring 2WG41 (GAS DECAY TK TO PLANT VENT) is closed</span> (and 2WL51 to Circ Water Discharge shut). This terminates the in-progress gaseous release so a release is not occurring while the Control Air system depressurizes and dilution flow may be changing.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-h</div>
During a Loss of Control Air alternate path with a WG release in progress from 21 GDT, AB.CA-0001 Step 3.57 directs <span class="hi-exam">verifying any liquid or gaseous release is stopped by ensuring 2WG41 (GAS DECAY TK TO PLANT VENT) and 2WL51 (TO CIRC WTR DISCHARGE) are CLOSED</span>. The applicant must recognize 2WG41 is open (a release was in progress in the initial conditions) and manually shut it as part of the alternate-path response.
</div>

## Tech Spec LCOs

- **[[TS 3/4.11 — Radioactive Effluents]]** — Gaseous effluent limits, monitoring; LCO 3.11.2.5 limits oxygen in the waste gas holdup system to ≤2% by volume to prevent an explosive mixture.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q90</div>
Containment pressure relief and ODCM 3.3.9: per Table 3.3-13 Item 3.a, either <span class="hi-exam">2R12A OR 2R41A & D channels</span> is required for containment pressure relief. If only 2R12A fails (power supply failure) and 2R41 channels remain operable, ODCM 3.3.9 is MET — <span class="hi-exam">no compensatory actions required to recommence the relief</span>. <span class="hi-trap">Trap: Action 37 (two independent samples + verified release rate calculations) only applies if BOTH 2R12A AND 2R41A & D are inoperable. Action 33 (grab samples every 8 hours) applies to the Plant Vent Radiation Monitor, not the containment atmosphere monitor.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 SRO-A3</div>
Determine required actions when effluent monitors fail before a 14 GDT Waste Gas release. With <span class="hi-exam">1R12A (Containment Noble Gas) and 1R41D (Plant Vent Release Rate) inoperable</span>, ODCM 3.3.3.9 → Table 3.3-13 Instrument #1 invokes <span class="hi-exam">Action 31</span>: the tank may be released only if, prior to release, (a) at least two independent samples are analyzed AND (b) at least two technically qualified staff independently verify the release-rate calculations and discharge valving lineup; otherwise suspend the release. S1.OP-SO.WG-0011 Step 3.4.C additionally requires grab samples once per 8 hours, analyzed within 24 hours.
</div>

## Connections

- Related concepts: [[Radiation Monitoring]], [[Containment]]
- Related systems: [[Control Air]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0009 — Discharge of 22 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0011 — Discharge of 24 Gas Decay Tank to Plant Vent]], [[S1.OP-SO.WG-0011 — Discharge of 14 Gas Decay Tank]], [[S1.OP-SO.WG-0007 — Transfer of Waste Gas]], [[S1.OP-SO.WG-0005 — VCT Purge to the Plant Vent]], [[S1.OP-SO.WG-0010 — Discharge of 13 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0006 — Containment Purge to Plant Vent]], [[S2.OP-SO.WG-0003 — Gaseous Waste Disposal System Operation]], [[AB.CA-0001 — Loss of Control Air]]
- Related tech specs: [[TS 3/4.11 — Radioactive Effluents]], [[TS 3/4.7 — Plant Systems]]
- Related exam questions: [[2014 Q49]], [[2016 Q93]], [[2016 Q98]], [[2018 Q38]], [[2019 Q35]], [[2020 Q59]], [[2020 Q98]], [[2023 Q90]], [[2022 Q23]], [[2015 Q59]], [[2014 Q82]]
- Related JPMs: [[2016 JPM SRO-A3]], [[2016 JPM Sim-h]], [[2018 JPM SRO-A4]], [[2023 JPM IP-k]], [[2019 JPM IP-k]], [[2015 JPM IP-k]], [[2014 JPM SRO-A3]], [[2012 JPM SRO-A3]], [[2012 JPM Sim-g]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Operating Exam]]
