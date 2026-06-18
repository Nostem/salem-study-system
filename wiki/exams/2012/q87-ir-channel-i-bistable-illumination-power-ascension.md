---
title: "2012 Q87 — IR Channel I Bistable Illumination During Power Ascension"
category: exams
status: draft
aliases:
  - 2012 Q87
  - 2012-Q87
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q87 — IR Channel I Bistable Illumination During Power Ascension</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 A2.01 (RO 3.8 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 15% power, performing a power ascension IAW S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load, prior to rolling the Main Turbine.<br>
- The RO reports the Bistable for Intermediate Range Channel I on 2RP4 has just illuminated.<br>
- The reactor remains at power.<br><br>
Which of the following describes how this bistables current condition will affect the power ascension?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> This bistable illumination is NOT expected at this point in the power ascension. Power ascension may continue while investigating cause of faulty bistable operation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> An ATWT has occurred, attempt to trip the reactor manually.  If the reactor does NOT trip, verify the turbine is tripped and initiate rod insertion, then go to FRSM-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> This bistable illumination is expected during a power ascension. BLOCK both intermediate range channels by depressing the BLOCK INTERMEDIATE RANGE A and B PBs IAW OHA F-17 ARP. Continue the power ascension.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A failure of the IR high flux trip block has occurred.  Lower Rx power to less than 5% and depress BLOCK INTERMEDIATE RANGE B pushbutton to block Train B IAW S2.OP-IO.ZZ-0004 POWER OPERATION.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.43(5) A is correct because the alarm setpoint is 25%. The action is correct because the IR hi flux trip was blocked when Rx power was &gt;P-10. TSAS 3.3.1.1, Functional Unit 5, Action 3.c states above 5% power power operation may continue.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the IR Hi Flux trip is blocked and a Rx trip is not expected. The actions are correct for an ATWT IAW EOP-TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Distracter C is incorrect because it is not expected to occur at this power level. While the light WILL light at 25% power, its output is already blocked.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Distracter D is incorrect because a failure has NOT occurred of the block, and power is not required to be lowered.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Hot Standby to Minimum Load — S2.OP-IO.ZZ-0003 (Rev 37) | LO: RXPROTE012, IOP003E004, IOP003E005 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2012 NRC Written Exam]]
