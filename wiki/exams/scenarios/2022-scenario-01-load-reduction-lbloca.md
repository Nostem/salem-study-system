---
title: "2022 Scenario 1 — Load Reduction / LBLOCA"
category: exams
status: draft
aliases:
  - 2022 Scenario 1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Load Reduction / LBLOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 3 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-240: Unit 2 is at 100% power, EOL; 21 Charging Pump I/S. The following equipment is out of service: 23 Charging Pump and 21 RHR Pump are C/T for maintenance.<br><br>
<strong>Turnover:</strong> The crew is directed to reduce power to 89% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using boration, control rods and turbine load control in preparation for Main Turbine Valve testing.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Planned Load Reduction to 89% at 10%/hour</li>
<li><span class="hi">24 Vacuum Pump trips</span></li>
<li><span class="hi">RC Loop 24 Cold Leg RTD Fails High (TS)</span></li>
<li>RCS Leak — 20 gpm (TS)</li>
<li>LBLOCA (leak worsens to 350 gpm)</li>
<li>Auto SI fails to actuate</li>
<li>22 RHR Pump Fails to Start on SEC Signal</li>
<li>Loss of Emergency Recirculation capability (22 RHR Pump Trips)</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Planned Load Reduction to 89%</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power reduction to 89% at 10%/hr IAW S2.OP-IO.ZZ-0004, Section 4.3 Power Reduction. RO briefs boration plan, initiates boration IAW S2.OP-SO.CVC-0006. PO briefs turbine load control plan and initiates load reduction IAW S2.OP-SO.TRB-0002. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">24 Vacuum Pump trips</td>
<td style="padding:6px;color:#9ca3af;">PO reports unexpected trip of 24 Vacuum Pump. CRS enters S2.OP-AB.COND-0001, Loss of Condenser Vacuum. PO initiates Att 1 CAS, dispatches operator for Att 2 local checks. PO reports 24 Vacuum Pump stopped and 24AR25 closed, condenser backpressure rising. PO starts all available vacuum pumps — 22 Vacuum Pump trips after starting, 25 Vacuum Pump starts but 25AR25 fails to open. PO manually opens 25AR25 and reports backpressure improving.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">24 Loop Cold Leg RTD fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected continuous rod insertion with no turbine runback in progress. RO places rod control in Manual. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. RO reports 24 RC Loop Tavg channel failed high. RO places Master Flow Controller (MFC) to Manual. CRS directs RO to adjust rods in manual to maintain Tavg within 1.5 deg of T program. CRS directs RO to stop any dilution in progress. RO defeats 24 loop RC Differential Temperature and Average Temperature on 2CC2. RO selects alternate channel. RO restores PZR level to program, places MFC in auto. RO restores control rods to previous position and places rod control in Auto. CRS enters TS 3.3.1.1 Action 6 (place channel in tripped condition within 72 hours) and TS 3.3.2.1.b Action 19 (place channel in tripped condition within 72 hours). CRS initiates S2.OP-SO.RPS-0002 to place 24 loop Tavg in tripped condition.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">RCS Leak — 20 gpm inside containment</td>
<td style="padding:6px;color:#9ca3af;">RO reports counts on 2R11A containment radiation monitor rising and PZR level lowering. RO reports RCS leak inside containment. CRS enters S2.OP-AB.RC-0001, RCS Leakage. PO initiates Att 1 CAS. RO reports RCS temp above 350 F, unit not in Mode 3, PZR level lowering, centrifugal charging pump in service. CRS directs RO to adjust charging flow to stabilize PZR level. RO adjusts charging flow and determines RCS leak rate. CRS enters TS 3.4.7.2.b (1 gpm unidentified leakage), Action b (reduce leakage within 4 hours or be in Hot Standby).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">LBLOCA — RCS leak worsens to 350 gpm</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports PZR level lowering rapidly. RO attempts to maintain PZR level by adjusting charging flow, reports leak exceeds makeup capability. CRS implements Att 1 CAS and briefs RO to trip the reactor and actuate SI. RO trips the reactor and actuates SI.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Auto SI fails to actuate on both trains (CT#1)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO may report SI failed to auto actuate. RO manually actuates SI on one train and verifies the other train actuated.</span> RO continues TRIP-1 immediate actions: reports Main Turbine tripped and backs up trip, reports all 4KV vital buses energized, reports SI has been initiated. CRS and RO verify immediate actions complete. CRS directs TRIP-1 CAS actions: stop RCPs (<span class="val-trip">1350 psig</span>), close charging mini-flows (<span class="val-trip">1500 psig</span>). RO announces Rx Trip and SI on station PA. PO reports all vital buses energized but SEC loading for 2B vital bus NOT complete.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RHR Pump fails to start on SEC signal (CT#2)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 22 RHR pump failed to start. PO blocks and resets 2B SEC. RO starts 22 RHR pump.</span> PO throttles AFW flow to no less than <span class="val-alarm">22E4 lbm/hr</span> while SG NR levels remain &lt;9% (15% adverse). RO reports containment pressure NOT remained &lt;15 psig — Phase B and Spray auto-initiated. MSLI auto-initiated. RO reports 2 CCW pumps running, both CCW HXs in Auto, 2CC131 (Thermal Barrier Return) closed. CRS notifies WCC to monitor SFP temperature and level. RO reports RWST Lo Level alarm not yet actuated. RO reports charging, SI pump and RHR pump flows consistent with RCS pressure. RO closes charging pump mini-flows when RCS pressure &lt;1500 psig with BIT flow established. RO stops RCPs when RCS pressure &lt;1350 psig with ECCS flow established. CRS transitions to EOP-LOCA-1 based on containment pressure &gt;4 psig or two or more Table J channels not normal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RHR Pump trips — Loss of Emergency Recirculation (CT#3)</span></td>
<td style="padding:6px;color:#c8cdd5;">In LOCA-1: RO reports all RCPs stopped. PO maintains AFW flow. RO resets Phase A, opens 21 and 22 CA330s. RO resets SG B/D Sample Isolation Bypass, opens 21-24 SS94s. RO reports both PORVs closed/block valves open. RO reports subcooling NOT &gt;0 F. RO reports both CS pumps running. RO resets both trains of SI, PO resets each SEC. PO stops unloaded EDGs. <span class="hi-exam">RO reports 22 RHR Pump tripped, no RHR pumps available.</span> CRS determines loss of emergency recirculation and transitions to EOP-LOCA-5.<br><br>
In LOCA-5: RO reports both ECCS pump trains normal. RO resets SI, PO resets SECs (if not done). RO reports containment sump level &gt;62% lights illuminated. RO reports no emergency recirculation available. CRS directs investigation into both RHR pump trips. <span class="hi-exam">CT#3 Part 1: CRS determines no CS pumps required (Table C). RO resets Spray actuation, stops 21 and 22 CS pumps, closes 21 and 22 CS2s.</span> <span class="hi-exam">CT#3 Part 2: RO initiates makeup to RWST IAW S2.OP-SO.CVC-0006 — PO starts RWST Heater Pump, ensures VCT level adequate, obtains BA flow setpoint (&ge;20 gpm), places makeup control in stop, places 2CV179 in Manual (full open), places 2CV172 in Manual, starts 22 Primary Water pump, dispatches operator to locally open 2CV182 and 2CV184, starts 22 BA pump in Manual/Fast, adjusts 2CV172 flow (&ge;20 gpm), adjusts 2CV179 to 50 gpm.</span> <span class="hi-exam">CT#3 Part 3: RO stops all but one charging pump, runs only one SI pump.</span> If RWST Lo-Lo Level alarm actuates: CRS takes CAS action from Step 7, goes to Step 29. <span class="hi-exam">CT#3 Part 4: RO stops ALL pumps taking suction from the RWST (RHR, SI, Charging, CS).</span> Scenario terminated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-2):</strong> Manually actuate at least one train of Safety Injection before transition out of TRIP-1, Reactor Trip or Safety Injection. Safety significance: failure to manually actuate SI results in degraded ECCS capacity — no systematic actuation of SIS-actuated safeguards (ECCS, Phase A containment isolation, CCW/SW, containment fan coolers not in safeguards mode). FSAR analyses assume at least one train of safeguards actuates; without SI actuation, FSAR assumptions and results are invalid, constituting a violation of the facility license condition. Cues: PZR pressure or SG pressure less than SI actuation setpoint, containment pressure greater than SI actuation setpoint, subcooled margin or PZR level less than foldout page criteria. Measurable standard: manually actuate at least one train of SI before transition to any LOCA, SGTR, or LOSC series procedure or FRG — confirmed by indication that at least one train of SI is actuated.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-5):</strong> Manually start at least one low head ECCS pump before transition out of TRIP-1, Reactor Trip or Safety Injection. Safety significance: FSAR large-break LOCA analysis assumes minimum ECCS pumped injection — one each high-head, intermediate-head, and low-head pump. Failure to start a low-head pump leaves the plant in an unanalyzed condition and constitutes a violation of the facility license condition. Cues: SI actuated, RCS pressure below shutoff head of low-head ECCS pumps, no low-head ECCS pump injecting (breakers open, discharge pressure and flow zero). Measurable standard: manually start at least one low-head ECCS pump before transition out of TRIP-1 — confirmed by breaker closed and flow indication.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3 (CT-29):</strong> Make up to the RWST, minimize RWST outflow, and if RWST Lo-Lo level alarm received stop ECCS pumps prior to cavitation. Safety significance: failure to establish RWST makeup and minimize outflow accelerates depletion of RWST inventory to the point where ECCS pumps must be stopped. Loss of pumped injection coincident with loss of emergency recirculation leads to severe or extreme challenge to core cooling CSF. Measurable standard: (1) stop Containment Spray Pumps, (2) initiate RWST makeup, (3) reduce SI to one train, (4) if RWST Lo-Lo alarm received, stop running ECCS pumps taking suction from RWST prior to cavitation. Cues: SI required (RCS pressure, containment pressure), emergency recirculation not established despite attempts, RWST level decreasing, procedural cue to make up and minimize outflow.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0004 (load reduction) → S2.OP-AB.COND-0001 (vacuum pump trip) → S2.OP-AB.ROD-0003 (continuous rod insertion from RTD failure) → S2.OP-AB.RC-0001 (RCS leak) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI — manual SI required, CT#1; manual start 22 RHR, CT#2) → <span class="hi-exam">EOP-LOCA-1</span> (containment pressure >4 psig; possible CFST Purple Path on Thermal Shock — enter/exit FRTS-1, no actions) → <span class="hi-exam">EOP-LOCA-5</span> (22 RHR trips, no emergency recirculation; stop CS pumps, RWST makeup, reduce to one SI train, CT#3) → Scenario terminated when ECCS reduced to one train or ECCS pumps stopped on RWST Lo-Lo</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 ESG-1 | <a href="/salem-study-system/exam-pdfs/2022-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment Spray]], [[RHR]], [[CVCS]], [[Condenser Air Removal]], [[Control Rod Drive]], [[Pressurizer & PRT]], [[CCW]], [[AFW]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]], [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related exam: [[2022 NRC Operating Exam]]
