---
title: "2019 JPM SRO-A3 — Determine Technical Specification Action for Inoperable Component"
category: exams
status: draft
aliases:
  - 2019 JPM SRO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A3 — Determine Technical Specification Action for Inoperable Component</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.2.40 (4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem 1 is at 100% power.<br>
- 12 Charging pump is in service.<br>
- 1B EDG is CIT for scheduled maintenance. TS 3.8.1.1 action b was entered with 60 hours remaining of the LCO.<br>
- S1.OP-SO.DG-0005, Preparation for Removing a Diesel Generator from Service, was reviewed by the CRS prior to CIT the 1B EDG.<br><br>
At 0700 hours:<br>
- 12 Charging pump trips.<br>
- Crew responds to the event and enters S1.OP-AB.CVC-0001 and starts 13 Charging pump and restores letdown and PZR level.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Unit 1 CRS.<br>
Evaluate the impact to Technical Specifications and DETERMINE the following:<br>
1. What LCO action(s) are applicable at 0700 hours?<br>
2. At 1100 hours you're notified that 12 Charging pump troubleshooting is still ongoing and 1B EDG will need 6 hours to restore from maintenance. What action(s) are required and by what times?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determines TS 3.8.1.1 action b.2 (4 hours) and 3.5.2.a action a (72 hours) are applicable.<br>2. At 1100 hours, be in Mode 3 at 1700 hours and Mode 5 at 2300 hours the next day.</span>
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
<td style="padding:6px;color:#c8cdd5;">1.0</td>
<td style="padding:6px;color:#c8cdd5;">Review S1.OP-SO.DG-0005 to identify redundant required features for 1B EDG</td>
<td style="padding:6px;color:#9ca3af;">CRS reviews procedure to determine what components are redundant required features powered from the 1B EDG bus.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine applicable LCOs at 0700 hours</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator determines the following Tech Spec LCOs are applicable: (1) TS 3.5.2.a Action a (72 hours) for 12 Charging pump being inoperable, and (2) TS 3.8.1.1 Action b.2 (4 hours) for 1B EDG and redundant component (12 Charging pump) inoperable.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine required actions at 1100 hours</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SRO determines that at 1100 hours the Unit must be in Mode 3 at 1700 hours and Mode 5 at 2300 hours the next day (Mode 3 in next 6 hours and Mode 5 within the following 30 hours).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The applicant must recognize that the 12 Charging pump is a redundant required feature supported by the 1B EDG (per S1.OP-SO.DG-0005). When 12 Charging pump trips while the 1B EDG is already CIT, TS 3.8.1.1 action b.2 applies — 4 hours to restore the inoperable EDG OR the redundant required feature, otherwise shutdown per TS 3.0.3 (Mode 3 in 6 hours, Mode 5 in the following 30 hours). Separately, TS 3.5.2.a action a gives 72 hours to restore one ECCS subsystem (charging). At 1100 hours, 4 hours have elapsed since 0700 — neither the EDG nor the charging pump will be restored in time, so the shutdown actions begin immediately: Mode 3 by 1700 and Mode 5 by 2300 the next day. TS 3.0.3 is NOT appropriate because specific action statements (b.2) exist for this condition.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-SO.DG-0005 (Rev 9), Salem Unit 1 Tech Specs | Task: 112670302 | K/A: G2.2.40 — Ability to apply Technical Specifications for a system (SRO Only) | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[ECCS]], [[CVCS]]
- Related procedures: [[S1.OP-SO.DG-0005 — EDG Operability Determination]], [[AB.CVC-0001 — Loss of Charging]]
- Related tech specs: [[TS 3/4.8 — Electrical]], [[TS 3/4.5 — ECCS]]
- Related exam: [[2019 NRC Operating Exam]]
