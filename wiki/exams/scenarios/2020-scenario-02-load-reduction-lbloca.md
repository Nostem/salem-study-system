---
title: "2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation"
category: exams
status: draft
aliases:
  - 2020 Scenario 2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 3 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-211: 100% power, EOL; 21 Charging Pump I/S. The following equipment is out of service: 23 Charging Pump and 21 RHR Pump are C/T for maintenance.<br><br>
<strong>Turnover:</strong> The crew is directed to reduce power to 89% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using boration, control rods and turbine load control in preparation for Main Turbine valve testing.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Planned Load Reduction to 89% at 10%/hour</li>
<li>23 SG Pressure Channel 3 fails low (TS only)</li>
<li><span class="hi">24 Vacuum Pump trips</span></li>
<li><span class="hi">RC Loop 24 Cold Leg RTD fails high (TS)</span></li>
<li><span class="hi-exam">RCS Leak escalating to LBLOCA</span></li>
<li><span class="hi-exam">22 RHR Pump fails to start on SEC signal</span></li>
<li><span class="hi-exam">Loss of Emergency Recirculation capability (22 RHR Pump trips)</span></li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Event Sequence & Expected Responses</summary>
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
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power reduction IAW S2.OP-IO.ZZ-0004, Section 4.3. RO briefs boration plan, initiates boration IAW S2.OP-SO.CVC-0006. PO initiates turbine load reduction IAW S2.OP-SO.TRB-0002. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">23 SG Pressure Channel 3 fails low</td>
<td style="padding:6px;color:#9ca3af;">PO reports OHA alarms G-17 LOOP 23 STM LN DP LO and G-33 STM LN PRESS LO. PO reports bistables lit on 2RP4 for STM LINE DIFFERENTIAL LOOP 23 and LOW STEAMLINE PRESSURE LOOP 23. Crew reviews ARP, determines no impact to plant operations. CRS directs removal from service IAW S2.OP-SO.RPS-0004. CRS enters TS 3.3.2.1.b Action 19 (72 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">24 Vacuum Pump trips</td>
<td style="padding:6px;color:#9ca3af;">PO reports unexpected trip. CRS enters AB.COND-0001, Loss of Condenser Vacuum. PO initiates Att 1 CAS, dispatches operator for Att 2 local checks (no abnormal conditions found). PO starts all available vacuum pumps. 22 Vacuum Pump trips after start; 25AR25 fails to open on 25 Vacuum Pump start — PO manually opens 25AR25. Condenser backpressure improves.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">24 Loop Cold Leg RTD fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected continuous rod insertion with no turbine runback in progress. RO places rod control in Manual — rod motion stops. CRS enters AB.ROD-0003, Continuous Rod Motion. RO reports 24 RC Loop Tavg Channel failed high. RO places MFC in Manual, adjusts charging flow. RO defeats 24 loop DT and Tavg on 2CC2, selects operable channel. Restores rods to Auto after ensuring Tavg within 1.5 degrees of Tref. CRS enters TS 3.3.1.1 Action 6 (72 hours) and TS 3.3.2.1.b Action 19 (72 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RCS Leak escalating to LBLOCA — Auto SI fails</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports OHA E-28 PZR HTR ON PRESS LO, console alarms PZR LEVEL LO and CONT PRESS HI. RO reports rapidly lowering PZR level and RCS pressure. CRS enters AB.RC-0001 — directs Trip Rx, Confirm Rx Trip, Initiate SI. Immediately after trip, RCS leak escalates to LBLOCA. Auto SI fails on both trains. RO manually actuates SI on one train, verifies other train actuated [CT#1]. RO continues TRIP-1 immediate actions.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RHR Pump fails to start on SEC signal</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports SEC loading for 2B Vital Bus is NOT complete. 22 RHR pump failed to start (21 RHR is C/T). PO blocks and resets 2B SEC. RO starts 22 RHR pump [CT#2]. Containment pressure exceeds 15 psig — Phase B and Spray auto-initiate. MSLI auto-initiates. Crew transitions to EOP-LOCA-1 based on containment pressure >4 psig.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RHR Pump trips — Loss of Emergency Recirculation</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports 22 RHR Pump tripped (overcurrent relay flag dropped). No RHR pumps available (21 RHR C/T, 22 RHR tripped). CRS transitions to EOP-LOCA-5. CRS determines no CS pumps required (Table C). RO resets Spray actuation, stops 21 and 22 CS pumps, closes 21 and 22 CS2s [CT#3 Part 1]. RO initiates RWST makeup IAW S2.OP-SO.CVC-0006 [CT#3 Part 2]. RO stops all but one charging pump, runs only one SI pump [CT#3 Part 3]. PO initiates RCS cooldown at 100 F/hr using intact MS10s.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-2):</strong> Manually actuate SI before transition out of EOP-TRIP-1. Safety significance: with a LBLOCA in progress and auto SI failed on both trains, failure to manually initiate SI results in loss of all emergency core cooling. The crew must recognize the absence of SI actuation (no SEC loading, no ECCS pump starts, rising containment pressure) and manually actuate.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-5):</strong> Manually start one low head ECCS pump before transition out of EOP-TRIP-1. Safety significance: with 21 RHR C/T and 22 RHR failed to start on SEC signal, the crew has no low-head ECCS injection. The crew must block and reset 2B SEC, then manually start 22 RHR pump to establish low-head injection flow for core cooling during the LBLOCA.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3 (CT-29):</strong> Makeup to the RWST and minimize RWST outflow before ECCS pumps cavitate. This CT is satisfied when the following series of actions are completed to conserve RWST inventory: (1) Stop Containment Spray pumps, (2) Initiate RWST makeup, (3) Reduce SI to one train. Safety significance: with no RHR pumps available for cold leg recirculation transfer, continued RWST drawdown will result in ECCS pump cavitation and loss of all pumped safety injection.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.COND-0001 (vacuum pump trip) → S2.OP-AB.ROD-0003 (RTD fail, continuous rod insertion) → S2.OP-AB.RC-0001 (RCS leak) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI — manual SI required, manual RHR pump start) → <span class="hi-exam">EOP-LOCA-1</span> (containment pressure >4 psig, RCS leak identified) → <span class="hi-exam">EOP-LOCA-5</span> (no RHR pumps available — loss of emergency recirculation) → Scenario terminated after crew stops all but one charging pump</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 19-01 NRC ESG-2 | <a href="/salem-study-system/exam-pdfs/2020-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[RHR]], [[Containment Spray]], [[CVCS]], [[Condenser Air Removal]], [[Steam Generator & Blowdown]], [[RPS/SSPS]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]], [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related exam: [[2020 NRC Operating Exam]]
