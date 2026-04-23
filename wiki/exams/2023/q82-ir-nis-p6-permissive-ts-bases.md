---
title: "2023 Q82 — IR NIS P-6 Permissive / TS Bases"
category: exams
status: draft
reference: no
aliases:
  - 2023 Q82
  - 2023-Q82
---


<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q82 — IR NIS P-6 Permissive / TS Bases</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T1G2 APE 33 AA2.01 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is performing a reactor startup<br>
• A valid P-6 permissive light is now LIT on 2RP4<br><br>
When the P-6 permissive was LIT, the RO observed the following:<br>
• 2N35, Intermediate Range, NIS channel indicates 1E-5% power<br>
• 2N36, Intermediate Range, NIS channel indicates 1E-8% power<br><br>
Which of the following completes both statements?<br><br>
1. The <span class="blank">(1)</span> Intermediate Range (IR) NIS channel is not indicating as expected and is INOPERABLE.<br>
2. Per TS 3.3.1.1 Instrumentation Bases, why is the 24 hour action time allowed when one IR NIS channel is INOPERABLE?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">(1)</span> 2N35 — <span class="blank">(2)</span> Takes into account the low probability of failure of the operable IR channel during this period.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">(1)</span> 2N35 — <span class="blank">(2)</span> Takes into account the low probability of reactivity events during this period.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">(1)</span> 2N36 — <span class="blank">(2)</span> Takes into account the low probability of reactivity events during this period.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">(1)</span> 2N36 — <span class="blank">(2)</span> Takes into account the low probability of failure of the operable IR channel during this period.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> When P-6 is LIT, the IR NIS would indicate 1E-5% power. Therefore, 2N36 IR channel is not indicating for the expected overlap between the SR channels. Per TS 3.3.1.1 bases, the IR NIS channel high flux trip ensures that protection is provided against an uncontrolled RCCA bank rod withdrawal accident from a subcritical condition during startup. The trip function provides redundant protection to the Power Range High Flux - Low Setpoint trip function. The 24 hour action times for one inoperable IR channel allow for a slow and controlled adjustment above P-10 or below P-6 and take into account the redundant capability afforded by the operable IR channel and its low probability of failure during this period.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Part 1 is incorrect. Plausible because the operator can incorrectly recall the point where the SR and IR overlap when P-6 is present. Part 2 is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Part 1 is incorrect. Plausible because the operator can incorrectly recall the point where the SR and IR overlap when P-6 is present. Part 2 is incorrect. Plausible because the IR channel does provide redundant trip function to the PR NIS low setting trip, but this is not the bases for the 24 hour action limit.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Part 1 is correct. Part 2 is incorrect. Plausible because the IR channel does provide redundant trip function to the PR NIS low setting trip, but this is not the bases for the 24 hour action limit.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: TS 3.3.1.1 bases | LO: NOS05ABNIS1-04, Obj 2 — Describe, in general terms, the actions taken in S2.OP-AB.NIS-0001(Q) and their Bases | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related exam: [[2023 NRC Written Exam]]
