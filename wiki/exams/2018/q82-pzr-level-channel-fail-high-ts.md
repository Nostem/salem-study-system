---
title: "2018 Q82 — PZR Level Channel Fails High / TS 3.3.1.1"
category: exams
status: draft
type: SRO
reference: no
aliases:
  - 2018 Q82
  - 2018-Q82
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q82 — PZR Level Channel Fails High / TS 3.3.1.1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">028 PZR Level Control Malfunction-AA2.12 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is at 100% Reactor Power<br>
• PZR pressure is 2235 and stable<br>
• 21 Backup Heaters are in MANUAL and ON<br>
• 2LT-459 (Channel I PZR Level) is the controlling PZR Level channel<br><br>
At time 15:00:00<br>
• 2LT-459 Fails high<br><br>
Which ONE of the following completes the statements below?<br><br>
At 15:00:30, 22 Backup Heaters are <span class="blank">_(1)_</span>.<br><br>
In accordance LCO 3.3.1.1 (REACTOR TRIP SYSTEM INSTRUMENTATION), 2LT-459 must be placed in the tripped condition within a MAXIMUM of <span class="blank">_(2)_</span> hour(s).
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">_(1)_</span> energized &nbsp;&nbsp; <span class="blank">_(2)_</span> 1</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">_(1)_</span> energized &nbsp;&nbsp; <span class="blank">_(2)_</span> 6</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">_(1)_</span> de-energized &nbsp;&nbsp; <span class="blank">_(2)_</span> 1</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">_(1)_</span> de-energized &nbsp;&nbsp; <span class="blank">_(2)_</span> 6</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> For Part 1 since the controlling LT has failed high, 22 Backup heaters will automatically energize since there is a +5% PZR level deviation (LACTUAL - LREF). For Part 2 and in accordance LCO 3.3.1.1 (REACTOR TRIP SYSTEM INSTRUMENTATION), 2LT-459 must be placed in the tripped condition within a MAXIMUM of 6 hours.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Part 1 is correct. For Part 2, the candidate could incorrectly conclude that LCO 3.3.1.1 (REACTOR TRIP SYSTEM INSTRUMENTATION) requires 2LT-459 must be placed in the tripped condition within a MAXIMUM of 1 hour.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> For Part 1, PZR B/U Heaters have an automatic function to energize when PZR pressure is less than 2210 psig. Since PZR pressure is > 2210 psig when LT-459 fails high, the candidate could incorrectly conclude that the 22 Backup heaters are OFF. For Part 2, the candidate could incorrectly conclude that LCO 3.3.1.1 requires 2LT-459 must be placed in the tripped condition within a MAXIMUM of 1 hour.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> For Part 1, PZR B/U Heaters have an automatic function to energize when PZR pressure is less than 2210 psig. Since PZR pressure is > 2210 psig when LT-459 fails high, the candidate could incorrectly conclude that the 22 Backup heaters are OFF. Part 2 is correct.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: LCO 3.3.1.1, NOS05PZRP&L-10 (PRESSURIZER PRESSURE AND LEVEL CONTROL) | LO: 10. Given a situation dealing with Pressurizer Pressure and Level Control System operability, examine the situation and apply the appropriate Technical Specification action. | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2018 NRC Written Exam]]
