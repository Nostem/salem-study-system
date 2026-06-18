---
title: "2016 JPM Sim-e — TCAF a Total Loss of All Service Water"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — TCAF a Total Loss of All Service Water</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 076 A2.01 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power.<br>
21 charging pump is in service.<br>
23 charging pump is aligned for Normal operation IAW Section 4.1 of S2.OP-SO.CVC-0002, Charging Pump Operation.<br>
#2 SW Bay has been removed from service to isolate a leak in the bay IAW S2.OP-AB.SW-0003, Service Water Bay Leak.<br>
All #4 Service Water Bay pumps are in service.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Trip the Rx. 2. Stop all RCPs prior to or within 3 minutes of any RCP bearing temperature reaching 175°F or any other RCP trip criteria being met in S2.OP-AB.RCP-001. 3. Place 23 Charging pump in service. 4. Reduce operating CCW pumps to one.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">Diagnosis</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Recognize all SW pumps have tripped.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Enters S2.OP-AB.SW-0005, Loss of All Service Water directly, or responds IAW ARP for low service water header pressures.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TRIP the reactor, AND CONFIRM the Reactor Trip.</td>
<td style="padding:6px;color:#9ca3af;">Trips the Rx using either trip handle, and confirms the Rx trip.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP all RCPs.</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PBs for all RCPs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.SW-5 3.3</td>
<td style="padding:6px;color:#c8cdd5;">GO TO 2-EOP-TRIP-1, Reactor Trip or Safety Injection, AND CONTINUE with this procedure.</td>
<td style="padding:6px;color:#9ca3af;">Cue: You are to continue with S2.OP-AB.SW-0005 while other operators perform TRIP-1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the following valves to isolate letdown: 2CV3 (45 GPM ORIFICE); 2CV4 (75 GPM ORIFICE); 2CV5 (75 GPM ORIFICE).</td>
<td style="padding:6px;color:#9ca3af;">Shuts the open orifice isolation valve and ensures the remaining orifice isolation valves are shut.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.SW-5 3.5</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.SW-5 3.6</td>
<td style="padding:6px;color:#c8cdd5;">IF a Centrifugal Charging Pump is in service AND the 23 Charging Pump is IMMEDIATELY available to be placed in service, THEN: A. VERIFY all 21-24 RCP Seal Inlet Temperatures &lt;225°F; B. ENSURE 23 Charging Pump aligned for Normal Operation IAW S2.OP-SO.CVC-0002(Q); C. PLACE 23 Charging Pump in MANUAL.</td>
<td style="padding:6px;color:#9ca3af;">Determines a centrifugal charging pump is in service and 23 charging pump is immediately available; verifies seal inlet temps; ensures alignment; places in MANUAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.6.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE Charging Master Flow Controller in MANUAL.</td>
<td style="padding:6px;color:#9ca3af;">Places Charging Master Flow Controller in MANUAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.6.E *</span></td>
<td style="padding:6px;color:#c8cdd5;">SET 23 Charging Pump Speed Demand to 10-12%.</td>
<td style="padding:6px;color:#9ca3af;">Sets 23 Charging Pump Speed Demand to 10-12%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.6.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 23 Charging Pump AND immediately INCREASE Speed Demand to approximately 20% to couple pump.</td>
<td style="padding:6px;color:#9ca3af;">Starts 23 Charging Pump and immediately increases speed demand to ~20% to couple pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.SW-5 3.6.G–H</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST 23 Charging Pump Speed Demand to obtain desired flow. ENSURE Seal Injection Flow 6-12 gpm to each RCP, not to exceed 40 gpm total.</td>
<td style="padding:6px;color:#9ca3af;">Adjusts speed demand and verifies seal injection flow.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.6.I *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP 21 and 22 Centrifugal Charging Pumps.</td>
<td style="padding:6px;color:#9ca3af;">Stops 21 and 22 Centrifugal Charging Pumps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.SW-5 3.8</td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2CC131, RCP THERMAL BARRIER, in MANUAL.</td>
<td style="padding:6px;color:#9ca3af;">Places 2CC131, RCP THERMAL BARRIER, in MANUAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.SW-5 3.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE Component Cooling Pumps in MANUAL AND REDUCE the number of operating Component Cooling Water Pumps to one.</td>
<td style="padding:6px;color:#9ca3af;">Places all CCW Pumps in MANUAL AND stops all but one CCW Pump. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating element is <strong>diagnosis and procedure entry</strong>. With #2 SW Bay already isolated and the simulator inserting trips of 24, 25, and 26 SW pumps, the applicant must recognize that <strong>all four operating SW pumps have tripped</strong> (no available SW pumps remain) and either enter <strong>S2.OP-AB.SW-0005, Loss of All Service Water directly</strong>, or use the OHA B-13/B-14 ARP (S2.OP-AR.ZZ-0002) which routes through AB.SW-0001 and ultimately back to AB.SW-0005 (Step 3.8: "IF the Unit is NOT in a Service Water Header Outage, THEN GO TO S2.OP-AB.SW-0005"). The required AB.SW-0005 actions — <strong>trip the reactor, stop all RCPs, isolate letdown, swap to 23 charging pump, and reduce CCW pumps to one</strong> — are taken to limit heat input to the CCW system because there is no SW available to cool CCW.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.SW-0005 (Rev. 4) / S2.OP-AB.SW-0001 (Rev. 16) / S2.OP-AR.ZZ-0002 (Rev. 36) | Task: N1140380401 | K/A: 076 A2.01 — Service Water — Ability to (a) predict the impacts of total loss of SW and (b) use procedures to correct, control, or mitigate the consequences | Source: Bank | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[CCW]], [[CVCS]], [[RCPs]]
- Related procedures: [[AB.SW-0005 — Loss of All Service Water]], [[AB.SW-0001 — Loss of SW Header Pressure]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]], [[S2.OP-SO.CVC-0002 — Charging Pump Operation]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2016 NRC Operating Exam]]
