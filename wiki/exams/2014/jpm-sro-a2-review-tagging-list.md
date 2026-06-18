---
title: "2014 JPM SRO-A2 — Review a Tagging List for Correct Blocking Points"
category: exams
status: draft
aliases:
  - 2014 JPM SRO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A2 — Review a Tagging List for Correct Blocking Points</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.2.13 (RO 4.1 / SRO 4.3) | Alternate Path</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 35 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. Unit 2 is at 100% power.<br>
2. A small leak has developed on an instrument connection for 21 SI Pump. The leak location is just upstream of 21SJ92, SI PUMP DISCH PRESS TAP.<br>
3. No other ECCS-related technical specification action statements are in effect.<br><br>
<strong>Initiating Cue:</strong><br>
You are an extra SRO on shift. A newly licensed NCO has asked you to review this Tagging List for your input. You are NOT the Approving Supervisor. If there is any enhancement or correction required to WCD, record it on your Tear-Off Sheet.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Identify improper blocking points of:<br>
&nbsp;&nbsp;a. 2SJ30 which should be 21SJ33<br>
&nbsp;&nbsp;b. 21SJ64 check valve as boundary, should be 21SJ65<br>
&nbsp;&nbsp;c. 21 and 22SJ113 (or 2SJ114) not included in WCD.</span>
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
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Refers to OP-AA-109 Rev. 2, Safety Tagging Program and OP-AA-109-115 Rev. 7, Safety Tagging Operations, as necessary.</td>
<td style="padding:6px;color:#9ca3af;">Refers to the tagging program / operations procedures if requested.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 (1) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Review tagging request against P&ID blocking points — 2SJ30 listed as a blocking point.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2SJ30, RWST to SI Pump Stop Valve, is listed as a blocking point. Closing 2SJ30 would render both 21 and 22 SI Pumps inoperable. The proper blocking point should be 21SJ33 instead of 2SJ30.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 (2) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SI pump Recirculation Line not isolated from a potential energy source.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Check valves are NOT relied upon for personnel protection. Isolation valve 21SJ65 should be tagged in the closed position.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 (3) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ECCS cross-connect line from pump suction to 21SJ113 and 22SJ113 not tagged.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21/22SJ113 (or 2SJ114) are not tagged. These valves are on a different print (drawing 205334 Sheet 1) not provided; the candidate may request it or state the valves from memory.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 (4) *</span></td>
<td style="padding:6px;color:#c8cdd5;">Returns Tagging Request to WCC, with changes requested.</td>
<td style="padding:6px;color:#9ca3af;">Returns Tagging Request with changes requested. Terminate JPM when tear-off sheet, procedures, and drawings are returned.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an alternate-path review JPM: the tagging list handed to the SRO contains three errors that must be caught. (1) <strong>2SJ30</strong> (RWST to SI Pump Stop Valve) is used as a blocking point, but closing it would render <strong>both 21 and 22 SI Pumps inoperable</strong> — the correct boundary is <strong>21SJ33</strong>. (2) The 21 SI pump recirculation line relies on a <strong>check valve (21SJ64)</strong>, but check valves are NOT relied upon for personnel protection — the isolation valve <strong>21SJ65</strong> must be tagged closed. (3) The ECCS cross-connect line (21/22SJ113, or 2SJ114) is on a different print and is <strong>not tagged</strong> at all. The SRO must identify all three and return the request to WCC with corrections; missing any of the three fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: OP-AA-109 (Rev 2) Safety Tagging Program, OP-AA-109-115 (Rev 7) Safety Tagging Operations, P&IDs 205334-2 (Rev 55), 203061-1 (Rev 34), 205334-1 (Rev 60) | Task: 1220050302 | K/A: 2.2.13 — Knowledge of tagging and clearance procedures (4.3) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[OP-AA-109-115 — Equipment Tagging]]
- Related exam: [[2014 NRC Operating Exam]]
