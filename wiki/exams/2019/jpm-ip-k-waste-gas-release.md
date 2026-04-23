---
title: "2019 JPM IP-k — Conduct an Authorized Waste Gas Release"
category: exams
status: draft
aliases:
  - 2019 JPM IP-k
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-k — Conduct an Authorized Waste Gas Release</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant (RCA) | RO/SRO | 071 A4.26 (3.1/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — Unit 2 Auxiliary Building, Panel 104-2 (RCA entry required)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 25 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Both Salem Units are operating at 100% power.<br>
- 21 Waste Gas Decay Tank is in Standby at 15 psig.<br>
- 22 Waste Gas Decay Tank is in Holdup at 90 psig.<br>
- 23 Waste Gas Decay Tank is O/S at 15 psig.<br>
- 24 Waste Gas Decay Tank is O/S at 15 psig.<br>
- 2R41 Plant Vent radiation monitor is Operable.<br>
- Plant vent flow rate and sample flow rate monitors are Operable.<br><br>
<strong>Initiating Cue:</strong><br>
- CRS directs you to PERFORM a release of 22 Waste Gas Decay Tank IAW S2.OP-SO.WG-0009, Discharge of 22 Gas Decay Tank to Plant Vent, starting at Step 5.2.11.<br>
- Section 5.1 and Steps 5.2.1 through 5.2.10 are complete.<br>
- You have the Tag Release for 22WG31.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Performs a Radiological Waste Gas release IAW S2.OP-SO.WG-0009.<br>2. Terminates the Waste Gas release as directed by procedure.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.A</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 22 GDT is NOT in service</td>
<td style="padding:6px;color:#9ca3af;">Verifies that 22 WGDT is NOT in service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.B</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 22 GDT is NOT selected for "Standby"</td>
<td style="padding:6px;color:#9ca3af;">Verifies 22 GDT is NOT selected for Standby.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.C</td>
<td style="padding:6px;color:#c8cdd5;">RECORD 22 GDT "Initial Pressure" (PIS2037) on Attachment 3</td>
<td style="padding:6px;color:#9ca3af;">Records 22 GDT pressure as 90 psig from PIS2037.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TURN 2WG41 Waste Gas Vent Valve Flow Bias fully counterclockwise until indicator &lt;0% (NOTE: 2HIC-14 must be set to &lt;0% or 2WG41 will NOT latch)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates turning Flow Bias knob fully COUNTER-CLOCKWISE until indicator is &lt;0%. Must set bias to &lt;0% before opening to latch and set the valve.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">POSITION 2WG41 Selector Switch to OPEN AND RELEASE to AUTO position (spring return)</td>
<td style="padding:6px;color:#9ca3af;">Simulates positioning selector switch to OPEN, then releases to AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TURN 2WG41 Waste Gas Vent Valve Flow Bias clockwise until indicator >= 100%</td>
<td style="padding:6px;color:#9ca3af;">Simulates turning Flow Bias CLOCKWISE until indicator reads >= 100%. 2WG41 will not fully open until flow bias is 100%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.D.4</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE with Unit 2 Control Room that 2WG41 has lost CLOSED indication AND audible alarm received</td>
<td style="padding:6px;color:#9ca3af;">Calls Control Room to verify 2WG41 has lost closed indication and audible alarm received.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TURN 2WG41 Waste Gas Vent Valve Flow Bias fully counterclockwise until indicator &lt;0%</td>
<td style="padding:6px;color:#9ca3af;">Simulates turning Flow Bias fully COUNTER-CLOCKWISE until indicator &lt;0%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.D.6</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE with Unit 2 Control Room that 2WG41 has CLOSED indication</td>
<td style="padding:6px;color:#9ca3af;">Calls Control Room to verify 2WG41 has CLOSED indication.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">POSITION 2WG41 Selector Switch to CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Simulates positioning 2WG41 selector switch to CLOSE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.E</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM IV of 2WG41 Flow Bias position, RECORD on Attachment 1, Section 2.0</td>
<td style="padding:6px;color:#9ca3af;">Requests IV on 2WG41 Waste Gas Vent Valve Flow Bias position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 22WG31</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating valve counter-clockwise to open 22WG31.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.G *</span></td>
<td style="padding:6px;color:#c8cdd5;">Slowly OPEN 22WG34</td>
<td style="padding:6px;color:#9ca3af;">Simulates slowly rotating counter-clockwise to open 22WG34.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.H</td>
<td style="padding:6px;color:#c8cdd5;">RECORD IV of 22 GDT discharge valves 22WG31 and 22WG34 on Attachment 1, Section 3.0, prior to commencing 22 GDT release</td>
<td style="padding:6px;color:#9ca3af;">Requests IV of 22 GDT discharge valves prior to commencing release.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12.A *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">POSITION 2WG41 Selector Switch to OPEN AND RELEASE to AUTO (spring return) — commence release</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates positioning 2WG41 selector switch to OPEN and releasing to AUTO to commence the release.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12.B *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SLOWLY SET 2WG41 Waste Gas Vent Valve Flow Bias to <= 100%</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates adjusting 2WG41 Flow Bias to <= 100%. Records release data on Attachment 2, Section 5.1. 2WG38 pressure on 2PL8678 reads 7.8 psig.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13.A</td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE 22 GDT Average Release Rate every 10 minutes on Attachment 3</td>
<td style="padding:6px;color:#9ca3af;">Operator reads step and determines no action at this time until 10 minutes has elapsed. Continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13.B</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Meteorological Data in Attachment 2, Section 5.2</td>
<td style="padding:6px;color:#9ca3af;">Records MET Data: Wind Speed 5.8 MPH at El 33 ft, Wind Direction 290 degrees at El 33 ft, Delta T (33 ft - 33 ft) = 0 degrees C.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13.D</td>
<td style="padding:6px;color:#c8cdd5;">IF pressure downstream of 2WG38 is >8.0 psig OR 2WG41 CLOSES, THEN TERMINATE release</td>
<td style="padding:6px;color:#9ca3af;">Operator reads step and determines none of these conditions are present. Marks N/A and continues.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Term *</span></td>
<td style="padding:6px;color:#c8cdd5;">22 WGDT pressure reaches 10 psig — TURN 2WG41 Flow Bias fully counterclockwise until indicator <= 0%</td>
<td style="padding:6px;color:#9ca3af;">Operator turns 2WG41 Flow Bias fully counter-clockwise until indicator reads 0%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Term *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2WG41-SWT to CLOSED position</td>
<td style="padding:6px;color:#9ca3af;">Operator places 2WG41-SWT to the closed position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Term *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 22WG34</td>
<td style="padding:6px;color:#9ca3af;">Operator closes 22WG34.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The latch-and-set sequence (Step 5.2.11.D) is the most complex portion — the applicant must correctly manipulate 2WG41 Flow Bias and Selector Switch in the proper order (bias to &lt;0%, open to auto, bias to 100%, verify lost closed indication, bias back to &lt;0%, verify closed, then position selector to CLOSE). For the actual release (Step 5.2.12), the applicant opens 2WG41 to AUTO and sets flow bias to <= 100%. Upon reaching 10 psig tank pressure, the release is terminated by reducing flow bias to &lt;0%, closing 2WG41-SWT, and closing 22WG34. This is procedurally identical to the 2023 JPM IP-k except for the tank number (22 GDT vs 21 GDT) and the associated procedure (S2.OP-SO.WG-0009 vs S2.OP-SO.WG-0008).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.WG-0009 (R29) | Task: N0715070104 | K/A: 071 A4.26 — Ability to manually operate and/or monitor in the control room: Waste gas release termination controls | Source: Bank | <a href="/salem-study-system/exam-pdfs/2019-jpm-ip-k.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Waste Gas]]
- Related procedures: [[S2.OP-SO.WG-0009 — Discharge of 22 Gas Decay Tank to Plant Vent]]
- Related exam: [[2019 NRC Operating Exam]]
