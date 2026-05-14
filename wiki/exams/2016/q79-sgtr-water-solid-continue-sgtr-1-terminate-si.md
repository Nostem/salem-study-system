---
title: "2016 Q79 — SGTR with Ruptured SG Going Water Solid Before SI Termination"
category: exams
status: verified
aliases:
  - 2016 Q79
  - 2016-Q79
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q79 — SGTR — Ruptured SG goes water solid before SI terminated</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000037 AA2.14 (SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br>
- Control room operators are responding to a Steam Generator tube rupture IAW 2-EOP-SGTR-1, Steam Generator Tube Rupture.<br>
- The ruptured SG has been identified and isolated.<br>
- All RCPs are in service.<br>
- The RCS has been cooled down to Target Temperature, and depressurized to restore inventory.<br>
- Before SI can be terminated, the ruptured SG goes water solid.<br>
<br>
Which of the following identifies how the CRS should proceed, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Continue in SGTR-1, Steam Generator Tube Rupture, and terminate SI and establish normal charging / letdown, to ensure primary to secondary leakage is stopped.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Continue in SGTR-1, Steam Generator Tube Rupture, and stop all but 23 RCP to minimize heat input to the RCS and prevent having to use a PORV to subsequently depressurize the RCS.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Enter EOP-FRHS-3, Response to SG High Level, with SG NR level >92%, to minimize spread of secondary contamination and establish SGBD to lower SG level.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Enter EOP-FRHS-3, Response to SG High Level, with SG NR level >92%, and dispatch an operator to isolate ruptured SG MS10 if it fails open due to water relief.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.43.b(5) FRHS-3 is a Yellow Path FRP, and may be entered at the CRS's discretion, which makes the transition to FRHS-3 distracters plausible. Additionally, FRHS-3 does establish SGBD to lower affected SG level, but only after a check for SGTR has been performed, which would kick out (or back to in this case) to the SGTR series procedure in effect. (Step 10.7 of FRHS-3) FRHS-3 does not take action to minimize the spread of secondary contamination, as that is addressed in the SGTR series. FRHS-3 only has affected SG MS10 set to 1045 psig, not manual shut, and it would have already been set during either AB SG or SGTR-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Source explanation does not separately address — see correct-answer block above (the procedure-in-effect is SGTR-1; SI termination is the directed action to stop primary-to-secondary leakage).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> FRHS-3 does establish SGBD to lower affected SG level, but only after a check for SGTR has been performed, which would kick out (or back to in this case) to the SGTR series procedure in effect. (Step 10.7 of FRHS-3) FRHS-3 does not take action to minimize the spread of secondary contamination, as that is addressed in the SGTR series.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> FRHS-3 only has affected SG MS10 set to 1045 psig, not manual shut, and it would have already been set during either AB SG or SGTR-1.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-SGTR-1 Steam Generator Tube Rupture (rev 30), 2-EOP-FRHS-2 Response to Steam Generator High Level (rev 30), 2-EOP-SGTR-2 Post SGTR Cooldown (rev 30) | LO: SGTR01E007 | Source: Facility Exam Bank (45725) — Editorially Modified | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]], [[ECCS]]
- Related EOPs: [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-SGTR-2 — Post SGTR Cooldown]], [[EOP-FRHS-3 — Response to Steam Generator High Level]]
- Related abnormals: [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related exam: [[2016 NRC Written Exam]]
