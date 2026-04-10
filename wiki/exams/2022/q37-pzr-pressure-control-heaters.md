---
title: "2022 Q37 — PZR Pressure Channel Fails High / DNBR Limit"
category: exams
status: draft
aliases:
  - 2022 Q37
  - 2022-Q37
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q37 — PZR Pressure Channel Fails High / DNBR Limit</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010 A1.07 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power<br>
• All systems are in normal alignment and in AUTO<br>
• The controlling PZR Pressure channel fails HIGH<br><br>
Which ONE of the following completes both statements?<br><br>
1. In order to restore RCS pressure to program, the RO will manually <span class="blank">_(1)_</span> demand on the Master Pressure Controller.<br>
2. If RCS pressure lowers to less than <span class="blank">_(2)_</span> psig, LCO 3.2.5, DNB Parameters, for minimum DNBR will NOT be MET.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">_(1)_</span> lower / <span class="blank">_(2)_</span> 2200</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">_(1)_</span> lower / <span class="blank">_(2)_</span> 2185</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">_(1)_</span> raise / <span class="blank">_(2)_</span> 2200</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">_(1)_</span> raise / <span class="blank">_(2)_</span> 2185</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> A failed high controlling PZR pressure channel will raise the demand of the MPC to 100% and opening all spray valves. The Master Pressure Controller (MPC) demand will have to be lowered in order to close the spray valves and turn on all the PZR heaters to restore RCS pressure to program. The TS limit for minimum DNBR for RCS Pressure is &ge; 2200 psia (or &lt; 2185 psig).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. First part is correct. Second part is incorrect. The TS limit for minimum DNBR for RCS Pressure is &ge; 2200 psia (or &lt; 2185 psig).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. First part is incorrect. A failed high controlling PZR pressure channel will raise the demand of the MPC to 100% and opening all spray valves. Second part is incorrect. The TS limit for minimum DNBR for RCS Pressure is &ge; 2200 psia (or &lt; 2185 psig).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. First part is incorrect. A failed high controlling PZR pressure channel will raise the demand of the MPC to 100% and opening all spray valves. Second part is correct.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRP&amp;L-12, TS LCO 3.2.5 | LO: NOS05PZRP&amp;L-12, Obj 15 — Given a PZR Pressure and Level Control System failure, predict the effect on the RCS | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related exam: [[2022 NRC Written Exam]]
