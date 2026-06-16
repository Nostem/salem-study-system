---
title: "2012 JPM IP-i — Locally Borate the RCS"
category: exams
status: draft
aliases:
  - 2012 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Locally Borate the RCS</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | APE 068 AA1.08 (4.2/4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnls 701-1A and 701-1B, El 122', near the Boric Acid Storage Tanks; 1CV175 Rapid Borate Stop Valve; Unit 1 CVC Chg Pmps FL &amp; PR Inst Pnl, Panel 216-1)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
• Unit 1 control room was evacuated due to a security event.<br>
• The immediate actions of S1.OP-AB.CR-0001, Control Room Evacuation were completed successfully.<br>
• 3 control rods remain withdrawn following the Rx trip.<br>
• 1CV55 is in local manual controlling charging flow at 90 gpm.<br>
• Total RCP seal injection flow is 30 gpm.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator.<br>
Perform emergency boration for the stuck control rods IAW Attachment 5, Step 10, of S1.OP-AB.CR-0001.<br>
Steps 1-9 are complete.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Locate panels 701-1A and 701-1B for 11 and 12CV160.<br>2. Simulate establishing boration through 1CV175.<br>3. Simulate adjusting charging flow to 105 gpm.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps &amp; Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.0</td>
<td style="padding:6px;color:#c8cdd5;">WHEN directed by the CRS, THEN: (Provide copy of S1.OP-AB.CR-0001, Attachment 5.)</td>
<td style="padding:6px;color:#9ca3af;">—</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.1</td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1A, El 122', near the Boric Acid Storage Tanks.</td>
<td style="padding:6px;color:#9ca3af;">Locates Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.2</td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the Air Supply Isolation Valve, 11CV160 A/S, IR SUPPLY FOR 11CV160.</td>
<td style="padding:6px;color:#9ca3af;">Locates and simulates closing the Supply Isolation Valve, 11CV160 A/S, IR SUPPLY FOR 11CV160.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.3</td>
<td style="padding:6px;color:#c8cdd5;">OPEN draincock for control air regulator for 11CV160.</td>
<td style="padding:6px;color:#9ca3af;">Simulates opening draincock for control air regulator for 11CV160.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.4</td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1B, El 122', near the Boric Acid Storage Tanks.</td>
<td style="padding:6px;color:#9ca3af;">Locates Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1B.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.5</td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the Air Supply Isolation Valve, 12CV160 A/S, AIR SUPPLY FOR 12CV160.</td>
<td style="padding:6px;color:#9ca3af;">Locates and simulates closing the Supply Isolation Valve, 12CV160 A/S, IR SUPPLY FOR 12CV160.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.6</td>
<td style="padding:6px;color:#c8cdd5;">OPEN draincock for control air regulator for 12CV160.</td>
<td style="padding:6px;color:#9ca3af;">Locates and simulates opening the draincock for control air regulator for 12CV160.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CV175, Rapid Borate Stop Valve.</td>
<td style="padding:6px;color:#9ca3af;">Locates and discusses opening 1CV175, Rapid Borate Stop Valve by disengaging clutch and rotating handwheel.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to 1CV55 and <span class="hi-exam">ADJUST the flow for 75 gpm above existing total flow for all RCP seal flows.</span></td>
<td style="padding:6px;color:#9ca3af;">Locates Unit 1 CVC Chg Pmps FL &amp; PR Inst Pnl, Panel 216-1. <span class="hi-exam">Determines charging flow must be raised to 105 gpm.</span> Adjusts 1CV55 air signal to raise charging flow.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">11.0</td>
<td style="padding:6px;color:#c8cdd5;">REQUEST NEO#1 to adjust 1CV73 to maintain flow to RCP seals between 6 and 10 gpm.</td>
<td style="padding:6px;color:#9ca3af;">—</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12.0</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY the CRS that rapid Boration has commenced.</td>
<td style="padding:6px;color:#9ca3af;">Cue if Required: If charging flow is raised to 165 gpm (75 gpm above total charging flow), then when CRS is notified, state PZR level is rising quicker than it should be, and to ensure charging flow is adjusted to 75 gpm &gt; Seal Injection flow. Adjusts charging flow to 105 gpm. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>Step 10.8</strong> — the charging flow adjustment. The applicant must recognize that boration flow is established by raising charging flow to <strong>75 gpm above existing total RCP seal injection flow</strong>, NOT 75 gpm above the existing charging flow. With total seal injection flow at 30 gpm, the target is <strong>105 gpm</strong> (30 + 75), not 165 gpm (90 charging + 75). The trap (built into the Step 12.0 cue) is raising charging flow to 165 gpm, which over-injects to the RCS and causes pressurizer level to rise too quickly. The earlier critical step (Step 10.7) is establishing the boration path by opening <strong>1CV175</strong>, the Rapid Borate Stop Valve, by disengaging its clutch and rotating the handwheel. Selecting the wrong charging-flow target (165 vs 105 gpm) or failing to open 1CV175 fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-AB.CR-0001 (Rev 17), Control Room Evacuation, Attachment 5, Step 10 | Task: N1130140504 | K/A: APE 068 AA1.08 — Ability to operate and/or monitor the following as they apply to the Control Room Evacuation (4.2/4.2) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[AB.CR-0001 — Control Room Evacuation]]
- Related tech specs: [[TS 3/4.1.1 — Boration Control]], [[TS 3/4.1.2 — Boration Systems]]
- Related exam: [[2012 NRC Operating Exam]]
