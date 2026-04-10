---
title: "2023 Q51 — SW122 Loss of Air / RHR Cooldown Rate"
category: exams
status: draft
aliases:
  - 2023 Q51
  - 2023-Q51
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q51 — SW122 Loss of Air / RHR Cooldown Rate</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G1 076 K3.05 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is in MODE 4<br>
• 21 RHR Pump is in service providing shutdown cooling through 21 RHR HX<br>
• RCS pressure is 300 psig<br>
• 21RH18, RHR HX Flow Cont. Valve, and 2RH20, RHR HX Bypass Valve, are being throttled to maintain a RCS cooldown rate of 5&#176;F per hour<br><br>
<strong>Then:</strong><br>
• Instrument air supply line to the actuator of 21SW122, SW Inlet Control Valve, to CCW HX, severs<br><br>
Assuming NO operator action, which of the following completes both statements?<br><br>
1. RCS cooldown rate will <strong><span class="blank">(1)</span></strong>.<br>
2. The 21SW122 <strong><span class="blank">(2)</span></strong> be manually operated.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">(1)</span> rise <span class="blank">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">(1)</span> rise <span class="blank">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">(1)</span> lower <span class="blank">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">(1)</span> lower <span class="blank">(2)</span> can NOT</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 21SW122 fails open on loss of air (fails closed on loss of 125VDC power). When the 21SW122 opens, SW flow will rise through the CCW HX causing CCW temperature to lower and therefore the outlet temperature of 21 RHR HX to lower raising the cooldown rate. Per S2.OP-AB.CA-0001, the 21/22SW122 can be manually operated.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Plausible because the operator may incorrectly recall if this valve can be manually operated from the field since not all AOVs can be manually operated in the field.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Plausible because the question is asking about the cooldown rate and the operator may confuse the concept that a lower temperature means a higher cooldown rate.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Plausible because the question is asking about the cooldown rate and the operator may confuse the concept that a lower temperature means a higher cooldown rate.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05SW0NUC-13, S2.OP-AB.CA-0001 (R22) | Source: New | Cognitive: Comprehension/Analysis<br>K/A: 076 K3.05 — Knowledge of the effect that a loss or malfunction of the Service Water System will have on the following systems or system parameters: RHRS</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[CCW]], [[RHR]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]]
- Related exam: [[2023 NRC Written Exam]]
