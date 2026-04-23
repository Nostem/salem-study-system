---
title: "2019 JPM RO-A1 — Determine Maximum Vent Time in EOP-FRCI-3"
category: exams
status: draft
aliases:
  - 2019 JPM RO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1 — Determine Maximum Vent Time in EOP-FRCI-3</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 has experienced a small break LOCA.<br>
- The crew has performed an RCS cooldown and depressurization in EOP-LOCA-2.<br>
- During the depressurization the crew experienced some complications and indications of upper head voiding are now present.<br>
- STA reports a valid CFST YELLOW path exists on Coolant Inventory.<br>
- The TSC recommends initiating EOP-FRCI-3, Response to Void in Reactor Vessel.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the extra NCO.<br>
- The crew has completed actions in EOP-FRCI-3 up to step 19.1 and has directed you to PERFORM Attachment 1 of EOP-FRCI-3 to determine the maximum venting time.<br>
- The following conditions exist in Unit 2 containment:<br>
&nbsp;&nbsp;- Containment temperature is 140 F<br>
&nbsp;&nbsp;- Containment hydrogen concentration is 1.8%<br>
&nbsp;&nbsp;- RCS pressure is 1200 psig<br>
- Round off to the nearest tenths when performing your calculations
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Correctly performs calculations IAW EOP-FRCI-3, Attachment 1.<br>2. Calculates Maximum Venting Time of 10.2 mins (9.2 - 11.2 mins acceptable band).</span>
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
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Record data from initial conditions (containment temp, H2 concentration, RCS pressure)</td>
<td style="padding:6px;color:#9ca3af;">Records provided data in steps 1.1 through 1.3</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Calculate containment absolute temperature (Tabs)</td>
<td style="padding:6px;color:#9ca3af;">Tabs = 140 + 460 = 600 R</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Calculate containment air volume (V) at STP</td>
<td style="padding:6px;color:#9ca3af;">V = 1.28E09 / 600 = 2.13E06 ft3 (2133333 ft3 acceptable with rounding)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Calculate maximum hydrogen vent volume (M)</td>
<td style="padding:6px;color:#9ca3af;">M = (3% - 1.8%) x 2.13E06 / 100% = 25560 ft3 (25500 to 25600 ft3 acceptable band)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.1</td>
<td style="padding:6px;color:#c8cdd5;">Record RCS pressure from step 1.3</td>
<td style="padding:6px;color:#9ca3af;">Records 1200 psig</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.2</td>
<td style="padding:6px;color:#c8cdd5;">Record calculated maximum vent volume (M) from step 3.3</td>
<td style="padding:6px;color:#9ca3af;">Records M = 25560 ft3</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine hydrogen vent flow rate from Figure 1 at 1200 psig</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using Figure 1, determines Hydrogen Flow Rate of 2500 cfm (+/- 100 cfm readability allowance)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculate maximum vent time (Tv)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Tv = 25560 / 2500 = 10.2 mins (+/- 1.0 mins; 9.2 - 11.2 mins acceptable)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 4.3 and 4.4 are the discriminating steps. The applicant must correctly read the Hydrogen Flow Rate from Figure 1 at 1200 psig RCS pressure (2500 cfm). The graph has readability challenges, so a +/- 100 cfm allowance is factored into the acceptable vent time band. The V calculation formula in this revision uses V = 1.28E09 / Tabs (differs from the 2022 version which uses V = 2.62E06 x Tfact). Due to rounding in intermediate steps, the acceptable vent time band is wide (9.2 - 11.2 mins). Rounding should only be applied to the nearest tenths at the final vent time calculation.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRCI-3 (Rev 30) | Task: N1150880502 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables | Source: New (Rev 01) | <a href="/salem-study-system/exam-pdfs/2019-jpm-ro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related EOPs: [[EOP-FRCI-3 — Response to Void in Reactor Vessel]], [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]]
- Related exam: [[2019 NRC Operating Exam]]
