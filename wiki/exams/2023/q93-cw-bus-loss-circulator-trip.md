---
title: "2023 Q93 — CW Bus Loss / Circulator Trip"
category: exams
status: draft
reference: no
aliases:
  - 2023 Q93
  - 2023-Q93
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q93 — CW Bus Loss / Circulator Trip</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G2 075 A2.02 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- 21A CW Pump is C/T for waterbox cleaning<br>
<br>
<strong>Then:</strong><br>
- The 4KV Infeed breaker to the 24 CW bus fails opens<br>
<br>
What action will the CRS direct the crew?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Power operation at 100% may continue since the 24 CW Bus will auto transfer to the 23 CW Bus.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Initiate a load reduction to less than 49% power and trip the main turbine per S2.OP-AB.TRB-0001, Turbine Trip Below P-9.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Initiate a load reduction to less than or equal to 83% power per S2.OP-AB.CW-0001, Circulating Water Malfunction.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Trip the reactor and enter 2-EOP-TRIP-1, Reactor Trip or Safety Injection, per S2.OP-AB.CW-0001, Circulating Water Malfunction.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> When the infeed breaker (24CW9AD) fails open, the 24 CW bus will de-energize, when the bus voltage is < 70% the bus will transfer automatically to the 23 CW bus. However, all the 'B' Circulator (21B, 22B, and 23B) breakers will trip open on undervoltage and must be manually started following the bus transfer. The traveling screen power will be supplied from the 23 CW bus providing power to the 'A' Circulators. Per S2.OP-AB.CW-0001 Attachment 1, with 4 or more circulators out of service with power greater than or equal to P-10 (10%), then trip the reactor and enter 2-EOP-TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Plausible because the SRO may believe that the CW Bus Auto Transfer scheme will transfer the 24 CW bus to 23 CW bus without losing power to the 'B' Circulators and therefore, no impact to the current power level.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible because the SRO may believe that removing the main turbine from service is allowed using S2.OP-AB.TRB-0001.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Plausible because a loss of both 21A and 22A circulators requires a load reduction to less than or equal to 83% power.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CW-0001 (R41) | LO: NOS05ABCW01-13, Objective 4. Describe, in general terms, the actions taken in S2.OP-AB.CW-0001 and the bases for the actions in accordance with the Technical Bases Document. | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[500KV]]
- Related procedures: [[AB.CW-0001]]
- Related EOPs: [[EOP-TRIP-1]]
- Related exam: [[2023 NRC Written Exam]]
