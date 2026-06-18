---
title: "2015 JPM Sim-h — TCAF Loss of RHR Cooling"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — TCAF Loss of RHR Cooling</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 025 AA1.03 (RO 4 / SRO 4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
• Reactor is shutdown.<br>
• 21 RHR loop is in service for shutdown cooling.<br>
• 22 RHR loop is aligned for ECCS.<br>
• 22 RHR pump breaker is racked down to check condition after scaffolding construction heavily impacted cubicle door and caused actuation of OC trip relay.<br>
• 21 RHR HX inlet temp is 329°F and stable.<br>
• RCS pressure is 321 psig and stable.<br>
• 22 and 23 RCPs are in service.<br>
• 21 and 22 AFW pumps in service while filling SGs.<br>
• 22 and 23 Charging pumps and both SI pumps are CIT.<br>
• The accumulators have been isolated.<br>
• There are no personnel in containment.<br><br>
<strong>Initiating Cue:</strong><br>
Maintain current conditions.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Feed SG(s) and throttle open MS10(s) as required to establish CET temperatures stable or lowering.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Recognizes loss of in-service RHR pump.</td>
<td style="padding:6px;color:#9ca3af;">Announces unexpected 21 RHR pump trip. Enters S2.OP-AB.RHR-0001, Loss of RHR.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">IF the RCS is vented to the Containment atmosphere with the Containment Equipment hatch OPEN AND at least two RCS loops are filled with associated SG's available, THEN CLOSE the vent path prior to Core Boil. (Refer to Attachment 4)</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS is not vented to containment.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Is RCS aligned for operation &lt;101 ft. elevation (Reduced Inventory)?</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS is not aligned for operation &lt;101 ft. elevation (Reduced Inventory).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.5</td>
<td style="padding:6px;color:#c8cdd5;">Is the loss of RHR due to a mechanical failure or loss of electrical power to the in-service RHR Pump?</td>
<td style="padding:6px;color:#9ca3af;">Cue: "Maintenance reports that the loss of 21 RHR pump is due to a loss of electrical power to pump." Goes to Step 3.50.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.50 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Is a heat sink available for Residual Heat Removal? (Component Cooling to RHR System; Service Water to Component Cooling System)</td>
<td style="padding:6px;color:#9ca3af;">Determines a heat sink is available for Residual Heat Removal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.51 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is an RHR loop available?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 22 RHR loop is not available, and no RHR loop is available, goes to step 3.31.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.31</td>
<td style="padding:6px;color:#c8cdd5;">CONTINUE.</td>
<td style="padding:6px;color:#9ca3af;">—</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3.32</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">INITIATE one of the alternate methods of decay heat removal (Att. 7 Hot Leg Injection; Att. 8 Cold Leg Injection; Att. 9 SG Reflux Cooling; Att. 10 Forced Flow Or Natural Circulation Cooldown; Att. 11 Cooling the RCS with Spent Fuel Pool).</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines correct attachment is Attachment 10 based on: RCS is intact, filled, and pressurized; CET's are &gt;200°F.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.10 1.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">FEED available Steam Generators to maintain wide range level &gt;77% using Auxiliary Feedwater System or Condensate System.</td>
<td style="padding:6px;color:#9ca3af;">Feeds available Steam Generators to maintain wide range level &gt;77% using Auxiliary Feedwater System. (All Steam generators are available.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.10 2.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">REMOVE reactor decay heat by performing one of the following: OPERATE the appropriate MS10s to maintain Core Exit Thermocouples stable or lowering. OR DRAIN Steam Generators as required to maintain level &lt;95% wide range.</td>
<td style="padding:6px;color:#9ca3af;">Removes reactor decay heat by operating the appropriate MS10s to maintain Core Exit Thermocouples stable or lowering. OR determines that the rate of fill of SGs is currently maintaining Core Exit Thermocouples stable or lowering.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The in-service <strong>21 RHR pump trips</strong> (loss of electrical power), and the applicant enters S2.OP-AB.RHR-0001, Loss of RHR. The discriminating determination is at <strong>step 3.51</strong>: even though a heat sink is available (step 3.50 — CCW to RHR, SW to CCW), <strong>no RHR loop is available</strong> because the 22 RHR loop is aligned for ECCS with its <strong>pump breaker racked down</strong>. This forces the path to step 3.31/3.32 to <strong>initiate an alternate method of decay heat removal</strong>. The applicant must select the correct attachment — <strong>Attachment 10, Forced Flow Or Natural Circulation Cooldown</strong> — based on the RCS being intact, filled, and pressurized with CETs &gt;200°F (rejecting feed-and-bleed Attachments 7/8 and reflux/SFP cooling 9/11). Per Attachment 10, the applicant feeds available SGs with AFW to &gt;77% WR level and throttles open the appropriate MS10s to establish Core Exit Thermocouple temperatures stable or lowering. Selecting the wrong decay-heat-removal attachment, or failing to establish a secondary heat sink (feed SGs / operate MS10s), fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.RHR-0001 (Rev 18) | Task: N1140300401 | K/A: APE025 AA1.01/AA1.03 — Ability to operate and/or monitor equipment to mitigate a loss of RHR system / shutdown cooling | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[AFW]], [[Main Steam]]
- Related procedures: [[AB.RHR-0001 — Loss of RHR]]
- Related exam: [[2015 NRC Operating Exam]]
