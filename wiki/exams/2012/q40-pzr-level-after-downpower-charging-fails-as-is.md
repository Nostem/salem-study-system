---
title: "2012 Q40 — PZR Level After Downpower with Charging Controller Failed As-Is"
category: exams
status: draft
aliases:
  - 2012 Q40
  - 2012-Q40
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q40 — PZR Level After Downpower with Charging Controller Failed As-Is</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">011 K6.04 (RO 3.1 / SRO 3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- A power reduction from 100% to 20% Rx power will be performed at 1% per minute IAW S2.OP-AB.LOAD-0001, Rapid Load Reduction.<br>
- Prior to initiating the down power, the Charging Master Flow Controller fails as is.<br><br>
Which of the following is CLOSEST to what actual PZR level will be when the down power is completed and RCS Tavg is exactly on program?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 22%.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 28%.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 51%.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 59%.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(7). Program PZR level is clipped at 59%. As the down power occurs, there will be an outsurge from the PZR as the RCS contracts due to lowering Tavg. At 20% power, RCS Tavg exactly on program is 551.6°, (AB.ROD-3 Attachment 1) which would give a program level of 28.3%. (AB.ROD-3 Attachment 2).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect but plausible since it is the no load PZR program level.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is the PZR level for 80% Rx power (569.5°F).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect but plausible if the candidate thinks that with charging in manual PZR level remains at its current level.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.ROD-0003 (Rev 21) Continuous Rod Motion; S2.OP-AB.LOAD-0001 Rapid Load Reduction | LO: PZRP&amp;LE008 | Source: New | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.ROD-0003 — Continuous Rod Motion]]
- Related exam: [[2012 NRC Written Exam]]
