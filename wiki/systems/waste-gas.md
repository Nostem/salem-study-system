---
title: Waste Gas
category: systems
status: draft
aliases:
  - gaseous waste
  - rad waste
---

# Waste Gas

## Function

The gaseous waste system collects, processes, monitors, and releases gaseous radioactive waste. Sources include: cover gas from the VCT and RCDT, vent gases from various tanks, and containment purge air. Processing includes decay (holdup tanks), filtration (HEPA and charcoal), and dilution. Monitored before release through the plant vent. (UFSAR 11.3)

## Gaseous Waste Processing

- Waste gas decay tanks (GDTs) provide holdup time for radioactive decay before release
- Gas released through 2WG41 (GDT Vent Control Valve) to the plant vent
- Plant vent radiation monitor (2R41D) provides automatic protection against unmonitored releases

**Exam & operating coverage:**

### GDT Release Operations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q49</div>
Hydrogen Recombiner power supplies: <span class="hi-exam">11 Recombiner from 1A 460V Vital Bus; 12 Recombiner from 1B 460V Vital Bus</span> (each fed from its respective 4KV Vital Bus). With the <span class="hi-exam">1A 4KV Vital Bus locked out on bus differential, the 1A 460V is de-energized → 11 Recombiner is unavailable; only 12 can be started</span> when directed by procedure.
</div>

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q14</div>
On a Loss of Control Air (AB.CA-0001), <span class="hi-exam">ALL radwaste releases in progress are terminated</span> — during a gradual depressurization of the Control Air system, a release must not be in progress while the <span class="hi-exam">dilution medium flowrate may be changing</span> (AB.CA-0001 bases, p. 8 of 12).
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

## Radiological Monitoring

- **Process radiation monitors:** Monitor liquid and gaseous effluent pathways
- **Area radiation monitors:** Monitor dose rates in occupied and restricted areas
- **Containment atmosphere monitors:** Monitor containment air for activity
- **Main steam line monitors:** Detect primary-to-secondary leakage (SG tube leaks)
- **Effluent monitors:** Monitor liquid and gaseous releases at the point of discharge
(UFSAR 11.4)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q35</div>
During a 24 GDT release per S2.OP-SO.WG-0011, <span class="hi-exam">2R41 Channel D High Radiation Alarm causes 2WG41 (GDT VENT CONT V) to AUTOMATICALLY close</span>, terminating the release. Other valves open during the release — 24WG34 (GDT STOP TO PLNT), 2WG39 (GDT TO VENT HOR STOP V), 2WG38 (GDT VENT CONTROL VALVE) — <span class="hi-trap">do NOT automatically close on 2R41 high radiation. Only 2WG41 receives the automatic closure signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q23</div>
2R41D (Plant Vent radiation monitor) in ALARM automatically closes: <span class="hi-exam">2WG41 (GDT Vent Control Valve — terminates waste gas release)</span>, <span class="hi-exam">2VC1 and 2VC4 dampers (containment purge)</span>, and <span class="hi-exam">2VC5 and 2VC6 dampers (containment pressure relief)</span>. Also aligns 2R45 skid to accident sampling loop.
</div>

## Tech Spec LCOs

- **[[TS 3.11 — Radioactive Effluents]]** — Gaseous effluent limits, monitoring

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q59</div>
TS LCO 3.11.2.5 prevents an explosive mixture in the Waste Gas Holdup System by maintaining <span class="hi-exam">oxygen concentration less than or equal to 2%</span>. Hydrogen concentration is monitored but is not addressed by Tech Specs. See [[TS 3.11 — Radioactive Effluents]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q90</div>
Containment pressure relief and ODCM 3.3.9: per Table 3.3-13 Item 3.a, either <span class="hi-exam">2R12A OR 2R41A & D channels</span> is required for containment pressure relief. If only 2R12A fails (power supply failure) and 2R41 channels remain operable, ODCM 3.3.9 is MET — <span class="hi-exam">no compensatory actions required to recommence the relief</span>. <span class="hi-trap">Trap: Action 37 (two independent samples + verified release rate calculations) only applies if BOTH 2R12A AND 2R41A & D are inoperable. Action 33 (grab samples every 8 hours) applies to the Plant Vent Radiation Monitor, not the containment atmosphere monitor.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 SRO-A3</div>
Determine required actions when effluent monitors fail before a 14 GDT Waste Gas release. With <span class="hi-exam">1R12A (Containment Noble Gas) and 1R41D (Plant Vent Release Rate) inoperable</span>, ODCM 3.3.3.9 → Table 3.3-13 Instrument #1 invokes <span class="hi-exam">Action 31</span>: the tank may be released only if, prior to release, (a) at least two independent samples are analyzed AND (b) at least two technically qualified staff independently verify the release-rate calculations and discharge valving lineup; otherwise suspend the release. S1.OP-SO.WG-0011 Step 3.4.C additionally requires grab samples once per 8 hours, analyzed within 24 hours.
</div>

## Physical Connections to Liquid Waste System

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q38</div>
Of the Radioactive Liquid Waste System tanks, <span class="hi-exam">ONLY the RCDT has a physical connection to the Waste Gas Compressor Header</span>. Other liquid waste tanks (WHUTs, Chemical Drain Tank, Auxiliary Building Sump Tank) do not connect to the waste gas header.
</div>

## Connections

- Related concepts: [[Radiation Monitoring]], [[Containment]]
- Related systems: [[Control Air]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0009 — Discharge of 22 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0011 — Discharge of 24 Gas Decay Tank to Plant Vent]], [[S1.OP-SO.WG-0011 — Discharge of 14 Gas Decay Tank]], [[S1.OP-SO.WG-0007 — Transfer of Waste Gas]], [[S1.OP-SO.WG-0005 — VCT Purge to the Plant Vent]], [[S1.OP-SO.WG-0010 — Discharge of 13 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0006 — Containment Purge to Plant Vent]], [[S2.OP-SO.WG-0003 — Gaseous Waste Disposal System Operation]], [[AB.CA-0001 — Loss of Control Air]]
- Related tech specs: [[TS 3.11 — Radioactive Effluents]], [[TS 3.7 — Plant Systems]]
- Related exam questions: [[2014 Q49]], [[2016 Q93]], [[2016 Q98]], [[2018 Q38]], [[2019 Q35]], [[2020 Q59]], [[2020 Q98]], [[2023 Q90]], [[2022 Q23]], [[2015 Q59]], [[2014 Q82]], [[2012 Q14]]
- Related JPMs: [[2016 JPM SRO-A3]], [[2016 JPM Sim-h]], [[2018 JPM SRO-A4]], [[2023 JPM IP-k]], [[2019 JPM IP-k]], [[2015 JPM IP-k]], [[2014 JPM SRO-A3]], [[2012 JPM SRO-A3]], [[2012 JPM Sim-g]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
