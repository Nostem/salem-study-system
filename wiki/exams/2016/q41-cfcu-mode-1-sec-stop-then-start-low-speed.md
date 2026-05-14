---
title: "2016 Q41 — CFCU Response to MODE 1 SEC Initiation"
category: exams
status: verified
aliases:
  - 2016 Q41
  - 2016-Q41
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q41 — CFCU Response to MODE 1 SEC Initiation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">022000 A3.01 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 1 is operating normally at 100% power.<br><br>
Which of the following identifies how CFCU's would be affected if a MODE 1 SEC initiation signal occurs?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONLY the running CFCU's will swap from High to Slow speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ONLY the running CFCU's will swap from Low to High speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Running CFCU's will stop, then ALL CFCU's will start in High Speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Running CFCU's will stop, then ALL CFCU's will start in Low Speed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(7) By procedure, a maximum of 4 CFCUs can be running in High Speed. That would make choices a and b incorrect based on the 5th non-running CFCU which would start in Low Speed along with the 4 CFCU's which received a stop signal then a start signal. CFCU's swapping to low speed receive a stop signal, then a time delay to allow motor to coast down, before the Low speed start signal occurs. During a MODE 1 SEC initiation, (SI with vital power) ALL CFCUs running in high speed will be stopped, then ALL CFCUs will start in LOW speed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A and B are incorrect but plausible if it is thought that only the running CFCUs will swap speed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> A and B are incorrect but plausible if it is thought that only the running CFCUs will swap speed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because speed is wrong.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Safeguards Equipment Control System (NOS05SEC000-07, p.14-15, Rev 7) | LO: CONTMTE007 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[SECs]]
- Related exam: [[2016 NRC Written Exam]]
