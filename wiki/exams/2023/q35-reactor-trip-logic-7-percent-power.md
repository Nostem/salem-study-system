---
title: "2023 Q35 — Reactor Trip Logic at 7% Power / Which Trip Active"
category: exams
status: draft
aliases:
  - 2023 Q35
  - 2023-Q35
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q35 — Reactor Trip Logic at 7% Power / Which Trip Active</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 A3.06 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 at 7% reactor power<br><br>
Which of the following conditions DIRECTLY causes a reactor trip?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Three RCS FLOW LO bistables tripped on one loop.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Three PZR PRESS LO bistables tripped.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Two PZR PRESS HI bistables tripped.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> One SG LO LEVEL bistable tripped on two SGs.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> PZR Pressure High trip: 2/4 channels exceeding 2385 psig causes a reactor trip. This trip has NO permissive — it is active in all conditions regardless of power level. At 7% power, this trip is fully active and will directly cause a reactor trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. The RCS Low Flow trip on a single loop (2/3 channels) is enabled above P-8 (36% power). The plant is at 7% power, which is below P-8, so this trip is blocked. The low flow trip on two loops is enabled above P-7 (10%), but the plant is also below P-7.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. The PZR Pressure Low trip is blocked below P-7 (10% power). The plant is at 7% power, which is below P-7, so this trip is blocked and will not directly cause a reactor trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. The SG Low Level trip requires 2/3 levels low on any 1 of 4 SGs. One level low on two SGs does not satisfy the coincidence logic (need 2/3 on the same SG), so this would not cause a trip.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Fluency List | Source: Bank - Point Beach 2017 RO1 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Instrumentation and Controls]]
- Related exam: [[2023 NRC Written Exam]]
