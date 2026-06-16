---
title: "2012 Q91 — 23TB40 Steam Dump Fails Open in Mode 3"
category: exams
status: draft
aliases:
  - 2012 Q91
  - 2012-Q91
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q91 — 23TB40 Steam Dump Fails Open in Mode 3</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">039000A204 / A2.04 (RO 3.4 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is stable in MODE 3 at NOT, NOP, IAW S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load.<br>
- Rod Control is energized.<br>
- 23 charging pump is in service.<br>
- 21-24MS10 Atmospheric Relief Valves are in Auto controlling SG pressures at 990 psig.<br>
- Main Steam Dumps are in MS Pressure Control - Manual with 0% demand.<br>
- 23TB40 fails full open.<br><br>
Which of the following describes the initial plant response to this failure, and how should the CRS proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 23 Main Steamline flow will rise. Direct the PO raise the setpoints of 21-24MS10s IAW S2.OP-IO.ZZ-0003 to restore Tavg to 547°F.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ALL Main Steamline flows will rise. Enter S2.OP-AB.STM-0001, Excessive Steam Flow, and direct the PO to initiate a Main Steamline Isolation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL Main Steamline pressures will lower. Enter S2.OP-AB.STM-0001, Excessive Steam Flow, and direct the PO to depress the Train A and Train B Off &amp; Reset Bypass Tavg pushbuttons on 2CC3.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 23 Main Steamline pressure will lower until 23MS10 is fully shut, then stabilize. Initiate S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown, and direct the PO commence a cooldown at &lt;100°F / hr using the 21-24MS10s.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> The steam dump valves are arranged by condenser, not steamlines. 23TB40 goes into 23 condenser. The distracters with 23 Main steamline flow and pressure will occur, but the actions would not be performed per the IOP in effect. With the Rx trip breakers shut, entry into the Excessive Steam flow AB is correct, and the action in AB.STM with a malfunctioning Steam Dump Valve is to turn off both Trains of Steam Dumps. The action to initiate a MSLI would occur if a Rx trip were required based on power rising uncontrollably.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The steam dump valves are arranged by condenser, not steamlines, so 23 Main Steamline flow rising is incorrect; additionally, raising the 21-24MS10 setpoints per the IOP is not the correct response to a malfunctioning steam dump valve.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> ALL Main Steamline flows rising is incorrect (dumps are arranged by condenser, not steamline); the action to initiate a Main Steamline Isolation would occur only if a Rx trip were required based on power rising uncontrollably.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Initiating S2.OP-IO.ZZ-0006 to commence a cooldown is not the correct response; the failed-open steam dump is a malfunction to be addressed by entering S2.OP-AB.STM-0001 and turning off both Trains of Steam Dumps.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Excessive Steam Flow — S2.OP-AB.STM-0001 (Rev 9) | LO: MSTEAME015 | Source: Facility Exam Bank (Significantly Modified) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Dumps]], [[Main Steam]]
- Related procedures: [[AB.STM-0001 — Excessive Steam Flow]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related exam: [[2012 NRC Written Exam]]
