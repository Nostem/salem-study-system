---
title: "2019 Q9 — PZR Level Variable Leg Leak"
category: exams
status: draft
reference: no
aliases:
  - 2019 Q9
  - 2019-Q9
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q9 — PZR Level Variable Leg Leak</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010 PZR PCS-K1.08 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Unit 2 is at 100% Reactor Power and stable<br>
- 2LT-459 (Channel I PZR Level) is the controlling PZR Level channel<br><br>
At time 15:00<br>
- The VARIABLE LEG on the D/P cell for 2LT-459 develops a large leak<br><br>
Which ONE of the following completes the statements below?<br><br>
INDICATED PZR LEVEL (from 2LT-459) will indicate off scale <span class="blank">_(1)_</span>.<br><br>
PZR B/U Heaters <span class="blank">_(2)_</span> energize as ACTUAL PZR PRESSURE lowers below the setpoint.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">(1)</span> high <span class="blank">(2)</span> will</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">(1)</span> high <span class="blank">(2)</span> will NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">(1)</span> low <span class="blank">(2)</span> will NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">(1)</span> low <span class="blank">(2)</span> will</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> For Part 1, the variable leg for 2LT-459 is the low side of the D/P cell. Accordingly, as D/P across 2LT-459 PSID gets larger then indicated PZR level lowers (or as D/P across 2LT-459 goes to 0, then indicated level will be at its maximum). Therefore, with a leak of the variable leg of 2LT-459, D/P will get larger and indicated PZR level will indicate off scale low. Additionally, PZR inventory is also being lost, so actual PZR level and indicated level are both lowering. NOTE, as PZR pressure lowers due to the variable leg leak, this change in pressure is felt on both sides of 2LT-459. Indicated level due to the PZR pressure change will not affect PZR indicated level. For Part 2, the variable leg is connected to the pressurizer. Consequently, when the variable leg develops a leak, actual PZR pressure will lower but since the controlling channel has failed low, the B/U heaters will not energize (indicated level is below 17% which is the low level PZR B/U cutoff setpoint).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect but plausible. For Part 1, many of the licensed operators have demonstrated a misunderstanding on how PZR level instrumentation works (D/P = 0 psid = hi pressurizer level) as demonstrated on the 2018 LOR Bi-Annual Written Exams. Consequently, the ILOT candidate could incorrectly determine that with a variable leg leak on 2LT-459, indicated PZR level will indicate off scale high. Part 2 is correct if level indicated high (heaters would not cut off).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect but plausible. For Part 1, many of the licensed operators have demonstrated a misunderstanding on how PZR level instrumentation works. Consequently, the ILOT candidate could incorrectly determine that with a variable leg leak on 2LT-459, indicated PZR level will indicate off scale high. For Part 2, the candidate could fail to recall that PZR B/U heaters automatically cut off when PZR level indicates less than 17%.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect but plausible. Part 1 is correct. For Part 2, the candidate could fail to recall that PZR B/U heaters automatically cut off when PZR level indicates less than 17%.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRP&L-10 | LO: NOS05CCW000-11 | Source: Modified Bank (ILOT NRC 1601 RO 32) | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]]
- Related exam: [[2019 NRC Written Exam]]
