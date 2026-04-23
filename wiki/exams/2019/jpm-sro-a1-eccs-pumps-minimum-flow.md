---
title: "2019 JPM SRO-A1 — Determine Which ECCS Pumps Can Be Stopped"
category: exams
status: draft
aliases:
  - 2019 JPM SRO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1 — Determine Which ECCS Pumps Can Be Stopped</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.1.7 (4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- At 0500 Salem 2 reactor was manually tripped and Safety Injection automatically actuated as a result of a small break LOCA.<br>
- 21 RHR pump was C/T for maintenance and 22 RHR pump tripped while in 2-EOP-LOCA-1.<br>
- The crew has transitioned to 2-EOP-LOCA-5 due to no recirculation capability.<br>
- The crew is performing the major action steps (minimum SI flow for decay heat removal) of 2-EOP-LOCA-5.<br>
- The following ECCS pumps are running:<br>
&nbsp;&nbsp;- 21 SI pump with indicated flow of 420 gpm<br>
&nbsp;&nbsp;- 22 Charging pump with indicated flow of 360 gpm<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Unit 2 CRS at Step 19.2 of 2-EOP-LOCA-5.<br>
- DETERMINE the following:<br>
&nbsp;&nbsp;1. At time 0550 hours, what is the minimum SI flow required from Figure A (attached)?<br>
&nbsp;&nbsp;2. Which ECCS pumps can be stopped (if any) to reduce injection flow as close as possible to minimum flow from Figure A (assume that ECCS pump flows remain stable)?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Min flow injection of 390 gpm (+/- 10 gpm).<br>2. Stops 22 Charging pump.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using Figure A, determine minimum SI flow at 50 minutes after trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Time after trip = 0550 - 0500 = 50 minutes. From Figure A (Minimum ECCS Flow Versus Time After Trip), minimum SI flow is 390 gpm (+/- 10 gpm).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine which ECCS pumps can be stopped</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SI pump (420 gpm) must remain in service — it alone exceeds the 390 gpm minimum. 22 Charging pump (360 gpm) can be stopped — it alone does NOT meet the 390 gpm minimum, and the 21 SI pump alone provides sufficient flow.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The applicant must first calculate time after trip (0550 - 0500 = 50 minutes), then read Figure A to determine 390 gpm minimum. The critical determination is which pump to keep and which to stop: 21 SI pump at 420 gpm exceeds the 390 gpm minimum alone, so it must stay running. 22 Charging pump at 360 gpm is below the minimum by itself and therefore can be stopped. Compare with the similar 2023 SRO-A1.a JPM where NEITHER pump could be stopped (160 gpm + 220 gpm = 380 gpm, but neither alone meets the 290 gpm minimum at 100 minutes).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-5 (Rev 31) | Task: 1150680502 | K/A: G2.1.7 — Ability to evaluate plant performance and make operational judgments based on operating characteristics, reactor behavior, and instrument interpretation | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[RHR]]
- Related EOPs: [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam: [[2019 NRC Operating Exam]]
