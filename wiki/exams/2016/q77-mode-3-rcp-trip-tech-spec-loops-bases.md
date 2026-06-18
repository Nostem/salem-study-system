---
title: "2016 Q77 — Mode 3 RCP trip Tech Spec application — RCS loops with rod control de-energized"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q77
  - 2016-Q77

---


<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q77 — RCP Malfunctions — TS 3.4.1.2 application</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.37 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br>
- Salem Unit 2 is in Mode 3, at NOP, NOT.<br>
- All four RCPs are in service.<br>
- 22 RDMG set is in operation for testing, with its motor breaker and generator breaker shut.<br>
- Reactor Trip Breaker "B" is racked in and shut.<br>
- Reactor Trip Breaker "A" and both Reactor Trip Bypass Breakers are open.<br>
<br>
Which of the following identifies how Tech Specs will be applied if a RCP were to trip, and the bases for that application?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ALL RCPs are required to be operable to provide decay heat removal and to satisfy single failure criteria. A cooldown to Mode 4 IS required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Only TWO reactor coolant loops are required to be operable to provide decay heat removal and to satisfy single failure criteria. A cooldown to Mode 4 is NOT required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL RCPs are required to be in operation to provide decay heat removal and ensure mixing, prevent stratification, and produce gradual reactivity changes during boron concentration reductions in the RCS. A cooldown to Mode 4 IS required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Only ONE RCP is required to be in operation to provide decay heat removal and ensure mixing, prevent stratification, and produce gradual reactivity changes during boron concentration reductions in the RCS. A cooldown to Mode 4 is NOT required.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.43.b(2) The first part of this questions require RO knowledge to determine what constitutes an "energized" rod control system. 3 of the 4 RTB and RTBBs being open is considered de-energized, even with a RDMG set in operation and a single RTB shut. (TS page 3/4 4-2a). With the unit in Mode 3 (rod control deenergized means can't be in Mode 2, and at NOT can't be in Mode 4), LCO 3.4.1.2 requires TWO operable RC loops including RCP, SG, and loop. It also requires ONE loop in operation when rod control is deenergized. With FOUR RCPs (and loops) operable initially, the trip of a single RCP does not require any action based on still meeting the minimum requirement for the LCO. The bases for this LCO is as stated in correct answer. Choice B is partially correct, since the operability portion is correct and the cooldown not required part is also correct. However, the bases does not reflect the reason as being single failure criteria. Single failure criteria refers in this case to the minimum required loops IN OPERATION. (Bases B3/4 page 4-1.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (LCO 3.4.1.2 with rod control de-energized requires two operable loops, not all RCPs; cooldown not required when minimum LCO is still met).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Choice B is partially correct, since the operability portion is correct and the cooldown not required part is also correct. However, the bases does not reflect the reason as being single failure criteria. Single failure criteria refers in this case to the minimum required loops IN OPERATION.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above (with rod control de-energized in Mode 3, only ONE loop is required to be in operation, not all four).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs LCO 3.4.1.2 (3/4-2,2a; Bases B3/4 page 4-1) (rev 44/282) | LO: RCS000E009 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCPs]], [[RCS]], [[Control Rod Drive]], [[RPS/SSPS]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2016 NRC Written Exam]]
