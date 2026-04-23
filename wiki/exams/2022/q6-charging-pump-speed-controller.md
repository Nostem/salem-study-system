---
title: "2022 Q6 — Charging Pump Speed Controller"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q6
  - 2022-Q6
  - 2022 Q06
  - 2022-Q06
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q6 — Charging Pump Speed Controller</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE22 AA1.04 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is at 100% Power.<br>
• 23 Charging Pump is in service.<br>
• All systems are in AUTO.<br>
• A failure occurs with the Master Flow Controller (MFC).<br>
• The RO reports that the indicated demand on the MFC bezel is LOWERING.<br><br>
Which ONE of the following completes both statements?<br><br>
1. Assuming the MFC demand continues to lower after being placed in Manual, charging flow will lower to a MINIMUM flow rate of ____ gpm.<br>
2. In accordance with S2.OP-AB.CVC-0001, Charging System Malfunction, what is the NEXT required action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1) 47<br>2) take manual control of 2CV55, Charging Flow Control Valve</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1) 47<br>2) take manual control of 23 Charging Pump Speed Controller</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1) 0<br>2) take manual control of 23 Charging Pump Speed Controller</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1) 0<br>2) take manual control of 2CV55, Charging Flow Control Valve</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Lowering demand from the Master Flow Controller will cause the 23 Charging Pump speed controller to lower until the speed controller hits the low speed stop which will maintain a minimum charging flow rate of 47 gpm to ensure adequate seal injection to the RCPs. IAW S2.OP-AB.CVC-0001, step 3.109, if a malfunctioning MFC, then the operator is directed to take manual control of 2CV55 or 23 Charging Pump. Since 23 Charging Pump is in service, operating the 2CV55 will have no effect on charging flow. The operator will first attempt to take manual control of the MFC and raise the demand which should raise the speed controller demand on 23 Charging Pump and therefore, raise charging flow. If charging flow does not respond, then the operator should place the speed controller for 23 Charging Pump in Manual and raise the output of the speed controller to raise charging flow.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> First part is correct. Second part is incorrect, the 2CV55 only controls charging flow when a centrifugal charging pump is in service. Plausible because the 2CV55 is used to control charging flow when a centrifugal charging pump is in service.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> First part is incorrect. Plausible if the operator does not recall that the 23 charging pump speed controller has a low speed stop to maintain 47 gpm to the RCPs. Second part is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> First part is incorrect. Plausible if the operator does not recall that the 23 charging pump speed controller has a low speed stop to maintain 47 gpm to the RCPs. Second part is incorrect. The 2CV55 only controls charging flow when a centrifugal charging pump is in service. Plausible because the 2CV55 is used to control charging flow when a centrifugal charging pump is in service.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CVC-0001 Rev 14 | LO: NOS05ABCVC1, Objective 2 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2022 NRC Written Exam]]
