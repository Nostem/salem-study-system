---
title: "2016 Q38 — Action That Changes Rx Trip Setpoint During Power Ascension"
category: exams
status: draft
aliases:
  - 2016 Q38
  - 2016-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — Action That Changes Rx Trip Setpoint During Power Ascension</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012000A101 A1.01 (2.9*)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> Which of the following actions changes the setpoint at which a Rx trip would occur while performing a power ascension during a plant startup?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Placing a PRNI drawer Rate Mode switch to Reset at 4% Rx power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Placing the High Flux at Shutdown Block switches in Block at 4% Rx power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Depressing the Block Power Range A and B pushbuttons at 12% Rx power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Depressing the Reset Source Range A and B pushbuttons at 12% Rx power.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(7) C is correct because it blocks the low power Rx trip (25%) when above 10% power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect but plausible if it is thought that resetting a High Flux Rate trip on a PRNI drawer would affect the Rx power trip setpoint.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect but plausible if it were to be confused with the Source Range Block switches which blocks the Source Range hi power trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is correct but plausible as it WOULD change the setpoint if it were performed below 10% power after the SR hi power trip was blocked, but it is prevented from re-energizing the SRNI's (which would lower the Rx power trip setpoint to 1X10E5 cps) by the P-10 block.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Rx Protection Nuclear Instr Trip Signals 221052 rev 7 | LO: RXPROTE012 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]]
- Related exam: [[2016 NRC Written Exam]]
