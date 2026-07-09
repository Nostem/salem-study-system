---
title: "2016 JPM SRO-A1-1 — Review CFCU Operability Surveillance"
category: exams
status: draft
aliases:
  - 2016 JPM SRO-A1-1
  - 2016 JPM SRO-A1.a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1-1 — Review CFCU Operability Surveillance</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (RO 3.9 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 12 minutes<br><br>
<strong>Initial Conditions:</strong><br>
21 CFCU was returned from corrective maintenance. S2.OP-ST.CBV-0003, Containment Systems - Containment Cooling was performed for the Operability Retest.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to review the surveillance for completeness and accuracy IAW Step 5.3.4.<br><br>
If any discrepancies are identified, note them and any actions that you would take on Attachment 8, Section 1.0, Comments.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Identify that the Minimum Flow Rate recorded on Attachment 1, Section 3.0, for 87 psid is incorrectly recorded as 1592. Identify the correct Minimum Flow Rate should be 1638.<br>
2. Identify that the actual Cooling Water Flow Rate (1625) is below the Minimum Flow Rate required as shown on Attachment 1 and Exhibit 1, and the surveillance is UNSAT vs SAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">Provide completed S2.OP-ST.CBV-0003 surveillance.</td>
<td style="padding:6px;color:#9ca3af;">Reviews procedure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies that the Minimum Flow Rate recorded on Attachment 1, 21 CFCU Data Sheet, Section 3.0, for 87 psid is incorrectly recorded as 1592.</span> (This was due to operator performing ST rounding down as opposed to rounding up IAW P&amp;L 3.4.)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies correct value for Minimum Flow Required as 1638.</span><br>Cue: IF candidate only determines flow is wrong, THEN ask candidate to determine correct flow.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies that the actual Cooling Water Flow Rate of 1625 gpm is below the Minimum Flow Rate of 1638 as shown on Exhibit 1 and the ST is UNSAT.</span></td>
<td style="padding:6px;color:#9ca3af;">When candidate turns in JPM, ensure they have provided correct flow as per Cue above, then state JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is the application of <strong>P&amp;L 3.4</strong>: when measured SW header DP falls between two values in Exhibit 1, the operator must select the minimum flow for the next <em>HIGHER</em> DP value (round UP, not down). Recorded DP of 87 psid lies between Exhibit 1 values — the surveillance reviewer rounded DOWN to obtain 1592 gpm minimum (which would make 1625 gpm SAT). The correct application rounds UP to the next higher DP increment, yielding <strong>1638 gpm</strong> minimum required. Actual flow of 1625 gpm &lt; 1638 gpm → surveillance is UNSAT and 21 CFCU is INOPERABLE. This is the same P&amp;L 3.4 rounding trap tested in 2018 Sim-f, 2019 Sim-f, and 2023 Sim-f — but from the SRO review perspective rather than the RO performance perspective.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CBV-0003 (Rev. 19) | Task: N1230300302 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sro-a1a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]]
- Related tech specs: [[TS 3.6 — Containment]]
- Related exam: [[2016 NRC Operating Exam]]
