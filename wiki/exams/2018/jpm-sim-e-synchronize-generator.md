---
title: "2018 JPM Sim-e — Synchronize the Main Generator"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Synchronize the Main Generator</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 045 A4.02 (2.7/2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 18 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 16% power starting up from a maintenance outage.<br>
- The crew is performing power ascension activities IAW S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load.<br>
- The main turbine is at 1800 rpm with generator excitation applied.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- The CRS has directed you to synchronize the Generator IAW S2.OP-SO.TRB-0001, Turbine-Generator Startup Operations, Section 4.5, Synchronizing the Generator.<br>
- All Prerequisites are completed SAT.<br>
- Step 4.5.1 IVs are completed SAT.<br>
- Synchronize the Generator starting at Step 4.5.2. The 500 KV 1-9 breaker will be closed first followed by the 500 KV 9-10 breaker.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Synchronizes the Generator to the electrical grid IAW S2.OP-SO.TRB-0001.</span>
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
<td style="padding:6px;color:#c8cdd5;">4.5.2</td>
<td style="padding:6px;color:#c8cdd5;">Ensure 500 KV BUS SECT 9-10 (30X) Breaker selected to 9-10 LOCAL</td>
<td style="padding:6px;color:#9ca3af;">Verifies 9-10 Breaker is selected to 9-10 LOCAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.5.3</td>
<td style="padding:6px;color:#c8cdd5;">Select No. 2 Unit Scope Transfer Switch to REGULAR or SPARE SCOPE</td>
<td style="padding:6px;color:#9ca3af;">Verifies REGULAR SCOPE is illuminated on 2RP6.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.5.4</td>
<td style="padding:6px;color:#c8cdd5;">Scope test — verify synchroscope and voltmeters respond</td>
<td style="padding:6px;color:#9ca3af;">Presses SCOPE TEST pushbutton on 500KV Breaker Sections 1-9 (32X). Verifies synchroscope hand at 12 o'clock. Verifies INCOM KV and RUN KV voltmeters move upscale. Releases SCOPE TEST PB.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.5.5</td>
<td style="padding:6px;color:#c8cdd5;">Verify MAIN GEN SYNC PERM BYPASS keylock switch in NORMAL</td>
<td style="padding:6px;color:#9ca3af;">Verifies MAIN GEN SYNC PERM BYPASS keylock switch is in NORMAL position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.5.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Select 1-9 Mimic Bus and 1-9 SYNCH POT ON</td>
<td style="padding:6px;color:#9ca3af;">Depresses 1-9 Mimic Bus PB and verifies yellow backlight AND console bezel for MIMIC BUS 1-9 INTERLOCK CLOSE SELECTION is illuminated. Depresses 1-9 SYNCH POT ON and verifies bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.5.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjust INCOM KV to 3-5 KV greater than RUN KV using Voltage Regulator</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines INCOM KV is NOT 3-5 KV greater than RUN KV (as-found: INCOM KV ~499, RUN KV ~498). At EXCITATION, VOLTAGE REGULATOR, VREG CNTRL SETPT ADJ, depresses RAISE SETPT until INCOM KV is 3-5 KV greater than RUN KV (at least 501 KV to meet Synch Permissive).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.5.12.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjust turbine speed until synchroscope rotates SLOWLY in FAST direction (~1 revolution every 25-30 seconds)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines turbine speed adjustment required. Adjusts SETTER 1-2 rpm above reference (as-found: SETTER = 1801, raise to 1802-1803). Selects SETTER GO (illuminates green). Verifies ACTUAL and REFERENCE speed adjust to SETTER speed. Synchroscope rotates slowly in FAST direction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.5.12.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close 500KV 1-9 (32X) breaker when synchroscope is 1-2 minutes before 12 o'clock</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 500 KV GROUP BUS BREAKER Section 1-9 (32X) when synchroscope is 1-2 minutes before 12 o'clock. Verifies 1-9 CLOSE PB is illuminated. Verifies load is rising (MW indicator on 2RP3, MW Recorder on 2RP5, or HMI panel).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.5.12.4</td>
<td style="padding:6px;color:#c8cdd5;">Verify generator load rises to 40-60 MW within 15 seconds</td>
<td style="padding:6px;color:#9ca3af;">Verifies generator load rises to 40-60 MW within 15 seconds. If not, raises SETTER &lt;= 4% above REFERENCE and selects GO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.5.12.5</td>
<td style="padding:6px;color:#c8cdd5;">Select SYNCH POT OFF for 1-9 breaker</td>
<td style="padding:6px;color:#9ca3af;">Depresses SYNCH POT OFF PB and verifies bezel illuminates.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Two discriminating elements in this JPM. First (Step 4.5.8): the applicant must recognize that INCOMING voltage is NOT 3-5 KV above RUNNING voltage (as-found both ~498-499 KV) and use the Voltage Regulator RAISE SETPT to increase INCOM KV to at least 501 KV — this satisfies one of the Synch Permissive requirements. Second (Step 4.5.12.1): the turbine is initially rotating too slowly (SETTER = 1801 rpm, producing slow FAST rotation). The applicant must increase the SETTER by 1-2 rpm increments and select SETTER GO to achieve a synchroscope rotation of approximately one revolution every 25-30 seconds in the FAST direction. Failing to satisfy either condition will prevent the MAIN GEN SYNC PERMISSIVE light from illuminating.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.TRB-0001 (Rev 47) | Task: N0450040101 | K/A: 045 A4.02 — Ability to manually operate and/or monitor in the control room: Main Turbine Generator (2.7/2.6) | Source: Modified | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Turbine]], [[500KV]]
- Related procedures: [[S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam: [[2018 NRC Operating Exam]]
