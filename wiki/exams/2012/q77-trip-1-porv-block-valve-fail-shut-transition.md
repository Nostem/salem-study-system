---
title: "2012 Q77 — TRIP-1 PORV / Block Valve Fail Shut Transition"
category: exams
status: draft
aliases:
  - 2012 Q77
  - 2012-Q77
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q77 — TRIP-1 PORV / Block Valve Fail Shut Transition</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.1.20 (RO 4.6 / SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 was operating at 100% power, EOL.<br>
- A 70 gpm RCS leak in containment was identified.<br>
- Operators tripped the Rx and initiated a Safety Injection IAW S1.OP-AB.RC-0001, Reactor Coolant System Leak.<br>
- While performing EOP-TRIP-1, Rx Trip or Safety Injection, Step 23, PZR PORV STATUS, the RO reports that PZR PORV 2PR1 indicates open.<br>
- The RO reports 2PR1 will not manually shut.<br>
- The RO reports that 2PR6 PZR PORV Block Valve will not shut.<br><br>
Which of the following identifies how the CRS should proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Continue in TRIP-1. The combined size of the PZR PORV and RCS leaks will allow a transition to TRIP-3, Safety Injection Termination.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Continue in TRIP-1. A transition to LOCA-1, Loss of Reactor Coolant will be made based on rising containment radiation monitors.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Transition to LOCA-1. A transition to TRIP-3 will be made after PZR PORV status is checked again in LOCA-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Transition to LOCA-1. SI Termination criteria cannot be met with either PORV not fully shut.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> A 70 gpm leak would require SI as stated in the stem, but charging pump flow would be able to maintain both PZR level and RCS pressure. If a PORV is open in TRIP-1 and it or its block valve cannot be shut, a transition is made to LOCA-1 because the EOP doesn't know how big the PORV leak is. Once in LOCA-1, there are steps redundant to those performed in TRIP-1 to attempt to close the PORV or its block valve, then it continues(there is no transition to another procedure based on PORV/block valve status.) Immediately after the PORV Status step in LOCA-1, SI Flow Reduction criteria are checked. All conditions should be met which are: Subcooling &gt;0°F, AFW flow/Adequate SG NR level, RCS pressure stable or rising, PZR level &gt;11%.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because while a transition WILL be made to TRIP-3, it is not made in TRIP-1, it is made in LOCA-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because while a transition to LOCA-1 might be made based on rising containment radiation levels, the transition must be made now.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because the small size of the RCS leak combined with the small size of the PORV opening(as shown by normal RCS pressure), SI termination criteria can be met.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 1-EOP-TRIP-1 (Rev 27), Rx Trip or Safety Injection; 1-EOP-LOCA-1 (Rev 25), Loss of Reactor Coolant | LO: TRP001E009 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-TRIP-3 — SI Termination]]
- Related exam: [[2012 NRC Written Exam]]
