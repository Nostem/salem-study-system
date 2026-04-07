---
title: "2023 Q1 — RCS Low Flow / P-7 and P-8 Logic"
category: exams
status: draft
aliases:
  - 2023 Q1
  - 2023-Q1
---


<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q1 — RCS Low Flow / P-7 and P-8 Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 7 EA2.08 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 25% reactor power.<br>
• The RO reports the following flow indications on 21 RC loop:<br>
&nbsp;&nbsp;- Channel 1 - 89%<br>
&nbsp;&nbsp;- Channel 2 - 89%<br>
&nbsp;&nbsp;- Channel 3 - 92%<br><br>
Which of the following describes the expected response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Per the Alarm Response Procedure, manually trip the reactor, stop 21 RCP, and enter 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RC flows are degraded but above the RPS setpoint for low RCS flow; power operation may continue.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Automatic reactor trip based on 2/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Automatic reactor trip based on 1/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Two out of three channels less than or equal to 90% of design loop flow indicates degraded RCP. Since reactor power is above P-7 (10%) and below P-8 (36%), no automatic reactor trip will occur with a loss of only one RC loop low flows. However, per S2.OP-AR.ZZ-0004 for OHA D-28, RCP BKR OPEN/FLO LO, with a degraded RCP flow, the RCP must be stopped, the reactor manually tripped, and enter 2-EOP-TRIP-1 since Tech Specs does not allow for three loop operation in Mode 1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. While RC flows are degraded, the Alarm Response Procedure requires the RCP to be stopped and the reactor manually tripped. Power operation may not continue with degraded RCP flow since Tech Specs does not allow three loop operation in Mode 1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. An automatic reactor trip on low flow requires 2/3 low flow channels, but P-8 (36%) must be exceeded for an automatic trip on loss of a single loop. Power is only 25%, which is below P-8. No automatic trip occurs; instead a manual trip is required per the ARP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. The low flow trip logic requires 2/3 channels, not 1/3. Additionally, power is below P-8, so no automatic trip on loss of a single loop would occur regardless of the coincidence logic.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Logic drawing 221054, simplified ESF-2, S2.OP-AR.ZZ-0004 (R29) | LO: NOS05RXPROT-15, Obj 12.a | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Instrumentation and Controls]], [[Reactor Coolant Pumps]]
- Related procedures: [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2023 NRC Written Exam]]
