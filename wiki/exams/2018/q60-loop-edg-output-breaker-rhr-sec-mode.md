---
title: "2018 Q60 — LOOP / EDG Output Breaker / RHR SEC Mode"
category: exams
status: draft
reference: no
aliases:
  - 2018 Q60
  - 2018-Q60
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q60 — LOOP / EDG Output Breaker / RHR SEC Mode</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE: 056 Loss of Offsite Power-AA2.54 (2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is in MODE 4<br>
&bull; RCS T<sub>AVG</sub> is 300&deg;F and stable<br>
&bull; 21 RHR Loop is in service for shutdown cooling<br>
&bull; 22 RHR Loop is aligned for ECCS<br>
&bull; 2C EDG is running and paralleled with the Grid in accordance with S2.OP-ST.DG-0003 (2C Diesel Generator Surveillance Test)<br><br>
At time 12:00<br>
&bull; A Loss of Offsite Power (LOOP) occurs<br><br>
Which ONE of the following completes the statements below?<br><br>
During the electrical transient, the 2C EDG Output Breaker will <span class="blank">_(1)_</span>.<br><br>
At 12:15, 21 RHR Pump is <span class="blank">_(2)_</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">_(1)_</span> remain closed / <span class="blank">_(2)_</span> stopped</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">_(1)_</span> remain closed / <span class="blank">_(2)_</span> running</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">_(1)_</span> open then reclose / <span class="blank">_(2)_</span> stopped</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">_(1)_</span> open then reclose / <span class="blank">_(2)_</span> running</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> For Part 1, when the LOOP occurs at 12:00, 2A and 2B 4KV Vital Buses will sense an Instantaneous UV condition which will cause ALL three SECs (2A, 2B and 2C) to enter Mode II - Blackout Only (2/3 Vital Buses sensing Instantaneous UV condition). Since the 2C SEC has gone into Mode II, this will cause the running 2C EDG Output Breaker to OPEN. As the SEC 2C continues its sequencing, the 2C EDG Output Breaker will reclose. For Part 2, 21 RHR Pump is powered from 2A 4KV Vital Bus. With 2A SEC in Mode II, the 21 RHR will NOT be automatically loaded (during the 2A SEC sequencing). Consequently, at 12:15 (after SEC 2A has completed its sequencing), 21 RHR pump is stopped.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect but plausible. For Part 1, since 2C EDG was already running loaded during the LOOP, the candidate could incorrectly conclude that 2C EDG would remain closed as SEC 2C strips the loads off of 2C 4KV Vital Bus and then automatically loads the blackout loads. Part 2 is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect but plausible. For Part 1, since 2C EDG was already running loaded during the LOOP, the candidate could incorrectly conclude that 2C EDG would remain closed as SEC 2C strips the loads off of 2C 4KV Vital Bus and then automatically loads the blackout loads. For Part 2, the RHR pumps are automatically sequenced on their respective Vital Buses when the SECs are in Mode I (SI only) and Mode III (SI & Blackout). Consequently, the candidate could incorrectly conclude that following a LOOP that an RHR pump that had been running in Shutdown Cooling will automatically restart after the SECs complete their sequencing.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect but plausible. Part 1 is correct. For Part 2, the RHR pumps are automatically sequenced on their respective Vital Buses when the SECs are in Mode I (SI only) and Mode III (SI & Blackout). Consequently, the candidate could incorrectly conclude that following a LOOP that an RHR pump that had been running in Shutdown Cooling will automatically restart after the SECs complete their sequencing.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05EDG000-12 (Emergency Diesel Generators) | LO: NOS05EDG000-12 | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[SECs]], [[RHR]], [[4KV]]
- Related procedures: [[S2.OP-ST.DG-0001 — Emergency Diesel Generator Surveillance Test]]
- Related exam: [[2018 NRC Written Exam]]
