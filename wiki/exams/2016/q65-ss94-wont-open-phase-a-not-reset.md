---
title: "2016 Q65 — SS94 Sample Valves Won't Open After MSLI"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q65
  - 2016-Q65

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q65 — SS94 Sample Valves Won't Open After MSLI</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">103000 A4.04 (RO 3.5*)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
<br>
- Unit 2 was operating at 100% power when a steam leak upstream of 22MS167 occurred.<br>
- The Rx was tripped and a MSLI performed successfully.<br>
- Operators have transitioned out of EOP-TRIP-1.<br>
- The PO is attempting to open 21-24SS94's, SG B/D Sample Valves, but they will not open.<br>
- SGBD sample isolation bypass has been RESET.<br>
<br>
Of the following, which identifies the reason the valves won't open?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 22 SG NR level is &lt;9%. 9%.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> CA330s have not been reopened.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Both SGFPs have trip signals locked in.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Either Train A or Train B Phase A isolation failed to reset when its reset PB was depressed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(7) For a trip and SI due to a single faulted SG (unisolable) the flow path will go from TRIP-1 to LOSC-1. The SI will NOT have been reset in TRIP-1, nor will it be reset in LOSC-1. The SGBD sample isolation reset will be performed in LOSC-1 (step 6.1) in order to open the SS94's. The step prior to that is RESET PHASE A. This is due to the fact that the blowdown isolation bypass only bypasses the lo-lo level input into the AFW auto start circuit, which closes the SS94's. If the Phase A hasn't been reset, the 94s can not be reopened. SS94s supplied air from outside cont</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (the blowdown isolation bypass only bypasses the lo-lo level input into the AFW auto start circuit, which closes the SS94's).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Source explanation does not separately address — see correct-answer block above (SS94s supplied air from outside cont).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above (SGBD sample isolation reset will be performed in LOSC-1).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RPS AFW Startup Logic Diagram (221064, Rev 8); SS94 Loop Diagram (621216-1, Rev 1) | LO: RXPROTE019 | Source: Facility Exam Bank (62124) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[AFW]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related exam: [[2016 NRC Written Exam]]
