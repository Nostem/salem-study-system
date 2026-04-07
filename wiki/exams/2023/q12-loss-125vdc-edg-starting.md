---
title: "2023 Q12 — Loss of 125VDC / EDG Starting"
category: exams
status: draft
aliases:
  - 2023 Q12
  - 2023-Q12
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q12 — Loss of 125VDC / EDG Starting</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 58 AK3.01 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 lost 2A 125 VDC bus<br>
• Then SI actuation occurs<br><br>
What is the effect on the 2A EDG?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> EDG will NOT start, start circuit from DC power</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> EDG will NOT start, SEC has no power for diesel start relay</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> EDG will start, SSPS directly starts EDG with redundant DC</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> EDG will start, start circuit from vital instrument power</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> EDG starting circuits are supplied from 125 VDC power. With no DC power, EDG cannot start automatically from SI/SEC or remotely.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> SEC relays are supplied by vital instrument power, not DC. But the EDG start circuit itself needs DC power, so the conclusion (EDG will not start) is correct but the reason is wrong.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> SSPS sends SI to SECs, SECs send start to EDG start circuitry which is DC powered. No redundant DC supply for the 2A EDG start circuit.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> EDG start circuit requires DC power, not vital instrument power.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05EDG000-15 | LO: NOS05EDG000-15, Obj 14.c | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[DC Power]], [[Diesel Generators]]
- Related exam: [[2023 NRC Written Exam]]
