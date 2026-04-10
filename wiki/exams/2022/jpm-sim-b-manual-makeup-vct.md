---
title: "2022 JPM Sim-b — Perform Manual Makeup to VCT"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Perform Manual Makeup to VCT</span>
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
- All prerequisites are complete.<br>
- Boric Acid Storage Tank boron concentration is 6700 ppm.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Initiates manual makeup to VCT and stops the makeup when informed that VCT level is at 53%.</span>
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
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine Boric Acid Flow Setpoint from S2.RE-RA.ZZ-0012</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Uses Figure 100A for 62 gpm Primary Water Flow with BAST concentration at 6700 ppm. Graph yields ~10 gpm; calculation yields 9.6 gpm. Acceptable range: 9-11 gpm.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">Reset COUNT A on Makeup Flow Registers to zero</td>
<td style="padding:6px;color:#9ca3af;">Resets COUNT A for Boric Acid and Primary Water flow IAW Exhibit 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Press Makeup Control Mode Select STOP pushbutton</td>
<td style="padding:6px;color:#9ca3af;">Presses Makeup Control Mode Select STOP pushbutton and verifies bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place 2CV179 (Primary Water Flow) in MANUAL and CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2CV179 MANUAL PB until bezel illuminates. Note: when selected to manual, 2CV179 will initially go full open (expected). Depresses 2CV179 CLOSE PB until bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place 2CV172 (Boric Acid Flow) in MANUAL and CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2CV172 MANUAL PB until bezel illuminates. Depresses 2CV172 CLOSE PB until bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Align outlet of Boric Acid Blender — OPEN 2CV185 or 2CV181</td>
<td style="padding:6px;color:#9ca3af;">Selects one flowpath alignment by depressing the MANUAL PB, then the OPEN PB for 2CV185 (preferred — to charging pump suction) or 2CV181.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">START a Primary Water Pump and PLACE a Boric Acid Pump in MANUAL/FAST START</td>
<td style="padding:6px;color:#9ca3af;">Depresses MANUAL PB for selected PW pump, depresses START PB. Depresses MANUAL PB for selected BAT pump, depresses FAST START PB.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Adjust 2CV172 flow (FI110A) to setpoint from Step 5.2.1</td>
<td style="padding:6px;color:#9ca3af;">Adjusts Boric Acid Flow on FI110A to the value recorded in Step 5.2.1 by depressing 2CV172 OPEN/CLOSE PBs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Adjust 2CV179 setpoint to 62 gpm on FI111A</td>
<td style="padding:6px;color:#9ca3af;">Adjusts Primary Water flow on FI111A to 62 gpm (acceptable range 60-64 gpm) by depressing 2CV179 OPEN/CLOSE PBs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12 *</span></td>
<td style="padding:6px;color:#c8cdd5;">When VCT level at 53%: CLOSE 2CV179, 2CV172, and 2CV185/2CV181; STOP Primary Water Pump; place Boric Acid Pump in SLOW speed</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PBs for 2CV179, 2CV172, and the makeup flowpath valve. Depresses STOP PB for Primary Water Pump. Places selected Boric Acid Pump in SLOW speed.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.2.1 is the discriminating step. The applicant must correctly determine the Boric Acid flow setpoint using Figure 100A from S2.RE-RA.ZZ-0012 (not Figure 100C, which is for 9000 ppm boron). With 900 ppm RCS boron and 6700 ppm BAST concentration at 62 gpm Primary Water flow, the correct setpoint is approximately 9.6 gpm (acceptable 9-11 gpm). Using the wrong figure or the existing console setpoint without verification would result in an incorrect makeup composition.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CVC-0006 (Rev 25), S2.RE-RA.ZZ-0012 (Rev 225) | Task: 0040130101 | K/A: 004 A4.04 — Ability to manually operate and/or monitor in the control room: CVCS (3.2/3.6) | Safety Fn: 2 | Source: Bank | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-SO.CVC-0006 — Boron Concentration Control]], [[AB.CVC-0001 — Loss of Charging]]
- Related systems: [[CVCS]]
- Related exam: [[2022 NRC Operating Exam]]
