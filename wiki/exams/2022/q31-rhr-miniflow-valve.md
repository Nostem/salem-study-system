---
title: "2022 Q31 — RHR HX Outlet / Bypass Valve Failure on Loss of VIB"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q31
  - 2022-Q31
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q31 — RHR HX Outlet / Bypass Valve Failure on Loss of VIB</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">005 K3.01 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Salem Unit 2 is in MODE 4.<br>
• 21 RHR loop is in Shutdown Cooling.<br>
• 22 RHR loop is aligned for ECCS injection.<br>
• 21RH18, RHR HX Outlet Valve, and 2RH20, RHR HX Bypass Valve, are being throttled to maintain RHR flow at 3000 gpm.<br>
• A loss of the 2A 115V Vital Instrument Bus occurs.<br>
<br>
Which ONE of the following describes the impact to the RHR loop in service and the RCS temperature?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21RH18 will CLOSE; 2RH20 will remain as-is; RCS temperature will rise.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 21RH18 will CLOSE; 2RH20 will OPEN; RCS temperature will rise.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 21RH18 will OPEN; 2RH20 will remain as-is; RCS temperature will lower.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21RH18 will OPEN; 2RH20 will OPEN; RCS temperature will lower.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#x25B6; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#x2713; C. Correct.</strong> Per S2.OP-AB.115-0001, a loss of 2A 115V Vital Instrument Bus will cause the 21RH18 to fail open. 2RH20 will remain as-is and will only fail open when there is a loss of the 2D 115V Vital Instrument Bus. Failed open 21RH18 will result in an increase in flow through the RHR HX and RCS temperature lowering.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#x2717; A.</strong> Incorrect. 21RH18 fails open on a loss of 2A VIB and the 2RH20 fails open on a loss of 2D VIB. Since only 2A VIB was lost, the 21RH18 will open and the 2RH20 will remain as-is. RCS temperature will lower due to 21RH18 failing open. Plausible because the operator may incorrectly determine how the valve fails on loss of power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#x2717; B.</strong> Incorrect. Same reason as Answer A with the exception that the 2RH20 will fail open only when a loss of 2D VIB. Plausible because the operator may incorrectly determine how the valve fails on loss of power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#x2717; D.</strong> Incorrect. The 2RH20 will only fail open on a loss of the 2D VIB. 21RH18 failing open will result in the RCS temperature lowering. Plausible if the operator believes that both valves will fail open on loss of the 2A VIB.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05RHR000-19, S2.OP-AB.115-0001 | LO: NOS05RHR000-19, Objective 4 — Describe how the following components impact the Residual Heat Removal System during normal and abnormal conditions: (e) Air Operated Valves: RH18 &amp; RH20 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[115V AC]]
- Related procedures: [[S2.OP-AB.115-0001 — Loss of 2A 115V Vital Instrument Bus]]
- Related exam: [[2022 NRC Written Exam]]
