---
title: "2014 Q35 — Unexpected Overhead Alarm During a LOCA"
category: exams
status: draft
aliases:
  - 2014 Q35
  - 2014-Q35
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q35 — Unexpected Overhead Alarm During a LOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">006000 2.4.46 (RO 4.2 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 experienced a LOCA while operating at 100% power.<br>
- A Rx trip and SI initiation were successful.<br><br>
During the response to the LOCA in the EOP network, which of the following overhead alarms would be UNEXPECTED if it were to occur?<br><br>
Assume containment pressure peaks at 10 psig during the event.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> D-41, BIT DISCH PRESS HI.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> C-12, 22 CFCU AIRFLO TRBL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> C-10, CNTMT SUMP OVERFLO</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> D-48, SUBCLG CH B MARGIN LO</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> OHA D-41 would NOT be expected, setpoint is 2610 psig, and charging pump discharge pressure would be much less than that, above the RCS pressure which would be lower due to the LOCA.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> OHA C-12 is expected whenever the CFCU is in slow speed, which it would be for SI initiation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C-10 would be expected as the containment sump would fill after the Phase A isolated containment and the leak filled up the sump.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> With a peak cont press of 10 psig, the LOCA will definitely lose subcooling, and alarm is at 10°F margin to saturation — so D-48 is expected.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Overhead Annunciator Window C (S2.OP-AR.ZZ-0003, Rev 17); Overhead Annunciator Window D (S2.OP-AR.ZZ-0004, Rev 26) | LO: ECCS00E008 | Source: New | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[CFCUs]]
- Related procedures: [[S2.OP-AR.ZZ-0003 — Overhead Annunciators Window C]], [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]]
- Related exam: [[2014 NRC Written Exam]]
