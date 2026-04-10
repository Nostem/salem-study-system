---
title: "2023 JPM IP-k — Perform a Radioactive Waste Gas Release"
category: exams
status: draft
aliases:
  - 2023 JPM IP-k
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-k — Perform a Radioactive Waste Gas Release</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 071 A1.03 (2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — 64 ft. Elevation, Unit 2 Auxiliary Building (RCA entry required)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Both Salem Units are operating at 100% power<br>
- 21 Waste Gas Decay Tank is in Standby at 90 psig<br>
- 22 Waste Gas Decay Tank is in Holdup at 15 psig<br>
- 23 Waste Gas Decay Tank is O/S at 15 psig<br>
- 24 Waste Gas Decay Tank is O/S at 15 psig<br>
- 2R41 Plant Vent radiation monitor is OPERABLE<br>
- Plant vent flow rate and sample flow rate monitors are OPERABLE<br><br>
<strong>Initiating Cue:</strong><br>
The CRS directs you to RELEASE 21 Waste Gas Decay Tank starting at Step 5.2.11 of S2.OP-SO.WG-0008, 21 Gas Decay Tank to Plant Vent.<br>
- Sections 5.1 and Steps 5.2.1 through 5.2.10 are complete.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has aligned the release path from 21 Waste Gas Decay Tank (WGDT) IAW step 5.2.11 of S2.OP-SO.WG-0008, released the radioactive gas from 21 WGDT IAW step 5.2.12 of S2.OP-SO.WG-0008, and upon REACHING 10 PSIG, terminates the release by locally closing the 2WG41 IAW step 5.2.14 of S2.OP-SO.WG-0008.</span>
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
<td style="padding:6px;color:#c8cdd5;">ENSURE 21 GDT is NOT in service</td>
<td style="padding:6px;color:#9ca3af;">Verifies 21 GDT is NOT in service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.B</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 21 GDT is NOT selected for "Standby"</td>
<td style="padding:6px;color:#9ca3af;">Verifies 21 GDT is NOT selected for STANDBY.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.C</td>
<td style="padding:6px;color:#c8cdd5;">RECORD 21 GDT "Initial Pressure" (PIS1036) on Attachment 3</td>
<td style="padding:6px;color:#9ca3af;">Records 21 GDT pressure (PIS1036) as 90 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TURN 2WG41 Waste Gas Vent Valve Flow Bias fully counterclockwise until indicator &lt;0%</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates turning the Flow Bias knob fully COUNTER-CLOCKWISE until indicator is less than 0%. Must set bias to &lt;0% before opening to latch and set the valve.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">POSITION 2WG41 Selector Switch to OPEN AND RELEASE to AUTO position (spring return)</td>
<td style="padding:6px;color:#9ca3af;">Simulates positioning 2WG41-SWT (local control switch at 104-2 panel) to OPEN, then releases to AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TURN 2WG41 Waste Gas Vent Valve Flow Bias clockwise until indicator >=100%</td>
<td style="padding:6px;color:#9ca3af;">Simulates turning 2WG41 flow bias CLOCKWISE until indicator reads >=100%. 2WG41 will not fully open until flow bias is adjusted to 100%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.D.4</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE with Unit 2 Control Room that 2WG41 has lost CLOSED indication AND audible alarm received</td>
<td style="padding:6px;color:#9ca3af;">Calls Control Room to verify 2WG41 has lost closed indication and audible alarm was received.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TURN 2WG41 Waste Gas Vent Valve Flow Bias fully counterclockwise until indicator &lt;0%</td>
<td style="padding:6px;color:#9ca3af;">Simulates turning 2WG41 flow bias COUNTER-CLOCKWISE until indicator reads &lt;0%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.D.6</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE with Unit 2 Control Room that 2WG41 has closed indication</td>
<td style="padding:6px;color:#9ca3af;">Calls Control Room to verify 2WG41 has CLOSED indication.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.D.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">POSITION 2WG41 Selector Switch to CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Simulates positioning 2WG41 selector switch to CLOSE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.E</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM Independent Verification of 2WG41 Flow Bias position, RECORD on Attachment 1, Section 2.0</td>
<td style="padding:6px;color:#9ca3af;">Requests another operator perform IV of the 2WG41 Waste Gas Vent Valve Flow Bias position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 21WG31, GDT INLET VALVE</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating valve COUNTER-CLOCKWISE to open 21WG31.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11.G *</span></td>
<td style="padding:6px;color:#c8cdd5;">Slowly OPEN 21WG34</td>
<td style="padding:6px;color:#9ca3af;">Simulates slowly rotating COUNTER-CLOCKWISE to open 21WG34.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11.H</td>
<td style="padding:6px;color:#c8cdd5;">RECORD IV of 21 GDT discharge valves 21WG31 and 21WG34 on Attachment 1, Section 3.0</td>
<td style="padding:6px;color:#9ca3af;">Requests IV of 21 GDT discharge valves prior to commencing release.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12.A *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">POSITION 2WG41 Selector Switch to OPEN AND RELEASE to AUTO (spring return)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates rotating selector switch to OPEN and then releasing to AUTO to commence the release.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12.B *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SLOWLY SET 2WG41 Waste Gas Vent Valve Flow Bias to <=100% (max release rate 32 SCFM)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates adjusting 2WG41 Waste Gas Vent Valve Flow Bias to <=100%, which corresponds to a maximum release rate of 32 SCFM.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12.C</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM IV of 2WG41 Flow Bias positioning on Attachment 1, Section 4.0</td>
<td style="padding:6px;color:#9ca3af;">Requests IV on 2WG41 flow bias position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12.D</td>
<td style="padding:6px;color:#c8cdd5;">RECORD In Progress Release Data on Attachment 2, Section 5.1</td>
<td style="padding:6px;color:#9ca3af;">Records data on Attachment 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13.B</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Meteorological Data in Attachment 2, Section 5.2 from SPDS screenshot</td>
<td style="padding:6px;color:#9ca3af;">Records MET Data from SPDS screenshot. If Met Monitor NOT OPERABLE, notify SM/CRS per UFSAR 7.7.2.12.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.14.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">TURN 2WG41 Flow Bias fully counter-clockwise until indicator is &lt;0%</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting Flow Bias fully COUNTER-CLOCKWISE until indicator is &lt;0% to secure the release.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.14.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2WG41-SWT in CLOSE position, AND ENSURE 2WG41 is CLOSED</td>
<td style="padding:6px;color:#9ca3af;">Simulates placing switch 2WG41-SWT in CLOSED position and verifies 2WG41 is CLOSED.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.14.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21WG34</td>
<td style="padding:6px;color:#9ca3af;">Simulates closing 21WG34 by turning valve in CLOCKWISE direction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.14.D</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Final Release Data in Attachment 2, Section 5.3</td>
<td style="padding:6px;color:#9ca3af;">Records final release data.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The latch-and-set sequence (Step 5.2.11.D) is the most complex portion — the applicant must correctly manipulate the 2WG41 Flow Bias and Selector Switch in the proper order (bias to &lt;0%, open to auto, bias to 100%, verify lost closed indication, bias back to &lt;0%, verify closed, then position selector to CLOSE). Then for the actual release (Step 5.2.12), the applicant must open 2WG41 to AUTO and set flow bias to <=100% (max 32 SCFM). Upon reaching 10 psig, the release is terminated by reducing flow bias to &lt;0%, closing 2WG41-SWT, and closing 21WG34.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.WG-0008 (R27) | Task: N0715070104 | K/A: 071 A1.03 — Ability to predict and/or monitor changes in parameters associated with operation of the Waste Gas Disposal System, including: Holdup tank pressure and level | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-ip-k.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Waste Gas]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]]
- Related exam: [[2023 NRC Operating Exam]]
