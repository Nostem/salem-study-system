---
title: "2020 Q38 — Loss of Tripping Capability RTB"
category: exams
status: draft
aliases:
  - 2020 Q38
  - 2020-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — Loss of Tripping Capability RTB</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012000G2.4.31 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is at 100% Power<br>
• Control Console Bezel Alarm "LOSS OF TRIPPING CAPABILITY" is received for Reactor Trip Breaker (RTB) "A"<br>
<br>
Which ONE of the following describes the effect on Reactor Trip Breaker (RTB) "A" from this alarm condition?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> RTB 'A' will NOT trip open on ANY Reactor Trip signals.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RTB 'A' will open when the Reactor Trip Breaker 'A' pushbutton on 2CC2 is depressed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The UV trip coil will NOT be capable of opening RTB "A".</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The shunt trip coil will NOT be capable of opening RTB 'A".</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The shunt trip coil is energized to trip. The alarm is indicating a loss of power to the shunt coil, preventing it from being energized to initiate a trip. Only reactor trip signals that de-energize the UV trip coil will open the RTB.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Plausible because the candidate may believe that the alarm indicated both a loss of the UV coil and shunt coil tripping capability. The candidate may confuse how a UV Coil is actuated with how the shunt coil is actuated. Incorrect because the signal will de-energize the UV Coil.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible because the candidate may believe that all manual trip capabilities are the same, believing that the 2CC2 pushbuttons send signals to both shunt & UV Coils. Incorrect because the 2CC2 pushbuttons ONLY energize the shunt trip coil which has no power to energize.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Plausible because the candidate may confuse how a UV Coil is actuated with how the shunt coil is actuated. Incorrect because there is no power to the shunt coil and the UV coil would de-energize.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ-0012(Q), Control Console 2CC2, Bezel 4-17. Drawing 221051, Sheet 2, Reactor Protection System Reactor Trip Signals. | LO: N/A | Source: Bank — Salem 2010 NRC Exam, Q42 | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[S2.OP-AR.ZZ-0012 — Console Alarm Response]]
- Related exam: [[2020 NRC Written Exam]]
