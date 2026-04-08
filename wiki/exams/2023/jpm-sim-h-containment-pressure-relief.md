---
title: "2023 JPM Sim-h — Perform a Containment Pressure Relief"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Perform a Containment Pressure Relief</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A2.02 (3.0/3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Preparations to perform a containment pressure relief per Section 5.1 of S2.OP-SO.CBV-0002, Containment Pressure - Vacuum Relief System Operation, are complete.<br><br>
<strong>Initiating Cue:</strong><br>
- The CRS directs you to perform a containment pressure relief per Section 5.2 of S2.OP-SO.CBV-0002.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has placed containment pressure relief in service per step 5.2.3.B of S2.OP-SO.CBV-0002, and upon a high radiation alarm, manually closes 2VC5 and 2VC6 valves to isolate the radiological release from containment per step 5.2.5 of S2.OP-SO.CBV-0002 OR per Attachment 1 of S2.OP-AB.RAD-0001.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">Record Release Data on Attachment 2, Section 1.0</td>
<td style="padding:6px;color:#9ca3af;">Records Pressure Relief Start, Initial Containment Pressure, and initial readings on radiation monitors 2R41D (preferred) and 2R12A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.3.A</td>
<td style="padding:6px;color:#c8cdd5;">Monitor available radiation monitors 2R41D and 2R12A</td>
<td style="padding:6px;color:#9ca3af;">Sets up trend on Plant Computer or monitors Radiation Monitors on 2RP1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">If containment pressure <0.5 psig, OPEN 2VC6, 2VC5, and PRESSURE RELIEF DAMPER</td>
<td style="padding:6px;color:#9ca3af;">Confirms containment pressure < 0.5 psig. Depresses OPEN bezels for 2VC6, 2VC5, and PRESSURE RELIEF DAMPER on 2CC1 and verifies Red OPEN bezels are LIT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.4</td>
<td style="padding:6px;color:#c8cdd5;">Record time 2VC5 and 2VC6 are opened in Control Room Narrative Log</td>
<td style="padding:6px;color:#9ca3af;">Extra NCO will record the open time.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Upon high radiation alarm (OHA A-6 RMS HI RAD OR TRBL on 2R41D), manually CLOSE PRESSURE RELIEF DAMPER, 2VC6, and 2VC5</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses CLOSE bezel pushbuttons for PRESSURE RELIEF DAMPER, 2VC6, and 2VC5 and verifies the Green bezels are LIT. (Alternate path — automatic closures have been defeated; applicant must manually close to isolate the release.)</span></td>
</tr>
</table>

<div style="margin-top:14px;padding:10px;background:#0d1220;border-left:3px solid #60a5fa;border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">Alternate Procedural Path (S2.OP-AB.RAD-0001):</strong><br>
<span style="color:#c8cdd5;">If the applicant enters S2.OP-AB.RAD-0001 instead of using step 5.2.5 of S2.OP-SO.CBV-0002, the following actions are also acceptable:</span>
<table style="width:100%;font-size:11px;border-collapse:collapse;margin-top:8px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Action</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">Determine affected Radiation Monitor</td>
<td style="padding:6px;color:#9ca3af;">Determines 2R41D is the affected monitor.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">Is the alarm valid?</td>
<td style="padding:6px;color:#9ca3af;">Determines the alarm is VALID.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.3</td>
<td style="padding:6px;color:#c8cdd5;">Announce on Plant PA system</td>
<td style="padding:6px;color:#9ca3af;">Makes page announcement with affected monitor number, name, and location.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.4</td>
<td style="padding:6px;color:#c8cdd5;">Direct Shift Rad Pro to complete Station Status Checklist</td>
<td style="padding:6px;color:#9ca3af;">Notifies Rad Pro of actions.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.5</td>
<td style="padding:6px;color:#c8cdd5;">Notify SM/CRS to refer to ECG, ODCM, Tech Specs</td>
<td style="padding:6px;color:#9ca3af;">Notifies CRS of required actions.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.6</td>
<td style="padding:6px;color:#c8cdd5;">Initiate applicable attachment for 2R41D</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1 Step 10.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Ensure 2VC1, 2VC4, 2VC5, and 2VC6 are CLOSED</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE bezel pushbuttons for 2VC5 and 2VC6 and verifies Green bezels are LIT.</td>
</tr>
</table>
</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The alternate path begins when OHA A-6 (RMS HI RAD OR TRBL) alarms due to 2R41D high radiation during the containment pressure relief. The automatic isolation of the pressure relief dampers and 2VC5/2VC6 has been defeated by malfunctions — the applicant must recognize the alarm and manually close 2VC5 and 2VC6 (at minimum) to isolate the radiological release. This can be done via step 5.2.5 of S2.OP-SO.CBV-0002 or via S2.OP-AB.RAD-0001, Attachment 1, Step 10.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CBV-0002 (R18), S2.OP-AB.RAD-0001 (R30), S2.OP-AR.ZZ-0001 (R60) | Task: N0220080101 | System: 029 Containment Purge System | K/A: A2.02 — Ability to predict the impacts of Adverse environmental conditions affecting radioactive release on the Containment Purge System and use procedures to correct, control, or mitigate the consequences | Source: New | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]], [[S2.OP-AB.RAD-0001 — Abnormal Radiation]]
- Related systems: [[Containment Purge System]], [[Radiation Monitoring System]]
- Related exam: [[2023 NRC Operating Exam]]
