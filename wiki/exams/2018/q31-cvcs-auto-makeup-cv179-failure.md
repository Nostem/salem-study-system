---
title: "2018 Q31 — CVCS Auto Makeup / CV179 Failure"
category: exams
status: draft
reference: no
aliases:
  - 2018 Q31
  - 2018-Q31
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q31 — CVCS Auto Makeup / CV179 Failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">015 NIS-A3.05 (2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is in MODE 3 preparing to do a plant startup<br><br>
At Time 07:00<br>
&bull; An AUTOMATIC RCS Makeup starts<br><br>
At Time 07:01<br>
&bull; 125 VDC power to 2CV179 (PRIMARY WATER FLOW) has been lost<br>
&bull; The Primary Water Flow Deviation Alarm actuates<br><br>
At Time 07:02<br>
&bull; 2CV185 (MAKEUP FLOWPATH) fails to AUTOMATICALLY close<br><br>
Which ONE of the following completes the statements below?<br><br>
The Primary Water Flow Deviation Alarm actuates when primary water flow is greater than a MINIMUM of &plusmn;<span class="blank">_(1)_</span> gpm above the setpoint.<br><br>
The Source Range NI Audible Count Rate indication is expected to <span class="blank">_(2)_</span> as the makeup continues with 2CV179 in its failed position.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">_(1)_</span> 5.0 &nbsp; <span class="blank">_(2)_</span> rise</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">_(1)_</span> 5.0 &nbsp; <span class="blank">_(2)_</span> lower</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">_(1)_</span> 0.8 &nbsp; <span class="blank">_(2)_</span> rise</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">_(1)_</span> 0.8 &nbsp; <span class="blank">_(2)_</span> lower</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> For Part 1 and IAW S2.OP-AR.ZZ-0012, the Primary Water Flow Deviation Alarm actuates when primary water flow is greater than a MINIMUM of &plusmn;5.0 gpm above the setpoint. For Part 2, 2CV179 fails closed. Consequently, actual boron flow into the boric acid blender will be higher than the predetermined setpoint for the auto makeup (based on current RCS Boron concentration). This will cause actual RCS boron concentration to rise since the boron concentration of auto makeup flow is higher than the setpoint for the existing RCS Boron concentration. An increase in actual RCS Boron concentration will insert negative reactivity which will cause the Source Range NI Audible Count Rate indication to lower.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Part 1 is correct. For Part 2, the candidate could incorrectly conclude that 2CV179 fails open. With 2CV179 open during an automatic RCS makeup, actual RCS Boron Concentration will lower. Lowering actual RCS Concentration will add positive reactivity which will cause the Source Range NI Audible Count Rate indication to rise.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> For Part 1, the Boric Acid Flow Deviation actuates when boric acid flow is greater than a MINIMUM of &plusmn;0.8 gpm above the setpoint. Consequently, the candidate could incorrectly conclude that the Primary Water Flow Deviation Alarm actuates when primary water flow is greater than a MINIMUM of &plusmn;0.8 gpm above the setpoint. For Part 2, the candidate could incorrectly conclude that 2CV179 fails open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> For Part 1, the Boric Acid Flow Deviation actuates when boric acid flow is greater than a MINIMUM of &plusmn;0.8 gpm above the setpoint. Part 2 is correct.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05CVCS00-17 (Chemical and Volume Control System) | LO: NOS05CVCS00-17 Obj 11 — Given a CVCS failure, predict the effect on the RCS | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Excore NIs]]
- Related procedures: [[S2.OP-AR.ZZ-0012 — Console Alarm Response]]
- Related exam: [[2018 NRC Written Exam]]
