---
title: "2012 Q42 — Valve Indicating OPEN Means Failed to Reposition on LOCA"
category: exams
status: draft
aliases:
  - 2012 Q42
  - 2012-Q42
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q42 — Valve Indicating OPEN Means Failed to Reposition on LOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013 A4.03 (RO 4.4 / SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 2 during a startup.<br>
- A LOCA causes containment pressure to exceed 15 psig.<br><br>
Which of the following valves indicating OPEN in the control room means that it has failed to reposition properly?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21SW122, CC HX SW INLET VALVE.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 22CC3, 21-23 HEADER X-OVER VALVE.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 23BF22, SG FW STOP CHECK VALVE.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 24MS167, MAIN STEAMLINE ISOLATION VALVE.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(7) ... 24MS167 valves receive a SHUT signal on the hi-hi containment pressure (15 psig), so indicating OPEN means it failed to reposition.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> 21SW122 is a normally open valve that recieves a CLOSE signal upon a MODE III SEC initiation, SI plus Blackout. It's status is displayed on 2RP4. [In the MODE 2 conditions given, 21SW122 does not receive a close signal, so OPEN is its expected position.]</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> 22CC3 is a normally open valve which does not have any automatic action. It is plausible because other CCW system valves reposition on SI and/or Phase B, and the SJ113 valves also have "X-Over" designators, and they reposition on RWST lo lo level.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> 23BF22 does not receive a shut signal from the MSLI signal that occurs at 15 psig in containment.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Safeguards Actuation Signals 221057 (Rev 22) | LO: ESF000E021 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ESF & Design]], [[RPS/SSPS]], [[Main Steam]], [[CCW]], [[Service Water]]
- Related exam: [[2012 NRC Written Exam]]
