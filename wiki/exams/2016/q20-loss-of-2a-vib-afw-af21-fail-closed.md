---
title: "2016 Q20 — Loss of 2A 115VAC VIB Effect on AFW System"
category: exams
status: draft
aliases:
  - 2016 Q20
  - 2016-Q20
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q20 — Loss of 2A 115VAC VIB Effect on AFW System</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000057 AA1.06 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 is at 100% power<br>
- A loss of 2A 115 VAC Vital Instrument Bus occurs.<br><br>
Which of the following describes the impact of the loss on the AFW system if a reactor trip <u>with no SI</u> occurs before the bus is recovered?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21 AFW Pump will have to be started manually.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Operators must dispatch an NEO to locally throttle 23AF21 and 24AF21.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 21 AFW Pump may trip during the automatic start because 23AF21 and 24AF21 are failed open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Operators must press the PRESSURE OVERRIDE DEFEAT pushbutton for 21 AFW Pump before gaining control of 23AF21 and 24AF21.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(7) B is correct because 23AF21 and 24AF21 fail closed due pressure override as power is lost to the pressure transmitter. An operator is dispatched at Step 13 of AB. Power is also lost to the valve controllers.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because 21 AFW Pump would only have to be started if an SEC actuation occurred, and the stem states no SI has occurred.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because the valves fail closed,</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because power is not available to the valve controllers.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of 2A 115 VAC Vital Instrument Bus (S2.OP-AB.115-0001, p.4, Rev 20) | LO: AB1151E003 | Source: Facility Exam Bank (80310) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[115V AC]]
- Related procedures: [[AB.115-0001 — Loss of 115V Vital Instrument Bus]]
- Related exam: [[2016 NRC Written Exam]]
