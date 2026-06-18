---
title: "2016 Q54 — Pressure Override Failure on 11 AFW Pump"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q54
  - 2016-Q54

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q54 — Pressure Override Failure on 11 AFW Pump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">061 K6.01 (RO 3.9 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br><br>
- Unit 1 is operating at 100% power, steady state.<br>
- The Pressure Override circuit for 11 AFW pump fails, effectively <u>removing</u> the Pressure Override circuit from 11 AFW pump control.<br><br>
Which of the following describes the effect this failure will have on the AFW system?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 11AF21 and 12AF21 will remain shut until manually opened if required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 13AF21 and 14AF21 will remain shut until manually opened if required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 11AF21 and 12AF21 will open to the position corresponding to current AF21 demand.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 13AF21 and 14AF21 will open to the position corresponding to current AF21 demand.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(4,7) The Pressure Override circuit provides runout protection for the AFW pumps by maintaining the AFW pump discharge valves associated with each pump shut until AFW pump reaches a certain pressure, then allows them to open. So during normal standby operation, this circuit keeps the AF21s shut even though normal demand for the valves is set at ~98%. With this circuit removed from affecting the associated AFW21 valves, they will open to current demand. The 11 AFW pump feeds 13 and 14AF21s only, while the 12 AFW pump feeds 11 and 12 AF21s.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (with this circuit removed from affecting the associated AFW21 valves, they will open to current demand).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Source explanation does not separately address — see correct-answer block above (they will open to current demand).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above (The 11 AFW pump feeds 13 and 14AF21s only, while the 12 AFW pump feeds 11 and 12 AF21s).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: AFW System Lesson Plan — NOS05AFW000-15, p27-29 (Rev 15) | LO: AFW000E008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]]
- Related exam: [[2016 NRC Written Exam]]
