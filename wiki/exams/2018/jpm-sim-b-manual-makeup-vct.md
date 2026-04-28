---
title: "2018 JPM Sim-b — Perform Manual Makeup of the VCT"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Perform Manual Makeup of the VCT</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 004 A4.04 (3.2/3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- 100% power, MOL. RCS boron concentration is 900 ppm.<br>
- The crew has entered S2.OP-AB.CVC-0001, Loss of Charging, due to VCT level channel 2LT112 failing high.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to PERFORM a manual makeup of the VCT to RESTORE VCT level to 53% IAW S2.OP-SO.CVC-0006, Boron Concentration Control, Section 5.2, Manual Makeup Mode.<br>
- All prerequisites are complete with no issues.<br>
- P&Ls have NOT been reviewed.<br>
- Boric Acid Storage Tank boron concentration is 6700 ppm.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Initiates manual makeup to VCT and stops the makeup when directed.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">P&Ls</td>
<td style="padding:6px;color:#c8cdd5;">Review Precautions and Limitations 3.1 thru 3.22</td>
<td style="padding:6px;color:#9ca3af;">Operator reviews and initials all P&Ls.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">Determine Boric Acid flow setpoint from Figure 100A</td>
<td style="padding:6px;color:#9ca3af;">Using Figure 100A from S2.RE-RA.ZZ-0012 for 62 gpm Primary Water flow with BAST at 6700 ppm, determines setpoint between 9-11 gpm. If calculated: 9.62 gpm (900 ppm RCS / 6700 ppm BAST).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Makeup Control in STOP, place 2CV179 and 2CV172 in MANUAL/CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Presses Makeup Control Mode Select STOP pushbutton and verifies bezel illuminates. Depresses 2CV179 MANUAL PB until bezel illuminates, then CLOSE PB. Note: when selected to MANUAL, 2CV179 will initially go full open — this is expected. Depresses 2CV172 MANUAL PB until bezel illuminates, then CLOSE PB.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.5</td>
<td style="padding:6px;color:#c8cdd5;">Align blender outlet flowpath (2CV185 or 2CV181)</td>
<td style="padding:6px;color:#9ca3af;">Selects one flowpath by depressing MANUAL PB then OPEN PB for 2CV185 (preferred — charging pump suction) or 2CV181.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.7</td>
<td style="padding:6px;color:#c8cdd5;">Start Primary Water pump and Boric Acid pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses MANUAL PB for selected PW pump, then START PB. Depresses MANUAL PB for selected BAT pump, then FAST START PB.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.8</td>
<td style="padding:6px;color:#c8cdd5;">Adjust Boric Acid flow on FI110A to value from Step 5.2.1</td>
<td style="padding:6px;color:#9ca3af;">Adjusts Boric Acid flow using 2CV172 OPEN/CLOSE PBs to match setpoint (9-11 gpm).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Manually ADJUST 2CV179 setpoint to 62 gpm (or as calculated) to maintain required flow</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjusts Primary Water flow on FI111A to 62 gpm (acceptable range 60-64 gpm) by depressing 2CV179 OPEN PB to raise or CLOSE PB to lower setpoint.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12</td>
<td style="padding:6px;color:#c8cdd5;">Secure makeup — close 2CV179, 2CV172, and blender outlet valve</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PBs for 2CV179, 2CV172, and whichever of 2CV185 or 2CV181 was opened. Stops Primary Water pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.13 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place selected Boric Acid pump in SLOW speed and place system to automatic makeup mode</td>
<td style="padding:6px;color:#9ca3af;">Places selected Boric Acid pump in SLOW speed and verifies.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating element is the boric acid flow setpoint determination (Step 5.2.1). The applicant must use the correct figure (Figure 100A for 62 gpm PW flow at normal BAST concentration) — NOT Figure 100C (wrong boron concentration of 9000 ppm) or Figure 105 (temperature correction, N/A at 100% power). Additionally, the applicant must recognize that 2CV179 will initially go full open when placed in MANUAL and must then close it before proceeding.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CVC-0006 (Rev 25) | Task: 0040130101 | K/A: 004 A4.04 — Ability to manually operate and/or monitor in the control room: CVCS (3.2/3.6) | Source: Bank | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[S2.OP-SO.CVC-0006 — Boron Concentration Control]], [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2018 NRC Operating Exam]]
