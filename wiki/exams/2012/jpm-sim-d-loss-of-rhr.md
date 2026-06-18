---
title: "2012 JPM Sim-d — TCAF a Loss of RHR"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — TCAF a Loss of RHR</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 025 AA1.09 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 25 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is in MODE 4.<br>
RCS pressure is 315 psig and stable.<br>
RHR HX inlet temp is 289 degrees with a 10 °F/hr cooldown in progress.<br>
21 RHR loop is in service in shutdown cooling mode.<br>
22 RHR loop is aligned for ECCS.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Monitor the cooldown and report when 21 RHR HX inlet temp reaches 285°F.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Place 22 RHR loop in service in Shutdown Cooling (SDC) mode by:<br>A. Aligning RHR valves to SDC lineup. (Step 3.52 &amp; Att. 2)<br>B. Starting 22 RHR pump. (Step 3.52 &amp; Att. 2)<br>C. Establishing stable RHR flow of 1800-3000 gpm. (Step 3.68)<br>D. Establishing RCS temperature stable or lowering. (Step 3.68)</span>
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
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">21 RHR pump trips. Recognize there is no RHR cooling and enter S2.OP-AB.RHR-0001, Loss of RHR.</td>
<td style="padding:6px;color:#9ca3af;">Responds to trip of 21 RHR pump by depressing the STOP PB; recognizes no RHR cooling; enters AB.RHR-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1 / 3.2 / 3.3</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1 Continuous Action Summary. Is RCS vented to containment? Is RCS aligned for operation &lt;101 ft. elevation (Reduced Inventory)?</td>
<td style="padding:6px;color:#9ca3af;">Initiates CAS; determines RCS is not vented and N/As; determines RCS not at reduced inventory and goes to step 3.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3.5 / 3.6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is the loss of RHR due to a mechanical failure or loss of electrical power to the in-service RHR pump? GO TO Step 3.50.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines the loss of RHR is due to a mechanical failure (pump trip) and goes to step 3.50. (Answering NO sends the operator down the system-problem path, which is incorrect.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.50 / 3.51</td>
<td style="padding:6px;color:#c8cdd5;">Is a heat sink available for RHR (CCW / SW)? Is an RHR Loop available?</td>
<td style="padding:6px;color:#9ca3af;">Determines heat sink available since SW and CCW are unaffected; determines 22 RHR loop is available (lined up in ECCS mode).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.52</td>
<td style="padding:6px;color:#c8cdd5;">PLACE the alternate RHR Loop in service. (22 loop aligned for ECCS → PERFORM Attachment 2, Aligning RHR Loop From ECCS To Shutdown Cooling.)</td>
<td style="padding:6px;color:#9ca3af;">Selects Attachment 2 and performs the ECCS-to-SDC alignment.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att.2 2.0.A/B</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 22 RHR loop aligned for ECCS injection; PLACE 22RH29 RHR PUMP MINIMUM FLOW VALVE in AUTO.</td>
<td style="padding:6px;color:#9ca3af;">Determines 22 RHR loop aligned for ECCS injection; determines 22RH29 is in AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 2.0.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">Locally OPEN 22RH12 RHR HX BYPASS ISOLATION VALVE, 22RH17 RHR LETDOWN ISOLATION VALVE, and 22RH18-NS RHR LETDOWN ISOLATION VALVE AIR SUPPLY.</td>
<td style="padding:6px;color:#9ca3af;">Directs a local operator to open 22RH12, 22RH17, and 22RH18-NS. (Critical because failure to open these local valves prevents placing 22 RHR loop in service in SDC — no HX bypass or 22RH18 flow control.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 2.0.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">In the Control Room: CLOSE 22RH18 RHR PUMP FLOW CONTROL VALVE, 21RH18 RHR PUMP FLOW CONTROL VALVE, 2RH20 RHR HX BYPASS, 21CC16 RHR HX COMPONENT COOL OUT VALVE; OPEN 22CC16 RHR HX COMPONENT COOL OUT VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PBs for 22RH18, 21RH18, 2RH20, 21CC16 and verifies closed; depresses OPEN PB for 22CC16 and verifies open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 2.0.E *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 22 RHR PUMP.</td>
<td style="padding:6px;color:#9ca3af;">Depresses the START PB for 22 RHR pump and verifies the pump started.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 2.0.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPERATE 22RH18 and 2RH20 to maintain stable RHR flow to the Reactor Coolant System.</td>
<td style="padding:6px;color:#9ca3af;">Adjusts 22RH18 RHR PUMP FLOW CONTROL VALVE and 2RH20 RHR HX BYPASS to establish stable RHR pump flow. Returns to step 3.52.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.53 / 3.54 / 3.55</td>
<td style="padding:6px;color:#c8cdd5;">Is RHR in service? Is a heat sink available? Is RHR flow stable?</td>
<td style="padding:6px;color:#9ca3af;">Determines RHR in service; heat sink available; checks RHR flow and determines flow is stable; goes to step 3.68.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.68 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is RHR System normal as indicated by ALL of: RHR Pumps — at least one running; RCS level — &gt;97.5 ft. elevation AND stable/rising; RHR flow — stable between 1800 and 3000 gpm; RCS temperature — stable or lowering.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Verifies 22 RHR pump running and RCS full; adds 21SJ49 and 22SJ49 RHR DISCH TO COLD LEGS flow to get 1800-3000 gpm; uses P-250 to verify RCS temperature stable or lowering, opening 22RH18 / closing 2RH20 if temperature is not lowering. JPM complete.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The in-service <strong>21 RHR pump trips</strong> in MODE 4, losing shutdown cooling. The early diagnostic discriminator is AB.RHR-0001 step 3.5: the applicant must determine the loss is due to a <strong>mechanical failure / loss of electrical power to the in-service RHR pump</strong> (the tripped pump) and branch to step 3.50 — answering NO here routes the operator down the system-problem path, which is incorrect. The body of the task is placing the alternate <strong>22 RHR loop</strong> (aligned for ECCS) into Shutdown Cooling via Attachment 2: the three local valve openings (22RH12, 22RH17, 22RH18-NS) form a single critical task because the loop cannot be placed in SDC without them; then the control-room valve realignment (close 22RH18/21RH18/2RH20/21CC16, open 22CC16), <strong>starting the 22 RHR pump</strong>, and throttling 22RH18/2RH20 to establish stable flow. Final acceptance (step 3.68) requires <strong>RHR flow stable between 1800 and 3000 gpm</strong> and <strong>RCS temperature stable or lowering</strong>.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.RHR-0001 (Rev 17) | Task: N1140300401 | K/A: APE 025 AA1.09 — Loss of Residual Heat Removal System: Ability to operate and/or monitor RHR pumps and valves (3.2/3.1) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[CCW]]
- Related procedures: [[AB.RHR-0001 — Loss of RHR]]
- Related exam: [[2012 NRC Operating Exam]]
