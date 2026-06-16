---
title: "2014 Q59 — EDG Loading Switch in AUTO During Parallel Operation"
category: exams
status: draft
aliases:
  - 2014 Q59
  - 2014-Q59
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q59 — EDG Loading Switch in AUTO During Parallel Operation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">064000 A3.05 (RO 2.8 / SRO 2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- 2B EDG is paralleled to 2B 4KV vital bus for a normal surveillance run IAW S2.OP-ST.DG-0002, 2B Diesel Generator Surveillance Test.<br>
- 2B EDG is operating with 2525 KW load.<br><br>
Which of the following identifies the consequence, if any, if the operator attempts to place the 2B-DF-GCP-1, 2B Diesel Gen Loading Switch in AUTO (ISOCR)?<br><br>
The 2B EDG will...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> be unaffected.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> speed up and trip on overspeed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> slow down and stall when speed is &lt; 800 rpm.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> trip on either reverse power or output breaker over-current.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> If the Generator Loading switch is in the Auto Mode in parallel operation the generator will attempt to pickup large +/- VAR loading because it is attempting to control grid voltage. There is no SPT to EDG control interlock. The EDG will not speed up.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect — placing the loading switch in AUTO while paralleled is not without consequence; the generator attempts to pick up large +/- VAR loading and trips on reverse power or output breaker over-current.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect — the EDG will not speed up. (There is no SPT to EDG control interlock.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect — the consequence is a trip on reverse power or output breaker over-current, not a slow-down and stall below 800 rpm.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: EDG Lesson Plan (NOS05EDG000-11, p 68, Rev 11) | LO: EDG000E004 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]]
- Related procedures: [[S2.OP-ST.DG-0002 — 2B Diesel Generator Surveillance Test]]
- Related exam: [[2014 NRC Written Exam]]
