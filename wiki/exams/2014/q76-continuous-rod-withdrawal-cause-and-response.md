---
title: "2014 Q76 — Outward Rod Motion Cause and Crew Response"
category: exams
status: draft
aliases:
  - 2014 Q76
  - 2014-Q76
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q76 — Outward Rod Motion Cause and Crew Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000001A205 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is operating at 85% power.<br>
- Control Bank D rods are in auto at 180 steps withdrawn.<br>
- AFD is -1.0 with a Target AFD of -1.5.<br>
- A power reduction from 100% to 85% was completed 24 hours ago when 21 Condensate Pump tripped.<br><br>
Rods begin stepping out at 8 spm.<br>
Tavg is below program and rising slowly.<br>
PZR spray demand has lowered and is now rising slowly.<br><br>
Of the following, which correctly identifies what is causing these indications and how should the crew respond?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> A small steam leak has developed. Enter S1.OP-AB.STM-0001 Excessive Steam Flow, place rods in manual to limit the power rise, initiate actions to locate the leak.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> A Xenon transient is occurring. Leave rods in auto to control the oscillation, while manually diluting to dampen oscillation IAW S1.OP-IO.ZZ-0004, Attachment 1, Dampening Xenon Oscillations.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The 1CV185, Makeup to Charging Pump Suction Valve has opened. Enter S1.OP-AB.ROD-0003, Continuous Rod Motion, place control rods in manual, and terminate the boration.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PRNI 1N44 has failed low. Enter S1.OP-AB.NIS-0001, Nuclear Instrumentation Malfunction, place control rods in manual, and remove the failed channel from service.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> The indications given in the stem reflect outward rod movement caused by an unwanted boration of the RCS. The boration would initially cause a lowering of RCS temp/pressure, which would be corrected as rods withdrew, hence the rising demand on PZR spray as pressure rises and Tavg being below program and rising. The CV185 opening would cause a boration of the RCS to occur.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A steam leak would also cause these indications, but control rods would not be placed in manual.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> A Xenon transient large enough to cause outward rod movement would be indicated by a large change in AFD from normal, as shown in IOP-4 Attachment 1. With conditions in stem of normal AFD, the xenon oscillation is not occurring, though the action is correct if it were.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The PRNI failing low would cause a short duration rod withdrawal (during the time it is failing), but the OverPower Rod Block at 109% on 1/4 PRNI>109% power would prevent rod withdrawal, and the indications in stem also don't support something in which only outward rod motion has occurred.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.ROD-0003 (Rev 19); S1.OP-IO.ZZ-0004 (Rev 58, p 27) | LO: ABROD3E002 | Source: New | Cognitive: Application | K/A: 000001A205 (SRO 4.6) — Continuous Rod Withdrawal</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[CVCS]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[AB.STM-0001 — Excessive Steam Flow]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related exam: [[2014 NRC Written Exam]]
