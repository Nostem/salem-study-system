---
title: "2014 Q44 — All Outward Rod Motion Blocked Condition"
category: exams
status: draft
aliases:
  - 2014 Q44
  - 2014-Q44
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q44 — All Outward Rod Motion Blocked Condition</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">015000K4.02 (RO 3.7 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Under which of the following conditions would ALL outward rod motion be blocked?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Rods are at ARO position.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> PRNI Channel 2N43 fails high.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> RCS loop 21 OT/DT is 64.7°F with an OT/DT trip setpoint of 69°F.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PT-505 Turbine Steamline Inlet Pressure Transmitter fails to 0 psig.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> B is correct because 1/4 PR NI &gt;103% is C-2 and blocks ALL outward rod movement.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because at All Rods Out position (Control Grade Interlock C-11), all AUTO outward rod motion is blocked. This position is set for each fuel cycle, meaning ARO is a number, not a physical stop in the core. (C-11 blocks AUTO outward motion only, not ALL outward motion.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because the control grade interlock C-3 is actuated within 3% of the OT/DT Rx trip setpoint. 64.7/69 = 93.8%. (C-3 is not yet actuated since the loop is &gt;3% below the trip setpoint; and C-3 blocks AUTO rod withdrawal / actuates turbine runback, not ALL outward motion.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because with steamline inlet pressure &lt; 15%, (Permissive P-2) outward auto rod movement is blocked, manual still works.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Licensed Operator Fluency List (NCS05FLUNCY-09, p 11, Rev 9) | LO: FLUNCYE002 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Excore NIs]], [[RPS/SSPS]], [[Main Steam]]
- Related exam: [[2014 NRC Written Exam]]
