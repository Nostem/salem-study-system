---
title: "2019 Q69 — SG Tube Leak Subcooling Calculation"
category: exams
status: draft
reference: no
aliases:
  - 2019 Q69
  - 2019-Q69
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q69 — SG Tube Leak Subcooling Calculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE: 037 Steam Generator Tube Leak-AK1.01 (2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; The crew is performing S2.OP-AB.SG-0001 (STEAM GENERATOR TUBE LEAK) Step 3.37.B, "DEPRESSURIZE the RCS concurrently with cooldown AND MAINTAIN 20 to 40&deg;F subcooling"<br>
&bull; The subcooling monitor is NOT functional<br><br>
At time 15:00<br>
&bull; TAVG is 530 &deg;F<br>
&bull; The Hottest CET is 540 &deg;F<br>
&bull; RCS Pressure is 1200 psig<br><br>
Based on information contained in Steam Tables, which ONE of the following completes the statement below?<br><br>
At 15:00, the RCS is subcooled by approximately ___ &deg;F.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 25</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 29</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 35</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 39</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> The candidate must first determine TSAT for 1200 psig. Since the steam tables are in PSIA, 1200 psig must be converted to PSIA: (1200 + 15) = 1215 PSIA. Using steam tables (and interpolating) TSAT of 1200 PSIG is approximately 569 &deg;F. Subcooling is based on the Hottest CET which is 540 &deg;F. Subcooling = TSAT - Hottest CET = 569 - 540 = 29 &deg;F.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect but plausible. 25 is plausible if the candidate incorrectly determines TSAT for 1200 psig to be 565 &deg;F and correctly uses the CET reading to calculate subcooling. This would be done by incorrectly entering the steam tables at 1185 PSIA (1200 - 15 = 1185). Subcooling would then be calculated at 565 - 540 = 25 &deg;F.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect but plausible. 35 is plausible if the candidate incorrectly determines TSAT for 1200 psig to be 565 &deg;F and incorrectly uses TAVG to calculate subcooling. This would be done by incorrectly entering the steam tables at 1185 PSIA (1200 - 15 = 1185). Subcooling would then be calculated at 565 - 530 = 35 &deg;F.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect but plausible. 39 is plausible if the candidate correctly determines TSAT for 1200 psig = 569 &deg;F but incorrectly uses TAVG to calculate subcooling (569 - 530) = 39 &deg;F.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Steam Tables | LO: NOS05ABSGTL-05 | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]]
- Related procedures: [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related exam: [[2019 NRC Written Exam]]
