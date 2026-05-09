---
title: "2016 Q51 — 24BF19 fails open at 35% — FW Isolation trips both SGFPs but no AFW auto-start (35% > 9%)"
category: exams
status: draft
aliases:
  - 2016 Q51
  - 2016-Q51
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q51 — 24BF19 fails open at 35% — FW Isolation trips both SGFPs but no AFW auto-start (35% > 9%)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">059000 A2.01 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br><br>
- Unit 2 is at 35% power during a plant shutdown performed IAW S2.OP-IO.ZZ-0004, Power Operation.<br>
- 21 SGFP is manually tripped as directed by S2.OP-SO.CN-0002, Steam Generator Feed Pump Operation.<br>
- 24BF19 fails open, and 24 SG NR level rises and remains >67%.<br><br>
Which of the following describes the effect of this failure, and how will the crew respond?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> NO AFW pumps start immediately when 22 SGFP trips. If total AFW flow is &lt;22E4 lbm/hr when checked in TRIP-2, the crew will transition to FRHS-1. FRHS-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> NO AFW pumps start immediately when 22 SGFP trips. If total AFW flow is &lt;22E4 lbm/hr when checked in TRIP-2, the crew will start AFW pumps to establish at least 22E4 lbm/hr AFW flow. Flow</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ONLY 21 and 22 AFW Pumps automatically start when 22 SGFP trips. If total AFW flow is &lt;22E4 lbm/hr when checked in TRIP-2, the crew will transition to FRHS-1. FRHS-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ONLY 21 and 22 AFW Pumps automatically start when 22 SGFP trips. If total AFW flow is &lt;22E4 lbm/hr when checked in TRIP-2, the crew will start AFW pumps to establish at least 22E4 lbm/hr AFW flow. Flow</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(4) The high SG NR level in one SG initiates Feedwater Isolation. This trips both SGFPs. Normally, a trip of both SGFPs would start the MDAFW pumps ONLY (21 and 22), but this does NOT occur when the SGFP signal is caused by a FW Isolation. With power initially at 35%, SG NR levels will remain above the AFW pump auto start level of 9%, so NO AFW pumps will start IMMEDIATELY, they will ALL start when SGNR levels are &lt;9%. If levels did not shrink low enough, then when asked in TRIP-2 step 3 for AFW flow >22E4 lbm/hr, the NO path has operators start 21-23 AFW pumps as necessary to establish >22E4th. The FRHS transition is plausible because CFSTs would have become active after the transition out of TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (the NO path has operators start 21-23 AFW pumps as necessary to establish >22E4th).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above (Normally, a trip of both SGFPs would start the MDAFW pumps ONLY (21 and 22), but this does NOT occur when the SGFP signal is caused by a FW Isolation).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Source explanation does not separately address — see correct-answer block above (this does NOT occur when the SGFP signal is caused by a FW Isolation).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Fluency List — NOS05FLUNCY-09, p14 (Rev 9); Reactor Trip Response — 2-EOP-TRIP-2, Sh 1 (Rev 30) | LO: CN&FDWE006 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[AFW]], [[SGs]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]], [[S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation]]
- Related exam: [[2016 NRC Written Exam]]
