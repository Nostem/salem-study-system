---
title: "2022 JPM RO-A1 — Max Reactor Vessel Vent Time IAW EOP-FRCI-3"
category: exams
status: draft
aliases:
  - 2022 JPM RO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1 — Determine Maximum Reactor Vessel Vent Time</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 has experienced a small break LOCA.<br>
- The crew has performed an RCS cooldown and depressurization in EOP-LOCA-2.<br>
- During the depressurization the crew experienced some complications and indications of upper head voiding are now present.<br>
- STA reports a valid CFST YELLOW path exists on Coolant Inventory.<br>
- The TSC recommends initiating EOP-FRCI-3, Response to Void in Reactor Vessel.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the extra NCO.<br>
- The crew has completed actions in EOP-FRCI-3 up to step 17.3 and has directed you to PERFORM Attachment 1 of EOP-FRCI-3 to determine the maximum venting time.<br>
- The following conditions exist in Unit 2 containment:<br>
&nbsp;&nbsp;- Containment temperature is 140 F<br>
&nbsp;&nbsp;- Containment hydrogen concentration is 2.3%<br>
&nbsp;&nbsp;- RCS pressure is 1600 psig<br>
- During your calculations, ONLY perform "rounding" when determining the vent time to the nearest tenths.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Calculates Maximum Venting Time of 4.5 mins (4.2 - 4.7 mins acceptable band).</span>
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
<td style="padding:6px;color:#c8cdd5;">Calculate containment temperature standardization factor (Tfact)</td>
<td style="padding:6px;color:#9ca3af;">Tfact = 492/600 = 0.82</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Calculate containment air volume (V) at STP</td>
<td style="padding:6px;color:#9ca3af;">V = 2.62E06 x 0.82 = 2148400 ft3</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Calculate maximum vent volume (M)</td>
<td style="padding:6px;color:#9ca3af;">M = (3.0% - 2.3%) x 2148400 / 100% = 15038.8 ft3</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine hydrogen vent flow rate from Figure 1 at 1600 psig</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using Figure 1, determines Hydrogen Flow Rate of 3333 cfm (+/- 100 cfm readability allowance)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculate maximum vent time (Tv)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Tv = 15038.8 / 3333 = 4.5 mins (4.2 - 4.7 mins acceptable)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 4.3 is the discriminating step -- the applicant must correctly read the Hydrogen Flow Rate from Figure 1 at 1600 psig RCS pressure (3333 cfm). The graph has readability challenges, so a +/- 100 cfm allowance is factored into the acceptable vent time band. The final calculation in step 4.4 (Tv = M/F) is straightforward, but depends entirely on the correct flow rate from the graph. Rounding should only be applied at the final vent time calculation (to nearest tenths).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRCI-3 (Rev 40) | Task: N1150410501 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables | Source: Bank (Rev 02) | <a href="/salem-study-system/exam-pdfs/2022-jpm-ro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related EOPs: [[EOP-FRCI-3 — Response to Void in Reactor Vessel]]
- Related exam: [[2022 NRC Operating Exam]]
