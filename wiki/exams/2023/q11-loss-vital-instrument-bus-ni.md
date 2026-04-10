---
title: "2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response"
category: exams
status: draft
aliases:
  - 2023 Q11
  - 2023-Q11
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q11 — Loss of Vital Instrument Bus / NI Channel Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 57 AK2.08 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 1 at 8% power, startup<br>
• 1B Vital Instrument Bus de-energizes<br><br>
What is the effect on the nuclear instrumentation and reactor trip status?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> No trip, NI channels fail low</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> No trip, below P-10</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Trip on 1/2 IR channel bi-stable</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Trip on 1/2 SR channel bi-stable</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> When 1B vital instrument bus de-energizes, 2N32 (SR), 2N36 (IR), 2N42 (PR) lose power, monitors fail low. Bi-stables trip to SSPS. Above P-6 but below P-10, reactor trips on 1/2 IR channel high flux bi-stables tripped. SR blocked above P-6, PR needs 2/4 (only 1 affected).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> NI channels do fail low, but bi-stables also trip sending signal to SSPS. A reactor trip will occur.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> IR high flux is blocked at P-10, not P-6. Below P-10 the IR trip is active, so 1/2 IR bi-stables tripped will cause a reactor trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> SR channels are blocked above P-6. At 8% power the unit is above P-6, so SR trip function is blocked.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 221052, 221053 | LO: NOS05EXCORE-14, Obj 12.b | Source: Modified Bank - Byron Oct 2019 NRC RO55 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[500KV]]
- Related exam: [[2023 NRC Written Exam]]
