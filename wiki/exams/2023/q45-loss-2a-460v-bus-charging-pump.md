---
title: "2023 Q45 — Loss of 2A 460V Bus / Charging Pump"
category: exams
status: draft
reference: no
aliases:
  - 2023 Q45
  - 2023-Q45
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q45 — Loss of 2A 460V Bus / Charging Pump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G1 062 A2.25 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• 23 Charging Pump is in service<br>
• 22 PZR Backup Heaters are ON<br>
• A Overcurrent fault on the 2A 460V Motor Control Center (MCC) causes the 4160V feeder breaker 2A4O to trip open, de-energizing the 2A 460V and 230V MCCs<br><br>
Per S2.OP-AB.460-0001, Loss of 2A 460 V Bus, which of the following describes the effect on plant operations and the required action(s)?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Loss of 2B1 125 VDC Battery Charger; place 2B2 125 VDC Battery Charger in service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Loss of charging flow; start a centrifugal charging pump and restore PZR level.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Loss of all IRPI indications; transfer to emergency power source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Loss of 22 PZR Backup Heaters; re-energize from emergency power bus.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 23 charging pump is supplied from the 2A 460V bus. An overcurrent condition on the 2A 460V MCC/bus will cause the breakers associated on the 2A 460 and 230V MCCs to trip open on overcurrent and de-energize the 2A 460V bus. This will result in loss of 23 charging pump and letdown isolation when the 23 charging pump breaker opens. Per S2.OP-AB.460-0001, Loss of 2A 460/230V Vital Bus, the operator will start a centrifugal charging pump and then re-establish letdown.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Plausible because the operator may incorrectly recall which 230V bus supplies the normal and backup battery chargers and believe that the 281 125VDC is supplied from 2A 230V bus. Incorrect in the 281 125VDC Battery Charger is supplied from the 2B 230V bus and the 282 125VDC battery charger is supplied from the 2A 230V bus.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Plausible because the operator may incorrectly recall which 230V bus supplies the normal and emergency power to the IRPI indications and believe that the 2A 230V bus is the normal supply resulting in a loss of IRPI indications. Incorrect in that the normal power supply is from 2B 460V and the 2A 230V bus supplies the emergency power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Plausible because the operator may incorrectly recall which 460V bus supplies the normal and emergency power to the Pressurizer backup heaters and believe that the 2A 460V bus is the normal supply resulting in a loss of PZR backup heaters Group 22. Incorrect in that the normal power supply is from the EP 460V bus and the 2A 460V bus supplies the emergency backup.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 203061 (R39), 601390 (R25), S2.OP-AB.460-0001 (R9) | Source: New | Cognitive: Comprehension/Analysis<br>K/A: 062 A2.25 — Ability to (a) predict the impacts of the following on the AC Electrical Distribution System and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences of those abnormal operations: Fault on a motor control center.</div>
</div>
</details>
</div>

## Connections

- Related systems: [[500KV]], [[CVCS]], [[Pressurizer & PRT]], [[DC Power]]
- Related procedures: [[AB.460-0001 — Loss of 2A 460V Bus]]
- Related exam: [[2023 NRC Written Exam]]
