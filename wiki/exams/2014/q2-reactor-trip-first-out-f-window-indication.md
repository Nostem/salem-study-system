---
title: "2014 Q2 — Reactor Trip First-Out F Window Indication"
category: exams
status: draft
aliases:
  - 2014 Q2
  - 2014-Q2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q2 — Reactor Trip First-Out F Window Indication</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">007 EA2.05 (RO 3.7 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 was responding to a SGFP trip from 100% power at EOL.<br>
- 22 SG NR level reached 16% and continued to drop.<br>
- IAW S2.OP-AB.CN-0001, Main Feedwater / Condensate System Abnormality, the CRS directed the RO to trip the Rx.<br>
- The RO turned the Rx Trip Handle on 2CC2 and performed the immediate actions of EOP-TRIP-1.<br><br>
When reporting his review of the OHA's prior to the first shift brief in the EOP's, the RO reports the following "F" Window alarms are locked in:<br><br>
F-3&nbsp;&nbsp;&nbsp;21 SG LVL LO-LO<br>
F-11&nbsp;&nbsp;22 SG LVL LO-LO<br>
F-19&nbsp;&nbsp;23 SG LVL LO-LO<br>
F-27&nbsp;&nbsp;24 SG LVL LO-LO<br>
F-36&nbsp;&nbsp;TRB TRIP &amp; P-9<br>
F-44&nbsp;&nbsp;MAN RX TRIP INITIATED<br><br>
The F-11 OHA is red, while all the others are white.<br><br>
Which of the following describes the information provided by the "F" OHA Window Boxes?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The first Rx trip signal was LO-LO SG NR level. An ATWT has occurred.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The first Rx trip signal was the manual Rx trip. The F-36 window indicates the Main Turb failed to automatically trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The first Rx trip signal was the manual Rx trip. The red box only indicates the first automatically generated Reactor Protection System trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The first Rx trip signal was LO-LO SG NR level. Only a review of the Sequence of Events Recorder can determine whether or not an ATWT has occurred.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The "F" windows have dual backlights, red and white. The first signal to be generated to trip the Rx is locked in RED, and can only be reset with a keyswitch and SM permission. In the above condition, the time it took to order and carry out the manual Rx trip was sufficient to allow SG NR level to lower past the auto trip setpoint of 14%. Since a manual trip was ordered but an auto trip occurred, the SER must be reviewed quickly to determine which signal was sent to the RPS system first: a manual trip or auto trip. This information is provided on a computer on Control Console 2CC1. D is more correct because the SER must be reviewed to determine if the manual trip was initiated before the auto trip occurred.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> An ATWT may or may not have occurred — the RED box on F-11 indicates an auto trip signal (Lo-Lo SG level) was generated first, but it cannot be determined from the OHA windows alone whether the auto trip actually occurred before/after the manual trip; the SER must be reviewed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect because the RED box indicates an auto trip occurred before the manual trip, while the F-36 does indicate the turbine tripped before the Rx (turbine did trip).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect because of B above AND because the RED box is the first TRIP signal, not the first AUTO TRIP signal (the second part would be correct if it was thought a manual trip occurred first).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ-0006 (Rev 16); Overhead Annunciator System NOS05ANN00-06 (p 41, Rev 6) | LO: OHA000E008 | Source: (bank) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Annunciators]], [[RPS/SSPS]], [[Steam Generator & Blowdown]], [[Feed & Condensate]]
- Related procedures: [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[AB.CN-0001 — Condensate System Abnormality]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2014 NRC Written Exam]]
