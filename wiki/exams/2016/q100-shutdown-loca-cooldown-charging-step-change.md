---
title: "2016 Q100 — Unexplained Charging Step Change During Mode 3 Cooldown"
category: exams
status: verified
aliases:
  - 2016 Q100
  - 2016-Q100
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q100 — Unexplained Charging Step Change During Mode 3 Cooldown</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001G2.4.9 2.4.9 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
Given the following conditions:<br><br>
- Unit 2 is in MODE 3, performing a normal cooldown/depressurization going to Cold Shutdown IAW S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown.<br>
- RCS pressure is 870 psig.<br>
- RCS Tcs are 395 deg.<br>
- PZR level is being maintained stable by adjusting charging flow during the cooldown.<br>
- Charging flow is 79 gpm.<br>
- The 45 gpm orifice is in service.<br><br>
A step change of 10 gpm has just been performed on charging flow (from initial value of 79 gpm) to maintain PZR level stable, and is determined NOT to be associated with the cooldown in progress.<br><br>
Which of the following describes an acceptable procedure progression, and the outcome of using the procedure(s)?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Enter S2.OP-AB.LOCA-0001, Shutdown LOCA. Isolate letdown, adjust charging flow, go to Section 4.0.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Enter S2.OP-AB.RC-0001, Reactor Coolant System Leak, perform an RCS inventory balance, attempt to identify source of leak.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Enter S2.OP-AB.RC-0001, Reactor Coolant System Leak, transition to AB.LOCA if leakrate is determined to be > normal charging system makeup capacity.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Enter S2.OP-AB.LOCA-0001, Shutdown LOCA. Isolate letdown, re-align charging pump suction to RWST, isolate containment penetrations and continue in AB.LOCA-1.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.43.b(5) The 79 gpm charging flow given in the stem to start, + the 10 gpm step, = 89. The stem states that a 45 gpm orifice is in service. The first thing to do in AB.LOCA is isolate letdown. This will remove 45 gpm from the required charging flow necessary to maintain PZR level stable, so step 3.3 (asking if PZR level can be maintained stable or rising) will be YES. Adequate subcooling is available, and with charging flow less than 100 gpm at 3.13, GO TO Section 4.0. While technically acceptable to go to AB.RC-1 first, it will ask questions and establish that you are in MODE 3 with accumulators isolated, which they will be since it was done when pressure lowered to <1000 psig in IOP-6, step 5.1.31.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> While technically acceptable to go to AB.RC-1 first, it will ask questions and establish that you are in MODE 3 with accumulators isolated, which they will be since it was done when pressure lowered to <1000 psig in IOP-6, step 5.1.31.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Source explanation does not separately address — see correct-answer block above</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Shutdown LOCA (S2.OP-AB.LOCA-1, Rev 8) | LO: ABLOCAE007 | Source: Facility Exam Bank | Cognitive: Application | Modification: Direct From Source</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[RCS]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related exam: [[2016 NRC Written Exam]]
