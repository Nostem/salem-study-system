---
title: "2016 Q44 — Reset Spray Actuation Pushbuttons During LOCA-1"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q44
  - 2016-Q44

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q44 — Reset Spray Actuation Pushbuttons During LOCA-1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">026000 A4.05 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 is performing actions in 2-EOP-LOCA-1 for a LOCA.<br>
- Containment pressure peaked at 20 psig.<br><br>
When performing CS Pump Stop Criteria steps in LOCA-1, the RO depresses both Reset Spray Actuation pushbuttons with Containment pressure at 15.1 psig.<br><br>
Which of the following describes the effect of this action, if anything?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> There will be no effect.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Containment Spray valves 21/22CS2, 2CS14, 2CS16, and 2CS17 will shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Containment Spray Actuation signal will reset and NOT reinitiate after the Reset Spray Actuation pushbuttons are released.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Containment Spray Actuation signal will reset, then Containment Spray Actuation WILL reinitiate after the Reset Spray Actuation pushbuttons are released.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(7) Containment Spray actuation relays have retentive memory, which allows relays to be manually reset with an actuation signal still present. So even though containment pressure remains above the Containment Spray actuation setpoint of 15 psig, the actuation signal can be reset. The Containment Spray pumps and Spray valves CS2, CS14, CS16, and CS17 do NOT reposition to their normal positions. The CS14 is normally open with power removed. The remaining CS valves are normally shut and open upon the CS signal, and cannot be closed until the spray actuation signal is reset.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (the actuation signal can be reset).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The Containment Spray pumps and Spray valves CS2, CS14, CS16, and CS17 do NOT reposition to their normal positions. The CS14 is normally open with power removed. The remaining CS valves are normally shut and open upon the CS signal, and cannot be closed until the spray actuation signal is reset.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Containment Spray actuation relays have retentive memory, which allows relays to be manually reset with an actuation signal still present. So even though containment pressure remains above the Containment Spray actuation setpoint of 15 psig, the actuation signal can be reset.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RPS Logics Safeguards Actuation Signals (221057, Rev 23) | LO: CSPRAYE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Spray]], [[RPS/SSPS]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam: [[2016 NRC Written Exam]]
