---
title: "2014 Q25 — EOP-FRTS-1 RCP Start Strategy at SI Termination Criteria"
category: exams
status: draft
aliases:
  - 2014 Q25
  - 2014-Q25
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q25 — EOP-FRTS-1 RCP Start Strategy at SI Termination Criteria</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">00WE08 EA2.2 (RO 3.5 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Operators are performing actions in FRTS-1, Response to Imminent Pressurized Thermal Shock.<br>
- When performing the SI Termination Criteria step, the following conditions are present:<br>
&nbsp;&nbsp;- RCS subcooling is 20°F.<br>
&nbsp;&nbsp;- All RCPs are stopped.<br>
&nbsp;&nbsp;- RVLIS Full Range is 99%.<br><br>
Which of the following describes the RCP start strategy, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Do NOT start a RCP because subcooling is not adequate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Do NOT start a RCP because the Reactor Pressure Vessel contains voids.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Start a single RCP in ANY loop regardless of SG NR level to prevent thermal creep failure of SG U-tubes.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Start a single RCP ONLY in a loop which has SG NR level &gt;9% to mix cold incoming ECCS water and the warm reactor coolant water.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> FRTS Step 9 looks at subcooling of the RCS along with adequate vessel level to determine if a RCP is required, and if one can be started. The initial criteria are &gt;50°F subcooling, and adequate vessel level as indicated by RVLIS. With less than 50°F subcooling, go straight to RCP start step, which requires all RCPs stopped and subcooling is &gt;0°F. Then start the RCP IAW SO.RC-1, which has additional starting restrictions, one of which is 9% SG NR level. As per the bases document, the reason for starting a RCP under these conditions is to mix cold ECCS flow with warm RCS water.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Subcooling of 20°F is &gt;0°F, which is the criterion at the RCP start step; subcooling is adequate to start a RCP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> RVLIS Full Range is 99%, indicating adequate vessel level; the RPV does not contain voids.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> A RCP is not started in ANY loop regardless of SG NR level — SO.RC-1 requires the selected loop to have SG NR level &gt;9%.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Response to Imminent Pressurized Thermal Shock (EOP-FRTS-1, Bases Doc p. 12-13, Rev 25); S2.OP-SO.RC-0001 | LO: FRTS00E002 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCPs]], [[RVLIS]], [[Steam Generator & Blowdown]]
- Related procedures: [[S2.OP-SO.RC-0001 — Reactor Coolant Pump Operation]]
- Related EOPs: [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]]
- Related exam: [[2014 NRC Written Exam]]
