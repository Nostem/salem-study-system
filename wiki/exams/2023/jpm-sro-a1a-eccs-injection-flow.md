---
title: "2023 JPM SRO-A1.a — Determine Minimum ECCS Injection Flow"
category: exams
status: draft
aliases:
  - 2023 JPM SRO-A1.a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1.a — Determine Minimum ECCS Injection Flow</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.1.7 (4.4/4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- At Time 0500, Salem Unit 2 was manually tripped and Safety Injection automatically actuated as a result of a LOCA<br>
- At Time 0600, the RWST Low Level Alarm actuates and the crew transitions to 2-EOP-LOCA-3<br>
- The crew is unable to transfer to Cold Leg Recirculation and transitions to 2-EOP-LOCA-5, Loss of Emergency Recirculation, due to NO recirculation capability<br>
- ECCS has been reduced to one train with the following ECCS Pump flow rates:<br>
&nbsp;&nbsp;&nbsp;&nbsp;- 21 SI Pump – 160 gpm<br>
&nbsp;&nbsp;&nbsp;&nbsp;- 22 Charging Pump – 220 gpm<br>
&nbsp;&nbsp;&nbsp;&nbsp;- BOTH RHR Pumps were stopped<br><br>
<strong>Initiating Cue:</strong><br>
You are the CRS at Step 16.1 of 2-EOP-LOCA-5.<br>
DETERMINE the following:<br>
1. At Time 0640 hours, what is the MINIMUM SI flow required from Figure 1?<br>
2. Which ECCS Pumps can be stopped, if any, to reduce injection flow as close as possible to minimum flow determined from Item 1 (assume that ECCS Pump flows remain stable).
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has determined that the minimum flow per Figure 1 is 290 gpm (320 – 280 gpm acceptable band), and NONE of the running ECCS Pumps can be stopped.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">At Time 0640 hours, what is the MINIMUM SI flow required from Figure 1?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines that 100 minutes has elapsed since the Reactor Trip and using Figure 1 determines that 290 gpm (320-280 gpm) is the minimum ECCS flow injection.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Which ECCS Pumps can be stopped, if any, to reduce injection flow as close as possible to minimum flow?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines that NONE of the ECCS Pumps can be stopped because neither an SI nor a Charging Pump alone can supply the minimum required flow injection of 290 gpm. Therefore, 21 SI and 22 Charging are required to remain in service.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Both steps are discriminating — the applicant must correctly calculate elapsed time (0500 trip to 0640 = 100 minutes), read Figure 1 to determine 290 gpm minimum flow, and then recognize that neither the 21 SI Pump (160 gpm) nor the 22 Charging Pump (220 gpm) alone meets the 290 gpm requirement, so NONE can be stopped.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-5 (R41) | Task: N1150680502 | K/A: G2.1.7 — Ability to evaluate plant performance and make operational judgements based on operating characteristics, reactor behavior, and instrument interpretation | Source: Mod | <a href="/salem-study-system/exam-pdfs/2023-jpm-sro-a1a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Emergency Core Cooling Systems]]
- Related EOPs: [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam: [[2023 NRC Operating Exam]]
