---
title: "2014 Q81 — 500 KV Breaker Fault Failure to Trip — CRS Response"
category: exams
status: draft
aliases:
  - 2014 Q81
  - 2014-Q81
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q81 — 500 KV Breaker Fault Failure to Trip — CRS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000056G2.1.7 (SRO 4.7)</span>
</div>

<div class="callout callout-trap">
<div class="callout-label">Scoring note</div>
The answer key for this question is hand-annotated <strong>"C or d. accepted as a correct response"</strong>. The keyed answer is <strong>D</strong>; choice <strong>C</strong> was also accepted as correct on the official exam.
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is operating at 100% power.<br>
- A breaker fault occurs on the 2-6 500 KV breaker.<br>
- The 2-6 500 KV breaker does NOT trip, but should have.<br>
- 15 seconds after the breaker failure, Unit 1 has NOT tripped.<br><br>
Which of the following identifies how the Unit 1 CRS should proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Direct the RO to manually trip the reactor and go to EOP-TRIP-1, Reactor Trip or Safety Injection. Concurrently with EOP implementation, initiate S1.OP-AB.LOOP-0001, Loss of Offsite Power, and perform Attachment 2, Loss of Group Buses, Part A, Loss of 1E and 1H 4KV Group Buses.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Direct the RO to manually trip the reactor and go to EOP-TRIP-1. Concurrently with EOP implementation, initiate S1.OP-AB.LOOP-0001, and perform Attachment 2, Loss of Group Buses, Part B, Loss of 1F and 1G 4KV Group Buses.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Enter S1.OP-AB.LOOP-0003, Partial Loss of Off-Site Power, then enter S1.OP-AB.CW-0001 Circulating Water System Malfunction, and perform a power reduction to 83% power or less.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Enter S1.OP-AB.LOOP-0003, then enter S1.OP-AB.CW-0001 and open the Hood Spray Bypass valves 11-13MC62s.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct (keyed; C also accepted).</strong> The breaker failure of 2-6 will cause the 5-6, 2-8, and 2-10 500 KV breakers to open, causing a loss of 500 KV bus section 2. The failure will not cause a loss of RCPs since the Group Buses will be powered from generator output through the Aux Power Transformer vs station power transformer, so there will not be a demand for a rx trip. There will be a loss of 3 circulators when 13KV ring bus south Section A loses power, but there will be at least one circulator running on each waterbox so the power reduction is not required to be performed. The hood spray bypass valves are opened on affected condensers, which would be all of them.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> AB-LOOP-1 (S1.OP-AB.LOOP-0001) is for a total loss of offsite power and will not be entered; the failure does not produce a loss of all offsite power or a demand for a reactor trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> As with A, AB-LOOP-1 is for a total loss of offsite power and the manual reactor trip / EOP-TRIP-1 entry is not warranted; the Group Buses remain powered through the Aux Power Transformer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C. (Distractor — but accepted as correct on the official exam.)</strong> Per the key explanation the power reduction is not required because at least one circulator remains running on each waterbox; however the official answer key accepted C as a correct response in addition to D.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.LOOP-0003 (Rev 5); S1.OP-AB.LOOP-0001 (Rev 29); S1.OP-AB.CW-0001 (Rev 37) | LO: ABLOP3E002 | Source: New | Cognitive: Application | K/A: 000056G2.1.7 (SRO 4.7) — Loss of Off-Site Power | Scoring: "C or d accepted as a correct response"</div>
</div>
</details>
</div>

## Connections

- Related systems: [[500KV]], [[Circ Water]]
- Related procedures: [[AB.LOOP-0003 — Partial Loss of Offsite Power]], [[AB.LOOP-0001 — Loss of All Offsite Power]], [[AB.CW-0001 — Circulating Water Malfunction]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2014 NRC Written Exam]]
