---
title: "2023 Scenario 1 — Load Reduction / LBLOCA"
category: exams
status: draft
aliases:
  - 2023 Scenario 1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Load Reduction / LBLOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 is at 100% power BOL<br><br>
<strong>Turnover:</strong> The crew is directed to reduce power to 89% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using boration, control rods and turbine load control in preparation for Main Turbine Valve testing.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Planned Load Reduction to 89% at 10%/hour</li>
<li><span class="hi">24 Vacuum Pump trips</span></li>
<li><span class="hi">2N41 Power Range Channel Fails High (TS)</span></li>
<li>RCS Leak — 20 gpm (TS)</li>
<li>Large Break LOCA (leak worsens to 350 gpm)</li>
<li>Auto SI fails to actuate on both trains</li>
<li>#2 ECAC Fails to Start on SEC Signal</li>
<li>Two Phase A valves (2CV116 and 284) fail to close</li>
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
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power reduction. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates turbine load reduction IAW S2.OP-SO.TRB-0002 — adjust ramp rate to 10%/hr, set to 89%, select GO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">24 Vacuum Pump trips</td>
<td style="padding:6px;color:#9ca3af;">PO reports trip. CRS enters S2.OP-AB.COND-0001, Loss of Condenser Vacuum. PO initiates Att 1 CAS, dispatches operator for Att 2 local checks. PO starts 22 and 25 vacuum pumps — 22 trips after start, 25AR25 fails to open. Backpressure stabilizes below trip setpoint.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">2N41 Power Range Channel fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports rods stepping in, no runback. RO places rod control in Manual. CRS enters S2.OP-AB.NIS-0001, NIS Malfunction. CRS directs removal of 2N41 from service IAW S2.OP-SO.RPS-0001 (place in Tripped Condition). CRS evaluates TS 3.3.1.1 — one PR channel inoperable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">RCS Leak — 20 gpm inside containment</td>
<td style="padding:6px;color:#9ca3af;">RO reports 2R11A containment radiation rising, PZR level lowering, RCS pressure lowering. CRS enters S2.OP-AB.RC-0001, RCS Leak. RO determines leak rate. RO swaps to centrifugal charging pump. CRS evaluates TS 3.4.7.2 for identified/unidentified leakage.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Large Break LOCA — leak worsens to 350 gpm</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports leak exceeds makeup capability. CRS implements Att 1 CAS — Trip the reactor. RO manually trips reactor, verifies trip. CRS enters EOP-TRIP-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Auto SI fails to actuate on both trains</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO manually actuates SI on one train, verifies other train actuated. Continues EOP-TRIP-1 immediate actions: backs up turbine trip, verifies 4KV vital buses energized, verifies SI initiated.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">#2 ECAC fails to start on SEC signal</td>
<td style="padding:6px;color:#9ca3af;">PO reports #2 ECAC failed. PO blocks and resets 2C SEC. RO starts #2 ECAC. PO throttles AFW flow. RO reports containment pressure >15 psig — Phase B and Spray auto-initiated. MSLI auto-initiated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Two Phase A valves (2CV116, 284) fail to close</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 2CV116 and 284 NOT in required position. CRS directs manual closure. At least one valve on each penetration must be closed before transitioning out of TRIP-1. (Critical Task #1)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-11):</strong> Close containment isolation valves such that at least one valve is closed on each Phase A penetration before transition out of TRIP-1. Safety significance: preserves containment boundary to minimize fission product release following LOCA.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-36):</strong> Transfer to cold leg recirculation before RWST Lo-Lo level (1.2 feet) is reached or ECCS pump cavitation. Includes time-critical operator actions: (1) Close 2SJ69 within 3.7 min of RWST Lo Level, (2) Stop 22 CS pump within 5.5 min, (3) ECCS pumps verified in recirculation within 11.2 min. Safety significance: failure to transfer before RWST empties results in loss of all pumped safety injection and containment spray.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.COND-0001 (vacuum pump trip) → S2.OP-AB.NIS-0001 (PR channel fail) → S2.OP-AB.RC-0001 (RCS leak) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI) → <span class="hi-exam">EOP-LOCA-1</span> (RCS leak identified, SI termination criteria, RWST Lo Level) → EOP-FRTS-1 (possible Purple path on Thermal Shock — enter/exit, no actions) → <span class="hi-exam">EOP-LOCA-3</span> (transfer to cold leg recirculation) → Scenario terminated after ECCS aligned to recirculation</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 ESG-1 | <a href="/salem-study-system/exam-pdfs/2023-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Reactor Coolant System]], [[Emergency Core Cooling Systems]], [[Containment Systems]], [[Containment Spray]], [[Instrumentation and Controls]], [[Feedwater and Condensate]], [[Auxiliary Feedwater]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related procedures: [[AB.RC-0001 — Reactor Coolant System Leak]], [[AB.CHEM-0001 — Secondary Chemistry Abnormality]]
- Related exam: [[2023 NRC Operating Exam]]
